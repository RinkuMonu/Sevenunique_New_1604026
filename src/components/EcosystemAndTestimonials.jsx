"use client";

import { useState } from "react";

// ─── ECOSYSTEM DATA ───────────────────────────────────────────
const ecosystemItems = [
  {
    label: "Core Frameworks",
    description:
      "We build on Long-Term Support (LTS) releases to guarantee years of stability and security. Our development process leverages a mature ecosystem to deliver deterministic, reproducible builds.",
    tags: [".NET", "C#", "F#", "ASP.NET Core", "Blazor", "Entity Framework Core", "Dapper"],
  },
  {
    label: "Build & Dependency Management",
    description:
      "Our development process leverages a mature ecosystem to deliver deterministic, reproducible builds that secure your software supply chain. This eliminates deployment risks and ensures every component of your .NET software is auditable and consistent.",
    tags: ["MSBuild", "NuGet", "Paket", "Cake", "Nuke"],
  },
  {
    label: "Quality Assurance",
    description:
      "We enforce rigorous QA practices including unit, integration, and end-to-end testing across all .NET projects. Every release is gated by automated quality checks.",
    tags: ["xUnit", "NUnit", "MSTest", "SpecFlow", "Playwright"],
  },
  {
    label: "Observability & Performance",
    description:
      "We instrument .NET applications for full-stack observability including distributed tracing, structured logging, and real-time performance dashboards.",
    tags: ["OpenTelemetry", "Serilog", "Datadog", "Prometheus", "Grafana"],
  },
  {
    label: "DevOps & CI/CD",
    description:
      "We integrate seamlessly with your existing DevOps toolchain and build repeatable, auditable deployment pipelines tailored to your organization's workflows.",
    tags: ["Azure DevOps", "GitHub Actions", "Jenkins", "Octopus Deploy", "ArgoCD"],
  },
  {
    label: "Data & Analytics Services",
    description:
      "We design data-intensive .NET solutions using modern database technologies and analytics platforms to support reporting, ML pipelines, and real-time processing.",
    tags: ["SQL Server", "PostgreSQL", "CosmosDB", "Databricks", "Power BI"],
  },
  {
    label: "Containerization & Orchestration",
    description:
      "We containerize .NET workloads and orchestrate them at scale, enabling teams to deploy with confidence across cloud-native and hybrid environments.",
    tags: ["Docker", "Kubernetes", "Helm", "Azure AKS", "AWS EKS"],
  },
  {
    label: "Security & Compliance Tooling",
    description:
      "Security is built in from day one. We integrate static analysis, dependency scanning, and compliance controls into every .NET project we deliver.",
    tags: ["SonarQube", "OWASP ZAP", "Snyk", "Veracode", "Azure Policy"],
  },
];

// ─── TESTIMONIAL DATA ─────────────────────────────────────────
const leftTestimonials = [
  {
    industry: "Healthcare & MedTech",
    project: null,
    quote:
      "We are consistently delivering high-quality software on time, in part thanks to the people from BairesDev. They can find talented, high-caliber, sharp developers who will stay with us long-term. Their main strength is their talent.",
    name: "David Johnston",
    title: "Product Engagement Lead",
    company: "Johnson\n&Johnson",
    companyStyle: "font-bold text-red-600 text-lg leading-tight",
    photo: null,
  },
  {
    industry: "Financial Services",
    project: "Upgraded and Maintained Repay's AWS Infrastructure",
    quote:
      "They've also been proactive about checking in about the state of the engagement and overall performance. I'm confident we'll continue working with BairesDev for a long time.",
    name: "Michael Soltow",
    title: "Software Dev. Manager",
    company: "REPAY",
    companyStyle: "font-bold text-gray-800 text-xl tracking-wide",
    photo: null,
  },
];

const rightTestimonials = [
  {
    industry: "Financial Services",
    project: "Developed new digital banking features",
    quote:
      "BairesDev has been a fantastic partner. We wanted to put forth a product to help people cope with financial struggles but didn't have the resources we needed, so we turned to them. They could always find us quality talent in a concise amount of time.",
    name: "Leonardo Shapiro",
    title: "Head of Growth",
    company: "azlo",
    companyStyle: "font-bold text-blue-700 text-xl",
    photo: null,
  },
  {
    industry: "Renewable Energy",
    project: null,
    quote:
      "I was concerned about a possible mismatch of talent levels of our in-house engineers versus contractors. But, as it turns out, many of the BairesDev engineers we hired emerged as top performers. In fact, of our group of 120 developers, all the BairesDev engineers we had were in the top 20 of the organization.",
    name: "Matthew Mecham",
    title: null,
    company: "Lumio",
    companyStyle: "font-bold text-gray-800 text-xl",
    photo: null,
  },
];

