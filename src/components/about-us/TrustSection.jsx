"use client";

import Image from "next/image";
import { FaArrowRight, FaThumbsUp, FaSmile } from "react-icons/fa";

export default function TrustSection() {
  return (
    <section className="bg-[#f5f5f6] py-24 px-6 md:px-12 overflow-x-hidden">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-[34px] md:text-[44px] font-semibold leading-tight text-[#111] mb-6">
            Ultimately, we were founded on and are driven by our{" "}
            <span className="text-[#f15c2d]">trust in talent</span>.
          </h2>

          <p className="text-gray-500 text-[16px] leading-7 mb-8 max-w-md">
            Over 4,000 people help drive our clients' success every day.
            Our proudest achievement is what they say about working here.
          </p>

          <button className="group flex items-center gap-2 border-b border-black pb-1 text-[14px]">
            Our Glassdoor testimonials
            <FaArrowRight className="transition group-hover:translate-x-1" />
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative">

          {/* FIXED BACKGROUND CIRCLE (no overflow now) */}
          <div className="absolute right-0 top-[-60px] w-[500px] h-[500px] translate-x-1/3 bg-white rounded-full opacity-70 pointer-events-none" />

          <div className="relative z-10">

            {/* TOP ROW */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              <Card
                bg="bg-[#2f6fd3]"
                icon={<FaThumbsUp />}
                text="Leaders provide all the guidance and help you need to grow and perform well."
              />
              <ImageCard src="/images/man1.png" />
            </div>

            {/* MIDDLE ROW */}
            <div className="grid grid-cols-2 gap-6 mb-6 items-end">
              <ImageCard src="/images/man2.png" small />
              <Card
                bg="bg-[#22a06b]"
                icon={<FaSmile />}
                text="I have the opportunity to work for worldwide companies, surrounded by a nice environment and talented people."
              />
            </div>

            {/* BOTTOM ROW */}
            <div className="grid grid-cols-3 gap-6">
              <Card
                bg="bg-[#1e2329]"
                text="The company does what they say they are going to do. Leadership takes great care of employees."
                small
              />
              <ImageCard src="/images/man3.png" />
              <Card
                bg="bg-[#f5a300]"
                icon={<FaSmile />}
                text="I've found great people that care about your growth."
                small
                darkText
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

/* CARD */
function Card({ bg, text, icon, small, darkText }) {
  return (
    <div
      className={`${bg} ${
        darkText ? "text-black" : "text-white"
      } rounded-2xl p-6 flex flex-col justify-between ${
        small ? "h-[180px]" : "h-[220px]"
      }`}
    >
      {icon && <div className="text-lg mb-3 opacity-90">{icon}</div>}
      <p className="text-[14px] md:text-[15px] leading-6 font-medium">
        “{text}”
      </p>
    </div>
  );
}

/* IMAGE CARD */
function ImageCard({ src, small }) {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden ${
        small ? "h-[160px]" : "h-[220px]"
      }`}
    >
      <Image src={src} alt="person" fill className="object-cover" />
    </div>
  );
}