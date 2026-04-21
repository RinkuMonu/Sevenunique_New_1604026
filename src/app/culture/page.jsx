"use client";

import { useState } from "react";
import {
  Eye,
  Award,
  Target,
  Users,
  Zap,
  Lightbulb,
  HomeIcon,
} from "lucide-react";
import Image from "next/image";
import { BiLeftArrow } from "react-icons/bi";
import { FaAngleRight } from "react-icons/fa";

const beliefs = [
  {
    id: 1,
    icon: Globe,
    title: "Remote work is not just how we work—it's why we thrive.",
    description:
      "Our remote-first culture was designed to bring together the most talented people in each field, regardless of location. A mix of cultures, backgrounds, and experiences makes us stronger and gives people from capital cities and small towns equal access to global impact roles.",
    bullets: [
      "Share updates early",
      "Skip meetings without agendas",
      "Work async across time zones",
      "Support and onboard teammates quickly",
    ],
    img: "../culture/Public_1749674003.svg",
    color: "bg-gradient-to-br from-orange-200 to-orange-500",
  },
  {
    id: 2,
    icon: Premium,
    title: "To reach further, we set no limits.",
    description:
      "We don't settle—aiming higher is what sets us apart. You're trusted to take ownership, encouraged to push boundaries, and equipped with the tools and feedback to sharpen our expertise.",
    bullets: [
      "Lead by example",
      "Apply feedback fast",
      "Focus on high-impact work",
      "Move with urgency",
    ],
    img: "../culture/WorkspacePremium_1749674007.svg",
    color: "bg-gradient-to-br from-blue-200 to-blue-500",
  },

  {
    id: 3,
    icon: Handshake,
    title: "We grow and win together.",
    description:
      "Collaboration is at the heart of how we work. Teams work across roles and time zones always aligned around shared goals. Everyone's willing to dive in and solve problems together.",
    bullets: [
      "Solve instead of blame",
      'Ask "Why?" to go deeper',
      "Align early with others",
      "Step outside your role to support the team",
    ],
    img: "../culture/Handshake_1749674000.svg",
    color: "bg-gradient-to-br from-green-200 to-green-600",
  },
  {
    id: 4,
    icon: Bulb,
    title: "Thinking ahead drives our success.",
    description:
      "Every challenge is an opportunity to create something better. We move quickly, anticipate challenges, and find a way forward. Your ideas influence what we build and how people experience it.",
    bullets: [
      "Push ideas forward",
      "Fix issues fast",
      "Lead tough conversations",
      "Defend what's right for the client",
    ],
    img: "../culture/FramePerson_1749674005.svg",
    color: "bg-gradient-to-br from-yellow-100 to-yellow-500",
  },
];

const values = [
  {
    id: 1,
    title: "One Team, One Mission",
    subtitle: "We show up for each other—always.",
    description:
      "As one global team, we share knowledge and lift each other up. We go further because we go together.",
    img: "https://assets.bairesdev.com//image/upload/c_limit,w_1920/dpr_auto/f_auto/q_auto/v1/www/core/we_value_1_1750182255?_a=BAVAfVDW0",
  },
  {
    id: 2,
    title: "Speed is King",
    subtitle: "We move with momentum, clarity, and intention.",
    description:
      "We prioritize impact, make fast decisions, and help each other move forward without delays.",
    img: "https://assets.bairesdev.com//image/upload/c_limit,w_1920/dpr_auto/f_auto/q_auto/v1/www/core/we_value_2_1750182254?_a=BAVAfVDW0",
  },
  {
    id: 3,
    title: "Find a Way",
    subtitle: "We're problem-solvers, and challenges ignite us.",
    description:
      "When the way forward isn't obvious, we get creative, test ideas, and pivot quickly.",
    img: "https://assets.bairesdev.com//image/upload/c_limit,w_1920/dpr_auto/f_auto/q_auto/v1/www/core/we_value_3_1750182253?_a=BAVAfVDW0",
  },
  {
    id: 4,
    title: "Own it & Learn it",
    subtitle: "We are accountable for our work and our development.",
    description:
      "From the first draft to the final result, we take full ownership and treat every mistake as a stepping stone.",
    img: "https://assets.bairesdev.com//image/upload/c_limit,w_1920/dpr_auto/f_auto/q_auto/v1/www/core/we_value_4_1750182252?_a=BAVAfVDW0",
  },
  {
    id: 5,
    title: "No Surprises, No Silos",
    subtitle: "We communicate early and often.",
    description:
      "Whether starting a project, sharing progress, or flagging risks, we speak up and bring the right people in at the right time!",
    img: "https://assets.bairesdev.com//image/upload/c_limit,w_1920/dpr_auto/f_auto/q_auto/v1/www/core/we_value_5_1750182251?_a=BAVAfVDW0",
  },
  {
    id: 6,
    title: "Raise the Bar",
    subtitle: "Being better at what we do is our passion.",
    description:
      "We love trying different solutions, learning from them, and the thrill of pushing them further once again.",
    img: "https://assets.bairesdev.com//image/upload/c_limit,w_1920/dpr_auto/f_auto/q_auto/v1/www/core/we_value_6_1750182295?_a=BAVAfVDW0",
  },
];

