import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  Tag,
  Sparkles,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { createAdminClient } from "@/lib/supabase/server";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  try {
    const supabase = createAdminClient();
    const { data: post } = await supabase
      .from("posts")
      .select("title, meta_description, cover_image_url, author, tags, published_at")
      .eq("slug", slug)
      .eq("status", "published")
      .single();

    if (!post) {
      return {
        title: "Article Not Found | SevenUnique",
      };
    }

    return {
      title: `${post.title} | SevenUnique Blog`,
      description: post.meta_description || "Read expert insights from SevenUnique Tech Solutions.",
      openGraph: {
        title: post.title,
        description: post.meta_description,
        type: "article",
        publishedTime: post.published_at,
        authors: [post.author || "SevenUnique Team"],
        images: post.cover_image_url ? [{ url: post.cover_image_url }] : ["/og-image.jpeg"],
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.meta_description,
        images: post.cover_image_url ? [post.cover_image_url] : ["/og-image.jpeg"],
      },
    };
  } catch (err) {
    return {
      title: "Blog Article | SevenUnique",
    };
  }
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;

  let post = null;
  try {
    const supabase = createAdminClient();
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("slug", slug)
      .single();

    if (error || !data) {
      notFound();
    }
    post = data;
  } catch (err) {
    console.error("Error loading blog post:", err);
    notFound();
  }

  // Calculate read time roughly: ~200 words per minute
  const wordCount = post.content ? post.content.replace(/<[^>]*>/g, "").split(/\s+/).length : 500;
  const readTime = Math.max(1, Math.round(wordCount / 200));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.meta_description,
    image: post.cover_image_url || "https://sevenunique.com/og-image.jpeg",
    author: {
      "@type": "Organization",
      name: post.author || "SevenUnique Tech Solutions",
    },
    publisher: {
      "@type": "Organization",
      name: "SevenUnique Tech Solutions Pvt. Ltd.",
      logo: {
        "@type": "ImageObject",
        url: "https://sevenunique.com/images/logo-2.png",
      },
    },
    datePublished: post.published_at || post.created_at,
    dateModified: post.updated_at || post.created_at,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://sevenunique.com/blog/${post.slug}`,
    },
  };

  return (
    <article className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero / Header Section */}
      <section className="bg-gradient-to-b from-[#fff5f0] via-[#fffbf8] to-white pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-6">
            <Link href="/" className="hover:text-[#f4622a] transition">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#f4622a] transition">
              Blog
            </Link>
            <span>/</span>
            <span className="text-gray-700 font-medium truncate max-w-xs sm:max-w-md">
              {post.title}
            </span>
          </div>

          {/* Tags & Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {post.tags &&
              post.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-[#f4622a]/10 text-[#f4622a] text-xs font-semibold tracking-wide"
                >
                  {tag}
                </span>
              ))}

            {post.source === "ai" && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-semibold border border-purple-200">
                <Sparkles className="w-3 h-3 text-yellow-500" />
                AI Sourced
              </span>
            )}
          </div>

          {/* H1 Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] leading-tight tracking-tight mb-6">
            {post.title}
          </h1>

          {/* Meta Info: Author, Date, Read Time */}
          <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm text-gray-600 pb-6 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#f4622a] text-white flex items-center justify-center font-bold text-xs uppercase">
                {post.author ? post.author.charAt(0) : "S"}
              </div>
              <span className="font-semibold text-gray-900">{post.author || "SevenUnique Team"}</span>
            </div>

            <div className="flex items-center gap-1.5 text-gray-500">
              <Calendar className="w-4 h-4 text-gray-400" />
              <span>
                {post.published_at
                  ? new Date(post.published_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })
                  : new Date(post.created_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-gray-500">
              <Clock className="w-4 h-4 text-gray-400" />
              <span>{readTime} min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cover Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12">
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-slate-900">
          <img
            src={post.cover_image_url || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Main Content Body */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div
          className="prose prose-lg max-w-none text-gray-800 leading-relaxed font-sans
                     prose-headings:text-gray-950 prose-headings:font-bold prose-headings:tracking-tight
                     prose-h2:text-2xl prose-h2:sm:text-3xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-b prose-h2:border-gray-100 prose-h2:pb-2
                     prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                     prose-p:text-base prose-p:leading-8 prose-p:mb-5 prose-p:text-gray-700
                     prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6 prose-li:my-2 prose-li:text-gray-700
                     prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
                     prose-blockquote:border-l-4 prose-blockquote:border-[#f4622a] prose-blockquote:bg-orange-50/50 prose-blockquote:py-3 prose-blockquote:px-5 prose-blockquote:rounded-r-xl prose-blockquote:my-6 prose-blockquote:italic prose-blockquote:text-gray-800
                     prose-a:text-[#f4622a] prose-a:font-semibold prose-a:underline hover:prose-a:text-[#d34c1a]
                     prose-strong:font-bold prose-strong:text-gray-900"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Article Footer & Tags */}
        <div className="mt-14 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-gray-400" />
              <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Tagged In:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {post.tags &&
                  post.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-700 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
              </div>
            </div>

            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#f4622a] hover:underline"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to all articles
            </Link>
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="mt-12 p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#111827] to-[#1f2937] text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-[#f4622a]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <span className="inline-block px-3 py-1 rounded-full bg-[#f4622a]/20 text-[#f4622a] text-xs font-semibold uppercase tracking-wider mb-3">
              Transform Your Product
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
              Ready to build enterprise-grade software or AI systems?
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
              Partner with SevenUnique Tech Solutions. From custom AI models to scalable cloud and fintech infrastructures, our engineers deliver high performance on every project.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/schedule-a-call-page"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#f4622a] hover:bg-[#e0531e] text-white text-sm font-semibold shadow-lg shadow-[#f4622a]/30 transition"
              >
                Schedule a Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-700 hover:bg-gray-800 text-gray-200 text-sm font-medium transition"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
