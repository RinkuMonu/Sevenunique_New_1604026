import Link from "next/link";

const stats = [
  { num: "4,000+", label: "Engineers on roster", accent: true },
  { num: "Top 1%", label: "Vetted talent only", accent: false },
  { num: "500+", label: "Companies served", accent: false },
  { num: "15 yrs", label: "In business since 2009", accent: false },
];

export default function Hero() {
  return (
    <section className="bg-[#0a0a0a] px-6 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 bg-[#f4622a]/10 border border-[#f4622a]/25 text-[#f4622a] text-xs font-medium px-3 py-1.5 rounded-full mb-5">
            <span className="w-2 h-2 rounded-full bg-[#f4622a] inline-block" />
            Nearshore Tech Talent
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-semibold text-white leading-[1.08] tracking-[-1.5px] mb-5">
            Accelerate Your Roadmap With Vetted{" "}
            <em className="not-italic text-[#f4622a]">Tech Talent</em>
          </h1>

          <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
            Access 4,000+ timezone-aligned software engineers with experience in
            AI and 100+ other technologies.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/start/basic-details"
              className="inline-flex items-center bg-[#f4622a] hover:bg-[#d94f1e] text-white font-medium text-[15px] px-7 py-3.5 rounded-[7px] transition-colors duration-150"
            >
              Schedule a Call
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center border border-white/20 hover:border-white/50 text-white font-medium text-[15px] px-7 py-3.5 rounded-[7px] transition-colors duration-150"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* Right — stat cards */}
        <div className="grid grid-cols-2 gap-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className={`rounded-xl p-5 border ${
                s.accent
                  ? "bg-[#f4622a] border-[#f4622a]"
                  : "bg-white/[0.05] border-white/[0.08]"
              }`}
            >
              <p
                className={`text-3xl font-semibold tracking-tight leading-none mb-1 ${
                  s.accent ? "text-white" : "text-white"
                }`}
              >
                {s.num}
              </p>
              <p
                className={`text-sm ${
                  s.accent ? "text-white/80" : "text-white/50"
                }`}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}