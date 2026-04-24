"use client";

import Image from "next/image";

export default function TeamShowcase() {
  return (
    <section className="bg-[#f5f5f6] py-20 px-6 md:px-12">
      
      {/* MAIN CONTAINER */}
      <div className="max-w-[1200px] mx-auto text-center relative">

        {/* ✅ TEXT (always above) */}
        <h2 className="relative z-10 text-[28px] md:text-[36px] font-semibold text-[#111] leading-snug mb-16 max-w-4xl mx-auto">
          Every year our software developers, QA engineers, designers, and project managers work on hundreds of exciting projects...
        </h2>

        {/* ✅ SHAPES CONTAINER (below text) */}
        <div className="relative z-0 flex flex-col items-center gap-10">

          {/* TOP ROW */}
          <div className="flex gap-10">
            
            <div className="relative w-[140px] h-[140px]">
              <div className="absolute inset-0 bg-[#f97316] rounded-full opacity-80 z-0" />
              <Image
                src="/team/p1.png"
                alt=""
                fill
                className="object-contain relative z-10"
              />
            </div>

            <div className="relative w-[140px] h-[140px]">
              <div className="absolute inset-0 bg-[#34d399] rounded-full opacity-80 z-0" />
              <Image
                src="/team/p2.png"
                alt=""
                fill
                className="object-contain relative z-10"
              />
            </div>
          </div>

          {/* BOTTOM ROW */}
          <div className="flex gap-10 items-end">

            <div className="relative w-[140px] h-[140px]">
              <div className="absolute inset-0 bg-[#f59e0b] clip-triangle z-0" />
              <Image
                src="/team/p3.png"
                alt=""
                fill
                className="object-contain relative z-10"
              />
            </div>

            <div className="relative w-[140px] h-[140px]">
              <div className="absolute inset-0 bg-[#f97316] rounded-b-full z-0" />
              <Image
                src="/team/p4.png"
                alt=""
                fill
                className="object-contain relative z-10"
              />
            </div>

            <div className="relative w-[140px] h-[140px]">
              <div className="absolute inset-0 bg-[#60a5fa] z-0" />
              <Image
                src="/team/p5.png"
                alt=""
                fill
                className="object-contain relative z-10"
              />
            </div>

          </div>
        </div>
      </div>

      {/* SHAPE STYLE */}
      <style jsx>{`
        .clip-triangle {
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
      `}</style>
    </section>
  );
}