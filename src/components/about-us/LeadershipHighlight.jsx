"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function LeadershipHighlight() {
  return (
    <section className="bg-[#f5f5f6] py-24 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-[32px] md:text-[40px] font-semibold text-[#111] leading-tight mb-8 max-w-lg">
            ...including the honor of our CEO speaking at the World Economic
            Forum in Davos...
          </h2>

          <button className="group text-[14px] font-medium text-[#111] border-b border-black pb-1 flex items-center gap-2 hover:text-[#f46b45] transition">
            Our leaders
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* RIGHT IMAGE LAYOUT */}
        <div className="flex flex-col gap-6">

          {/* TOP BIG IMAGE */}
          <div className="relative w-full h-[280px] md:h-[320px] rounded-2xl overflow-hidden">
            <Image
              src="/Team/ceo1.png" // 🔁 replace with your image
              alt="CEO speaking"
              fill
              className="object-cover"
            />
          </div>

          {/* BOTTOM 2 IMAGES */}
          <div className="grid grid-cols-2 gap-6">
            
            <div className="relative w-full h-[140px] md:h-[160px] rounded-2xl overflow-hidden">
              <Image
                src="/Team/ceo2.png" // 🔁 replace
                alt="CEO event"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative w-full h-[140px] md:h-[160px] rounded-2xl overflow-hidden">
              <Image
                src="/Team/ceo3.png" // 🔁 replace
                alt="CEO talk"
                fill
                className="object-cover"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}