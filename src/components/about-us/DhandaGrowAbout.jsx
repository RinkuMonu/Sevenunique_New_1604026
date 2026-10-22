"use client";

import Image from "next/image";
import Link from "next/link";
import { Quote, ArrowRight } from "lucide-react";

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
    <div className="min-h-screen bg-[#0a0b0e] text-slate-100 selection:bg-purple-600/30 selection:text-white relative overflow-hidden font-sans">
      {/* Background Ambient Glow Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-[550px] h-[550px] bg-gradient-to-tr from-orange-600/15 via-pink-600/15 to-purple-600/10 rounded-full blur-[170px]" />
        <div className="absolute top-1/3 -right-40 w-[650px] h-[650px] bg-gradient-to-bl from-purple-600/15 via-indigo-600/10 to-transparent rounded-full blur-[170px]" />
        <div className="absolute bottom-20 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-pink-600/10 to-purple-600/10 rounded-full blur-[160px]" />
      </div>

      {/* SECTION 1: HERO */}
      <section
        id="our-team"
        className="relative w-full pt-28 pb-12 lg:pt-36 lg:pb-16 border-b border-white/10 overflow-hidden bg-black/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 space-y-6 text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-white leading-[1.15]">
                Empowering Every Business to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fc9a5d] via-[#f0449b] to-[#be32ff]">
                  Grow Digitally
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed font-normal">
                DhandaGrow AI is an AI-powered business growth platform built to
                help shopkeepers, small businesses, entrepreneurs, and growing
                brands establish a strong digital presence and grow their
                business smarter.
              </p>
            </div>
            <div className="lg:col-span-6 w-full flex justify-center">
              <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-b from-white/10 via-white/5 to-transparent p-2 sm:p-2.5 shadow-2xl w-full group">
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] w-full bg-slate-900 shadow-inner">
                  <Image
                    src="/images/about/team-goa.webp"
                    alt="Seven Unique Leadership Team in Goa"
                    fill
                    priority
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white/90 font-medium backdrop-blur-md bg-black/40 px-3.5 py-1.5 rounded-xl border border-white/10">
                    <span>Seven Unique Leadership Team</span>
                    <span className="text-pink-400 font-semibold">
                      DhandaGrow AI
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT WRAPPER */}
      <div className="relative z-10 pt-4 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2">
        {/* CONNECTOR 1 */}
        <div
          className="relative w-full pointer-events-none select-none z-20"
          style={{ height: "96px" }}
          aria-hidden="true"
        >
          <svg
            className="w-full h-full overflow-visible"
            width="1200"
            height="96"
            viewBox="0 0 1200 96"
          >
            <defs>
              <linearGradient
                id="line-grad-1"
                x1="100%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#fc9a5d" stopOpacity="0.95" />
                <stop offset="45%" stopColor="#f0449b" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#fc9a5d" stopOpacity="0.95" />
              </linearGradient>
              <filter
                id="line-glow-1"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feDropShadow
                  dx="0"
                  dy="0"
                  stdDeviation="3.5"
                  floodColor="#fc9a5d"
                  floodOpacity="0.45"
                />
              </filter>
            </defs>
            <path
              d="M 900 0 V 16 A 32 32 0 0 1 868 48 H 296 A 32 32 0 0 0 264 80 V 96"
              fill="none"
              stroke="url(#line-grad-1)"
              strokeWidth="3.5"
              strokeOpacity="0.25"
              filter="url(#line-glow-1)"
            />
            <path
              d="M 900 0 V 16 A 32 32 0 0 1 868 48 H 296 A 32 32 0 0 0 264 80 V 96"
              fill="none"
              stroke="url(#line-grad-1)"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 900 0 V 16 A 32 32 0 0 1 868 48 H 296 A 32 32 0 0 0 264 80 V 96"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeDasharray="6 70"
              strokeDashoffset="0"
              className="opacity-40"
            />
            <circle cx="900" cy="0" r="6" fill="#fc9a5d" fillOpacity="0.2" />
            <circle cx="900" cy="0" r="3" fill="#fc9a5d" />
            <circle cx="264" cy="96" r="6" fill="#fc9a5d" fillOpacity="0.2" />
            <circle cx="264" cy="96" r="3" fill="#fc9a5d" />
          </svg>
        </div>

        {/* SECTION 2: DIRECTOR'S VOICE */}
        <section id="directors-voice" className="scroll-mt-28 relative">
          <div className="bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-10 lg:p-14 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-6 right-6 opacity-10 pointer-events-none">
              <Quote className="w-32 h-32 text-pink-400" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-6 order-2 lg:order-1 flex flex-col justify-center">
                <div className="space-y-2 text-left">
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-pink-400">
                    <Quote className="w-4 h-4" />
                    <span>Director&apos;s Voice</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                    A Message from Our Leadership
                  </h2>
                  <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-pink-400">
                    Founder, Promoter &amp; Managing Director
                  </div>
                </div>
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-pink-500/15 via-purple-500/10 to-transparent border border-pink-500/30 text-white font-medium text-base sm:text-lg leading-relaxed shadow-lg backdrop-blur-sm text-left">
                  “Hi, I’m{" "}
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#fc9a5d] via-[#f0449b] to-[#be32ff]">
                    Dinesh Kumar
                  </span>
                  , Founder, Promoter &amp; Managing Director of Sevenunique Tech
                  Solutions Private Limited.”
                </div>
                <p className="text-slate-200/90 text-base sm:text-lg leading-relaxed border-l-2 border-pink-500/40 pl-5 sm:pl-7 italic font-normal text-left">
                  When we look at local shops and small businesses, we see hard
                  work, ambition, and enormous potential. But many business
                  owners do not have the time, resources, or technical expertise
                  to manage digital marketing consistently. We started building
                  DhandaGrow AI with a simple belief: technology should make
                  business easier, not more complicated. Our goal is to bring
                  AI-powered content creation, marketing automation, and digital
                  business tools together in one accessible platform. We want
                  shopkeepers and entrepreneurs to create content more easily,
                  maintain a consistent online presence, connect with customers,
                  and focus on what matters most — growing their business. For
                  us, DhandaGrow AI is more than a technology platform. It is a
                  step toward making digital growth accessible to every
                  business, regardless of its size. We are working toward a
                  future where every shopkeeper has the opportunity to become
                  digitally empowered and every ambitious business has the tools
                  to grow.
                </p>
              </div>
              <div className="lg:col-span-5 self-center order-1 lg:order-2 w-full flex justify-center">
                <div className="relative rounded-3xl overflow-hidden border border-pink-500/25 bg-gradient-to-b from-pink-500/10 via-purple-500/5 to-transparent p-2 sm:p-2.5 shadow-2xl group max-w-sm sm:max-w-md w-full">
                  <div className="relative rounded-2xl overflow-hidden aspect-[2/3] w-full bg-slate-900/40">
                    <Image
                      src="/images/about/directors-voice.png"
                      alt="Dinesh Kumar - Founder, Promoter & Managing Director"
                      fill
                      className="object-contain object-center group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONNECTOR 2 */}
        <div
          className="relative w-full pointer-events-none select-none z-20"
          style={{ height: "96px" }}
          aria-hidden="true"
        >
          <svg
            className="w-full h-full overflow-visible"
            width="1200"
            height="96"
            viewBox="0 0 1200 96"
          >
            <defs>
              <linearGradient
                id="line-grad-2"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#fc9a5d" stopOpacity="0.95" />
                <stop offset="45%" stopColor="#f0449b" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#fc9a5d" stopOpacity="0.95" />
              </linearGradient>
              <filter
                id="line-glow-2"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feDropShadow
                  dx="0"
                  dy="0"
                  stdDeviation="3.5"
                  floodColor="#fc9a5d"
                  floodOpacity="0.45"
                />
              </filter>
            </defs>
            <path
              d="M 264 0 V 16 A 32 32 0 0 0 296 48 H 868 A 32 32 0 0 1 900 80 V 96"
              fill="none"
              stroke="url(#line-grad-2)"
              strokeWidth="3.5"
              strokeOpacity="0.25"
              filter="url(#line-glow-2)"
            />
            <path
              d="M 264 0 V 16 A 32 32 0 0 0 296 48 H 868 A 32 32 0 0 1 900 80 V 96"
              fill="none"
              stroke="url(#line-grad-2)"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 264 0 V 16 A 32 32 0 0 0 296 48 H 868 A 32 32 0 0 1 900 80 V 96"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeDasharray="6 70"
              strokeDashoffset="0"
              className="opacity-40"
            />
            <circle cx="264" cy="0" r="6" fill="#fc9a5d" fillOpacity="0.2" />
            <circle cx="264" cy="0" r="3" fill="#fc9a5d" />
            <circle cx="900" cy="96" r="6" fill="#fc9a5d" fillOpacity="0.2" />
            <circle cx="900" cy="96" r="3" fill="#fc9a5d" />
          </svg>
        </div>

        {/* SECTION 3: ABOUT US */}
        <section
          id="about-us"
          className="scroll-mt-28 bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-10 lg:p-14 backdrop-blur-xl relative overflow-hidden shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-4 text-left self-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                About Us
              </h2>
              <div className="space-y-3 text-slate-300 text-base sm:text-lg leading-relaxed">
                <p>
                  We believe every shopkeeper deserves access to the digital
                  tools, marketing capabilities, and automation that were once
                  available only to large businesses.
                </p>
                <p>
                  With DhandaGrow AI, businesses can create social media posts,
                  generate reels and marketing creatives, manage their online
                  presence, automate content planning, and streamline customer
                  engagement — all from one platform.
                </p>
                <p>
                  Our mission is to simplify digital transformation by combining
                  artificial intelligence, marketing automation, and easy-to-use
                  technology so business owners can spend less time managing
                  repetitive tasks and more time growing their business.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 w-full flex justify-center self-center">
              <div className="relative rounded-3xl overflow-hidden border border-orange-500/25 bg-gradient-to-b from-orange-500/10 via-pink-500/5 to-transparent p-2 sm:p-2.5 shadow-2xl group max-w-sm sm:max-w-md w-full">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-square w-full bg-slate-900/60 shadow-inner">
                  <Image
                    src="/images/about/team.png"
                    alt="DhandaGrow AI Team"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONNECTOR 3 */}
        <div
          className="relative w-full pointer-events-none select-none z-20"
          style={{ height: "96px" }}
          aria-hidden="true"
        >
          <svg
            className="w-full h-full overflow-visible"
            width="1200"
            height="96"
            viewBox="0 0 1200 96"
          >
            <defs>
              <linearGradient
                id="line-grad-3"
                x1="100%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#fc9a5d" stopOpacity="0.95" />
                <stop offset="45%" stopColor="#f0449b" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#fc9a5d" stopOpacity="0.95" />
              </linearGradient>
              <filter
                id="line-glow-3"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feDropShadow
                  dx="0"
                  dy="0"
                  stdDeviation="3.5"
                  floodColor="#fc9a5d"
                  floodOpacity="0.45"
                />
              </filter>
            </defs>
            <path
              d="M 900 0 V 16 A 32 32 0 0 1 868 48 H 332 A 32 32 0 0 0 300 80 V 96"
              fill="none"
              stroke="url(#line-grad-3)"
              strokeWidth="3.5"
              strokeOpacity="0.25"
              filter="url(#line-glow-3)"
            />
            <path
              d="M 900 0 V 16 A 32 32 0 0 1 868 48 H 332 A 32 32 0 0 0 300 80 V 96"
              fill="none"
              stroke="url(#line-grad-3)"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 900 0 V 16 A 32 32 0 0 1 868 48 H 332 A 32 32 0 0 0 300 80 V 96"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeDasharray="6 70"
              strokeDashoffset="0"
              className="opacity-40"
            />
            <circle cx="900" cy="0" r="6" fill="#fc9a5d" fillOpacity="0.2" />
            <circle cx="900" cy="0" r="3" fill="#fc9a5d" />
            <circle cx="300" cy="96" r="6" fill="#fc9a5d" fillOpacity="0.2" />
            <circle cx="300" cy="96" r="3" fill="#fc9a5d" />
          </svg>
        </div>

        {/* SECTION 4: OUR MISSION */}
        <section
          id="mission"
          className="scroll-mt-28 bg-gradient-to-r from-emerald-950/40 via-emerald-950/20 to-white/[0.02] border border-emerald-500/20 rounded-3xl p-6 sm:p-10 lg:p-14 relative overflow-hidden shadow-2xl backdrop-blur-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5 w-full flex justify-center self-center">
              <div className="relative rounded-3xl overflow-hidden border border-emerald-500/25 bg-black/60 p-2 sm:p-2.5 shadow-2xl group max-w-sm sm:max-w-md w-full">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] w-full bg-slate-900 shadow-inner">
                  <Image
                    src="/images/about/our_mission.png"
                    alt="DhandaGrow AI Team - Our Mission"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-3.5 text-left self-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Our Mission
              </h2>
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-400">
                Har Dukaan Ko Digital, Har Business Ko Growth
              </div>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                Our mission is to empower every shopkeeper, entrepreneur, and
                small business in India with affordable, accessible, and
                innovative AI-powered digital tools. Through DhandaGrow AI, we
                aim to simplify digital marketing, automate repetitive tasks,
                and make professional content creation accessible to businesses
                of every size. We help businesses build a strong online
                presence, create engaging social media content, connect with
                their target audience, and manage their digital marketing more
                efficiently. Our goal is to reduce the complexity and cost of
                digital growth so that every business can focus on what matters
                most — serving customers, building trust, and growing
                successfully in the digital marketplace.
              </p>
            </div>
          </div>
        </section>

        {/* CONNECTOR 4 */}
        <div
          className="relative w-full pointer-events-none select-none z-20"
          style={{ height: "96px" }}
          aria-hidden="true"
        >
          <svg
            className="w-full h-full overflow-visible"
            width="1200"
            height="96"
            viewBox="0 0 1200 96"
          >
            <defs>
              <linearGradient
                id="line-grad-4"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#fc9a5d" stopOpacity="0.95" />
                <stop offset="45%" stopColor="#f0449b" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#fc9a5d" stopOpacity="0.95" />
              </linearGradient>
              <filter
                id="line-glow-4"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feDropShadow
                  dx="0"
                  dy="0"
                  stdDeviation="3.5"
                  floodColor="#fc9a5d"
                  floodOpacity="0.45"
                />
              </filter>
            </defs>
            <path
              d="M 300 0 V 16 A 32 32 0 0 0 332 48 H 868 A 32 32 0 0 1 900 80 V 96"
              fill="none"
              stroke="url(#line-grad-4)"
              strokeWidth="3.5"
              strokeOpacity="0.25"
              filter="url(#line-glow-4)"
            />
            <path
              d="M 300 0 V 16 A 32 32 0 0 0 332 48 H 868 A 32 32 0 0 1 900 80 V 96"
              fill="none"
              stroke="url(#line-grad-4)"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 300 0 V 16 A 32 32 0 0 0 332 48 H 868 A 32 32 0 0 1 900 80 V 96"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeDasharray="6 70"
              strokeDashoffset="0"
              className="opacity-40"
            />
            <circle cx="300" cy="0" r="6" fill="#fc9a5d" fillOpacity="0.2" />
            <circle cx="300" cy="0" r="3" fill="#fc9a5d" />
            <circle cx="900" cy="96" r="6" fill="#fc9a5d" fillOpacity="0.2" />
            <circle cx="900" cy="96" r="3" fill="#fc9a5d" />
          </svg>
        </div>

        {/* SECTION 5: OUR VISION */}
        <section
          id="vision"
          className="scroll-mt-28 bg-gradient-to-r from-purple-950/40 via-indigo-950/30 to-[#0e1017] border border-purple-500/20 rounded-3xl p-6 sm:p-10 lg:p-14 relative overflow-hidden shadow-2xl backdrop-blur-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 space-y-3.5 order-2 lg:order-1 text-left self-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Our Vision
              </h2>
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-purple-400">
                A Digitally Empowered India
              </div>
              <p className="text-slate-200/90 text-base sm:text-lg leading-relaxed text-left font-normal">
                Our vision is to build a digitally empowered India where every
                local shopkeeper, small business owner, and entrepreneur has the
                opportunity to grow and compete in the modern marketplace. We
                envision a future where advanced AI technology and smart digital
                solutions are no longer limited to large companies but are
                accessible to businesses in every city, town, and village.
                Through DhandaGrow AI, we aspire to make digital marketing
                simpler, business automation smarter, and brand growth more
                achievable for everyone. We believe every business deserves the
                right tools, opportunities, and support to establish its digital
                identity, reach more customers, and turn its ambitions into
                lasting success.
              </p>
            </div>
            <div className="lg:col-span-6 self-center order-1 lg:order-2 w-full flex justify-center">
              <div className="relative rounded-3xl overflow-hidden border border-purple-500/30 bg-black/80 p-2 sm:p-2.5 shadow-2xl shadow-purple-950/50 w-full max-w-xl group">
                <div className="relative rounded-2xl overflow-hidden aspect-[736/480] w-full bg-black shadow-inner">
                  <video
                    src="/images/about/our_vision.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONNECTOR 5 */}
        <div
          className="relative w-full pointer-events-none select-none z-20"
          style={{ height: "96px" }}
          aria-hidden="true"
        >
          <svg
            className="w-full h-full overflow-visible"
            width="1200"
            height="96"
            viewBox="0 0 1200 96"
          >
            <defs>
              <linearGradient
                id="line-grad-5"
                x1="100%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#fc9a5d" stopOpacity="0.95" />
                <stop offset="45%" stopColor="#f0449b" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#fc9a5d" stopOpacity="0.95" />
              </linearGradient>
              <filter
                id="line-glow-5"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feDropShadow
                  dx="0"
                  dy="0"
                  stdDeviation="3.5"
                  floodColor="#fc9a5d"
                  floodOpacity="0.45"
                />
              </filter>
            </defs>
            <path
              d="M 900 0 V 16 A 32 32 0 0 1 868 48 H 296 A 32 32 0 0 0 264 80 V 96"
              fill="none"
              stroke="url(#line-grad-5)"
              strokeWidth="3.5"
              strokeOpacity="0.25"
              filter="url(#line-glow-5)"
            />
            <path
              d="M 900 0 V 16 A 32 32 0 0 1 868 48 H 296 A 32 32 0 0 0 264 80 V 96"
              fill="none"
              stroke="url(#line-grad-5)"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 900 0 V 16 A 32 32 0 0 1 868 48 H 296 A 32 32 0 0 0 264 80 V 96"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeDasharray="6 70"
              strokeDashoffset="0"
              className="opacity-40"
            />
            <circle cx="900" cy="0" r="6" fill="#fc9a5d" fillOpacity="0.2" />
            <circle cx="900" cy="0" r="3" fill="#fc9a5d" />
            <circle cx="264" cy="96" r="6" fill="#fc9a5d" fillOpacity="0.2" />
            <circle cx="264" cy="96" r="3" fill="#fc9a5d" />
          </svg>
        </div>

        {/* SECTION 6: PARTNERS' MESSAGE */}
        <section
          id="partners-message"
          className="scroll-mt-28 bg-gradient-to-r from-orange-950/30 via-pink-950/20 to-white/[0.02] border border-pink-500/20 rounded-3xl p-6 sm:p-10 lg:p-14 relative overflow-hidden shadow-2xl backdrop-blur-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative rounded-3xl overflow-hidden border border-pink-500/25 bg-black/60 p-2 sm:p-2.5 shadow-2xl group w-full max-w-sm sm:max-w-md lg:max-w-none h-full flex flex-col">
                <div className="relative rounded-2xl overflow-hidden w-full flex-1 aspect-[4/3] sm:aspect-[16/11] lg:aspect-auto min-h-[280px] bg-slate-900 shadow-inner">
                  <Image
                    src="/images/about/partners.png"
                    alt="Dinesh Kumar & Rahul Prajapat - Partners at DhandaGrow AI"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 flex flex-col gap-0.5 text-xs text-white backdrop-blur-md bg-black/55 p-3 rounded-xl border border-white/10">
                    <span className="font-bold text-sm text-transparent bg-clip-text bg-gradient-to-r from-[#fc9a5d] via-[#f0449b] to-[#be32ff]">
                      Dinesh Kumar &amp; Rahul Prajapat
                    </span>
                    <span className="text-[11px] text-slate-300">
                      Partners at DhandaGrow AI
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-3.5 text-left flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl lg:text-3xl font-extrabold text-white tracking-tight">
                A Message from Our Partners
              </h2>
              <div className="space-y-2.5 text-slate-200/90 text-sm sm:text-base leading-relaxed font-normal">
                <p>
                  At DhandaGrow AI, our mission is to empower small businesses
                  across India with smart, affordable AI-powered marketing
                  solutions.
                </p>
                <p>
                  We aim to simplify digital marketing, strengthen brand
                  presence, and help entrepreneurs reach more customers with
                  less effort.
                </p>
                <p>
                  Our vision is to make advanced AI technology accessible to
                  every shopkeeper, startup, and growing business.
                </p>
                <p>
                  We believe every business deserves the opportunity to grow,
                  compete, and succeed in the digital era.
                </p>
              </div>
              <div className="p-3 sm:p-3.5 rounded-2xl bg-gradient-to-r from-pink-500/15 via-purple-500/10 to-transparent border border-pink-500/30 text-white font-semibold text-sm sm:text-base leading-snug shadow-lg backdrop-blur-sm">
                “Together, let’s build a smarter future for Indian businesses.”
              </div>
            </div>
          </div>
        </section>

        {/* CONNECTOR 6 */}
        <div
          className="relative w-full pointer-events-none select-none z-20"
          style={{ height: "96px" }}
          aria-hidden="true"
        >
          <svg
            className="w-full h-full overflow-visible"
            width="1200"
            height="96"
            viewBox="0 0 1200 96"
          >
            <defs>
              <linearGradient
                id="line-grad-6"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#fc9a5d" stopOpacity="0.95" />
                <stop offset="45%" stopColor="#f0449b" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#fc9a5d" stopOpacity="0.95" />
              </linearGradient>
              <filter
                id="line-glow-6"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feDropShadow
                  dx="0"
                  dy="0"
                  stdDeviation="3.5"
                  floodColor="#fc9a5d"
                  floodOpacity="0.45"
                />
              </filter>
            </defs>
            <path
              d="M 264 0 V 16 A 32 32 0 0 0 296 48 H 868 A 32 32 0 0 1 900 80 V 96"
              fill="none"
              stroke="url(#line-grad-6)"
              strokeWidth="3.5"
              strokeOpacity="0.25"
              filter="url(#line-glow-6)"
            />
            <path
              d="M 264 0 V 16 A 32 32 0 0 0 296 48 H 868 A 32 32 0 0 1 900 80 V 96"
              fill="none"
              stroke="url(#line-grad-6)"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 264 0 V 16 A 32 32 0 0 0 296 48 H 868 A 32 32 0 0 1 900 80 V 96"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeDasharray="6 70"
              strokeDashoffset="0"
              className="opacity-40"
            />
            <circle cx="264" cy="0" r="6" fill="#fc9a5d" fillOpacity="0.2" />
            <circle cx="264" cy="0" r="3" fill="#fc9a5d" />
            <circle cx="900" cy="96" r="6" fill="#fc9a5d" fillOpacity="0.2" />
            <circle cx="900" cy="96" r="3" fill="#fc9a5d" />
          </svg>
        </div>

        {/* SECTION 7: MEET OUR LEADERSHIP TEAM */}
        <section
          id="leadership-team"
          className="scroll-mt-28 bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-10 lg:p-12 backdrop-blur-xl relative overflow-hidden shadow-2xl"
        >
          <div className="space-y-8 sm:space-y-10">
            <div className="space-y-2.5 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight text-center">
                Meet Our Leadership Team
              </h2>
              <p className="text-sm sm:text-base text-transparent bg-clip-text bg-gradient-to-r from-[#fc9a5d] via-[#f0449b] to-[#be32ff] font-semibold">
                The Dedicated Minds Driving AI Innovation &amp; Growth
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Meet the talented engineers, developers, designers, and growth
                specialists behind DhandaGrow AI, committed to transforming how
                businesses grow digitally.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-7">
              {leadershipTeam.map((member) => (
                <div
                  key={member.name}
                  className="relative rounded-3xl overflow-hidden border border-white/10 hover:border-pink-500/40 bg-gradient-to-b from-white/[0.07] via-white/[0.03] to-white/[0.01] p-5 sm:p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/10 hover:-translate-y-1.5 group backdrop-blur-xl"
                >
                  <div className="relative w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full overflow-hidden bg-white border-4 border-white/20 shadow-xl mx-auto mb-4 group-hover:border-pink-500/50 group-hover:scale-105 transition-all duration-500 shrink-0">
                    <Image
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 640px) 150px, 180px"
                    />
                  </div>
                  <div className="pt-1 w-full flex flex-col items-center">
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#fc9a5d] group-hover:via-[#f0449b] group-hover:to-[#be32ff] transition-all duration-300">
                      {member.name}
                    </h3>
                    <span className="mt-2 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-pink-300 bg-pink-500/10 border border-pink-500/20 max-w-full text-center">
                      {member.role}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONNECTOR 7 */}
        <div
          className="relative w-full pointer-events-none select-none z-20"
          style={{ height: "96px" }}
          aria-hidden="true"
        >
          <svg
            className="w-full h-full overflow-visible"
            width="1200"
            height="96"
            viewBox="0 0 1200 96"
          >
            <defs>
              <linearGradient
                id="line-grad-7"
                x1="100%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#fc9a5d" stopOpacity="0.95" />
                <stop offset="45%" stopColor="#f0449b" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#fc9a5d" stopOpacity="0.95" />
              </linearGradient>
              <filter
                id="line-glow-7"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feDropShadow
                  dx="0"
                  dy="0"
                  stdDeviation="3.5"
                  floodColor="#fc9a5d"
                  floodOpacity="0.45"
                />
              </filter>
            </defs>
            <path
              d="M 900 0 V 16 A 32 32 0 0 1 868 48 H 332 A 32 32 0 0 0 300 80 V 96"
              fill="none"
              stroke="url(#line-grad-7)"
              strokeWidth="3.5"
              strokeOpacity="0.25"
              filter="url(#line-glow-7)"
            />
            <path
              d="M 900 0 V 16 A 32 32 0 0 1 868 48 H 332 A 32 32 0 0 0 300 80 V 96"
              fill="none"
              stroke="url(#line-grad-7)"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="900" cy="0" r="6" fill="#fc9a5d" fillOpacity="0.2" />
            <circle cx="900" cy="0" r="3" fill="#fc9a5d" />
            <circle cx="300" cy="96" r="6" fill="#fc9a5d" fillOpacity="0.2" />
            <circle cx="300" cy="96" r="3" fill="#fc9a5d" />
          </svg>
        </div>

        {/* SECTION 8: COME WORK WITH US */}
        <section className="relative rounded-3xl overflow-hidden bg-[#faf7f2] border border-orange-200/50 p-8 sm:p-14 lg:p-20 shadow-2xl text-center">
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center justify-center py-6 sm:py-10">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-slate-900 tracking-tight leading-tight mb-8">
              Come Work With Us
            </h2>
            <Link
              className="inline-flex items-center gap-2.5 bg-[#f25116] hover:bg-[#d94109] text-white font-semibold text-base sm:text-lg px-8 sm:px-9 py-3.5 sm:py-4 rounded-lg shadow-xl shadow-orange-500/20 hover:shadow-orange-500/35 hover:-translate-y-0.5 transition-all duration-300 group"
              href="/jobOp"
            >
              <span>Careers</span>
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
                className="object-cover object-top"
              />
            </div>
            <div className="px-3.5 py-1.5 rounded-full bg-[#fde9df] border border-orange-200/40 text-[#d9531e] font-medium text-xs lg:text-sm shadow-sm whitespace-nowrap">
              Innovate with us...
            </div>
          </div>

          <div className="hidden md:flex flex-col items-start gap-2 absolute bottom-6 sm:bottom-10 left-12 sm:left-24 lg:left-32 z-20">
            <div className="px-3.5 py-1.5 rounded-full bg-[#e8f1ff] border border-blue-200/50 text-[#2563eb] font-semibold text-xs lg:text-sm shadow-sm whitespace-nowrap ml-2">
              Power to you!
            </div>
            <div className="relative w-24 h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden border-2 border-white shadow-2xl bg-gradient-to-tr from-indigo-500 to-purple-500 p-0.5 shrink-0">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-900">
                <Image
                  src="/team/avatar-vijay-gupta.webp"
                  alt="Power to you"
                  fill
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
                className="object-cover object-top"
              />
            </div>
          </div>

          <div className="hidden md:flex flex-col items-end gap-2 absolute bottom-6 sm:bottom-10 right-10 sm:right-20 lg:right-28 z-20">
            <div className="px-3.5 py-1.5 rounded-full bg-[#fde9df] border border-orange-200/40 text-[#d9531e] font-medium text-xs lg:text-sm shadow-sm whitespace-nowrap mr-2">
              Code the extraordinary...
            </div>
            <div className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-2 border-white shadow-xl bg-amber-50 shrink-0">
              <Image
                src="/team/avatar-deepak-yadav.webp"
                alt="Code the extraordinary"
                fill
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
                className="object-cover object-top"
              />
            </div>
            <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md bg-indigo-500">
              <Image
                src="/team/avatar-vijay-gupta.webp"
                alt="Team"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md bg-slate-100">
              <Image
                src="/team/avatar-rajyavardhan-singh.webp"
                alt="Team"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md bg-amber-50">
              <Image
                src="/team/avatar-deepak-yadav.webp"
                alt="Team"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
