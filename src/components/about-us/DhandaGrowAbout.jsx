"use client";

import Image from "next/image";
import Link from "next/link";
import { Quote, ArrowRight, Sparkles, Target, Eye, Users, ShieldCheck, Zap } from "lucide-react";

const leadershipTeam = [
  {
    name: "Vijay Gupta",
    role: "Sr. Full Stack Developer",
    image: "/team/avatar-vijay-gupta.webp",
  },
  {
    name: "Rinku Yadav",
    role: "Server Admin",
    image: "/team/avatar-rinku-yadav.webp",
  },
  {
    name: "Rajyavardhan Singh",
    role: "Backend Developer",
    image: "/team/avatar-rajyavardhan-singh.webp",
  },
  {
    name: "Bhumika Soni",
    role: "HR Manager",
    image: "/team/avatar-bhumika-soni.webp",
  },
  {
    name: "Kratika Sharma",
    role: "Jr. AI/ML Engineer",
    image: "/team/avatar-kratika-sharma.webp",
  },
  {
    name: "Sejal Gupta",
    role: "Jr. AI/ML Engineer",
    image: "/team/avatar-sejal-gupta.webp",
  },
  {
    name: "Deepak Yadav",
    role: "Mobile App Developer",
    image: "/team/avatar-deepak-yadav.webp",
  },
  {
    name: "Khyati Jain",
    role: "UI/UX Designer",
    image: "/team/avatar-khyati-jain.webp",
  },
  {
    name: "Vishal Prajapat",
    role: "Data Analyst & Social Media Manager",
    image: "/team/avatar-vishal-prajapat.webp",
  },
  {
    name: "Devika Jain",
    role: "Content Writer & Social Media Manager",
    image: "/team/avatar-devika-jain.webp",
  },
  {
    name: "Devika Chhipa",
    role: "Sr. Frontend Developer",
    image: "/team/avatar-devika-chhipa.webp",
  },
];

