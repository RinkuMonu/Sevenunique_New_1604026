import Groq from "groq-sdk";
import { buildBlogPostPrompt, blogPostResponseSchema } from "./prompts/blogPost";
import { normalizeContentToHtml } from "./contentFormatter";
import { getValidModel } from "./models";

let groqInstance = null;

function getGroqClient() {
  if (!groqInstance) {
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      throw new Error("GROQ_API_KEY is not set in environment variables.");
    }
    groqInstance = new Groq({ apiKey });
  }
  return groqInstance;
}

async function withRetry(fn, maxRetries = 2) {
  const RETRIABLE = [429, 502, 503];
  const BACKOFF_MS = [1000, 3000];
  let lastError;
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (err) {
      lastError = err;
      const status = err?.status;
      if (!status || !RETRIABLE.includes(status) || attempt === maxRetries) {
        throw err;
      }
      await new Promise((res) => setTimeout(res, BACKOFF_MS[attempt] ?? 3000));
    }
  }
  throw lastError;
}

export async function generateBlogPost({
  topic,
  tone = "Professional & Authoritative",
  keywords = [],
  wordCount = 800,
  audience,
  model,
}) {
  const groq = getGroqClient();
  const prompt = buildBlogPostPrompt({ topic, tone, keywords, wordCount, audience });
  const selectedModel = getValidModel(model || process.env.GROQ_MODEL);

  const completion = await withRetry(() =>
    groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "You are a seasoned human editorial director and performance software practitioner with 15+ years of live client experience. You write with deep analytical substance, natural burstiness, and zero detectable AI clichés or synthetic filler. Output strictly valid JSON matching the requested schema. The content field MUST be clean, valid semantic HTML with rich visual hierarchy (h2, h3, p, ul, ol, li, strong, blockquote). Never output markdown code blocks or commentary around the JSON.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      model: selectedModel,
      max_completion_tokens: 8000,
      reasoning_effort: "low",
      response_format: { type: "json_schema", json_schema: blogPostResponseSchema },
    })
  );

  const choice = completion.choices?.[0];
  const raw = choice?.message?.content;

  if (!raw) {
    throw new Error("No response received from Groq AI service.");
  }

  const parsed = safeParseJson(raw);
  const formattedHtml = normalizeContentToHtml(parsed.content || "");

  return {
    title: parsed.title ? String(parsed.title).trim() : "",
    metaDescription: parsed.metaDescription ? String(parsed.metaDescription).trim() : "",
    content: formattedHtml,
    suggestedTags: Array.isArray(parsed.suggestedTags)
      ? parsed.suggestedTags.map((t) => String(t).trim()).filter(Boolean)
      : [],
  };
}

function safeParseJson(raw) {
  let cleaned = raw.trim();
  if (cleaned.startsWith("```")) {
    cleaned = cleaned.replace(/^```(?:json)?\s*\n?/, "").replace(/\n?```\s*$/, "").trim();
  }
  try {
    return JSON.parse(cleaned);
  } catch {
    let repaired = cleaned;
    if (!repaired.endsWith("}")) {
      const quoteCount = (repaired.match(/(?<!\\)"/g) || []).length;
      if (quoteCount % 2 !== 0) repaired += '"';
      repaired += "}";
    }
    try {
      return JSON.parse(repaired);
    } catch {
      const titleMatch = repaired.match(/"title"\s*:\s*"([^"]+)"/);
      const metaMatch = repaired.match(/"metaDescription"\s*:\s*"([^"]+)"/);
      const contentMatch = repaired.match(/"content"\s*:\s*"([\s\S]*?)(?:"\s*,\s*"suggestedTags"|"$)/);

      return {
        title: titleMatch ? titleMatch[1] : "",
        metaDescription: metaMatch ? metaMatch[1] : "",
        content: contentMatch ? contentMatch[1].replace(/\\n/g, "\n").replace(/\\"/g, '"') : "",
        suggestedTags: [],
      };
    }
  }
}
