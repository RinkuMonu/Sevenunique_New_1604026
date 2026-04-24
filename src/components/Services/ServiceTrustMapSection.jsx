"use client";

import Image from "next/image";

function StatCard({ stat }) {
  return (
    <div className="min-w-[120px]">
      <p className="text-[36px] md:text-[42px] font-semibold leading-none tracking-[-0.03em] text-[#f97348]">
        {stat.value}
      </p>

      <div className="mt-3 border-t border-[#d3d8de] pt-3">
        <p className="text-[13px] md:text-[14px] leading-[1.5] text-[#425466]">
          {stat.label}
        </p>
      </div>
    </div>
  );
}

export default function ServiceTrustMapSection({ section }) {
  if (!section) return null;

  return (
    <section className="bg-white px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-16 xl:grid-cols-[1fr_1.5fr] items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <p className="text-[14px] font-semibold uppercase tracking-[0.22em] text-[#5d7e9d]">
            {section.eyebrow}
          </p>

          <h2 className="mt-5 text-[36px] font-semibold leading-[1.18] tracking-[-0.04em] text-[#0b1320] md:text-[54px]">
            {section.heading}
          </h2>

          <p className="mt-8 text-[18px] leading-[1.75] text-[#344054]">
            {section.description}
          </p>

          {/* STATS */}
          {section.stats?.length && (
            <div className="mt-12 flex flex-wrap md:flex-nowrap gap-x-12 gap-y-8">
              {section.stats.map((stat) => (
                <StatCard key={`${stat.value}-${stat.label}`} stat={stat} />
              ))}
            </div>
          )}
        </div>

        {/* RIGHT IMAGE (BIGGER) */}
        <div className="relative w-full h-[520px] md:h-[580px]">
          <Image
            src={section.image}
            alt="Company trust"
            fill
            className="object-contain"
            priority
          />
        </div>

      </div>
    </section>
  );
}