import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  BookOpen,
  Search,
  Tag
} from "lucide-react";
import { createAdminClient } from "@/lib/supabase/server";

export const metadata = {
  title: "Software Engineering, AI & Technology Insights | SevenUnique Blog",
  description:
    "Explore in-depth engineering playbooks, AI system architectures, fintech development guides, and software strategy from SevenUnique Tech Solutions.",
  openGraph: {
    title: "Software Engineering, AI & Technology Insights | SevenUnique Blog",
    description: "Explore engineering playbooks and AI insights from SevenUnique.",
    url: "https://www.sevenunique.com/blog",
    siteName: "SevenUnique",
    type: "website",
  },
};

// Fallback articles to show if database has no published posts yet
const fallbackArticles = [
  {
    id: "f1",
    title: "Java Multithreading for Engineering Leaders: A Concurrency Risk and Governance Playbook",
    slug: "java-multithreading-for-engineering-leaders",
    meta_description:
      "A comprehensive guide for senior tech leaders on managing thread safety, concurrency risks, and memory consistency in enterprise systems.",
    cover_image_url:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    author: "SevenUnique Architecture Team",
    tags: ["Backend", "Java", "Architecture"],
    published_at: "2026-03-15T00:00:00Z",
    source: "manual",
  },
  {
    id: "f2",
    title: "Zero Trust 2.0 and the Shift to Identity-First Security in Cloud Architectures",
    slug: "zero-trust-identity-first-security",
    meta_description:
      "How forward-thinking engineering teams implement identity-centric authentication, microsegmentation, and continuous verification.",
    cover_image_url:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    author: "SevenUnique Security Practice",
    tags: ["Cybersecurity", "Cloud", "DevOps"],
    published_at: "2026-03-10T00:00:00Z",
    source: "manual",
  },
  {
    id: "f3",
    title: "Kubernetes Cost Optimization: Stop Overprovisioning by Default",
    slug: "kubernetes-cost-optimization-guide",
    meta_description:
      "Actionable techniques for rightsizing container resources, tuning HPA/VPA autoscaling, and eliminating idle cluster costs.",
    cover_image_url:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    author: "SevenUnique DevOps Team",
    tags: ["Kubernetes", "DevOps", "Cloud Cost"],
    published_at: "2026-02-28T00:00:00Z",
    source: "manual",
  },
];

export default async function BlogIndexPage() {
  let posts = [];

  try {
    const supabase = createAdminClient();
    const { data, error } = await supabase
      .from("posts")
      .select("id, title, slug, meta_description, cover_image_url, author, tags, published_at, created_at, source")
      .eq("status", "published")
      .order("published_at", { ascending: false });

    if (!error && data && data.length > 0) {
      posts = data;
    } else {
      posts = fallbackArticles;
    }
  } catch (err) {
    console.warn("Could not fetch posts from Supabase (using fallback):", err.message);
    posts = fallbackArticles;
  }

  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#fff6f1] via-[#fffbf9] to-white pt-16 pb-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f4622a]/10 border border-[#f4622a]/20 text-[#f4622a] text-xs font-semibold uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            Engineering & Strategy
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111827] tracking-tight leading-tight mb-5">
            Insights on Modern <span className="text-[#f4622a]">Software & AI</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Practical architectures, technical teardowns, and engineering leadership playbooks from the teams building enterprise and fintech software at SevenUnique.
          </p>
        </div>
      </section>

      {/* Articles Container */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Post Card */}
        {featuredPost && (
          <div className="mb-14 bg-gradient-to-br from-[#121824] to-[#1c2436] rounded-3xl overflow-hidden shadow-2xl border border-gray-800 text-white group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="p-8 sm:p-12">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#f4622a] text-white text-xs font-bold uppercase tracking-wider">
                    Featured
                  </span>
                  {featuredPost.source === "ai" && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-semibold">
                      <Sparkles className="w-3 h-3 text-yellow-400" />
                      AI Sourced
                    </span>
                  )}
                </div>

                <Link href={`/blog/${featuredPost.slug}`}>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white hover:text-[#f4622a] transition duration-200 leading-snug mb-4">
                    {featuredPost.title}
                  </h2>
                </Link>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed line-clamp-3 mb-6">
                  {featuredPost.meta_description}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-400 pt-4 border-t border-gray-800">
                  <span>By <strong className="text-gray-200">{featuredPost.author || "SevenUnique Team"}</strong></span>
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-1.5 text-[#f4622a] font-semibold hover:underline"
                  >
                    Read Article
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {featuredPost.cover_image_url && (
                <div className="h-full min-h-[300px] lg:min-h-[420px] relative overflow-hidden">
                  <img
                    src={featuredPost.cover_image_url}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
                </div>
              )}
            </div>
          </div>
        )}

        {/* Remaining Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {remainingPosts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-gray-300 transition duration-300 group"
            >
              {post.cover_image_url ? (
                <Link
                  href={`/blog/${post.slug}`}
                  className="aspect-video relative overflow-hidden bg-gray-100"
                >
                  <img
                    src={post.cover_image_url}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </Link>
              ) : (
                <div className="aspect-video bg-gradient-to-br from-orange-50 to-orange-100/60 flex items-center justify-center p-6 text-[#f4622a]/40">
                  <BookOpen className="w-12 h-12" />
                </div>
              )}

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-1.5 mb-3">
                    {post.tags &&
                      post.tags.slice(0, 2).map((t, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 text-[11px] font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    {post.source === "ai" && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 text-[10px] font-semibold border border-purple-200">
                        <Sparkles className="w-2.5 h-2.5 text-yellow-500" />
                        AI
                      </span>
                    )}
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#f4622a] transition duration-200 leading-snug line-clamp-2 mb-2">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-gray-600 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4">
                    {post.meta_description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <span className="truncate max-w-[140px]">{post.author || "SevenUnique Team"}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-[#f4622a] font-semibold hover:underline"
                  >
                    Read
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
