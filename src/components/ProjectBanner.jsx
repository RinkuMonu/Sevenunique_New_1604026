"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

/* PROJECT BANNERS */
const banners = [
  {
    title: "Modern Mobile Applications",
    subtitle:
      "Scalable, intuitive, and high-performance mobile applications built for modern businesses.",
    image: "/images/banner-fin.jpeg",
  },
  {
    title: "Enterprise Web Solutions",
    subtitle:
      "Secure and responsive web platforms designed to streamline operations and improve growth.",
    image: "/images/fin-web-banner.jpeg",
  },
  {
    title: "Creative Website Experiences",
    subtitle:
      "Beautiful and user-focused websites crafted to engage users and elevate brands.",
    image: "/images/fin-panel-banner.jpeg",
  },
];

export default function ProjectsBannerSlider() {
  const [current, setCurrent] = useState(0);

  /* AUTO SLIDE */
  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(slider);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? banners.length - 1 : prev - 1
    );
  };

  return (
    <section
      className={`${outfit.className} bg-white py-20 px-5`}
    >
      <div className="max-w-5xl mx-auto">
        {/* HEADING */}
       <div className="text-center mb-14">
  <h2 className="text-[34px] sm:text-[38px] leading-[1.1] font-semibold text-[#111] mb-5">
    Our <span className="text-orange-500">Fintech Services</span> Mobile Application, Website & Admin Panel
  </h2>

  <p className="max-w-4xl mx-auto text-[#666] text-[17px] leading-8">
    We build powerful utility service mobile apps, responsive websites,
    and advanced admin panels designed for seamless management,
    automation, secure transactions, and exceptional user experiences.
  </p>
</div>

        {/* SLIDER */}
        <div className="relative h-[620px] rounded-[10px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 120 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -120 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0"
            >
              {/* IMAGE */}
              <Image
                src={banners[current].image}
                alt={banners[current].title}
                fill
                className="object-contain"
                priority
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 " />

              {/* CONTENT */}
              {/* <div className="absolute inset-0 flex items-center">
                <div className="max-w-3xl px-10 sm:px-16 text-white">
                  <p className="uppercase tracking-[4px] text-sm text-white/70 mb-5">
                    Featured Project
                  </p>

                  <h3 className="text-[42px] sm:text-[68px] leading-[1.05] font-semibold mb-6">
                    {banners[current].title}
                  </h3>

                  <p className="text-[17px] leading-8 text-white/80 max-w-2xl">
                    {banners[current].subtitle}
                  </p>
                </div>
              </div> */}
            </motion.div>
          </AnimatePresence>

          {/* ARROWS */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
          >
            <ChevronRight size={24} />
          </button>

          {/* DOTS */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === index
                    ? "w-10 bg-white"
                    : "w-2 bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}