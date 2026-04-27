"use client";

import ClutchSection from "@/components/innnerPages/clutchsection";
import { Industries, IndustriesSection } from "@/components/innnerPages/page";
import Image from "next/image";
import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";

export default function ClientsSection() {
  return (
    <>
      <section className="bg-[#f7f7f7] py-14 px-4 md:px-10 lg:px-6 ">
        {/* Top Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-9">
          <span className="mr-2">
            <Image
              src="https://assets.bairesdev.com/image/upload/v1/www/icons/Home.svg"
              alt="Home Icon"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </span>
          <span className="mr-2 font-bold">›</span>
          <span className="font-bold text-gray-700 ">Our Clients</span>
        </div>

        {/* Heading */}
        <div className="max-w-7xl mb-10 ">
          <p className="uppercase tracking-[0.2em] text-[14px] font-bold text-gray-500 mb-1">
            Our Clients
          </p>

          <h1 className="relative text-[54px] font-[600] height-[5rem] text-[#1e1e1e] leading-tight tracking-wide">
            Over 10 Years of <br /> Over Delivering
            <p className="text-orange-500 rounded-full bg-orange-500 ml-1 h-2 w-2 absolute top-28 left-104 bottom-0"></p>
          </h1>

          <p className="mt-4 text-gray-500 text-lg text-[32px] tracking-wide">
            500+ active clients with an average relationship of over 3 years.
            And a 96% retention rate.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <Link
            href="/google-case-study"
            className="relative rounded-2xl overflow-hidden group"
          >
            <Image
              src="https://assets.bairesdev.com//image/upload/c_limit,w_1920/dpr_auto/f_auto/q_auto/v1/www/core/google_i0edsb?_a=BAVAfVDW0"
              alt="Google"
              width={500}
              height={500}
              className="w-full h-[350px] object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6">
              <h3 className="text-white text-2xl font-semibold">Google</h3>
              <p className="text-white text-sm mt-1">Case study →</p>
            </div>
          </Link>

          {/* Card 2 */}
          <div className="relative rounded-2xl overflow-hidden group">
            <Image
              src="https://assets.bairesdev.com//image/upload/c_limit,w_1920/dpr_auto/f_auto/q_auto/v1/www/core/rollssmall_zf24j6?_a=BAVAfVDW0"
              alt="Rolls Royce"
              width={500}
              height={500}
              className="w-full h-[350px] object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6">
              <h3 className="text-white text-xl font-semibold">
                <Link href="/google-case-study">ROLLS ROYCE</Link>
              </h3>
              <p className="text-white text-sm mt-1">Case study →</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative rounded-2xl overflow-hidden group">
            <Image
              src="https://assets.bairesdev.com//image/upload/c_limit,w_1920/dpr_auto/f_auto/q_auto/v1/www/core/urban-outfitters_1761320585?_a=BAVAfVDW0"
              alt="Urban Outfitters"
              width={500}
              height={500}
              className="w-full h-[350px] object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6">
              <h3 className="text-white text-xl font-semibold uppercase">
                Urban Outfitters
              </h3>
              <Link href="/google-case-study">Case study →</Link>
            </div>
          </div>
        </div>
        <IndustriesSection />
      </section>
      <ClutchSection />
    </>
  );
}
