"use client";

import Image from "next/image";
import { companyStripData } from "@/data/companyStripData";
import { PlayCircle } from "lucide-react";

export default function CompanyStrip() {
    return (
        <section className="w-full flex justify-center py-10 bg-[#f3f4f6]">

            {/* MAIN STRIP */}
            <div className="w-[85%] max-w-[1200px] bg-[#5c6b77] rounded-[16px] px-8 py-6 flex items-center justify-between shadow-md">

                {/* LEFT TEXT */}
                <div className="text-white text-[18px] font-medium max-w-[260px] leading-snug">
                    {companyStripData.title}
                </div>

                {/* DIVIDER */}
                <div className="h-10 w-[1px] bg-white/30 mx-6" />

                {/* LOGOS */}
                <div className="flex items-center gap-10 flex-wrap">
                    {companyStripData.companies.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-white">

                            {/* LOGO */}
                            <Image
                                src={item.logo}
                                alt={item.name}
                                width={90}
                                height={30}
                                className="object-contain opacity-90"
                            />

                            {/* SUBTEXT */}
                            {item.subText && (
                                <div className="flex items-center gap-1 text-[12px] text-white/80 mt-1">
                                    {item.subText}
                                    {item.hasPlayIcon && (
                                        <PlayCircle size={14} className="opacity-80" />
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
