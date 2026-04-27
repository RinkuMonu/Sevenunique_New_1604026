"use client";

import { useState } from "react";
import Link from "next/link";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function TableContent() {
  const [open, setOpen] = useState(false);

  // ✅ Add href for each item
  const items = [
    { label: "BACKEND DEVELOPMENT SERVICES", href: "/backend-services" },
    { label: "Backend case studies", href: "/case-studies" },
    { label: "OUR BACKEND DEVELOPMENT TEAMS", href: "/backend-teams" },
    { label: "About BairesDev", href: "/about" },
    { label: "How we work", href: "/how-we-work" },
    { label: "Flexible engagement models", href: "/engagement-models" },
    { label: "BACKEND SOLUTIONS", href: "/backend-solutions" },
    { label: "BACKEND DEVELOPMENT CAPABILITIES", href: "/capabilities" },
    { label: "BACKEND DEVELOPMENT PROCESS", href: "/process" },
    { label: "Client testimonials", href: "/testimonials" },
    { label: "Backend FAQ", href: "/faq" },
    { label: "Useful Backend resources", href: "/resources" },
  ];

  return (
    <div className="w-fit">

      {/* BUTTON */}
      <div
        onClick={() => setOpen(!open)}
        className="cursor-pointer flex items-center gap-3 border px-4 py-2 rounded-lg w-fit bg-gray-100 shadow-sm hover:bg-gray-200"
      >
        {open ? (
          <HiOutlineX className="text-orange-500 text-xl" />
        ) : (
          <HiOutlineMenu className="text-orange-500 text-xl" />
        )}
        <span className="font-medium text-black">Table of Contents</span>
      </div>

      {/* DROPDOWN PANEL */}
      {open && (
        <div className="mt-2 w-[300px] bg-white border rounded-xl shadow-lg p-4 z-50">

          <ul className="space-y-3 text-sm text-gray-600">
            {items.map((item, i) => (
              <li key={i}>
                <Link
                  href={item.href}
                  className="flex items-start gap-2 hover:text-black cursor-pointer"
                >
                  <span className="mt-[6px] w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

        </div>
      )}
    </div>
  );
}