"use client";

import {
  PhoneCall,
  LayoutDashboard,
  Rocket,
} from "lucide-react";

import Link from "next/link";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const steps = [
  {
    number: "01",
    icon: <PhoneCall size={22} />,
    title: "Project Discussion",
    desc: "We understand your business goals, project scope, and technical requirements.",
  },
  {
    number: "02",
    icon: <LayoutDashboard size={22} />,
    title: "Planning & Development",
    desc: "Our team designs, plans, and develops scalable digital solutions efficiently.",
  },
  {
    number: "03",
    icon: <Rocket size={22} />,
    title: "Launch & Support",
    desc: "We deploy your product with optimization, maintenance, and ongoing support.",
  },
];

export default function ProcessTimelineSection() {
  return (
    <section
      className={`${outfit.className} bg-[#f7f7f7] mb-4 px-14`}
    >
      <div className="max-w-6xl mx-auto">

        

        {/* STEPS */}
        <div className="grid lg:grid-cols-3 gap-6">

          {steps.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[28px] p-8 border border-[#ececec] hover:border-[#ff5a2f] transition-all duration-300 hover:-translate-y-2 group"
            >

              {/* TOP */}
              <div className="flex items-center justify-between mb-10">

                <div className="w-14 h-14 rounded-2xl bg-[#f7f7f7] group-hover:bg-[#ff5a2f] text-[#111] group-hover:text-white flex items-center justify-center transition-all duration-300">
                  {item.icon}
                </div>

                <span className="text-[18px] font-semibold text-[#d1d1d1]">
                  {item.number}
                </span>
              </div>

              {/* CONTENT */}
              <h3 className="text-[28px] leading-[1.2] font-semibold text-[#111] mb-4">
                {item.title}
              </h3>

              <p className="text-[#666] leading-7 text-[15px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 mb-4 text-center">

          <Link
            href="/schedule-a-call-page"
            className="inline-flex items-center gap-3 bg-[#111] hover:bg-[#ff5a2f] text-white px-8 py-4 rounded-2xl text-[16px] font-medium transition-all duration-300"
          >
            Schedule a Call
          </Link>
        </div>
      </div>
    </section>
  );
}