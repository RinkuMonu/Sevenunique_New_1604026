"use client";

import { Download, Mail } from "lucide-react";

export default function PressCards() {
  const data = [
    {
      title: "About Us",
      desc: "Dive into our story, mission, vision, and the values driving us forward.",
      btn: "Explore Our Story",
    },
    {
      title: "Our Leadership",
      desc: "Meet the leaders steering us forward and shaping the future of tech innovation.",
      btn: "Meet The Leaders",
    },
    {
      title: "Brand Resources",
      desc: "Essential elements resources for accurate representation in your features.",
      btn: "Download Guidelines",
      icon: <Download size={16} />,
    },
    {
      title: "Contact Us",
      desc: "Connect directly with our media relations team.",
      btn: "Email Press Relations",
      icon: <Mail size={16} />,
    },
  ];

  return (
    <div className="grid md:grid-cols-4 gap-6 mb-14">
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-lg font-semibold text-[#1f2937]">
              {item.title}
            </h3>

            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              {item.desc}
            </p>
          </div>

          <button className="mt-6 inline-flex items-center gap-2 bg-black text-white text-sm font-medium px-4 py-2 rounded-md">
            {item.btn}
            {item.icon}
          </button>
        </div>
      ))}
    </div>
  );
}