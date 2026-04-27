"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { MdLockOutline, MdOutlineVerified } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";

const teamImages = [
  { src: "img1.png", bg: "#FBB39E" },
  { src: "img2.png", bg: "#90BBF3" },
  { src: "img3.png", bg: "#8FD5BF" },
  { src: "img4.png", bg: "#FFD785" },
  { src: "img5.png", bg: "#FDDC43" },
  { src: "img6.png", bg: "#CDE8FA" },
];

const tabs = [
  {
    id: 1,
    icon: MdOutlineVerified,
    title: "Top 1% Senior AI Talent",
    content:
      "Our AI experts have an average of 8+ years of experience in data science, machine learning techniques, multi-layered neural networks, and other disciplines vital to providing exceptional AI development services. Every engineer passes a multi-stage evaluation covering multiple aspects of AI model architecture and development. We have a large talent pool and work on multiple engagements at any given time, allowing our engineers to develop highly specialized skill sets for specific AI projects.",
  },
  {
    id: 2,
    icon: LuLayoutDashboard,
    title: "Production-Grade AI Delivery",
    content:
      "We ensure AI solutions are scalable, reliable, and production-ready. Our teams follow best engineering practices, CI/CD pipelines, and rigorous testing to deliver enterprise-grade systems.",
  },
  {
    id: 3,
    icon: MdLockOutline,
    title: "Security, Governance, and Compliance",
    content:
      "We prioritize data security, regulatory compliance, and governance frameworks. Our AI systems align with enterprise standards ensuring safety and transparency.",
  },
];

export default function AiTeamSection({ teamSection }) {
  const [activeTab, setActiveTab] = useState(1);
  const sectionTabs = teamSection?.tabs || tabs;

  return (
    <section className="bg-[#f5f5f5] py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT SIDE */}
        <div>

          {/* TOP SMALL TEXT + AVATARS */}
          <p className="mb-4 text-md font-bold tracking-widest text-black">
            {teamSection?.eyebrow || "Our AI development team"}
          </p>

          <div className="mb-6 flex flex-wrap items-center gap-4">
            <div className="flex flex-wrap items-center gap-2 sm:-space-x-3 sm:gap-0">
              {teamImages.map((img, i) => (
                <div
                  key={i}
                  className="flex h-[50px] w-[50px] items-end justify-center overflow-hidden rounded-full border-2 border-white"
                  style={{ backgroundColor: img.bg }}
                >
                  <Image
                    src={`/images/${img.src}`}
                    alt="team"
                    width={50}
                    height={50}
                    className="h-full w-full object-contain"
                  />
                </div>
              ))}
            </div>

            <div className="text-sm text-gray-600">
              <p>{teamSection?.supporterLabel || "Backed by"}</p>
              <p className="font-semibold text-black">
                {teamSection?.supporterValue || "4000+ devs"}
              </p>
            </div>
          </div>

          {/* HEADING */}
          <h2 className="text-4xl font-semibold leading-tight text-black mb-4">
            {teamSection?.heading ||
              "Why tech leaders choose our AI development teams:"}
          </h2>

          {/* DESCRIPTION */}
          <p className="text-black leading-relaxed mb-8">
            {teamSection?.description ||
              "We help organizations move from experimentation to execution, transforming AI prototypes into production-ready solutions. Backed by deep expertise, our teams deliver enterprise-grade solutions that integrate with your existing systems."}
          </p>

          {/* BUTTON */}
         

          <Link
            href="/schedule-a-call-page"
            className="inline-block bg-[#128662] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#127455] transition cursor-pointer"
          >
            <span className="font-bold text-[20px]">
              {teamSection?.buttonLabel || "Speak With Our Team"}
            </span>
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div>

          {/* TABS */}
          <div className="mb-6 flex gap-4">
            {sectionTabs.map((tab, index) => (
              <div
                key={tab.id || tab.title}
                onClick={() => setActiveTab(tab.id || index + 1)}
                className={`cursor-pointer border rounded-xl p-5 w-full transition-all duration-300
                  ${activeTab === (tab.id || index + 1)
                    ? "border-orange-500"
                    : "border-gray-300 hover:border-orange-400"
                  }`}
              >
                {(() => {
                  const Icon = tab.icon || MdOutlineVerified; // fallback icon

                  return (
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#f5f6f7]">
                      <Icon className="h-6 w-6 text-orange-500" />
                    </div>
                  );
                })()}
                <p className="font-medium text-black text-sm leading-snug">
                  {tab.title}
                </p>
              </div>
            ))}
          </div>

          {/* CONTENT BOX */}
          <div className="border border-orange-500 rounded-xl p-6 text-black leading-relaxed shadow-sm">
            {sectionTabs.find((tab, index) => (tab.id || index + 1) === activeTab)
              ?.content}
          </div>
        </div>
      </div>
    </section>
  );

}
