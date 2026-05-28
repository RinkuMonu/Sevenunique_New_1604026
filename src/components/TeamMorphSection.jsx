"use client";

import Image from "next/image";
import Link from "next/link";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const team = [
  {
    name: "Mr Dinesh Kumar Parjapat",
    role: "Founder & CEO",
    image: "/team/p1.png",
  },
  {
    name: "Rahul Parjapat",
    role: "Company secretary",
    image: "/team/p2.png",
  },
  {
    name: "Vijay Gupta",
    role: "Technical Head",
    image: "/team/p3.png",
  },
  {
    name: "Krishan Kumar",
    role: "Project Coordinator",
    image: "/images/krishan.png",
  },
];

export default function TeamSection() {
  return (
    <section
      className={`${outfit.className} bg-[#f6f7fb] py-24 px-5 overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto">

        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">

          {/* LEFT CONTENT */}
          <div>

            <p className="text-[#ff5a2f] uppercase tracking-[4px] text-sm font-semibold mb-5">
              Our Team
            </p>

            <h2 className="text-[42px] md:text-[50px] leading-[1.1] font-semibold text-[#111] mb-7">
              The Experts Behind <br />
              Every Successful Project
            </h2>

            <p className="text-[#666] text-[17px] leading-8 max-w-xl mb-10">
              Our team consists of experienced developers,
              designers, strategists, and project managers
              dedicated to building scalable digital products
              for startups, enterprises, and growing businesses.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-5">

              <div className="bg-white rounded-[28px] p-6 border border-[#ececec] shadow-sm hover:shadow-xl transition-all duration-300">
                <h3 className="text-[40px] font-bold text-[#111]">
                  3500+
                </h3>

                <p className="text-[#666] mt-2">
                  Projects Completed
                </p>
              </div>

              <div className="bg-white rounded-[28px] p-6 border border-[#ececec] shadow-sm hover:shadow-xl transition-all duration-300">
                <h3 className="text-[40px] font-bold text-[#111]">
                  2700+
                </h3>

                <p className="text-[#666] mt-2">
                  Happy Clients
                </p>
              </div>

              <div className="bg-white rounded-[28px] p-6 border border-[#ececec] shadow-sm hover:shadow-xl transition-all duration-300">
                <h3 className="text-[40px] font-bold text-[#111]">
                  375+
                </h3>

                <p className="text-[#666] mt-2">
                  Expert Members
                </p>
              </div>

              <div className="bg-white rounded-[28px] p-6 border border-[#ececec] shadow-sm hover:shadow-xl transition-all duration-300">
                <h3 className="text-[40px] font-bold text-[#111]">
                  235+
                </h3>

                <p className="text-[#666] mt-2">
                  Running Projects
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT FEATURE CARD */}
          <div className="relative">

            {/* BLUR BG */}
            <div className="absolute -top-10 -right-10 w-[320px] h-[320px] bg-[#ff5a2f]/10 rounded-full blur-3xl" />

            <div className="relative h-[620px] rounded-[40px] overflow-hidden shadow-2xl bg-[#111]">

              <Image
                src="/team/p1.png"
                alt="Founder"
                fill
                className="object-contain object-top"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              {/* CONTENT */}
              <div className="absolute -bottom-6 left-0 p-10 text-white">

                <p className="uppercase tracking-[4px] text-sm text-white/60 mb-4">
                  Leadership & Innovation
                </p>

                <h3 className="text-[32px] leading-tight font-semibold mb-5">
                  Delivering Digital Excellence <br />
                  Through Innovation
                </h3>

                <p className="text-white/70 leading-7 text-[14px] max-w-md">
                  We focus on creating secure, scalable, and
                  modern digital solutions that help businesses
                  streamline operations and accelerate growth.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* TEAM MEMBERS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

          {team.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-[30px] overflow-hidden border border-[#ececec] shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
            >

              {/* IMAGE */}
              <div className="relative h-[320px] overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-all duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* TEXT */}
              <div className="p-6">

                <h3 className="text-[22px] font-semibold text-[#111] mb-2">
                  {item.name}
                </h3>

                <p className="text-[#666] text-[15px]">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>

       
        
      </div>
    </section>
    
  );
}