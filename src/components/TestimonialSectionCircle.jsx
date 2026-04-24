"use client";

import Image from "next/image";
import React from "react";

const TestimonialSectionCircle = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Main flex container - image left, quote right */}
        <div className="flex flex-col md:flex-row gap-10 items-center">
          {/* RIGHT SIDE - Quote */}
          <div className="w-full md:w-2/3 relative">
            {/* Opening quote mark */}
            <div className="mb-4 absolute -top-5 -left-7">
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
            <blockquote className="text-gray-800 text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed">
              Circles has given me different and challenging responsibilities.
              It has prompted me to get out of my comfort zone and think
              creatively in order to bring some appealing ideas to the team.
            </blockquote>

            {/* Author info */}
            <div className="mt-8">
              <p className="font-bold text-gray-900 text-lg">Diana Remache</p>
              <p className="text-gray-800 font-medium">
                Agile/Scrum Circle Leader
              </p>
            </div>
          </div>

          {/* LEFT SIDE - Image / Avatar */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative flex items-end">
              {/* BACKGROUND CIRCLE (soft grey like screenshot) */}
              <div className="w-[260px] h-[260px] rounded-full absolute bottom-0" />

              {/* IMAGE */}
              <div className="relative z-10">
                <Image
                  src="https://assets.bairesdev.com/image/upload/v1/www/static/circles/leaders/Diana-Remache_pkbfma"
                  alt="Diana"
                  width={260}
                  height={260}
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
