"use client";

import Link from "next/link";
import Image from "next/image";

export default function Criclegrowth() {
  return (
    <section className="mt-8 w-full px-4 sm:mt-10 sm:px-6">
      {/* Responsive UI update: contained CTA artwork and badges on phone widths. */}
      <div className="relative overflow-hidden rounded-[32px] bg-[#a0a0a0] border border-[#f1ddd2] py-12 md:py-14">
        
        {/* SOFT BACKGROUND GLOW */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-10 w-[240px] h-[240px] bg-orange-200/40 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-0 w-[220px] h-[220px] bg-gray-200/50 blur-3xl rounded-full" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            
            {/* MINI LABEL */}
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/70 px-4 py-2 text-xs font-medium text-gray-700">
              <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse"></span>
              Your Technology Growth Partner
            </div>

            {/* HEADING */}
            <h2 className="mt-5 max-w-3xl text-[28px] font-bold leading-[1.15] text-[#1a1a1a] sm:text-[32px] md:text-[44px]">
              Innovate, Build & Grow{" "}
              <span className="text-[#f15c2d]">
                with Sevenunique.
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-4 text-[15px] md:text-[16px] text-gray-600 leading-relaxed max-w-2xl">
              We help startups and businesses build scalable digital products,
              hire dedicated tech talent, and accelerate growth with modern
              software solutions.
            </p>

            {/* BUTTON */}
            <div className="mt-8">
              <Link
                href="/schedule-a-call-page"
                className="inline-flex w-full items-center justify-center rounded-xl bg-[#f15c2d] px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#dc4f23] sm:w-auto"
              >
                Start Your Project
              </Link>
            </div>

            {/* STATS */}
            <div className="mt-10 grid grid-cols-2 gap-6 sm:flex sm:flex-wrap sm:gap-8">
              <div>
                <h3 className="text-2xl font-bold text-[#1a1a1a]">
                  250+
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  Successful Projects
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#1a1a1a]">
                  98%
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  Client Satisfaction
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#1a1a1a]">
                  24/7
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  Dedicated Support
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative h-[250px] w-full max-w-[380px] sm:h-[300px]">
              
              {/* IMAGE CARD */}
              <div className="absolute inset-0 overflow-hidden rounded-[28px] border border-white/60 shadow-xl bg-white">
                <Image
                  src="/images/handonhand.png"
                  alt="Sevenunique Team"
                  fill
                  className="object-cover"
                />
              </div>

              {/* FLOATING BADGE */}
              <div className="absolute left-2 top-4 rounded-2xl border border-orange-100 bg-white px-3 py-2 shadow-lg sm:-left-6 sm:top-6 sm:px-4 sm:py-3">
                <h4 className="text-lg font-bold text-[#1a1a1a]">
                  50+
                </h4>
                <p className="text-xs text-gray-500">
                  Global Clients
                </p>
              </div>

              {/* FLOATING CARD */}
              <div className="absolute bottom-4 right-2 rounded-2xl bg-[#1a1a1a] px-4 py-2.5 text-white shadow-xl sm:-right-5 sm:bottom-6 sm:px-5 sm:py-3">
                <h4 className="text-sm font-semibold">
                  Dedicated Teams
                </h4>

                <p className="text-xs text-gray-300 mt-1">
                  Flexible hiring model
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
