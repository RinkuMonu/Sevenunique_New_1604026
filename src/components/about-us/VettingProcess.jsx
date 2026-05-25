"use client";

import { useEffect, useState } from "react";
import {
  BriefcaseBusiness,
  ClipboardCheck,
  Users,
  FilePenLine,
  LaptopMinimalCheck,
  Trophy,
} from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Application",
    desc: "Candidates submit their profiles and portfolios for review.",
    icon: BriefcaseBusiness,
  },
  {
    id: "02",
    title: "Assessment",
    desc: "Shortlisted applicants complete an online skill evaluation.",
    icon: ClipboardCheck,
  },
  {
    id: "03",
    title: "HR Discussion",
    desc: "We evaluate communication skills and culture alignment.",
    icon: Users,
  },
  {
    id: "04",
    title: "Written Round",
    desc: "Problem-solving and analytical thinking are assessed.",
    icon: FilePenLine,
  },
  {
    id: "05",
    title: "Technical Round",
    desc: "Final interview with domain experts and leadership team.",
    icon: LaptopMinimalCheck,
  },
];

export default function ElegantHiringProcess() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm tracking-[3px] uppercase text-[#f66135] font-medium mb-4">
            Hiring Process
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
            A Simple & Transparent
            <span className="text-[#f66135]"> Hiring Journey</span>
          </h2>

          <p className="text-gray-500 text-lg mt-5 leading-relaxed">
            We follow a streamlined recruitment process designed to identify
            skilled, passionate, and growth-oriented professionals.
          </p>
        </div>

        {/* Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = active === index;

            return (
              <div
                key={step.id}
                onClick={() => setActive(index)}
                className={`relative rounded-3xl border p-6 transition-all duration-500 cursor-pointer group
                ${
                  isActive
                    ? "border-[#f66135] bg-[#fff7f3] shadow-lg"
                    : "border-gray-200 bg-white hover:border-[#f66135]/40"
                }`}
              >
                {/* Number */}
                <span
                  className={`text-sm font-semibold transition-colors duration-300
                  ${
                    isActive ? "text-[#f66135]" : "text-gray-400"
                  }`}
                >
                  {step.id}
                </span>

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mt-5 mb-6 transition-all duration-300
                  ${
                    isActive
                      ? "bg-[#f66135] text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  <Icon size={26} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-7 text-gray-500">
                  {step.desc}
                </p>

                {/* Bottom Line */}
                <div
                  className={`absolute bottom-0 left-0 h-1 rounded-b-3xl transition-all duration-500
                  ${
                    isActive
                      ? "w-full bg-[#f66135]"
                      : "w-0 bg-transparent"
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* Final Box */}
        <div className="mt-16">
          <div className="rounded-[28px] border border-[#f66135]/15 bg-[#fff8f5] px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-[#f66135] flex items-center justify-center text-white shadow-md">
                <Trophy size={30} />
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  Top 1% Talent Selection
                </h3>

                <p className="text-gray-500 mt-2 max-w-2xl leading-relaxed">
                  Only the most skilled and qualified candidates successfully
                  complete our recruitment process and join our team.
                </p>
              </div>
            </div>

            <button className="px-6 py-3 rounded-full bg-[#f66135] text-white text-sm font-medium hover:opacity-90 transition">
              Join Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}