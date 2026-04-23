"use client";

import { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";

export default function BestPracticesSection() {
  const [active, setActive] = useState(null);

  const data = [
    {
      title: "Part 1: Design",
      content:
        "Focus on intuitive UI/UX, accessibility, and responsive layouts. Use Material Design principles and user-centered design practices.",
    },
    {
      title: "Part 2: Implementation",
      content:
        "Write clean, modular code. Follow MVVM architecture, optimize performance, and ensure efficient API integration.",
    },
    {
      title: "Part 3: Testing",
      content:
        "Perform unit testing, UI testing, and real-device testing to ensure stability, performance, and bug-free experience.",
    },
  ];

  const toggle = (i) => {
    setActive(active === i ? null : i);
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 flex gap-12">
        
        {/* LEFT CONTENT */}
        <div className="flex-1 max-w-3xl">
          
          {/* Heading */}
          <h2 className="text-[42px] font-semibold text-[#0f172a] leading-tight mb-6">
            Best Practices for Android App Development
          </h2>

          {/* Subtext */}
          <p className="text-[16px] text-gray-600 leading-7 mb-10">
            Android has evolved considerably over the years. Here are some industry-standard best practices we follow for high-quality app development.
          </p>

          {/* Accordion */}
          <div>
            {data.map((item, i) => (
              <div
                key={i}
                className="border-b border-gray-200 py-6 cursor-pointer"
                onClick={() => toggle(i)}
              >
                <div className="flex items-center justify-between">
                  
                  <h3 className="text-[22px] text-[#334155] font-medium">
                    {item.title}
                  </h3>

                  <span className="text-orange-500 text-xl">
                    {active === i ? <FaTimes /> : <FaPlus />}
                  </span>
                </div>

                {/* Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    active === i ? "max-h-40 mt-4" : "max-h-0"
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