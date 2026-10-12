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
  <section className="bg-[#f5f5f5] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
  <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-start">

    {/* LEFT SIDE */}
    <div>
      {/* TOP TEXT */}
      <p className="mb-4 text-xs sm:text-sm md:text-base font-bold uppercase tracking-widest text-black">
        {teamSection?.sectionLabel}
      </p>

      {/* AVATARS */}
      <div className="mb-6 flex flex-wrap items-center gap-4">
        <div className="text-sm text-gray-600">
          <p>Backed by</p>
          <p className="font-semibold text-black">
            4000+ devs
          </p>
        </div>
      </div>

      {/* HEADING */}
      <h2 className="mb-5 text-3xl font-semibold leading-tight text-black sm:text-4xl lg:text-5xl">
        {teamSection?.heading}
      </h2>

      {/* DESCRIPTION */}
      <p className="mb-8 text-base leading-7 text-black sm:text-lg">
        {teamSection?.description}
      </p>

      {/* HIGHLIGHTS */}
      {teamSection?.highlights?.length > 0 && (
        <div className="mb-8 flex flex-wrap gap-2">
          {teamSection.highlights.map((highlight, idx) => (
            <span
              key={idx}
              className="rounded-full border border-gray-200 bg-white px-3 py-2 text-xs sm:text-sm font-medium text-gray-700 shadow-sm"
            >
              {highlight}
            </span>
          ))}
        </div>
      )}

      {/* BUTTON */}
      <button className="w-full sm:w-auto rounded-lg bg-[#128662] px-6 py-3 transition hover:bg-[#127455] cursor-pointer">
        <span className="text-base font-bold text-white sm:text-lg lg:text-xl">
          Speak With Our Team
        </span>
      </button>
    </div>

    {/* RIGHT SIDE */}
    <div>

      {/* TABS */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {tabs.map((tab) => {
          const Icon = getIconComponent(tab.icon);

          return (
            <div
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`cursor-pointer rounded-xl border p-4 sm:p-5 transition-all duration-300 ${
                activeTab === tab.id
                  ? "border-orange-500"
                  : "border-gray-300 hover:border-orange-400"
              }`}
            >
              <div className="mb-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-[#f5f6f7]">
                <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500" />
              </div>

              <p className="text-sm font-medium leading-snug text-black sm:text-base">
                {tab.title}
              </p>
            </div>
          );
        })}
      </div>

      {/* CONTENT BOX */}
      <div className="rounded-xl border border-orange-500 p-5 sm:p-6 text-sm sm:text-base leading-7 text-black shadow-sm">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  </div>
</section>
  );
};

export default TeamSection;