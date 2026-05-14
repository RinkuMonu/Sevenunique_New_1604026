"use client";

import { useState } from "react";

const faqData = [
  {
    category: "General",
    items: [
      {
        question: "What does Sevenunique do?",
        answer:
          "Sevenunique provides nearshore, AI-augmented software development teams and senior engineers to help companies build and improve software faster. It offers top 1% LATAM talent skilled in 100+ technologies, supporting staff augmentation and full software outsourcing. Their teams handle the complete development lifecycle, including custom software, product engineering, AI/ML, cloud, DevOps, QA, and digital transformation across 130+ industries.",
      },
      {
        question: "How does Sevenunique help companies scale engineering teams?",
        answer:
          "We help companies scale quickly by providing access to senior, AI-augmented engineers across technologies like AI/ML, backend, frontend, mobile, cloud, and data. Clients can choose staff augmentation, dedicated teams, or full outsourcing based on their needs. With 4,000+ LATAM engineers, we can assemble teams in 2–4 weeks.",
      },
      {
        question: "Why do companies choose nearshore developers?",
        answer:
          "Nearshore developers offer senior-level expertise with fewer communication and time zone issues compared to offshore teams. Sevenunique’s engineers work across 100+ technologies and industries like fintech, healthcare, and SaaS. They are also trained in AI coding tools, helping teams work faster while maintaining quality, security, and easy integration from day one.",
      },
      {
        question: "What software development services does Sevenunique provide?",
        answer:
          "Sevenunique offers end-to-end software development across AI/ML, web, mobile, cloud, and enterprise systems. Services include custom app development, QA/testing, modernization, cloud solutions, DevOps, and AI development. Work is delivered through flexible models like staff augmentation, dedicated teams, or full outsourcing.",
      },
    ],
  },

  {
    category: "Industries",
    items: [
      {
        question: "What industries does Sevenunique work with?",
        answer:
          "We deliver software solutions across 130+ industries, including fintech, retail, eCommerce, logistics, education, media, insurance, and manufacturing. We also have experience in regulated industries like healthcare and energy. Each project is staffed with engineers who understand the required technologies and compliance standards, ensuring faster onboarding and reduced risk.",
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
          "Staff augmentation means adding individual engineers to your existing team who work under your direction. Dedicated teams give you a complete, self-managed engineering team that works closely with you but with more independence. Outsourcing involves handing over the entire project to Sevenunique, where we manage the team, planning, and delivery end-to-end with regular updates.",
      },
    ],
  },

  {
    category: "Technologies / Solutions",
    items: [
      {
        question: "What roles can Sevenunique fill?",
        answer:
          "We provide senior experts across the full software development lifecycle in 100+ technologies. This includes backend, frontend, full-stack, mobile, cloud/DevOps, AI/ML, data, and QA engineers, as well as product managers, UX/UI designers, solution architects, and complete cross-functional teams for larger projects.",
      },
      {
        question:
          "Does Sevenunique integrate with our existing tools and workflows?",
        answer:
          "Yes. Sevenunique engineers integrate directly into your existing tools and workflows instead of changing them. They work like in-house team members, using your systems, following your sprint cycles, coding standards, security requirements, and compliance rules to ensure smooth collaboration and faster delivery.",
      },
      {
        question: "How does Sevenunique ensure engineer quality?",
        answer:
          "Sevenunique evaluates over 2.5 million candidates each year through a multi-step screening process. Engineers are tested for technical expertise, senior-level experience, problem-solving ability, communication skills, cultural fit, and use of AI coding tools. Only the top 1% are selected. After hiring, performance is continuously monitored through client feedback and internal reviews to maintain high quality standards.",
      },
      {
        question:
          "How much does nearshore engineering cost compared to local hiring?",
        answer:
          "Nearshore engineering is typically more cost-effective than hiring locally, often reducing overall costs by 30–50% when factoring in salaries, benefits, taxes, and hiring overhead. With Sevenunique, you still get senior, vetted engineers working in similar time zones and workflows, maintaining quality while lowering costs. Final pricing depends on role, experience level, and technology stack.",
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