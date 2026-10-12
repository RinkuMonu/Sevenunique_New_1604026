"use client";

import Image from "next/image";
import React from "react";

const TestimonialSectionCircle = () => {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      {/* Responsive UI update: quote decoration and portrait remain contained on phones. */}
      <div className="max-w-6xl mx-auto">
        {/* Main flex container - image left, quote right */}
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-10">
          {/* RIGHT SIDE - Quote */}
          <div className="w-full md:w-2/3 relative">
            {/* Opening quote mark */}
            <div className="mb-4 text-orange-400 md:absolute md:-left-7 md:-top-5">
              <svg
                className="w-10 h-10 text-orange-400"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
              </svg>
            </div>

            {/* Quote text */}
            <blockquote className="text-lg font-medium leading-relaxed text-gray-800 sm:text-xl md:text-2xl lg:text-3xl">
              Circles has given me different and challenging responsibilities.
              It has prompted me to get out of my comfort zone and think
              creatively in order to bring some appealing ideas to the team.
            </blockquote>

            {/* Author info */}
            <div className="mt-8">
              <p className="font-bold text-gray-900 text-lg">Divyanshi Verma</p>
              <p className="text-gray-800 font-medium">
                Agile/Scrum Circle Leader
              </p>
            </div>
          </div>

          {/* LEFT SIDE - Image / Avatar */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative flex items-end">
              {/* BACKGROUND CIRCLE (soft grey like screenshot) */}
              <div className="absolute bottom-0 h-[220px] w-[220px] rounded-full sm:h-[260px] sm:w-[260px]" />

              {/* IMAGE */}
              <div className="relative z-10 h-[220px] w-[220px] sm:h-[260px] sm:w-[260px]">
                <Image
                  src="/images/u4.jpg"
                  alt="Diana"
                  fill
                  sizes="(max-width: 639px) 220px, 260px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSectionCircle;
