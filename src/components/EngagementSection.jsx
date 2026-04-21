const engagementModels = [
  {
    label: "Staff Augmentation",
    heading: "Need a couple of extra software engineers on your team?",
    icon: (
      <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-28 h-20 text-gray-300">
        <circle cx="70" cy="28" r="16" stroke="currentColor" strokeWidth="2" />
        <path d="M46 72c0-13.255 10.745-24 24-24s24 10.745 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="32" cy="44" r="12" stroke="currentColor" strokeWidth="2" />
        <path d="M12 76c0-11.046 8.954-20 20-20s20 8.954 20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Dedicated Teams",
    heading: "Need a few teams to deliver several projects simultaneously?",
    icon: (
      <svg viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-28 h-20 text-gray-300">
        <circle cx="60" cy="32" r="14" stroke="currentColor" strokeWidth="2" />
        <circle cx="20" cy="55" r="11" stroke="currentColor" strokeWidth="2" />
        <circle cx="100" cy="55" r="11" stroke="currentColor" strokeWidth="2" />
        <line x1="60" y1="46" x2="20" y2="55" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
        <line x1="60" y1="46" x2="100" y2="55" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
        <circle cx="60" cy="32" r="6" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="20" cy="55" r="5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="100" cy="55" r="5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    label: "Software Outsourcing",
    heading: "Want to offload everything to us, from start to finish?",
    icon: (
      <svg viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-28 h-20 text-gray-300">
        <circle cx="60" cy="45" r="14" stroke="currentColor" strokeWidth="2" />
        <circle cx="60" cy="45" r="6" stroke="currentColor" strokeWidth="1.5" />
        <line x1="60" y1="20" x2="60" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="60" y1="70" x2="60" y2="80" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="35" y1="45" x2="25" y2="45" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="85" y1="45" x2="95" y2="45" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="42" y1="27" x2="35" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="78" y1="63" x2="85" y2="70" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="78" y1="27" x2="85" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="42" y1="63" x2="35" y2="70" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

const steps = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-orange-400">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.22 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.72 6.72l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
      </svg>
    ),
    title: "Discuss solutions and decide team structure.",
    description:
      "Tell us more about your needs. We'll discuss the best-fit solutions and team structure based on your success metrics, timeline, budget, and required skill sets.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-orange-400">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Onboard your team and get to work.",
    description:
      "With project specifications finalized, we select your team. We're able to onboard developers and assemble dedicated teams in 2–4 weeks after signature.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-orange-400">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    title: "We track performance on an ongoing basis.",
    description:
      "We continually monitor our teams' work to make sure they're meeting your quantity and quality of work standards at all times.",
  },
];

export default function EngagementSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* ── Cards ── */}
        <div className="grid md:grid-cols-3 gap-0 border border-gray-200 rounded-2xl overflow-hidden mb-20 bg-white">
          {engagementModels.map((model, i) => (
            <div
              key={i}
              className={`relative p-8 flex flex-col justify-between min-h-[220px] ${
                i < engagementModels.length - 1 ? "border-r border-gray-200" : ""
              }`}
            >
              {/* Label */}
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-green-600 mb-3">
                  {model.label}
                </p>
                <h3 className="text-lg font-medium text-gray-900 leading-snug max-w-[220px]">
                  {model.heading}
                </h3>
              </div>

              {/* Illustration + eye button row */}
              <div className="flex items-end justify-between mt-6">
                {model.icon}
                <button className="w-9 h-9 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ── Kick off heading ── */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
          Kick off .NET projects in 2–4 weeks.
        </h2>

        {/* ── Two-col layout ── */}
        <div className="grid md:grid-cols-[200px_1fr] gap-12 items-start">

          {/* Left — avatars + text */}
          <div className="flex flex-col items-center text-center">
            <div className="flex -space-x-4 mb-4">
              {/* Avatar placeholders */}
              <div className="w-16 h-16 rounded-full bg-orange-200 border-2 border-white overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-orange-300 to-orange-500" />
              </div>
              <div className="w-16 h-16 rounded-full bg-blue-200 border-2 border-white overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-300 to-blue-500" />
              </div>
              <div className="w-16 h-16 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-500" />
              </div>
            </div>
            <p className="font-bold text-gray-900 text-sm leading-snug mb-1">
              We have reps<br />across the US.
            </p>
            <p className="text-xs text-gray-500 leading-relaxed">
              Speak with a client engagement specialist near you.
            </p>
          </div>

          {/* Right — steps */}
          <div className="relative">
            {/* Dashed vertical line */}
            <div className="absolute left-[19px] top-10 bottom-16 border-l-2 border-dashed border-gray-300 z-0" />

            <div className="space-y-10 relative z-10">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  {/* Icon circle */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-orange-400 bg-white flex items-center justify-center">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{step.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}

              {/* CTA button */}
              <div className="pl-16">
                <button className="bg-orange-500 hover:bg-orange-600 transition-colors text-white font-semibold px-8 py-4 rounded-full text-sm">
                  Schedule a Call with Our Team
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}