"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const words = [
    "tech talent",
    "AI Engineers",
    "Data Engineers",
    "Cloud Engineers",
    "Full stack Engineers",
  ];

  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false); // fade out

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setVisible(true); // fade in
      }, 600); // slower animation
    }, 5000); // more reading time

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white pb-32 lg:pb-40">

      {/* FULL WIDTH IMAGE */}
      <div className="absolute inset-0">
        <Image
          src="/hero.avif"
          alt="Team working"
          fill
          priority
          className="object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="max-w-2xl">

          <h1 className="text-[53.92px] font-semibold leading-[1.1] text-black mb-6 font-sans">
            Speed Up Your Roadmap with Trusted
            <br />
            Nearshore Talent <br />

            {/* 🔥 Animated Text */}
            <span
              className={`text-[#f4622a] inline-block transition-all duration-500 ${visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-3"
                }`}
            >
              {words[index]}
            </span>
          </h1>

          <p className="text-gray-600 text-lg mb-8">
            Get access to 4,000+ timezone–compatible developers skilled in AI and over 100 technologies.

          </p>

          <Link
            href="/schedule-a-call-page"
            className="inline-block bg-[#f4622a] hover:bg-[#d94f1e] text-white px-6 py-3 rounded-md font-medium transition"
          >
            Schedule a Call
          </Link>
        </div>
      </div>

      {/* CURVE */}
      <div className="absolute bottom-0 left-0 w-full leading-none">
        <svg
          viewBox="0 0 1440 200"
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