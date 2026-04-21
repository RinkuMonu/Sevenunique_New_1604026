"use client";

import { useState } from "react";
import { HiPlus, HiX, HiCheck } from "react-icons/hi";

export default function BackendServices() {
    const [active, setActive] = useState(0);

    const data = [
        {
            title: "Backend Architecture & Strategy",
            content: "Most backend problems trace back to architecture decisions made under pressure or without full context. We work with engineering and product leaders to design modular, performant systems that support current needs while accommodating future scale.",
        },
        {
            title: "API Development & Integration",
            content: "Robust APIs built for performance and seamless integrations.",
        },
        {
            title: "Microservices Architecture",
            content: "Break monoliths into scalable microservices.",
        },
        {
            title: "Database Architecture & Optimization",
            content: "High-performance databases with optimized queries.",
        },
        {
            title: "Cloud Backend Development",
            content: "Deploy scalable backends on AWS, GCP, and Azure.",
        },
        {
            title: "Backend Modernization & Migration",
            content: "Upgrade legacy systems with modern architecture.",
        },
        {
            title: "Real-Time Data Processing",
            content: "Streaming and real-time analytics systems.",
        },
        {
            title: "Authentication & Identity Systems",
            content: "Secure auth systems with modern standards.",
        },
    ];

    return (
        <section className="bg-[#f5f6f7] py-20 px-10">
            <div className="max-w-7xl mx-auto grid grid-cols-2 gap-16 items-center">

                {/* LEFT SIDE */}
                <div>
                    <p className="text-xs tracking-widest text-gray-900 mb-4">
                        BACKEND DEVELOPMENT SERVICES
                    </p>

                    <h2 className="text-4xl font-semibold leading-tight mb-6 text-black">
                        No matter what you're building,
                        <br />
                        we can help.
                    </h2>

                    <p className="max-w-md leading-relaxed mb-10 text-black">
                        Backend infrastructure determines how fast you ship features,
                        how reliably systems scale, and how quickly teams adapt to
                        changing requirements.
                    </p>

                    {/* logos */}
                    <div className="flex gap-10 items-center">
                        <img src="/images/gcp.png" className="h-20" />
                        <img src="/images/aws.png" className="h-20" />
                        <img src="/images/ipo.png" className="h-20" />
                    </div>
                </div>

                {/* RIGHT SIDE ACCORDION */}
                <div className="flex flex-col gap-4">

                    {data.map((item, i) => (
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
                                className={`overflow-hidden transition-all duration-300 ${active === i ? "max-h-40 mt-3" : "max-h-0"
                                    }`}
                            >
                                <p className="text-black text-[18px] ps-8">
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