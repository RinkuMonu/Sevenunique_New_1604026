"use client";

import { useState } from "react";
import Image from "next/image";
import EngagementSection from "./EngagementSection";
import EcosystemAndTestimonials from "./EcosystemAndTestimonials";

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

  return (
    <div className="bg-gray-50 text-gray-900">

      {/* ===== SERVICES SECTION ===== */}
      {servicesSection && (
        <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm tracking-widest text-gray-500 uppercase mb-4">
              {servicesSection.sectionLabel}
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
              {servicesSection.heading}
            </h1>
            <p className="text-gray-600 mb-6">{servicesSection.description}</p>
            <div className="rounded-xl overflow-hidden shadow">
              <Image
                src={servicesSection.image}
                alt="Team working"
                width={600}
                height={350}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div>
            <div className="border-l-4 border-green-600 pl-6 mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {servicesSection.highlightService.title}
              </h3>
              <p className="text-gray-600">
                {servicesSection.highlightService.description}
              </p>
            </div>
            <ul className="space-y-4 text-gray-800">
              {servicesSection.serviceList.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-gray-400 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ===== TESTIMONIAL ===== */}
      {testimonial && (
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-orange-500 text-5xl mb-4">"</div>
              <p className="text-2xl font-medium leading-relaxed">{testimonial.quote}</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex items-center gap-6">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={120}
                height={120}
                className="rounded-lg object-cover"
              />
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
                <p className="mt-2 font-semibold text-gray-700">{testimonial.company}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ===== TEAM SECTION ===== */}
      {teamSection && (
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-sm tracking-widest text-gray-500 uppercase mb-4">
                {teamSection.sectionLabel}
              </p>
              <div className="flex items-center gap-3 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Image key={i} src={`/avatar${i}.jpg`} alt="avatar" width={40} height={40} className="rounded-full" />
                ))}
                <span className="text-sm text-gray-600">Backed by <b>4000+ devs</b></span>
              </div>
              <h2 className="text-4xl font-semibold mb-4">{teamSection.heading}</h2>
              <p className="text-gray-600 mb-6">{teamSection.description}</p>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium">
                Speak With Our Team
              </button>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {teamSection.highlights.map((item, i) => (
                  <div key={i} className="border rounded-xl p-6 bg-gray-50">
                    <p className="font-medium">{item}</p>
                  </div>
                ))}
              </div>
              <div className="border border-red-400 rounded-xl p-6 text-gray-700">
                {teamSection.detail}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ===== CASE STUDIES ===== */}
      {caseStudies && (
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-sm tracking-widest text-gray-500 uppercase mb-4">
              {caseStudies.sectionLabel}
            </p>
            <h2 className="text-4xl font-semibold mb-6">{caseStudies.heading}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-[300px] rounded-xl bg-gradient-to-b from-gray-700 to-black text-white p-6 flex items-end">
                  <p className="font-semibold">Case Study {i}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <EcosystemAndTestimonials />

      {/* ===== CTA ===== */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-blue-100 rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <h3 className="text-2xl md:text-3xl font-medium">
              Looking for a team with this kind of track record?
            </h3>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium">
              Talk to an expert
            </button>
          </div>
        </div>
      </section>

      <EngagementSection />

      {/* ===== FAQ ===== */}
      {faq && (
        <section className="bg-white py-20">
          <div className=" mx-auto px-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
              {faq.sectionLabel}
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-10 leading-tight">
              {faq.heading}
            </h2>
            <div>
              {faq.items.map((item, index) => (
                <AccordionItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  defaultOpen={item.defaultOpen}
                />
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
}