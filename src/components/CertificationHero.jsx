// components/CertificationHero.jsx

import Image from "next/image";
import { Home } from "lucide-react";

export default function CertificationHero() {
    return (
        <section className="relative bg-[#f6f7f9] py-[100px] overflow-hidden">

            {/* BREADCRUMB */}
            <div className="max-w-[1200px] mx-auto px-6 mb-[60px] flex items-center gap-3 text-[14px] text-gray-600">
                <Home size={18} />
                <span className="text-gray-400">›</span>
                <span className="font-medium text-black">Certifications</span>
            </div>

            {/* CENTER CONTENT */}
            <div className="relative max-w-[900px] mx-auto text-center px-6">

                {/* BACKGROUND BADGE */}
                <div className="absolute inset-0 flex justify-center items-center ">
                    <Image
                        src="https://assets.bairesdev.com//image/upload/c_limit,w_429/dpr_auto/f_auto/q_auto/v1/www/core/certifications/certificationsHero_sqfocj?_a=BAVAfVDW0"
                        alt="badge"
                        width={400}
                        height={400}
                        className="object-contain"
                    />
                </div>

                {/* LABEL */}
                <p className="text-[13px] tracking-[3px] uppercase text-gray-500 mb-6 font-medium">
                    Certifications & Partnerships
                </p>

                {/* HEADING */}
                {/* Responsive UI update: prevent hero copy from overflowing narrow screens. */}
                <h1 className="mb-6 text-4xl leading-tight tracking-[-1px] text-[#1f2933] sm:text-5xl lg:text-[54px] lg:leading-[72px]">
                    Our Certified Expertise
                    <span className="text-[#f45d2d]">.</span>
                </h1>

                {/* DESCRIPTION */}
                <p className="mx-auto max-w-[700px] text-base leading-7 text-gray-500 sm:text-lg lg:text-[20px] lg:leading-[34px]">
                    Work with a certified, award-winning software development partner trusted for delivering expertise and quality. Since 2024, we’ve completed 1,200+ projects and supported 500+ clients worldwide.
                </p>

            </div>
        </section>
    );
}
