"use client";

import Image from "next/image";

const FALLBACK_IMAGE = "/images/dark.png";

export default function DarkCtaStrip({ data }) {
  if (!data) return null;

  const { titleLines, highlight, buttonLabel, buttonLink, image } = data;

  // ✅ prevent empty src crash
  const safeImage =
    image && image.trim() !== "" ? image : FALLBACK_IMAGE;

  return (
    <section className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex items-center justify-between gap-10">
          
          {/* LEFT CONTENT */}
          <div className="max-w-xl">
            <h2 className="text-[37px] leading-tight font-semibold text-white mb-6">
              {titleLines?.map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}

              {highlight && (
                <span className="text-[#f97316]">
                  {highlight}
                </span>
              )}
            </h2>

            <a
              href={buttonLink || "#"}
              className="bg-[#1f8a63] text-white px-6 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition inline-block"
            >
              {buttonLabel}
            </a>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-[360px] h-[300px] hidden md:block">
            <div className="w-full h-full overflow-hidden rounded-[120px]">
              <Image
                src={safeImage}
                alt="cta"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}