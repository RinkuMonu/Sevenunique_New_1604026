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
   <section className="relative overflow-hidden bg-white pb-24 sm:pb-28 lg:pb-40 min-h-[650px] lg:min-h-[800px]">
  {/* Background Image */}
  <div className="absolute inset-0">
    <Image
      src="/images/1779359281185.png"
      alt="Team working"
      fill
      priority
      className="object-cover object-right"
    />

    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
    <div className="max-w-3xl">
      <div
        className={`transition-all duration-500 ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        }`}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[53.92px] font-semibold leading-[1.15] text-white mb-5 lg:mb-6">
          {services[activeIndex].heading}
          <br />
          Modern Businesses
          <span className="text-[#f4622a]">.</span>
        </h1>

        <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-8 leading-7 lg:leading-8 max-w-2xl">
          {services[activeIndex].text}
        </p>
      </div>

      <Link
        href="/schedule-a-call-page"
        className="inline-flex items-center justify-center bg-[#f4622a] hover:bg-[#d94f1e] text-white px-5 sm:px-6 py-3 rounded-md font-medium transition"
      >
        Schedule a Call
      </Link>
    </div>
  </div>

  {/* Services Navigation */}
  <div className="absolute bottom-24 sm:bottom-28 lg:bottom-52 left-0 right-0 z-20">
    <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-24">
      <div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8">
        {services.map((service, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`relative text-sm sm:text-base md:text-xl lg:text-2xl font-semibold tracking-wide transition-all duration-500 ${
              activeIndex === index
                ? "text-[#f4622a] scale-105"
                : "text-gray-300 hover:text-white"
            }`}
          >
            <span
              className={`absolute -bottom-2 left-0 h-[3px] bg-[#f4622a] rounded-full transition-all duration-500 ${
                activeIndex === index
                  ? "w-full opacity-100"
                  : "w-0 opacity-0"
              }`}
            />

            {service.name}
          </button>
        ))}
      </div>
    </div>
  </div>

  {/* Bottom Curve */}
  <div className="absolute bottom-0 left-0 w-full leading-none">
    <svg
      viewBox="0 0 1460 200"
      className="w-full h-[80px] sm:h-[120px] lg:h-[180px]"
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