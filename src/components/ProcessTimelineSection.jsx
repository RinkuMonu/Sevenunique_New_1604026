"use client";

import { motion } from "framer-motion";
import {
  PhoneCall,
  LayoutDashboard,
  Rocket,
  ArrowRight,
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
    icon: <PhoneCall size={28} strokeWidth={1.8} />,
    title: "Project Discussion",
    desc: "We understand your business goals, project scope, and technical requirements.",
    color: "bg-[#4169e1]",
  },
  {
    number: "02",
    icon: <LayoutDashboard size={28} strokeWidth={1.8} />,
    title: "Planning & Development",
    desc: "Our team designs, plans, and develops scalable digital solutions efficiently.",
    color: "bg-[#e63e8c]",
  },
  {
    number: "03",
    icon: <Rocket size={28} strokeWidth={1.8} />,
    title: "Launch & Support",
    desc: "We deploy your product with optimization, maintenance, and ongoing support.",
    color: "bg-[#7b3fe4]",
  },
];

export default function ProcessTimelineSection() {
  return (
    <>
    <section
      className={`${outfit.className} bg-white py-14 px-5 overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto">
<div className="mt-14 text-center">

          <h3 className="text-[38px] sm:text-[52px] font-semibold text-[#111] mb-6">
            Let’s Build Future-Ready Digital Solutions
          </h3>

          <p className="text-[#666] max-w-2xl mx-auto leading-8 text-[17px] mb-10">
            From web applications and enterprise software
            to scalable cloud-based systems, our team helps
            businesses transform ideas into impactful digital products.
          </p>

        
        </div>
        {/* STEPS */}
        <div className="relative grid lg:grid-cols-3 gap-8 mt-20">
          {steps.map((item, index) => (
            <div key={index} className="relative">
              {/* CONNECTING LINE */}
              {index !== steps.length - 1 && (
           <div className="hidden lg:block absolute top-[130px] right-[30px] w-[0px] z-10">
                  <div className="relative border-t border-dashed border-gray-300">
                    <motion.div
                      animate={{ x: [0, 50, 0] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute -top-[12px] left-0"
                    >
                      <ArrowRight
                        size={44}
                        className="text-gray-400"
                      />
                    </motion.div>
                  </div>
                </div>
              )}

              {/* CARD */}
              <div className="bg-[#fafafa] border border-[#ececec] rounded-[28px] pt-20 pb-10 px-8 text-center relative h-full">
                {/* ICON */}
                <div
                  className={`absolute -top-14 left-1/2 -translate-x-1/2 w-[110px] h-[110px] rounded-full ${item.color} flex items-center justify-center`}
                >
                  <div className="w-[60px] h-[60px] rounded-full border border-white/70 flex items-center justify-center text-white">
                    {item.icon}
                  </div>
                </div>

                {/* NUMBER */}
                <p className="text-[#d0d0d0] text-[18px] font-medium mb-3">
                  {item.number}
                </p>

                {/* TITLE */}
                <h3 className="text-[30px] leading-[1.2] font-semibold text-[#111] mb-4">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="text-[#666] leading-7 text-[16px]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/schedule-a-call-page"
            className="inline-flex items-center gap-2 bg-[#f4622a] hover:bg-[#de5320] text-white px-7 py-3 rounded-full text-[15px] font-medium transition-all duration-300"
          >
            Schedule a Call
          </Link>
        </div>
      </div>
    </section>
    <section className="py-10 px-6 md:px-16 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto">

    {/* SLIDER */}
    <div className="relative overflow-hidden rounded-[26px] border border-gray-200 bg-[#fafafa] py-5 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">

      {/* LEFT FADE */}
      <div className="absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#fafafa] to-transparent" />

      {/* RIGHT FADE */}
      <div className="absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#fafafa] to-transparent" />

      <div className="flex items-center gap-10 animate-marquee w-max">

        {[
          "https://cdn-gnapb.nitrocdn.com/rVKsFrUUJpBqwSXDQLTtMASMDgzFisXl/assets/images/optimized/rev-f95ca0b/d274cmdd0goq94.cloudfront.net/wp-content/uploads/2023/05/mic.webp",

          "https://cdn-gnapb.nitrocdn.com/rVKsFrUUJpBqwSXDQLTtMASMDgzFisXl/assets/images/optimized/rev-f95ca0b/d274cmdd0goq94.cloudfront.net/wp-content/uploads/2023/05/intel.webp",

          "https://cdn-gnapb.nitrocdn.com/rVKsFrUUJpBqwSXDQLTtMASMDgzFisXl/assets/images/optimized/rev-f95ca0b/d274cmdd0goq94.cloudfront.net/wp-content/uploads/2025/06/Adobe-Bronze-Solution-Partner.webp",

          "https://cdn-gnapb.nitrocdn.com/rVKsFrUUJpBqwSXDQLTtMASMDgzFisXl/assets/images/optimized/rev-f95ca0b/d274cmdd0goq94.cloudfront.net/wp-content/uploads/2025/07/salesforce-partner.png",

          "https://cdn-gnapb.nitrocdn.com/rVKsFrUUJpBqwSXDQLTtMASMDgzFisXl/assets/images/optimized/rev-f95ca0b/d274cmdd0goq94.cloudfront.net/wp-content/uploads/2023/05/spa.webp",

          "https://cdn-gnapb.nitrocdn.com/rVKsFrUUJpBqwSXDQLTtMASMDgzFisXl/assets/images/optimized/rev-f95ca0b/d274cmdd0goq94.cloudfront.net/wp-content/uploads/2023/05/ama.webp",

          "https://cdn-gnapb.nitrocdn.com/rVKsFrUUJpBqwSXDQLTtMASMDgzFisXl/assets/images/optimized/rev-f95ca0b/d274cmdd0goq94.cloudfront.net/wp-content/uploads/2023/05/nass.webp",

          // duplicate

          "https://cdn-gnapb.nitrocdn.com/rVKsFrUUJpBqwSXDQLTtMASMDgzFisXl/assets/images/optimized/rev-f95ca0b/d274cmdd0goq94.cloudfront.net/wp-content/uploads/2023/05/mic.webp",

          "https://cdn-gnapb.nitrocdn.com/rVKsFrUUJpBqwSXDQLTtMASMDgzFisXl/assets/images/optimized/rev-f95ca0b/d274cmdd0goq94.cloudfront.net/wp-content/uploads/2023/05/intel.webp",

          "https://cdn-gnapb.nitrocdn.com/rVKsFrUUJpBqwSXDQLTtMASMDgzFisXl/assets/images/optimized/rev-f95ca0b/d274cmdd0goq94.cloudfront.net/wp-content/uploads/2025/06/Adobe-Bronze-Solution-Partner.webp",

          "https://cdn-gnapb.nitrocdn.com/rVKsFrUUJpBqwSXDQLTtMASMDgzFisXl/assets/images/optimized/rev-f95ca0b/d274cmdd0goq94.cloudfront.net/wp-content/uploads/2025/07/salesforce-partner.png",
        ].map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 bg-white rounded-xl border border-gray-100 px-6 py-3 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <img
              src={logo}
              alt="partner"
              className="h-[38px] w-auto object-cover transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* CSS */}
  <style jsx>{`
    .animate-marquee {
      animation: marquee 25s linear infinite;
    }

    .animate-marquee:hover {
      animation-play-state: paused;
    }

    @keyframes marquee {
      0% {
        transform: translateX(0);
      }

      100% {
        transform: translateX(-50%);
      }
    }
  `}</style>
</section>
    </>
  );
}