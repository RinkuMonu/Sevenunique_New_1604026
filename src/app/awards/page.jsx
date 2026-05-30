"use client";

import { HomeIcon, Trophy, Sparkles, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";

const featuredAwards = [
  {
    logo:"/images/pcidss.png",
    title: "Top Software Development Company",
    year: "2025",
  },
  {
    logo:
      "/images/kab.png",
    title: "Fastest Growing Tech Company",
    year: "2025",
  },
  {
    logo:
      "/images/iso.png",
    title: "Innovation Excellence Award",
    year: "2025",
  },
  {
    logo:
      "/images/msme.png",
    title: "Best Workplace Culture",
    year: "2025",
  },
];

const awards = [
  {
    year: "2026",
    items: [
      {
        title: "Top MERN Stack Development Company",
        desc: "Recognized globally for delivering scalable MERN stack applications with enterprise-grade architecture and high performance.",
      },
      {
        title: "Best Ecommerce Development Partner",
        desc: "Awarded for building high-converting ecommerce experiences with secure payment integration and advanced admin systems.",
      },
    ],
  },
  {
    year: "2025",
    items: [
      {
        title: "Top Software Innovation Award",
        desc: "Honored for innovative digital transformation solutions helping startups and enterprises scale faster.",
      },
      {
        title: "Client Excellence Recognition",
        desc: "Recognized for maintaining outstanding client satisfaction, project delivery, and long-term partnerships.",
      },
      {
        title: "Fastest Growing IT Brand",
        desc: "Awarded for rapid business growth and impactful technology solutions across multiple industries.",
      },
    ],
  },
];

function AwardCard({ item, index }) {
  return (
    <div
      className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl"
    >
      {/* Glow */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-200 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-all duration-500" />

      {/* Number */}
      <div className="absolute top-6 right-6 text-6xl font-black text-gray-100">
        0{index + 1}
      </div>

      {/* Icon */}
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400 flex items-center justify-center shadow-lg mb-6">
        <Trophy className="text-white" size={30} />
      </div>

      {/* Content */}
      <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
        {item.title}
      </h3>

      <p className="text-gray-500 leading-relaxed text-[15px]">
        {item.desc}
      </p>

      {/* Hover line */}
      <div className="w-0 h-1 bg-orange-500 rounded-full mt-6 group-hover:w-full transition-all duration-500" />
    </div>
  );
}

export default function AwardsPage() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* BREADCRUMB */}
      <div className="flex items-center gap-3 px-6 md:px-16 py-6 border-b border-gray-100">
        <HomeIcon size={16} className="text-gray-400" />
        <FaAngleRight className="text-gray-400 text-sm" />
        <span className="text-sm font-semibold text-gray-700">
          Awards & Recognition
        </span>
      </div>

      {/* HERO SECTION */}
      <section className="relative bg-[#0d0d0d] overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-[-150px] left-[-100px] w-[400px] h-[400px] bg-orange-500/20 blur-[120px]" />
        <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-orange-400/10 blur-[140px]" />

        <div className="max-w-7xl mx-auto px-6 md:px-16 py-24 md:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-4 py-2 rounded-full text-orange-400 text-sm mb-8 backdrop-blur-md">
                <Sparkles size={16} />
                Awards & Achievements
              </div>

              <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tight mb-8">
                Excellence <br />
                That Speaks <span className="text-orange-500">Louder.</span>
              </h1>

              <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mb-10">
                We are proud to be recognized globally for delivering innovative
                software solutions, outstanding client experiences, and scalable
                digital products.
              </p>

              <div className="flex flex-wrap gap-5">
                <Link
                  href="/schedule-a-call-page"
                  className="bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-white px-8 py-4 rounded-2xl font-semibold inline-flex items-center gap-3 shadow-xl shadow-orange-500/20"
                >
                  Start Your Project
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/our-work-page"
                  className="border border-white/20 hover:border-orange-400 hover:bg-orange-500/10 transition-all duration-300 text-white px-8 py-4 rounded-2xl font-semibold"
                >
                  View Portfolio
                </Link>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative flex justify-center">

  {/* Floating Card */}
  <div className="absolute top-10 left-0 z-30 bg-white/25 backdrop-blur-2xl border border-white/30 p-5 rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.35)] animate-bounce">
    <p className="text-3xl font-black text-white">50+</p>

    <span className="text-white/90 text-sm font-medium">
      Global Recognitions
    </span>
  </div>

  {/* Main Image */}
  <div className="relative z-10">
    <div className="absolute inset-0 bg-orange-500/20 blur-3xl rounded-full scale-125" />

    <img
      src="/images/trophy.PNG"
      width={500}
      height={650}
      alt="Awards"
      className="relative z-10 object-contain drop-shadow-[0_30px_60px_rgba(249,115,22,0.4)]"
    />
  </div>

  {/* Floating Badge */}
  <div className="absolute bottom-10 right-0 z-30 bg-white/90 backdrop-blur-xl rounded-2xl p-5 shadow-[0_8px_40px_rgba(0,0,0,0.2)]">
    <p className="text-3xl font-black text-gray-900">100%</p>

    <span className="text-gray-600 text-sm font-medium">
      Client Satisfaction
    </span>
  </div>
</div>
          </div>
        </div>
      </section>

      {/* FEATURED AWARDS */}
      <section className="relative -mt-20 z-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto bg-white rounded-[35px] shadow-[0_20px_80px_rgba(0,0,0,0.08)] border border-gray-100 p-8 md:p-14">
          <div className="flex items-center justify-between flex-wrap gap-6 mb-14">
            <div>
              <p className="text-orange-500 font-semibold uppercase tracking-[0.25em] text-sm mb-3">
                Featured Recognition
              </p>

              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                Trusted By <br />
                Industry Leaders
              </h2>
            </div>

            <div className="max-w-md">
              <p className="text-gray-500 leading-relaxed">
                Our commitment to innovation, quality, and client success has
                earned us recognition from leading global organizations.
              </p>
            </div>
          </div>

          {/* AWARDS GRID */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 bg-gray-100 p-4 rounded-xl">
            {featuredAwards.map((award, index) => (
              <div
                key={index}
                className="group relative bg-[#dedada] rounded-3xl p-8 hover:-translate-y-3 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500" />

                <div className="relative z-10">
                  <div className="h-20 flex items-center justify-center mb-8">
                    <img
                      src={award.logo}
                      alt={award.title}
                      width={140}
                      height={80}
                      className="object-contain"
                    />
                  </div>

                  <div className="w-14 h-[2px] bg-orange-500 mb-5" />

                  <p className="text-black font-semibold leading-relaxed mb-2">
                    {award.title}
                  </p>

                  <span className="text-gray-400 text-sm">
                    {award.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AWARDS TIMELINE */}
      <section className="py-28 px-6 md:px-16 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto">
          {/* HEADING */}
          <div className="text-center mb-20">
            <p className="text-orange-500 uppercase tracking-[0.25em] text-sm font-semibold mb-4">
              Recognition Timeline
            </p>

            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Awards That <br />
              Define Our Journey
            </h2>

            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Every recognition reflects our passion for building impactful
              digital experiences and long-term client success.
            </p>
          </div>

          {/* TIMELINE */}
          <div className="space-y-20">
            {awards.map((group, idx) => (
              <div key={idx} className="relative">
                {/* YEAR */}
                <div className="sticky top-10 z-10 inline-flex items-center gap-3 bg-white border border-orange-100 shadow-lg px-8 py-4 rounded-full mb-10">
                  <div className="w-3 h-3 bg-orange-500 rounded-full" />
                  <h3 className="text-3xl font-black text-gray-900">
                    {group.year}
                  </h3>
                </div>

                {/* CARDS */}
                <div className="grid md:grid-cols-2 gap-8">
                  {group.items.map((item, i) => (
                    <AwardCard key={i} item={item} index={i} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative bg-[#0d0d0d] overflow-hidden">
        {/* Glow */}
        <div className="absolute left-0 top-0 w-[400px] h-[400px] bg-orange-500/10 blur-[120px]" />
        <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-orange-500/10 blur-[120px]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 py-24 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-5 py-2 rounded-full text-orange-400 mb-8">
            <Sparkles size={16} />
            Let’s Build Something Amazing
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-8">
            Partner With An <br />
            Award-Winning Team
          </h2>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed mb-12">
            Transform your ideas into scalable digital products with a trusted
            software development company focused on quality, speed, and growth.
          </p>

          <Link
            href="/schedule-a-call-page"
            className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-orange-500/20"
          >
            Schedule A Call
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}