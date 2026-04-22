"use client";

import { useState } from "react";

const faqData = [
  {
    category: "General",
    items: [
      {
        question: "What does BairesDev do?",
        answer:
          "BairesDev provides nearshore software development teams and senior engineers to help companies build, ship, and maintain complex software faster...",
      },
      {
        question: "How does BairesDev help companies scale engineering teams?",
        answer: "We provide scalable team augmentation models...",
      },
      {
        question: "Why do companies choose nearshore developers?",
        answer: "Nearshore gives timezone alignment and cost efficiency...",
      },
      {
        question: "What software development services does BairesDev provide?",
        answer: "We provide full-cycle development services...",
      },
    ],
  },

  {
    category: "Industries",
    items: [
      {
        question: "What industries does BairesDev work with?",
        answer:
          "We’ve delivered solutions in 130+ industries including fintech, retail, healthcare...",
      },
    ],
  },

  {
    category: "Engagement Models",
    items: [
      {
        question:
          "What’s the difference between staff augmentation, dedicated teams, and outsourcing?",
        answer:
          "Staff augmentation adds engineers to your team, while outsourcing handles the entire project...",
      },
    ],
  },

  {
    category: "Technologies / Solutions",
    items: [
      {
        question: "What roles can BairesDev fill?",
        answer:
          "We cover backend, frontend, mobile, DevOps, AI/ML, QA, and more...",
      },
      {
        question:
          "Does BairesDev integrate with our existing tools and workflows?",
        answer: "Yes, we integrate seamlessly with your existing stack...",
      },
      {
        question: "How does BairesDev ensure engineer quality?",
        answer: "We hire top 1% engineers with strict vetting...",
      },
      {
        question:
          "How much does nearshore engineering cost compared to local hiring?",
        answer:
          "Nearshore significantly reduces costs while maintaining quality...",
      },
    ],
  },
];

export default function FAQCategories() {
  const [activeIndex, setActiveIndex] = useState({});

  const toggle = (catIndex, itemIndex) => {
    setActiveIndex((prev) => ({
      ...prev,
      [catIndex]:
        prev[catIndex] === itemIndex ? null : itemIndex,
    }));
  };

  return (
    <section className="bg-[#f6f7f9] py-[80px]">
      <div className="max-w-[1000px] px-6">

        {faqData.map((category, catIndex) => (
          <div key={catIndex} className="mb-[60px]">

            {/* CATEGORY TITLE */}
            <h2 className="text-[30px] font-semibold text-[#1f2933] mb-[30px]">
              {category.category}
            </h2>

            <div className="border-t border-gray-300">

              {category.items.map((item, itemIndex) => {
                const isActive =
                  activeIndex[catIndex] === itemIndex;

                return (
                  <div
                    key={itemIndex}
                    className="border-b border-gray-300 py-6"
                  >
                    {/* QUESTION */}
                    <div
                      onClick={() => toggle(catIndex, itemIndex)}
                      className="flex items-center justify-between cursor-pointer"
                    >
                      <h3 className="text-[20px] font-medium text-[#1f2933] max-w-[800px]">
                        {item.question}
                      </h3>

                      {/* ICON */}
                      <div className="w-9 h-9 rounded-full bg-[#f45d2d] flex items-center justify-center text-white text-lg shrink-0">
                        {isActive ? "↑" : "↓"}
                      </div>
                    </div>

                    {/* ANSWER */}
                    {isActive && (
                      <p className="mt-4 text-[16px] leading-[28px] text-gray-500 max-w-[850px]">
                        {item.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}