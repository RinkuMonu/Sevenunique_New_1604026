"use client";

import { useState } from "react";
import Image from "next/image";
import EngagementSection from "./EngagementSection";
import EcosystemAndTestimonials from "./EcosystemAndTestimonials";
import TestimonialHighlightSection from "./Services/ai-development/TestimonialHighlightSection";
import AwardsSection from "./AwardsSection";
import TeamSection from "@/app/technologies/TeamSection";
import ServiceSection from "@/app/technologies/ServiceSection";
import TestimonialSection from "@/app/technologies/TestimonialSection";
import CaseStudySection from "./Services/CaseStudySection";

function AccordionItem({ question, answer, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-t border-gray-200 last:border-b">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
        aria-expanded={open}
      >
        <span className="text-base text-gray-900 group-hover:text-orange-600 transition-colors duration-150">
          {question}
        </span>
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full bg-orange-500 flex items-center justify-center transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 4.5L6 8L10 4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>

      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="pb-5 text-sm text-gray-500 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function ReactServicesSection({ data }) {
  if (!data) return null;

  const { servicesSection, testimonial, teamSection, caseStudies, faq } = data;
  const displayName = data?.title
  .replace(/(development services|app development services|services)/gi, "")
  .trim();
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* ===== TESTIMONIAL ===== */}
        <TestimonialHighlightSection testimonial={testimonial}/>
      {/* ===== TEAM SECTION ===== */}
      <TeamSection teamSection={teamSection}/>
      {/* ===== CASE STUDIES ===== */}
      {data?.caseStudies &&(<CaseStudySection caseStudies={data.caseStudies}/>)}
      {/* ===== CTA ===== */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-blue-100 rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-6 ">
            <h3 className="text-2xl md:text-3xl font-medium">
            Looking for a team with this kind of track record?
            <br className="hidden md:block" />
            Share your {displayName} goals with us.
            </h3>
            <br/>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium">
              Talk to an expert
            </button>
          </div>
        </div>
      </section>
      <EcosystemAndTestimonials data={data}/>
      <TestimonialSection data={data}/>
      <EngagementSection data={data} />
      <ServiceSection data={data}/>
      <AwardsSection />
      {/* ===== FAQ ===== */}
      {faq && (
        <section className="bg-white py-20">
          <div className=" mx-auto px-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
              {faq?.sectionLabel}
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-10 leading-tight">
              {faq?.heading}
            </h2>
            <div>
              {faq?.items?.map((item, index) => (
                <AccordionItem
                  key={index}
                  question={item?.question}
                  answer={item?.answer}
                  defaultOpen={item?.defaultOpen}
                />
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
}