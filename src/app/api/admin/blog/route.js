import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/server";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const slug = searchParams.get("slug");

    const supabase = createAdminClient();

    if (id) {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw error;
      return NextResponse.json({ success: true, post: data });
    }

    if (slug) {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("slug", slug)
        .single();

      if (error) throw error;
      return NextResponse.json({ success: true, post: data });
    }

    // List all posts
    const { data, error } = await supabase
      .from("posts")
      .select("id, title, slug, meta_description, cover_image_url, author, tags, status, source, published_at, created_at, updated_at")
      .order("created_at", { ascending: false });

    if (error) throw error;
    return NextResponse.json({ success: true, posts: data || [] });
  } catch (error) {
    console.error("GET /api/admin/blog error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to fetch blog posts." },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      title,
      slug,
      content,
      meta_description,
      cover_image_url,
      author = "SevenUnique Team",
      tags = [],
      status = "draft",
      source = "manual",
    } = body;

    if (!title || !slug || !content) {
      return NextResponse.json(
        { error: "Title, slug, and content are required." },
        { status: 400 }
      );
    }

    const cleanSlug = String(slug)
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

    const supabase = createAdminClient();

    const newRecord = {
      title: title.trim(),
      slug: cleanSlug,
      content,
      meta_description: meta_description?.trim() || null,
      cover_image_url: cover_image_url?.trim() || null,
      author: author.trim() || "SevenUnique Team",
      tags: Array.isArray(tags) ? tags : [],
      status: status === "published" ? "published" : "draft",
      source: source || "manual",
      published_at: status === "published" ? new Date().toISOString() : null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    const { data, error } = await supabase
      .from("posts")
      .insert(newRecord)
      .select()
      .single();

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json(
          { error: "A post with this URL slug already exists. Please choose a different slug." },
          { status: 409 }
        );
      }
      throw error;
    }

    return NextResponse.json({ success: true, post: data });
  } catch (error) {
    console.error("POST /api/admin/blog error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to create blog post." },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    const body = await request.json();
    const { id, title, slug, content, meta_description, cover_image_url, author, tags, status, source } = body;

    if (!id) {
      return NextResponse.json({ error: "Post ID is required." }, { status: 400 });
    }

    const cleanSlug = slug
      ? String(slug)
          .toLowerCase()
          .trim()
          .replace(/[^\w\s-]/g, "")
          .replace(/[\s_-]+/g, "-")
          .replace(/^-+|-+$/g, "")
      : undefined;

    const supabase = createAdminClient();

    const updates = {
      ...(title && { title: title.trim() }),
      ...(cleanSlug && { slug: cleanSlug }),
      ...(content && { content }),
      ...(meta_description !== undefined && { meta_description: meta_description?.trim() || null }),
      ...(cover_image_url !== undefined && { cover_image_url: cover_image_url?.trim() || null }),
      ...(author && { author: author.trim() }),
      ...(Array.isArray(tags) && { tags }),
      ...(status && {
        status,
        published_at: status === "published" ? new Date().toISOString() : null,
      }),
      ...(source && { source }),
      updated_at: new Date().toISOString(),
    };

    const { data, error } = await supabase
      .from("posts")
      .update(updates)
      .eq("id", id)
      .select()
      .single();

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json(
          { error: "A post with this URL slug already exists." },
          { status: 409 }
        );
      }
      throw error;
    }

    return NextResponse.json({ success: true, post: data });
  } catch (error) {
    console.error("PUT /api/admin/blog error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to update blog post." },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Post ID is required." }, { status: 400 });
    }

    const supabase = createAdminClient();
    const { error } = await supabase.from("posts").delete().eq("id", id);

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE /api/admin/blog error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to delete blog post." },
      { status: 500 }
    );
  }
}
