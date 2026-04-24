"use client";

import { useState } from "react";

const TechCard = ({ title, icon, color, isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`
        flex flex-col items-center justify-center gap-4
        min-h-[120px] p-5 rounded-xl cursor-pointer
        transition-all duration-200
        ${
          isActive
            ? "border-2 border-[#FF6A3D] shadow-md"
            : "border border-gray-200 hover:border-gray-300"
        }
        bg-white
      `}
    >
      <div
        className={`w-10 h-10 ${color}`}
        style={{
          WebkitMask: `url(${icon}) no-repeat center`,
          mask: `url(${icon}) no-repeat center`,
          WebkitMaskSize: "contain",
          maskSize: "contain",
        }}
      />

      <span className="text-center text-[12px] font-medium text-gray-700 leading-tight">
        {title}
      </span>
    </div>
  );
};

// Reusable Profile Card Component
const ProfileCard = ({ img, name, role, experience }) => {
  return (
    <div className="w-full max-w-[260px] border rounded-lg overflow-hidden bg-white mt-10">
      {/* TOP BG */}
      <div className="h-16 bg-[#f3d6cc] relative flex justify-center">
        {/* IMAGE */}
        <div className="absolute -bottom-10 w-28 h-28 rounded-full overflow-hidden border-4 border-white">
          <img src={img} alt={name} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* CONTENT */}
      <div className="pt-14 pb-4 px-3 text-center">
        <h3 className="font-bold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-600">{role}</p>
        <p className="text-xs text-gray-500 mt-1">{experience}</p>
      </div>
    </div>
  );
};

