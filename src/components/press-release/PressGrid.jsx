"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const data = [
  {
    title:
      "65% of Developers Expect Their Roles To Be Redefined by AI in 2026",
    date: "October 10, 2025",
    img: "/images/p1.png",
  },
  {
    title:
      "Dev Barometer: AI Saves Developers Nearly a Full Workday Per Week on Coding",
    date: "September 8, 2025",
    img: "/images/p2.png",
  },
  {
    title:
      "BairesDev Makes 2025 Inc. 5000 List for the Sixth Time, Highlighting Continued Market Growth",
    date: "August 12, 2025",
    img: "/images/p3.png",
  },
  {
    title: "BairesDev’s AI Awarded Initiatives Cut Time-to-Hire by 50% and Drove $40M in Growth",
    date: "July 10, 2025",
    img: "/images/p4.png",
  },
  {
    title: "Senior Developer Hiring Trends: Human Skills To Outshine Technical Expertise, Says BairesDev CEO at World Economic Forum",
    date: "June 24, 2025",
    img: "/images/p5.png",
  },
  {
    title: "BairesDev Ranked Among Clutch’s Top Software Leaders 2025 with Triple Recognition",
    date: "June 12, 2025",
    img: "/images/p6.png",
  },
];

export default function PressGrid() {
  return (
    <section className="w-full bg-[#f3f4f6] px-6 md:px-12 py-16">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-sm font-bold tracking-widest text-gray-800 uppercase">
            Press Releases
          </h2>

          <button className="flex items-center text-black gap-2 text-sm font-medium border-b border-black pb-1">
            View all Press Releases
            <ArrowRight size={16} />
          </button>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div key={index} className="bg-white rounded-md overflow-hidden">
              
              {/* IMAGE */}
              <div className="w-full h-[220px] relative">
                <Image
                  src={item.img}
                  alt="press"
                  fill
                  className="object-cover"
                />
              </div>

              {/* CONTENT */}
              {(item.title || item.date) && (
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-[#1f2937] leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm text-gray-500">
                    {item.date}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}