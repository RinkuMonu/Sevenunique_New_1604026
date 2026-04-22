"use client";

import { Search } from "lucide-react";

const subNav = [
  "Software Development",
  "Biz & Tech",
  "Talent",
  "Technology",
  "Insights",
];

export default function SubNavbar() {
  return (
    <div className="w-full bg-white py-4">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* ROUNDED CONTAINER */}
        <div className="flex items-center gap-10 bg-[#f1f3f5] rounded-xl px-6 py-4">
          {/* LINKS */}
          {subNav.map((item) => (
            <a
              key={item}
              href="#"
              className="text-md font-bold text-[#656771] hover:text-gray-900 whitespace-nowrap tracking-wide"
            >
              {item}
            </a>
          ))}

          {/* SEARCH */}
          <div className="ml-auto flex items-center gap-2 text-gray-500 font-bold tracking-wide">
            <span className="text-sm">Search</span>
            <Search className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
