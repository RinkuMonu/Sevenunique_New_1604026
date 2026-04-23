"use client";

import { useState } from "react";
import Image from "next/image";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const slides = [
  {
    logo: "/logos/logo1.png",
    title: "FINANCIAL TIMES",
    text:"The collaboration has been consistently smooth and efficient. Their team brings a strong sense of ownership, delivering reliable solutions while maintaining high performance standards. It’s been a valuable partnership for us.",
  },
  {
    logo: "/logos/logo2.png",
    title: "FORBES",
    text: "Working with them has been a seamless experience. They understand the complexity of large-scale systems and deliver solutions that are both stable and scalable, without compromising on timelines.",
  },
  {
    logo: "/logos/logo3.png",
    title: "TECHCRUNCH",
    text: "A dependable and knowledgeable team that truly understands the importance of precision and security. Their approach is structured, thoughtful, and aligned with long-term performance goals.",
  },
  {
    logo: "/logos/logo4.png",
    title: "CNBC",
    text: "Their ability to combine technical expertise with practical execution makes a real difference. The team is responsive, detail-oriented, and focused on delivering solutions that scale with confidence.",

  },
  {
    logo: "/logos/logo2.png",
    title: "BUSINESS INSIDER",
    text: "Business Insider recognized our platform for connecting top 1% tech talent worldwide.",
  },
  {
    logo: "/logos/logo3.png",
    title: "BLOOMBERG",
    text: "Featured by Bloomberg for consistent growth and global expansion.",
  },
];

export default function FeaturedSection() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className={`${outfit.className} bg-[#f3f3f3] py-16 px-6`}>
      <div className="max-w-5xl mx-auto bg-[#4b5863] text-white rounded-2xl overflow-hidden">

        {/* TOP BAR */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <p className="text-[20px] text-white/70">
            As featured in...
          </p>

          {/* TOP LOGOS */}
          <div className="flex items-center gap-8 opacity-80">
            <div className="w-[76px] h-9 relative">
              <Image src="/logos/cnbc.png" alt="CNBC" fill className="object-contain" />
            </div>
            <div className="w-16 h-6 relative">
              <Image src="/logos/forbes.png" alt="Forbes" fill className="object-contain" />
            </div>
            <div className="w-20 h-6 relative">
              <Image src="/logos/insider.png" alt="Insider" fill className="object-contain" />
            </div>
            <div className="w-20 h-6 relative">
              <Image src="/logos/bloomberg.png" alt="Bloomberg" fill className="object-contain" />
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex items-center gap-14 px-6 py-14 min-h-[200px]">

          {/* BIGGER LEFT LOGO */}
          <div className="w-64 h-28 relative shrink-0 flex items-center">
            <Image
              src={slides[index].logo}
              alt={slides[index].title}
              fill
              className="object-contain"
            />
          </div>

          {/* TEXT */}
          <p className="text-white/80 text-[20px] leading-[1.6] tracking-tight max-w-xl transition-all duration-500">
            {slides[index].text}
          </p>

        </div>

        {/* BOTTOM */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-white/10">

          <button
            onClick={prev}
            className="text-[20px] flex items-center gap-2 text-white/70 hover:text-white transition"
          >
            ← Previous
          </button>

          {/* DOTS */}
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full transition ${
                  i === index ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="text-[20px] flex items-center gap-2 text-white/70 hover:text-white transition"
          >
            Next →
          </button>

        </div>

      </div>
    </section>
  );
}