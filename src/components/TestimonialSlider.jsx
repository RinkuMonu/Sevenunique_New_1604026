"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function TestimonialSection() {
   const testimonials = [
  {
    logo: "/images/person.png",
    text: "Their team delivered a modern and highly responsive website that completely transformed our online presence. The design, performance, and user experience exceeded our expectations.",
    name: "Rahul Sharma",
    role: "Founder at Nexora Solutions",
  },
  {
    logo: "/images/person.png",
    text: "We partnered with them for mobile app development, and the results were outstanding. The Android and iOS applications were smooth, scalable, and delivered on time.",
    name: "Jessica Williams",
    role: "Product Manager at UrbanGo",
  },
  {
    logo: "/images/person.png",
    text: "Their SEO and digital marketing strategies significantly improved our search rankings and online visibility. We saw a major increase in leads within a few months.",
    name: "Amit Verma",
    role: "Marketing Head at Growify Media",
  },
  {
    logo: "/images/person.png",
    text: "The UI/UX design team created an intuitive and visually stunning interface for our platform. Our customer engagement improved dramatically after the redesign.",
    name: "Sophia Carter",
    role: "CEO at BrightTech",
  },
  {
    logo: "/images/person.png",
    text: "From backend architecture to frontend development, their developers handled the entire project professionally. Communication and delivery were excellent throughout.",
    name: "Daniel Lee",
    role: "CTO at Innovexa",
  },
  {
    logo: "/images/person.png",
    text: "Their ecommerce development expertise helped us launch a fast and secure online store that boosted our sales and customer experience.",
    name: "Priya Mehta",
    role: "Owner at StyleCart",
  },
  {
    logo: "/images/person.png",
    text: "The cloud and DevOps solutions they implemented improved our deployment process and overall application performance. A reliable technology partner for growing businesses.",
    name: "Michael Brown",
    role: "Operations Director at CloudNet",
  },
];

    return (
        <section className="w-full flex bg-white relative overflow-visible py-32">

            {/* LEFT IMAGE */}
            <div className="w-1/3 flex items-start justify-end">
                <img
                    src="/images/n3.png"
                    alt="Team"
                    className="w-[90%] h-[650px] object-cover rounded-xl"
                />
            </div>

            {/* RIGHT CONTENT */}
            <div className="w-2/3 bg-[#f3f3f3] flex flex-col justify-start pl-16 pr-10">

                {/* TEXT */}
                <div className="mt-10 max-w-2xl">
                    <h1 className="text-[40px] font-semibold leading-[1.2] text-gray-800">
                        Empowering our Clients With Innovative Solutions
                    </h1>

                    <p className="text-[14px] text-gray-500 mt-5 mb-8">
                        1,200+ projects executed successfully and an average relationship of over 3 years.
                    </p>

                    <button className="text-black flex items-center gap-2 border-b border-black pb-1 cursor-pointer">
                        Our greatest hits →
                    </button>
                </div>
            </div>

            {/* SLIDER */}
            <div className="absolute left-0 bottom-20 w-full z-10">
                <Swiper
                    modules={[Navigation]}
                    slidesPerView={3.5}
                    spaceBetween={20}
                    slidesOffsetBefore={60}
                    navigation={{
                        nextEl: ".next-btn",
                        prevEl: ".prev-btn",
                    }}
                    className="px-6"
                >
                    {testimonials.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div className="bg-white p-8 rounded-2xl shadow-xl min-h-[320px] flex flex-col justify-between">

                                <div className="flex items-center justify-between mb-4">

                                    <img src={item.logo} className="h-12" />

                                    <a
                                        href="#"
                                        className="group flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-all duration-300"
                                    >
                                        {/* TEXT (hidden → visible on hover) */}
                                        <span className="text-sm opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                            View case study
                                        </span>

                                        {/* ARROW */}
                                        <IoIosArrowRoundForward
                                            size={40}
                                            className="transition-all duration-300 group-hover:text-orange-500 group-hover:translate-x-1"
                                        />
                                    </a>

                                </div>

                                <div>
                                    <p className="text-red-500 text-3xl">"</p>
                                    <p className="text-[15px] text-gray-700 leading-relaxed">
                                        {item.text}
                                    </p>
                                </div>

                                <div>
                                    <p className="font-bold text-sm">{item.name}</p>
                                    <p className="text-xs text-gray-500">{item.role}</p>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* NAV BUTTONS */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-20">
                <button className="prev-btn w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center bg-white text-gray-600 hover:bg-black hover:text-white transition">
                    ←
                </button>
                <button className="next-btn w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center bg-white text-gray-600 hover:bg-black hover:text-white transition">
                    →
                </button>
            </div>

        </section>
    );
}