import { NextResponse } from "next/server";
import { generateBlogPost } from "@/lib/ai/generateBlogPost";

export async function POST(request) {
  try {
    const body = await request.json();
    const { topic, tone, keywords, wordCount, audience, model } = body;

    if (!topic || typeof topic !== "string" || !topic.trim()) {
      return NextResponse.json(
        { error: "Blog topic is required to generate content." },
        { status: 400 }
      );
    }

    const safeKeywords = Array.isArray(keywords)
      ? keywords
      : typeof keywords === "string"
      ? keywords.split(",").map((k) => k.trim()).filter(Boolean)
      : [];

    const result = await generateBlogPost({
      topic: topic.trim().slice(0, 500),
      tone: tone || "professional",
      keywords: safeKeywords.slice(0, 10),
      wordCount: typeof wordCount === "number" ? Math.min(Math.max(wordCount, 300), 3000) : 1000,
      audience: audience || "Technology leaders and business owners",
      model: model || "llama-3.3-70b-versatile",
    });

    return NextResponse.json({ success: true, ...result });
  } catch (error) {
    console.error("AI Blog Generation Error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to generate blog post with AI." },
      { status: 500 }
    );
  }
}
