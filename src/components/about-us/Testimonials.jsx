"use client";

import { useRef } from "react";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const testimonials = [
  {
    logo: "/images/rollsroyce.svg",
    text: "Repeat Business is the best testament to a team's ability to perform, and I have no hesitation in hiring them again.",
    name: "Brad Mabry",
    role: "Product Manager at Rolls Royce",
    link: "#",
  },
  {
    logo: "/images/associated1.svg",
    text: "They have excellent resources available in multiple areas, but mostly, I was impressed by the flexibility and cooperation of the management.",
    name: "Lana Shaova",
    role: "Sr. Director, Business Technology at Associated Press",
    link: "#",
  },
  {
    logo: "/images/iqvia1.svg",
    text: "BairesDev has been the best vendor our team has made.",
    name: "Adam Isley",
    role: "Director of Digital Strategy",
    link: "#",
  },
];

export default function Testimonials() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;

    // ✅ reliable scroll amount
    const scrollAmount = container.clientWidth * 0.7;

    container.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#f5f5f6] py-20 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">

        {/* Heading */}
        <h2 className="text-[28px] md:text-[34px] font-semibold text-[#111] mb-12">
          ...who say many kind words that make us proud.
        </h2>

        {/* Slider */}
        <div className="relative">

          {/* Cards */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
          >
            {testimonials.map((item, i) => (
              <div
                key={i}
                className="min-w-[320px] md:min-w-[420px] bg-[#f15c2d] text-white rounded-2xl p-8 flex flex-col justify-between"
              >
                {/* Top */}
                <div className="flex items-center justify-between mb-6">
                  <div className="relative w-[100px] h-[24px]">
                    <Image
                      src={item.logo}
                      alt="logo"
                      fill
                      className="object-contain"
                    />
                  </div>

                  <Link href={item.link}>
                    <FaArrowRight className="text-xl cursor-pointer hover:translate-x-1 transition" />
                  </Link>
                </div>

                {/* Text */}
                <p className="text-[18px] leading-7 font-medium mb-8">
                  “{item.text}”
                </p>

                {/* Bottom */}
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm opacity-90">{item.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex justify-end gap-3 mt-6">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 bg-orange-500 rounded-full shadow flex items-center justify-center hover:bg-gray-100 transition"
            >
              <FaChevronLeft />
            </button>

            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 bg-orange-500 rounded-full shadow flex items-center justify-center hover:bg-gray-100 transition"
            >
              <FaChevronRight />
            </button>
          </div>

        </div>

      </div>

      {/* Hide scrollbar */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}