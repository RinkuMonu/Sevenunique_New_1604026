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
    <div className="min-h-screen bg-[#0d111a] text-gray-200">
      {/* Top Navbar */}
      <header className="border-b border-gray-800/80 bg-[#141a26]/90 backdrop-blur sticky top-0 z-30 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Image
                src="/images/logo-2.png"
                alt="SevenUnique"
                width={150}
                height={40}
                className="object-contain"
                style={{ height: "auto" }}
              />
            </Link>
            <div className="hidden sm:block h-5 w-[1px] bg-gray-700" />
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#f4622a]/15 text-[#f4622a] text-xs font-semibold">
              <Sparkles className="w-3 h-3" />
              Blog Studio
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/blog"
              target="_blank"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-700 text-xs text-gray-300 hover:text-white hover:bg-gray-800 transition"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Blog
            </Link>

            <Link
              href="/admin/blog/new"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#f4622a] hover:bg-[#e0531e] text-white text-xs font-semibold shadow-md shadow-[#f4622a]/20 transition"
            >
              <Plus className="w-4 h-4" />
              Write New Post
            </Link>

            <button
              onClick={handleLogout}
              title="Logout"
              className="p-2 text-gray-400 hover:text-red-400 hover:bg-gray-800/60 rounded-lg transition"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* KPI Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="bg-[#141a26] border border-gray-800/80 rounded-xl p-4">
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Total Articles</p>
            <p className="text-2xl font-bold text-white mt-1">{totalCount}</p>
          </div>
          <div className="bg-[#141a26] border border-gray-800/80 rounded-xl p-4">
            <p className="text-xs text-emerald-400 font-medium uppercase tracking-wider">Published</p>
            <p className="text-2xl font-bold text-white mt-1">{publishedCount}</p>
          </div>
          <div className="bg-[#141a26] border border-gray-800/80 rounded-xl p-4">
            <p className="text-xs text-amber-400 font-medium uppercase tracking-wider">Drafts</p>
            <p className="text-2xl font-bold text-white mt-1">{draftCount}</p>
          </div>
          <div className="bg-[#141a26] border border-gray-800/80 rounded-xl p-4">
            <p className="text-xs text-purple-400 font-medium uppercase tracking-wider">AI Generated</p>
            <p className="text-2xl font-bold text-white mt-1">{aiCount}</p>
          </div>
        </div>

        {/* Error Banner */}
        {error && (
          <div className="mb-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error} (Ensure Supabase credentials are configured in .env.local)</span>
            </div>
            <button
              onClick={fetchPosts}
              className="underline text-white font-medium hover:text-amber-200"
            >
              Retry
            </button>
          </div>
        )}

        {/* Filters and Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-1.5 p-1 bg-[#141a26] border border-gray-800 rounded-xl overflow-x-auto">
            {["all", "published", "draft", "ai"].map((tab) => (
              <button
                key={tab}
                onClick={() => setStatusFilter(tab)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition cursor-pointer ${
                  statusFilter === tab
                    ? "bg-[#f4622a] text-white shadow-sm"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab === "ai" ? "AI Sourced" : tab}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search articles..."
                className="w-full bg-[#141a26] border border-gray-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#f4622a] transition"
              />
            </div>
            <button
              onClick={fetchPosts}
              title="Refresh"
              className="p-2 rounded-xl bg-[#141a26] border border-gray-800 text-gray-400 hover:text-white hover:bg-gray-800 transition"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            </button>
          </div>
        </div>

        {/* Posts Table / Card List */}
        {loading && posts.length === 0 ? (
          <div className="py-20 text-center">
            <div className="w-8 h-8 border-2 border-[#f4622a]/30 border-t-[#f4622a] rounded-full animate-spin mx-auto mb-3" />
            <p className="text-sm text-gray-400">Loading blog articles...</p>
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="py-16 text-center border border-dashed border-gray-800 rounded-2xl bg-[#141a26]/40 p-8">
            <FileText className="w-10 h-10 text-gray-600 mx-auto mb-3" />
            <h3 className="text-base font-semibold text-white">No articles found</h3>
            <p className="text-xs text-gray-400 mt-1 max-w-sm mx-auto">
              {search
                ? `No posts match your search query "${search}".`
                : "Get started by generating your first article using our Groq AI Engine."}
            </p>
            <Link
              href="/admin/blog/new"
              className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-xl bg-[#f4622a] text-white text-xs font-semibold shadow-md shadow-[#f4622a]/20"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Create Article with AI
            </Link>
          </div>
        ) : (
          <div className="bg-[#141a26] border border-gray-800/80 rounded-2xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#0f141f] text-gray-400 uppercase tracking-wider text-[11px] border-b border-gray-800">
                  <tr>
                    <th className="py-3 px-4">Title & Details</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4">Source</th>
                    <th className="py-3 px-4">Date</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800/60">
                  {filteredPosts.map((post) => (
                    <tr
                      key={post.id}
                      className="hover:bg-gray-800/25 transition group"
                    >
                      <td className="py-3.5 px-4">
                        <div className="max-w-md">
                          <Link
                            href={`/admin/blog/${post.id}/edit`}
                            className="font-medium text-white hover:text-[#f4622a] transition line-clamp-1 text-sm"
                          >
                            {post.title}
                          </Link>
                          <p className="text-gray-500 font-mono text-[11px] mt-0.5">
                            /{post.slug}
                          </p>
                          {post.tags && post.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1 mt-1.5">
                              {post.tags.slice(0, 3).map((tag, i) => (
                                <span
                                  key={i}
                                  className="px-1.5 py-0.5 rounded bg-gray-800 text-gray-400 text-[10px]"
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
                              ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20"
                              : "bg-amber-500/10 text-amber-400 border border-amber-500/30 hover:bg-amber-500/20"
                          }`}
                        >
                          {post.status === "published" ? (
                            <>
                              <CheckCircle className="w-3 h-3" />
                              Live
                            </>
                          ) : (
                            <>
                              <Clock className="w-3 h-3" />
                              Draft
                            </>
                          )}
                        </button>
                      </td>

                      <td className="py-3.5 px-4 whitespace-nowrap">
                        {post.source === "ai" || post.source === "ai-edited" ? (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-purple-500/15 text-purple-300 border border-purple-500/30 text-[10px] font-semibold">
                            <Sparkles className="w-3 h-3 text-yellow-400" />
                            {post.source === "ai-edited" ? "AI + Edited" : "AI"}
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 rounded bg-gray-800 text-gray-400 text-[10px]">
                            Manual
                          </span>
                        )}
                      </td>

                      <td className="py-3.5 px-4 whitespace-nowrap text-gray-400 font-mono text-[11px]">
                        {post.created_at ? new Date(post.created_at).toLocaleDateString() : "—"}
                      </td>

                      <td className="py-3.5 px-4 whitespace-nowrap text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          {post.status === "published" && (
                            <Link
                              href={`/blog/${post.slug}`}
                              target="_blank"
                              title="View Live Article"
                              className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </Link>
                          )}
                          <Link
                            href={`/admin/blog/${post.id}/edit`}
                            title="Edit Article"
                            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition"
                          >
                            <Edit3 className="w-4 h-4" />
                          </Link>
                          <button
                            onClick={() => handleDelete(post.id, post.title)}
                            disabled={deletingId === post.id}
                            title="Delete Article"
                            className="p-1.5 rounded-lg text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition cursor-pointer"
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
