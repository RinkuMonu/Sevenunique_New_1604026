"use client";

import { useState } from "react";
import Image from "next/image";

export default function BaiTestimonialSection() {
  const data = [
    {
      name: "Hemant Verma",
      role: "Engineering Manager",
      text: "From small projects to working with large multinational companies, Sevenunique lets you test your skills with top developers and work at a global IT level.",
    },
    {
      name: "Raman Singh",
      role: "Engineering Manager",
      text: "I really enjoy working with a team of specialists in several technologies. At Seven Unique we have a great social environment and a lot of room for technical and personal growth.",
    },
    {
      name: "Priyanshi Goyal",
      role: "Service Manager",
      text: "My career has greatly improved alongside the company’s growth. I enjoy working at Seven Unique and I’m proud to be part of this amazing community.",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % data.length);
  const prev = () => setIndex((prev) => (prev - 1 + data.length) % data.length);

  const item = data[index];

  return (
    <section className="bg-[#f5f5f5] py-14 sm:py-20">
      <div className="mx-auto mb-8 max-w-6xl px-4 text-center sm:mb-12 sm:px-6">
        <h2 className="text-3xl font-semibold text-[#0f172a] sm:text-4xl">
          Hear from our team<span className="text-orange-500">.</span>
        </h2>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          We grow through feedback and every voice helps shape our journey at Sevenunique.
        </p>
      </div>

      {/* CARD */}
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Responsive UI update: contain testimonial artwork and stack content on phones. */}
        <div className="flex flex-col overflow-hidden rounded-[24px] bg-[#1f2a33] sm:rounded-[32px] md:flex-row">
          {/* LEFT IMAGE */}
          {/* LEFT IMAGE */}
          <div className="relative min-h-[260px] overflow-hidden sm:min-h-[320px] md:w-[40%] md:overflow-visible">
           <div className="absolute inset-0 md:bottom-0 md:left-auto md:right-[-40px] md:top-auto md:h-[115%] md:w-[115%]">
  <Image
    src="/images/u3.png"
    fill
    sizes="(max-width: 767px) 100vw, 40vw"
    alt="img"
    className="object-contain object-bottom"
  />
</div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col justify-center p-6 text-white sm:p-8 md:w-[60%] md:p-12">
            <h4 className="uppercase text-xs tracking-widest mb-6 text-gray-300">
              Employee Testimonial
            </h4>

            <p className="text-lg md:text-xl leading-relaxed mb-8 relative">
              <span className="absolute -left-2 -top-5 text-4xl text-orange-500 sm:-left-6 sm:-top-4">
                “
              </span>
              {item.text}
            </p>

            <div>
              <p className="font-semibold text-lg">{item.name}</p>
              <p className="text-gray-400">{item.role}</p>
            </div>
          </div>
        </div>

        {/* ARROWS */}
        {/* <div className="flex gap-4 mt-8">
          <button
            onClick={prev}
            className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white hover:scale-105 transition"
          >
            ←
          </button>

          <button
            onClick={next}
            className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white hover:scale-105 transition"
          >
            →
          </button>
        </div> */}
      </div>
    </section>
  );
}