export default function DhandaGrowAbout() {
  return (
    <div className="min-h-screen bg-[#fcfaf7] text-slate-800 selection:bg-orange-500/20 selection:text-orange-950 relative overflow-hidden font-sans">
      {/* Background Ambient Glow Blobs tailored for main light theme */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-gradient-to-tr from-orange-400/15 via-pink-400/10 to-transparent rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-32 w-[650px] h-[650px] bg-gradient-to-bl from-purple-400/15 via-blue-400/10 to-transparent rounded-full blur-[150px]" />
        <div className="absolute bottom-24 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-amber-300/15 via-orange-300/10 to-transparent rounded-full blur-[140px]" />
      </div>

      {/* SECTION 1: HERO */}
      <section
        id="our-team"
        className="relative w-full pt-24 pb-14 lg:pt-32 lg:pb-20 border-b border-slate-200/70 overflow-hidden bg-gradient-to-b from-white via-[#faf7f2]/60 to-[#fcfaf7]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 border border-orange-200 text-[#f4622a] text-xs sm:text-sm font-semibold tracking-wide">
                <Sparkles className="w-4 h-4 text-[#f4622a]" />
                <span>Empowering Digital Transformation</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                Empowering Every Business to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4622a] via-[#f0449b] to-[#be32ff]">
                  Grow Digitally
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-normal">
                DhandaGrow AI is an AI-powered business growth platform built to
                help shopkeepers, small businesses, entrepreneurs, and growing
                brands establish a strong digital presence and grow their
                business smarter.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <a
                  href="#directors-voice"
                  className="inline-flex items-center gap-2 bg-[#f4622a] hover:bg-[#d94f1c] text-white font-semibold text-sm sm:text-base px-6 py-3 rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <span>Explore Our Journey</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm sm:text-base px-6 py-3 rounded-xl border border-slate-300/80 shadow-sm hover:shadow transition-all duration-300"
                >
                  <span>Contact Team</span>
                </Link>
              </div>
            </div>
            <div className="lg:col-span-6 w-full flex justify-center">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 bg-white p-2.5 sm:p-3 shadow-2xl shadow-orange-500/10 w-full group">
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] w-full bg-slate-100 shadow-inner">
                  <Image
                    src="/images/about/team-goa.webp"
                    alt="Our Team in Goa"
                    fill
                    unoptimized
                    priority
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white text-xs sm:text-sm font-medium drop-shadow-md">
                    SevenUnique & DhandaGrow Team • Building Future-Ready AI
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        {/* SVG Connector 1 */}
        <div className="hidden lg:block w-full h-24 my-2 overflow-visible">
          <svg
            className="w-full h-24 overflow-visible"
            viewBox="0 0 1200 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="line-grad-1"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#f4622a" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#f0449b" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#be32ff" stopOpacity="0.8" />
              </linearGradient>
              <filter
                id="line-glow-1"
                x="-10%"
                y="-10%"
                width="120%"
                height="120%"
              >
                <feDropShadow
                  dx="0"
                  dy="2"
                  stdDeviation="4"
                  floodColor="#f4622a"
                  floodOpacity="0.3"
                />
              </filter>
            </defs>
            <path
              d="M 950 0 V 20 A 32 32 0 0 1 918 52 H 282 A 32 32 0 0 0 250 84 V 96"
              fill="none"
              stroke="url(#line-grad-1)"
              strokeWidth="2.5"
              filter="url(#line-glow-1)"
            />
            <circle cx="950" cy="0" r="7" fill="#f4622a" fillOpacity="0.3" />
            <circle cx="950" cy="0" r="4" fill="#f4622a" />
            <circle cx="250" cy="96" r="7" fill="#be32ff" fillOpacity="0.3" />
            <circle cx="250" cy="96" r="4" fill="#be32ff" />
          </svg>
        </div>

        {/* SECTION 2: DIRECTOR'S VOICE */}
        <section
          id="directors-voice"
          className="relative rounded-3xl overflow-hidden bg-white/90 backdrop-blur-xl border border-slate-200/90 p-6 sm:p-10 lg:p-14 shadow-xl shadow-slate-200/50"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Portrait */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative rounded-3xl overflow-hidden border-2 border-orange-200/70 p-2 bg-gradient-to-tr from-orange-100 via-pink-100 to-purple-100 shadow-xl max-w-sm w-full group">
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/about/directors-voice.png"
                    alt="Dinesh Kumar - Director"
                    fill
                    unoptimized
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white text-left">
                    <h3 className="text-xl font-bold">Dinesh Kumar</h3>
                    <p className="text-xs text-orange-200 font-medium tracking-wide">
                      Director & Co-Founder
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 border border-orange-200 text-[#f4622a] text-xs font-semibold tracking-wider uppercase">
                <Quote className="w-3.5 h-3.5" />
                <span>Director&apos;s Voice</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Empowering Bharat with AI-Driven Commerce
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p>
                  When we founded SevenUnique Tech Solutions and launched
                  DhandaGrow AI, our mission was simple yet ambitious: to bring
                  enterprise-grade technology within reach of every shopkeeper,
                  retailer, and growing entrepreneur across Bharat.
                </p>
                <p>
                  Today&apos;s digital revolution shouldn&apos;t be restricted to big
                  tech giants. A local grocery merchant, a fashion retailer, or
                  a small services provider deserves the same intelligent
                  automation, digital storefronts, smart catalogues, and payment
                  railways that Fortune 500 companies enjoy.
                </p>
                <p className="italic text-slate-700 font-medium border-l-4 border-[#f4622a] pl-4 py-1 bg-orange-50/50 rounded-r-lg">
                  &ldquo;Technology is at its finest when it creates genuine
                  economic mobility for everyday businesses. That is our North
                  Star every single day.&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h4 className="text-lg font-bold text-slate-900">
                    Dinesh Kumar
                  </h4>
                  <p className="text-xs sm:text-sm text-[#f4622a] font-medium">
                    Director, SevenUnique Tech Solutions & DhandaGrow AI
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Verified Leadership</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SVG Connector 2 */}
        <div className="hidden lg:block w-full h-24 my-2 overflow-visible">
          <svg
            className="w-full h-24 overflow-visible"
            viewBox="0 0 1200 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 250 0 V 20 A 32 32 0 0 0 282 52 H 918 A 32 32 0 0 1 950 84 V 96"
              fill="none"
              stroke="url(#line-grad-1)"
              strokeWidth="2.5"
              filter="url(#line-glow-1)"
            />
            <circle cx="250" cy="0" r="7" fill="#be32ff" fillOpacity="0.3" />
            <circle cx="250" cy="0" r="4" fill="#be32ff" />
            <circle cx="950" cy="96" r="7" fill="#f4622a" fillOpacity="0.3" />
            <circle cx="950" cy="96" r="4" fill="#f4622a" />
          </svg>
        </div>

        {/* SECTION 3: ABOUT US */}
        <section
          id="about-us"
          className="relative rounded-3xl overflow-hidden bg-white/90 backdrop-blur-xl border border-slate-200/90 p-6 sm:p-10 lg:p-14 shadow-xl shadow-slate-200/50"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-700 text-xs font-semibold tracking-wider uppercase">
                <Users className="w-3.5 h-3.5" />
                <span>About Us</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Building the Future of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4622a] via-[#f0449b] to-[#be32ff]">
                  Digital Commerce
                </span>
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p>
                  SevenUnique Tech Solutions is a modern digital product and
                  software engineering firm. We design and engineer scalable
                  cloud applications, fintech infrastructure, mobile apps, and
                  AI automation suites.
                </p>
                <p>
                  With DhandaGrow AI, we packaged our years of deep engineering
                  expertise into an intuitive, accessible product that allows
                  merchants to launch digital catalogues, automate customer
                  communication on WhatsApp, collect instant UPI payments, and
                  derive actionable sales insights.
                </p>
              </div>

              {/* Feature Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-orange-50/80 border border-orange-200/60 shadow-sm text-left">
                  <div className="w-8 h-8 rounded-lg bg-orange-100 text-[#f4622a] flex items-center justify-center font-bold text-sm mb-2">
                    <Zap className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    AI-Powered Growth
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Smart recommendations and automated marketing.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-purple-50/80 border border-purple-200/60 shadow-sm text-left">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm mb-2">
                    <Target className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    Digital-First Strategy
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Seamless omnichannel customer reach.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-200/60 shadow-sm text-left">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm mb-2">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    Scalable & Secure
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Built for high volumes and zero downtime.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 bg-white p-2.5 shadow-xl w-full group">
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/about/team.png"
                    alt="SevenUnique Team Collaboration"
                    fill
                    unoptimized
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white text-xs sm:text-sm font-semibold drop-shadow-md">
                    Engineered with passion by our Jaipur headquarters team.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SVG Connector 3 */}
        <div className="hidden lg:block w-full h-24 my-2 overflow-visible">
          <svg
            className="w-full h-24 overflow-visible"
            viewBox="0 0 1200 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 950 0 V 20 A 32 32 0 0 1 918 52 H 282 A 32 32 0 0 0 250 84 V 96"
              fill="none"
              stroke="url(#line-grad-1)"
              strokeWidth="2.5"
              filter="url(#line-glow-1)"
            />
            <circle cx="950" cy="0" r="7" fill="#f4622a" fillOpacity="0.3" />
            <circle cx="950" cy="0" r="4" fill="#f4622a" />
            <circle cx="250" cy="96" r="7" fill="#10b981" fillOpacity="0.3" />
            <circle cx="250" cy="96" r="4" fill="#10b981" />
          </svg>
        </div>

        {/* SECTION 4: OUR MISSION */}
        <section
          id="our-mission"
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-50/90 via-white to-teal-50/70 backdrop-blur-xl border border-emerald-200/80 p-6 sm:p-10 lg:p-14 shadow-xl shadow-emerald-500/5"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Visual */}
            <div className="lg:col-span-5 w-full flex justify-center order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden border border-emerald-200/80 bg-white p-2.5 shadow-xl w-full group">
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-emerald-50/50 flex items-center justify-center">
                  <Image
                    src="/images/about/our_mission.png"
                    alt="Our Mission"
                    fill
                    unoptimized
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-7 space-y-6 text-left order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-semibold tracking-wider uppercase">
                <Target className="w-3.5 h-3.5" />
                <span>Our Mission</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Empowering Millions of Merchants to Prosper in the Digital Economy
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p>
                  Our mission is to eliminate technical and financial barriers
                  for businesses of all sizes. By offering easy-to-use digital
                  catalogues, AI marketing, customer relationship tools, and
                  payment solutions, we make business growth effortless and
                  predictable.
                </p>
                <p>
                  We envision a market where local traders and merchants have
                  the same digital leverage as global eCommerce portals, keeping
                  communities economically thriving.
                </p>
              </div>

              <div className="pt-2 space-y-3">
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    ✓
                  </div>
                  <span>High-speed deployment with zero coding requirements</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    ✓
                  </div>
                  <span>Direct-to-consumer digital channels on WhatsApp & Web</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    ✓
                  </div>
                  <span>Integrated multi-gateway payment processing</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SVG Connector 4 */}
        <div className="hidden lg:block w-full h-24 my-2 overflow-visible">
          <svg
            className="w-full h-24 overflow-visible"
            viewBox="0 0 1200 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 250 0 V 20 A 32 32 0 0 0 282 52 H 918 A 32 32 0 0 1 950 84 V 96"
              fill="none"
              stroke="url(#line-grad-1)"
              strokeWidth="2.5"
              filter="url(#line-glow-1)"
            />
            <circle cx="250" cy="0" r="7" fill="#10b981" fillOpacity="0.3" />
            <circle cx="250" cy="0" r="4" fill="#10b981" />
            <circle cx="950" cy="96" r="7" fill="#be32ff" fillOpacity="0.3" />
            <circle cx="950" cy="96" r="4" fill="#be32ff" />
          </svg>
        </div>

        {/* SECTION 5: OUR VISION (WITH VIDEO) */}
        <section
          id="our-vision"
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-purple-50/90 via-white to-indigo-50/70 backdrop-blur-xl border border-purple-200/80 p-6 sm:p-10 lg:p-14 shadow-xl shadow-purple-500/5"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-300 text-purple-800 text-xs font-semibold tracking-wider uppercase">
                <Eye className="w-3.5 h-3.5" />
                <span>Our Vision</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                The AI-First Platform Powering Next-Gen Commerce
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p>
                  We imagine a commerce ecosystem where intelligence is built
                  into every interaction. From automated inventory sync and
                  predictive restocks to hyper-personalized customer engagement,
                  AI handles the complexity so merchants can focus on what they
                  do best: serving their customers.
                </p>
                <p>
                  As business scales across borders, our platform evolves
                  continuously, integrating bleeding-edge AI models, localized
                  languages, voice search, and seamless payments.
                </p>
              </div>

              {/* 4 Feature cards */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-white border border-purple-200/70 shadow-sm">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                    Smart Automation
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5">
                    Order capture to receipt in seconds.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-purple-200/70 shadow-sm">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                    Omnichannel Reach
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5">
                    WhatsApp, Web, and in-store sync.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-purple-200/70 shadow-sm">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                    Intelligence at Scale
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5">
                    Customer loyalty & sales forecasting.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-purple-200/70 shadow-sm">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                    Frictionless Payments
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5">
                    Instant settlements and zero leakages.
                  </p>
                </div>
              </div>
            </div>

            {/* Embedded Video */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative rounded-3xl overflow-hidden border border-purple-200/80 bg-white p-2.5 shadow-xl w-full group">
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-900 shadow-inner">
                  <video
                    src="/images/about/our_vision.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 object-cover"
                    style={{
                      width: "75%",
                      height: "133.333%",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 text-white text-xs sm:text-sm font-semibold drop-shadow-md">
                    Next-Gen AI Platform in Action
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SVG Connector 5 */}
        <div className="hidden lg:block w-full h-24 my-2 overflow-visible">
          <svg
            className="w-full h-24 overflow-visible"
            viewBox="0 0 1200 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 950 0 V 20 A 32 32 0 0 1 918 52 H 282 A 32 32 0 0 0 250 84 V 96"
              fill="none"
              stroke="url(#line-grad-1)"
              strokeWidth="2.5"
              filter="url(#line-glow-1)"
            />
            <circle cx="950" cy="0" r="7" fill="#be32ff" fillOpacity="0.3" />
            <circle cx="950" cy="0" r="4" fill="#be32ff" />
            <circle cx="250" cy="96" r="7" fill="#f4622a" fillOpacity="0.3" />
            <circle cx="250" cy="96" r="4" fill="#f4622a" />
          </svg>
        </div>

        {/* SECTION 6: FROM THE PARTNERS */}
        <section
          id="partners"
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-amber-50/90 via-white to-orange-50/70 backdrop-blur-xl border border-orange-200/80 p-6 sm:p-10 lg:p-14 shadow-xl shadow-orange-500/5"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Portrait */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative rounded-3xl overflow-hidden border-2 border-orange-200/80 p-2 bg-gradient-to-tr from-amber-100 via-orange-100 to-pink-100 shadow-xl max-w-sm w-full group">
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/about/partners.png"
                    alt="Partners Dinesh Kumar & Rahul Prajapat"
                    fill
                    unoptimized
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white text-left">
                    <h3 className="text-xl font-bold">
                      Dinesh Kumar & Rahul Prajapat
                    </h3>
                    <p className="text-xs text-orange-200 font-medium tracking-wide">
                      Partners & Leadership
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-300 text-[#f4622a] text-xs font-semibold tracking-wider uppercase">
                <Quote className="w-3.5 h-3.5" />
                <span>From the Partners</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                United by Innovation, Driven by Merchant Success
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p>
                  Partnership is more than business synergy; it is a shared
                  conviction. When we envisioned SevenUnique and DhandaGrow AI,
                  we wanted to build products that solve ground-level problems
                  faced by real entrepreneurs every single day.
                </p>
                <p>
                  By blending robust engineering architecture with user-centric
                  design, our platform allows businesses to operate 24/7 without
                  expensive IT overheads.
                </p>
                <p className="italic text-slate-700 font-medium border-l-4 border-[#f4622a] pl-4 py-1 bg-orange-50/50 rounded-r-lg">
                  &ldquo;When a merchant tells us that DhandaGrow saved them 4
                  hours a day and doubled their online sales, that is the
                  greatest metric of our success.&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h4 className="text-lg font-bold text-slate-900">
                    Dinesh Kumar & Rahul Prajapat
                  </h4>
                  <p className="text-xs sm:text-sm text-[#f4622a] font-medium">
                    Founders & Managing Partners
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Strategic Visionaries</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SVG Connector 6 */}
        <div className="hidden lg:block w-full h-24 my-2 overflow-visible">
          <svg
            className="w-full h-24 overflow-visible"
            viewBox="0 0 1200 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 250 0 V 20 A 32 32 0 0 0 282 52 H 918 A 32 32 0 0 1 950 84 V 96"
              fill="none"
              stroke="url(#line-grad-1)"
              strokeWidth="2.5"
              filter="url(#line-glow-1)"
            />
            <circle cx="250" cy="0" r="7" fill="#f4622a" fillOpacity="0.3" />
            <circle cx="250" cy="0" r="4" fill="#f4622a" />
            <circle cx="950" cy="96" r="7" fill="#be32ff" fillOpacity="0.3" />
            <circle cx="950" cy="96" r="4" fill="#be32ff" />
          </svg>
        </div>

        {/* SECTION 7: MEET THE TEAM */}
        <section
          id="team"
          className="relative rounded-3xl overflow-hidden bg-white/90 backdrop-blur-xl border border-slate-200/90 p-6 sm:p-10 lg:p-14 shadow-xl shadow-slate-200/50 text-center"
        >
          <div className="max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-[#f4622a] text-xs font-semibold tracking-wider uppercase">
              <Users className="w-3.5 h-3.5" />
              <span>Meet the Team</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              The Minds Behind the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4622a] via-[#f0449b] to-[#be32ff]">
                Mission
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
              Meet the talented engineers, designers, strategists, and managers
              powering innovation at SevenUnique Tech Solutions and DhandaGrow
              AI.
            </p>
          </div>

          {/* 11 Team Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {leadershipTeam.map((member, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200/80 hover:border-orange-300 p-6 flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Circular Portrait */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-slate-100 group-hover:border-[#f4622a] shadow-md mb-4 bg-slate-100 transition-colors duration-300">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    unoptimized
                    className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Info */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#f4622a] transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-xs font-medium text-slate-500 mt-1.5 leading-snug">
                  {member.role}
                </p>

                {/* Subtle tag badge */}
                <span className="mt-3 inline-block px-3 py-1 rounded-full text-[11px] font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                  Team Member
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* SVG Connector 7 */}
        <div className="hidden lg:block w-full h-24 my-2 overflow-visible">
          <svg
            className="w-full h-24 overflow-visible"
            viewBox="0 0 1200 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 950 0 V 20 A 32 32 0 0 1 918 52 H 282 A 32 32 0 0 0 250 84 V 96"
              fill="none"
              stroke="url(#line-grad-1)"
              strokeWidth="2.5"
              filter="url(#line-glow-1)"
            />
            <circle cx="950" cy="0" r="7" fill="#be32ff" fillOpacity="0.3" />
            <circle cx="950" cy="0" r="4" fill="#be32ff" />
            <circle cx="250" cy="96" r="7" fill="#f4622a" fillOpacity="0.3" />
            <circle cx="250" cy="96" r="4" fill="#f4622a" />
          </svg>
        </div>

        {/* SECTION 8: COME WORK WITH US */}
        <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-orange-50 via-[#faf7f2] to-amber-50 border border-orange-200/80 p-8 sm:p-14 lg:p-20 shadow-2xl text-center">
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center justify-center py-6 sm:py-10">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-slate-900 tracking-tight leading-tight mb-8">
              Come Work With Us
            </h2>
            <Link
              className="inline-flex items-center gap-2.5 bg-[#f4622a] hover:bg-[#d94f1c] text-white font-semibold text-base sm:text-lg px-8 sm:px-9 py-3.5 sm:py-4 rounded-xl shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all duration-300 group"
              href="/jobOp"
            >
              <span>Explore Open Roles</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </div>

          {/* Floating Badges with Avatars */}
          <div className="hidden md:flex items-center gap-3 absolute top-8 sm:top-12 left-6 sm:left-12 lg:left-16 z-20">
            <div className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-2 border-white shadow-xl bg-amber-50 shrink-0">
              <Image
                src="/team/avatar-devika-chhipa.webp"
                alt="Innovate with us"
                fill
                unoptimized
                className="object-cover object-top"
              />
            </div>
            <div className="px-3.5 py-1.5 rounded-full bg-[#fde9df] border border-orange-200/70 text-[#d9531e] font-semibold text-xs lg:text-sm shadow-sm whitespace-nowrap">
              Innovate with us...
            </div>
          </div>

          <div className="hidden md:flex flex-col items-start gap-2 absolute bottom-6 sm:bottom-10 left-12 sm:left-24 lg:left-32 z-20">
            <div className="px-3.5 py-1.5 rounded-full bg-[#e8f1ff] border border-blue-200/70 text-[#2563eb] font-semibold text-xs lg:text-sm shadow-sm whitespace-nowrap ml-2">
              Power to you!
            </div>
            <div className="relative w-24 h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden border-2 border-white shadow-2xl bg-gradient-to-tr from-indigo-500 to-purple-500 p-0.5 shrink-0">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-100">
                <Image
                  src="/team/avatar-vijay-gupta.webp"
                  alt="Power to you"
                  fill
                  unoptimized
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center absolute top-10 sm:top-14 right-8 sm:right-16 lg:right-24 z-20">
            <div className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-2 border-white shadow-xl bg-slate-100 shrink-0">
              <Image
                src="/team/avatar-rajyavardhan-singh.webp"
                alt="Team member"
                fill
                unoptimized
                className="object-cover object-top"
              />
            </div>
          </div>

          <div className="hidden md:flex flex-col items-end gap-2 absolute bottom-6 sm:bottom-10 right-10 sm:right-20 lg:right-28 z-20">
            <div className="px-3.5 py-1.5 rounded-full bg-[#fde9df] border border-orange-200/70 text-[#d9531e] font-semibold text-xs lg:text-sm shadow-sm whitespace-nowrap mr-2">
              Code the extraordinary...
            </div>
            <div className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-2 border-white shadow-xl bg-amber-50 shrink-0">
              <Image
                src="/team/avatar-deepak-yadav.webp"
                alt="Code the extraordinary"
                fill
                unoptimized
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Mobile avatars */}
          <div className="flex md:hidden items-center justify-center gap-4 mt-6 flex-wrap">
            <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md bg-amber-50">
              <Image
                src="/team/avatar-devika-chhipa.webp"
                alt="Team"
                fill
                unoptimized
                className="object-cover object-top"
              />
            </div>
            <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md bg-indigo-500">
              <Image
                src="/team/avatar-vijay-gupta.webp"
                alt="Team"
                fill
                unoptimized
                className="object-cover object-top"
              />
            </div>
            <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md bg-slate-100">
              <Image
                src="/team/avatar-rajyavardhan-singh.webp"
                alt="Team"
                fill
                unoptimized
                className="object-cover object-top"
              />
            </div>
            <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md bg-amber-50">
              <Image
                src="/team/avatar-deepak-yadav.webp"
                alt="Team"
                fill
                unoptimized
                className="object-cover object-top"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
