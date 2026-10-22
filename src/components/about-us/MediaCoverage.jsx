"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const data = [
  {
    question: "What are Add-On Services?",
    answer:
      "Sevenunique’s Add-On Services enhance your core digital solutions by providing domain registration, hosting, cloud infrastructure, IT consulting, website redesign, and maintenance.",
  },
  {
    question: "Why do I need domain and hosting services?",
    answer:
      "Reliable domain and hosting services ensure your website remains secure, fast, and accessible while building a strong online presence.",
  },
  {
    question: "How do cloud services benefit my business?",
    answer:
      "Cloud services provide scalable infrastructure, improved performance, better security, and seamless business continuity for growing businesses.",
  },
  {
    question: "What does IT consulting include?",
    answer:
      "IT consulting includes technology strategy, workflow optimization, system integration, and expert guidance to improve business efficiency.",
  },
  {
    question: "Why is website redesign important?",
    answer:
      "Website redesign improves user experience, strengthens brand identity, and ensures responsive performance across all devices.",
  },
  {
    question: "Do you offer ongoing website maintenance?",
    answer:
      "Yes, we provide regular website maintenance to keep your website updated, secure, optimized, and running smoothly.",
  },
];

export default function FAQs() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="bg-[#f5f5f6] py-20 px-6 md:px-12">
      <div className="max-w-[900px] mx-auto">
        
        {/* Heading */}
        <h2 className="text-[30px] md:text-[40px] font-semibold text-[#111] mb-12 text-center">
          Frequently Asked Questions
        </h2>

        {/* FAQ Accordion */}
        <div className="flex flex-col gap-5">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm"
            >
              {/* Question */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <h3 className="text-[16px] md:text-[18px] font-medium text-[#111] pr-4">
                  {item.question}
                </h3>

                <div className="min-w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#f15c2d] text-white">
                  {active === index ? <FaMinus /> : <FaPlus />}
                </div>
              </button>

              {/* Answer */}
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  active === index
                    ? "max-h-[220px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 text-[15px] leading-7 text-gray-600">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}