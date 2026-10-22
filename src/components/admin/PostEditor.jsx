"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import dynamic from "next/dynamic";
import { toast } from "sonner";
import {
  Save,
  Send,
  Trash2,
  Loader2,
  Lock,
  Unlock,
  Sparkles,
  PenTool,
  Info,
  ArrowLeft,
  Eye,
  CheckCircle2,
} from "lucide-react";
import { ImageUpload } from "./ImageUpload";
import { TagInput } from "./TagInput";
import { AIGeneratorPanel } from "./AIGeneratorPanel";
import { ConfirmDialog } from "./ConfirmDialog";

const TiptapEditor = dynamic(
  () => import("./TiptapEditor").then((mod) => mod.TiptapEditor),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-[350px] w-full rounded-xl border border-gray-800 bg-gray-900/60 p-6 flex flex-col items-center justify-center text-gray-500 animate-pulse">
        <Loader2 className="w-6 h-6 animate-spin text-purple-500 mb-2" />
        <span className="text-xs font-medium">Loading rich text editor...</span>
      </div>
    ),
  }
);

function slugify(text) {
  return (text || "")
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getDraftKey(postId) {
  return `blog-draft-${postId ?? "new"}`;
}

export function PostEditor({ initialData = null }) {
  const router = useRouter();
  const isEditing = Boolean(initialData?.id);
  const draftKey = getDraftKey(initialData?.id);

  // Mode and form states
  const [editorMode, setEditorMode] = useState("manual");
  const [title, setTitle] = useState(initialData?.title || "");
  const [slug, setSlug] = useState(initialData?.slug || "");
  const [content, setContent] = useState(initialData?.content || "");
  const [metaDescription, setMetaDescription] = useState(initialData?.meta_description || "");
  const [coverImageUrl, setCoverImageUrl] = useState(initialData?.cover_image_url || "");
  const [author, setAuthor] = useState(initialData?.author || "SevenUnique Team");
  const [tags, setTags] = useState(initialData?.tags || []);
  const [status, setStatus] = useState(initialData?.status || "draft");
  const [source, setSource] = useState(initialData?.source || "manual");

  // Interaction states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);
  const [isSlugCustomized, setIsSlugCustomized] = useState(Boolean(initialData?.slug));
  const [isAiGenerated, setIsAiGenerated] = useState(
    initialData?.source === "ai" || initialData?.source === "ai-edited"
  );
  const [originalAiContent, setOriginalAiContent] = useState(null);
  const [showDraftBanner, setShowDraftBanner] = useState(false);
  const [isDirty, setIsDirty] = useState(false);

  // Handle automatic slug generation
  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    setIsDirty(true);
    if (!isSlugCustomized) {
      setSlug(slugify(newTitle));
    }
  };

  // Auth check
  useEffect(() => {
    const checkAuth = async () => {
      const { getSupabaseClient } = await import("@/lib/supabase/client");
      const supabase = getSupabaseClient();
      if (!supabase) {
        router.replace("/admin/login");
        return;
      }
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        const local = typeof window !== "undefined" ? localStorage.getItem("sevenunique_admin_session") : null;
        if (!local) {
          router.replace("/admin/login");
          return;
        }
      }
    };
    checkAuth();
  }, [router]);

  // Draft recovery from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(draftKey);
      if (!raw) return;
      const draft = JSON.parse(raw);
      const draftDate = new Date(draft.savedAt);
      const dbDate = initialData?.updated_at ? new Date(initialData.updated_at) : null;

      if (!dbDate || draftDate > dbDate) {
        setShowDraftBanner(true);
      } else {
        localStorage.removeItem(draftKey);
      }
    } catch {
      // ignore
    }
  }, [draftKey, initialData]);

  // Debounced autosave
  useEffect(() => {
    if (!isDirty) return;
    const timer = setTimeout(() => {
      try {
        localStorage.setItem(
          draftKey,
          JSON.stringify({
            savedAt: new Date().toISOString(),
            title,
            slug,
            content,
            meta_description: metaDescription,
          })
        );
      } catch {
        // ignore
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, [isDirty, draftKey, title, slug, content, metaDescription]);

  // Prompt before unload if unsaved edits
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (isDirty && !isSubmitting && !isDeleting) {
        e.preventDefault();
        e.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isDirty, isSubmitting, isDeleting]);

  // Callback when AI generation finishes
  const handleAiGenerated = (output) => {
    setTitle(output.title || "");
    setSlug(slugify(output.title || ""));
    setMetaDescription(output.metaDescription || "");
    setContent(output.content || "");
    if (output.suggestedTags && Array.isArray(output.suggestedTags)) {
      setTags(output.suggestedTags);
    }
    setSource("ai");
    setStatus("draft");
    setIsAiGenerated(true);
    setOriginalAiContent(output.content || "");
    setIsSlugCustomized(false);
    setIsDirty(true);
    setEditorMode("manual");
  };

  // Submit / Save handler
  const handleSave = async (targetStatus) => {
    if (isSubmitting || isDeleting) return;

    if (!title.trim()) {
      toast.error("Title is required", {
        description: "Please enter a compelling headline for your article.",
      });
      return;
    }

    if (!slug.trim()) {
      toast.error("Slug is required", {
        description: "Please specify a URL slug for search engines.",
      });
      return;
    }

    if (!content.trim()) {
      toast.error("Content is required", {
        description: "Please write or generate article body content before saving.",
      });
      return;
    }

    setIsSubmitting(true);
    const actionLabel = targetStatus === "published" ? "Publishing article" : "Saving draft";
    const toastId = toast.loading(`${actionLabel}...`, {
      description: "Persisting changes to database.",
    });

    try {
      let finalSource = source;
      if (isAiGenerated) {
        if (originalAiContent && content !== originalAiContent) {
          finalSource = "ai-edited";
        } else if (!source || source === "manual") {
          finalSource = "ai";
        }
      }

      const payload = {
        title: title.trim(),
        slug: slug.trim(),
        content,
        meta_description: metaDescription.trim(),
        cover_image_url: coverImageUrl,
        author: author.trim() || "SevenUnique Team",
        tags,
        status: targetStatus,
        source: finalSource,
      };

      const url = "/api/admin/blog";
      const method = isEditing ? "PUT" : "POST";
      const body = isEditing ? { id: initialData.id, ...payload } : payload;

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to persist article");
      }

      toast.success(
        targetStatus === "published"
          ? "Post published successfully!"
          : "Draft saved successfully!",
        {
          id: toastId,
          description:
            targetStatus === "published"
              ? "Your article is now live on the public blog."
              : "Your changes have been saved to the database.",
        }
      );

      try {
        localStorage.removeItem(draftKey);
      } catch {
        // ignore
      }

      setIsDirty(false);
      setTimeout(() => {
        router.push("/admin/blog");
        router.refresh();
      }, 1000);
    } catch (err) {
      toast.error("Failed to save post", {
        id: toastId,
        description: err?.message || "Please check your network and Supabase configuration.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Delete handler
  const handleConfirmDelete = async () => {
    if (!initialData?.id || isDeleting) return;

    setIsDeleting(true);
    const toastId = toast.loading("Deleting post...", {
      description: "Removing post and metadata from storage.",
    });

    try {
      const res = await fetch(`/api/admin/blog?id=${initialData.id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to delete post");

      toast.success("Post deleted successfully", {
        id: toastId,
        description: "The article has been permanently removed.",
      });

      setIsConfirmDeleteOpen(false);
      router.push("/admin/blog");
      router.refresh();
    } catch (err) {
      toast.error("Error deleting post", {
        id: toastId,
        description: err?.message || "Failed to delete article.",
      });
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="space-y-6 sm:space-y-8 max-w-5xl mx-auto px-4 py-8 pb-24 sm:pb-12 text-gray-100">
      {/* Delete Confirmation Modal */}
      <ConfirmDialog
        isOpen={isConfirmDeleteOpen}
        title="Delete Blog Post?"
        description={`Are you sure you want to delete "${
          title || "this post"
        }"? This action cannot be undone.`}
        confirmLabel="Delete Post"
        cancelLabel="Cancel"
        isDestructive={true}
        isLoading={isDeleting}
        onConfirm={handleConfirmDelete}
        onCancel={() => setIsConfirmDeleteOpen(false)}
      />

      {/* Draft Recovery Banner */}
      {showDraftBanner && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-lg border border-blue-700/50 bg-blue-950/40 px-4 py-3">
          <div className="flex items-center gap-2.5">
            <Info className="w-4 h-4 text-blue-400 shrink-0" />
            <p className="text-xs text-blue-200">
              <span className="font-bold text-white">Unsaved draft recovered.</span>{" "}
              You have a locally autosaved version newer than the last database save.
            </p>
          </div>
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              type="button"
              onClick={() => {
                try {
                  const raw = localStorage.getItem(draftKey);
                  if (!raw) return;
                  const draft = JSON.parse(raw);
                  if (draft.title) setTitle(draft.title);
                  if (draft.slug) setSlug(draft.slug);
                  if (draft.content) setContent(draft.content);
                  if (draft.meta_description) setMetaDescription(draft.meta_description);
                  setIsDirty(true);
                  toast.success("Draft restored into editor.");
                } catch {
                  toast.error("Could not restore draft.");
                }
                setShowDraftBanner(false);
              }}
              className="px-3 py-1.5 rounded-md text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-colors cursor-pointer"
            >
              Restore
            </button>
            <button
              type="button"
              onClick={() => {
                localStorage.removeItem(draftKey);
                setShowDraftBanner(false);
              }}
              className="px-3 py-1.5 rounded-md text-xs font-medium border border-gray-700 text-gray-400 hover:bg-gray-800 transition-colors cursor-pointer"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}

      {/* Unsaved changes indicator */}
      {isDirty && (
        <div className="flex justify-end">
          <span className="text-[11px] font-semibold text-yellow-400 bg-yellow-950/60 px-3 py-1 rounded-full border border-yellow-800/40 animate-pulse">
            ● Unsaved changes in form
          </span>
        </div>
      )}

      {/* Mode Toggle (Manual vs AI) */}
      {!isEditing && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-xl bg-gray-900 border border-gray-800 shadow-sm">
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => setEditorMode("manual")}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                editorMode === "manual"
                  ? "bg-purple-600 text-white shadow-sm"
                  : "text-gray-400 hover:text-white hover:bg-gray-800"
              }`}
            >
              <PenTool className="w-3.5 h-3.5" />
              Write Manually
            </button>
            <button
              type="button"
              onClick={() => setEditorMode("ai")}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                editorMode === "ai"
                  ? "bg-purple-600 text-white shadow-sm"
                  : "text-gray-400 hover:text-white hover:bg-gray-800"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              Generate with AI
            </button>
          </div>

          <span className="text-[11px] text-gray-400 hidden sm:inline px-3">
            {editorMode === "ai"
              ? "AI drafts complete structured post into editor for you to review."
              : "Standard WYSIWYG editor powered by Tiptap."}
          </span>
        </div>
      )}

      {/* AI Assistant Section */}
      {editorMode === "ai" && !isEditing && (
        <AIGeneratorPanel onGenerated={handleAiGenerated} disabled={isSubmitting} />
      )}

      {/* Desktop Sticky Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-3.5 sm:p-4 rounded-xl border border-gray-800 bg-gray-900/95 sticky top-4 z-20 backdrop-blur-md shadow-md">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/blog"
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition"
            title="Back to Blog List"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-300">
            {isEditing ? "Editing Post" : "Draft Editor"}
          </span>
          {initialData?.status && (
            <span
              className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded font-semibold ${
                initialData.status === "published"
                  ? "bg-emerald-950/80 text-emerald-300 border border-emerald-800/60"
                  : "bg-yellow-950/80 text-yellow-300 border border-yellow-800/60"
              }`}
            >
              {initialData.status}
            </span>
          )}
          {source && source !== "manual" && (
            <span className="hidden sm:inline-flex items-center gap-1 text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-purple-950/80 text-purple-300 border border-purple-800/60 font-semibold">
              <Sparkles className="w-2.5 h-2.5 text-yellow-400" />
              {source}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {isEditing && (
            <button
              type="button"
              onClick={() => setIsConfirmDeleteOpen(true)}
              disabled={isSubmitting || isDeleting}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-rose-400 hover:text-rose-300 hover:bg-rose-950/40 border border-rose-900/40 transition-colors disabled:opacity-50 cursor-pointer"
            >
              {isDeleting ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <Trash2 className="w-3.5 h-3.5" />
              )}
              Delete
            </button>
          )}

          <button
            type="button"
            onClick={() => handleSave("draft")}
            disabled={isSubmitting || isDeleting}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gray-800 hover:bg-gray-700 text-gray-200 hover:text-white border border-gray-700 transition-colors disabled:opacity-50 cursor-pointer"
          >
            {isSubmitting ? (
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <Save className="w-3.5 h-3.5 text-yellow-400" />
            )}
            Save as Draft
          </button>

          <button
            type="button"
            onClick={() => handleSave("published")}
            disabled={isSubmitting || isDeleting}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-semibold bg-linear-to-r from-blue-500 via-purple-600 to-indigo-700 hover:from-blue-600 hover:to-indigo-800 text-white shadow-xs transition-all disabled:opacity-50 cursor-pointer"
          >
            {isSubmitting ? (
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <Send className="w-3.5 h-3.5" />
            )}
            Publish Post
          </button>
        </div>
      </div>

      {/* Main Form Fields */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Main Content (Left 2 cols) */}
        <div className="lg:col-span-2 space-y-5">
          {/* Title */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-semibold text-gray-300">
                Post Title <span className="text-rose-400">*</span>
              </label>
              <span className="text-[11px] font-mono text-gray-400">
                {title.length} characters
              </span>
            </div>
            <input
              type="text"
              placeholder="e.g. 10 Proven SEO Strategies for Rapid Local Growth"
              value={title}
              onChange={handleTitleChange}
              className="w-full px-4 py-2.5 rounded-xl bg-gray-900 border border-gray-700 text-white text-base sm:text-lg font-bold placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
            />
          </div>

          {/* Slug */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-semibold text-gray-300">
                URL Slug <span className="text-rose-400">*</span>
              </label>
              <button
                type="button"
                onClick={() => setIsSlugCustomized(!isSlugCustomized)}
                className="text-xs text-purple-400 hover:text-yellow-400 flex items-center gap-1 transition-colors cursor-pointer"
              >
                {isSlugCustomized ? (
                  <>
                    <Lock className="w-3 h-3" />
                    Locked Custom Slug
                  </>
                ) : (
                  <>
                    <Unlock className="w-3 h-3 text-yellow-400" />
                    Auto-Generating Slug
                  </>
                )}
              </button>
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-xs text-gray-400 font-mono select-none">
                /blog/
              </span>
              <input
                type="text"
                placeholder="10-proven-seo-strategies"
                value={slug}
                onChange={(e) => {
                  setIsSlugCustomized(true);
                  setSlug(e.target.value);
                  setIsDirty(true);
                }}
                className="w-full pl-16 pr-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-xs sm:text-sm text-yellow-400 font-mono placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
              />
            </div>
          </div>

          {/* Rich Content Editor (Tiptap) */}
          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1.5">
              Post Content <span className="text-rose-400">*</span>
            </label>
            <TiptapEditor
              content={content}
              onChange={(val) => {
                setContent(val);
                setIsDirty(true);
              }}
            />
          </div>
        </div>

        {/* Sidebar Metadata (Right col) */}
        <div className="space-y-5">
          {/* Cover Image */}
          <div className="p-4 sm:p-5 rounded-xl border border-gray-800 bg-gray-900 space-y-2.5 shadow-sm">
            <label className="block text-xs font-semibold text-gray-300">
              Cover Image
            </label>
            <ImageUpload
              value={coverImageUrl}
              onChange={(val) => {
                setCoverImageUrl(val);
                setIsDirty(true);
              }}
            />
          </div>

          {/* SEO Meta Description */}
          <div className="p-4 sm:p-5 rounded-xl border border-gray-800 bg-gray-900 space-y-2 shadow-sm">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-semibold text-gray-300">
                Meta Description (SEO)
              </label>
              <span
                className={`text-[11px] font-mono font-semibold ${
                  metaDescription.length >= 120 && metaDescription.length <= 160
                    ? "text-emerald-400"
                    : metaDescription.length > 160
                    ? "text-rose-400"
                    : "text-gray-400"
                }`}
              >
                {metaDescription.length}/160
              </span>
            </div>
            <textarea
              rows={3}
              placeholder="Brief summary for search engines (120-160 characters recommended)..."
              value={metaDescription}
              onChange={(e) => {
                setMetaDescription(e.target.value);
                setIsDirty(true);
              }}
              className="w-full px-3.5 py-2 rounded-lg bg-gray-800 border border-gray-700 text-xs sm:text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none"
            />
          </div>

          {/* Tags */}
          <div className="p-4 sm:p-5 rounded-xl border border-gray-800 bg-gray-900 space-y-2 shadow-sm">
            <label className="block text-xs font-semibold text-gray-300">
              Tags &amp; Taxonomy
            </label>
            <TagInput
              tags={tags}
              onChange={(newTags) => {
                setTags(newTags);
                setIsDirty(true);
              }}
            />
          </div>

          {/* Author */}
          <div className="p-4 sm:p-5 rounded-xl border border-gray-800 bg-gray-900 space-y-2 shadow-sm">
            <label className="block text-xs font-semibold text-gray-300">
              Author (Public Byline)
            </label>
            <input
              type="text"
              placeholder="SevenUnique Team"
              value={author}
              onChange={(e) => {
                setAuthor(e.target.value);
                setIsDirty(true);
              }}
              className="w-full px-3.5 py-2 rounded-lg bg-gray-800 border border-gray-700 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
            />
            <p className="text-[11px] text-gray-400 flex items-center gap-1.5 mt-1">
              <Info className="w-3 h-3 text-yellow-400 shrink-0" />
              Public byline displayed to readers on the article page.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Bottom Action Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 p-3 bg-gray-900/95 border-t border-gray-800 backdrop-blur-md z-40 flex items-center justify-between gap-2 shadow-xl">
        <button
          type="button"
          onClick={() => handleSave("draft")}
          disabled={isSubmitting || isDeleting}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold bg-gray-800 hover:bg-gray-700 text-gray-200 border border-gray-700 transition-colors disabled:opacity-50"
        >
          {isSubmitting ? (
            <Loader2 className="w-3.5 h-3.5 animate-spin" />
          ) : (
            <Save className="w-3.5 h-3.5 text-yellow-400" />
          )}
          Save Draft
        </button>

        <button
          type="button"
          onClick={() => handleSave("published")}
          disabled={isSubmitting || isDeleting}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold bg-linear-to-r from-blue-500 via-purple-600 to-indigo-700 hover:from-blue-600 hover:to-indigo-800 text-white shadow-xs transition-all disabled:opacity-50"
        >
          {isSubmitting ? (
            <Loader2 className="w-3.5 h-3.5 animate-spin" />
          ) : (
            <Send className="w-3.5 h-3.5" />
          )}
          Publish
        </button>
      </div>
    </div>
  );
}

export default PostEditor;
