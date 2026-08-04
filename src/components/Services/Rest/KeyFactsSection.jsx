"use client";

import { useState } from "react";
import Image from "next/image";

export default function KeyFactsSection({ data }) {
  const [activeTab, setActiveTab] = useState(0);

  if (!data) return null; // ✅ safety

  const { tabs, content, sidebar } = data;

  return (
    <section id="key-facts" className="bg-white py-12 sm:py-16 lg:py-24">
      {/* Responsive UI update: tab content wraps and aligns safely on small screens. */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* HEADING */}
        <div className="mb-7 grid grid-cols-12 gap-6 sm:mb-10 lg:gap-12">
          <div className="col-span-12">
            {/* Responsive UI update: key-facts title remains readable on phones. */}
            <h2 className="max-w-[800px] [overflow-wrap:anywhere] text-3xl font-semibold leading-tight text-[#0f172a] sm:text-4xl lg:text-[44px]">
              {content?.[activeTab]?.title}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8 rounded-3xl border border-slate-200 bg-[#f8fafc] p-5 sm:p-8 lg:gap-12 lg:p-10">
          
          {/* LEFT TABS */}
          <div className="col-span-12 lg:col-span-3">
            <div className="grid gap-2 sm:grid-cols-3 lg:block lg:space-y-6">
              {tabs?.map((tab, i) => (
                <div
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`group min-w-0 cursor-pointer rounded-lg border px-3 py-3 transition-all duration-200 lg:rounded-none lg:border-x-0 lg:border-t-0 lg:px-0 lg:pb-4 ${
                    activeTab === i
                      ? "text-orange-600 border-orange-500 font-medium"
                      : "text-gray-500 border-gray-100 hover:text-black"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="min-w-0 [overflow-wrap:anywhere] pr-2 text-sm leading-snug sm:text-[15px] lg:pr-4">
                      {tab}
                    </span>
                    <span
                      className={`text-xl transition-opacity duration-200 ${
                        activeTab === i
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                      }`}
                    >
                      →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* MIDDLE CONTENT */}
          <div className="col-span-12 lg:col-span-9">
            <p className="whitespace-pre-line [overflow-wrap:anywhere] text-base leading-relaxed text-gray-600 sm:text-[17px] sm:leading-8">
              {content?.[activeTab]?.body}
            </p>
          </div>

          {/* RIGHT SIDEBAR */}
          {/* <div className="relative h-100 rounded-lg overflow-hidden mb-4">
  <Image
    src="/images/qa.png"
    alt="img"
    fill
    className="object-contain transition-transform duration-300 hover:scale-105"
  />
</div> */}

        </div>
      </div>
    </section>
  );
}
