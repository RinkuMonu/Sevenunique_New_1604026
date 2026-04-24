"use client";

import Image from "next/image";

export default function GreenCtaStrip({ data }) {
  if (!data) return null; // ✅ safety

  const { image, text, buttonLabel, buttonLink } = data;

  return (
    <section className="w-full flex justify-center py-10">
      <div className="max-w-5xl w-full bg-[#1f8a63] rounded-2xl px-6 py-5 flex items-center justify-between gap-6">

        {/* LEFT: Image + Text */}
        <div className="flex items-center gap-5">

          {/* Image */}
          <div className="w-30 h-20 relative rounded-xl overflow-hidden">
            <Image
              src={image}
              alt="cta"
              fill
              className="object-cover"
            />
          </div>

          {/* Text */}
          <p className="text-white font-bold text-[20px] leading-7 font-medium max-w-md">
            {text}
          </p>
        </div>

        {/* RIGHT: Button */}
        <a
          href={buttonLink || "#"}
          className="bg-black text-white px-5 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 hover:opacity-90 transition"
        >
          {buttonLabel}
          <span className="text-lg">→</span>
        </a>

      </div>
    </section>
  );
}