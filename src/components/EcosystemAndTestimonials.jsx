"use client";

import React, { useState } from "react";

// ─── SUBCOMPONENTS ────────────────────────────────────────────
function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 flex-shrink-0 text-orange-400">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhotoPlaceholder({ seed = 0 }) {
  const colors = [
    ["#f97316", "#ea580c"],
    ["#3b82f6", "#1d4ed8"],
    ["#10b981", "#059669"],
    ["#8b5cf6", "#7c3aed"],
  ];
  const [a, b] = colors[seed % colors.length];

  return (
    <div
      className="w-24 h-28 rounded-md flex-shrink-0"
      style={{ background: `linear-gradient(135deg, ${a}, ${b})` }}
    />
  );
}

function TestimonialCard({ t, seed, active = false }) {
  return (
    <div className={`rounded-xl border p-5 bg-white ${active ? "border-gray-800 shadow-md" : "border-gray-200"}`}>
      {(t.industry || t.project) && (
        <div className="mb-3">
          {t.industry && (
            <p className="text-[10px] font-semibold tracking-widest uppercase text-gray-400">
              {t.industry}
            </p>
          )}
          {t.project && <p className="text-sm text-gray-600 mt-0.5">{t.project}</p>}
        </div>
      )}

      <div className="flex gap-4">
        <PhotoPlaceholder seed={seed} />

        <div className="flex flex-col justify-between">
          <p className="text-gray-700 text-sm leading-relaxed">
            <span className="text-orange-400 text-2xl mr-1">"</span>
            {t.quote}
          </p>

          <div className="mt-3 flex items-end justify-between gap-2">
            <div>
              <p className="text-sm font-semibold text-gray-900">{t.name}</p>
              {t.title && <p className="text-xs text-gray-500">{t.title}</p>}
            </div>

            <p className={t.companyStyle || "font-bold text-gray-800 text-lg"}>
              {t.company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────
export default function EcosystemAndTestimonials({data}) {
  const [activeIndex, setActiveIndex] = useState(0);
   const ecosystem = data?.ecosystem;
  const testimonials = data?.testimonialsSection;
  return (
    <>
      {/* ECOSYSTEM SECTION */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase text-gray-400 mb-3">
            {ecosystem?.sectionLabel}
          </p>

          <h2 className="text-4xl font-bold mb-4">
            {ecosystem?.heading}
          </h2>

          <p className="text-gray-500 mb-12">
            {ecosystem?.description}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* LEFT MENU */}
            <div className="space-y-2">
              {ecosystem?.items.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-lg border ${
                    activeIndex === i
                      ? "border-gray-900 bg-white font-semibold"
                      : "border-gray-200 bg-white text-gray-600"
                  }`}
                >
                  <CheckIcon />
                  <span className="text-sm">{item?.label}</span>
                </button>
              ))}
            </div>

            {/* RIGHT PANEL */}
            <div className="border border-orange-400  rounded-xl p-6 bg-white">
              <p className="text-sm text-gray-700 mb-5">
                {ecosystem?.items[activeIndex].description}
              </p>

              <div className="flex flex-wrap gap-2">
                {ecosystem?.items[activeIndex].tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          {/* LEFT COLUMN */}
          <div>
            <p className="text-xs uppercase text-gray-400 mb-4">
              {testimonials?.sectionLabel}
            </p>

            <h2 className="text-4xl font-bold mb-4">
              {testimonials?.heading}
            </h2>

            <p className="text-gray-500 mb-8">
              {testimonials?.subheading}
            </p>

            <div className="space-y-4">
              {testimonials?.leftColumn.map((t, i) => (
                <TestimonialCard key={i} t={t} seed={i} active={i === 1} />
              ))}
            </div>

            <button className="mt-6 text-sm text-gray-600">
              + {testimonials?.showMoreButtonText || "Show More Testimonials"}
            </button>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-4">
            {testimonials?.rightColumn.map((t, i) => (
              <TestimonialCard key={i} t={t} seed={i + 2} />
            ))}

            {/* CTA */}
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <div className="flex -space-x-2 mb-4">
                {(testimonials?.cta.avatarColors || [
                  "#f97316",
                  "#3b82f6",
                  "#10b981",
                  "#8b5cf6",
                  "#ef4444",
                  "#f59e0b",
                ]).map((color, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-white"
                    style={{ background: color }}
                  />
                ))}
              </div>

              <p className="font-semibold text-gray-900 text-lg mb-4">
                {testimonials?.cta.title}
              </p>

              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
                {testimonials?.cta.buttonText}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}