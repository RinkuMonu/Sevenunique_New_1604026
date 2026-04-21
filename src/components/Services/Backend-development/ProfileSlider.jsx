"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function ProfileSlider() {
  const profiles = [
    {
      name: "Ricardo F.",
      role: "Sr. Backend Architect",
      exp: "14 years of experience",
      person: "/images/man1.png",
      company: "/images/bbva.svg",
    },
    {
      name: "Aman S.",
      role: "DevOps Engineer",
      exp: "10 years of experience",
      person: "/images/man2.png",
      company: "/images/J-2.svg",
    },
    {
      name: "Neha K.",
      role: "Backend Engineer",
      exp: "8 years of experience",
      person: "/images/man3.png",
      company: "/images/a-3.svg",
    },
    {
      name: "Neha K.",
      role: "Backend Engineer",
      exp: "8 years of experience",
      person: "/images/man4.png",
      company: "/images/siriusxm-4.svg",
    },
    {
      name: "Neha K.",
      role: "Backend Engineer",
      exp: "8 years of experience",
      person: "/images/man5.png",
      company: "/images/motorolla-5.svg",
    },
  ];

  return (
    <div className="w-[360px]">

      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {profiles.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white rounded-xl shadow-md p-4 flex items-center justify-between">

              {/* LEFT */}
              <div className="flex items-center gap-4">
                <img
                  src={item.person}
                  className="w-15 h-15 object-cover rounded-2xl"
                />
                <div>
                  <p className="text-black font-bold text-sm">{item.role}</p>
                  <p className="text-xs text-gray-500">{item.name}</p>
                  <p className="text-xs text-gray-400">{item.exp}</p>
                </div>
              </div>

              {/* RIGHT */}
              <div className="text-right">
                <p className="text-[10px] text-gray-400">Previous Client</p>
                <img
                  src={item.company}
                  className="h-12 ml-auto object-contain"
                />
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
}