"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";


import "swiper/css";

export default function ProcessSliderSection({ data }) {
  const steps = data?.steps || [];

  if (!data || steps.length === 0) return null;

  return (
    <section className="overflow-hidden bg-white py-12 sm:py-16 lg:py-24">
      {/* Responsive UI update: remove negative mobile overlap and contain the process slider. */}
      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6">
        
        {/* ROW: TALL IMAGE AND HEADING SIDE BY SIDE */}
        <div className="relative mb-10 flex flex-col items-start md:mb-20 md:flex-row">
          
          {/* Left Column: Increased Height Image (680px) */}
          <div className="relative z-10 h-[260px] w-full shrink-0 overflow-hidden rounded-2xl shadow-2xl sm:h-[360px] md:h-[680px] md:w-[500px] md:rounded-[2.5rem]">
            <Image
              src="/images/working-person.png"
              alt="Process"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Right Column: Heading beside the picture */}
          <div className="relative z-30 pt-8 md:max-w-3xl md:pl-16 md:pt-12">
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
        <div className="relative z-40 md:-mt-[380px] md:ml-[220px]">
        <Swiper
  modules={[Navigation, Autoplay]}
  navigation={{
    prevEl: ".service-process-prev",
    nextEl: ".service-process-next",
  }}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }}
  loop={true}
  speed={800}
  spaceBetween={16}
  slidesPerView={1.05}
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
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 flex items-center justify-center text-[10px] font-bold bg-orange-500 text-white rounded-md shadow-md z-50">
                    {i + 1}
                  </div>

                  <h4 className="text-[15px] font-bold text-orange-500 mb-4 leading-snug">
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
        <div className="relative z-50 mt-6 flex items-center gap-3 md:ml-[180px] md:mt-12">
          <button
            aria-label="Previous process step"
            className="service-process-prev flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#d1d5db] text-white shadow-sm transition-colors hover:bg-gray-400 disabled:opacity-30"
          >
            <span className="text-[10px]">❮</span>
          </button>
          <button
            aria-label="Next process step"
            className="service-process-next flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#374151] text-white shadow-md transition-colors hover:bg-gray-900 disabled:opacity-30"
          >
            <span className="text-[10px]">❯</span>
          </button>
        </div>
      </div>
    </section>
  );
}
