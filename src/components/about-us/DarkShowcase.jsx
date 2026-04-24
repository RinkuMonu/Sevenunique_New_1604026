"use client";

import Image from "next/image";

export default function DarkShowcase() {
    return (
        <section className="relative bg-black py-32 px-6 overflow-visible mt-10">

            {/* FLOATING IMAGE */}
            <div className="absolute top-[-40px] left-1/2 -translate-x-1/2 z-20">
                <div className="w-[450px] h-[300px] relative">

                    {/* CLIPPED SHAPE */}
                    <div
                        className="w-full h-full overflow-hidden rounded-xl"
                        style={{
                            transform: "rotate(-6deg)", // keep slight tilt
                        }}
                    >
                        <Image
                            src="/images/team.png"
                            alt="team"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* CONTENT */}
            <div className="max-w-4xl mx-auto text-center mt-40">

                <h2 className="text-white text-[34px] md:text-[40px] leading-[1.3] font-semibold ">
                    Accelerate your roadmap with an <br />
                    <span className="text-[#f15c2d]">
                        award-winning
                    </span>{" "}
                    software development <br />
                    partner.
                </h2>

                {/* BUTTON */}
                <button className="mt-10 bg-[#1f8a63] hover:opacity-90 transition text-white px-6 py-3 rounded-lg font-medium">
                    Schedule a Call
                </button>

            </div>
        </section>
    );
}