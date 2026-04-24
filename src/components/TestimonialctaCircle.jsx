// TestimonialCTA.jsx — Next.js + Tailwind CSS (JSX)
"use client";

const avatars = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/men/54.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/22.jpg",
];

export default function TestimonialCTA() {
  return (
    <section className="w-full bg-gray-100 py-10 px-6 sm:px-10 lg:px-20 xl:px-24">
      <div className="max-w-[1280px] mx-auto">
        <div
          className="rounded-2xl px-10 sm:px-14 lg:px-20 py-16 flex flex-col lg:flex-row gap-12 lg:gap-16 items-start relative"
          style={{ backgroundColor: "#3a4a5c" }}
        >
          {/* LEFT: Quote */}
          <div className="flex-1 min-w-0">
            <div
              className="font-black leading-none mb-3 select-none absolute top-14 left-12"
              style={{
                color: "#f97316",
                fontSize: "3.9rem",
                lineHeight: 1,
                fontFamily: "Georgia, serif",
              }}
              aria-hidden="true"
            >
              &#8220;
            </div>
            <p className="text-white text-[25px] leading-relaxed max-w-[520px] mb-8">
              Many of the BairesDev engineers we hired emerged as top
              performers. In fact, of our group of 120 developers, all the
              BairesDev engineers we had were in the top 20 of the
              organization.&#8221;
            </p>
            <p className="text-white font-bold text-[23px]">
              Matthew Mecham
            </p>
            <p className="text-gray-100 text-[20px] mt-0.5">
              Director of Program Management at Lumio
            </p>
          </div>

          {/* RIGHT: CTA */}
          <div className="flex-shrink-0 flex flex-col items-start lg:items-center gap-6 lg:w-[320px]">
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
            <button
              className="w-full text-white font-bold text-[0.92rem] py-4 px-8 rounded-lg transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#22a86e" }}
            >
              Be the Best. Join Circles.
            </button>

            {/* Secondary text link */}
            <div className="border-b border-gray-400 pb-1">
              <a
                href="#"
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
