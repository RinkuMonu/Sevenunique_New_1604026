"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const topServicesLeft = [
  "AI Development",
  "Back-end Development",
  "CMS Development",
  "Cryptocurrency & Blockchain",
  "Front-end Development",
  "Machine Learning",
  "QA Testing & Automation",
  "UX/UI Design",
];

const topServicesRight = [
  "Android App Development",
  "Business Intelligence",
  "Data Engineering",
  "eCommerce Development",
  "iOS App Development",
  "Mobile App Development",
  "SaaS Development",
  "Web Development",
];

const enterpriseFocused = [
  "Backup Solutions",
  "Big Data",
  "Cloud Applications",
  "CRM Systems",
  "Cybersecurity",
  "DevOps",
  "Digital Transformation",
  "ERP Development",
];

export default function Header() {
  const [open, setOpen] = useState(null);

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/">
          <Image
            src="https://assets.bairesdev.com/image/upload/www/static/bairesdev-logo_mdbbsh.svg"
            alt="logo"
            width={140}
            height={40}
            className="w-32 h-auto"
          />
        </Link>

        {/* NAV */}
        <nav className="hidden md:flex items-center gap-8 font-semibold relative">

          {/* SERVICES */}
          <div
            onMouseEnter={() => setOpen("services")}
            onMouseLeave={() => setOpen(null)}
            className="relative"
          >
            <button
              className={`flex items-center gap-1 transition-colors duration-150 ${
                open === "services" ? "text-orange-500" : "hover:text-orange-500"
              }`}
            >
              Services
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${open === "services" ? "rotate-180" : ""}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Active underline */}
            {open === "services" && (
              <span className="absolute -bottom-1 left-0 w-full h-[3px] rounded-full bg-orange-200" />
            )}

            {open === "services" && (
              <div
                className="absolute left-5 -translate-x-1/2 top-full mt-4 w-screen max-w-[1200px] bg-white shadow-2xl border border-gray-100 z-50"
                
              >
                <div className="flex">

                  {/* LEFT PANEL */}
                  <div className="w-64 bg-gray-50 border-r border-gray-100 px-6 py-7 flex-shrink-0">
                    <h2 className="text-xl font-bold text-gray-900 mb-1">
                      Services<span className="text-orange-500">.</span>
                    </h2>
                    <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                      Get{" "}
                      <Link href="#" className="text-gray-800 underline underline-offset-2 hover:text-orange-500 transition-colors">
                        software development services
                      </Link>
                      , built around your needs:
                    </p>

                    <ul className="space-y-3">
                      {["Staff Augmentation", "Dedicated Teams", "Software Outsourcing"].map((item) => (
                        <li key={item}>
                          <Link href="#" className="text-gray-800 font-medium text-sm hover:text-orange-500 transition-colors">
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>

                    <hr className="my-6 border-gray-200" />

                    {/* Case Study */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full border-2 border-gray-800 flex items-center justify-center flex-shrink-0">
                          <span className="text-[7px] font-bold text-gray-800">RR</span>
                        </div>
                        <span className="text-sm font-semibold text-gray-800 italic">Rolls-Royce®</span>
                      </div>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        We built an app for real-time nuclear plant monitoring.{" "}
                        <Link href="#" className="underline text-gray-700 hover:text-orange-500 transition-colors">
                          Read case study.
                        </Link>
                      </p>
                    </div>
                  </div>

                  {/* RIGHT CONTENT */}
                  <div className="flex-1 px-8 py-7">
                    <div className="flex gap-8">

                      {/* TOP SERVICES - Left */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-4">
                          <span className="w-2 h-2 rounded-full bg-orange-500 inline-block" />
                          <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                            Top Services
                          </span>
                        </div>
                        <ul className="space-y-2.5">
                          {topServicesLeft.map((s) => (
                            <li key={s}>
                              <Link href="#" className="text-gray-700 font-medium text-sm hover:text-orange-500 transition-colors block">
                                {s}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* TOP SERVICES - Right */}
                      <div className="flex-1">
                        <div className="mb-4 h-5" />
                        <ul className="space-y-2.5">
                          {topServicesRight.map((s) => (
                            <li key={s}>
                              <Link href="#" className="text-gray-700 font-medium text-sm hover:text-orange-500 transition-colors block">
                                {s}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* ENTERPRISE FOCUSED */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-4">
                          <span className="w-2 h-2 rounded-full bg-orange-500 inline-block" />
                          <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                            Enterprise Focused
                          </span>
                        </div>
                        <ul className="space-y-2.5">
                          {enterpriseFocused.map((s) => (
                            <li key={s}>
                              <Link href="#" className="text-gray-700 font-medium text-sm hover:text-orange-500 transition-colors block">
                                {s}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>

                    {/* All Services */}
                    <div className="mt-6 pt-5 border-t border-gray-100">
                      <Link
                        href="#"
                        className="flex items-center gap-1.5 text-gray-900 font-semibold text-sm hover:text-orange-500 transition-colors group"
                      >
                        All Services
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            )}
          </div>

          {/* TECHNOLOGIES */}
          <div
            onMouseEnter={() => setOpen("tech")}
            onMouseLeave={() => setOpen(null)}
            className="relative"
          >
            <button
              className={`flex items-center gap-1 transition-colors duration-150 ${
                open === "tech" ? "text-orange-500" : "hover:text-orange-500"
              }`}
            >
              Technologies
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${open === "tech" ? "rotate-180" : ""}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {open === "tech" && (
              <div
                className="absolute left-0 top-full mt-4 bg-white shadow-2xl border border-gray-100 z-50"
                style={{ width: "900px" }}
              >
                <div className="grid grid-cols-4">

                  {/* LEFT PANEL */}
                  <div className="bg-gray-50 border-r border-gray-100 p-6">
                    <h2 className="text-xl font-bold mb-2">
                      Technologies<span className="text-orange-500">.</span>
                    </h2>
                    <p className="text-gray-500 text-sm mb-4">
                      Get experts in 100+ technologies. Cover any tech stack.
                    </p>
                    <ul className="space-y-3 font-medium text-sm">
                      <li><Link href="#" className="hover:text-orange-500 transition-colors">Hire Software Developers</Link></li>
                      <li><Link href="#" className="hover:text-orange-500 transition-colors">Top 1% Talent</Link></li>
                    </ul>
                    <div className="mt-8 border-t border-gray-200 pt-4">
                      <h3 className="font-bold text-sm">URBAN OUTFITTERS</h3>
                      <p className="text-xs text-gray-500 mt-2">
                        We optimized website performance, leading to 38% increase in net profits.
                      </p>
                      <Link href="#" className="text-blue-600 text-xs underline hover:text-orange-500 transition-colors">
                        Read case study
                      </Link>
                    </div>
                  </div>

                  {/* COLUMN 1 */}
                  <div className="p-6 space-y-2.5 text-gray-700 text-sm">
                    {[".NET", "AWS", "Django", "Java", "Machine Learning", "PHP", "React", "TypeScript"].map((t) => (
                      <p key={t}><Link href="#" className="hover:text-orange-500 transition-colors">{t}</Link></p>
                    ))}
                  </div>

                  {/* COLUMN 2 */}
                  <div className="p-6 space-y-2.5 text-gray-700 text-sm">
                    {["AI", "C#", "Golang", "JavaScript", "Microsoft Azure", "Power BI", "Ruby", "Vue.js"].map((t) => (
                      <p key={t}><Link href="#" className="hover:text-orange-500 transition-colors">{t}</Link></p>
                    ))}
                  </div>

                  {/* COLUMN 3 */}
                  <div className="p-6 space-y-2.5 text-gray-700 text-sm">
                    {["Angular", "C++", "Google Cloud", "Kotlin", "Node.js", "Python", "Salesforce", "Xamarin"].map((t) => (
                      <p key={t}><Link href="#" className="hover:text-orange-500 transition-colors">{t}</Link></p>
                    ))}
                    <div className="pt-4 font-semibold">
                      <Link href="#" className="flex items-center gap-1 hover:text-orange-500 transition-colors group">
                        All Technologies
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            )}
          </div>

          {/* OTHER LINKS */}
          <Link href="#" className="hover:text-orange-500 transition-colors">Industries</Link>
          <Link href="#" className="hover:text-orange-500 transition-colors">About</Link>
          <Link href="#" className="hover:text-orange-500 transition-colors">Our Work</Link>
          <Link href="#" className="hover:text-orange-500 transition-colors">Blog</Link>

          {/* CTA */}
          <Link
            href="#"
            className="bg-black text-white px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-colors text-sm"
          >
            Schedule a Call
          </Link>
        </nav>
      </div>
    </header>
  );
}