"use client";

import Image from "next/image";

export default function CallToAction() {
  return (
    <section className="w-full bg-black text-white py-20 flex flex-col items-center justify-center text-center relative overflow-hidden">
      
      {/* Top Image */}
      <div className="relative w-[220px] h-[260px] mb-10">
        <Image
          src="/images/dark.png"
          alt="Team working"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Text Content */}
      <div className="max-w-2xl px-4">
        <h2 className="text-2xl md:text-3xl font-medium leading-relaxed text-gray-300">
          500+ companies accelerate their tech <br />
          roadmaps with us.
        </h2>

        <p className="text-lg md:text-xl mt-3 text-orange-500">
          See how we can help you.
        </p>

        {/* Button */}
        <button className="mt-8 bg-green-700 hover:bg-green-800 transition px-6 py-3 rounded-lg text-sm font-medium">
          Book a Discovery Call
        </button>
      </div>
    </section>
  );
}