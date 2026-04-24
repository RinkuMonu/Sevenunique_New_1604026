"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

const OrbitAnimation = dynamic(() => import("./OrbitAnimation"), {
  ssr: false,
  loading: () => null,
});

export const HeroAboutSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden flex items-center">
      {/* Main content wrapper */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-24 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0 py-24 lg:py-0 lg:min-h-screen mt-18">
        {/* ── LEFT SIDE ── */}
        <div className="flex-4 max-w-[840px]">
          {/* Heading */}
          <h4 className="font-extrabold text-[clamp(1rem,4.5vw,3.25rem)] leading-[1.12] tracking-tight text-gray-900 mb-6">
            We build better software because{" "}
            <span className="relative">
              our talent is always upskilling
              <span className="text-orange-500">.</span>
            </span>
          </h4>

          {/* Description */}
          <p className="text-[clamp(0.95rem,1.5vw,1.1rem)] leading-relaxed text-gray-700 max-w-[660px] mb-10">
            Deliver better results on each and every project. Join the BairesDev
            Circles program to continually level up your technical, soft, and
            leadership skills.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/schedule-a-call-page" className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-[0.95rem] tracking-wide px-7 py-4 rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2">
              Upskill Inside Circles
            </Link>
            <Link href="/jobOp" className="border-2 border-gray-900 hover:bg-gray-50 active:bg-gray-100 text-gray-900 font-bold text-[0.95rem] tracking-wide px-7 py-4 rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2">
              Hire Our Top Talent
            </Link>
          </div>
        </div>

        {/* ── RIGHT SIDE — Orbit canvas ── */}
        {/* ── RIGHT SIDE — Orbit ── */}
        <div className="hidden lg:block absolute right-[-240px] top-1/2 -translate-y-1/2 w-[700px] h-[700px]">
          <div className="relative w-full h-full">
            <OrbitAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};
