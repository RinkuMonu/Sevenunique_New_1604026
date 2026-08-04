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
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fafc] via-white to-[#eef4ff] py-12 sm:py-16 lg:py-24">
      
      {/* Decorative Blurs */}
      <div className="absolute left-0 top-0 h-[350px] w-[350px] rounded-full bg-orange-100 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-[350px] w-[350px] rounded-full bg-blue-100 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">

          {/* LEFT CONTENT */}
          <div>
            <span className="inline-flex items-center rounded-full border border-[#d8e0ea] bg-white px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#5d7e9d] shadow-sm">
              {section.eyebrow}
            </span>

            <h2 className="mt-8 text-[32px] font-bold leading-[1.1] tracking-[-0.04em] text-[#101828] md:text-[50px]">
              {section.heading}
            </h2>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#475467] sm:mt-8 sm:text-lg sm:leading-[1.9]">
              {section.description}
            </p>

            {/* STATS */}
            {section.stats?.length > 0 && (
              <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-5">
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

              <div className="relative h-[300px] w-full overflow-hidden rounded-[20px] sm:h-[420px] md:h-[600px] md:rounded-[24px]">
                <Image
                  src="/images/india-map.png"
                  alt="Company trust"
                  fill
                  priority
                  className="object-cover transition duration-700 hover:scale-105"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute bottom-4 left-4 rounded-xl bg-white/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:bottom-8 sm:left-8 sm:rounded-2xl sm:px-6 sm:py-4">
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
