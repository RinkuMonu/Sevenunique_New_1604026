"use client";

import Image from "next/image";
import { useState } from "react";

export default function AIUseCasesSection({ useCases }) {
  const [active, setActive] = useState(0);

  if (!useCases) return null;

  const { sectionLabel, heading, description, image, services } = useCases;

  return (
    <section className="bg-[#f5f5f5] py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

        {/* LEFT */}
        <div>
          <p className="text-[12px] tracking-[0.2em] text-gray-500 mb-4 uppercase">
            {sectionLabel}
          </p>

          <h2 className="text-[42px] leading-[1.2] font-semibold text-black mb-6">
            {heading}
          </h2>

          <p className="text-black/80 text-[15px] leading-[1.7] mb-8 max-w-lg">
            {description}
          </p>

          <div className="relative w-full h-[240px] rounded-xl overflow-hidden">
            <Image
              src={image}
              alt={sectionLabel}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">
          {services.map((item, i) => {
            const isOpen = active === i;

            return (
              <div
                key={i}
                className="border-l-2 pl-5 cursor-pointer transition-all duration-300"
                style={{ borderColor: isOpen ? "#22c55e" : "#d1d5db" }}
                onClick={() => setActive(i)}
              >
                <h3
                  className={`text-[18px] font-medium transition ${
                    isOpen ? "text-black" : "text-black/70"
                  }`}
                >
                  {item.title}
                </h3>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isOpen ? "max-h-[300px] mt-3" : "max-h-0"
                  }`}
                >
                  <div className="text-black/80 text-[14px] leading-[1.7] space-y-3">
                    {item.content.split("\n\n").map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}