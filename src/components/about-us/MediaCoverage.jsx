"use client";

import { useState } from "react";
import Image from "next/image";
import { FaArrowRight, FaPlus, FaMinus } from "react-icons/fa";

const data = [
  {
    logo: "/logos/b.png",
    content: "Recognized for innovation in AI and enterprise solutions.",
  },
  {
    logo: "/logos/financial1.png",
    content: "Featured among fastest-growing global tech companies.",
  },
  {
    logo: "/logos/techcrunch1.png",
    content: "Highlighted for disruptive startup ecosystem impact.",
  },
  {
    logo: "/logos/harvard.png",
    content: "Case study on scaling global engineering teams.",
  },
];

export default function MediaCoverage() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="bg-[#f5f5f6] py-24 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT */}
        <div>
          <h2 className="text-[32px] md:text-[40px] font-semibold text-[#111] leading-tight mb-8 max-w-lg">
            ...and we've been recognized by Forbes, Nasdaq, Inc 5000, among others.
          </h2>

          <button className="group text-[14px] font-medium text-[#111] border-b border-black pb-1 flex items-center gap-2 hover:text-[#f46b45] transition">
            All media coverage
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* RIGHT ACCORDION */}
        <div className="flex flex-col gap-6">

          {data.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm overflow-hidden">

              {/* HEADER */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-6"
              >
                <div className="relative w-[80px] h-[40px]">
                  <Image
                    src={item.logo}
                    alt="logo"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f15c2d] text-white transition-transform duration-300">
                  {active === index ? <FaMinus /> : <FaPlus />}
                </div>
              </button>

              {/* 🔥 SMOOTH CONTENT */}
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  active === index ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 text-[14px] text-gray-600">
                  {item.content}
                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}