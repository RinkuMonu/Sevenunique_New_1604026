"use client";

import { useState } from "react";

export default function KeyFactsSection({ data }) {
  const [activeTab, setActiveTab] = useState(0);

  if (!data) return null; // ✅ safety

  const { tabs, content, sidebar } = data;

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADING */}
        <div className="grid grid-cols-12 gap-12 mb-10">
          <div className="col-span-12 lg:col-span-9">
            <h2 className="text-[44px] font-semibold text-[#0f172a] leading-[1.1] max-w-[800px]">
              {content?.[activeTab]?.title}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-12">
          
          {/* LEFT TABS */}
          <div className="col-span-12 lg:col-span-3">
            <div className="space-y-6">
              {tabs?.map((tab, i) => (
                <div
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`cursor-pointer pb-4 border-b transition-all duration-200 group ${
                    activeTab === i
                      ? "text-orange-600 border-orange-500 font-medium"
                      : "text-gray-500 border-gray-100 hover:text-black"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[15px] leading-snug pr-4">
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
          <div className="col-span-12 lg:col-span-6">
            <p className="text-[17px] leading-8 text-gray-600 whitespace-pre-line">
              {content?.[activeTab]?.body}
            </p>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="col-span-12 lg:col-span-3 space-y-6">
            {sidebar?.map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-4">
                <div className="h-36 bg-gray-200 rounded-lg mb-4" />
                <p className="font-medium text-[#0f172a] hover:text-orange-600 cursor-pointer">
                  {item.title}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}