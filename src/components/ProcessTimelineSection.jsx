"use client";

import { Phone, Users, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function ProcessTimelineSection() {
  const steps = [
    {
      icon: <Phone size={18} />,
      step: "STEP 1",
      title: "Join exploration call.",
      desc: "Tell us more about your business on a discovery call. We’ll discuss team structure and approach, success criteria, timescale, budget, and required skill sets to see how we can help.",
    },
    {
      icon: <Users size={18} />,
      step: "STEP 2",
      title: "Discuss solution and team structure.",
      desc: "In a matter of days, we will finalize your project specifications, agree on an engagement model, select and onboard your team.",
    },
    {
      icon: <TrendingUp size={18} />,
      step: "STEP 3",
      title: "Get started and track performance.",
      desc: "Once we’ve agreed on milestones, we’ll immediately get to work. We’ll track progress, report updates, and continuously adapt to your needs.",
    },
  ];

  return (
    <section className={`${outfit.className} bg-[#f3f3f3] py-28 px-6`}>
      
      <div className="max-w-4xl mx-auto relative">

        {/* 🔥 CENTERED HEADER */}
        <div className="mb-20 text-center">
          <h2 className="text-[44px] leading-[1.2] font-semibold text-[#1a1a18]">
            Our process. <br />
            Simple, seamless, <br />
            streamlined<span className="text-[#f4622a]">.</span>
          </h2>
        </div>

        {/* TIMELINE WRAPPER */}
        <div className="relative">

          {/* Vertical Line (centered with icons) */}
          <div className="absolute left-6 top-0 bottom-0 border-l border-dashed border-gray-300"></div>

          {/* Steps */}
          <div className="flex flex-col gap-14">
            {steps.map((item, i) => (
              <div key={i} className="flex gap-6">

                {/* ICON */}
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-[#f4622a] flex items-center justify-center text-white shadow-md">
                    {item.icon}
                  </div>
                </div>

                {/* CONTENT */}
                <div>
                  <p className="text-[12px] tracking-[0.15em] text-gray-400 mb-2">
                    {item.step}
                  </p>

                  <h3 className="text-[30px] font-semibold text-[#1a1a18] leading-[1.3] tracking-[-0.3px] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-[15px] leading-[1.7]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BUTTON (centered) */}
        <div className="mt-16 text-center">
          <Link
            href="#"
            className="inline-block bg-[#f4622a] hover:bg-[#d94f1e] text-white px-6 py-3 rounded-md font-medium transition"
          >
            Schedule a Call
          </Link>
        </div>

      </div>
    </section>
  );
}