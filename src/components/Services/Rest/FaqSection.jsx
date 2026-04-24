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
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-12 gap-10">
          
          {/* MAIN CONTENT */}
          <div className="col-span-12 lg:col-span-9">
            
            {/* Heading */}
            <h2 className="text-[42px] font-semibold text-[#0f172a] mb-10">
              {title}
            </h2>

            {/* Accordion */}
            <div>
              {questions?.map((item, i) => (
                <div
                  key={i}
                  className="border-b border-gray-200 py-5 cursor-pointer"
                  onClick={() => toggle(i)}
                >
                  <div className="flex items-center justify-between">
                    
                    {/* Question */}
                    <p className="text-[17px] text-[#1e293b] leading-7">
                      {item.q}
                    </p>

                    {/* Icon */}
                    <div className="ml-4">
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
                      active === i ? "max-h-40 mt-4" : "max-h-0"
                    }`}
                  >
                    <p className="text-[15px] text-gray-600 leading-7 pr-10">
                      {item.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* EMPTY RIGHT */}
          <div className="hidden lg:block lg:col-span-3"></div>

        </div>
      </div>
    </section>
  );
}