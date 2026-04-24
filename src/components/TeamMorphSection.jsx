"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Outfit } from "next/font/google";
import Link from "next/link";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const people = [
  { img: "/team/p1.png", role: "Founder & Promoter • CEO", bg: "#ff5a2f", shape: "semi-circle" },
  { img: "/team/p2.png", role: "Company Secretary", bg: "#6c9bd2", shape: "polygon-square" },
  { img: "/team/p4.png", role: "Vice President", bg: "#f4a300", shape: "triangle-down" },
  { img: "/team/p3.png", role: "Sr. Full Stack Developer", bg: "#f49b7d", shape: "circle" },
  { img: "/team/p5.png", role: "Tech Manager", bg: "#7dc3b5", shape: "semi-circle" },
];

export default function TeamMorphSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`${outfit.className} bg-[#f3f3f3] py-24 md:py-32 px-6 overflow-hidden w-full`}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* TEAM GRID SECTION */}
        <div
          className={`flex justify-center items-center transition-all duration-1000 ease-in-out mb-24 w-full
          ${visible ? "gap-2 md:gap-4" : "gap-20 md:gap-40"}`}
        >
          {people.map((p, i) => (
            <div
              key={i}
              className="relative flex flex-col items-center transition-all duration-1000 shrink-0"
              style={{
                transitionDelay: visible ? `${i * 80}ms` : "0ms",
                transform: visible ? "scale(1)" : "scale(0.8)",
              }}
            >
              {/* IMAGE + SHAPE WRAPPER */}
              <div className="relative w-[130px] h-[130px] sm:w-[170px] sm:h-[170px] lg:w-[210px] lg:h-[210px] mb-12">
                
                {/* BACKGROUND SHAPE (Color Fades) */}
                <div
                  className="absolute inset-0 transition-all duration-1000 ease-in-out"
                  style={{
                    background: p.bg,
                    clipPath: getShape(p.shape, !visible),
                    opacity: visible ? 0.2 : 1,
                    transform: visible ? "scale(0.95)" : "scale(1.1)",
                  }}
                />

                {/* IMAGE (Clipped directly to shape) */}
                <div
                  className="absolute inset-0 transition-all duration-1000 ease-in-out"
                  style={{
                    clipPath: getShape(p.shape, !visible),
                  }}
                >
                  <Image
                    src={p.img}
                    alt={p.role}
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>

              {/* ROLE TEXT (Fades in under each person) */}
              <div
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 transition-all duration-700 w-full ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <p className="text-[14px] sm:text-[16px] font-medium text-[#666] text-center whitespace-nowrap">
                  {p.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ASSEMBLE TEXT SECTION (Matches your screenshot) */}
        <div 
          className={`text-center transition-all duration-1000 delay-[800ms] flex flex-col items-center
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-[32px] sm:text-[48px] lg:text-[56px] font-semibold text-[#444] mb-8 tracking-tight leading-tight">
            Let’s build your team.
          </h2>
          
          <Link
            href="/schedule-a-call-page"
            className="inline-block bg-[#10a37f] hover:bg-[#0e8c6d] text-white font-medium px-10 py-4 rounded-[10px] text-[18px] transition-all duration-200 active:scale-95 shadow-sm"
          >
            Schedule a Call
          </Link>
        </div>

      </div>
    </section>
  );
}

/* SHAPE LOGIC */
function getShape(type, isInitial) {
  // Start as a full box so the image isn't "cut" while moving
  if (isInitial) return "inset(0% 0% 0% 0%)";

  switch (type) {
    case "semi-circle":
      return "polygon(0% 15%, 15% 0%, 100% 0%, 100% 100%, 0% 100%)";
    case "polygon-square":
      return "polygon(15% 0%, 100% 10%, 85% 100%, 0% 90%)";
    case "triangle-down":
      return "polygon(0% 0%, 100% 0%, 50% 100%)";
    case "circle":
      return "circle(48% at 50% 50%)";
    default:
      return "inset(0%)";
  }
}