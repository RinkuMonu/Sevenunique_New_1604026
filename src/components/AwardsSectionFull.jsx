"use client";
import Link from "next/link";

import Image from "next/image";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function AwardsSection() {
  const companies = [
    // Image warning fix: use logo assets that exist in /public/logos.
    "/logos/google-new.png",
    "/logos/adobe.png",
    "/logos/salesforce.png",
    "/logos/motorola.png",
    "/logos/hp.png",
    "/logos/nextroll-new.png",
  ];

  return (
    <section className={`${outfit.className} bg-[#f3f3f3] px-4 py-12 sm:px-6 sm:py-16 lg:py-24`}>
      <div className="relative mx-auto max-w-6xl space-y-12 sm:space-y-16 lg:space-y-20">

        {/* ================= HEADER ================= */}
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-gray-500 mb-4">
            Our Awards
          </p>

          <h2 className="text-3xl md:text-4xl font-medium text-[#101010] leading-snug max-w-xl">
            Global companies have trusted us to build and scale their AI solutions for over a decade.
          </h2>

          <span className="text-[#f4622a] text-xl mt-4 inline-block">↓</span>
        </div>

        {/* ================= BLACK CONTAINER ================= */}
        {/* Responsive UI update: award panel padding scales with the viewport. */}
        <div className="rounded-2xl bg-[#0b0b0b] px-5 py-10 sm:px-8 md:py-14 lg:px-14 lg:py-16">

          <div className="grid items-center gap-10 lg:grid-cols-3 lg:gap-16">

            {/* LEFT */}
            <div>
              <p className="text-[11px] tracking-[0.2em] text-white/40 mb-5 uppercase">
                Our Awards
              </p>

              <h2 className="mb-6 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[52px]">
                <span className="text-[#f4622a]">Excellence.</span>
                <br />
                Our minimum bar
                <br />
                for client delivery.
              </h2>

              <p className="text-white/60 text-[14px] leading-[1.7] mb-8 max-w-xs">
                Over 50 awards, accolades, and achievements showcase our commitment to client success.
              </p>

              {/* <button className="text-[#f4622a] text-sm font-medium border-b border-[#f4622a] pb-1 hover:opacity-80 transition">
                Our trophy cabinet →
              </button> */}
            </div>

            {/* CENTER STATS */}
            <div className="flex flex-row flex-wrap items-center justify-center gap-4 sm:gap-8 lg:flex-col lg:gap-24">

              {/* STAT 1 */}
              <div className="relative flex h-36 w-36 items-center justify-center sm:h-48 sm:w-48">

                <svg className="absolute w-full h-full spin-slow" viewBox="0 0 200 200">
                  <defs>
                    <path
                      id="circlePath1"
                      d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0"
                    />
                  </defs>
                  <text fill="#6b7280" fontSize="13" letterSpacing="2">
                    <textPath href="#circlePath1">
                      projects executed successfully • projects executed successfully •
                    </textPath>
                  </text>
                </svg>

                <div className="text-center z-10">
                  <p className="text-4xl font-semibold text-white">3,500+</p>
                  <p className="text-sm text-white/60 mt-1">projects delivered</p>
                </div>
              </div>

              {/* STAT 2 */}
              <div className="relative flex h-36 w-36 items-center justify-center sm:h-48 sm:w-48">

                <svg className="absolute w-full h-full spin-slow" viewBox="0 0 200 200">
                  <defs>
                    <path
                      id="circlePath2"
                      d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0"
                    />
                  </defs>
                  <text fill="#6b7280" fontSize="13" letterSpacing="2">
                    <textPath href="#circlePath2">
                      industry sectors • industry sectors • industry sectors •
                    </textPath>
                  </text>
                </svg>

                <div className="text-center z-10">
                  <p className="text-4xl font-semibold text-white">130+</p>
                  <p className="text-sm text-white/60 mt-1">industry sectors</p>
                </div>
              </div>

            </div>

            {/* RIGHT AWARDS */}
            <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:gap-10 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">

              <div className="text-center space-y-3">
                <div className="w-24 h-10 mx-auto relative">
                  <Image src="/logos/ft2.png" alt="" fill sizes="96px" className="object-contain" />
                </div>
                <p className="text-[11px] text-white/40">
                  America&apos;s Fastest-Growing Companies 2025
                </p>
              </div>

              <div className="text-center space-y-3">
                <div className="w-24 h-10 mx-auto relative">
                  <Image src="/logos/c10.png" alt="" fill sizes="96px" className="object-contain" />
                </div>
                <p className="text-[11px] text-white/40">
                  Top 100 U.S. IT Innovators 2025
                </p>
              </div>

              <div className="text-center space-y-3">
                <div className="w-16 h-16 mx-auto relative">
                  <Image src="/logos/clutch-new.png" alt="" fill sizes="64px" className="object-contain" />
                </div>
                <p className="text-[11px] text-white/40">
                  Nearshore North America Top Software Developers 2025
                </p>
              </div>

              <div className="text-center space-y-3">
                <div className="w-16 h-16 mx-auto relative">
                  <Image src="/logos/out.png" alt="" fill sizes="64px" className="object-contain" />
                </div>
                <p className="text-[11px] text-white/40">
                  Top 100 Global Outsourcing Providers 2024
                </p>
              </div>

              <div className="text-center space-y-3">
                <div className="w-16 h-16 mx-auto relative">
                  {/* Image warning fix: fill images declare their rendered size. */}
                  <Image src="/logos/inc.png" alt="" fill sizes="64px" className="object-contain" />
                </div>
                <p className="text-[11px] text-white/40">
                  America&apos;s fastest-growing companies 2024
                </p>
              </div>

              <div className="text-center space-y-3">
                <div className="w-16 h-16 mx-auto relative">
                  <Image src="/logos/globee-new.png" alt="" fill sizes="64px" className="object-contain" />
                </div>
                <p className="text-[11px] text-white/40">
                  Company of the Year Artificial Intelligence 2024
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* ================= FOOTER ================= */}
        <div className="relative">

          {/* BACKGROUND LOGOS */}
          <div className="absolute inset-0 flex flex-wrap justify-center items-center gap-10 opacity-10 pointer-events-none">
            {companies.map((logo, i) => (
              // Image warning fix: a sized wrapper lets fill preserve every logo's aspect ratio.
              <span key={i} className="relative h-[60px] w-[120px] max-w-full">
                <Image src={logo} alt="" fill sizes="120px" className="object-contain" />
              </span>
            ))}
          </div>

          {/* CONTENT */}
          <div className="relative z-10 max-w-md">
            <span className="text-[#f4622a] text-xl block mb-4">↓</span>

           <h2 className="text-3xl md:text-4xl font-medium text-[#101010] leading-snug max-w-xl">
              Accelerate AI development and delivery with our top-rated nearshore teams.
            </h2>

            <Link
  href="/schedule-a-call-page"
  className="inline-block bg-green-500 text-white text-sm px-4 py-2 rounded-md"
>
  Schedule a call
</Link>
          </div>

        </div>

      </div>

      {/* SPIN ANIMATION */}
      <style jsx>{`
        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .spin-slow {
          animation: spinSlow 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
