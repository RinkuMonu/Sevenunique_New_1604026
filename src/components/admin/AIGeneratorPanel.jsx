"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import {
  Sparkles,
  RefreshCw,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Sliders,
  Cpu,
} from "lucide-react";
import { toast } from "sonner";
import { AVAILABLE_MODELS, DEFAULT_MODEL_ID } from "@/lib/ai/models";

const SUGGESTED_TOPICS = [
  "How Smart PayIn and Instant Payouts Accelerate Fintech Scale",
  "AEPS and BBPS Architecture: Scaling High-Concurrency Banking APIs",
  "Deploying Enterprise AI Agents for Automated Business Operations",
  "Zero-Failure Identity Verification: Integrating Aadhaar & PAN KYC APIs",
  "Next.js 16 Production Architecture for High-Volume Financial Platforms",
];

export function AIGeneratorPanel({ onGenerated, disabled }) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedModel, setSelectedModel] = useState(DEFAULT_MODEL_ID);
  const [topic, setTopic] = useState("");
  const [tone, setTone] = useState("Professional & Authoritative");
  const [keywords, setKeywords] = useState("");
  const [wordCount, setWordCount] = useState(800);
  const [audience, setAudience] = useState("Business owners and marketing leaders");
  const [hasGenerated, setHasGenerated] = useState(false);
  const [errorBanner, setErrorBanner] = useState(null);
  const [isRateLimited, setIsRateLimited] = useState(false);

  const FALLBACK_MODEL_ID = "openai/gpt-oss-20b";

  const selectedModelInfo =
    AVAILABLE_MODELS.find((m) => m.id === selectedModel) || AVAILABLE_MODELS[0];

  const generationSteps = useMemo(
    () => [
      { label: `Connecting to ${selectedModelInfo.name} (${selectedModelInfo.speed})...`, progress: 20 },
      { label: "Analyzing topic, audience & search intent...", progress: 45 },
      { label: "Structuring semantic H2/H3 headings & outline...", progress: 70 },
      { label: "Drafting rich sanitized HTML content & SEO tags...", progress: 90 },
    ],
    [selectedModelInfo.name, selectedModelInfo.speed]
  );

  // Animated progress state
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [progressPercent, setProgressPercent] = useState(0);
  const stepTimerRef = useRef(null);

  // Progress simulation during AI generation
  useEffect(() => {
    if (isGenerating) {
      setCurrentStepIndex(0);
      setProgressPercent(15);

      let step = 0;
      stepTimerRef.current = setInterval(() => {
        step += 1;
        if (step < generationSteps.length) {
          setCurrentStepIndex(step);
          setProgressPercent(generationSteps[step].progress);
        } else {
          // Creep forward slowly while waiting for final payload
          setProgressPercent((prev) => Math.min(prev + 2, 94));
        }
      }, 1600);
    } else {
      if (stepTimerRef.current) {
        clearInterval(stepTimerRef.current);
        stepTimerRef.current = null;
      }
    }

    return () => {
      if (stepTimerRef.current) {
        clearInterval(stepTimerRef.current);
      }
    };
  }, [isGenerating, generationSteps]);

  const handleGenerate = async () => {
    if (!topic.trim()) {
      toast.error("Topic is required", {
        description: "Please enter a blog post topic or click a suggested prompt.",
      });
      return;
    }

    setIsGenerating(true);
    setErrorBanner(null);
    setIsRateLimited(false);

    const toastId = toast.loading(`Generating article with ${selectedModelInfo.name}...`, {
      description: "Crafting headline, SEO metadata, rich content, and tags.",
    });

    try {
      const keywordList = keywords
        .split(",")
        .map((k) => k.trim())
        .filter(Boolean);

      const response = await fetch("/api/admin/blog/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topic: topic.trim(),
          tone,
          keywords: keywordList,
          wordCount,
          audience,
          model: selectedModel,
        }),
      });

      const data = await response.json();

      if (!response.ok || data.error) {
        throw new Error(data.error || "Failed to generate blog post from Groq API");
      }

      setProgressPercent(100);
      toast.success("AI draft generated successfully!", {
        id: toastId,
        description: `Generated via ${selectedModelInfo.name}. Loaded into editor.`,
      });

      setHasGenerated(true);
      if (onGenerated) {
        onGenerated(data);
      }
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Unexpected error during AI generation. Check your network or API quota.";

      const isLimit =
        message.toLowerCase().includes("429") ||
        message.toLowerCase().includes("rate limit") ||
        message.toLowerCase().includes("rate_limit");

      if (isLimit) {
        setIsRateLimited(true);
        setErrorBanner(
          `Rate limit exceeded on ${selectedModelInfo.name}. You can switch to the fast fallback model or try again in a few seconds.`
        );
      } else {
        setErrorBanner(message);
      }

      toast.error("AI Generation failed", {
        id: toastId,
        description: isLimit
          ? "Groq API rate limit hit. Switch to a fallback model or wait a moment."
          : message,
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSwitchToFallback = () => {
    setSelectedModel(FALLBACK_MODEL_ID);
    setErrorBanner(null);
    setIsRateLimited(false);
    toast.info("Switched to fallback model", {
      description: "Ready to regenerate using high-throughput 20B model.",
    });
  };

  return (
    <div className="rounded-2xl border border-orange-200/80 bg-gradient-to-br from-white via-orange-50/20 to-slate-50 p-5 sm:p-6 space-y-6 shadow-xs relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-[#f4622a]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-[#f4622a]/10 text-[#f4622a] border border-[#f4622a]/20">
            <Sparkles className="w-5 h-5 text-[#f4622a] animate-pulse" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              AI Editorial Assistant
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-[#f4622a]/10 text-[#f4622a] border border-[#f4622a]/20 font-semibold">
                Groq Powered
              </span>
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Generate fully formatted, SEO-optimized blog drafts in seconds.
            </p>
          </div>
        </div>

        {/* Model Info Pill */}
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700 self-start sm:self-auto font-medium">
          <Cpu className="w-3.5 h-3.5 text-[#f4622a]" />
          <span>{selectedModelInfo.name}</span>
        </div>
      </div>

      {/* Error / Rate Limit Alert */}
      {errorBanner && (
        <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-start gap-3">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-500" />
          <div className="flex-1 space-y-2">
            <p className="leading-relaxed">{errorBanner}</p>
            {isRateLimited && selectedModel !== FALLBACK_MODEL_ID && (
              <button
                type="button"
                onClick={handleSwitchToFallback}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-rose-600 hover:bg-rose-700 text-white transition-colors cursor-pointer"
              >
                Switch to {AVAILABLE_MODELS.find((m) => m.id === FALLBACK_MODEL_ID)?.name} (Faster)
              </button>
            )}
          </div>
        </div>
      )}

      {/* Progress Bar (Visible while generating) */}
      {isGenerating && (
        <div className="space-y-2 p-3.5 rounded-xl bg-orange-50 border border-orange-200">
          <div className="flex items-center justify-between text-xs text-[#f4622a]">
            <span className="flex items-center gap-1.5 font-semibold">
              <Loader2 className="w-3.5 h-3.5 animate-spin text-[#f4622a]" />
              {generationSteps[currentStepIndex]?.label || "Generating draft..."}
            </span>
            <span className="font-mono text-xs font-bold">{progressPercent}%</span>
          </div>
          <div className="w-full h-1.5 bg-orange-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#f4622a] transition-all duration-500 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      )}

      {/* Configuration Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Model Selector Cards */}
        <div className="md:col-span-2 space-y-2">
          <label className="block text-xs font-bold text-slate-700 flex items-center gap-1.5">
            <Sliders className="w-3.5 h-3.5 text-[#f4622a]" />
            Select Groq AI Model
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {AVAILABLE_MODELS.map((model) => {
              const isSelected = selectedModel === model.id;
              return (
                <button
                  key={model.id}
                  type="button"
                  onClick={() => setSelectedModel(model.id)}
                  disabled={disabled || isGenerating}
                  className={`text-left p-3 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? "border-[#f4622a] bg-orange-50/50 ring-1 ring-[#f4622a] shadow-xs"
                      : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                  } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-xs font-bold text-slate-900 truncate">
                      {model.name}
                    </span>
                    <span
                      className={`text-[9px] uppercase font-mono px-1.5 py-0.5 rounded font-semibold shrink-0 ${
                        model.id === "openai/gpt-oss-120b"
                          ? "bg-purple-100 text-purple-700 border border-purple-200"
                          : model.id === "openai/gpt-oss-20b"
                          ? "bg-emerald-100 text-emerald-700 border border-emerald-200"
                          : "bg-slate-100 text-slate-700 border border-slate-200"
                      }`}
                    >
                      {model.badge}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-snug line-clamp-2 mb-2">
                    {model.description}
                  </p>
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-1.5 border-t border-slate-100">
                    <span>Context: {model.contextWindow}</span>
                    <span className={isSelected ? "text-[#f4622a] font-bold" : "text-slate-500"}>
                      ⚡ {model.speed}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Topic Input & Quick Suggestions */}
        <div className="md:col-span-2 space-y-1.5">
          <label className="block text-xs font-bold text-slate-700">
            Target Topic or Title <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. 7 Proven SEO Tactics for Service Businesses in India"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            disabled={disabled || isGenerating}
            className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-[#f4622a] focus:ring-1 focus:ring-[#f4622a] transition-all disabled:opacity-50 shadow-xs"
          />

          {/* Quick Prompts */}
          <div className="pt-1">
            <span className="text-[11px] text-slate-500 mr-2 font-medium">Try inspiration:</span>
            <div className="inline-flex flex-wrap gap-1.5 mt-1">
              {SUGGESTED_TOPICS.map((suggested) => (
                <button
                  key={suggested}
                  type="button"
                  onClick={() => setTopic(suggested)}
                  disabled={disabled || isGenerating}
                  className="text-[11px] px-2.5 py-1 rounded-lg bg-white hover:bg-orange-50 text-slate-700 hover:text-[#f4622a] border border-slate-200 hover:border-[#f4622a]/40 transition-colors truncate max-w-[280px] sm:max-w-none cursor-pointer disabled:opacity-50 shadow-xs font-medium"
                >
                  {suggested}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tone Selector */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">
            Editorial Tone
          </label>
          <select
            value={tone}
            onChange={(e) => setTone(e.target.value)}
            disabled={disabled || isGenerating}
            className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#f4622a] focus:ring-1 focus:ring-[#f4622a] transition-all disabled:opacity-50 cursor-pointer shadow-xs"
          >
            <option value="Professional & Authoritative">
              Professional &amp; Authoritative (Default)
            </option>
            <option value="Conversational & Direct">
              Conversational &amp; Direct
            </option>
            <option value="Technical & Analytical">
              Technical &amp; Deeply Analytical
            </option>
            <option value="Case-Study Style">
              Results &amp; Case-Study Driven
            </option>
          </select>
        </div>

        {/* Word Count */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">
            Target Article Length
          </label>
          <div className="flex items-center gap-2">
            {[600, 900, 1200].map((count) => (
              <button
                key={count}
                type="button"
                onClick={() => setWordCount(count)}
                disabled={disabled || isGenerating}
                className={`flex-1 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  wordCount === count
                    ? "bg-[#f4622a] text-white shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-200"
                }`}
              >
                ~{count} words
              </button>
            ))}
          </div>
        </div>

        {/* Keywords */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">
            Target SEO Keywords (Comma Separated)
          </label>
          <input
            type="text"
            placeholder="e.g. digital marketing, local SEO, PPC lead gen"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            disabled={disabled || isGenerating}
            className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-[#f4622a] focus:ring-1 focus:ring-[#f4622a] transition-all disabled:opacity-50 shadow-xs"
          />
        </div>

        {/* Audience */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">
            Target Audience Persona
          </label>
          <input
            type="text"
            placeholder="e.g. Small business founders, marketing heads in India"
            value={audience}
            onChange={(e) => setAudience(e.target.value)}
            disabled={disabled || isGenerating}
            className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-[#f4622a] focus:ring-1 focus:ring-[#f4622a] transition-all disabled:opacity-50 shadow-xs"
          />
        </div>
      </div>

      {/* Action Trigger */}
      <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-200">
        <p className="text-[11px] text-slate-500 text-center sm:text-left">
          Using <span className="text-[#f4622a] font-bold">{selectedModelInfo.name}</span>. Generates title, slug, meta description, outline, content &amp; tags.
        </p>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          {hasGenerated ? (
            <button
              type="button"
              onClick={handleGenerate}
              disabled={disabled || isGenerating}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 border border-slate-200 transition-all text-xs cursor-pointer disabled:opacity-50"
            >
              {isGenerating ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <RefreshCw className="w-3.5 h-3.5 text-[#f4622a]" />
              )}
              Regenerate Article
            </button>
          ) : (
            <button
              type="button"
              onClick={handleGenerate}
              disabled={disabled || isGenerating}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold bg-[#f4622a] hover:bg-[#e0531e] text-white transition-colors text-xs cursor-pointer disabled:opacity-50 shadow-md shadow-[#f4622a]/20"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  Generating Draft...
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                  Generate Draft with AI
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default AIGeneratorPanel;
