"use client";

import { useState } from "react";
import Image from "next/image";

export default function WorkSection({ data }) {
  const tabs = data?.tabs || [];
  const [activeTab, setActiveTab] = useState(0);

  if (!data || tabs.length === 0) return null;

  const active = tabs[activeTab];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Top Section */}
        <p className="text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-6">
          {data.eyebrow || "HOW WE WORK"}
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-[#101828] mb-8 leading-[1.1] max-w-3xl mx-auto">
          {data.heading}
        </h2>

        <p className="text-[#475467] max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
          {data.description}
        </p>

        {/* Pills / Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-4xl mx-auto">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2.5 text-sm font-medium rounded-lg border transition-all flex items-center gap-2 ${
                activeTab === i
                  ? "bg-[#ecfdf3] border-[#079455] text-[#067647]"
                  : "bg-[#f9fafb] border-[#eaecf0] text-[#344054] hover:bg-gray-100"
              }`}
            >
              <span className={activeTab === i ? "text-[#079455]" : "text-gray-400"}>✓</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Main Card */}
        <div className="relative max-w-6xl mx-auto">
          <div className="bg-white border border-[#eaecf0] rounded-[24px] text-left shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden">
            
            {/* Card Content Area */}
            <div className="p-10 md:p-16 grid md:grid-cols-[1fr_1.5fr] gap-12 items-start">
              {/* Left Column */}
              <div>
                <p className="text-[10px] font-bold tracking-[0.15em] text-gray-400 uppercase mb-4">
                  {active.title}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-[#101828] leading-tight">
                  {active.heading}
                </h3>
              </div>

              {/* Right Column with Vertical Divider */}
              <div className="flex gap-10">
                <div className="hidden md:block w-[1px] bg-gray-100 self-stretch"></div>
                <p className="text-[#475467] text-base md:text-lg leading-relaxed">
                  {active.description}
                </p>
              </div>
            </div>

            {/* Footer Strip (The greenish area) */}
            <div className="bg-[#f0fdf9] px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-[#eaecf0]">
              
              <div className="flex items-center gap-4">
                {/* Expert Avatars */}
                <div className="flex -space-x-2.5">
                  {[1, 2, 3, 4, 5, 6].map((idx) => (
                    <div key={idx} className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                      <Image
                        src={`/images/man${(idx % 3) + 1}.png`} 
                        fill
                        className="object-cover"
                        alt="Expert"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-sm font-medium text-[#101828]">
                  Work with our backend development experts.
                </p>
              </div>

              {/* CTA Button */}
              <button className="w-full md:w-auto bg-[#079455] hover:bg-[#067647] text-white text-base font-semibold px-8 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-900/10">
                {data.card?.cta || "Talk to an expert"}
                <span className="text-xl">→</span>
              </button>
            </div>
          </div>

          {/* Bottom Card Stack Visual (The layered effect at the bottom) */}
          <div className="absolute -bottom-2 left-4 right-4 h-4 bg-white border border-[#eaecf0] rounded-3xl -z-10 opacity-50"></div>
        </div>
      </div>
    </section>
  );
}