// Main Component
export default function CircleLeadersSection() {
  // List of technologies for left grid
  const techList = [
    {
      title: "Frontend Circle Leaders",
      icon: "https://assets.bairesdev.com/image/upload/v1/www/icons/Code.svg",
      color: "bg-orange-500",
    },
    {
      title: "UX/UI Circle Leaders",
      icon: "https://assets.bairesdev.com/image/upload/v1/www/icons/Image.svg",
      color: "bg-green-500",
    },
    {
      title: "Data Engineering Circle Leaders",
      icon: "https://assets.bairesdev.com/image/upload/v1/www/icons/Database.svg",
      color: "bg-yellow-500",
    },
    {
      title: "Quality Assurance Circle Leaders",
      icon: "https://assets.bairesdev.com/image/upload/v1/www/icons/DoneAll.svg",
      color: "bg-blue-400",
    },
    {
      title: "AI & ML Circle Leaders",
      icon: "https://assets.bairesdev.com/image/upload/v1/www/icons/BubbleChart.svg",
      color: "bg-orange-600",
    },
    {
      title: "DevOps Circle Leaders",
      icon: "https://assets.bairesdev.com/image/upload/v1/www/icons/FlipToBack.svg",
      color: "bg-green-400",
    },
    {
      title: "Backend Circle Leaders",
      icon: "https://assets.bairesdev.com/image/upload/v1/www/icons/Code.svg",
      color: "bg-orange-400",
    },
    {
      title: "Agile Circle Leaders",
      icon: "https://assets.bairesdev.com/image/upload/v1/www/icons/Hub.svg",
      color: "bg-yellow-400",
    },
    {
      title: "Product Circle Leaders",
      icon: "https://assets.bairesdev.com/image/upload/v1/www/icons/EventAvailable.svg",
      color: "bg-blue-500",
    },
  ];

  // Data mapping for right panel based on selected technology
  const leadersData = {
    "Frontend Circle Leaders": {
      title: "Frontend Circle Leaders",
      leaders: [
        {
          name: "João B.",
          role: "Tech Lead",
          experience: "16 years experience",
          img: "https://assets.bairesdev.com/image/upload/v1/www/static/circles/leaders/Christian-Fernandes_jm9fbp",
        },
        {
          name: "Emilio D.",
          role: "Sr. Frontend Developer",
          experience: "10 years experience",
          img: "https://assets.bairesdev.com/image/upload/v1/www/static/circles/leaders/Diana-Remache_pkbfma",
        },
      ],
    },
    "UX/UI Circle Leaders": {
      title: "UX/UI Circle Leaders",
      leaders: [
        {
          name: "Anna K.",
          role: "Lead UX Designer",
          experience: "12 years experience",
        },
        {
          name: "Carlos M.",
          role: "Senior UI Designer",
          experience: "8 years experience",
        },
      ],
    },
    "Data Engineering Circle Leaders": {
      title: "Data Engineering Circle Leaders",
      leaders: [
        {
          name: "Sophia L.",
          role: "Data Architect",
          experience: "15 years experience",
        },
        {
          name: "Liam W.",
          role: "Senior Data Engineer",
          experience: "9 years experience",
        },
      ],
    },
    "Quality Assurance Circle Leaders": {
      title: "Quality Assurance Circle Leaders",
      leaders: [
        {
          name: "Elena R.",
          role: "QA Director",
          experience: "14 years experience",
        },
        {
          name: "David P.",
          role: "Senior QA Engineer",
          experience: "7 years experience",
        },
      ],
    },
    "AI & ML Circle Leaders": {
      title: "AI & ML Circle Leaders",
      leaders: [
        {
          name: "Alex T.",
          role: "AI Research Lead",
          experience: "18 years experience",
        },
        {
          name: "Nina S.",
          role: "ML Engineer",
          experience: "6 years experience",
        },
      ],
    },
    "DevOps Circle Leaders": {
      title: "DevOps Circle Leaders",
      leaders: [
        {
          name: "Marco V.",
          role: "DevOps Lead",
          experience: "13 years experience",
        },
        {
          name: "Julia B.",
          role: "Cloud Architect",
          experience: "11 years experience",
        },
      ],
    },
    "Backend Circle Leaders": {
      title: "Backend Circle Leaders",
      leaders: [
        {
          name: "Ricardo N.",
          role: "Backend Lead",
          experience: "17 years experience",
        },
        {
          name: "Camila F.",
          role: "Senior Backend Dev",
          experience: "9 years experience",
        },
      ],
    },
    "Agile Circle Leaders": {
      title: "Agile Circle Leaders",
      leaders: [
        {
          name: "Sofia M.",
          role: "Agile Coach",
          experience: "12 years experience",
        },
        {
          name: "Oscar H.",
          role: "Scrum Master",
          experience: "8 years experience",
        },
      ],
    },
    "Product Circle Leaders": {
      title: "Product Circle Leaders",
      leaders: [
        {
          name: "Tom G.",
          role: "Product Director",
          experience: "16 years experience",
        },
        {
          name: "Lisa R.",
          role: "Senior PM",
          experience: "10 years experience",
        },
      ],
    },
  };

  const [activeTech, setActiveTech] = useState(techList[0].title);
  const currentData = leadersData[activeTech];

  return (
    <section className="bg-gray-100 min-h-screen py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Meet our Circle Leaders
          </h1>
          <p className="text-gray-500 text-base mt-3 max-w-2xl">
            These talented professionals are the top experts in their respective
            technologies at BairesDev.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* LEFT SIDE: Grid of Cards */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {techList.map((tech) => (
                <TechCard
                  key={tech.title}
                  title={tech.title}
                  icon={tech.icon}
                  color={tech.color}
                  isActive={activeTech === tech.title}
                  onClick={() => setActiveTech(tech.title)}
                />
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: Highlighted Container */}
          <div className="w-full lg:w-1/2">
            <div className="border-2 border-[#FF6A3D] rounded-2xl bg-white">
              {/* Inner Padding */}
              <div className="p-6 md:p-8">
                {/* Header with Icon and Title */}
                <div className="flex items-center justify-center gap-3 mb-8 mt-2">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-[#FF6A3D]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">
                    {currentData.title}
                  </h2>
                </div>

                {/* Two Profile Cards */}
                <div className="flex flex-col sm:flex-row gap-6">
                  {currentData.leaders.map((leader, idx) => (
                    <ProfileCard
                      key={idx}
                      name={leader.name}
                      role={leader.role}
                      experience={leader.experience}
                      img={leader.img}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Left Link */}
        <div className="mt-12">
          <a
            href="/about-us/Leadership"
            className="inline-flex items-center text-[#1a1a1a] font-semibold border-b border-[#242323] pb-1 hover:opacity-80 transition-all"
          >
            Get to Know Our Community →
          </a>
        </div>
      </div>
    </section>
  );
}
