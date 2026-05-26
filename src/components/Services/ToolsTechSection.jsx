"use client";

import { useState } from "react";

export default function ToolsTechSection({ toolsTech }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!toolsTech) return null;

  const { sectionLabel, heading, description, items } = toolsTech;
  const activeItem = items?.[activeIndex];

  return (
  <section className="relative overflow-hidden bg-white py-28 px-6 md:px-10">

  {/* BACKGROUND EFFECTS */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#fff3ed,transparent_30%),radial-gradient(circle_at_bottom_right,#f3f4f6,transparent_35%)]" />

  <div className="relative max-w-7xl mx-auto">

    {/* TOP */}
    <div className="max-w-4xl mb-20">

      <div className="inline-flex items-center gap-2 rounded-full border border-[#ff6433]/20 bg-[#ff6433]/5 px-5 py-2 mb-6">
        <span className="w-2 h-2 rounded-full bg-[#ff6433]" />

        <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#ff6433]">
          {sectionLabel}
        </p>
      </div>

      <h2 className="text-[44px] md:text-[58px] font-semibold leading-[1.08] tracking-[-0.03em] text-[#111827]">
        {heading}
      </h2>

      <p className="mt-7 max-w-3xl text-[17px] leading-[1.9] text-[#4b5563]">
        {description}
      </p>
    </div>

    {/* MAIN GRID */}
    <div className="grid lg:grid-cols-[420px_1fr] gap-10 items-start">

      {/* LEFT SIDEBAR */}
      <div className="space-y-4">

        {items.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`group relative cursor-pointer overflow-hidden rounded-[24px] border transition-all duration-500
              ${
                isActive
                  ? "border-[#ff6433]/30 bg-[#fff7f4] shadow-[0_20px_50px_rgba(255,100,51,0.08)]"
                  : "border-black/5 bg-white hover:border-[#ff6433]/20 hover:shadow-lg"
              }`}
            >

              {/* ACTIVE GLOW */}
              {isActive && (
                <div className="absolute right-[-40px] top-[-40px] h-32 w-32 rounded-full bg-[#ff6433]/10 blur-3xl" />
              )}

              <div className="relative flex items-start gap-5 p-6">

                {/* ICON */}
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-lg font-semibold transition-all
                  ${
                    isActive
                      ? "bg-[#ff6433] text-white"
                      : "bg-[#fff4ef] text-[#ff6433]"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* TEXT */}
                <div>

                  <h3
                    className={`text-[20px] leading-[1.4] transition-all
                    ${
                      isActive
                        ? "font-semibold text-[#111827]"
                        : "font-medium text-[#374151]"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[14px] leading-[1.7] text-[#6b7280]">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* RIGHT CONTENT */}
      <div className="relative">

        <div className="overflow-hidden rounded-[32px] border border-black/5 bg-white shadow-[0_25px_80px_rgba(0,0,0,0.06)]">

          {/* TOP */}
          <div className="border-b border-black/5 px-8 py-7">

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ff6433] text-white text-xl font-semibold">
                ✦
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-[#ff6433]">
                  Technology Stack
                </p>

                <h3 className="mt-1 text-[28px] font-semibold text-[#111827]">
                  {activeItem?.title}
                </h3>
              </div>
            </div>

            <p className="mt-6 max-w-3xl text-[16px] leading-[1.9] text-[#4b5563]">
              {activeItem?.description}
            </p>
          </div>

          {/* TOOLS */}
          <div className="p-8">

            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">

              {(activeItem?.tools || []).map((tool, i) => {

                const name =
                  typeof tool === "string" ? tool : tool.name;

                const logo =
                  typeof tool === "string"
                    ? `/tools/${tool
                        .toLowerCase()
                        .replace(/\s+/g, "")}.png`
                    : tool.logo;

                return (
                  <div
                    key={i}
                    className="group relative overflow-hidden rounded-2xl border border-black/5 bg-[#fafafa] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#ff6433]/20 hover:bg-white hover:shadow-lg"
                  >

                    {/* HOVER EFFECT */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ff6433]/0 via-[#ff6433]/0 to-[#ff6433]/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative flex flex-col items-center justify-center text-center">

                      <div className="h-[70px] flex items-center justify-center">
                        {logo ? (
                          <img
                            src={logo}
                            alt={name}
                            className="h-full w-full object-contain"
                          />
                        ) : (
                          <span className="text-sm text-gray-600">
                            {name}
                          </span>
                        )}
                      </div>

                      <p className="mt-5 text-[15px] font-medium text-[#111827]">
                        {name}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}