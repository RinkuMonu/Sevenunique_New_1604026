"use client";

import Image from "next/image";

export default function GreenCtaStrip({ data }) {
  if (!data) return null; // ✅ safety

  const { image, text, buttonLabel, buttonLink } = data;

  return (
    <section className="flex w-full justify-center px-4 py-8 sm:px-6 sm:py-10">
      {/* Responsive UI update: CTA stacks without forcing page-wide overflow. */}
      <div className="flex w-full max-w-5xl flex-col items-stretch justify-between gap-5 rounded-2xl bg-[#1f8a63] px-5 py-5 sm:px-6 md:flex-row md:items-center md:gap-6">

        {/* LEFT: Image + Text */}
        <div className="flex min-w-0 items-center gap-3 sm:gap-5">

          {/* Image */}
          <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-xl sm:h-20 sm:w-30">
            <Image
              src={image}
              alt="cta"
              fill
              className="object-cover"
            />
          </div>

          {/* Text */}
          <p className="min-w-0 max-w-md text-base font-bold leading-relaxed text-white sm:text-xl sm:leading-7">
            {text}
          </p>
        </div>

        {/* RIGHT: Button */}
        <a
          href={buttonLink || "#"}
          className="flex w-full shrink-0 items-center justify-center gap-2 rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90 md:w-auto"
        >
          {buttonLabel}
          <span className="text-lg">→</span>
        </a>

      </div>
    </section>
  );
}
