// ExcellenceAwards.jsx
// Next.js (App Router) — Tailwind CSS — JSX

"use client";

// SVG badge components matching the screenshot's award logos
function StevieAwardBadge() {
  return (
    <svg
      viewBox="0 0 120 130"
      width="110"
      height="120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Laurel wreath left */}
      <g stroke="#1a1a1a" strokeWidth="1.2" fill="none">
        <path
          d="M18 65 Q10 55 14 44 Q18 50 18 65Z"
          fill="#1a1a1a"
          opacity="0.85"
        />
        <path
          d="M20 72 Q10 65 11 53 Q16 58 20 72Z"
          fill="#1a1a1a"
          opacity="0.85"
        />
        <path
          d="M24 78 Q13 74 12 62 Q18 66 24 78Z"
          fill="#1a1a1a"
          opacity="0.85"
        />
        <path
          d="M30 83 Q19 81 16 70 Q22 73 30 83Z"
          fill="#1a1a1a"
          opacity="0.85"
        />
        <path
          d="M16 58 Q12 46 18 37 Q20 44 16 58Z"
          fill="#1a1a1a"
          opacity="0.75"
        />
        <path
          d="M19 50 Q18 37 26 30 Q26 38 19 50Z"
          fill="#1a1a1a"
          opacity="0.7"
        />
      </g>
      {/* Laurel wreath right */}
      <g stroke="#1a1a1a" strokeWidth="1.2" fill="none">
        <path
          d="M102 65 Q110 55 106 44 Q102 50 102 65Z"
          fill="#1a1a1a"
          opacity="0.85"
        />
        <path
          d="M100 72 Q110 65 109 53 Q104 58 100 72Z"
          fill="#1a1a1a"
          opacity="0.85"
        />
        <path
          d="M96 78 Q107 74 108 62 Q102 66 96 78Z"
          fill="#1a1a1a"
          opacity="0.85"
        />
        <path
          d="M90 83 Q101 81 104 70 Q98 73 90 83Z"
          fill="#1a1a1a"
          opacity="0.85"
        />
        <path
          d="M104 58 Q108 46 102 37 Q100 44 104 58Z"
          fill="#1a1a1a"
          opacity="0.75"
        />
        <path
          d="M101 50 Q102 37 94 30 Q94 38 101 50Z"
          fill="#1a1a1a"
          opacity="0.7"
        />
      </g>
      {/* Trophy cup */}
      <g fill="#1a1a1a">
        <path d="M52 28 Q60 18 68 28 L66 50 Q60 54 54 50Z" opacity="0.9" />
        <rect x="56" y="50" width="8" height="10" opacity="0.9" />
        <rect x="50" y="60" width="20" height="3" rx="1" opacity="0.9" />
        {/* Trophy handles */}
        <path
          d="M52 32 Q44 32 44 40 Q44 46 52 46"
          strokeWidth="2.5"
          stroke="#1a1a1a"
          fill="none"
          opacity="0.8"
        />
        <path
          d="M68 32 Q76 32 76 40 Q76 46 68 46"
          strokeWidth="2.5"
          stroke="#1a1a1a"
          fill="none"
          opacity="0.8"
        />
        {/* Star on trophy */}
        <polygon
          points="60,22 61.5,26.5 66,26.5 62.5,29 63.8,33.5 60,31 56.2,33.5 57.5,29 54,26.5 58.5,26.5"
          fill="white"
          opacity="0.95"
        />
      </g>
      {/* Banner */}
      <rect x="34" y="76" width="52" height="24" rx="3" fill="#1a1a1a" />
      <text
        x="60"
        y="85"
        textAnchor="middle"
        fill="white"
        fontSize="6"
        fontWeight="700"
        fontFamily="Arial"
      >
        2024 STEVIE
      </text>
      <text
        x="60"
        y="94"
        textAnchor="middle"
        fill="white"
        fontSize="6"
        fontWeight="700"
        fontFamily="Arial"
      >
        WINNER
      </text>
      {/* Bottom tie */}
      <path
        d="M48 100 L60 108 L72 100"
        stroke="#1a1a1a"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}

function GlobeeAwardBadge() {
  return (
    <svg
      viewBox="0 0 120 130"
      width="110"
      height="120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer circle */}
      <circle
        cx="60"
        cy="62"
        r="48"
        stroke="#1a1a1a"
        strokeWidth="1.5"
        fill="none"
      />
      <circle
        cx="60"
        cy="62"
        r="42"
        stroke="#1a1a1a"
        strokeWidth="0.8"
        fill="none"
      />
      {/* Laurel sprigs on outer ring */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => (
        <ellipse
          key={i}
          cx={60 + 45 * Math.cos((deg * Math.PI) / 180)}
          cy={62 + 45 * Math.sin((deg * Math.PI) / 180)}
          rx="4"
          ry="2"
          transform={`rotate(${deg}, ${60 + 45 * Math.cos((deg * Math.PI) / 180)}, ${62 + 45 * Math.sin((deg * Math.PI) / 180)})`}
          fill="#1a1a1a"
          opacity="0.7"
        />
      ))}
      {/* Globe */}
      <circle
        cx="60"
        cy="58"
        r="22"
        stroke="#1a1a1a"
        strokeWidth="1.3"
        fill="none"
      />
      <ellipse
        cx="60"
        cy="58"
        rx="11"
        ry="22"
        stroke="#1a1a1a"
        strokeWidth="1"
        fill="none"
      />
      <line x1="38" y1="58" x2="82" y2="58" stroke="#1a1a1a" strokeWidth="1" />
      <line
        x1="40"
        y1="48"
        x2="80"
        y2="48"
        stroke="#1a1a1a"
        strokeWidth="0.8"
      />
      <line
        x1="40"
        y1="68"
        x2="80"
        y2="68"
        stroke="#1a1a1a"
        strokeWidth="0.8"
      />
      {/* Text */}
      <text
        x="60"
        y="92"
        textAnchor="middle"
        fill="#1a1a1a"
        fontSize="9.5"
        fontWeight="800"
        fontFamily="Arial"
        letterSpacing="1"
      >
        GLOBEE
      </text>
      <text
        x="60"
        y="100"
        textAnchor="middle"
        fill="#1a1a1a"
        fontSize="5.5"
        fontWeight="400"
        fontFamily="Arial"
        letterSpacing="2"
      >
        ®
      </text>
      <text
        x="60"
        y="108"
        textAnchor="middle"
        fill="#1a1a1a"
        fontSize="7.5"
        fontWeight="600"
        fontFamily="Arial"
        letterSpacing="1.5"
      >
        AWARDS
      </text>
    </svg>
  );
}

