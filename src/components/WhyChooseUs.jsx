"use client";

import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const features = [
  {
    title: "The right people",
    desc: "Our rigorous hiring process ensures only rock-solid, skilled candidates make it through.",
  },
  {
    title: "The right team",
    desc: "From solo engineers to multi-team engagements. Flexible project management options.",
  },
  {
    title: "The right place",
    desc: "Our nearshore teams are online when you are. Clear communication in English.",
  },
  {
    title: "The right time",
    desc: "Teams that start when you need them. Scale up or down with ease.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className={`${outfit.className} bg-[#f3f3f3] py-20 px-6`}>
      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#1a1a1a] leading-tight">
            No need to wonder.
            <br />
            Working with us is wonderful
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