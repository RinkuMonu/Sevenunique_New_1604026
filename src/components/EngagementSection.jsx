"use client";
import { useState } from "react";

const engagementModels = [
  {
    label: "Staff Augmentation",
    question: "Need a couple of extra software engineers on your team?",
    description:
      "Get senior, production-ready developers who integrate directly into your internal team. They work your hours, join your standups, and follow your workflows—just like any full-time engineer.",
    imgSrc: "https://assets.bairesdev.com//image/upload/c_limit,w_40/fl_sanitize/v1/www/static/staff-augmentation_dmiajc.svg",
  },
  {
    label: "Dedicated Teams",
    question: "Need a few teams to deliver several projects simultaneously?",
    description:
      "Spin up focused, delivery-ready pods to handle full builds or workstreams. Together we align on priorities. Then our tech PMs lead the team and drive delivery to maintain velocity and consistency.",
    imgSrc: "https://assets.bairesdev.com//image/upload/c_limit,w_40/fl_sanitize/v1/www/static/dedicated-teams_gprok3.svg",
  },
  {
    label: "Software Outsourcing",
    question: "Want to offload everything to us, from start to finish?",
    description:
      "Hand off the full project lifecycle, from planning to deployment. You define the outcomes. We take full ownership of the execution and keep you looped in every step of the way.",
    imgSrc: "https://assets.bairesdev.com//image/upload/c_limit,w_40/fl_sanitize/v1/www/static/software-outsourcing_hew84i.svg",
  },
];

// Eye / Visibility icon (white mask-style icon replacement)
const EyeIcon = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const ChevronIcon = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

// ─── Desktop Card ───────────────────────────────────────────────────────────
function DesktopCard({ model }) {
  return (
    <li className="z-10 flex-1 group">
      <div className="relative h-80 rounded-lg bg-white shadow-lg border border-transparent overflow-hidden">

        {/* Expanding dark circle from bottom-right on hover */}
        <div
          className="pointer-events-none absolute bottom-8 right-8 h-8 w-8 translate-x-1/2 translate-y-1/2 rounded-[2rem] bg-gray-800 transition-all duration-500 ease-in-out
            group-hover:h-[200%] group-hover:w-[200%] group-hover:rounded-none"
        />

        <div className="relative h-full p-6 md:px-5 lg:p-8 flex flex-col gap-3">

          {/* Label + large icon (hidden on hover) */}
          <div className="flex items-center gap-4">
            <img
              src={model.imgSrc}
              alt=""
              width={40}
              height={40}
              className="pointer-events-none z-10 opacity-100 transition-opacity duration-500
                md:absolute md:-bottom-4 md:-left-2 md:h-36 md:w-36
                group-hover:opacity-0"
            />
            <p className="z-10 text-xs font-semibold tracking-widest uppercase transition-colors duration-500 text-green-800 group-hover:text-green-400">
              {model.label}
            </p>
          </div>

          {/* Heading */}
          <div className="z-10">
            <p className="text-lg font-semibold text-gray-900 transition-colors duration-500 group-hover:text-white leading-snug">
              {model.question}
            </p>
          </div>

          {/* Description — hidden until hover */}
          <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 group-hover:grid-rows-[1fr]">
            <div className="z-10 overflow-hidden">
              <p className="pt-8 text-sm leading-relaxed text-gray-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {model.description}
              </p>
            </div>
          </div>

          {/* Eye icon bottom-right — hides on hover */}
        <div className="pointer-events-none absolute bottom-8 right-8 translate-x-1/2 translate-y-1/2 z-10">
  <EyeIcon className="w-6 h-6 text-white opacity-100 transition-opacity duration-300 group-hover:opacity-0" />
</div>
        </div>
      </div>
    </li>
  );
}

// ─── Mobile Accordion Item ───────────────────────────────────────────────────
function MobileAccordionItem({ model, isOpen, onToggle, isFirst }) {
  return (
    <li>
      <div className={`flex flex-col rounded-lg border bg-white p-4 pb-0 shadow-md ${isFirst ? "border-blue-600" : "border-gray-100"}`}>
        {/* Trigger */}
        <button
          type="button"
          onClick={onToggle}
          className="flex w-full items-center justify-between pb-3 text-left"
          aria-expanded={isOpen}
          aria-label={model.question}
        >
          <span className={`text-base leading-snug text-gray-900 ${isOpen ? "font-bold" : "font-normal"}`}>
            {model.question}
          </span>
          <ChevronIcon
            className={`ml-3 h-6 w-6 flex-shrink-0 text-gray-900 transition-transform duration-300 ${isOpen ? "rotate-90" : "-rotate-90"}`}
          />
        </button>

        {/* Expandable content */}
        <div
          className={`grid overflow-hidden transition-[grid-template-rows] duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] ${
            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col gap-3 border-t pt-6 pb-4 text-left">
              <p className="text-base font-semibold text-gray-900">{model.label}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{model.description}</p>
              {/* Masked icon */}
              <div className="relative self-end">
                <div
                  className="h-16 w-16 translate-y-2 bg-blue-600"
                  style={{
                    maskImage: `url(${model.imgSrc})`,
                    maskSize: "contain",
                    maskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskImage: `url(${model.imgSrc})`,
                    WebkitMaskSize: "contain",
                    WebkitMaskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                  }}
                />
                <div className="absolute top-0 h-16 w-16 bg-gradient-to-b from-white from-0% to-transparent to-50%" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

// ─── Main Section ────────────────────────────────────────────────────────────
export default function EngagementSection({data}) {
  const [openIndex, setOpenIndex] = useState(0);
  const displayName = data?.title
  .replace(/(development services|app development services|services)/gi, "")
  .trim();
  const toggle = (i) => setOpenIndex((prev) => (prev === i ? -1 : i));

  return (
    <section className="py-20 px-6 bg-white">
      <div className="mx-auto max-w-5xl lg:mx-[6.5rem]">

        {/* ── Header ── */}
        <div className="mb-20 flex flex-col items-center gap-3 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
            Flexible engagement models
          </p>
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 leading-tight">
            Need extra {displayName} expertise?<br />
            Plug us in where you need us most.
          </h2>
          <p className="text-base text-gray-900 max-w-xl">
            We customize every engagement to fit your workflow, priorities, and delivery needs.
          </p>
        </div>

        {/* ── Desktop Cards (md+) ── */}
        <div className="relative hidden md:block">
          <ul className="flex flex-col gap-8 md:flex-row md:items-stretch md:gap-6">
            {engagementModels.map((model, i) => (
              <DesktopCard key={i} model={model} />
            ))}
          </ul>
          {/* Background strip */}
          <div className="absolute bottom-0 left-1/2 -z-10 h-1/3 w-auto -translate-x-1/2 bg-gray-100 md:h-1/3 lg:h-1/2 lg:rounded-t-xl" />
        </div>

        {/* ── Mobile Accordion ── */}
        <div className="pb-12 md:hidden">
          <ul className="flex flex-col gap-6">
            {engagementModels.map((model, i) => (
              <MobileAccordionItem
                key={i}
                model={model}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
                isFirst={i === 0}
              />
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}