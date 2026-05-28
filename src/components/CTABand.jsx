"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTABand() {
  return (
    <section className="relative overflow-hidden bg-[#c9c9c9] py-14 md:py-10 sm:py-28">
      {/* GRADIENT BLOBS */}
      <div className="absolute top-0 left-0 h-[320px] w-[320px] rounded-full bg-[#f4622a]/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] border border-white/20 bg-white/20 backdrop-blur-md">
          {/* GRID */}

          
          <div className="grid lg:grid-cols-2 items-center gap-14 p-8 sm:p-12 lg:p-16">
              {/* RIGHT IMAGE */}
            <div className="relative">
              {/* GLOW */}
              <div className="absolute -inset-4 rounded-[30px] bg-gradient-to-r from-[#f4622a]/30 to-orange-500/10 blur-2xl" />

              {/* IMAGE CARD */}
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-2xl">
                <img
                  src="/images/1779359110276.png"
                  alt="Developers collaborating"
                  className="h-full w-full object-cover"
                />

                {/* FLOATING CARD */}
                <div className="absolute bottom-5 left-5 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-2xl px-5 py-4 shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
                  <p className="text-sm text-gray-300">Launch Faster With</p>
                  <h5 className="mt-1 text-lg font-semibold text-white">
                    Modern Tech Solutions
                  </h5>
                </div>
              </div>
            </div>
            {/* LEFT CONTENT */}
            <div>
              {/* TAG */}
              <div className="inline-flex items-center gap-2 rounded-full border mb-3 border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-800 backdrop-blur-3xl">
                <span className="h-2 w-2 rounded-full bg-[#f4622a]" />
                Trusted Software Development Partner
              </div>

              {/* HEADING */}
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-[28px] sm:text-[30px] md:text-[32px] lg:text-[34px] font-semibold text-gray-600 tracking-tight leading-[1.15]">
                  Build, Launch & Scale With Confidence
                  <br />
                  Partner with us for reliable and
                  <br />
                  <span className="text-[#f4622a]">
                    future-ready software solutions.
                  </span>
                </h2>

                <Link
                  href="/schedule-a-call-page"
                  className="inline-block bg-[#f4622a] hover:bg-[#d94f1e] text-white px-6 py-3 mt-8 rounded-md font-medium transition"
                >
                  Explore how we can help.
                </Link>
              </div>
            </div>

          
          </div>
        </div>
      </div>
    </section>
  );
}
