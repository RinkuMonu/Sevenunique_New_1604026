"use client";
import { HomeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { FaAngleRight } from "react-icons/fa";

const categories = [
  { id: "technology", label: "Technology Solutions" },
  { id: "management", label: "Management & Growth" },
  { id: "employer", label: "Employer & Brand Citizenship" },
];

const featuredAwards = [
  {
    logo: "https://assets.bairesdev.com//image/upload/c_limit,w_180/dpr_auto/f_auto/q_auto/v1/www/core/Inc500white_143c84388d?_a=BAVAfVDW0",
    title: "Top Software Development Company",
    year: "2024",
  },
  {
    logo: "https://assets.bairesdev.com//image/upload/c_limit,w_180/fl_sanitize/v1/www/core/clutch_software_developer_6c18c23f65.svg?_a=BAVAfVDW0",
    title: "Inc. 5000 Fastest Growing Companies",
    year: "2024",
  },
  {
    logo: "https://assets.bairesdev.com//image/upload/c_limit,w_180/fl_sanitize/v1/www/core/CIO_100_8e2cb7f330.svg?_a=BAVAfVDW0",
    title: "Great Place to Work Certified",
    year: "2024",
  },
  {
    logo: "https://assets.bairesdev.com//image/upload/c_limit,w_180/fl_sanitize/v1/www/core/EY_43aa5098c6.svg?_a=BAVAfVDW0",
    title: "Forbes Best Employers for Diversity",
    year: "2024",
  },
];

const awardsByCategory = {
  technology: [
    {
      year: "2026",
      items: [
        {
          logo: "https://assets.bairesdev.com/uploads/2023/09/clutch-logo.svg",
          title: "Top Software Development Company",
          desc: "Recognized as a global leader in software development services by Clutch, based on client reviews and market presence.",
        },
        {
          logo: "https://assets.bairesdev.com/uploads/2023/09/goodfirms-logo.svg",
          title: "Top Software Development Company",
          desc: "GoodFirms ranked BairesDev among the top software development firms worldwide for its quality and delivery.",
        },
        {
          logo: "https://assets.bairesdev.com/uploads/2023/09/technavio-logo.svg",
          title: "Top IT Outsourcing Company",
          desc: "Technavio recognized BairesDev as one of the most impactful IT outsourcing vendors in North America.",
        },
      ],
    },
    {
      year: "2025",
      items: [
        {
          logo: "https://assets.bairesdev.com/uploads/2023/09/clutch-logo.svg",
          title: "Global Leader in IT Services",
          desc: "Clutch named BairesDev a global leader for IT staffing and software outsourcing.",
        },
        {
          logo: "https://assets.bairesdev.com/uploads/2023/09/g2-logo.svg",
          title: "High Performer in IT Staffing",
          desc: "G2 users rated BairesDev highly for client satisfaction and service quality in technology staffing.",
        },
        {
          logo: "https://assets.bairesdev.com/uploads/2023/09/forbes-logo.svg",
          title: "America's Best Startup Employers",
          desc: "Forbes recognized BairesDev for exceptional workplace culture and employee satisfaction.",
        },
        {
          logo: "https://assets.bairesdev.com/uploads/2023/09/iaop-logo.svg",
          title: "Best of The Global Outsourcing 100",
          desc: "IAOP honored BairesDev in its annual list of the world's best outsourcing service providers.",
        },
      ],
    },
    {
      year: "2024",
      items: [
        {
          logo: "https://assets.bairesdev.com/uploads/2023/09/clutch-logo.svg",
          title: "Top Custom Software Development",
          desc: "Clutch recognized BairesDev for excellence in custom software development services.",
        },
        {
          logo: "https://assets.bairesdev.com/uploads/2023/09/goodfirms-logo.svg",
          title: "Top Artificial Intelligence Company",
          desc: "GoodFirms highlighted BairesDev's AI capabilities and client outcomes.",
        },
      ],
    },
  ],
  management: [
    {
      year: "2026",
      items: [
        {
          logo: "https://assets.bairesdev.com/uploads/2023/09/inc5000-logo.svg",
          title: "Inc. 5000 Fastest Growing",
          desc: "BairesDev earned a spot on the Inc. 5000 list for consecutive years, marking rapid revenue growth.",
        },
        {
          logo: "https://assets.bairesdev.com/uploads/2023/09/financial-times-logo.svg",
          title: "Americas' Fastest Growing Companies",
          desc: "Financial Times named BairesDev among the fastest-growing companies in the Americas.",
        },
      ],
    },
    {
      year: "2025",
      items: [
        {
          logo: "https://assets.bairesdev.com/uploads/2023/09/inc5000-logo.svg",
          title: "Inc. 5000 Fastest Growing Companies",
          desc: "Recognized again for sustained growth and market leadership.",
        },
      ],
    },
  ],
  employer: [
    {
      year: "2026",
      items: [
        {
          logo: "https://assets.bairesdev.com/uploads/2023/09/gptw-logo.svg",
          title: "Great Place to Work Certified",
          desc: "BairesDev was certified as a Great Place to Work based on extensive employee surveys.",
        },
        {
          logo: "https://assets.bairesdev.com/uploads/2023/09/forbes-logo.svg",
          title: "Best Employers for Diversity",
          desc: "Forbes recognized BairesDev for its inclusive culture and diverse workforce initiatives.",
        },
      ],
    },
    {
      year: "2025",
      items: [
        {
          logo: "https://assets.bairesdev.com/uploads/2023/09/gptw-logo.svg",
          title: "Great Place to Work — Argentina",
          desc: "Certified for the second year in Argentina, acknowledging the company's outstanding work environment.",
        },
        {
          logo: "https://assets.bairesdev.com/uploads/2023/09/comparably-logo.svg",
          title: "Best Company Culture",
          desc: "Comparably awarded BairesDev for its strong internal culture and employee engagement.",
        },
        {
          logo: "https://assets.bairesdev.com/uploads/2023/09/comparably-logo.svg",
          title: "Best Company for Women",
          desc: "Comparably recognized BairesDev for gender equity programs and female leadership development.",
        },
      ],
    },
  ],
};

function FallbackLogo({ label }) {
  return (
    <div className="w-16 h-14 bg-gray-100 rounded flex items-center justify-center text-gray-400 text-xs font-medium">
      {label.slice(0, 3)}
    </div>
  );
}

function AwardRow({ logo, title, desc }) {
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className="flex items-start gap-5 py-5 border-b border-gray-100 group cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="flex-shrink-0 overflow-hidden transition-all duration-300 ease-in-out"
        style={{ width: hovered ? "96px" : "64px" }}
      >
        {imgError ? (
          <FallbackLogo label={title} />
        ) : (
          <Image
            width={400}
            height={400}
            // src={logo}
            src="https://assets.bairesdev.com//image/upload/c_limit,w_1920/dpr_auto/f_auto/q_auto/v1/www/core/Inc_Power_Partner_2025_Alt_Badge_A00_b31cedb2f6?_a=BAVAfVDW0"
            alt={title}
            className="h-14 object-contain"
            style={{
              width: hovered ? "96px" : "64px",
              transition: "width 0.3s ease",
            }}
            onError={() => setImgError(true)}
          />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-semibold text-gray-900 leading-snug mb-1">
          {title}
        </h4>
        <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function FeaturedAwardLogo({ logo, title }) {
  const [err, setErr] = useState(false);
  if (err) {
    return (
      <div className="h-14 w-full flex items-center justify-center">
        <div className="w-20 h-10 bg-gray-700 rounded flex items-center justify-center text-gray-400 text-xs">
          {title.slice(0, 6)}
        </div>
      </div>
    );
  }
  return (
    <Image
      height={300}
      width={400}
      src={logo}
      alt={title}
      className="max-h-16 max-w-full object-contain filter brightness-0 invert opacity-80"
      onError={() => setErr(true)}
    />
  );
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState("technology");
  const [mobileTab, setMobileTab] = useState("technology");
  const contentRef = useRef(null);

  const desktopData = awardsByCategory[activeCategory] ?? [];
  const mobileData = awardsByCategory[mobileTab] ?? [];

  return (
    <div
      className="min-h-screen bg-[#f5f5f5]"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      {/* ── HERO ── */}
      <div className="flex items-center gap-5 pt-5 pl-10">
        <HomeIcon size={16} className="text-gray-500 font-semibold" />{" "}
        <FaAngleRight size={16} className="text-gray-500 font-semibold" />
        <span className="text-gray-800 font-semibold">Awards</span>
      </div>

      <section className="relative bg-[#f5f5f5] pt-20 pb-52 px-6 overflow-hidden text-center h-[90vh]">
        {/* TROPHY IMAGE (CENTER BACKGROUND) */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <Image
            src="https://assets.bairesdev.com/image/upload/c_limit,w_429/dpr_auto/f_auto/q_auto/v1/www/core/awards_hero_98b9563c32"
            width={420}
            height={600}
            alt="trophy"
            className="object-contain"
          />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-3xl mx-auto">
          {/* SMALL LABEL */}
          <p className="text-[12px] tracking-[0.25em] uppercase text-gray-400 mb-6 font-semibold">
            Awards & Recognitions
          </p>

          {/* HEADING */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#111827] leading-tight mb-6 tracking-tight">
            Welcome to our trophy cabinet
            <span className="text-orange-500">.</span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            We are proud to be recognized by many organizations for our client
            service, growth rate, and company culture.
          </p>
        </div>
      </section>

      {/* ── FEATURED AWARDS CARD ── */}
      <section className="relative z-10 px-4 sm:px-8 lg:px-20 mt-24">
        <div className="max-w-8xl mx-auto bg-gray-950 rounded-2xl px-8 py-10 md:px-14 md:py-12 shadow-2xl">
          <h2 className="text-center text-orange-500 text-2xl font-semibold tracking-wide mb-10">
            Featured Awards &amp; Recognitions
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
            {featuredAwards.map((award, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="h-18 w-full flex items-center justify-center mb-5">
                  <FeaturedAwardLogo logo={award.logo} title={award.title} />
                </div>
                <div className="w-12 h-px bg-orange-700 mb-4" />
                <p className="text-gray-300 text-md font-medium leading-snug mb-1.5">
                  {award.title}
                </p>
                <p className="text-gray-300 text-md">{award.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-20 pt-20 pb-24">
        {/* Mobile tabs */}
        <div className="flex md:hidden border-b border-gray-200 mb-10 overflow-x-auto gap-0">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setMobileTab(cat.id)}
              className={`flex-shrink-0 px-5 py-3 text-sm font-medium whitespace-nowrap border-b-2 -mb-px transition-all duration-200 ${
                mobileTab === cat.id
                  ? "border-orange-500 text-orange-500"
                  : "border-transparent text-gray-400 hover:text-gray-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="flex gap-14">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-10 space-y-0.5">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`w-full text-left px-4 py-3 text-sm font-medium rounded-r-lg border-l-2 transition-all duration-200 ${
                    activeCategory === cat.id
                      ? "border-orange-500 text-gray-900 bg-orange-50/60"
                      : "border-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-50"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </aside>

          {/* Desktop Content */}
          <div className="hidden md:block flex-1 min-w-0" ref={contentRef}>
            {desktopData.map((group) => (
              <div key={group.year} className="mb-10">
                <h3 className="text-2xl font-black text-gray-950 mb-1 tracking-tight">
                  {group.year}
                </h3>
                {group.items.map((item, idx) => (
                  <AwardRow key={idx} {...item} />
                ))}
              </div>
            ))}
          </div>

          {/* Mobile Content */}
          <div className="md:hidden flex-1 min-w-0">
            {mobileData.map((group) => (
              <div key={group.year} className="mb-10">
                <h3 className="text-2xl font-black text-gray-950 mb-1 tracking-tight">
                  {group.year}
                </h3>
                {group.items.map((item, idx) => (
                  <AwardRow key={idx} {...item} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="w-full relative -mt-20 ">
        {/* TOP SECTION */}
        <div className="bg-[#f5f5f5] h-[40vh]" />

        {/* CENTER IMAGE (OVERLAP FIX) */}
        <div className="absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="">
            <img
              src="https://assets.bairesdev.com//image/upload/c_limit,w_1920/dpr_auto/f_auto/q_auto/v1/www/static/circles-bottom-cta_suha1s?_a=BAVAfVDW0"
              alt=""
              className="w-[360px] object-cover"
            />
          </div>
        </div>

        {/* BLACK SECTION */}
        <div className="bg-black pt-42 pb-20 md:pt-40 md:pb-24 text-center flex flex-col items-center gap-10">
          {/* HEADING */}
          <p className="text-white font-bold text-2xl  leading-tight max-w-3xl">
            Accelerate your roadmap with an
            <span className="text-orange-500">award-winning</span>. software
            development partner.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Link
              href="0/schedule-a-call-page"
              className="bg-[#13926A] hover:bg-[#0a825c] px-5 py-3 rounded-lg text-white font-semibold transition"
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function DevIllustration() {
  return (
    <svg
      viewBox="0 0 280 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
    >
      {/* Monitor */}
      <rect
        x="20"
        y="30"
        width="200"
        height="140"
        rx="10"
        fill="#1F2937"
        stroke="#374151"
        strokeWidth="2"
      />
      <rect x="30" y="42" width="180" height="112" rx="5" fill="#111827" />
      {/* Code lines */}
      <rect
        x="44"
        y="60"
        width="60"
        height="7"
        rx="3"
        fill="#4ADE80"
        opacity="0.8"
      />
      <rect
        x="44"
        y="76"
        width="100"
        height="7"
        rx="3"
        fill="#60A5FA"
        opacity="0.8"
      />
      <rect
        x="44"
        y="92"
        width="80"
        height="7"
        rx="3"
        fill="#F59E0B"
        opacity="0.7"
      />
      <rect
        x="44"
        y="108"
        width="120"
        height="7"
        rx="3"
        fill="#60A5FA"
        opacity="0.6"
      />
      <rect
        x="44"
        y="124"
        width="50"
        height="7"
        rx="3"
        fill="#4ADE80"
        opacity="0.5"
      />
      <rect
        x="44"
        y="140"
        width="90"
        height="7"
        rx="3"
        fill="#F87171"
        opacity="0.5"
      />
      {/* Stand */}
      <rect x="108" y="170" width="24" height="30" rx="2" fill="#374151" />
      <rect x="82" y="198" width="76" height="10" rx="4" fill="#4B5563" />
      {/* Person sitting */}
      <ellipse cx="200" cy="232" rx="30" ry="6" fill="#1F2937" />
      {/* Body */}
      <rect x="182" y="190" width="36" height="46" rx="10" fill="#374151" />
      {/* Head */}
      <circle cx="200" cy="174" r="20" fill="#4B5563" />
      <circle cx="194" cy="170" r="3" fill="#9CA3AF" />
      <circle cx="206" cy="170" r="3" fill="#9CA3AF" />
      <path
        d="M194 182 Q200 187 206 182"
        stroke="#9CA3AF"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Hair */}
      <path d="M181 168 Q183 152 200 154 Q217 152 219 168" fill="#1F2937" />
      {/* Arms */}
      <rect
        x="162"
        y="196"
        width="20"
        height="10"
        rx="5"
        fill="#374151"
        transform="rotate(-20 162 196)"
      />
      <rect
        x="218"
        y="196"
        width="20"
        height="10"
        rx="5"
        fill="#374151"
        transform="rotate(20 218 196)"
      />
      {/* Laptop */}
      <rect
        x="160"
        y="226"
        width="80"
        height="52"
        rx="5"
        fill="#1F2937"
        stroke="#374151"
        strokeWidth="1.5"
      />
      <rect x="166" y="232" width="68" height="38" rx="3" fill="#111827" />
      <rect
        x="172"
        y="240"
        width="30"
        height="5"
        rx="2"
        fill="#4ADE80"
        opacity="0.7"
      />
      <rect
        x="172"
        y="250"
        width="50"
        height="5"
        rx="2"
        fill="#60A5FA"
        opacity="0.6"
      />
      <rect
        x="172"
        y="260"
        width="40"
        height="5"
        rx="2"
        fill="#F59E0B"
        opacity="0.5"
      />
      {/* Laptop base */}
      <rect x="148" y="276" width="104" height="8" rx="3" fill="#374151" />
      {/* Stars / award */}
      <text x="30" y="260" fontSize="18" fill="#F59E0B" opacity="0.9">
        ★
      </text>
      <text x="240" y="100" fontSize="14" fill="#4ADE80" opacity="0.7">
        ★
      </text>
      <text x="14" y="150" fontSize="12" fill="#60A5FA" opacity="0.5">
        ★
      </text>
    </svg>
  );
}
