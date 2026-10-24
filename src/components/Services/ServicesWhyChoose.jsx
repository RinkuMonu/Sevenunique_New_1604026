"use client";

import { Users, Clock, ShieldCheck, Zap, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const pillars = [
  {
    icon: Users,
    title: "Top 1% Senior Engineers",
    subtitle: "Zero junior handoffs",
    description:
      "We strictly vet and staff senior-level engineers who have solved complex distributed systems challenges before. Your project gets experienced hands from day one.",
  },
  {
    icon: Clock,
    title: "Timezone & Real-Time Sync",
    subtitle: "Zero async lag",
    description:
      "Direct Slack/Teams communication with substantial timezone overlap across US, UK, and APAC hours. Daily standups and transparent sprint burndowns.",
  },
  {
    icon: ShieldCheck,
    title: "100% IP & Code Ownership",
    subtitle: "Your repository, your assets",
    description:
      "All code commits go straight into your GitHub/GitLab repositories. Comprehensive documentation, strict NDAs, and full IP transfer are guaranteed by contract.",
  },
  {
    icon: Zap,
    title: "Flexible Engagement Models",
    subtitle: "Scale in days, not months",
    description:
      "Adapt to changing business priorities with dedicated engineering pods, staff augmentation, or turnkey outcome-driven development contracts.",
  },
];

export default function ServicesWhyChoose() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28 text-[#0f172a] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 items-center">
          {/* LEFT COLUMN */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#ff6b3d]">
              <span className="h-2 w-2 rounded-full bg-[#ff6b3d]" />
              The SevenUnique Standard
            </div>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0f172a] sm:text-4xl md:text-5xl leading-tight">
              Why High-Growth Teams{" "}
              <span className="text-[#ff6b3d]">Choose SevenUnique</span>
            </h2>

            <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed">
              We aren&apos;t just another outsourcing vendor that ships code and disappears. We act as an
              accountable engineering partner that shares ownership of your business outcomes, product
              speed, and technical durability.
            </p>

            <div className="mt-8 rounded-2xl bg-[#0f172a] p-6 text-white shadow-xl">
              <p className="text-sm font-semibold text-[#ff8f6b] uppercase tracking-wider">
                Engineering Guarantee
              </p>
              <p className="mt-2 text-base text-gray-200 font-medium leading-relaxed">
                Clean, documented, maintainable architecture designed to be easily taken over or
                extended by your internal team anytime.
              </p>
              <Link
                href="/schedule-a-call-page"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#ff6b3d] hover:text-white transition-colors"
              >
                <span>Talk with an Engineering Director</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* RIGHT PILLARS GRID */}
          <div className="grid sm:grid-cols-2 gap-5">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="group rounded-3xl border border-gray-200/90 bg-[#f8fafc] p-6 sm:p-7 transition-all duration-300 hover:border-[#ff6b3d]/40 hover:bg-white hover:shadow-xl hover:-translate-y-1.5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100/70 text-[#ff6b3d] transition-colors group-hover:bg-[#ff6b3d] group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-[#0f172a] group-hover:text-[#ff6b3d] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#ff6b3d]">
                    {pillar.subtitle}
                  </p>

                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
