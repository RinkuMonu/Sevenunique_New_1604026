"use client";

import Image from "next/image";
import { useState } from "react";

export default function AIUseCasesSection({ useCases }) {
  const [active, setActive] = useState(0);

  if (!useCases) return null;

  const { sectionLabel, heading, description, image, services } = useCases;

  return (
   <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#f8fafc] py-24 px-6">

  {/* BACKGROUND BLUR */}
  <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-orange-100 blur-[140px] rounded-full opacity-70"></div>

  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">

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
      <h2 className="text-[40px] md:text-[52px] leading-[1.12] font-bold text-[#111827] mb-6">
        {heading}
      </h2>

      {/* DESCRIPTION */}
      <p className="text-gray-600 text-[16px] leading-[1.9] max-w-xl mb-10">
        {description}
      </p>

      {/* IMAGE */}
      <div className="relative overflow-hidden rounded-[30px] shadow-2xl shadow-black/10 group">
        <Image
          src={image}
          alt={sectionLabel}
          width={700}
          height={500}
          className="w-full h-[340px] object-cover transition duration-700 group-hover:scale-105"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>

        {/* FLOATING BADGE */}
        <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-md rounded-2xl px-5 py-4 shadow-lg">
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
          className="group flex gap-5 rounded-3xl bg-white border border-gray-200 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-100 hover:border-orange-200"
        >
          {/* ICON / NUMBER */}
          <div className="flex-shrink-0">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#ff6433] to-[#ff8b66] text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-orange-200">
              {String(i + 1).padStart(2, "0")}
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <h3 className="text-[22px] font-semibold text-[#111827] mb-3 group-hover:text-[#ff6433] transition">
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