"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosArrowRoundForward,
} from "react-icons/io";

export default function TestimonialSection() {
  const testimonials = [
    {
      logo:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
      text: "Their team delivered a modern and highly responsive website that completely transformed our online presence. The design and performance exceeded our expectations.",
      name: "Rahul Sharma",
      role: "Founder at Nexora Solutions",
    },

    {
      logo:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
      text: "We partnered with them for mobile app development, and the results were outstanding. The Android and iOS applications were smooth and scalable.",
      name: "Priya Verma",
      role: "Director at UrbanTech",
    },

    {
      logo:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
      text: "Their SEO and digital marketing strategies significantly improved our search rankings and online visibility within a short time.",
      name: "Amit Singh",
      role: "Marketing Head at Growify",
    },

    {
      logo:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
      text: "The UI/UX design team created an intuitive and visually stunning interface for our platform that improved customer engagement.",
      name: "Neha Kapoor",
      role: "CEO at Bright India Tech",
    },

    {
      logo:
        "https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=400&auto=format&fit=crop",
      text: "From backend architecture to frontend development, their developers handled the entire project professionally and efficiently.",
      name: "Vikram Patel",
      role: "CTO at Innovexa India",
    },
  ];

  return (
    <section className="relative bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-2 gap-14 items-center mb-20">

          {/* LEFT IMAGE */}
          <div className="relative">

            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#f4622a]/10 rounded-full blur-3xl"></div>

            <Image
              src="/images/Gemini_Generated_Image_dpcwdmdpcwdmdpcw.png"
              alt="team"
              width={700}
              height={700}
              className="rounded-[30px] object-cover h-[550px] w-full shadow-2xl"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>

            <p className="text-[#f4622a] font-semibold uppercase tracking-[4px] mb-4">
              Client Testimonials
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-[#191919]">
              Trusted By Startups,
              <br />
              Businesses & IT Companies
              <span className="text-[#f4622a]">.</span>
            </h2>

            <p className="text-gray-600 text-lg leading-8 mt-6 max-w-xl">
              We create scalable websites, mobile apps, and software solutions
              that help businesses grow faster with modern technology and
              premium digital experiences.
            </p>

            {/* STATS */}
            <div className="flex items-center gap-10 mt-10">

              <div>
                <h3 className="text-4xl font-bold text-[#f4622a]">
                  1200+
                </h3>
                <p className="text-gray-500 text-sm mt-2">
                  Projects Delivered
                </p>
              </div>

              <div className="w-px h-14 bg-gray-300"></div>

              <div>
                <h3 className="text-4xl font-bold text-[#f4622a]">
                  98%
                </h3>
                <p className="text-gray-500 text-sm mt-2">
                  Client Satisfaction
                </p>
              </div>
            </div>

            {/* BUTTON */}
            <button className="mt-10 group inline-flex items-center gap-3 bg-[#f4622a] text-white px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-300">

              Explore Case Studies

              <IoIosArrowRoundForward
                size={30}
                className="group-hover:translate-x-1 transition-all"
              />
            </button>
          </div>
        </div>

        {/* TESTIMONIAL SLIDER */}
        <div className="relative">

          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".prev-btn",
            }}
            spaceBetween={24}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {testimonials.map((item, i) => (
              <SwiperSlide key={i}>

                <div className="group bg-white border border-gray-100 rounded-[28px] p-8 h-[360px] flex flex-col justify-between shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">

                  {/* TOP */}
                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-4">

                      {/* USE IMG INSTEAD OF NEXT IMAGE */}
                      <img
                        src={item.logo}
                        alt={item.name}
                        className="w-[60px] h-[60px] rounded-full object-cover border-2 border-[#f4622a]"
                      />

                      <div>
                        <h4 className="font-semibold text-[17px] text-[#191919]">
                          {item.name}
                        </h4>

                        <p className="text-sm text-gray-500 mt-1">
                          {item.role}
                        </p>
                      </div>
                    </div>

                    <button className="w-12 h-12 rounded-full bg-[#fff3ee] flex items-center justify-center text-[#f4622a] group-hover:bg-[#f4622a] group-hover:text-white transition-all duration-300">

                      <IoIosArrowRoundForward size={28} />
                    </button>
                  </div>

                  {/* REVIEW */}
                  <div>

                    <p className="text-6xl text-[#f4622a]/20 font-bold leading-none mb-3">
                      “
                    </p>

                    <p className="text-[15px] leading-7 text-gray-600">
                      {item.text}
                    </p>
                  </div>

                  {/* STARS */}
                  <div className="flex items-center gap-1 text-[#f4622a] text-lg">
                    ★ ★ ★ ★ ★
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* NAVIGATION BUTTONS */}
          <div className="flex items-center justify-center gap-4 mt-14">

            <button className="prev-btn w-14 h-14 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-700 hover:bg-[#f4622a] hover:text-white hover:border-[#f4622a] transition-all duration-300 shadow-md">

              <IoIosArrowBack size={24} />
            </button>

            <button className="next-btn w-14 h-14 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-700 hover:bg-[#f4622a] hover:text-white hover:border-[#f4622a] transition-all duration-300 shadow-md">

              <IoIosArrowForward size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}