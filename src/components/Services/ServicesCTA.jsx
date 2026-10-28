"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";

export default function ServicesCTA() {
  return (
    <section className="relative overflow-hidden bg-[#070c18] py-20 sm:py-24 lg:py-28 text-white">
      {/* AMBIENT GLOW EFFECTS */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-[#ff6b3d]/15 blur-[160px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-blue-600/15 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {/* PILL */}
        <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#ff8f6b] mb-6">
          <span className="h-2 w-2 rounded-full bg-[#ff6b3d]" />
          Start Your Next Build
        </div>

        {/* HEADLINE */}
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
          Ready to Build, Scale, or Modernize{" "}
          <span className="bg-gradient-to-r from-[#ff6b3d] via-[#ff885b] to-[#ffa585] bg-clip-text text-transparent">
            Your Digital Systems?
          </span>
        </h2>

        {/* PARAGRAPH */}
        <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-gray-300 leading-relaxed">
          Whether you need an AI-driven automation copilot, resilient microservices, or a full-stack
          engineering team, SevenUnique provides the talent and execution speed you need to win.
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/schedule-a-call-page"
            className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-2xl bg-[#ff6b3d] px-8 py-4 text-base font-semibold text-white shadow-[0_10px_30px_rgba(255,107,61,0.35)] transition-all duration-300 hover:bg-[#f45d2e] hover:shadow-[0_15px_35px_rgba(255,107,61,0.5)] hover:-translate-y-0.5"
          >
            <span>Schedule an Architecture Call</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            href="/contact-us"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-base font-medium text-gray-200 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:text-white"
          >
            <span>Send Project Inquiries</span>
          </Link>
        </div>

        {/* TRUST BADGES */}
        <div className="mt-14 pt-10 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-[#ff6b3d]" />
            <span>Strict NDA Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-[#ff6b3d]" />
            <span>24-Hour Engineer Response</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-[#ff6b3d]" />
            <span>Zero Long-Term Lock-in</span>
          </div>
        </div>
      </div>
    </section>
  );
}
