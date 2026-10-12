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
   <section
  id="best-practices"
  className="bg-[#f8fafc] py-12 sm:py-16 lg:py-24"
>
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col gap-8 lg:gap-12">

      {/* LEFT CONTENT */}
      <div className="w-full">

        {/* Heading */}
        <h2 className="mb-4 break-words text-2xl font-semibold leading-tight text-[#0f172a] sm:mb-5 sm:text-3xl md:text-4xl lg:mb-6 lg:text-[42px] lg:leading-[52px]">
          {title}
        </h2>

        {/* Description */}
        <p className="mb-8 text-sm leading-7 text-gray-600 sm:text-base lg:mb-10 lg:max-w-4xl">
          {description}
        </p>

        {/* Accordion */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

          {items?.map((item, i) => (
            <div
              key={i}
              className="cursor-pointer border-b border-gray-200 px-4 py-5 last:border-b-0 sm:px-6 sm:py-6 lg:px-8"
              onClick={() => toggle(i)}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4">

                <h3 className="flex-1 break-words text-base font-medium leading-snug text-[#334155] sm:text-lg md:text-xl lg:text-[22px]">
                  {item.title}
                </h3>

                <span className="mt-1 flex-shrink-0 text-lg text-orange-500 sm:text-xl">
                  {active === i ? <FaTimes /> : <FaPlus />}
                </span>
              </div>

              {/* Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  active === i
                    ? "mt-4 max-h-[800px]"
                    : "max-h-0"
                }`}
              >
                <p className="text-sm leading-7 text-gray-600 sm:text-[15px] md:text-base">
                  {item.content}
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
