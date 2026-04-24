import { useEffect, useRef } from "react";

// ─── Data ──────────────────────────────────────────────────────────────────────

const CLIENTS_ROW1 = [
  "Forcepoint","Abbott","AbbVie","Autodesk","BBVA","Burger King",
  "Care.com","eBay","Ernst & Young","Google","Groupon","HP","IBM",
  "Johnson & Johnson","Panasonic","Pinterest","Rolls-Royce",
  "Salesforce","SAP","SiriusXM","Thomson Reuters","Udemy","Volkswagen",
  "Volvo","Whirlpool",
];

const CLIENTS_ROW2 = [
  "Urban Outfitters","ViacomCBS","Univision","Turner","Netgear",
  "NextRoll","Newsela","Keller Williams","IQVIA","HomeAdvisor","Chime",
  "Blackboard","Associated Press","Repay","Regeneron","Verisk",
  "Ticket Galaxy","Limeade","Kinesso","Kapsch","Instructure",
  "GlobalStar","Fresenius",
];

const AWARDS = [
  {
    label: "FT",
    sub: "FINANCIAL TIMES",
    year: "2025",
    accent: "#2563eb",
    bg: "#1a2540",
    caption: "America's Fastest-Growing Companies 2025 by Financial Times",
  },
  {
    label: "100",
    sub: "CIO100",
    year: "IT INNOVATORS",
    accent: "#22d3ee",
    bg: "#1a3040",
    caption: "Top 100 U.S. IT Innovators 2025 by CIO100 Awards",
  },
  {
    label: "★",
    sub: "CLUTCH",
    year: "",
    accent: "#7c3aed",
    bg: "#1f1a40",
    caption: "Nearshore North America Top Software Developers 2025 by Clutch",
  },
  {
    label: "G100",
    sub: "IAOP",
    year: "OUTSOURCING 2024",
    accent: "#22c55e",
    bg: "#1a3020",
    caption: "Top 100 Global Outsourcing Providers 2024 by IAOP",
  },
];

// ─── Sub-components ─────────────────────────────────────────────────────────────

function ArrowDown() {
  return (
    <div
      className="w-8 h-8 bg-blue-600 my-8"
      style={{
        clipPath:
          "polygon(40% 0,60% 0,60% 65%,80% 65%,50% 100%,20% 65%,40% 65%)",
      }}
    />
  );
}

function ArrowForward({ className = "", style = {} }) {
  return (
    <span
      className={`inline-block w-4 h-4 ${className}`}
      style={{
        background: "currentColor",
        clipPath:
          "polygon(0 40%,65% 40%,65% 20%,100% 50%,65% 80%,65% 60%,0 60%)",
        ...style,
      }}
    />
  );
}

function LogoPill({ name }) {
  return (
    <div className="flex items-center justify-center px-7 h-14 min-w-[130px] bg-white rounded-xl border border-stone-200 text-sm font-semibold text-stone-400 tracking-wide whitespace-nowrap flex-shrink-0 transition-all duration-200 hover:border-blue-500 hover:text-blue-600 hover:-translate-y-0.5 cursor-default select-none">
      {name}
    </div>
  );
}

