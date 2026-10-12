"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react"; // install if needed

export default function FAQSection({ data, twoColumn = false }) {
  const [openIndex, setOpenIndex] = useState(null);

  if (!data || !data.items?.length) return null;

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className={`mx-auto max-w-6xl px-4 sm:px-6 ${twoColumn ? "grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-20" : ""}`}>

        {/* Heading can sit beside the accordion on detail pages. */}
        <div className={twoColumn ? "lg:sticky lg:top-28" : ""}>
          <p className="text-xs font-semibold uppercase tracking-widest text-[#f46b45] mb-3">
            {data.sectionLabel}
          </p>

          <h2 className={`text-3xl md:text-4xl font-semibold text-gray-900 leading-tight max-w-3xl ${twoColumn ? "mb-0" : "mb-12"}`}>
            {data.heading}
          </h2>

          {twoColumn && data.description && (
            <p className="mt-5 max-w-md text-base leading-7 text-gray-600">
              {data.description}
            </p>
          )}
        </div>

        {/* Accordion */}
        <div className="border-t border-gray-200">
          {data.items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border-b border-gray-200 py-5 cursor-pointer"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                {/* Question Row */}
                <div className="flex justify-between items-center gap-4">
                  <h3 className="text-[15px] md:text-base text-gray-900 font-medium">
                    {item.question}
                  </h3>

                  <div
                    className={`w-6 h-6 flex items-center justify-center rounded-full transition
                      ${isOpen ? "bg-orange-500" : "bg-orange-500"}
                    `}
                  >
                    <ChevronDown
                      size={14}
                      className={`text-white transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[1000px] mt-3" : "max-h-0"
                  }`}
                >
                  <p className="text-sm text-gray-600 leading-relaxed max-w-4xl">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