function Inc5000Badge() {
  return (
    <svg
      viewBox="0 0 120 120"
      width="110"
      height="115"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="60"
        y="22"
        textAnchor="middle"
        fill="#1a1a1a"
        fontSize="11"
        fontWeight="600"
        fontFamily="Arial"
      >
        2024
      </text>
      {/* Inc. */}
      <text
        x="60"
        y="52"
        textAnchor="middle"
        fill="#1a1a1a"
        fontSize="22"
        fontWeight="900"
        fontFamily="Georgia, serif"
        fontStyle="italic"
      >
        Inc.
      </text>
      {/* 5000 */}
      <text
        x="60"
        y="88"
        textAnchor="middle"
        fill="#1a1a1a"
        fontSize="48"
        fontWeight="900"
        fontFamily="Arial"
        letterSpacing="-2"
      >
        5000
      </text>
      {/* LIST */}
      <text
        x="60"
        y="106"
        textAnchor="middle"
        fill="#1a1a1a"
        fontSize="13"
        fontWeight="600"
        fontFamily="Arial"
        letterSpacing="4"
      >
        LIST
      </text>
    </svg>
  );
}

function OutsourcingBadge() {
  return (
    <svg
      viewBox="0 0 120 130"
      width="110"
      height="120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer thick ring */}
      <circle
        cx="60"
        cy="62"
        r="52"
        stroke="#1a1a1a"
        strokeWidth="8"
        fill="none"
      />
      {/* Inner ring */}
      <circle
        cx="60"
        cy="62"
        r="44"
        stroke="#1a1a1a"
        strokeWidth="1"
        fill="none"
      />
      {/* Bar chart icon */}
      <rect x="44" y="54" width="7" height="16" fill="#1a1a1a" />
      <rect x="56" y="46" width="7" height="24" fill="#1a1a1a" />
      <rect x="68" y="50" width="7" height="20" fill="#1a1a1a" />
      <line
        x1="40"
        y1="72"
        x2="80"
        y2="72"
        stroke="#1a1a1a"
        strokeWidth="1.5"
      />
      {/* Top text arc area */}
      <text
        x="60"
        y="30"
        textAnchor="middle"
        fill="#1a1a1a"
        fontSize="5"
        fontWeight="700"
        fontFamily="Arial"
        letterSpacing="1"
      >
        IAOP
      </text>
      <text
        x="60"
        y="38"
        textAnchor="middle"
        fill="#1a1a1a"
        fontSize="4.5"
        fontWeight="600"
        fontFamily="Arial"
        letterSpacing="0.5"
      >
        2024 GLOBAL
      </text>
      {/* Center text */}
      <text
        x="60"
        y="88"
        textAnchor="middle"
        fill="#1a1a1a"
        fontSize="11"
        fontWeight="900"
        fontFamily="Arial"
      >
        OUTSOURCING
      </text>
      {/* Bottom circle badge */}
      <circle cx="60" cy="105" r="10" fill="#1a1a1a" />
      <text
        x="60"
        y="103"
        textAnchor="middle"
        fill="white"
        fontSize="7"
        fontWeight="900"
        fontFamily="Arial"
      >
        100
      </text>
      <text
        x="60"
        y="111"
        textAnchor="middle"
        fill="white"
        fontSize="4"
        fontWeight="600"
        fontFamily="Arial"
      >
        ★
      </text>
    </svg>
  );
}

