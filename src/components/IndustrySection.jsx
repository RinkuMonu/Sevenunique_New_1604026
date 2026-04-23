"use client";

import { useState } from "react";
import Image from "next/image";

export default function IndustrySection({ data }) {
  const items = data?.items || [];
  const [activeIndex, setActiveIndex] = useState(0);

  if (!data || items.length === 0) return null;

  const active = items[activeIndex];

  return (
    <section className="py-24 bg-[#f5f6f7]">
      <div className="max-w-7xl mx-auto px-10">
        {/* Top Header */}
        <p className="text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-4">
          {data.eyebrow || "BACKEND SOLUTIONS"}
        </p>

        <h2 className="text-5xl font-bold text-[#101828] mb-6 leading-tight max-w-3xl">
          {data.heading}
        </h2>

        <p className="text-[#475467] text-lg max-w-3xl mb-14 leading-relaxed">
          {data.description}
        </p>

        {/* Main Interactive Box */}
        <div className="border border-gray-200 rounded-xl overflow-hidden bg-white grid md:grid-cols-[350px_1fr] shadow-sm">
          
          {/* LEFT SIDEBAR MENU */}
          <div className="border-r border-gray-200 bg-white">
            {items.map((item, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-full flex justify-between items-center px-8 py-6 text-left border-b border-gray-100 transition-all duration-200 group
                  ${activeIndex === i ? "bg-white" : "bg-white hover:bg-gray-50"}
                `}
              >
                <span className={`text-[17px] ${activeIndex === i ? "text-[#101828] font-semibold" : "text-gray-500"}`}>
                  {item.label}
                </span>
                <span className={`text-xl transition-transform duration-300 ${activeIndex === i ? "text-orange-500 translate-x-0" : "text-transparent -translate-x-2 group-hover:text-gray-300"}`}>
                  →
                </span>
              </button>
            ))}
            {/* Spacer to fill remaining sidebar if items are few */}
            <div className="h-full bg-white"></div>
          </div>

          {/* RIGHT CONTENT AREA */}
          <div className="flex flex-col">
            
            {/* Top Banner with Gradient Overlay */}
            <div className="relative h-[220px] w-full overflow-hidden bg-black">
              {/* Background Image */}
              {active.image && (
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  className="object-cover opacity-60"
                />
              )}
              
              {/* Gradient Overlay: Solid black on left, transparent on right */}
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent flex flex-col justify-center px-12">
                <h3 className="text-3xl font-bold text-white mb-3">
                  {active.title}
                </h3>
                <p className="text-gray-200 text-base max-w-md leading-relaxed">
                  {active.description}
                </p>
              </div>
            </div>

            {/* Bottom Solution List */}
            <div className="p-12">
              <p className="text-[10px] font-bold tracking-[0.2em] text-[#101828]/60 uppercase mb-8">
                BUILD SOLUTIONS FOR:
              </p>

              <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                {active.points.map((point, i) => (
                  <div key={i} className="flex items-start gap-3 text-[15px] text-[#344054]">
                    <span className="text-orange-500 text-lg leading-none mt-1">•</span>
                    <span className="font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}