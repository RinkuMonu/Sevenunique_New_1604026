"use client";

import Image from "next/image";

export default function ClientLogos() {
  const logos = [
    {
      img: "/images/iaf.png",
      title: "Trusted by Industry Leaders",
    },
    {
      img: "/images/kab.png",
      title: "Globally Certified Standards",
    },
    {
      img: "/images/qro.jpg",
      title: "Recognized for Innovation",
    },
    {
      img: "/images/egca.png",
      title: "Award Winning Solutions",
    },
    {
      img: "/images/certified.avif",
      title: "Quality & Excellence",
    },
    {
      img: "/images/dpiit-logo.png",
      title: "Government Recognized",
    },
    {
      img: "/images/eu.webp",
      title: "International Presence",
    },
    {
      img: "/images/msme.png",
      title: "Certified Business",
    },
  ];

  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1220] mb-4">
          Recognized By Leading{" "}
          <span className="text-[#f4622a]">
            Organizations
          </span>
        </h2>

        <p className="text-gray-500 max-w-3xl mx-auto mb-14 text-sm sm:text-base">
          Trusted and certified by globally recognized organizations for
          delivering high-quality digital solutions and innovation.
        </p>

        {/* Slider */}
        <div className="relative overflow-hidden">

          <div className="flex w-max animate-marquee gap-6">

            {[...logos, ...logos].map((item, index) => (
              <div
                key={index}
                className="group w-[260px] flex-shrink-0 bg-white border border-gray-200 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#f4622a] hover:shadow-2xl"
              >
                {/* Logo */}
                <div className="flex justify-center items-center h-[120px] mb-5">
                  <Image
                    src={item.img}
                    alt="logo"
                    width={100}
                    height={100}
                    className="object-cover transition duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Divider */}
                <div className="w-full h-[1px] bg-gray-200 mb-4"></div>

                {/* Text */}
                <h3 className="text-[#0b1220] text-sm sm:text-base font-semibold leading-6">
                  {item.title}
                </h3>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}