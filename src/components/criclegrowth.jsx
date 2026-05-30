"use client";

import Link from "next/link";
import Image from "next/image";

export default function Criclegrowth() {
  return (
    <section className="w-full px-6 mt-10">
      <div className="relative overflow-hidden rounded-[32px] bg-[#a0a0a0] border border-[#f1ddd2] py-12 md:py-14">
        
        {/* SOFT BACKGROUND GLOW */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-10 w-[240px] h-[240px] bg-orange-200/40 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-0 w-[220px] h-[220px] bg-gray-200/50 blur-3xl rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            
            {/* MINI LABEL */}
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/70 px-4 py-2 text-xs font-medium text-gray-700">
              <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse"></span>
              Your Technology Growth Partner
            </div>

            {/* HEADING */}
            <h2 className="mt-5 text-[32px] md:text-[44px] leading-[1.15] font-bold text-[#1a1a1a] max-w-3xl">
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
                className="inline-flex items-center justify-center bg-[#f15c2d] hover:bg-[#dc4f23] transition-all duration-300 text-white px-6 py-3 rounded-xl font-semibold shadow-md"
              >
                Start Your Project
              </Link>
            </div>

            {/* STATS */}
            <div className="mt-10 flex flex-wrap gap-8">
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
            <div className="relative w-full max-w-[380px] h-[300px]">
              
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
              <div className="absolute -left-6 top-6 bg-white px-4 py-3 rounded-2xl shadow-lg border border-orange-100">
                <h4 className="text-lg font-bold text-[#1a1a1a]">
                  50+
                </h4>
                <p className="text-xs text-gray-500">
                  Global Clients
                </p>
              </div>

              {/* FLOATING CARD */}
              <div className="absolute -right-5 bottom-6 bg-[#1a1a1a] text-white px-5 py-3 rounded-2xl shadow-xl">
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