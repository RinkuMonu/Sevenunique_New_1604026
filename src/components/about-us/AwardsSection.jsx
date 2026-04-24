"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function AwardsSection() {
  return (
    <section className="bg-[#f5f5f6] py-24 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-[32px] md:text-[40px] font-semibold text-[#111] leading-tight mb-8 max-w-md">
            We've received many awards and accolades...
          </h2>

          <button className="group text-[14px] font-medium text-[#111] border-b border-black pb-1 flex items-center gap-2 hover:text-[#f46b45] transition">
            Our trophy cabinet
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* RIGHT SIDE — SHIFTED RIGHT */}
        <div className="flex gap-6 ml-16 md:ml-28">

          {/* LEFT COLUMN (3 cards) */}
          <div className="flex flex-col gap-6 mt-[-40px]">
            <Card
              logo="/logos/inc1.png"
              text="America's fastest-growing companies 2025"
            />
            <Card
              logo="/logos/cio.png"
              text="Enterprise excellence and IT Innovation 2025"
            />
            <Card
              logo="/logos/cw.png"
              text="Computerworld's Best Places to Work in IT 2026"
            />
          </div>

          {/* RIGHT COLUMN (2 cards) */}
          <div className="flex flex-col gap-6 mt-10">
            <Card
              logo="/logos/b.png"
              text="VentureBeat's Women in AI Awards - Finalist 2025"
            />
            <Card
              logo="/logos/financial.png"
              text="America's Fastest-growing Companies list 2025"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

/* 🔥 Reusable Card */
function Card({ logo, text }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center justify-center text-center w-[180px] h-[180px] hover:shadow-md transition">
      
      <div className="relative w-[80px] h-[50px] mb-4">
        <Image
          src={logo}
          alt="award"
          fill
          className="object-contain"
        />
      </div>

      <p className="text-[13px] text-[#333] leading-5">
        {text}
      </p>

    </div>
  );
}