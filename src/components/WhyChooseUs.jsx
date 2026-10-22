"use client";

import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const features = [
  {
    title: "Expert Development Team",
    desc: "Our skilled developers, designers, and engineers deliver high-quality digital solutions tailored to your business goals.",
  },
  {
    title: "Scalable Technology Solutions",
    desc: "From startups to enterprises, we build scalable web, mobile, and cloud solutions that grow with your business.",
  },
  {
    title: "Modern & Innovative Approach",
    desc: "We use the latest technologies and industry best practices to create secure, fast, and future-ready applications.",
  },
  {
    title: "Fast & Reliable Delivery",
    desc: "Our agile development process ensures smooth communication, timely delivery, and consistent project success.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className={`${outfit.className} bg-[#f3f3f3] py-20 px-6`}>
      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#1a1a1a] leading-tight">
          We make software development smooth, scalable, and stress-free from start to finish
            <span className="text-[#f4622a]">.</span>
          </h2>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 gap-x-16 gap-y-12">

          {features.map((item, index) => (
            <div key={index} className="flex gap-4">

              {/* ICON */}
              <div className="mt-1">
                <div className="w-5 h-5 rounded-sm bg-[#f4622a] flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
              </div>

              {/* TEXT */}
              <div>
                <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#5f5f5f] text-sm leading-relaxed max-w-md">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}