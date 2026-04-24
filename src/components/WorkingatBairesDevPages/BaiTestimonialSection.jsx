"use client";

import { useState } from "react";
import Image from "next/image";

export default function BaiTestimonialSection() {
  const data = [
    {
      name: "Federico",
      role: "Engineering Manager",
      text: "From small projects to working with large multinational companies, BairesDev lets you test your skills with the best developers out there and play in the big leagues of IT development.",
    },
    {
      name: "Alejandro",
      role: "Engineering Manager",
      text: "I really enjoy working with a team of specialists in several technologies. At BairesDev we have a great social environment and a lot of room for technical and personal growth.",
    },
    {
      name: "Matias",
      role: "Service Manager",
      text: "My career has greatly improved alongside the company’s growth. I enjoy working at BairesDev and I’m proud to be part of this amazing community.",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % data.length);
  const prev = () => setIndex((prev) => (prev - 1 + data.length) % data.length);

  const item = data[index];

  return (
    <section className="py-20 bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl font-semibold text-[#0f172a]">
          Hear from our team<span className="text-orange-500">.</span>
        </h2>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          We believe in continuous growth, driven by your feedback. At
          BairesDev, every voice matters and shapes our collective journey.
        </p>
      </div>

      {/* CARD */}
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="bg-black rounded-[32px] overflow-hiddn flex flex-col md:flex-row">
          {/* LEFT IMAGE */}
          {/* LEFT IMAGE */}
          <div className="md:w-[40%] relative min-h-[320px]">
            <div className="absolute bottom-0 left-[-40px] md:left-[-60px] h-[120%] w-[120%]">
              <Image
                src="https://assets.bairesdev.com/image/upload/c_limit,w_1920/dpr_auto/f_auto/q_auto/v1/www/core/join-us-testimonial-fede_ovj9jg"
                fill
                alt="img"
                className="object-contain object-bottom"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="md:w-[60%] text-white p-8 md:p-12 flex flex-col justify-center">
            <h4 className="uppercase text-xs tracking-widest mb-6 text-gray-300">
              Employee Testimonial
            </h4>

            <p className="text-lg md:text-xl leading-relaxed mb-8 relative">
              <span className="text-orange-500 text-4xl absolute -left-6 -top-4">
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
