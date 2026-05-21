"use client";

import Image from "next/image";

export default function ClientLogos() {
  const logos = [
    "/images/iaf.png",
    "/images/kab.png",
    "/images/qro.jpg",
    "/images/egca.png",
    "/images/certified.avif",
    "/images/dpiit-logo.png",
    "/images/eu.webp",
    "/images/msme.png",
  ];

  return (
    <section className="bg-white py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-600 leading-snug mb-14">
          Recognized By Leading{" "}
          <span className="underline decoration-[#f4622a] underline-offset-4">
            Organizations
          </span>
          <span className="text-[#f4622a]">.</span>
        </h2>

        {/* Infinite Scrolling Logos */}
        <div className="relative overflow-hidden">
          <div className="flex w-max animate-marquee gap-16 items-center">

            {/* Double map for infinite effect */}
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex-shrink-0">
                <Image
                  src={logo}
                  alt="logo"
                  width={120}
                  height={60}
                  className="grayscale object-contain opacity-80"
                />
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}