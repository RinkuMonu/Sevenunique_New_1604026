"use client";

import { useState } from "react";
import Image from "next/image";
import EngagementSection from "./EngagementSection";
import EcosystemAndTestimonials from "./EcosystemAndTestimonials";

const faqs = [
  {
    question: "How senior are your .NET engineers, and will we work directly with them?",
    answer:
      "Our .NET engineers average 10+ years of experience, bringing deep technical expertise to every project. We provide strategic contributors who have designed and built complex, scalable systems and understand how to solve the business problem, not just the immediate technical task. You will work directly with our senior engineers. No intermediaries or juniors.",
    defaultOpen: true,
  },
  {
    question: "What makes BairesDev talent the top 1%?",
    answer:
      "We apply a rigorous multi-stage vetting process that evaluates technical depth, communication skills, and real-world problem-solving. Less than 1% of applicants make it through, ensuring you get engineers who are elite by any measure.",
  },
  {
    question: "How fast can you staff a team?",
    answer:
      "We can have a fully vetted engineer ready to start within two weeks of your request, and full teams typically onboard within a month, depending on size and specialization.",
  },
  {
    question: "How do you ensure our team can own and maintain the software you build?",
    answer:
      "We document thoroughly, follow your internal coding standards, and conduct knowledge-transfer sessions. Our goal is always to leave your team fully capable of owning the codebase — not to create dependency on us.",
  },
  {
    question: "What's your approach to building software for regulated industries?",
    answer:
      "We have deep experience in finance, healthcare, and other regulated verticals. Our engineers are fluent in compliance requirements like HIPAA, SOC 2, and GDPR, and we integrate security and audit requirements from day one.",
  },
  {
    question: "Do you offer standalone .NET QA and testing services?",
    answer:
      "Yes. We can provide dedicated QA engineers who specialize in .NET testing frameworks — unit, integration, end-to-end, and performance testing — without requiring a full development engagement.",
  },
  {
    question: "How do you integrate with our existing DevOps toolchain?",
    answer:
      "We adapt to your stack. Whether you're using Azure DevOps, GitHub Actions, Jenkins, or another CI/CD setup, our engineers integrate smoothly and won't force you to change your workflows.",
  },
  {
    question: "What's your approach to migrating a legacy .NET Framework application?",
    answer:
      "We start with an assessment of the existing architecture, identify risk areas, and plan incremental migration milestones. We favor a strangler-fig approach that lets you ship value continuously rather than doing a risky big-bang rewrite.",
  },
  {
    question: "Do you have experience with large-scale legacy .NET migrations?",
    answer:
      "Yes. We've led migrations of enterprise applications with millions of lines of code, navigating everything from Web Forms to modern Blazor and .NET 8, while maintaining business continuity throughout.",
  },
];

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
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 4.5L6 8L10 4.5"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="pb-5 text-sm text-gray-500 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function ReactServicesSection() {
  return (
    <div className="bg-gray-50 text-gray-900">

      {/* ================= TOP REACT SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm tracking-widest text-gray-500 uppercase mb-4">
            Custom React Development Services
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
            You've probably used products built by our React developers.
          </h1>
          <p className="text-gray-600 mb-6">
            We've helped leading brands across various industries create complex
            e-commerce platforms, consumer dashboards, internal tools, and more.
          </p>
          <div className="rounded-xl overflow-hidden shadow">
            <Image
              src="/team.jpg"
              alt="Team working"
              width={600}
              height={350}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div>
          <div className="border-l-4 border-green-600 pl-6 mb-6">
            <h3 className="text-xl font-semibold mb-2">Web Applications</h3>
            <p className="text-gray-600">
              We build complex, enterprise-grade React web applications.
            </p>
          </div>
          <ul className="space-y-4 text-gray-800">
            {[
              "Custom React Frontends",
              "Legacy Frontend Migration",
              "Dashboards",
              "Portals",
              "Reusable Component Libraries",
              "Web and React Native Cross-Platform Development",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= TESTIMONIAL ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-orange-500 text-5xl mb-4">"</div>
            <p className="text-2xl font-medium leading-relaxed">
              Their engineers perform at very high standards. We've had a strong
              relationship for almost 7 years.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex items-center gap-6">
            <Image
              src="/person.jpg"
              alt="Patrick Mee"
              width={120}
              height={120}
              className="rounded-lg object-cover"
            />
            <div>
              <p className="font-semibold">Patrick Mee</p>
              <p className="text-sm text-gray-500">EVP Of Engineering</p>
              <p className="mt-2 font-semibold text-gray-700">NextRoll</p>
            </div>
          </div>
        </div>
        <p className="text-center text-gray-500 mt-12 max-w-3xl mx-auto">
          The best partnerships are the ones you don't have to worry about.
        </p>
      </section>

      {/* ================= .NET SECTION ================= */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-sm tracking-widest text-gray-500 uppercase mb-4">
              Our .NET Software Development Team
            </p>
            <div className="flex items-center gap-3 mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Image
                  key={i}
                  src={`/avatar${i}.jpg`}
                  alt="avatar"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              ))}
              <span className="text-sm text-gray-600">
                Backed by <b>4000+ devs</b>
              </span>
            </div>
            <h2 className="text-4xl font-semibold mb-4">
              Why tech leaders choose our .NET development teams:
            </h2>
            <p className="text-gray-600 mb-6">
              We have built a reputation for delivering compliant, mission-critical .NET solutions.
            </p>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium">
              Speak With Our Team
            </button>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {["Top 1% .NET Developers", "Immediate Impact", "Compliance Expertise"].map(
                (item, i) => (
                  <div key={i} className="border rounded-xl p-6 bg-gray-50">
                    <p className="font-medium">{item}</p>
                  </div>
                )
              )}
            </div>
            <div className="border border-red-400 rounded-xl p-6 text-gray-700">
              We vet for what matters on complex projects: distributed systems,
              high-concurrency patterns, and secure cloud design.
            </div>
          </div>
        </div>
      </section>

      {/* ================= CASE STUDIES ================= */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm tracking-widest text-gray-500 uppercase mb-4">
            .NET Case Studies
          </p>
          <h2 className="text-4xl font-semibold mb-6">
            Hundreds of .NET projects delivered.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-[300px] rounded-xl bg-gradient-to-b from-gray-700 to-black text-white p-6 flex items-end"
              >
                <p className="font-semibold">Case Study {i}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ECOSYSTEM SECTION ================= */}
      {/* ================= TESTIMONIALS ================= */}
      <EcosystemAndTestimonials />

      {/* ================= CTA ================= */}
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

    

      {/* ================= ENGAGEMENT MODELS ================= */}
    <EngagementSection />

      {/* ================= FAQ ================= */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
            .NET FAQ
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mb-10 leading-tight">
            What tech leaders ask about .NET before pulling us in:
          </h2>
          <div>
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                defaultOpen={faq.defaultOpen}
              />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}