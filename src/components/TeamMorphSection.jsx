"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const people = [
  { img: "/team/p1.png", role: "Software developers", bg: "#ff5a2f", shape: "semi-circle" },
  { img: "/team/p2.png", role: "QA engineers", bg: "#6c9bd2", shape: "polygon-square" },
  { img: "/team/p3.png", role: "UX designers", bg: "#f49b7d", shape: "circle" },
  { img: "/team/p4.png", role: "Data scientists", bg: "#f4a300", shape: "triangle" },
  { img: "/team/p5.png", role: "Project managers", bg: "#7dc3b5", shape: "semi-circle" },
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
      className={`${outfit.className} bg-[#f3f3f3] py-32 px-6`}
    >
      <div
        className={`max-w-7xl mx-auto flex justify-center items-center transition-all duration-1000 ease-in-out
        ${visible ? "gap-4" : "gap-40"}`}
      >
        {people.map((p, i) => (
          <div
            key={i}
            className="relative flex flex-col items-center transition-all duration-1000"
            style={{
              transitionDelay: visible ? `${i * 70}ms` : "0ms",
              transform: visible ? "scale(1.1)" : "scale(0.85)",
            }}
          >
            {/* IMAGE + SHAPE WRAPPER */}
            <div className="relative w-[200px] h-[200px]">

              {/* BACKGROUND SHAPE */}
              <div
                className="absolute inset-0 transition-all duration-1000 ease-in-out"
                style={{
                  background: p.bg,
                  clipPath: getShape(p.shape, !visible),
                  opacity: visible ? 0.2 : 1,
                  transform: visible ? "scale(0.9)" : "scale(1.1)",
                }}
              />

              {/* IMAGE */}
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
                />
              </div>
            </div>

            {/* TEXT */}
            <p
              className={`mt-6 text-[20px] font-medium text-[#555] transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {p.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* SHAPE LOGIC */
function getShape(type, isInitial) {
  if (isInitial) {
    return "inset(0% 0% 0% 0%)";
  }

  switch (type) {
    case "semi-circle":
      return "polygon(0% 15%, 15% 0%, 100% 0%, 100% 100%, 0% 100%)";

    case "polygon-square":
      return "polygon(10% 0%, 100% 15%, 90% 100%, 0% 85%)";

    case "triangle":
      return "polygon(50% 0%, 0% 100%, 100% 100%)";

    default:
      return "circle(48% at 50% 50%)";
  }
}