"use client";

import Image from "next/image";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function AwardsSection() {
  return (
    <section className={`${outfit.className} bg-[#f3f3f3] py-10 px-6`}>

      <div className=" mx-auto bg-[#0b0b0b] rounded-2xl px-10 py-14">

        <div className="grid lg:grid-cols-3 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>
            <p className="text-xs tracking-widest text-white/50 mb-4 uppercase">
              Our Awards
            </p>

            <h2 className="text-4xl lg:text-5xl font-semibold leading-tight mb-6 text-white">
              <span className="text-[#f4622a]">Excellence </span>
              <br />
              By <br />
              Default.            </h2>

            <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-sm">
            The standard we deliver every time.
130+ awards highlight our focus on quality and long-term client value.


            </p>

            <button className="text-[#f4622a] text-sm font-medium border-b border-[#f4622a] pb-1 hover:opacity-80 transition">
              Our trophy cabinet →
            </button>
          </div>

          {/* CENTER STATS */}
          <div className="flex flex-col items-center gap-20">

            {/* STAT 1 */}
            <div className="relative w-44 h-44 flex items-center justify-center">

              {/* ROTATING TEXT */}
              <svg
                className="absolute w-full h-full spin-slow"
                viewBox="0 0 200 200"
              >
                <defs>
                  <path
                    id="circlePath1"
                    d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0"
                  />
                </defs>
                <text fill="#6b7280" fontSize="18" letterSpacing="2">
                  <textPath href="#circlePath1">
                    projects executed successfully • projects executed successfully •
                  </textPath>
                </text>
              </svg>

              {/* INNER CONTENT */}
              <div className="text-center z-10">
                <p className="text-3xl font-semibold text-white">1,250+</p>
                <p className="text-sm text-white/60">projects delivered</p>
              </div>
            </div>

            {/* STAT 2 */}
            <div className="relative w-44 h-44 flex items-center justify-center">

              {/* ROTATING TEXT */}
              <svg
                className="absolute w-full h-full spin-slow"
                viewBox="0 0 200 200"
              >
                <defs>
                  <path
                    id="circlePath2"
                    d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0"
                  />
                </defs>
                <text fill="#6b7280" fontSize="18" letterSpacing="2">
                  <textPath href="#circlePath2">
                    industry sectors • industry sectors • industry sectors •
                  </textPath>
                </text>
              </svg>
              {/* INNER CONTENT */}
              <div className="text-center z-10">
                <p className="text-3xl font-semibold text-white">130+</p>
                <p className="text-sm text-white/60">industry sectors</p>
              </div>
            </div>

          </div>

          {/* RIGHT AWARDS */}
          <div className="grid grid-cols-2 gap-8 border-l border-white/10 pl-4">

            <div className="text-center space-y-3">
              <div className="w-24 h-12 mx-auto relative">
                <Image src="/logos/ft2.png" alt="Financial Times" fill className="object-contain" />
              </div>
              <p className="text-xs text-white/40">
                America's Fastest-Growing Companies 2025
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-24 h-12 mx-auto relative">
                <Image src="/logos/c10.png" alt="CIO100 Awards" fill className="object-contain" />
              </div>
              <p className="text-xs text-white/40">
                Top 100 U.S. IT Innovators 2025
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto relative">
                <Image src="/logos/clutch-new.png" alt="Clutch" fill className="object-contain" />
              </div>
              <p className="text-xs text-white/40">
                Nearshore North America Top Software Developers 2025
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto relative">
                <Image src="/logos/out.png" alt="Outsourcing" fill className="object-contain" />
              </div>
              <p className="text-xs text-white/40">
                Top 100 Global Outsourcing Providers 2024
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto relative">
                <Image src="/logos/inc.png" alt="Inc5000" fill className="object-contain" />
              </div>
              <p className="text-xs text-white/40">
                America's fastest-growing companies 2024
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto relative">
                <Image src="/logos/globee-new.png" alt="Globee" fill className="object-contain" />
              </div>
              <p className="text-xs text-white/40">
                Company of the Year Artificial Intelligence 2024
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}