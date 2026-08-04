"use client";

import Image from "next/image";
import Link from "next/link";

export const HeroAboutSection = () => {
  return (
    <section className="relative flex w-full items-center overflow-hidden bg-white lg:min-h-screen">
      {/* Responsive UI update: readable phone typography, visible artwork, and stacked CTAs. */}
      {/* Main content wrapper */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-center justify-between gap-8 px-4 py-10 sm:gap-10 sm:px-6 sm:py-14 lg:min-h-screen lg:flex-row lg:gap-10 lg:px-20 lg:py-20 xl:px-24">
        {/* ── LEFT SIDE ── */}
        <div className="w-full max-w-[840px] lg:flex-1">
          {/* Heading */}
          <h1 className="mb-5 text-3xl font-extrabold leading-[1.12] tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:mb-6 lg:text-[3.25rem]">
            We build better software because our talent is {" "}
            <span className="relative">
            always learning and improving
              <span className="text-orange-500">.</span>
            </span>
          </h1>

          {/* Description */}
          <p className="mb-7 max-w-[660px] text-base leading-relaxed text-gray-700 sm:text-lg lg:mb-10">
           Deliver stronger results in every project. Join the Sevenunique Circles program to continuously upgrade your technical, soft, and leadership skills.
          </p>

          {/* CTA buttons */}
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Link href="/schedule-a-call-page" className="inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-5 py-3.5 text-center text-[0.95rem] font-bold tracking-wide text-white transition-colors duration-200 hover:bg-blue-700 active:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 sm:w-auto sm:px-7 sm:py-4">
              Upskill Inside Circles
            </Link>
            <Link href="/jobOp" className="inline-flex w-full items-center justify-center rounded-lg border-2 border-gray-900 px-5 py-3.5 text-center text-[0.95rem] font-bold tracking-wide text-gray-900 transition-colors duration-200 hover:bg-gray-50 active:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 sm:w-auto sm:px-7 sm:py-4">
              Hire Our Top Talent
            </Link>
          </div>
        </div>

        {/* ── RIGHT SIDE — Orbit canvas ── */}
        {/* ── RIGHT SIDE — Orbit ── */}
        {/* <div className="hidden lg:block absolute right-[-240px] top-1/2 -translate-y-1/2 w-[700px] h-[700px]">
          <div className="relative w-full h-full">
            <OrbitAnimation />
          </div>
        </div> */}

        <div className="flex w-full justify-center lg:w-auto lg:flex-1 lg:justify-end">
        <Image
          src="/images/orbit-img.PNG"
          alt="Sevenunique Circles learning network"
          width={600}
          height={520}
          priority
          className="h-auto w-full max-w-[380px] object-contain sm:max-w-[460px] lg:max-w-[520px]"
        />
        </div>
      </div>
    </section>
  );
};
