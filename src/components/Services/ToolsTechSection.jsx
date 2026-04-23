"use client";

import { useState } from "react";

export default function ToolsTechSection({ toolsTech }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!toolsTech) return null;

  const { sectionLabel, heading, description, items } = toolsTech;
  const activeItem = items?.[activeIndex];

  return (
    <section className="bg-[#f5f6f7] px-6 py-20 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* TOP */}
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4">
          {sectionLabel}
        </p>

        <h2 className="text-[42px] font-semibold leading-[1.2] text-[#101010] max-w-4xl mb-6">
          {heading}
        </h2>

        <p className="text-gray-600 max-w-3xl mb-12 leading-[1.7]">
          {description}
        </p>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT LIST */}
          <div className="flex flex-col gap-4">
            {items.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`cursor-pointer flex items-center gap-3 px-5 py-4 rounded-lg border transition-all duration-300
                    ${
                      isActive
                        ? "border-orange-500 bg-white"
                        : "border-gray-200 bg-gray-100"
                    }`}
                >
                  <span className="text-orange-500">✔</span>

                  <p
                    className={`text-[18px] font-outfit ${
                      isActive
                        ? "font-semibold text-black"
                        : "font-medium text-gray-800"
                    }`}
                  >
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>

          {/* RIGHT BOX */}
          <div className="hidden lg:block">
            <div className="border border-orange-400 rounded-xl p-6 bg-white shadow-md w-full max-w-[520px]">

              {/* DESCRIPTION */}
              <p className="text-gray-700 leading-[1.7] mb-6 text-[16px]">
                {activeItem?.description}
              </p>

              {/* LOGO GRID */}
              <div className="grid grid-cols-3 gap-4">
                {(activeItem?.tools || []).map((tool, i) => {
                  
                  const name = typeof tool === "string" ? tool : tool.name;
                  const logo =
                    typeof tool === "string"
                      ? `/tools/${tool.toLowerCase().replace(/\s+/g, "")}.png`
                      : tool.logo;

                  return (
                    <div
                      key={i}
                      className="flex items-center justify-center h-[90px] border border-gray-200 rounded-lg bg-white"
                    >
                      {logo ? (
                        <img
                          src={logo}
                          alt={name}
                          className="h-full w-full object-contain p-4"
                        />
                      ) : (
                        <span className="text-sm text-gray-600">{name}</span>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}