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
        <section className="h-screen w-full flex bg-white relative overflow-hidden">
            {/* LEFT IMAGE - 1/3 width */}
            <div className="w-1/3 h-full">
                <img
                    src="/images/Test.png"
                    alt="Team"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* RIGHT SIDE - 2/3 width */}
            <div className="w-2/3 h-full bg-[#f3f3f3] relative flex flex-col">
                {/* TOP TEXT */}
                <div className="mt-24 px-16 max-w-2xl">
                    <h1 className="text-[38px] font-semibold leading-[1.2] text-gray-800">
                        We’ve stopped counting. Over 500 brands count on us.
                    </h1>
                    <p className="text-[14px] text-gray-500 mt-5 mb-25">
                        1,200+ projects executed successfully and an average relationship of over 3 years.
                    </p>
                </div>
            </div>

            {/* 🔥 FULL WIDTH SLIDER OVERLAY */}
            {/* We position this absolute relative to the SECTION so it starts from the far left */}
            <div className="absolute bottom-[-30] left-0 w-full z-10">
                <Swiper
                    modules={[Navigation]}
                    /* To show 3 full slides and a bit of the 4th, 
                       3.5 is the ideal value across the full screen width.
                    */
                    slidesPerView={3.5}
                    spaceBetween={20}
                    loop={false}
                    /* This offset ensures the first slide starts slightly into the image 
                       to match the "overlap" look in your reference. */
                    slidesOffsetBefore={40}
                    navigation={{
                        nextEl: ".next-btn",
                        prevEl: ".prev-btn",
                    }}
                    className="testimonial-swiper px-4"
                >
                    {testimonials.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl min-h-[470px] flex flex-col justify-between border border-gray-100">
                                <div className="flex items-center justify-between mb-4">
                                    <img src={item.logo} alt="logo" className="h-8 object-contain" />
                                    <span className="text-xl text-gray-800"><IoIosArrowRoundForward size={40} /></span>
                                </div>
                                <div>
                                    <p className="text-red-500 text-3xl font-serif leading-none">"</p>
                                    <p className="text-[15px] text-gray-700 leading-relaxed">
                                        {item.text}
                                    </p>
                                </div>
                                <div className="mt-6">
                                    <p className="font-bold text-sm text-black">{item.name}</p>
                                    <p className="text-xs text-gray-500">{item.role}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* NAVIGATION BUTTONS - Centered or Aligned as per preference */}
                <div className="flex justify-center gap-4 mt-10">
                    <button className="prev-btn w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center bg-white hover:bg-black hover:text-white transition-all cursor-pointer">
                        ←
                    </button>
                    <button className="next-btn w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center bg-white hover:bg-black hover:text-white transition-all cursor-pointer">
                        →
                    </button>
                </div>
            </div>
        </section>
    );
}