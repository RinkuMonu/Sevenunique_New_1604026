"use client";

import { HomeIcon, Trophy, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
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
      className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl sm:p-6 lg:rounded-3xl lg:p-8"
    >
      {/* Glow */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-200 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-all duration-500" />

      {/* Number */}
      <div className="absolute right-4 top-4 text-4xl font-black text-gray-100 sm:right-6 sm:top-6 sm:text-6xl">
        0{index + 1}
      </div>

      {/* Icon */}
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-400 shadow-lg sm:mb-6 sm:h-16 sm:w-16 sm:rounded-2xl">
        <Trophy className="text-white" size={30} />
      </div>

      {/* Content */}
      <h3 className="mb-3 pr-8 text-xl font-bold leading-tight text-gray-900 sm:mb-4 sm:text-2xl">
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
      {/* Responsive UI update: compact breadcrumb and page gutters on phones. */}
      <div className="flex items-center gap-2 border-b border-gray-100 px-4 py-4 sm:gap-3 sm:px-6 sm:py-5 md:px-16 md:py-6">
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

        {/* Responsive UI update: stack hero and move recognition badges below the trophy on mobile. */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 md:px-16 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* LEFT */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 text-xs text-orange-400 backdrop-blur-md sm:mb-8 sm:px-4 sm:text-sm">
                <Sparkles size={16} />
                Awards & Achievements
              </div>

              <h1 className="mb-6 text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl md:mb-8 md:text-6xl lg:text-7xl">
                Excellence <br />
                That Speaks <span className="text-orange-500">Louder.</span>
              </h1>

              <p className="mb-8 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg md:mb-10">
                We are proud to be recognized globally for delivering innovative
                software solutions, outstanding client experiences, and scalable
                digital products.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-5">
                <Link
                  href="/schedule-a-call-page"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-orange-500 px-5 py-3.5 font-semibold text-white shadow-xl shadow-orange-500/20 transition-all duration-300 hover:bg-orange-600 sm:w-auto sm:rounded-2xl sm:px-8 sm:py-4"
                >
                  Start Your Project
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/our-work-page"
                  className="w-full rounded-xl border border-white/20 px-5 py-3.5 text-center font-semibold text-white transition-all duration-300 hover:border-orange-400 hover:bg-orange-500/10 sm:w-auto sm:rounded-2xl sm:px-8 sm:py-4"
                >
                  View Portfolio
                </Link>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative flex min-w-0 flex-col justify-center gap-3 sm:mx-auto sm:max-w-xl sm:flex-row sm:flex-wrap lg:mx-0 lg:block lg:max-w-none">

  {/* Floating Card */}
  <div className="order-2 relative z-30 flex-1 rounded-xl border border-white/30 bg-white/20 p-4 text-center shadow-lg backdrop-blur-2xl lg:absolute lg:left-0 lg:top-10 lg:order-none lg:rounded-2xl lg:p-5 lg:text-left lg:shadow-[0_8px_40px_rgba(0,0,0,0.35)] lg:animate-bounce">
    <p className="text-3xl font-black text-white">50+</p>

    <span className="text-white/90 text-sm font-medium">
      Global Recognitions
    </span>
  </div>

  {/* Main Image */}
  <div className="relative z-10 order-1 w-full lg:order-none">
    <div className="absolute inset-0 bg-orange-500/20 blur-3xl rounded-full scale-125" />

    <img
      src="/images/trophy.PNG"
      width={500}
      height={650}
      alt="Awards"
      className="relative z-10 mx-auto h-auto w-full max-w-[360px] object-contain drop-shadow-[0_30px_60px_rgba(249,115,22,0.4)] sm:max-w-[440px] lg:max-w-[500px]"
    />
  </div>

  {/* Floating Badge */}
  <div className="order-3 relative z-30 flex-1 rounded-xl bg-white/90 p-4 text-center shadow-lg backdrop-blur-xl lg:absolute lg:bottom-10 lg:right-0 lg:order-none lg:rounded-2xl lg:p-5 lg:text-left lg:shadow-[0_8px_40px_rgba(0,0,0,0.2)]">
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
      {/* Responsive UI update: remove the mobile overlap and stack featured award cards. */}
      <section className="relative z-20 px-3 py-8 sm:px-6 lg:-mt-20 lg:px-16 lg:py-0">
        <div className="mx-auto max-w-7xl rounded-2xl border border-gray-100 bg-white p-4 shadow-[0_20px_80px_rgba(0,0,0,0.08)] sm:rounded-[28px] sm:p-8 md:p-10 lg:rounded-[35px] lg:p-14">
          <div className="mb-8 flex flex-col items-start justify-between gap-5 sm:mb-10 lg:mb-14 lg:flex-row lg:items-center lg:gap-6">
            <div>
              <p className="text-orange-500 font-semibold uppercase tracking-[0.25em] text-sm mb-3">
                Featured Recognition
              </p>

              <h2 className="text-3xl font-black leading-tight text-gray-900 sm:text-4xl md:text-5xl">
                Trusted By{" "}<br className="hidden sm:block" />
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
          <div className="grid grid-cols-1 gap-4 rounded-xl bg-gray-100 p-3 sm:grid-cols-2 sm:p-4 lg:grid-cols-4 lg:gap-6">
            {featuredAwards.map((award, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-[#dedada] p-5 transition-all duration-500 hover:-translate-y-2 sm:rounded-2xl sm:p-6 lg:rounded-3xl lg:p-8 lg:hover:-translate-y-3"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500" />

                <div className="relative z-10">
                  <div className="mb-5 flex h-16 items-center justify-center sm:mb-6 sm:h-20 lg:mb-8">
                    <img
                      src={award.logo}
                      alt={award.title}
                      width={140}
                      height={80}
                      className="h-auto max-h-20 w-auto max-w-full object-contain"
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
      {/* Responsive UI update: compact timeline rhythm and controls for smaller screens. */}
      <section className="bg-[#fafafa] px-4 py-14 sm:px-6 sm:py-20 md:px-16 lg:py-28">
        <div className="max-w-7xl mx-auto">
          {/* HEADING */}
          <div className="mb-12 text-center sm:mb-16 lg:mb-20">
            <p className="text-orange-500 uppercase tracking-[0.25em] text-sm font-semibold mb-4">
              Recognition Timeline
            </p>

            <h2 className="mb-5 text-3xl font-black leading-tight text-gray-900 sm:text-4xl md:mb-6 md:text-5xl lg:text-6xl">
              Awards That{" "}<br className="hidden sm:block" />
              Define Our Journey
            </h2>

            <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
              Every recognition reflects our passion for building impactful
              digital experiences and long-term client success.
            </p>
          </div>

          {/* TIMELINE */}
          <div className="space-y-12 sm:space-y-16 lg:space-y-20">
            {awards.map((group, idx) => (
              <div key={idx} className="relative">
                {/* YEAR */}
                <div className="sticky top-20 z-10 mb-6 inline-flex items-center gap-2 rounded-full border border-orange-100 bg-white px-4 py-2.5 shadow-lg sm:mb-8 sm:gap-3 sm:px-6 sm:py-3 lg:mb-10 lg:px-8 lg:py-4">
                  <div className="w-3 h-3 bg-orange-500 rounded-full" />
                  <h3 className="text-xl font-black text-gray-900 sm:text-2xl lg:text-3xl">
                    {group.year}
                  </h3>
                </div>

                {/* CARDS */}
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
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

        {/* Responsive UI update: CTA copy and action fit narrow phones without overflow. */}
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-14 text-center sm:px-6 sm:py-20 md:px-16 lg:py-24">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs text-orange-400 sm:mb-8 sm:px-5 sm:text-sm">
            <Sparkles size={16} />
            Let’s Build Something Amazing
          </div>

          <h2 className="mb-6 text-3xl font-black leading-tight text-white sm:text-4xl md:mb-8 md:text-5xl lg:text-6xl">
            Partner With An{" "}<br className="hidden sm:block" />
            Award-Winning Team
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-gray-300 sm:mb-10 sm:text-lg md:mb-12">
            Transform your ideas into scalable digital products with a trusted
            software development company focused on quality, speed, and growth.
          </p>

          <Link
            href="/schedule-a-call-page"
            className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-orange-500 px-5 py-3.5 font-bold text-white shadow-2xl shadow-orange-500/20 transition-all duration-300 hover:bg-orange-600 sm:w-auto sm:rounded-2xl sm:px-8 sm:py-4 sm:text-lg lg:px-10 lg:py-5"
          >
            Schedule A Call
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
