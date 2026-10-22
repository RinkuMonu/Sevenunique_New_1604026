"use client";

import Link from "next/link";
import Image from "next/image";

export default function TalentHero() {
  return (
    <section className="w-full bg-[#f5f6f7] py-20 lg:py-24 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TOP ROW */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT HEADING */}
          <div>

            <p className="text-[13px] tracking-[0.2em] font-semibold text-gray-500 mb-6 uppercase">
              The Top 1%
            </p>

            <h1 className="text-[24px] sm:text-[30px] lg:text-[38px] leading-[1.2] font-semibold text-[#111827]">
              We carefully assess{" "}
              <span className="text-[#f66135]">
                hundreds of professionals each
              </span>{" "}
              year to connect businesses with top-tier tech talent known for{" "}
              <span className="text-[#f66135]">
                innovation, expertise, and reliability
              </span>{" "}
              in project delivery.
            </h1>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-[240px] sm:h-[300px] lg:h-[360px]">
            <Image
              src="/images/team-handjoin.png"
              alt="Team working"
              fill
              priority
              className="object-cover rounded-[28px]"
            />
          </div>
        </div>

        {/* FULL WIDTH CONTENT */}
        <div className="mt-14">

          <p className="text-[17px] leading-[2] text-gray-600 max-w-full">
            We carefully evaluate and assess hundreds of talented professionals
            to ensure our clients work with only the most skilled and reliable
            tech experts. Our hiring and collaboration process focuses not only
            on technical excellence but also on problem-solving ability,
            communication, innovation, and adaptability to modern technologies.
            <br />
            <br />
            Since 2024, we have been helping startups, enterprises, and growing
            businesses build high-performing development teams capable of
            delivering scalable and future-ready digital solutions. Our success
            comes from a strong selection process that identifies developers,
            designers, and technology specialists with deep industry knowledge,
            collaborative mindsets, and expertise in the latest tools, cloud
            technologies, and AI-driven development practices.
            <br />
            <br />
            By combining technical talent with strategic thinking, we create
            teams that are dedicated to building high-quality products,
            accelerating business growth, and delivering long-term value for
            every client we work with.
          </p>

          {/* BUTTON */}
          <div className="mt-10">
            <Link href="/schedule-a-call-page">
              <button className="bg-[#f66135] hover:bg-[#e45126] transition-all duration-300 text-white px-8 py-4 rounded-xl text-base font-medium shadow-lg hover:shadow-xl cursor-pointer">
                Bring the Top 1% onto Your Team
              </button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}