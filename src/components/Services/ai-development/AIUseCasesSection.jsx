"use client";

import Image from "next/image";
import { useState } from "react";

export default function AIUseCasesSection({ useCases }) {
  const [active, setActive] = useState(0);

  if (!useCases) return null;

  const { sectionLabel, heading, description, image, services } = useCases;

  return (
   <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#f8fafc] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
  {/* Responsive UI update: use-case cards and artwork scale for phone widths. */}

  {/* BACKGROUND BLUR */}
  <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-orange-100 blur-[140px] rounded-full opacity-70"></div>

  <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-20">

    {/* LEFT SIDE */}
    <div>
      {/* LABEL */}
      <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 border border-orange-100 px-4 py-2 mb-6">
        <span className="w-2 h-2 rounded-full bg-[#ff6433]"></span>

        <p className="text-[11px] tracking-[0.22em] font-semibold text-[#ff6433] uppercase">
          {sectionLabel}
        </p>
      </div>

      {/* HEADING */}
      <h2 className="mb-5 text-3xl font-bold leading-tight text-[#111827] sm:text-4xl md:text-[52px]">
        {heading}
      </h2>

      {/* DESCRIPTION */}
      <p className="text-gray-600 text-[16px] leading-[1.9] max-w-xl mb-10">
        {description}
      </p>

      {/* IMAGE */}
      <div className="relative overflow-hidden rounded-[30px] shadow-2xl shadow-black/10 group">
        <Image
          src="/images/usecases.png"
          alt={sectionLabel}
          width={700}
          height={500}
          className="h-[220px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[280px] md:h-[340px]"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>

        {/* FLOATING BADGE */}
        <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-white/90 px-4 py-3 shadow-lg backdrop-blur-md sm:bottom-5 sm:left-5 sm:right-auto sm:rounded-2xl sm:px-5 sm:py-4">
          <p className="text-sm text-gray-500">
            Trusted by Global Businesses
          </p>

          <h4 className="text-lg font-semibold text-[#111827]">
            Innovative Digital Solutions
          </h4>
        </div>
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className="space-y-8">

      {services.map((item, i) => (
        <div
          key={i}
          className="group flex gap-3 rounded-2xl border border-gray-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-2xl hover:shadow-orange-100 sm:gap-5 sm:rounded-3xl sm:p-7"
        >
          {/* ICON / NUMBER */}
          <div className="flex-shrink-0">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#ff6433] to-[#ff8b66] font-bold text-white shadow-lg shadow-orange-200 sm:h-14 sm:w-14 sm:rounded-2xl sm:text-lg">
              {String(i + 1).padStart(2, "0")}
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <h3 className="mb-2 text-lg font-semibold text-[#111827] transition group-hover:text-[#ff6433] sm:mb-3 sm:text-[22px]">
              {item.title}
            </h3>

            <div className="text-gray-600 text-[15px] leading-[1.9] space-y-4">
              {item.content.split("\n\n").map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      ))}

    </div>
  </div>
</section>
  );
}
