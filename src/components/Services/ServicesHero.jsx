"use client";

import Link from "next/link";
import { GoHome } from "react-icons/go";
import { ArrowRight, Sparkles, ShieldCheck, Users, Globe2, Award } from "lucide-react";

export default function ServicesHero() {
  const scrollToCatalog = (e) => {
    e.preventDefault();
    const elem = document.getElementById("services-catalog");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#070c18] pt-16 pb-20 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-32 text-white">
      {/* AMBIENT GLOW EFFECTS */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-[#ff6b3d]/15 blur-[140px]" />
      <div className="pointer-events-none absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-blue-600/15 blur-[150px]" />
      <div className="pointer-events-none absolute -bottom-20 left-1/2 -translate-x-1/2 h-[380px] w-[650px] rounded-full bg-[#ff6b3d]/10 blur-[130px]" />

      {/* SUBTLE GRID PATTERN OVERLAY */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.9) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* BREADCRUMB */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs sm:text-sm text-gray-400">
          <Link
            href="/"
            className="flex items-center gap-1.5 transition-colors hover:text-[#ff6b3d]"
          >
            <GoHome className="text-base" />
            <span>Home</span>
          </Link>
          <span className="text-gray-600">/</span>
          <span className="font-medium text-gray-200">Services & Solutions</span>
        </nav>

        {/* HERO BADGE */}
        <div className="inline-flex items-center gap-2.5 rounded-full border border-[#ff6b3d]/30 bg-[#ff6b3d]/10 px-4 py-1.5 sm:px-5 sm:py-2 backdrop-blur-xl mb-6 shadow-[0_0_25px_rgba(255,107,61,0.2)]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff6b3d] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ff6b3d]" />
          </span>
          <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#ff8f6b]">
            Full-Spectrum Engineering & AI Solutions
          </p>
        </div>

        {/* MAIN HEADLINE */}
        <h1 className="max-w-4xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1]">
          Engineered for Impact.{" "}
          <br className="hidden sm:block" />
          Built for{" "}
          <span className="bg-gradient-to-r from-[#ff6b3d] via-[#ff885b] to-[#ffa585] bg-clip-text text-transparent">
            Scalable Growth.
          </span>
        </h1>

        {/* SUBTITLE */}
        <p className="mt-6 max-w-3xl text-base sm:text-lg md:text-xl leading-relaxed text-gray-300 font-normal">
          SevenUnique partners with ambitious founders, CTOs, and enterprise leaders to turn
          complex engineering challenges into production-grade software. From custom software and
          generative AI systems to high-throughput cloud backends and responsive mobile apps —
          we deliver end-to-end digital excellence.
        </p>

        {/* ACTION BUTTONS */}
        <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <Link
            href="/schedule-a-call-page"
            className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-[#ff6b3d] px-8 py-4 text-base font-semibold text-white shadow-[0_10px_30px_rgba(255,107,61,0.35)] transition-all duration-300 hover:bg-[#f45d2e] hover:shadow-[0_15px_35px_rgba(255,107,61,0.5)] hover:-translate-y-0.5"
          >
            <span>Schedule a Strategy Call</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <button
            onClick={scrollToCatalog}
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-base font-medium text-gray-200 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:text-white"
          >
            <span>Explore All 14 Services</span>
            <span className="text-xs text-[#ff8f6b]">↓</span>
          </button>
        </div>

        {/* FLOATING TRUST STATS BAR */}
        <div className="mt-14 sm:mt-16 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 backdrop-blur-lg transition-all duration-300 hover:border-[#ff6b3d]/30 hover:bg-white/[0.05]">
            <div className="flex items-center gap-2 text-[#ff6b3d] mb-1">
              <Sparkles className="h-4 w-4" />
              <span className="text-2xl sm:text-3xl font-extrabold text-white">500+</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 font-medium">Digital Products Scaled</p>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 backdrop-blur-lg transition-all duration-300 hover:border-[#ff6b3d]/30 hover:bg-white/[0.05]">
            <div className="flex items-center gap-2 text-[#ff6b3d] mb-1">
              <ShieldCheck className="h-4 w-4" />
              <span className="text-2xl sm:text-3xl font-extrabold text-white">96%</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 font-medium">Client Retention Rate</p>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 backdrop-blur-lg transition-all duration-300 hover:border-[#ff6b3d]/30 hover:bg-white/[0.05]">
            <div className="flex items-center gap-2 text-[#ff6b3d] mb-1">
              <Users className="h-4 w-4" />
              <span className="text-2xl sm:text-3xl font-extrabold text-white">Top 1%</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 font-medium">Senior Engineering Talent</p>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 backdrop-blur-lg transition-all duration-300 hover:border-[#ff6b3d]/30 hover:bg-white/[0.05]">
            <div className="flex items-center gap-2 text-[#ff6b3d] mb-1">
              <Globe2 className="h-4 w-4" />
              <span className="text-2xl sm:text-3xl font-extrabold text-white">15+</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 font-medium">Global Countries Served</p>
          </div>
        </div>
      </div>
    </section>
  );
}
