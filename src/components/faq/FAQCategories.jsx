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
   <section className="bg-[#f8f9fb] py-24">
  <div className="max-w-6xl mx-auto px-6">

    {faqData.map((category, catIndex) => (
      <div key={catIndex} className="mb-20">

        {/* CATEGORY HEADING */}
        <div className="mb-10">
          <p className="text-[#f45d2d] uppercase tracking-[3px] text-sm font-semibold mb-3">
            FAQs
          </p>

          <h2 className="text-[34px] md:text-[42px] leading-tight font-semibold text-[#111827]">
            {category.category}
          </h2>
        </div>

        {/* FAQ CONTAINER */}
        <div className="space-y-5">

          {category.items.map((item, itemIndex) => {
            const isActive = activeIndex[catIndex] === itemIndex;

            return (
              <div
                key={itemIndex}
                className={`group rounded-[24px] border transition-all duration-300 overflow-hidden
                  ${
                    isActive
                      ? "bg-white border-[#f45d2d]/20 shadow-lg shadow-orange-100"
                      : "bg-white border-gray-200 hover:border-[#f45d2d]/30 hover:shadow-md"
                  }`}
              >
                
                {/* QUESTION */}
                <button
                  onClick={() => toggle(catIndex, itemIndex)}
                  className="w-full flex items-start justify-between gap-6 text-left px-7 py-7"
                >
                  <h3
                    className={`text-[19px] md:text-[21px] leading-relaxed font-medium transition-colors duration-300
                    ${
                      isActive
                        ? "text-[#111827]"
                        : "text-[#1f2933] group-hover:text-[#f45d2d]"
                    }`}
                  >
                    {item.question}
                  </h3>

                  {/* ICON */}
                  <div
                    className={`min-w-[42px] h-[42px] rounded-full flex items-center justify-center text-lg transition-all duration-300
                    ${
                      isActive
                        ? "bg-[#f45d2d] text-white rotate-180"
                        : "bg-[#fff3ef] text-[#f45d2d]"
                    }`}
                  >
                    ↓
                  </div>
                </button>

                {/* ANSWER */}
                <div
                  className={`grid transition-all duration-500 ease-in-out
                  ${
                    isActive
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-7 pb-7">
                      <div className="h-px bg-gray-100 mb-6"></div>

                      <p className="text-[16px] leading-[30px] text-gray-600 max-w-4xl">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>

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