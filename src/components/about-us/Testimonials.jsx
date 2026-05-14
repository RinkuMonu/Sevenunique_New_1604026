"use client";

import { useRef } from "react";
import {
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { LucideUser } from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    text:
      "Their software development team delivered a scalable and user-friendly solution that significantly improved our business operations.",
    name: "Rahul Sharma",
    role: "CEO, TechNova Solutions",
    link: "#",
  },
  {
    text:
      "We were impressed by their fintech expertise, professionalism, and ability to deliver secure payment solutions on time.",
    name: "Priya Mehta",
    role: "Operations Head, FinEdge Finance",
    link: "#",
  },
  {
    text:
      "The team provided outstanding support throughout the project and helped us launch our digital platform smoothly.",
    name: "Amit Verma",
    role: "Founder, NextPay Services",
    link: "#",
  },
  {
    text:
      "Their developers understood our requirements perfectly and built a high-performance application tailored to our business needs.",
    name: "Sneha Kapoor",
    role: "Product Manager, SmartCore Technologies",
    link: "#",
  },
  {
    text:
      "From fintech integrations to software scalability, their expertise made a huge difference in our project success.",
    name: "Vikas Jain",
    role: "Director, Finverse India",
    link: "#",
  },
];

export default function Testimonials() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;

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
          ...whose positive feedback inspires us every day.
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
                  
                  {/* Person Icon */}
                  <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                    <LucideUser size={28} />
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
              className="w-10 h-10 bg-orange-500 rounded-full shadow flex items-center justify-center hover:bg-gray-100 hover:text-black transition"
            >
              <FaChevronLeft />
            </button>

            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 bg-orange-500 rounded-full shadow flex items-center justify-center hover:bg-gray-100 hover:text-black transition"
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