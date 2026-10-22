"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function FaqSection({ data }) {
  const [active, setActive] = useState(null);

  if (!data) return null; // ✅ safety

  const { title, questions } = data;

  const toggle = (i) => {
    setActive(active === i ? null : i);
  };

  return (
    <section id="faq" className="bg-white py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        <div>
          
          {/* MAIN CONTENT */}
          <div>
            
            {/* Heading */}
            {/* Responsive UI update: section title scales at small breakpoints. */}
            <h2 className="mb-7 [overflow-wrap:anywhere] text-3xl font-semibold leading-tight text-[#0f172a] sm:mb-10 sm:text-4xl lg:text-[42px]">
              {title}
            </h2>

            {/* Accordion */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white px-5 shadow-sm sm:px-8">
              {questions?.map((item, i) => (
                <div
                  key={i}
                  className="cursor-pointer border-b border-gray-200 py-5 last:border-b-0"
                  onClick={() => toggle(i)}
                >
                  <div className="flex min-w-0 items-center justify-between gap-3">
                    
                    {/* Question */}
                    <p className="min-w-0 [overflow-wrap:anywhere] text-base leading-relaxed text-[#1e293b] sm:text-[17px] sm:leading-7">
                      {item.q}
                    </p>

                    {/* Icon */}
                    <div className="shrink-0">
                      <div className="w-7 h-7 rounded-full bg-[#c2410c] flex items-center justify-center">
                        <FiChevronDown
                          className={`text-white transition-transform duration-300 ${
                            active === i ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </div>

                  </div>

                  {/* Answer */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      active === i ? "max-h-[1000px] mt-4" : "max-h-0"
                    }`}
                  >
                    <p className="[overflow-wrap:anywhere] pr-0 text-[15px] leading-7 text-gray-600 sm:pr-10">
                      {item.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
