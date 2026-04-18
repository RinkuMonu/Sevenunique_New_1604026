"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function TestimonialSection() {
    const testimonials = [
        {
            logo: "/images/rolls-royce.svg",
            text: "Repeat Business is the best testament to a team’s ability to perform, and I have no hesitation in hiring them again. BairesDev’s pleasant collaboration style and high-level acumen rapidly catalyzed significant momentum.",
            name: "Brad Mabry",
            role: "Product Manager at Rolls Royce",
        },
        {
            logo: "/images/iqvia.svg",
            text: "BairesDev provides amazing development and design resourcing, along with best in class account management support. We were able to speed up product and design and delivery while reducing our costs.",
            name: "Adam Isley",
            role: "Director of Digital Strategy",
        },
        {
            logo: "/images/instructure.svg",
            text: "BairesDev is a trustworthy, knowledgeable, and adaptable development partner. They also know how to push back and ask questions when appropriate.",
            name: "Matt Mecham",
            role: "Program Manager",
        },
        {
            logo: "/images/next-roll.svg",
            text: "Their strong onboarding methods, reliable deliverables, and responsiveness continue to strengthen the relationship.",
            name: "Patrick Mee",
            role: "VP Engineering",
        },
        {
            logo: "/images/rga.svg",
            text: "Having access to such a vast talent pool has allowed us to strengthen our teams significantly.",
            name: "Ropu Ravagnati",
            role: "SVP Managing Director",
        },
        {
            logo: "/images/univision.svg",
            text: "Outstanding communication and execution across all phases of development.",
            name: "Client Name",
            role: "CTO",
        },
        {
            logo: "/images/associated.svg",
            text: "Their expertise helped us scale faster than expected.",
            name: "Another Client",
            role: "Founder",
        },
    ];

    return (
        <section className="w-full flex bg-white relative overflow-visible py-32">

            {/* LEFT IMAGE */}
            <div className="w-1/3 flex items-start justify-end">
                <img
                    src="/images/Test.png"
                    alt="Team"
                    className="w-[90%] h-[650px] object-cover rounded-xl"
                />
            </div>

            {/* RIGHT CONTENT */}
            <div className="w-2/3 bg-[#f3f3f3] flex flex-col justify-start pl-16 pr-10">

                {/* TEXT */}
                <div className="mt-10 max-w-2xl">
                    <h1 className="text-[40px] font-semibold leading-[1.2] text-gray-800">
                        We’ve stopped counting. Over 500 brands count on us.
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
                            <div className="bg-white p-8 rounded-2xl shadow-xl min-h-[420px] flex flex-col justify-between">

                                <div className="flex items-center justify-between mb-4">

                                    <img src={item.logo} className="h-8" />

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
                <button className="prev-btn w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center bg-white hover:bg-black hover:text-white transition">
                    ←
                </button>
                <button className="next-btn w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center bg-white hover:bg-black hover:text-white transition">
                    →
                </button>
            </div>

        </section>
    );
}