const awards = [
  {
    id: "stevie",
    badge: <StevieAwardBadge />,
    label: "Most Innovative Tech Company 2024",
  },
  {
    id: "globee",
    badge: <GlobeeAwardBadge />,
    label: "Achievement in Costumer Satisfaction 2024",
  },
  {
    id: "inc5000",
    badge: <Inc5000Badge />,
    label: "America's Fastest-growing Companies 2024",
  },
  {
    id: "outsourcing",
    badge: <OutsourcingBadge />,
    label: "Top 100 Global Outsourcing Providers and Advisors 2024",
  },
];

export default function ExcellenceAwards() {
  return (
    <section className="w-full bg-[#f0f0f2] py-14 px-6 sm:px-10 lg:px-20 xl:px-24">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-16">
          {/* ── LEFT: Heading + CTA ── */}
          <div className="flex-shrink-0 lg:w-[260px]">
            <h2 className="font-extrabold text-[clamp(1.9rem,2.8vw,2.4rem)] leading-tight tracking-tight mb-1">
              <span className="text-orange-500">Excellence</span>
            </h2>
            <p className="font-bold text-[clamp(1.1rem,1.8vw,1.5rem)] leading-snug text-gray-800 mb-8">
              Our minimum bar for
              <br />
              client delivery.
            </p>

            {/* CTA link */}
            <div className="border-b border-gray-800 pb-1 inline-block">
              <a
                href="#"
                className="flex items-center gap-2 font-bold text-[1rem] text-gray-900 hover:text-orange-500 transition-colors"
              >
                Explore Our 130+ Awards
                <span className="text-lg leading-none">→</span>
              </a>
            </div>
          </div>

          {/* ── RIGHT: Awards badges ── */}
          <div className="flex flex-wrap lg:flex-nowrap items-center justify-start lg:justify-between gap-8 lg:gap-6 flex-1">
            {awards.map((award) => (
              <div
                key={award.id}
                className="flex flex-col items-center gap-3 flex-shrink-0"
                style={{ minWidth: "120px", maxWidth: "160px" }}
              >
                {/* Badge */}
                <div className="flex items-center justify-center h-[120px]">
                  {award.badge}
                </div>
                {/* Label */}
                <p className="text-center text-[0.78rem] text-gray-600 leading-snug font-normal max-w-[140px]">
                  {award.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
