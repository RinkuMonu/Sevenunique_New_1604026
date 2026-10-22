"use client";

import Image from "next/image";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const stats = [
  {
    number: "3500+",
    label: "Projects Completed",
    text: "projects completed • projects completed •",
  },
  {
    number: "375+",
    label: "Expert Members",
    text: "expert members • expert members •",
  },
  {
    number: "2700+",
    label: "Happy Clients",
    text: "happy clients • happy clients •",
  },
  {
    number: "235+",
    label: "Running Project",
    text: "running projects • running projects •",
  },
];

const certificates = [
  {
    image: "/images/certified.avif",
    title: "India's Fastest-Growing Companies",
  },
  {
    image: "/images/msme.png",
    title:
      "Ministry of Micro, Small and Medium Enterprises Certificate",
  },
  {
    image: "/images/pcidss.png",
    title:
      "Payment Card Industry Security Standards Council",
  },
  {
    image: "/images/iso.png",
    title:
      "International Organization for Standardization ISO",
  },
];

export default function AwardsSection() {
  return (
    <>
      {/* ANIMATION */}
      <style jsx>{`
        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        .spin-slow {
          animation: spinSlow 14s linear infinite;
          transform-origin: center;
        }

        @keyframes scrollDown {
          0% {
            transform: translateY(0%);
          }

          100% {
            transform: translateY(-50%);
          }
        }

        .scroll-certificates {
          animation: scrollDown 18s linear infinite;
        }

        .scroll-certificates:hover {
          animation-play-state: paused;
        }
      `}</style>

      <section
        className={`${outfit.className} bg-[#f3f3f3] px-3 py-6 sm:px-4 sm:py-10 lg:px-6`}
      >
        {/* Responsive UI update: stack awards content and remove mobile-width overflow. */}
        <div className="mx-auto overflow-hidden rounded-2xl bg-[#0b0b0b] px-4 py-8 sm:rounded-3xl sm:px-6 sm:py-12 lg:px-10 lg:py-14">
          <div className="grid min-w-0 grid-cols-1 items-center gap-10 lg:grid-cols-3 lg:gap-14">

            {/* LEFT CONTENT */}
            <div>
              <p className="text-xs tracking-[4px] text-white/50 mb-4 uppercase">
                Our Awards
              </p>

              <h2 className="mb-6 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                <span className="text-[#f4622a]">
                  Quality Driven
                </span>
                <br />
                Excellence.
              </h2>

              <p className="text-white/60 text-sm leading-7 mb-8 max-w-sm">
                Our dedication to quality, innovation, and
                client satisfaction drives every digital
                solution we create for businesses worldwide.
              </p>


            </div>

            {/* CENTER STATS */}
            <div className="grid min-w-0 grid-cols-1 gap-4 min-[380px]:grid-cols-2 sm:gap-8 lg:gap-10">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="relative mx-auto flex h-36 w-36 items-center justify-center sm:h-44 sm:w-44"
                >
                  {/* ROTATING TEXT */}
                  <svg
                    className="absolute w-full h-full spin-slow"
                    viewBox="0 0 200 200"
                  >
                    <defs>
                      <path
                        id={`circlePath${index}`}
                        d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0"
                      />
                    </defs>

                    <text
                      fill="#6b7280"
                      fontSize="12"
                      letterSpacing="3"
                    >
                      <textPath href={`#circlePath${index}`}>
                        {item.text}
                      </textPath>
                    </text>
                  </svg>

                  {/* INNER CONTENT */}
                  <div className="text-center z-10">
                    <p className="text-2xl font-bold text-white sm:text-3xl">
                      {item.number}
                    </p>

                    <p className="mt-1 text-xs text-white/60 sm:text-sm">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT CERTIFICATES SCROLL */}
            <div className="relative h-[420px] min-w-0 overflow-hidden border-t border-white/10 pt-6 lg:h-[450px] lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">

              <div className="scroll-certificates flex flex-col gap-8">

                {[...certificates, ...certificates].map(
                  (item, index) => (
                    <div
                      key={index}
                      className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-center backdrop-blur-sm"
                    >
                      <div className="w-24 h-20 mx-auto relative mb-4">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="96px"
                          className="object-contain"
                        />
                      </div>

                      <p className="text-sm text-white/60 leading-6">
                        {item.title}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
