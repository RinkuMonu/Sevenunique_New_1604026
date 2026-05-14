"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function LeadershipHighlight() {
  return (
    <section className="bg-[#f5f5f6] py-20 md:py-24 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">
          <h2 className="text-[26px] md:text-[34px] lg:text-[40px] font-semibold text-[#111] leading-tight mb-8 max-w-lg mx-auto lg:mx-0">
            ....including our CEO speaking about the company’s fintech growth journey and innovation-driven vision.
          </h2>

          <button className="group text-[14px] font-medium text-[#111] border-b border-black pb-1 flex items-center gap-2 hover:text-[#f46b45] transition mx-auto lg:mx-0">
            Our leaders
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* RIGHT IMAGE LAYOUT */}
        <div className="flex flex-col gap-4 md:gap-6">

          {/* TOP BIG IMAGE */}
          <div className="relative w-full h-[220px] sm:h-[260px] md:h-[400px] lg:h-[420px] rounded-2xl overflow-hidden">
            <Image
              src="/images/dineshsir.jpeg"
              alt="CEO speaking"
              fill
              className="object-contain"
            />
          </div>

        

        </div>

      </div>
    </section>
  );
}