// ─── SUBCOMPONENTS ────────────────────────────────────────────
function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 flex-shrink-0 text-orange-400">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhotoPlaceholder({ seed = 0 }) {
  const colors = [
    ["#f97316", "#ea580c"],
    ["#3b82f6", "#1d4ed8"],
    ["#10b981", "#059669"],
    ["#8b5cf6", "#7c3aed"],
  ];
  const [a, b] = colors[seed % colors.length];
  return (
    <div
      className="w-24 h-28 rounded-md flex-shrink-0 object-cover"
      style={{ background: `linear-gradient(135deg, ${a}, ${b})` }}
    />
  );
}

function TestimonialCard({ t, seed, active = false }) {
  return (
    <div className={`rounded-xl border p-5 bg-white ${active ? "border-gray-800 shadow-md" : "border-gray-200"}`}>
      {(t.industry || t.project) && (
        <div className="mb-3">
          {t.industry && (
            <p className="text-[10px] font-semibold tracking-widest uppercase text-gray-400">{t.industry}</p>
          )}
          {t.project && <p className="text-sm text-gray-600 mt-0.5">{t.project}</p>}
        </div>
      )}
      <div className="flex gap-4">
        <PhotoPlaceholder seed={seed} />
        <div className="flex flex-col justify-between">
          <p className="text-gray-700 text-sm leading-relaxed">
            <span className="text-orange-400 text-2xl leading-none mr-1 font-serif">"</span>
            {t.quote}
          </p>
          <div className="mt-3 flex items-end justify-between gap-2">
            <div>
              <p className="text-sm font-semibold text-gray-900">{t.name}</p>
              {t.title && <p className="text-xs text-gray-500">{t.title}</p>}
            </div>
            <p className={t.companyStyle} style={{ whiteSpace: "pre-line" }}>{t.company}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN EXPORT ─────────────────────────────────────────────
export default function EcosystemAndTestimonials() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <>
      {/* ══════════ ECOSYSTEM SECTION ══════════ */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-3">
            Tools for .NET Development
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            The ecosystem we use for .NET projects:
          </h2>
          <p className="text-gray-500 max-w-2xl mb-12 leading-relaxed">
            We deliver .NET solutions on a disciplined ecosystem designed for stability and trust.
            Dependencies are versioned and scanned. Practices are codified in shared runbooks. And
            every build is traceable.
          </p>

          <div className="grid md:grid-cols-2 gap-6 items-start">
            {/* Left — menu */}
            <div className="space-y-2">
              {ecosystemItems.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-lg border transition-all duration-150 ${
                    activeIndex === i
                      ? "border-gray-900 bg-white font-semibold text-gray-900 shadow-sm"
                      : "border-gray-200 bg-white text-gray-600 hover:border-gray-400"
                  }`}
                >
                  <CheckIcon />
                  <span className="text-sm">{item.label}</span>
                </button>
              ))}
            </div>

            {/* Right — detail panel */}
            <div className="border border-orange-400 rounded-xl p-6 bg-white sticky top-8">
              <p className="text-sm text-gray-700 leading-relaxed mb-5">
                {ecosystemItems[activeIndex].description}
              </p>
              <div className="flex flex-wrap gap-2">
                {ecosystemItems[activeIndex].tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm border border-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ TESTIMONIALS SECTION ══════════ */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10">

            {/* Left col */}
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">
                Client Testimonials
              </p>
              <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Get .NET results you can stand behind.
              </h2>
              <p className="text-gray-500 mb-8">
                Our work holds up in reviews, in production, and in front of the board.
              </p>

              <div className="space-y-4">
                {leftTestimonials.map((t, i) => (
                  <TestimonialCard key={i} t={t} seed={i} active={i === 1} />
                ))}
              </div>

              <button className="mt-6 flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors mx-auto">
                <span className="text-lg font-light">+</span> Show More Testimonials
              </button>
            </div>

            {/* Right col */}
            <div className="space-y-4">
              {rightTestimonials.map((t, i) => (
                <TestimonialCard key={i} t={t} seed={i + 2} />
              ))}

              {/* CTA card */}
              <div className="rounded-xl border border-gray-200 bg-white p-5">
                <div className="flex -space-x-2 mb-4">
                  {[0, 1, 2, 3, 4, 5].map((i) => {
                    const colors = ["#f97316","#3b82f6","#10b981","#8b5cf6","#ef4444","#f59e0b"];
                    return (
                      <div
                        key={i}
                        className="w-9 h-9 rounded-full border-2 border-white"
                        style={{ background: colors[i] }}
                      />
                    );
                  })}
                </div>
                <p className="font-semibold text-gray-900 text-lg mb-4">
                  Join 500+ companies who count on our .NET developers
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold px-6 py-3 rounded-lg text-sm">
                  Schedule a Call
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}