"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How quickly can an engineering team or specialist begin working on our project?",
    answer:
      "Most client engagements launch within 1 to 2 weeks. After an initial technical discovery session to review your scope and requirements, we match and onboard a dedicated squad of senior developers and architects aligned with your technology stack and timezone.",
  },
  {
    question: "Do we retain 100% intellectual property (IP) and code ownership?",
    answer:
      "Yes, completely. You retain 100% ownership of all source code, architecture blueprints, documentation, and IP from day one. All daily code commits are pushed directly into your company's private GitHub/GitLab repositories under strict contractual NDAs.",
  },
  {
    question: "Can SevenUnique modernize or take over an existing legacy codebase?",
    answer:
      "Yes. A significant portion of our work involves legacy modernization. We begin with a deep architectural and security audit, identify technical debt and bottlenecks, and systematically refactor modules into scalable, maintainable architectures without disrupting your live production operations.",
  },
  {
    question: "How do you ensure enterprise code quality and system security?",
    answer:
      "We enforce mandatory peer reviews, automated CI/CD quality gates, static code analysis (SAST), end-to-end regression pipelines, and OWASP security checklists. Every pull request requires passing automated tests and architect sign-off before merging.",
  },
  {
    question: "What engagement models do you support?",
    answer:
      "We offer three flexible collaboration models: (1) Dedicated Engineering Teams for long-term product roadmaps, (2) Staff Augmentation to embed senior specialists into your internal squads, and (3) Milestone-Based Turnkey Projects for defined MVPs and systems.",
  },
];

export default function ServicesFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28 text-[#0f172a] relative">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#ff6b3d]">
            <span className="h-2 w-2 rounded-full bg-[#ff6b3d]" />
            Frequently Asked Questions
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0f172a] sm:text-4xl">
            Everything You Need to Know About{" "}
            <span className="text-[#ff6b3d]">Partnering With Us</span>
          </h2>
          <p className="mt-4 text-base text-gray-600">
            Have questions about our process, IP protection, or engagement models? Here are answers to
            our most common client inquiries.
          </p>
        </div>

        {/* ACCORDION */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-[#ff6b3d]/40 bg-orange-50/20 shadow-md"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="flex w-full items-center justify-between p-6 text-left font-bold text-base sm:text-lg text-[#0f172a] transition-colors cursor-pointer"
                >
                  <span className="pr-4">{faq.question}</span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${
                      isOpen
                        ? "rotate-180 bg-[#ff6b3d] text-white"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-gray-600 leading-relaxed border-t border-orange-100/60 mt-1">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
