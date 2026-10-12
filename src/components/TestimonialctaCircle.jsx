// TestimonialCTA.jsx — Next.js + Tailwind CSS (JSX)
"use client";

import Link from "next/link";

const avatars = [
  "/images/1.png",
  "/images/1.png",
  "/images/u3.png",
  "/images/u3.png",
];

export default function TestimonialCTA() {
  return (
    <section className="w-full bg-gray-100 px-4 py-10 sm:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto">
        {/* Responsive UI update: CTA padding and gaps scale from phone to desktop. */}
        <div
          className="relative flex flex-col items-start gap-8 rounded-2xl bg-[#1f2a33] px-5 py-10 sm:gap-12 sm:px-10 sm:py-14 md:px-14 lg:flex-row lg:gap-16 lg:px-20 lg:py-16"
        >
          {/* LEFT: Quote */}
          <div className="flex-1 min-w-0">
            <div
              className="mb-1 select-none font-black leading-none text-orange-500 sm:mb-3 lg:absolute lg:left-12 lg:top-14"
              style={{
                fontSize: "3rem",
                lineHeight: 1,
                fontFamily: "Georgia, serif",
              }}
              aria-hidden="true"
            >
              &#8220;
            </div>
            <p className="mb-7 max-w-[520px] text-lg leading-relaxed text-white sm:text-xl md:text-[25px]">
              Many of the Seven Unique engineers we hired emerged as top
              performers. In fact, of our group of 120 developers, all the
              Seven Unique engineers we had were in the top 20 of the
              organization.&#8221;
            </p>
            <p className="text-lg font-bold text-white sm:text-[23px]">
              Rama Mahajan
            </p>
            <p className="mt-0.5 text-base text-gray-100 sm:text-[20px]">
              Director of Program Management at Lumio
            </p>
          </div>

          {/* RIGHT: CTA */}
          <div className="flex w-full shrink-0 flex-col items-start gap-6 sm:w-auto lg:w-[320px] lg:items-center">
            {/* Overlapping avatars */}
            <div className="flex items-center">
              {avatars.map((src, i) => (
                <div
                  key={i}
                  className="rounded-full border-[3px] overflow-hidden"
                  style={{
                    width: 56,
                    height: 56,
                    borderColor: "#3a4a5c",
                    marginLeft: i === 0 ? 0 : -14,
                    position: "relative",
                    zIndex: avatars.length - i,
                    backgroundColor: "#cbd5e1",
                  }}
                >
                  <img
                    src={src}
                    alt=""
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Heading */}
            <p className="text-white font-bold text-[clamp(1.1rem,1.7vw,1.4rem)] leading-snug text-center max-w-[280px]">
              Become the best of the top 1% of tech talent.
            </p>

            {/* Primary CTA button */}
            <Link href="/schedule-a-call-page"
              className="w-full text-white font-bold text-[0.92rem] py-4 px-8 rounded-lg transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#22a86e" }}
            >
              Be the Best. Join Circles.
            </Link>

            {/* Secondary text link */}
            <div className="border-b border-gray-400 pb-1">
              <a
                href="/jobOp"
                className="flex items-center gap-2 text-white font-semibold text-[0.88rem] hover:text-gray-300 transition-colors"
              >
                Hire Top 1% Tech Talent{" "}
                <span className="text-base">&#8594;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
