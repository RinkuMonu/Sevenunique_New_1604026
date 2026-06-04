"use client";

import Image from "next/image";

function StatCard({ stat }) {
  return (
    <div className="group rounded-2xl border border-white/30 bg-white/80 backdrop-blur-md p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <p className="text-[36px] md:text-[42px] font-bold leading-none text-[#f97348]">
        {stat.value}
      </p>

      <p className="mt-3 text-[14px] leading-relaxed text-[#475467]">
        {stat.label}
      </p>
    </div>
  );
}

export default function ServiceTrustMapSection({ section }) {
  if (!section) return null;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fafc] via-white to-[#eef4ff] py-24">
      
      {/* Decorative Blurs */}
      <div className="absolute left-0 top-0 h-[350px] w-[350px] rounded-full bg-orange-100 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-[350px] w-[350px] rounded-full bg-blue-100 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div>
            <span className="inline-flex items-center rounded-full border border-[#d8e0ea] bg-white px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#5d7e9d] shadow-sm">
              {section.eyebrow}
            </span>

            <h2 className="mt-8 text-[32px] font-bold leading-[1.1] tracking-[-0.04em] text-[#101828] md:text-[50px]">
              {section.heading}
            </h2>

            <p className="mt-8 max-w-xl text-[18px] leading-[1.9] text-[#475467]">
              {section.description}
            </p>

            {/* STATS */}
            {section.stats?.length > 0 && (
              <div className="mt-12 grid grid-cols-2 gap-5">
                {section.stats.map((stat) => (
                  <StatCard
                    key={`${stat.value}-${stat.label}`}
                    stat={stat}
                  />
                ))}
              </div>
            )}
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-orange-200/30 to-blue-200/30 blur-3xl" />

            <div className="relative overflow-hidden rounded-[32px] border border-white/50 bg-orange-400 p-4 shadow-[0_30px_80px_rgba(15,23,42,0.12)]">

              <div className="relative h-[500px] md:h-[600px] w-full overflow-hidden rounded-[24px]">
                <Image
                  src="/images/india-map.png"
                  alt="Company trust"
                  fill
                  priority
                  className="object-cover transition duration-700 hover:scale-105"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute left-8 bottom-8 rounded-2xl bg-white/90 backdrop-blur-xl px-6 py-4 shadow-xl">
                <p className="text-[32px] font-bold text-[#101828]">
                  500+
                </p>
                <p className="text-sm text-[#475467]">
                  Our Clients Trust Us
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}