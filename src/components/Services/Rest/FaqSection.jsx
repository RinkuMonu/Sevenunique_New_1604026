"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function FaqSection() {
  const [active, setActive] = useState(null);

  const faqs = [
    {
      q: "How does outsourcing to an Android app development company work?",
      a: "Outsourcing involves partnering with a company that provides skilled Android developers who handle your project requirements, timelines, and delivery while keeping you informed throughout the process.",
    },
    {
      q: "Can I hire outsourced Android App developers on a full-time basis?",
      a: "Yes, you can hire developers on a full-time, part-time, or project basis depending on your business needs and engagement model.",
    },
    {
      q: "What kind of applications can you build for Android devices?",
      a: "We build enterprise apps, consumer apps, eCommerce platforms, on-demand apps, and custom solutions tailored to business needs.",
    },
    {
      q: "Will Android app development companies do custom development work?",
      a: "Yes, most companies specialize in custom development tailored to your specific business requirements and goals.",
    },
    {
      q: "How does the choice of technology and tools affect the overall Android app development cost?",
      a: "The tech stack, tools, and integrations directly impact development complexity, time, and cost. More advanced features typically increase overall investment.",
    },
  ];

  const toggle = (i) => {
    setActive(active === i ? null : i);
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 12 GRID */}
        <div className="grid grid-cols-12 gap-10">
          
          {/* MAIN CONTENT (9 COLS) */}
          <div className="col-span-12 lg:col-span-9">
            
            {/* Heading */}
            <h2 className="text-[42px] font-semibold text-[#0f172a] mb-10">
              Frequently Asked Questions (FAQ)
            </h2>

            {/* Accordion */}
            <div>
              {faqs.map((item, i) => (
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

          {/* EMPTY RIGHT SPACE (3 COLS) */}
          <div className="hidden lg:block lg:col-span-3"></div>

        </div>
      </div>
    </section>
  );
}