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
            Over 2 Years of <br /> Over Delivering
            <p className="text-orange-500 rounded-full bg-orange-500 ml-1 h-2 w-2 absolute top-28 left-104 bottom-0"></p>
          </h1>

          <p className="mt-4 text-gray-500 text-lg text-[32px] tracking-wide">
           Trusted by 500+ active clients worldwide, fostering long-term partnerships through exceptional service and consistent results, with a 96% client retention rate.
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
              src="/images/icici.png"
              alt="Google"
              width={500}
              height={500}
              className="w-full h-[350px] object-contain group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6">
              <h3 className="text-white text-2xl font-semibold">ICICI Bank</h3>
              <p className="text-white text-sm mt-1">Case study →</p>
            </div>
          </Link>

          {/* Card 2 */}
          <div className="relative rounded-2xl overflow-hidden group">
            <Image
              src="/images/axis.png"
              alt="Axis Bank"
              width={500}
              height={500}
              className="w-full h-[350px] object-contain group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6">
              <h3 className="text-white text-xl font-semibold">
                <Link href="/google-case-study">Axis Bank</Link>
              </h3>
              <p className="text-white text-sm mt-1">Case study →</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative rounded-2xl overflow-hidden group">
            <Image
              src="/logos/nsdl.png"
              alt="NSDL"
              width={500}
              height={500}
              className="w-full h-[350px] object-contain group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6">
              <h3 className="text-white text-xl font-semibold uppercase">
                NSDL
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
