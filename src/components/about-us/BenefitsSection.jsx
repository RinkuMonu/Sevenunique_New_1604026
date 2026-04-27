"use client";
import Link from "next/link";
import Image from "next/image";
import { FiMonitor, FiClock, FiUsers, FiCode, FiAward } from "react-icons/fi";

export default function BenefitsSection() {
  return (
    <section className="bg-[#f5f6f7] py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[30%_70%] gap-20 items-start">
        {/* LEFT (30%) */}
        <div>
          <h2 className="text-[42px] leading-[1.2] font-semibold text-[#111827]">
            Benefits of working with us
          </h2>

          <p className="mt-6 text-[18px] text-gray-600 leading-[1.6]">
            What hiring the 1% actually means to your business.
          </p>

          <div className="mt-10 relative w-full h-[540px]">
            <Image
              src="/images/benefits.png"
              alt="Team working"
              fill
              className="object-cover rounded-[20px]"
            />
          </div>
        </div>

        {/* RIGHT (70%) */}
        <div className="space-y-12">
          {/* ITEM */}
          <div className="flex gap-5">
            <FiMonitor className="text-[#f66135] text-[22px] mt-1" />
            <div>
              <h3 className="text-[20px] font-semibold text-[#111827]">
                Proficient in English
              </h3>
              <p className="text-gray-600 mt-2 leading-[1.7] max-w-xl">
                Communicate with ease, and get your questions answered fast. All
                of our LATAM specialists speak English - no language barriers
                here.
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <FiClock className="text-[#f66135] text-[22px] mt-1" />
            <div>
              <h3 className="text-[20px] font-semibold text-[#111827]">
                Aligned to Your Time Zone
              </h3>
              <p className="text-gray-600 mt-2 leading-[1.7] max-w-xl">
                We work the same hours you do. Nearshoring helps you increase
                productivity and streamline the development process.
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <FiUsers className="text-[#f66135] text-[22px] mt-1" />
            <div>
              <h3 className="text-[20px] font-semibold text-[#111827]">
                10+ Years of Experience
              </h3>
              <p className="text-gray-600 mt-2 leading-[1.7] max-w-xl">
                We only hire the most experienced and qualified candidates. Our
                devs have, on average, 10+ years of experience.
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <FiCode className="text-[#f66135] text-[22px] mt-1" />
            <div>
              <h3 className="text-[20px] font-semibold text-[#111827]">
                Every Technology Covered
              </h3>
              <p className="text-gray-600 mt-2 leading-[1.7] max-w-xl">
                Whatever expertise you need, we can work within your tech stack.
                Our engineers are proficient in modern technologies.
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <FiAward className="text-[#f66135] text-[22px] mt-1" />
            <div>
              <h3 className="text-[20px] font-semibold text-[#111827]">
                Award-winning Partner
              </h3>
              <p className="text-gray-600 mt-2 leading-[1.7] max-w-xl">
                We’re currently working with 500+ active clients across 130+
                industry sectors. Our client retention rate sits at 96%.
              </p>
            </div>
          </div>

          {/* BUTTON */}
          <Link href="/schedule-a-call-page">
            <button className="mt-6 bg-black text-white px-6 py-3 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-gray-800 transition">
              Schedule a Call →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
