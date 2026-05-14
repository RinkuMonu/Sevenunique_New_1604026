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
import Link from "next/link";

const beliefs = [
  {
    id: 1,
    icon: Globe,
    title: "Remote work drives how we succeed",
    description:
      "Remote work isn’t just our setup, it’s a key part of our success. Our remote-first culture brings together top talent from anywhere, combining diverse backgrounds and experiences. It gives equal opportunities to people everywhere and supports flexible, async collaboration across time zones.",
    bullets: [
      "Share updates early",
      "Avoid meetings without clear agendas",
      "Collaborate asynchronously",
      "Support and onboard teammates quickly",
    ],
    img: "../culture/Public_1749674003.svg",
    color: "bg-gradient-to-br from-orange-200 to-orange-500",
  },
  {
    id: 2,
    icon: Premium,
    title: "To go further, we set no limits",
    description:
      "We don’t settle, aiming higher is what sets us apart. You’re trusted to take ownership, push boundaries, and use feedback to keep improving. That’s how you grow into a top professional.",
    bullets: [
      "Lead by example",
      "Act on feedback quickly",
      "Focus on high-impact work",
      "Move with urgency",
    ],
    img: "../culture/WorkspacePremium_1749674007.svg",
    color: "bg-gradient-to-br from-blue-200 to-blue-500",
  },

  {
    id: 3,
    icon: Handshake,
    title: "We grow and win together",
    description:
      "Collaboration is at the core of how we work, helping people succeed. Teams across roles and time zones stay aligned on shared goals, working together to solve challenges without silos or egos.",
    bullets: [
      "Solve problems, don’t blame",
      'Ask “why” to understand better',
      "Align early with your team",
      "Step in beyond your role when needed",
    ],
    img: "../culture/Handshake_1749674000.svg",
    color: "bg-gradient-to-br from-green-200 to-green-600",
  },
  {
    id: 4,
    icon: Bulb,
    title: "Thinking ahead drives our success",
    description:
      "We see every challenge as a chance to improve. We act fast, anticipate problems, and find better solutions building trust with our clients. You’re encouraged to go beyond delivery, share ideas, and shape what comes next.",
    bullets: [
      "Move ideas forward",
      "Resolve issues quickly",
      "Lead difficult conversations",
      "Stand up for what’s best for the client",
    ],
    img: "../culture/FramePerson_1749674005.svg",
    color: "bg-gradient-to-br from-yellow-100 to-yellow-500",
  },
];

const values = [
  {
    id: 1,
    title: "One Team, One Mission",
    subtitle: "We always support one another.",
    description:
      "As a global team, we share knowledge, help each other grow, and achieve more together.",
    img: "https://assets.bairesdev.com//image/upload/c_limit,w_1920/dpr_auto/f_auto/q_auto/v1/www/core/we_value_1_1750182255?_a=BAVAfVDW0",
  },
  {
    id: 2,
    title: "Speed is key",
    subtitle: "We move with focus, clarity, and purpose.",
    description:
      "We prioritize impact, make quick decisions, and keep progress moving without delays.",
    img: "https://assets.bairesdev.com//image/upload/c_limit,w_1920/dpr_auto/f_auto/q_auto/v1/www/core/we_value_2_1750182254?_a=BAVAfVDW0",
  },
  {
    id: 3,
    title: "Find a way",
    subtitle: "We thrive on solving problems and tackling challenges.",
    description:
      "When the path isn’t clear, we think creatively, try new ideas, and adapt quickly.",
    img: "https://assets.bairesdev.com//image/upload/c_limit,w_1920/dpr_auto/f_auto/q_auto/v1/www/core/we_value_3_1750182253?_a=BAVAfVDW0",
  },
  {
    id: 4,
    title: "Own it & Learn from it",
    subtitle: "We take responsibility for our work and our growth.",
    description:
      "From start to finish, we own the results and learn from every mistake. Feedback helps us improve, so we actively seek it and use it to get better.",
    img: "https://assets.bairesdev.com//image/upload/c_limit,w_1920/dpr_auto/f_auto/q_auto/v1/www/core/we_value_4_1750182252?_a=BAVAfVDW0",
  },
  {
    id: 5,
    title: "No Surprises, No Silos",
    subtitle: "We communicate early and often.",
    description:
      "We share updates, raise risks, and involve the right people at the right time. Clear, open communication keeps teams aligned across roles and time zones.",
    img: "https://assets.bairesdev.com//image/upload/c_limit,w_1920/dpr_auto/f_auto/q_auto/v1/www/core/we_value_5_1750182251?_a=BAVAfVDW0",
  },
  {
    id: 6,
    title: "Raise the Bar",
    subtitle: "We’re passionate about improving what we do.",
    description:
      "We explore new solutions, learn from them, and keep pushing ourselves to do better every time.",
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
                Built on strong values,{" "}
                <span className="text-orange-500">driven by talent .</span>
              </h1>
              <p className="text-2xl text-gray-600 leading-relaxed">
               At Sevenunique, the way we work matters just as much as what we build.
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
               These values guide our decisions, fuel our ambition, and connect us across teams and locations. 
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
               Our values reflect who we are today, not just who we aim to be. They guide how we work, shape our actions, and drive success for both our team and our clients. 
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
                Our beliefs guide us, and our values shape how we act. Together, they create a workplace where we are challenged, supported, and motivated to do our best work.
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

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3  rounded-xl transition-all duration-300">
                  <Link href="/schedule-a-call-page" className="py-3">
                    {" "}
                    Apply now{" "}
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
