"use client";

import { useState } from "react";
import Image from "next/image";

const tabs = [
  {
    id: "vision",
    title: "OUR VISION",
    heading: "You focus on living your best life.\nwe take care of the rest.",
    description: `At Lumora Family, we believe that life's most valuable moments should never be consumed by everyday responsibilities. Our mission is to become the trusted partner that quietly takes care of life's complexities—so our clients can focus on their families, careers, health, and personal aspirations.

We combine Family Management, Virtual Assistance, Property Care, Senior Citizen Support, Lifestyle Coordination, and Trusted Service Management into one seamless experience. Every request is handled with professionalism, discretion, and genuine care, giving our clients the confidence that everything important is being looked after.`,
  },
  {
    id: "mission",
    title: "OUR MISSION",
    heading: "You focus on living your best life.\nwe take care of the rest.",
    description: `At Lumora Family, we believe that life's most valuable moments should never be consumed by everyday responsibilities. Our mission is to become the trusted partner that quietly takes care of life's complexities—so our clients can focus on what truly matters.`,
  },
  {
    id: "founders",
    title: "OUR FOUNDERS",
    heading: "Meet the people behind Lumora.",
    description: `Our founders envisioned a platform that simplifies daily life through trusted, personalized services delivered with professionalism and care.`,
  },
];

export default function AboutSection() {
  const [active, setActive] = useState("mission");

  const current = tabs.find((item) => item.id === active);

  return (
    <section className="bg-[#F3FBF0] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-5xl font-bold text-[#1B5E20] text-center mb-8">
          About Us
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-5 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300
              ${
                active === tab.id
                  ? "bg-[#1B5E20] text-white"
                  : "bg-[#CFECC8] text-[#1B5E20] hover:bg-[#BEE5B8]"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}
          <div>
            <h3 className="text-4xl font-bold text-[#073B2D] leading-tight whitespace-pre-line mb-8">
              {current.heading}
            </h3>

            {current.description.split("\n\n").map((para, index) => (
              <p
                key={index}
                className="text-[#234] text-base leading-9 mb-7"
              >
                {para}
              </p>
            ))}
          </div>

          {/* Right */}
          <div className="relative flex justify-center">

            {/* Dark Shape */}
           <div className="relative flex justify-center items-center">

  {/* Shadow Layer 1 */}
  <div className="absolute w-[82%] h-[88%] bg-[#170303] rounded-[30px] rotate-[15deg] right-2 top-0 z-0"></div>

  {/* Shadow Layer 2 */}
  <div className="absolute w-[82%] h-[88%] bg-[#170303] rounded-[30px] -rotate-[10deg] right-5 top-4 z-0"></div>

  {/* Shadow Layer 3 */}
  <div className="absolute w-[82%] h-[88%] bg-[#170303] rounded-[30px] rotate-[6deg] right-0 top-8 z-0"></div>

  {/* Main Image */}
  <div className="relative w-[360px] h-[460px] lg:w-[420px] lg:h-[520px] rounded-[28px] overflow-hidden z-10">
    <Image
      src="/images/about.jpg"
      alt="About"
      fill
      className="object-cover"
    />
  </div>

</div>

            {/* Image */}
            <div className="relative w-[360px] h-[460px] lg:w-[420px] lg:h-[520px] rounded-[28px] overflow-hidden z-10 shadow-2xl">
              <Image
                src="/images/about.jpg"
                alt="About"
                fill
                className="object-cover"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}