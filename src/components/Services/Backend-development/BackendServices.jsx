"use client";

import Image from "next/image";
import { useState } from "react";
import { HiPlus, HiX, HiCheck } from "react-icons/hi";

export default function BackendServices({ servicesSection }) {
    const [active, setActive] = useState(0);

    if (!servicesSection?.items?.length) return null;

    const {
        sectionLabel,
        heading,
        description,
        logos = [],
        items = [],
    } = servicesSection;

    return (
        <section className="bg-[#f5f6f7] py-20 px-10">
            <div className="max-w-7xl mx-auto grid gap-16 items-center lg:grid-cols-2">

                {/* LEFT SIDE */}
                <div>
                    <p className="text-xs tracking-widest text-gray-900 mb-4">
                        {sectionLabel}
                    </p>

                    <h2 className="text-4xl font-semibold leading-tight mb-6 text-black">
                        {heading}
                    </h2>

                    <p className="max-w-md leading-relaxed mb-10 text-black">
                        {description}
                    </p>

                    <div className="flex flex-wrap gap-8 items-center">
                        {logos.map((logo) => (
                            <div key={logo.src} className="relative h-16 w-20">
                                <Image
                                    src={logo.src}
                                    alt={logo.alt || "Technology logo"}
                                    fill
                                    className="object-contain"
                                    sizes="80px"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT SIDE ACCORDION */}
                <div className="flex flex-col gap-4">

                    {items.map((item, i) => (
                        <div key={i} className="border-b border-gray-300 pb-4">

                            {/* HEADER */}
                            <div
                                onClick={() => setActive(i === active ? -1 : i)}
                                className="flex justify-between items-start cursor-pointer"
                            >

                                {/* LEFT SIDE (Tick + Title) */}
                                <div className="flex items-start gap-3 text-black">
                                    <HiCheck className="text-black text-lg mt-1" />
                                    <span className="text-[20px] font-medium">
                                        {item.title}
                                    </span>
                                </div>

                                {/* RIGHT SIDE ICON */}
                                <div>
                                    {active === i ? (
                                        <HiX className="text-orange-500 text-xl" />
                                    ) : (
                                        <HiPlus className="text-orange-500 text-xl" />
                                    )}
                                </div>

                            </div>

                            {/* CONTENT */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ${active === i ? "max-h-56 mt-3" : "max-h-0"
                                    }`}
                            >
                                <p className="whitespace-pre-line text-black text-[18px] ps-8">
                                    {item.content}
                                </p>
                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}
