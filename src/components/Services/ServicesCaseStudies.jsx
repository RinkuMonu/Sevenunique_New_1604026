"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, TrendingUp } from "lucide-react";

const caseStudies = [
  {
    tag: "FINTECH & AI",
    title: "Autonomous AI Reasoning & Document Processing Engine",
    metric: "75% Reduction in Manual Processing Time",
    description:
      "Engineered an autonomous multi-agent pipeline and vector RAG copilot that extracts, verifies, and analyzes high-volume financial contracts in seconds instead of days.",
    technologies: ["OpenAI", "Python", "FastAPI", "Pinecone"],
    image: "/images/nlp.png",
    link: "/services/ai-development",
  },
  {
    tag: "BANKING & CLOUD",
    title: "High-Throughput Core Banking & Payment Infrastructure",
    metric: "99.99% Uptime with 10M+ Daily Transactions",
    description:
      "Designed and deployed a distributed, event-driven microservices architecture capable of sub-20ms processing latency with strict PCI-DSS regulatory compliance.",
    technologies: ["Go", "Node.js", "PostgreSQL", "Kafka"],
    image: "/images/backup.png",
    link: "/services/backend-development",
  },
  {
    tag: "HEALTHTECH",
    title: "Cross-Platform Telehealth & Patient Care Mobile App",
    metric: "500k+ Active Users Across iOS & Android",
    description:
      "Built a secure, HIPAA-compliant telemedicine platform with real-time WebRTC video consultations, offline health records sync, and automated prescriptions.",
    technologies: ["React Native", "Next.js", "WebRTC", "AWS"],
    image: "/images/mobileapp.png",
    link: "/services/mobile-development",
  },
];

export default function ServicesCaseStudies() {
  return (
    <section className="bg-[#f8fafc] py-20 sm:py-24 lg:py-28 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#ff6b3d]">
              <span className="h-2 w-2 rounded-full bg-[#ff6b3d]" />
              Proven Impact
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0f172a] sm:text-4xl md:text-5xl">
              Real-World Outcomes.{" "}
              <span className="text-[#ff6b3d]">Measurable Growth.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-gray-600 leading-relaxed">
            See how our engineering rigor translates directly into accelerated product velocity,
            operational cost savings, and scalable user adoption.
          </p>
        </div>

        {/* CASE STUDIES CARDS */}
        <div className="grid gap-8 lg:grid-cols-3">
          {caseStudies.map((item, idx) => (
            <div
              key={idx}
              className="group flex flex-col justify-between overflow-hidden rounded-[26px] border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#ff6b3d]/40 hover:shadow-2xl"
            >
              <div>
                {/* IMAGE */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-108 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* TAG */}
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-white/20 backdrop-blur-md border border-white/25 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                      {item.tag}
                    </span>
                  </div>

                  {/* METRIC BADGE */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="inline-flex items-center gap-1.5 rounded-xl bg-orange-500/90 backdrop-blur-md px-3 py-1.5 text-xs font-bold text-white shadow-lg">
                      <TrendingUp className="h-3.5 w-3.5" />
                      <span>{item.metric}</span>
                    </div>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6 sm:p-7">
                  <h3 className="text-xl font-bold text-[#0f172a] leading-snug group-hover:text-[#ff6b3d] transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-gray-600 leading-relaxed font-normal">
                    {item.description}
                  </p>

                  {/* TECHNOLOGIES */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg bg-gray-100 px-2.5 py-1 text-[11px] font-medium text-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* CARD FOOTER */}
              <div className="p-6 sm:p-7 pt-0 border-t border-gray-100 mt-2">
                <Link
                  href={item.link}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ff6b3d] hover:text-[#0f172a] transition-colors"
                >
                  <span>Explore Related Service</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
