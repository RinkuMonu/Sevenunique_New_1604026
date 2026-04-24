"use client";

import Image from "next/image";

const logos = [
  "/images/chime.svg",
  "/images/rollsroyce.svg",
  "/images/abott.svg",
  "/images/adobe1.svg",
  "/images/salesforce1.svg",
  "/images/sirisum.svg",
  "/images/iqvia1.svg",
  "/images/associated1.svg",
  "/images/pinterest2.svg",
  "/images/net.svg",
  "/images/google1.svg",
  "/images/viacom.svg",
  "/images/panasonic.svg",
  "/images/hp1.svg",
  "/images/groupon.svg",
];

export default function ClientShowcase() {
  return (
    <section className="bg-[#f5f5f6] py-24 px-6 md:px-12">
      
      {/* ✅ Slight reduction (1280 → 1180) */}
      <div className="max-w-[1180px] mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-[32px] md:text-[40px] font-semibold text-[#111] leading-tight mb-8 max-w-lg">
            ...in startups to Fortune 500 companies, such as Google,
            Pinterest, Rolls Royce, and many, many more...
          </h2>

          <div className="mt-6">
            <button className="group text-[14px] font-medium text-[#111] border-b border-black pb-1 flex items-center gap-2 hover:text-[#f46b45] transition">
              Who we work with
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </div>

        {/* RIGHT GRID */}
        <div className="grid grid-cols-3 gap-6">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm flex items-center justify-center h-[110px] hover:shadow-md transition"
            >
              <div className="relative w-[90px] h-[40px]">
                <Image
                  src={logo}
                  alt="client"
                  fill
                  className="object-contain opacity-80"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}