function Marquee({ items, reverse = false, duration = "28s" }) {
  // Duplicate for seamless loop
  const doubled = [...items, ...items];
  return (
    <div
      className="overflow-hidden"
      style={{
        mask: "linear-gradient(to right,transparent,black 10%,black 90%,transparent)",
        WebkitMask:
          "linear-gradient(to right,transparent,black 10%,black 90%,transparent)",
      }}
    >
      <div
        className="flex gap-8 w-max"
        style={{
          animation: `marquee ${duration} linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {doubled.map((name, i) => (
          <LogoPill key={`${name}-${i}`} name={name} />
        ))}
      </div>
    </div>
  );
}

function StatRing({ value, label }) {
  return (
    <div
      className="flex flex-col items-center justify-center w-32 h-32 rounded-full border"
      style={{ borderColor: "rgba(255,255,255,0.12)" }}
    >
      <span
        className="text-white text-2xl font-bold"
        style={{ fontFamily: "'Syne', sans-serif" }}
      >
        {value}
      </span>
      <span
        className="text-white/40 text-xs text-center leading-tight mt-1"
        style={{ maxWidth: 72 }}
      >
        {label}
      </span>
    </div>
  );
}

function AwardBadge({ award }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-20 h-20 flex items-center justify-center">
        <svg viewBox="0 0 80 80" width="72" height="72">
          <rect width="80" height="80" rx="12" fill={award.bg} />
          <text
            x="40"
            y="26"
            textAnchor="middle"
            fill="rgba(148,163,184,0.8)"
            fontSize="9"
            fontFamily="DM Sans, sans-serif"
            fontWeight="500"
          >
            {award.sub}
          </text>
          <text
            x="40"
            y="50"
            textAnchor="middle"
            fill="#fff"
            fontSize={award.label.length > 2 ? "16" : "22"}
            fontFamily="Syne, sans-serif"
            fontWeight="700"
          >
            {award.label}
          </text>
          {award.year && (
            <text
              x="40"
              y="64"
              textAnchor="middle"
              fill={award.accent}
              fontSize="7.5"
              fontFamily="DM Sans, sans-serif"
            >
              {award.year}
            </text>
          )}
        </svg>
      </div>
      <p className="text-xs text-white/50 text-center leading-relaxed max-w-[130px]">
        {award.caption}
      </p>
    </div>
  );
}

// ─── Fade-in hook ───────────────────────────────────────────────────────────────

function useFadeIn(delay = 0) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return ref;
}

// ─── Main Component ─────────────────────────────────────────────────────────────

export default function AwardsSection1() {
  const headerRef = useFadeIn(0);
  const darkRef = useFadeIn(150);
  const ctaRef = useFadeIn(300);

  return (
    <>
      {/* Marquee keyframes injected once */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>

      <section className="bg-[#f5f3ef] overflow-x-hidden py-16">
        <div className="max-w-5xl mx-auto px-8">

          {/* ── Header ── */}
          <div ref={headerRef} className="mb-10">
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-stone-400 mb-3">
              Our Awards
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-stone-900 leading-tight tracking-tight max-w-xl"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Global companies have trusted us to build and scale their AI
              solutions for over a decade.
            </h2>
            <ArrowDown />
          </div>
        </div>

        {/* ── Marquee rows ── */}
        <div className="flex flex-col gap-2 mb-12">
          <Marquee items={CLIENTS_ROW1} duration="28s" />
          <Marquee items={CLIENTS_ROW2} reverse duration="22s" />
        </div>

        <div className="max-w-5xl mx-auto px-8">

          {/* ── Dark awards card ── */}
          <div
            ref={darkRef}
            className="rounded-2xl p-10 mb-14"
            style={{ background: "#111" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10 items-start">

              {/* Left copy */}
              <div>
                <h3
                  className="text-3xl font-bold text-white leading-snug mb-4"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  <span className="text-blue-500">Excellence.</span>
                  <br />
                  Our minimum bar for client delivery.
                </h3>
                <p className="text-sm text-white/50 leading-relaxed mb-8">
                  Over 130 awards, accolades, and achievements showcase our
                  quality and commitment to client success.
                </p>
                <a
                  href="https://www.bairesdev.com/awards-recognitions/"
                  className="inline-flex items-center gap-2 text-blue-500 border-b-2 border-blue-500 pb-1 text-sm font-semibold tracking-wide transition-all duration-200 hover:pl-2"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  Our trophy cabinet
                  <ArrowForward />
                </a>
              </div>

              {/* Right: stats + awards grid */}
              <div className="flex gap-8 items-stretch">

                {/* Stats */}
                <div className="flex flex-col gap-6 items-center justify-center">
                  <StatRing value="1,250+" label="projects delivered" />
                  <StatRing value="130+" label="industry sectors" />
                </div>

                {/* Divider */}
                <div
                  className="w-px self-stretch"
                  style={{ background: "rgba(255,255,255,0.1)" }}
                />

                {/* Awards 2×2 */}
                <div className="flex-1 grid grid-cols-2 gap-6">
                  {AWARDS.map((award) => (
                    <AwardBadge key={award.caption} award={award} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── CTA ── */}
          <div ref={ctaRef} className="pb-16">
            <ArrowDown />
            <h2
              className="text-4xl md:text-5xl font-bold text-stone-900 leading-tight tracking-tight max-w-xl mb-8"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Accelerate AI development and delivery with our top-rated nearshore
              teams.
            </h2>
            <a
              href="https://www.bairesdev.com/start/basic-details/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white text-base font-semibold transition-colors duration-200"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Schedule a Call
              <ArrowForward style={{ background: "#fff" }} />
            </a>
          </div>

        </div>
      </section>
    </>
  );
}