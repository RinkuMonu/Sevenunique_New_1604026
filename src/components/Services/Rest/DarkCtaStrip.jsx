"use client";

import Image from "next/image";

const FALLBACK_IMAGE = "/images/team-handjoin.png";

export default function DarkCtaStrip({ data }) {
  if (!data) return null;

  const { titleLines, highlight, buttonLabel, buttonLink, image } = data;

  // ✅ prevent empty src crash
  const safeImage =
    image && image.trim() !== "" ? image : FALLBACK_IMAGE;

  return (
    <section className="bg-black py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center md:gap-10">
          
          {/* LEFT CONTENT */}
          <div className="max-w-xl">
            <h2 className="mb-6 block w-full max-w-full whitespace-normal break-words text-3xl font-semibold leading-tight text-white sm:text-[37px]">
              {titleLines?.join(" ")}{" "}

              {highlight && (
                <span className="text-[#f97316]">
                  {highlight}
                </span>
              )}
            </h2>

            <a
              href={buttonLink || "#"}
              className="inline-flex w-full items-center justify-center rounded-lg bg-[#1f8a63] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90 sm:w-auto"
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
