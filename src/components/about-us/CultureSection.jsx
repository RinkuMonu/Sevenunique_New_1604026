"use client";

import {
  FaArrowRight,
  FaUserCheck,
  FaGlobe,
  FaHandshake,
  FaAward,
} from "react-icons/fa";

export default function CultureSection() {
  return (
    <section className="bg-[#f5f5f6] py-24 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>
          <h2 className="text-[34px] md:text-[44px] font-semibold text-[#111] leading-tight mb-8">
            <span className="text-[#f15c2d]">
              It's the BairesDev way:
            </span>
            <br />
            remote-first freedom,
            <br />
            responsibility that matters,
            <br />
            and a culture of real connection.
          </h2>

          <button className="group text-[14px] font-medium text-[#111] border-b border-black pb-1 flex items-center gap-2 hover:text-[#f46b45] transition">
            Explore our Culture
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* RIGHT — 2x2 GRID */}
        <div className="flex flex-col gap-10">

          {/* TOP ROW */}
          <div className="flex gap-6 justify-end">
            <Card icon={<FaUserCheck />} text="Customer-centered" color="yellow" />
            <Card icon={<FaGlobe />} text="Remote-first" color="orange" />
          </div>

          {/* BOTTOM ROW */}
          <div className="flex gap-6 justify-start">
            <Card icon={<FaHandshake />} text="Teamwork" color="green" />
            <Card icon={<FaAward />} text="Always evolving" color="blue" />
          </div>

        </div>
      </div>
    </section>
  );
}

/* CARD */
function Card({ icon, text, color }) {
  const styles = {
    yellow: "border-yellow-400 text-yellow-500",
    orange: "border-[#f15c2d] text-[#f15c2d]",
    green: "border-green-400 text-green-500",
    blue: "border-blue-400 text-blue-500",
  };

  return (
    <div
      className={`bg-white border ${styles[color]} rounded-xl px-6 py-4 flex items-center gap-3 shadow-sm min-w-[230px]`}
    >
      <div className="text-xl">{icon}</div>
      <span className="font-medium text-[#333] whitespace-nowrap">
        {text}
      </span>
    </div>
  );
}