"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const data = [
  {
    title:
      "Interview with Paul Azorin – Co-Founder and Managing Partner Europe at BairesDev",
    date: "October 8, 2025",
    img: "/images/n1.png",
  },
  {
    title: "Beyond Software",
    date: "April 9, 2024",
    img: "/images/n2.png",
  },
  {
    title:
      "Navigating the Data Revolution: Proactively Embracing New Approaches",
    date: "January 19, 2024",
    img: "/images/n3.png",
  },
   {
    title:
      "Navigating the Data Revolution: Proactively Embracing New Approaches",
    date: "January 19, 2024",
    img: "/images/n4.png",
  },
   {
    title:
      "Navigating the Data Revolution: Proactively Embracing New Approaches",
    date: "January 19, 2024",
    img: "/images/n5.png",
  },
   {
    title:
      "Navigating the Data Revolution: Proactively Embracing New Approaches",
    date: "January 19, 2024",
    img: "/images/n6.png",
  },
];

export default function NewsSection() {
  return (
    <section className="w-full bg-[#f3f4f6] px-6 md:px-12 py-16">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-xs tracking-widest text-gray-500 uppercase">
            In The News
          </h2>

          <button className="flex items-center gap-2 text-sm font-medium border-b border-black pb-1">
            View all In The News
            <ArrowRight size={16} />
          </button>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div key={index} className="bg-white rounded-md overflow-hidden">
              
              <div className="relative w-full h-[220px]">
                <Image
                  src={item.img}
                  alt="news"
                  fill
                  className="object-cover"
                />
              </div>

              {item.title && (
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-[#1f2937] leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm text-gray-500">
                    {item.date}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}