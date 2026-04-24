"use client";

import { useState } from "react";
import Image from "next/image";
import { FaArrowRight, FaPlus, FaMinus } from "react-icons/fa";
import Link from "next/link";

const data = [
  {
    logo: "/logos/b.png",
    content: "Recognized for innovation in AI and enterprise solutions.",
    link: "#",
  },
  {
    logo: "/logos/financial1.png",
    content: "Featured among fastest-growing global tech companies.",
    link: "#",
  },
  {
    logo: "/logos/techcrunch1.png",
    content: "Highlighted for disruptive startup ecosystem impact.",
    link: "#",
  },
  {
    logo: "/logos/harvard.png",
    content: "Case study on scaling global engineering teams.",
    link: "#",
  },
];

export default function MediaCoverage() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="bg-[#f5f5f6] py-20 md:py-24 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

        {/* LEFT */}
        <div className="text-center lg:text-left">
          <h2 className="text-[26px] md:text-[34px] lg:text-[40px] font-semibold text-[#111] leading-tight mb-8 max-w-lg mx-auto lg:mx-0">
            ...and we've been recognized by Forbes, Nasdaq, Inc 5000, among others.
          </h2>

          <button className="group text-[14px] font-medium text-[#111] border-b border-black pb-1 flex items-center gap-2 hover:text-[#f46b45] transition mx-auto lg:mx-0">
            All media coverage
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* RIGHT ACCORDION */}
        <div className="w-full max-w-[420px] md:max-w-[480px] lg:max-w-full mx-auto lg:mx-0 flex flex-col gap-4 md:gap-6">

          {data.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm overflow-hidden">

              {/* HEADER */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-5 md:p-6"
              >
                <div className="relative w-[70px] md:w-[80px] h-[36px] md:h-[40px]">
                  <Image
                    src={item.logo}
                    alt="logo"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-[#f15c2d] text-white">
                  {active === index ? <FaMinus /> : <FaPlus />}
                </div>
              </button>

              {/* CONTENT */}
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  active === index ? "max-h-[260px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-5 md:px-6 pb-5 md:pb-6 text-[13px] md:text-[14px] text-gray-600">
                  
                  <p className="mb-3">{item.content}</p>

                  {/* ✅ READ ARTICLE LINK */}
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-2 text-[#111] font-medium hover:text-[#f46b45] transition group"
                  >
                    Read this article
                    <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                  </Link>

                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}