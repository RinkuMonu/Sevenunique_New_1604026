"use client";

import { Search } from "lucide-react";


export default function JobsPage() {
  const jobs = Array(15).fill({
    title:
      "Sales Director (Healthcare Industry) | Remote Work | New York, New York, United States",
    description:
      "In this role, you will be in charge of sourcing, nurturing, and closing new BairesDev clients primarily from your network and/or industry that are not inbound leads. This is a Hunter role.",
    category: "Sales/Business Development",
  });

  return (
    <div className="bg-[#f5f6f8] min-h-screen flex flex-col">

      {/* ================= TITLE + SEARCH ================= */}
      <section className="text-center py-10 px-4">
        <h1 className="text-[48px] md:text-[34px] font-bold text-[#1e2a4a]">
          Explore Our Fully Remote Open Positions
        </h1>

        {/* SEARCH BAR */}
        <div className="mt-6 max-w-5xl mx-auto relative">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 py-10"
          />

          <input
            type="text"
            placeholder="Job title, company, and keyword"
            className="py-5 w-full pl-10 pr-4 py-3 rounded-lg border text-gray-600 border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
      </section>

      {/* ================= JOB GRID ================= */}
      <section className="px-4 pb-10 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-5 flex flex-col justify-between transition-all duration-200 hover:shadow-md hover:-translate-y-1"
            >
              {/* CONTENT */}
              <div>
                <h3 className="font-semibold text-[20px] text-gray-800 leading-snug line-clamp-3">
                  {job.title}
                </h3>

                <p className="mt-3 text-sm text-gray-500 line-clamp-3">
                  {job.description}
                </p>
              </div>

              {/* FOOTER */}
              <div className="flex items-center justify-between mt-5 bg-gray-200">
                <span className="text-xs px-3 py-1 text-gray-600">
                  {job.category}
                </span>

                <button className="bg-[#ff6a3d] text-white text-sm px-4 py-2  hover:bg-[#e85c32] transition">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ================= PAGINATION ================= */}
        <div className="mt-10 flex justify-start items-end gap-2">
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className={`px-3 py-1 border rounded text-sm ${
                page === 1
                  ? "bg-gray-200 text-black"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#ff6a3d] text-white mt-auto">
        <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex items-center gap-2 font-semibold">
            <span>▸▸</span>
            <span>BairesDev</span>
          </div>

          <p className="mt-2 md:mt-0">
            BairesDev 2009 - 2026. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
