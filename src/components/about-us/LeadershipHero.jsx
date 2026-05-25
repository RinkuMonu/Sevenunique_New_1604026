"use client";

import Image from "next/image";

export default function LeadershipHero() {
    return (
        <section className="bg-white pt-20 pb-16">
            <div className="max-w-6xl mx-auto px-6 text-center">

                {/* Top Label */}
                <p className="text-xs tracking-[0.3em] text-gray-500 uppercase mb-4">
                    Our Leadership Team
                </p>

                {/* Heading */}
                <h1 className="text-[56px] leading-[64px] font-semibold text-[#1f2937]">
                    Recognized across the industry. <br />
                   Award-winning excellence<span className="text-[#f66135]">.</span>
                </h1>

                {/* Image + Quote Section */}
                <div className="relative mt-16 flex justify-center">

                    {/* Image */}
                    <div className="relative w-[720px] h-[380px] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/images/team-nainital.jpg" // replace with your image
                            alt="Leadership"
                            fill
                            className="object-cover"
                        />

                        {/* Overlay Text */}
                        {/* <div className="absolute bottom-5 left-6 text-left text-white">
                            <p className="text-lg font-medium">
                                Arora <span className="text-sm">University</span>
                            </p>
                            <p className="text-sm mt-1 opacity-90">
                                Vinay sharing his entrepreneurial journey with Stanford MBA students.
                            </p>
                        </div> */}
                    </div>

                    {/* Orange Quote Card */}
                    <div className="absolute right-[-40px] top-[40px] bg-[#f66135] text-white p-6 w-[300px] rounded-md shadow-xl">

                        {/* Triangle Pointer */}
                        <div className="absolute left-[-10px] top-10 w-0 h-0 border-t-[10px] border-b-[10px] border-r-[10px] border-t-transparent border-b-transparent border-r-[#c2410c]" />

                        <p className="text-sm leading-6">
                            “Seven Unique values talented individuals from diverse backgrounds, creating a stronger, more innovative, and collaborative work environment that drives growth and success.”
                        </p>

                        <p className="mt-4 text-sm font-semibold">
                    Dinesh Kumar Prajapat, CEO
                        </p>

                        <p className="mt-4 text-xs opacity-80">
                             Seven Unique Tech Solutions PVT. LTD.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}