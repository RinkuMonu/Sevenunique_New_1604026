"use client";

import { CheckCircle, Layers, Cpu, ShieldCheck, Rocket } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Layers,
    title: "Discovery & Technical Architecture",
    description:
      "We begin by deconstructing business objectives, mapping system dependencies, and defining a resilient technical architecture before writing a line of code.",
    deliverables: [
      "System Architecture Blueprint",
      "Technology & Database Selection",
      "Security & Compliance Threat Modeling",
      "Sprint Milestones & Risk Assessment",
    ],
  },
  {
    step: "02",
    icon: Cpu,
    title: "Rapid Agile Engineering",
    description:
      "Senior full-stack developers execute focused 2-week sprints with continuous integration, automated preview deployments, and direct stakeholder communication.",
    deliverables: [
      "2-Week Iterative Sprint Delivery",
      "Staging Preview Environments",
      "Clean Code with Strict Peer Reviews",
      "Daily Async Sync & Burndown Tracking",
    ],
  },
  {
    step: "03",
    icon: ShieldCheck,
    title: "Enterprise QA & Security Hardening",
    description:
      "Quality assurance isn't an afterthought. We run automated regression pipelines, load testing benchmarks, and penetration scans to guarantee stability.",
    deliverables: [
      "Automated End-to-End Test Suites",
      "Load & Concurrency Benchmarking",
      "Vulnerability Scans & Penetration Tests",
      "Cross-Browser & Device Certification",
    ],
  },
  {
    step: "04",
    icon: Rocket,
    title: "Zero-Downtime Deployment & Scale",
    description:
      "We automate production releases using modern CI/CD pipelines, container orchestration, and comprehensive telemetry for seamless scaling.",
    deliverables: [
      "Infrastructure-as-Code (Terraform/Docker)",
      "Zero-Downtime Blue/Green Deployments",
      "24/7 Telemetry & Health Monitoring",
      "Post-Launch Scaling & Maintenance Support",
    ],
  },
];

export default function ServicesProcess() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28 relative overflow-hidden">
      {/* BACKGROUND ACCENTS */}
      <div className="pointer-events-none absolute top-1/2 left-0 h-96 w-96 -translate-y-1/2 rounded-full bg-orange-100/50 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-100/50 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#ff6b3d]">
            <span className="h-2 w-2 rounded-full bg-[#ff6b3d]" />
            Disciplined Execution
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0f172a] sm:text-4xl md:text-5xl">
            The SevenUnique{" "}
            <span className="text-[#ff6b3d]">Delivery Framework</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            From initial strategy to enterprise scale, our battle-tested engineering process
            minimizes technical debt and accelerates time to market.
          </p>
        </div>

        {/* PROCESS GRID */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.step}
                className="group relative flex flex-col justify-between rounded-3xl border border-gray-200/90 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#ff6b3d]/40 hover:shadow-xl"
              >
                <div>
                  {/* TOP HEADER */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-gray-200 transition-colors group-hover:text-[#ff6b3d]/40">
                      {item.step}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-[#ff6b3d] transition-all duration-300 group-hover:bg-[#ff6b3d] group-hover:text-white group-hover:shadow-lg group-hover:shadow-orange-500/25">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-xl font-bold text-[#0f172a] leading-snug group-hover:text-[#ff6b3d] transition-colors">
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* DELIVERABLES */}
                <div className="mt-6 border-t border-gray-100 pt-5">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-3">
                    Key Outputs
                  </p>
                  <ul className="space-y-2">
                    {item.deliverables.map((deliv, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-gray-700">
                        <CheckCircle className="h-3.5 w-3.5 shrink-0 text-[#ff6b3d] mt-0.5" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
