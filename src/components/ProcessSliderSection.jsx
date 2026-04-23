"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";

export default function ProcessSliderSection({ data }) {
  const [swiper, setSwiper] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  
  const steps = data?.steps || [];

  useEffect(() => {
    if (swiper) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper]);

  if (!data || steps.length === 0) return null;

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 relative">
        
        {/* ROW: TALL IMAGE AND HEADING SIDE BY SIDE */}
        <div className="relative flex flex-col md:flex-row items-start mb-20">
          
          {/* Left Column: Increased Height Image (680px) */}
          <div className="relative w-full md:w-[500px] h-[680px] rounded-[2.5rem] overflow-hidden z-10 shrink-0 shadow-2xl">
            <Image
              src={data.image || "/images/process-bg.png"}
              alt="Process"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right Column: Heading beside the picture */}
          <div className="md:pl-16 pt-12 md:max-w-3xl z-30 relative pointer-events-none">
            <p className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-4 pointer-events-auto">
              {data.eyebrow || "BACKEND DEVELOPMENT PROCESS"}
            </p>
            <h2 className="text-3xl md:text-[42px] font-bold text-[#101828] mb-6 leading-tight pointer-events-auto">
              {data.heading}
            </h2>
            <p className="text-[#475467] text-base md:text-lg leading-relaxed max-w-xl pointer-events-auto">
              {data.description}
            </p>
          </div>
        </div>

        {/* THE SLIDER: Positioned to overlap the image and extend right */}
        {/* mt-[-380px] pulls it higher to account for the extra image height */}
        <div className="relative z-40 mt-[-380px] md:ml-[220px]">
          <Swiper
            modules={[Navigation]}
            onSwiper={setSwiper}
            allowTouchMove={false} 
            speed={600}
            spaceBetween={16}
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.5 },
              1440: { slidesPerView: 4.8 },
            }}
            className="!overflow-visible"
          >
            {steps.map((step, i) => (
              <SwiperSlide key={i} className="h-auto pb-10">
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-[0_15px_45px_rgba(0,0,0,0.07)] border border-gray-100 h-full flex flex-col relative transition-shadow">
                  
                  {/* Number Badge */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 flex items-center justify-center text-[10px] font-bold bg-[#3b82f6] text-white rounded-md shadow-md z-50">
                    {i + 1}
                  </div>

                  <h4 className="text-[15px] font-bold text-[#2563eb] mb-4 leading-snug">
                    {step.title}
                  </h4>

                  <p className="text-[12px] text-gray-500 leading-[1.6]">
                    {step.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* NAVIGATION: Below the image */}
        <div className="flex gap-3 items-center mt-12 md:ml-[180px] relative z-50">
          <button
            ref={prevRef}
            className="w-10 h-10 rounded-full bg-[#d1d5db] flex items-center justify-center text-white hover:bg-gray-400 transition-colors cursor-pointer disabled:opacity-30 shadow-sm"
          >
            <span className="text-[10px]">❮</span>
          </button>
          <button
            ref={nextRef}
            className="w-10 h-10 rounded-full bg-[#374151] flex items-center justify-center text-white hover:bg-gray-900 transition-colors cursor-pointer disabled:opacity-30 shadow-md"
          >
            <span className="text-[10px]">❯</span>
          </button>
        </div>
      </div>
    </section>
  );
}