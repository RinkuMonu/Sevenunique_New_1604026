"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const services = [
    {
      name: "Website Designing",
      heading: "Trusted Website Design Partner For",
      text: "We create modern, responsive, and high-converting websites tailored for startups and enterprises.",
    },
    {
      name: "Mobile Application",
      heading: "Trusted Mobile App Development Partner For",
      text: "Build scalable Android and iOS applications with seamless user experiences and powerful performance.",
    },
    {
      name: "Digital Marketing",
      heading: "Trusted Digital Marketing Partner For",
      text: "Grow your business with SEO, paid ads, branding, and result-driven digital marketing strategies.",
    },
     {
      name: " Artificial Intelligence",
      heading: "Trusted Artificial Intelligence Partner For",
      text: "Leverage the power of AI to drive innovation and efficiency in your business operations.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);

      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % services.length);
        setVisible(true);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white pb-32 lg:pb-40">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/1779359281185.png"
          alt="Team working"
          fill
          priority
          className="object-cover object-right"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="max-w-2xl">

          <div
            className={`transition-all duration-500 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <h1 className="text-[53.92px] font-semibold leading-[1.1] text-white mb-6">
              {services[activeIndex].heading}
              <br />
              Modern Businesses
              <span className="text-[#f4622a]">.</span>
            </h1>

            <p className="text-gray-300 text-lg mb-8 leading-8">
              {services[activeIndex].text}
            </p>
          </div>

          <Link
            href="/schedule-a-call-page"
            className="inline-block bg-[#f4622a] hover:bg-[#d94f1e] text-white px-6 py-3 rounded-md font-medium transition"
          >
            Schedule a Call
          </Link>
        </div>
      </div>

      {/* Services Bottom Left */}
    {/* Services Bottom Left */}
<div className="absolute bottom-54 left-6 lg:left-24 z-20">
  <div className="flex items-center gap-8 flex-wrap">

    {services.map((service, index) => (
      <button
        key={index}
        onClick={() => setActiveIndex(index)}
        className={`relative text-lg md:text-2xl font-semibold tracking-wide transition-all duration-500 ${
          activeIndex === index
            ? "text-[#f4622a] scale-110"
            : "text-gray-400 hover:text-black"
        }`}
      >
        {/* Active Underline */}
        <span
          className={`absolute -bottom-2 left-0 h-[3px] bg-[#f4622a] rounded-full transition-all duration-500 ${
            activeIndex === index ? "w-full opacity-100" : "w-0 opacity-0"
          }`}
        />

        {service.name}
      </button>
    ))}
  </div>
</div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 w-full leading-none">
        <svg
          viewBox="0 0 1460 200"
          className="w-full h-[180px]"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,80 C360,0 1080,0 1440,80 L1440,200 L0,200 Z"
          />
        </svg>
      </div>
    </section>
  );
}