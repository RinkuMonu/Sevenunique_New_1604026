"use client";

import Image from "next/image";

export default function TeamShowcase() {
  return (
    <section className="bg-[#f5f5f6] py-20 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto text-center">

        {/* Heading */}
        <h2 className="text-[28px] md:text-[36px] font-semibold text-[#111] leading-snug mb-16 max-w-4xl mx-auto">
          Every year our software developers, QA engineers, designers, and project managers work on hundreds of exciting projects...
        </h2>

        {/* GRID */}
        <div className="flex flex-col items-center gap-10">

          {/* TOP ROW */}
          <div className="flex gap-10">
            
            {/* Circle 1 */}
            <div className="relative w-[140px] h-[140px]">
              <div className="absolute inset-0 bg-[#f97316] rounded-full opacity-80" />
              <Image
                src="/team/p1.png"
                alt=""
                fill
                className="object-contain relative z-10"
              />
            </div>

            {/* Circle 2 */}
            <div className="relative w-[140px] h-[140px]">
              <div className="absolute inset-0 bg-[#34d399] rounded-full opacity-80" />
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

            {/* Triangle */}
            <div className="relative w-[140px] h-[140px]">
              <div className="absolute inset-0 bg-[#f59e0b] clip-triangle" />
              <Image
                src="/team/p3.png"
                alt=""
                fill
                className="object-contain relative z-10"
              />
            </div>

            {/* Half Circle */}
            <div className="relative w-[140px] h-[140px]">
              <div className="absolute inset-0 bg-[#f97316] rounded-b-full" />
              <Image
                src="/team/p4.png"
                alt=""
                fill
                className="object-contain relative z-10"
              />
            </div>

            {/* Square */}
            <div className="relative w-[140px] h-[140px]">
              <div className="absolute inset-0 bg-[#60a5fa]" />
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

      {/* Custom Shape Style */}
      <style jsx>{`
        .clip-triangle {
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
      `}</style>
    </section>
  );
}