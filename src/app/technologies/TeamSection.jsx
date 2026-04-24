"use client";

import Image from "next/image";
import React, { useState } from "react";
import { MdLockOutline, MdOutlineVerified } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";

// Icon mapping
const iconMap = {
  MdOutlineVerified: MdOutlineVerified,
  LuLayoutDashboard: LuLayoutDashboard,
  MdLockOutline: MdLockOutline,
};

// Fallback tabs (optional safety)
const defaultTabs = [];

const TeamSection = ({ teamSection }) => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = teamSection?.tabs || defaultTabs;

  // ✅ FIX: define teamImages properly
  const teamImages = teamSection?.teamImages || [];

  // Helper function to get icon component
  const getIconComponent = (iconName) => {
    return iconMap[iconName] || MdOutlineVerified;
  };

  return (
    <section className="bg-[#f5f5f5] py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT SIDE */}
        <div>
          {/* TOP TEXT */}
          <p className="mb-4 text-md font-bold tracking-widest text-black">
            {teamSection?.sectionLabel}
          </p>

          {/* AVATARS */}
          <div className="mb-6 flex flex-wrap items-center gap-4">
            <div className="flex flex-wrap items-center gap-2 sm:-space-x-3 sm:gap-0">
              {teamImages.length > 0 &&
                teamImages.map((img, i) => (
                  <div
                    key={i}
                    className="flex h-[50px] w-[50px] items-end justify-center overflow-hidden rounded-full border-2 border-white"
                    style={{ backgroundColor: img?.bg }}
                  >
                    {/* ✅ Safe image render */}
                    {img?.src && (
                      <Image
                        src={`/images/${img.src}`}
                        alt="team"
                        width={50}
                        height={50}
                        className="h-full w-full object-contain"
                      />
                    )}
                  </div>
                ))}
            </div>

            <div className="text-sm text-gray-600">
              <p>Backed by</p>
              <p className="font-semibold text-black">4000+ devs</p>
            </div>
          </div>

          {/* HEADING */}
          <h2 className="text-4xl font-semibold leading-tight text-black mb-4">
            {teamSection?.heading}
          </h2>

          {/* DESCRIPTION */}
          <p className="text-black leading-relaxed mb-8">
            {teamSection?.description}
          </p>

          {/* HIGHLIGHTS */}
          {teamSection?.highlights?.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {teamSection.highlights.map((highlight, idx) => (
                <span
                  key={idx}
                  className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700 shadow-sm border border-gray-200"
                >
                  {highlight}
                </span>
              ))}
            </div>
          )}

          {/* BUTTON */}
          <button className="bg-[#128662] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#127455] transition cursor-pointer">
            <span className="font-bold text-[20px]">
              Speak With Our Team
            </span>
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div>
          {/* TABS */}
          <div className="mb-6 flex gap-4">
            {tabs.map((tab) => {
              const Icon = getIconComponent(tab.icon);

              return (
                <div
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`cursor-pointer border rounded-xl p-5 w-full transition-all duration-300 ${
                    activeTab === tab.id
                      ? "border-orange-500"
                      : "border-gray-300 hover:border-orange-400"
                  }`}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#f5f6f7]">
                    <Icon className="h-6 w-6 text-orange-500" />
                  </div>

                  <p className="font-medium text-black text-sm leading-snug">
                    {tab.title}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CONTENT BOX */}
          <div className="border border-orange-500 rounded-xl p-6 text-black leading-relaxed shadow-sm">
            {tabs.find((tab) => tab.id === activeTab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;