"use client";

import Image from "next/image";
import { useState } from "react";

const ORANGE = "#f66135"; 

const tabs = [
    {
        label: "Staff Augmentation",
        heading: "Our software developers in your team.",
        desc: "We embed our vetted developers directly into your existing team.",
        center: "Your\nTeam",
    },
    {
        label: "Software Development Teams",
        heading: "Dedicated development teams for you.",
        desc: "Get a fully managed team working exclusively on your project.",
        center: "Dev\nTeam",
    },
    {
        label: "Outsourcing",
        heading: "End-to-end software built for you.",
        desc: "We handle everything from planning to delivery.",
        center: "Your\nProject",
    },
];

const avatars = [
    "/images/l1.png",
    "/images/man2.png",
    "/images/man3.png",
    "/images/man4.png",
    "/images/man5.png",
];

export default function FlexibleWays() {
    const [active, setActive] = useState(0);
    const tab = tabs[active];

    const size = 320;
    const centerR = 54;
    const avatarR = 38;
    const orbitR = 118;

    const angles = [-90, -20, 50, 130, 210];

    return (
        <section className="py-20 flex flex-col items-center bg-white">

            {/* HEADING */}
            <h2 className="text-[36px] font-semibold mb-14 text-center text-[#0f172a]">
                Flexible ways we can work with you
                <span style={{ color: ORANGE }}>.</span>
            </h2>

            {/* CONTENT */}
            <div className="flex flex-wrap items-center justify-between gap-10 max-w-[900px] w-full mb-16">

                {/* LEFT */}
                <div className="max-w-[380px]">

                    {/* ✅ FIXED HEADING SPLIT */}
                    <h3 className="text-[32px] font-semibold mb-4 leading-snug text-[#0f172a]">
                        {tab.heading.split("in your team.")[0]}
                        <span style={{ color: ORANGE }}>
                            {tab.heading.includes("in your team.") && "in your team."}
                        </span>
                    </h3>

                    <p className="text-[#4b5563] text-[15px] leading-[1.7]">
                        {tab.desc}
                    </p>
                </div>

                {/* RIGHT (ORBIT) */}
                <div className="relative" style={{ width: size, height: size }}>

                    {/* SVG */}
                    <svg width={size} height={size} className="absolute top-0 left-0">

                        {/* OUTER RING */}
                        <circle
                            cx={size / 2}
                            cy={size / 2}
                            r={orbitR}
                            fill="none"
                            stroke="#d4d4d4"
                            strokeWidth="1"
                            strokeDasharray="4 4"
                        />

                        {/* LINES */}
                        {angles.map((angle, i) => {
                            const rad = (angle * Math.PI) / 180;
                            const x = size / 2 + orbitR * Math.cos(rad);
                            const y = size / 2 + orbitR * Math.sin(rad);

                            return (
                                <line
                                    key={i}
                                    x1={size / 2}
                                    y1={size / 2}
                                    x2={x}
                                    y2={y}
                                    stroke="#cfcfcf"
                                    strokeWidth="1"
                                />
                            );
                        })}

                    </svg>

                    {/* CENTER */}
                    <div className="absolute top-1/2 left-1/2 w-[108px] h-[108px] bg-[#1a1a18] text-white rounded-full flex items-center justify-center text-[13px] font-semibold text-center whitespace-pre-line -translate-x-1/2 -translate-y-1/2 z-10 shadow-lg">
                        {tab.center}
                    </div>

                    {/* AVATARS */}
                    {angles.map((angle, i) => {
                        const rad = (angle * Math.PI) / 180;
                        const x = size / 2 + orbitR * Math.cos(rad);
                        const y = size / 2 + orbitR * Math.sin(rad);

                        return (
                            <div
                                key={i}
                                className="absolute rounded-full overflow-hidden border-2 border-[#e8e8e5] bg-[#f5f5f3]"
                                style={{
                                    top: y,
                                    left: x,
                                    width: avatarR * 2,
                                    height: avatarR * 2,
                                    transform: "translate(-50%, -50%)",
                                }}
                            >
                                <Image
                                    src={avatars[i]}
                                    alt=""
                                    width={avatarR * 2}
                                    height={avatarR * 2}
                                    className="object-cover"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* TABS */}
            <div className="flex bg-[#f0efed] rounded-md p-1 gap-1">
                {tabs.map((t, i) => (
                    <button
                        key={i}
                        onClick={() => setActive(i)}
                        className={`px-5 py-2 text-sm rounded-md transition ${active === i
                                ? "bg-[#1a1a18] text-white font-semibold"
                                : "text-[#6b7280]"
                            }`}
                    >
                        {t.label}
                    </button>
                ))}
            </div>
        </section>
    );
}