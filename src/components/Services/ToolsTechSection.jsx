"use client";

import { useState } from "react";

export default function ToolsTechSection({ toolsTech }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!toolsTech) return null;

  const { sectionLabel, heading, description, items } = toolsTech;
  const activeItem = items[activeIndex];

  return (
    <section className="bg-[#f5f6f7] px-6 py-20 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* TOP */}
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4">
          {sectionLabel}
        </p>

        <h2 className="text-[42px] font-semibold leading-[1.2] text-[#101010] max-w-4xl mb-6">
          {heading}
        </h2>

        <p className="text-gray-600 max-w-3xl mb-12 leading-[1.7]">
          {description}
        </p>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-12 relative">

          {/* LEFT LIST */}
          <div className="flex flex-col gap-4 relative">
            {items.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`cursor-pointer flex items-center gap-3 px-5 py-4 rounded-lg border transition-all duration-300
                    ${
                      isActive
                        ? "border-orange-500 bg-white"
                        : "border-gray-200 bg-gray-100 hover:border-orange-300"
                    }`}
                >
                  <span className="text-orange-500">✔</span>

                  <p
                    className={`text-[18px] font-outfit ${
                      isActive
                        ? "font-semibold text-black"
                        : "font-medium text-gray-800"
                    }`}
                  >
                    {item.title}
                  </p>
                </div>
              );
            })}

            {/* 🔥 RIGHT BOX (NO TITLE + BIGGER WIDTH) */}
            <div
              className="hidden lg:block absolute left-[105%] w-[520px] transition-all duration-500"
              style={{
                top: `${activeIndex * 88}px`,
              }}
            >
              <div className="border border-orange-400 rounded-xl p-6 bg-white shadow-md">

                {/* ❌ TITLE REMOVED */}

                <p className="text-gray-700 leading-[1.7] mb-4 text-[16px]">
                  {activeItem.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {activeItem.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-md bg-gray-200 text-sm text-gray-800"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}