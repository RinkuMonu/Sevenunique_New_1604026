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

    // Auto-assign a high-quality cover image if none is currently selected
    if (!coverImageUrl) {
      const titleLower = (output.title || "").toLowerCase();
      let autoCover = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"; // Analytics & tech
      if (titleLower.includes("pay") || titleLower.includes("bank") || titleLower.includes("fintech") || titleLower.includes("upi")) {
        autoCover = "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80";
      } else if (titleLower.includes("ai") || titleLower.includes("agent") || titleLower.includes("model") || titleLower.includes("intelligence")) {
        autoCover = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80";
      } else if (titleLower.includes("security") || titleLower.includes("trust") || titleLower.includes("kyc")) {
        autoCover = "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80";
      } else if (titleLower.includes("cloud") || titleLower.includes("devops") || titleLower.includes("kubernetes")) {
        autoCover = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80";
      }
      setCoverImageUrl(autoCover);
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
        cover_image_url: coverImageUrl || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
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
        description: err?.message || "Please check your network connection and try again.",
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
    <div className="space-y-6 sm:space-y-8 max-w-5xl mx-auto px-4 py-8 pb-24 sm:pb-12 text-slate-900">
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
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 shadow-xs">
          <div className="flex items-center gap-2.5">
            <Info className="w-4 h-4 text-blue-600 shrink-0" />
            <p className="text-xs text-blue-900">
              <span className="font-bold text-blue-950">Unsaved draft recovered.</span>{" "}
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
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors cursor-pointer"
            >
              Restore
            </button>
            <button
              type="button"
              onClick={() => {
                localStorage.removeItem(draftKey);
                setShowDraftBanner(false);
              }}
              className="px-3 py-1.5 rounded-lg text-xs font-medium border border-slate-200 text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}

      {/* Unsaved changes indicator */}
      {isDirty && (
        <div className="flex justify-end">
          <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            ● Unsaved changes in form
          </span>
        </div>
      )}

      {/* Mode Toggle (Manual vs AI) */}
      {!isEditing && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-2.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => setEditorMode("manual")}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                editorMode === "manual"
                  ? "bg-[#f4622a] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              <PenTool className="w-3.5 h-3.5" />
              Write Manually
            </button>
            <button
              type="button"
              onClick={() => setEditorMode("ai")}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                editorMode === "ai"
                  ? "bg-[#f4622a] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              Generate with AI
            </button>
          </div>

          <span className="text-[11px] text-slate-500 hidden sm:inline px-3">
            {editorMode === "ai"
              ? "AI drafts complete structured post into editor for you to review."
              : "Rich text editor for manual drafting and formatting."}
          </span>
        </div>
      )}

      {/* AI Assistant Section */}
      {editorMode === "ai" && !isEditing && (
        <AIGeneratorPanel onGenerated={handleAiGenerated} disabled={isSubmitting} />
      )}

      {/* Desktop Sticky Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-3.5 sm:p-4 rounded-2xl border border-slate-200 bg-white/95 sticky top-4 z-20 backdrop-blur-md shadow-xs">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/blog"
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition"
            title="Back to Blog List"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
            {isEditing ? "Editing Post" : "Draft Editor"}
          </span>
          {initialData?.status && (
            <span
              className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded-full font-semibold ${
                initialData.status === "published"
                  ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                  : "bg-amber-50 text-amber-700 border border-amber-200"
              }`}
            >
              {initialData.status}
            </span>
          )}
          {source && source !== "manual" && (
            <span className="hidden sm:inline-flex items-center gap-1 text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200 font-semibold">
              <Sparkles className="w-2.5 h-2.5 text-yellow-500" />
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
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-rose-600 hover:text-rose-700 hover:bg-rose-50 border border-rose-200 transition-colors disabled:opacity-50 cursor-pointer"
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
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition-colors disabled:opacity-50 cursor-pointer"
          >
            {isSubmitting ? (
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <Save className="w-3.5 h-3.5 text-amber-600" />
            )}
            Save as Draft
          </button>

          <button
            type="button"
            onClick={() => handleSave("published")}
            disabled={isSubmitting || isDeleting}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl text-xs font-semibold bg-[#f4622a] hover:bg-[#e0531e] text-white shadow-sm transition-all disabled:opacity-50 cursor-pointer"
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
              <label className="block text-xs font-bold text-slate-700">
                Post Title <span className="text-rose-500">*</span>
              </label>
              <span className="text-[11px] font-mono text-slate-400">
                {title.length} characters
              </span>
            </div>
            <input
              type="text"
              placeholder="e.g. How Smart PayIn and Instant Payouts Accelerate Fintech Scale"
              value={title}
              onChange={handleTitleChange}
              className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-base sm:text-lg font-bold placeholder-slate-400 focus:outline-none focus:border-[#f4622a] focus:ring-1 focus:ring-[#f4622a] transition-all shadow-xs"
            />
          </div>

          {/* Slug */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-bold text-slate-700">
                URL Slug <span className="text-rose-500">*</span>
              </label>
              <button
                type="button"
                onClick={() => setIsSlugCustomized(!isSlugCustomized)}
                className="text-xs text-[#f4622a] hover:underline flex items-center gap-1 transition-colors cursor-pointer font-medium"
              >
                {isSlugCustomized ? (
                  <>
                    <Lock className="w-3 h-3" />
                    Locked Custom Slug
                  </>
                ) : (
                  <>
                    <Unlock className="w-3 h-3 text-amber-500" />
                    Auto-Generating Slug
                  </>
                )}
              </button>
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-xs text-slate-400 font-mono select-none">
                /blog/
              </span>
              <input
                type="text"
                placeholder="how-smart-payin-and-instant-payouts-scale"
                value={slug}
                onChange={(e) => {
                  setIsSlugCustomized(true);
                  setSlug(e.target.value);
                  setIsDirty(true);
                }}
                className="w-full pl-16 pr-4 py-2 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-900 font-mono placeholder-slate-400 focus:outline-none focus:border-[#f4622a] focus:ring-1 focus:ring-[#f4622a] transition-all shadow-xs"
              />
            </div>
          </div>

          {/* Rich Content Editor (Tiptap) */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Post Content <span className="text-rose-500">*</span>
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
          <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 bg-white space-y-2.5 shadow-xs">
            <label className="block text-xs font-bold text-slate-700">
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
          <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 bg-white space-y-2 shadow-xs">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-bold text-slate-700">
                Meta Description (SEO)
              </label>
              <span
                className={`text-[11px] font-mono font-semibold ${
                  metaDescription.length >= 120 && metaDescription.length <= 160
                    ? "text-emerald-600"
                    : metaDescription.length > 160
                    ? "text-rose-600"
                    : "text-slate-400"
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
              className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#f4622a] focus:ring-1 focus:ring-[#f4622a] focus:bg-white transition-all resize-none"
            />
          </div>

          {/* Tags */}
          <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 bg-white space-y-2 shadow-xs">
            <label className="block text-xs font-bold text-slate-700">
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
          <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 bg-white space-y-2 shadow-xs">
            <label className="block text-xs font-bold text-slate-700">
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
              className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#f4622a] focus:ring-1 focus:ring-[#f4622a] focus:bg-white transition-all"
            />
            <p className="text-[11px] text-slate-500 flex items-center gap-1.5 mt-1">
              <Info className="w-3 h-3 text-[#f4622a] shrink-0" />
              Public byline displayed to readers on the article page.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Bottom Action Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 p-3 bg-white/95 border-t border-slate-200 backdrop-blur-md z-40 flex items-center justify-between gap-2 shadow-xl">
        <button
          type="button"
          onClick={() => handleSave("draft")}
          disabled={isSubmitting || isDeleting}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition-colors disabled:opacity-50"
        >
          {isSubmitting ? (
            <Loader2 className="w-3.5 h-3.5 animate-spin" />
          ) : (
            <Save className="w-3.5 h-3.5 text-amber-600" />
          )}
          Save Draft
        </button>

        <button
          type="button"
          onClick={() => handleSave("published")}
          disabled={isSubmitting || isDeleting}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold bg-[#f4622a] hover:bg-[#e0531e] text-white shadow-xs transition-all disabled:opacity-50"
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