function Globe() {
  return (
    <div className="w-14 h-14 bg-gradient-to-br from-orange-200 to-orange-500 rounded-lg" />
  );
}

function Premium() {
  return (
    <div className="w-14 h-14 bg-gradient-to-br from-blue-200 to-blue-500 rounded-lg" />
  );
}

function Handshake() {
  return (
    <div className="w-14 h-14 bg-gradient-to-br from-green-200 to-green-600 rounded-lg" />
  );
}

function Bulb() {
  return (
    <div className="w-14 h-14 bg-gradient-to-br from-yellow-100 to-yellow-500 rounded-lg" />
  );
}

function BeliefCard({ belief }) {
  const Icon = belief.icon;

  return (
    <div className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-white z-0" />

      {/* MAIN CARD */}
      <div className="relative z-10 p-6 md:p-8 h-full flex flex-col bg-white transition-all duration-500 group-hover:bg-gray-50">
        {/* ICON + TITLE */}
        <div className="flex flex-col gap-3 mb-6">
          {/* ICON */}
          <div
            className={`w-14 h-14 ${belief.color}`}
            style={{
              mask: `url(${belief.img})`,
              WebkitMask: `url(${belief.img})`,
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
              maskSize: "contain",
              WebkitMaskSize: "contain",
              maskPosition: "center",
              WebkitMaskPosition: "center",
            }}
          />

          {/* TITLE */}
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 leading-snug">
            {belief.title}
          </h3>
        </div>

        {/* DESCRIPTION */}
        <p className="text-gray-600 text-sm md:text-base leading-relaxed flex-1">
          {belief.description}
        </p>
      </div>

      {/* 🔥 RIGHT SLIDE PANEL */}
      <div
        className="
        absolute top-40 right-0 h-full w-full bg-white z-20
        translate-x-full group-hover:translate-x-0
        transition-transform duration-500 ease-in-out
        p-6 md:p-8 flex flex-col
      "
      >
        <h4 className="text-lg font-semibold mb-4 text-gray-900">Key Points</h4>

        <ul className="space-y-3">
          {belief.bullets.map((bullet, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-gray-600 text-sm"
            >
              <span className="w-2 h-2 mt-2 rounded-full bg-green-500" />
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ValueCard({ value }) {
  return (
    <div className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-[380px]">
      {/* IMAGE BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src={value.img}
          alt={value.title}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
        />
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-all duration-500" />

      {/* WHITE HOVER CARD */}
      <div className="absolute  inset-0 bg-white translate-y-255 group-hover:translate-y-0 transition-all duration-500" />

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 p-6 md:p-8 h-full flex flex-col justify-end">
        {/* DEFAULT TITLE (BOTTOM) */}
        <div className="transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
          <h3 className=" text-xl md:text-2xl font-semibold leading-snug">
            {value.title}
          </h3>
        </div>

        {/* HOVER CONTENT */}
        <div
          className="
          absolute inset-0 p-6 md:p-8 flex flex-col justify-center
          opacity-0 group-hover:opacity-100
          transition-all duration-500 text-black
        "
        >
          <h3 className="text-xl md:text-2xl font-semibold  mb-3">
            {value.title}
          </h3>

          <p className="text-gray-500 font-semibold text-sm md:text-base mb-3">
            {value.subtitle}
          </p>

          <p className="text-gray-600 text-sm md:text-base">
            {value.description}
          </p>
        </div>

        {/* EYE ICON */}
        <div className="absolute top-4 right-4 bg-white/80 backdrop-blur rounded-full p-2">
          <Eye className="w-5 h-5 text-gray-800" />
        </div>
      </div>
    </div>
  );
}

export default function CulturePage() {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="bg-[#F9FAFB] py-16 ">
        <div className="max-w-7xl px-8 mx-auto ">
          <div className="flex justify-start items-center gap-5 text-black">
            <HomeIcon size={20} />{" "}
            <span>
              <FaAngleRight size={20} />{" "}
            </span>
            <span className="text-gray-700 font-semibold text-sm">
              Company Culture
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <p className="text-xs md:text-sm font-bold text-gray-500 uppercase tracking-widest mb-3">
                Company Culture
              </p>
              <h1 className="text-6xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Built on culture,{" "}
                <span className="text-orange-500">Driven by talent.</span>
              </h1>
              <p className="text-2xl text-gray-600 leading-relaxed">
                At BairesDev, how we work is just as important as what we build.
              </p>
            </div>

            {/* Hero Image Placeholder */}
            <div className="relative">
              <div className="w-full rounded-2xl flex items-center justify-center text-gray-500 text-lg font-semibold">
                <Image
                  src="https://assets.bairesdev.com//image/upload/c_limit,w_600/dpr_auto/f_auto/q_auto/v1/www/static/african-male_v22eef?_a=BAVAfVDW0"
                  alt="Company Culture"
                  width={700}
                  height={900}
                  className="w-full h-full object-cover "
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe In Section */}
      <section className="py-10 md:py-20 ">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                What we believe in<span className="text-orange-500">.</span>
              </h2>
              <p className="text-gray-600 text-sm md:text-base mt-4 leading-relaxed">
                These principles shape our decisions, spark our ambition, and
                connect us across every role and region.
              </p>
            </div>

            <div className="md:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {beliefs.map((belief, idx) => (
                  <BeliefCard key={belief.id} belief={belief} index={idx} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Value Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 mb-12">
            <div className="md:col-span-1">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                What we value<span className="text-orange-500">.</span>
              </h2>
              <p className="text-gray-600 text-sm md:text-base mt-4 leading-relaxed">
                Our values don't describe who we hope to be—they reflect who we
                already are. They bring our beliefs into motion.
              </p>
            </div>

            <div className="md:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-max">
                {values.map((value) => (
                  <ValueCard key={value.id} value={value} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-28 bg-[#1f2a33] text-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            {/* LEFT SIDE (75%) */}
            <div className="w-full md:w-[75%] flex flex-col gap-1 justify-start items-end">
              {/* AVATARS */}
              <div className="flex justify-start mb-6">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-2 border-white overflow-hidden"
                    style={{
                      marginLeft: i === 0 ? 0 : "-12px",
                      zIndex: 10 - i,
                    }}
                  >
                    <img
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* HEADING */}
              <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-6 text-end">
                It all comes together in <br />
                what we do
              </h2>

              {/* TEXT */}
              <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
                Our beliefs are our compass. Our values are our action plan.
                Together, they create a workplace where we’re challenged,
                supported, and inspired to do our best work.
              </p>
            </div>

            {/* RIGHT SIDE (25%) */}
            <div className="w-full md:w-[25%] flex justify-center md:justify-end">
              <div className="bg-white rounded-2xl p-6 md:p-8 text-gray-900 shadow-xl border border-blue-200 max-w-[320px] w-full">
                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-center">
                  See yourself here?
                </h3>

                <p className="text-gray-600 text-sm md:text-base text-center leading-relaxed mb-6">
                  If this feels like a fit, don’t wait.{" "}
                  <span className="font-semibold text-gray-800">
                    Let’s find you your next career opportunity today!
                  </span>
                </p>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-all duration-300">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
