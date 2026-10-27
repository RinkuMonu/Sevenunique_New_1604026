"use client";

import Image from "next/image";
import Link from "next/link";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

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

            <h2 className="text-[42px] md:text-[46px] leading-[1.1] font-semibold text-[#111] mb-7">
              The Experts Behind <br />
              Every Successful Project
            </h2>

            <p className="text-[#666] text-[17px] leading-8 max-w-xl mb-10">
            Behind every successful project is a passionate team driven by innovation, creativity, and a commitment to excellence. As a founder, I believe great digital products are built through collaboration, transparency, and a deep understanding of client goals.<br />
            Our team of experienced developers, designers, strategists, and project managers works closely with businesses to create scalable websites, mobile applications, and software solutions that deliver real impact. From startups to enterprises, we focus on building reliable, future-ready products that help brands grow faster and stay ahead in the digital world.<br />
            Every project we take on is treated like our own business — with attention to detail, modern technology, and a dedication to delivering premium digital experiences that create lasting value .
            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-5">

              <div className="bg-white rounded-[10px] p-4 border border-[#ececec] shadow-sm hover:shadow-xl transition-all duration-300">
                <h3 className="text-[30px] font-bold text-[#111]">
                  3500+
                </h3>

                <p className="text-[#666] mt-2">
                  Projects Completed
                </p>
              </div>

              <div className="bg-white rounded-[10px] p-4 border border-[#ececec] shadow-sm hover:shadow-xl transition-all duration-300">
                <h3 className="text-[30px] font-bold text-[#111]">
                  2700+
                </h3>

                <p className="text-[#666] mt-2">
                  Happy Clients
                </p>
              </div>

              <div className="bg-white rounded-[10px] p-4 border border-[#ececec] shadow-sm hover:shadow-xl transition-all duration-300">
                <h3 className="text-[30px] font-bold text-[#111]">
                  375+
                </h3>

                <p className="text-[#666] mt-2">
                  Expert Members
                </p>
              </div>

              <div className="bg-white rounded-[10px] p-4 border border-[#ececec] shadow-sm hover:shadow-xl transition-all duration-300">
                <h3 className="text-[30px] font-bold text-[#111]">
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

            {/* Responsive UI update: mobile copy sits below the portrait instead of covering it. */}
            <div className="relative overflow-hidden rounded-[28px] bg-[#111] shadow-2xl md:h-[620px] md:rounded-[40px]">

              <div className="relative h-[380px] w-full overflow-hidden sm:h-[460px] md:h-full">
                <Image
                  src="/images/about/directors-voice.png"
                  alt="Mr. Dinesh Kumar Prajapat - Founder & CEO"
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                  className="object-cover object-top"
                  priority
                />

                {/* Subtle dark gradient overlay */}
                <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-t from-black via-black/30 to-transparent md:block" />
              </div>

              {/* OVERLAY */}
              <div className="team-handjoin." />

              {/* CONTENT */}
              <div className="relative bg-black px-5 py-6 text-white sm:px-7 sm:py-8 md:absolute md:-bottom-6 md:left-0 md:bg-transparent md:p-10">

                <p className="mb-3 text-xs uppercase tracking-[3px] text-white/60 sm:text-sm sm:tracking-[4px] md:mb-4">
                  Leadership & Innovation
                </p>

                <h3 className="mb-4 text-2xl font-semibold leading-tight sm:text-[28px] md:mb-5 md:text-[32px]">
                  Delivering Digital Excellence <br className="hidden sm:block" />
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

        {/* TEAM SHOWCASE BANNER: Replaces the 4 blank gradient cards with the team group photo from About Us */}
        <div className="relative group overflow-hidden rounded-[28px] md:rounded-[36px] border border-[#ececec] bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
          <div className="relative w-full h-[360px] sm:h-[460px] md:h-[520px] overflow-hidden bg-slate-900">
            <Image
              src="/images/about/team-goa.webp"
              alt="SevenUnique & DhandaGrow Team"
              fill
              unoptimized
              priority
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

            {/* Bottom Content Bar */}
            <div className="absolute bottom-0 inset-x-0 p-6 sm:p-9 md:p-11 text-white flex flex-col md:flex-row md:items-end md:justify-between gap-5">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold tracking-wider uppercase mb-3 border border-white/20">
                  <span className="w-2 h-2 rounded-full bg-[#f4622a] animate-pulse" />
                  Our Team in Action
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                  The Team Behind Every Breakthrough
                </h3>
                <p className="mt-2 text-white/85 text-sm sm:text-base leading-relaxed max-w-xl">
                  A united collective of senior engineers, AI developers, product strategists, and designers building enterprise-grade software and scaling digital commerce.
                </p>
              </div>

              <Link
                href="/about-us#our-team"
                className="inline-flex items-center gap-2 bg-[#f4622a] hover:bg-[#d94f1c] text-white px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5 shrink-0 self-start md:self-auto"
              >
                <span>Meet the Entire Team</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
}
