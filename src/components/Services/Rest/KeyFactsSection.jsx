"use client";

import { useState } from "react";
import Image from "next/image";

export default function KeyFactsSection({ data }) {
  const [activeTab, setActiveTab] = useState(0);

  if (!data) return null; // ✅ safety

  const { tabs, content, sidebar } = data;

  return (
   <section
  id="key-facts"
  className="bg-white py-12 sm:py-16 lg:py-24">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    {/* Heading */}
    <div className="mb-8 lg:mb-12">
      <h2 className="max-w-4xl break-words text-2xl font-semibold leading-tight text-[#0f172a] sm:text-3xl md:text-4xl lg:text-[44px] lg:leading-[54px]">
        {content?.[activeTab]?.title}
      </h2>
    </div>
    {/* Content */}
    <div className="grid grid-cols-1 gap-8 rounded-3xl border border-slate-200 bg-[#f8fafc] p-5 sm:p-6 lg:grid-cols-12 lg:gap-12 lg:p-10">
      {/* Left Tabs */}
      <div className="lg:col-span-3">
        {/* Mobile */}
        <div className="flex gap-3 overflow-x-auto pb-2 lg:hidden scrollbar-hide">
          {tabs?.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm transition-all ${
                activeTab === i
                  ? "border-orange-500 bg-orange-50 font-medium text-orange-600"
                  : "border-slate-200 bg-white text-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        {/* Desktop */}
        <div className="hidden lg:block space-y-5">
          {tabs?.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`group flex w-full items-center justify-between border-b pb-4 text-left transition-all ${
                activeTab === i
                  ? "border-orange-500 text-orange-600"
                  : "border-slate-200 text-gray-500 hover:text-black"
              }`}
            >
              <span className="pr-3 text-[16px] leading-6 break-words">
                {tab}
              </span>
              <span
                className={`text-xl transition-opacity ${
                  activeTab === i
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              >
                →
              </span>
            </button>
          ))}
        </div>
      </div>
      {/* Right Content */}
      <div className="lg:col-span-9">
        <p className="break-words whitespace-pre-line text-sm leading-7 text-gray-600 sm:text-base sm:leading-8 lg:text-[17px]">
          {content?.[activeTab]?.body}
        </p>
      </div>
    </div>
  </div>
</section> 
  );
}

