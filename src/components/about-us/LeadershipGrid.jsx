"use client";

import Image from "next/image";

const leaders = [
    {
        name: "Lorena Albaretto",
        role: "AVP of Professional Services",
        img: "/images/l1.png",
        color: "hover:bg-[#E7BE17]", // yellow
    },
    {
        name: "Paul Azorin",
        role: "Co-founder and Managing Partner Europe",
        img: "/images/l2.png",
        color: "hover:bg-[#4C88D1]", // blue
    },
    {
        name: "Edward Batten",
        role: "EVP of Growth",
        img: "/images/l3.png",
        color: "hover:bg-[#F03333]", // red
    },
    {
        name: "Rocio Belizon",
        role: "VP of Talent",
        img: "/images/l4.png",
        color: "hover:bg-[#2EE66E]", // green
    },
    {
        name: "Ellen Bavillal",
        role: "Director of Operations",
        img: "/images/l5.png",
        color: "hover:bg-[#CA2DCF]", // purple
    },
    {
        name: "Melissa Cabrera",
        role: "VP of Marketing",
        img: "/images/l6.png",
        color: "hover:bg-[#26F0DF]", // pink
    },
    {
        name: "Guillermo Carreras",
        role: "VP of Marketing",
        img: "/images/l3.png",
        color: "hover:bg-[#165529]",
    },
    {
        name: "Pablo Chamorro",
        role: "VP of Marketing",
        img: "/images/l8.png",
        color: "hover:bg-[#C915EC]",
    },
    {
        name: "Kenny Chang",
        role: "VP of Marketing",
        img: "/images/l9.png",
        color: "hover:bg-[#A83E0D]",
    },
    {
        name: "Augustine Coria",
        role: "VP of Marketing",
        img: "/images/l10.png",
        color: "hover:bg-[#CF821C]",
    },
    {
        name: "Stephanie Cursier",
        role: "VP of Marketing",
        img: "/images/l11.png",
        color: "hover:bg-[#5F0538]",
    },
    {
        name: "Nacho De Marco",
        role: "VP of Marketing",
        img: "/images/l12.png",
        color: "hover:bg-[#2008F8]",
    },
];

export default function LeadershipGrid() {
    return (
        <section className="bg-[#f5f6f7] py-20">
            <div className="max-w-7xl mx-auto px-6">

                {/* HEADING */}
                <h2 className="text-[40px] leading-[1.2] font-semibold text-[#111827] mb-16 max-w-4xl">
                    <span className="text-[#c2410c]">Meet our leaders.</span>{" "}
                    Under their stewardship, we secured many industry-recognized accolades
                    <span className="text-[#c2410c]">.</span>
                </h2>

                {/* GRID */}
                <div className="grid md:grid-cols-3 gap-10">

                    {leaders.map((item, i) => (
                        <div key={i} className="group">

                            {/* CARD */}
                            <div
                                className={`relative h-[220px] rounded-[20px] bg-gray-200 overflow-hidden transition-all duration-300 ${item.color}`}
                            >
                                <Image
                                    src={item.img}
                                    alt={item.name}
                                    fill
                                    className="object-contain object-bottom transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>

                            {/* TEXT */}
                            <div className="mt-4 text-center">
                                <h3 className="text-[18px] font-semibold text-[#111827]">
                                    {item.name}
                                </h3>
                                <p className="text-[14px] text-gray-500 mt-1">
                                    {item.role}
                                </p>
                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}