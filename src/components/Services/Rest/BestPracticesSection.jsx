"use client";

import { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";

export default function BestPracticesSection({ data }) {
  const [active, setActive] = useState(null);

  // ✅ safety (prevents crash)
  if (!data) return null;

  const { title, description, items } = data;

  const toggle = (i) => {
    setActive(active === i ? null : i);
  };

  return (
    <section id="best-practices" className="bg-[#f8fafc] py-12 sm:py-16 lg:py-24">
      <div className="mx-auto flex max-w-6xl gap-12 px-4 sm:px-6 lg:px-8">
        
        {/* LEFT CONTENT */}
        <div className="w-full">
          
          {/* Heading */}
          {/* Responsive UI update: section title scales at small breakpoints. */}
          <h2 className="mb-5 [overflow-wrap:anywhere] text-3xl font-semibold leading-tight text-[#0f172a] sm:mb-6 sm:text-4xl lg:text-[42px]">
            {title}
          </h2>

          {/* Subtext */}
          <p className="text-[16px] text-gray-600 leading-7 mb-10">
            {description}
          </p>

          {/* Accordion */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white px-5 shadow-sm sm:px-8">
            {items?.map((item, i) => (
              <div
                key={i}
                className="cursor-pointer border-b border-gray-200 py-5 last:border-b-0 sm:py-6"
                onClick={() => toggle(i)}
              >
                <div className="flex min-w-0 items-center justify-between gap-3">
                  
                  <h3 className="min-w-0 [overflow-wrap:anywhere] text-lg font-medium leading-snug text-[#334155] sm:text-[22px]">
                    {item.title}
                  </h3>

                  <span className="shrink-0 text-xl text-orange-500">
                    {active === i ? <FaTimes /> : <FaPlus />}
                  </span>
                </div>

                {/* Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    active === i ? "max-h-[1000px] mt-4" : "max-h-0"
                  }`}
                >
                  <p className="text-[15px] text-gray-600 leading-7">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
