"use client";

import Image from "next/image";

const leaders = [
  {
    name: "Lorena Albaretto",
    role: "AVP of Professional Services",
    img: "/images/l1.png",
    color: "hover:bg-[#E7BE17]",
  },
  {
    name: "Paul Azorin",
    role: "Co-founder and Managing Partner Europe",
    img: "/images/l2.png",
    color: "hover:bg-[#4C88D1]",
  },
  {
    name: "Edward Batten",
    role: "EVP of Growth",
    img: "/images/l3.png",
    color: "hover:bg-[#F03333]",
  },
  {
    name: "Rocio Belizon",
    role: "VP of Talent",
    img: "/images/l4.png",
    color: "hover:bg-[#2EE66E]",
  },
  {
    name: "Ellen Bavillal",
    role: "Director of Operations",
    img: "/images/l5.png",
    color: "hover:bg-[#CA2DCF]",
  },
  {
    name: "Melissa Cabrera",
    role: "VP of Marketing",
    img: "/images/l6.png",
    color: "hover:bg-[#26F0DF]",
  },
];

export default function LeadershipGrid() {
  return (
    <section className="bg-[#f5f6f7] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-[40px] leading-[1.2] font-semibold text-[#111827] mb-16 max-w-4xl">
          <span className="text-[#f66135]">Meet our leaders.</span>{" "}
          Under their stewardship, we secured many industry-recognized accolades
          <span className="text-[#f66135]">.</span>
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10">
          {leaders.map((item, i) => (
            <div key={i} className="group">

              {/* CARD */}
              <div
                className={`relative h-[220px] rounded-[20px] bg-gray-200 overflow-hidden transition-all duration-300 ${item.color}`}
              >
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-contain object-bottom transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* TEXT */}
              <div className="mt-4 text-center">
                <h3 className="text-[18px] font-semibold text-[#111827]">
                  {item.name}
                </h3>
                <p className="text-[14px] text-gray-500 mt-1">
                  {item.role}
                </p>
              </div>

            </div>
          ))}
        </div>



      </div>
    </section>
  );
}