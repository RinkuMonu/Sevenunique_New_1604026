"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  Plus,
  Search,
  Sparkles,
  Edit3,
  Trash2,
  ExternalLink,
  CheckCircle,
  Clock,
  LogOut,
  RefreshCw,
  FileText,
  AlertCircle
} from "lucide-react";

export default function AdminBlogPage() {
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [deletingId, setDeletingId] = useState(null);
  const [error, setError] = useState("");

  const fetchPosts = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/blog");
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to load posts");
      setPosts(data.posts || []);
    } catch (err) {
      setError(err.message || "Failed to fetch posts.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const checkAuthAndFetch = async () => {
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

      fetchPosts();
    };

    checkAuthAndFetch();
  }, [router]);

  const handleLogout = () => {
    document.cookie = "sb-token=; path=/; max-age=0";
    localStorage.removeItem("sevenunique_admin_session");
    router.push("/admin/login");
  };

  const handleDelete = async (id, title) => {
    if (!window.confirm(`Are you sure you want to delete "${title}"?`)) return;

    setDeletingId(id);
    const toastId = toast.loading("Deleting article...");
    try {
      const res = await fetch(`/api/admin/blog?id=${id}`, { method: "DELETE" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to delete");
      setPosts((prev) => prev.filter((p) => p.id !== id));
      toast.success("Article deleted successfully", { id: toastId });
    } catch (err) {
      toast.error(err.message || "Failed to delete article", { id: toastId });
    } finally {
      setDeletingId(null);
    }
  };

  const handleToggleStatus = async (post) => {
    const newStatus = post.status === "published" ? "draft" : "published";
    const toastId = toast.loading(`Updating status to ${newStatus}...`);
    try {
      const res = await fetch("/api/admin/blog", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: post.id, status: newStatus }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to update status");
      setPosts((prev) =>
        prev.map((p) => (p.id === post.id ? { ...p, status: newStatus } : p))
      );
      toast.success(`Article is now ${newStatus === "published" ? "Live" : "Draft"}`, { id: toastId });
    } catch (err) {
      toast.error(err.message || "Failed to update status", { id: toastId });
    }
  };

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title?.toLowerCase().includes(search.toLowerCase()) ||
      post.slug?.toLowerCase().includes(search.toLowerCase()) ||
      (post.tags && post.tags.some((t) => t.toLowerCase().includes(search.toLowerCase())));

    if (statusFilter === "all") return matchesSearch;
    if (statusFilter === "published") return matchesSearch && post.status === "published";
    if (statusFilter === "draft") return matchesSearch && post.status === "draft";
    if (statusFilter === "ai") return matchesSearch && (post.source === "ai" || post.source === "ai-edited");
    return matchesSearch;
  });

  const totalCount = posts.length;
  const publishedCount = posts.filter((p) => p.status === "published").length;
  const draftCount = posts.filter((p) => p.status === "draft").length;
  const aiCount = posts.filter((p) => p.source === "ai" || p.source === "ai-edited").length;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Page Header Bar */}
      <div className="border-b border-slate-200 bg-white/80 backdrop-blur sticky top-0 z-20 px-4 sm:px-6 lg:px-8 py-4 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Articles & Drafts
              </h1>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#f4622a]/10 text-[#f4622a] text-xs font-semibold">
                <Sparkles className="w-3 h-3" />
                Blog Studio
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Manage published articles, editorial drafts, and Groq AI generated content.
            </p>
          </div>

          <div className="flex items-center gap-2.5 self-start sm:self-auto">
            <Link
              href="/blog"
              target="_blank"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition shadow-2xs"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Blog
            </Link>
            <Link
              href="/admin/blog/new"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#f4622a] hover:bg-[#e0531e] text-white text-xs font-bold shadow-xs hover:shadow transition-all"
            >
              <Plus className="w-4 h-4" />
              Write New Post
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* KPI Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div className="bg-white border border-slate-200/80 rounded-2xl p-4 sm:p-5 shadow-xs">
            <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Total Articles</p>
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">{totalCount}</p>
          </div>
          <div className="bg-white border border-slate-200/80 rounded-2xl p-4 sm:p-5 shadow-xs">
            <p className="text-xs text-emerald-600 font-semibold uppercase tracking-wider">Published</p>
            <p className="text-2xl sm:text-3xl font-extrabold text-emerald-600 mt-1">{publishedCount}</p>
          </div>
          <div className="bg-white border border-slate-200/80 rounded-2xl p-4 sm:p-5 shadow-xs">
            <p className="text-xs text-amber-600 font-semibold uppercase tracking-wider">Drafts</p>
            <p className="text-2xl sm:text-3xl font-extrabold text-amber-600 mt-1">{draftCount}</p>
          </div>
          <div className="bg-white border border-slate-200/80 rounded-2xl p-4 sm:p-5 shadow-xs">
            <p className="text-xs text-purple-600 font-semibold uppercase tracking-wider">AI Generated</p>
            <p className="text-2xl sm:text-3xl font-extrabold text-purple-600 mt-1">{aiCount}</p>
          </div>
        </div>

        {/* Error Banner */}
        {error && (
          <div className="mb-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-amber-600" />
              <span>{error} (Ensure Supabase credentials are configured in .env.local)</span>
            </div>
            <button
              onClick={fetchPosts}
              className="underline text-amber-900 font-semibold hover:text-amber-700 cursor-pointer"
            >
              Retry
            </button>
          </div>
        )}

        {/* Filters and Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-xl shadow-xs overflow-x-auto">
            {["all", "published", "draft", "ai"].map((tab) => (
              <button
                key={tab}
                onClick={() => setStatusFilter(tab)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition cursor-pointer ${
                  statusFilter === tab
                    ? "bg-[#f4622a] text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {tab === "ai" ? "AI Sourced" : tab}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search articles..."
                className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#f4622a] focus:ring-1 focus:ring-[#f4622a] transition shadow-xs"
              />
            </div>
            <button
              onClick={fetchPosts}
              title="Refresh"
              className="p-2 rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition cursor-pointer shadow-xs"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            </button>
          </div>
        </div>

        {/* Posts Table / Card List */}
        {loading && posts.length === 0 ? (
          <div className="py-20 text-center">
            <div className="w-8 h-8 border-2 border-[#f4622a]/30 border-t-[#f4622a] rounded-full animate-spin mx-auto mb-3" />
            <p className="text-sm text-slate-500">Loading blog articles...</p>
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="py-16 text-center border border-dashed border-slate-300 rounded-2xl bg-white p-8 shadow-xs">
            <FileText className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h3 className="text-base font-semibold text-slate-900">No articles found</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              {search
                ? `No posts match your search query "${search}".`
                : "Get started by generating your first article using our Groq AI Engine."}
            </p>
            <Link
              href="/admin/blog/new"
              className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-xl bg-[#f4622a] text-white text-xs font-semibold shadow-sm hover:bg-[#e0531e] transition"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Create Article with AI
            </Link>
          </div>
        ) : (
          <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs min-w-[640px]">
                <thead className="bg-slate-50/80 text-slate-500 uppercase tracking-wider text-[11px] font-semibold border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-4">Title & Details</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4">Source</th>
                    <th className="py-3 px-4">Date</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredPosts.map((post) => (
                    <tr
                      key={post.id}
                      className="hover:bg-slate-50/80 transition group"
                    >
                      <td className="py-3.5 px-4">
                        <div className="max-w-md">
                          <Link
                            href={`/admin/blog/${post.id}/edit`}
                            className="font-semibold text-slate-900 hover:text-[#f4622a] transition line-clamp-1 text-sm"
                          >
                            {post.title}
                          </Link>
                          <p className="text-slate-400 font-mono text-[11px] mt-0.5">
                            /{post.slug}
                          </p>
                          {post.tags && post.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1 mt-1.5">
                              {post.tags.slice(0, 3).map((tag, i) => (
                                <span
                                  key={i}
                                  className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[10px] font-medium"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </td>

                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <button
                          onClick={() => handleToggleStatus(post)}
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold transition cursor-pointer ${
                            post.status === "published"
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100"
                              : "bg-amber-50 text-amber-700 border border-amber-200 hover:bg-amber-100"
                          }`}
                        >
                          {post.status === "published" ? (
                            <>
                              <CheckCircle className="w-3 h-3 text-emerald-600" />
                              Live
                            </>
                          ) : (
                            <>
                              <Clock className="w-3 h-3 text-amber-600" />
                              Draft
                            </>
                          )}
                        </button>
                      </td>

                      <td className="py-3.5 px-4 whitespace-nowrap">
                        {post.source === "ai" || post.source === "ai-edited" ? (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 border border-purple-200 text-[10px] font-semibold">
                            <Sparkles className="w-3 h-3 text-yellow-500" />
                            {post.source === "ai-edited" ? "AI + Edited" : "AI"}
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[10px] font-medium">
                            Manual
                          </span>
                        )}
                      </td>

                      <td className="py-3.5 px-4 whitespace-nowrap text-slate-500 font-mono text-[11px]">
                        {post.created_at ? new Date(post.created_at).toLocaleDateString() : "—"}
                      </td>

                      <td className="py-3.5 px-4 whitespace-nowrap text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          {post.status === "published" && (
                            <Link
                              href={`/blog/${post.slug}`}
                              target="_blank"
                              title="View Live Article"
                              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </Link>
                          )}
                          <Link
                            href={`/admin/blog/${post.id}/edit`}
                            title="Edit Article"
                            className="p-1.5 rounded-lg text-slate-400 hover:text-[#f4622a] hover:bg-orange-50 transition"
                          >
                            <Edit3 className="w-4 h-4" />
                          </Link>
                          <button
                            onClick={() => handleDelete(post.id, post.title)}
                            disabled={deletingId === post.id}
                            title="Delete Article"
                            className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition cursor-pointer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
