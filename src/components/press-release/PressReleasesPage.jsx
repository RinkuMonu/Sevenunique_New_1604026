"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { ChevronRight, ChevronLeft, Home } from "lucide-react";

const data = [
  {
    title:
      "64% of Women Developers Say AI Has Increased Their Career Agency, BairesDev’s Survey Finds",
    date: "March 3, 2026",
    img: "/images/n1.png",
  },
  {
    title:
      "BairesDev Named Top Global B2B Service Provider by Clutch",
    date: "February 12, 2026",
    img: "/images/n2.png",
  },
  {
    title:
      "BairesDev Joins World Economic Forum as Associate Partner, Capping a Year of Enterprise Expansion",
    date: "January 7, 2026",
    img: "/images/n3.png",
  },
  {
    title:
      "BairesDev Joins World Economic Forum as Associate Partner, Capping a Year of Enterprise Expansion",
    date: "January 7, 2026",
    img: "/images/n4.png",
  },
    {
    title:
      "BairesDev Joins World Economic Forum as Associate Partner, Capping a Year of Enterprise Expansion",
    date: "January 7, 2026",
    img: "/images/n5.png",
  },
    {
    title:
      "BairesDev Joins World Economic Forum as Associate Partner, Capping a Year of Enterprise Expansion",
    date: "January 7, 2026",
    img: "/images/n6.png",
  },
    {
    title:
      "BairesDev Joins World Economic Forum as Associate Partner, Capping a Year of Enterprise Expansion",
    date: "January 7, 2026",
    img: "/images/n3.png",
  },
    {
    title:
      "BairesDev Joins World Economic Forum as Associate Partner, Capping a Year of Enterprise Expansion",
    date: "January 7, 2026",
    img: "/images/n2.png",
  },
    {
    title:
      "BairesDev Joins World Economic Forum as Associate Partner, Capping a Year of Enterprise Expansion",
    date: "January 7, 2026",
    img: "/images/n5.png",
  },
    {
    title:
      "BairesDev Joins World Economic Forum as Associate Partner, Capping a Year of Enterprise Expansion",
    date: "January 7, 2026",
    img: "/images/n2.png",
  },
    {
    title:
      "BairesDev Joins World Economic Forum as Associate Partner, Capping a Year of Enterprise Expansion",
    date: "January 7, 2026",
    img: "/images/n6.png",
  },
    {
    title:
      "BairesDev Joins World Economic Forum as Associate Partner, Capping a Year of Enterprise Expansion",
    date: "January 7, 2026",
    img: "/images/n5.png",
  },

];

export default function PressReleasesPage() {
  const itemsPerPage = 6; // 2 rows × 3 columns (matches your layout)
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="w-full bg-[#f3f4f6] px-6 md:px-12 py-10">
      <div className="max-w-7xl mx-auto">

        {/* BREADCRUMB */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Home size={16} />
          <ChevronRight size={16} />
          <Link href="/media-hub">
  <span className="cursor-pointer">Press</span>
</Link>
          <ChevronRight size={16} />
          <span className="text-black font-medium">Press Releases</span>
        </div>

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-semibold text-[#1f2937] mb-8">
          Press Releases (132)
        </h1>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {currentItems.map((item, index) => (
            <div key={index} className="bg-white rounded-md overflow-hidden">

              <div className="relative w-full h-[220px]">
                <Image
                  src={item.img}
                  alt="press"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#1f2937] leading-snug">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm text-gray-500">
                  {item.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* PAGINATION */}
        <div className="flex items-center justify-center gap-3 mt-12">

          {/* LEFT */}
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            className="text-gray-400 hover:text-black"
          >
            <ChevronLeft size={18} />
          </button>

          {/* NUMBERS */}
          {[...Array(totalPages)].map((_, i) => {
            const page = i + 1;
            const active = page === currentPage;

            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`
                  w-9 h-9 flex items-center justify-center rounded-md text-sm
                  ${active ? "bg-gray-800 text-white" : "hover:bg-gray-200"}
                `}
              >
                {page}
              </button>
            );
          })}

          {/* RIGHT */}
          <button
            onClick={() =>
              setCurrentPage((p) => Math.min(p + 1, totalPages))
            }
            className="text-black hover:text-gray-600"
          >
            <ChevronRight size={18} />
          </button>

        </div>

      </div>
    </section>
  );
}