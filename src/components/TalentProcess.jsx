import Link from "next/link";

const steps = [
  {
    num: "1",
    title: "Apply & screen",
    desc: "Candidates pass a rigorous English proficiency and aptitude pre-screen.",
  },
  {
    num: "2",
    title: "Technical assessment",
    desc: "Multi-stage coding challenges and architecture reviews by domain experts.",
  },
  {
    num: "3",
    title: "Expert interview",
    desc: "Live interviews with senior engineers in the relevant technology domain.",
  },
  {
    num: "4",
    title: "Matched to your team",
    desc: "We select the right engineers for your tech stack, culture, and timezone.",
  },
];

const techs = [
  "React", "Python", "Node.js", "AI / ML", "AWS", "Java",
  "TypeScript", "Go", "Azure", "100+ more",
];

export default function TalentProcess() {
  return (
    <section className="bg-[#0a0a0a] px-6 py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        
        {/* Left Column - Added min-w-0 to prevent grid blowout */}
        <div className="w-full min-w-0">
          <span className="inline-block bg-[#f4622a]/20 text-[#f4622a] text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wide mb-4">
            How it works
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight leading-[1.15] mb-4">
            We only work with the{" "}
            <em className="not-italic text-[#f4622a]">top 1%</em> of tech
            talent.
          </h2>
          <p className="text-white/60 text-[15px] leading-relaxed mb-8 max-w-md">
            Our vetting process is rigorous. We test English proficiency,
            problem-solving, and technical depth. Less than 1% of applicants
            make the cut.
          </p>
          <Link
            href="/top-1-percent"
            className="inline-flex items-center bg-[#f4622a] hover:bg-[#d94f1e] text-white font-medium text-[15px] px-7 py-3.5 rounded-[7px] transition-colors duration-150"
          >
            Explore our talent
          </Link>

          {/* Tech badges - Added w-full */}
          <div className="flex flex-wrap gap-2.5 mt-8 w-full">
            {techs.map((t) => (
              <span
                key={t}
                className="bg-white/[0.06] border border-white/10 rounded-lg px-3.5 py-1.5 text-[13px] text-white/70 font-medium whitespace-nowrap"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column - Steps */}
        <div className="flex flex-col gap-3 w-full min-w-0">
          {steps.map((step) => (
            <div
              key={step.num}
              className="flex gap-4 items-start bg-white/[0.04] border border-white/[0.07] rounded-xl px-5 py-4"
            >
              {/* Added shrink-0 so the circle doesn't squash on small screens */}
              <div className="shrink-0 w-7 h-7 rounded-full bg-[#f4622a] flex items-center justify-center text-white text-xs font-semibold">
                {step.num}
              </div>
              <div className="min-w-0">
                <h4 className="text-white text-[14px] font-medium mb-0.5">
                  {step.title}
                </h4>
                <p className="text-white/50 text-[13px] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}