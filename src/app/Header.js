"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const menuItems = ["Services", "Technologies", "Industries", "About"];

const servicesCols = [
  {
    label: "Top Services",
    items: [
      "AI Development",
      "Back-end Development",
      "CMS Development",
      "Cryptocurrency & Blockchain",
      "Front-end Development",
      "Machine Learning",
      "QA Testing & Automation",
      "UX/UI Design",
    ],
  },
  {
    label: "",
    items: [
      "Android App Development",
      "Business Intelligence",
      "Data Engineering",
      "eCommerce Development",
      "iOS App Development",
      "Mobile App Development",
      "SaaS Development",
      "Web Development",
    ],
  },
  {
    label: "Enterprise Focused",
    items: [
      "Backup Solutions",
      "Big Data",
      "Cloud Applications",
      "CRM Systems",
      "Cybersecurity",
      "DevOps",
      "Digital Transformation",
      "ERP Development",
    ],
  },
];

const technologiesCols = [
  [".NET", "AWS", "Django", "Java", "Machine Learning", "PHP", "React", "TypeScript"],
  ["AI", "C#", "Golang", "JavaScript", "Microsoft Azure", "Power BI", "Ruby", "Vue.js"],
  ["Angular", "C++", "Google Cloud", "Kotlin", "Node.js", "Python", "Salesforce", "Xamarin"],
];

const industriesCols = [
  ["Agriculture", "Banking", "Finance", "Insurance", "Real Estate", "Telecommunications"],
  ["Automotive", "Construction", "Startups", "Martech", "Retail", "Transportation and Logistics"],
  ["Aviation", "Entertainment", "Healthcare", "Oil and Gas", "Supply Chain", "Travel and Hospitality"],
];

const aboutCols = [
  {
    label: "Inside BairesDev",
    items: ["Our Leadership Team", "Our Tech Talent", "Press Releases", "Contact Us", "FAQs"],
  },
  {
    label: "Recognitions",
    items: ["Awards", "Certifications"],
  },
  {
    label: "Careers",
    items: ["Working at BairesDev", "Job Opportunities", "Talent Referrals", "Our Circles Program", "Company Culture"],
  },
];

function ArrowDown({ open }) {
  return (
    <svg
      className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function DotHeading({ children }) {
  return (
    <div className="mb-4 flex items-center gap-2">
      <span className="inline-block h-2 w-2 rounded-full bg-[#ff6a3d]" />
      <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-gray-400">{children}</span>
    </div>
  );
}

function LeftPanel({ title, subtitle, links, brand, blurb }) {
  return (
    <div className="w-[280px] shrink-0 border-r border-gray-200 bg-[#f5f5f7] px-7 py-8">
      <h2 className="mb-2 text-[25px] leading-none font-semibold text-[#111]">
        {title}
        <span className="text-[#ff6a3d]">.</span>
      </h2>
      <p className="mb-7 max-w-[230px] text-[12px] leading-7 text-gray-700">
        {subtitle}
      </p>
      <ul className="space-y-3 text-[12px]">
        {links.map((item) => (
          <li key={item}>
            <Link href="#" className="inline-flex font-medium text-[#111] transition-all duration-200 hover:translate-x-1 hover:text-[#ff6a3d]">
              {item}
            </Link>
          </li>
        ))}
      </ul>
      {(brand || blurb) && <div className="my-8 border-t border-gray-300" />}
      <div>
        {brand && <p className="mb-3 text-[12px] font-semibold text-[#222]">{brand}</p>}
        {blurb && <p className="max-w-[230px] text-[12px] leading-6 text-gray-700">{blurb}</p>}
      </div>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState(null);
  const panelAnimationStyle = { animation: "dropdownFadeSlide 220ms ease-out" };

  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/">
          <Image
            src="https://assets.bairesdev.com/image/upload/www/static/bairesdev-logo_mdbbsh.svg"
            alt="BairesDev"
            width={152}
            height={32}
            priority
          />
        </Link>

        <button
          type="button"
          aria-label="Toggle menu"
          className="inline-flex items-center rounded-md border border-gray-300 p-2 text-[#111] transition-colors hover:bg-gray-100 lg:hidden"
          onClick={() => {
            setMobileOpen((prev) => !prev);
            setMobileSection(null);
          }}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <nav className="relative hidden items-center gap-6 text-[14px] font-semibold text-[#111] xl:gap-9 xl:text-[15px] lg:flex">
          {menuItems.map((item) => {
            const id = item.toLowerCase();
            const isOpen = open === id;

            return (
              <div
                key={item}
                className="relative py-5 cursor-pointer"
                onMouseEnter={() => setOpen(id)}
                onMouseLeave={() => setOpen(null)}
              >
                <button
                  className={`relative flex items-center cursor-pointer gap-1 transition-colors ${isOpen ? "text-[#f46b45]" : "hover:text-[#f46b45]"}`}
                >
                  {item}
                  <ArrowDown open={isOpen} />
                  {isOpen && <span className="absolute -bottom-[23px] left-0 h-[4px] w-full bg-[#f4b09e]" />}
                </button>

                {id === "services" && isOpen && (
                  <div style={panelAnimationStyle} className="fixed inset-x-0 top-[72px] z-50 border-y border-gray-200 bg-white shadow-xl">
                    <div className="flex">
                      <LeftPanel
                        title="Services"
                        subtitle="Get software development services, built around your needs:"
                        links={["Staff Augmentation", "Dedicated Teams", "Software Outsourcing"]}
                        brand="Rolls-Royce"
                        blurb="We built an app for real-time nuclear plant monitoring. Read case study."
                      />
                      <div className="mx-auto flex-1 max-w-[1280px] px-12 py-10">
                        <div className="grid grid-cols-3 gap-10">
                          {servicesCols.map((col) => (
                            <div key={col.label || "services-second-col"}>
                              {col.label ? <DotHeading>{col.label}</DotHeading> : <div className="mb-4 h-[18px]" />}
                              <ul className="space-y-3">
                                {col.items.map((entry) => (
                                  <li key={entry}>
                                    <Link href="#" className="inline-flex text-[12px] text-[#222] transition-all duration-200 hover:translate-x-1 hover:text-[#f46b45]">
                                      {entry}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        <div className="mt-9">
                          <Link href="#" className="group inline-flex items-center gap-2 text-[12px] font-medium text-[#111] hover:text-[#f46b45]">
                            All Services
                            <span className="transition-transform group-hover:translate-x-1">→</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {id === "technologies" && isOpen && (
                  <div style={panelAnimationStyle} className="fixed inset-x-0 top-[72px] z-50 border-y border-gray-200 bg-white shadow-xl">
                    <div className="flex">
                      <LeftPanel
                        title="Technologies"
                        subtitle="Get experts in 100+ technologies. Cover any tech stack."
                        links={["Hire Software Developers", "Top 1% Talent"]}
                        brand="URBAN OUTFITTERS"
                        blurb="We optimized website performance, leading to 38% increase in net profits. Read case study."
                      />
                      <div className="mx-auto flex-1 max-w-[1280px] px-12 py-10">
                        <div className="grid grid-cols-3 gap-10">
                          {technologiesCols.map((col, index) => (
                            <ul key={`tech-col-${index}`} className="space-y-3">
                              {col.map((entry) => (
                                <li key={entry}>
                                  <Link href="#" className="inline-flex text-[13px] text-[#222] transition-all duration-200 hover:translate-x-1 hover:text-[#f46b45]">
                                    {entry}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          ))}
                        </div>
                        <div className="mt-9">
                          <Link href="#" className="group inline-flex items-center gap-2 text-[12px] font-medium text-[#111] hover:text-[#f46b45]">
                            All Technologies
                            <span className="transition-transform group-hover:translate-x-1">→</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {id === "industries" && isOpen && (
                  <div style={panelAnimationStyle} className="fixed inset-x-0 top-[72px] z-50 border-y border-gray-200 bg-white shadow-xl">
                    <div className="flex">
                      <LeftPanel
                        title="Industries"
                        subtitle="We've delivered 1250+ projects across 130+ sectors. Experience in your industry? We have it."
                        links={[]}
                        brand="IQVIA"
                        blurb="We scaled IQVIA's clinical research platforms with React. Read case study."
                      />
                      <div className="mx-auto flex-1 max-w-[1280px] px-12 py-10">
                        <div className="grid grid-cols-3 gap-10">
                          {industriesCols.map((col, index) => (
                            <ul key={`industry-col-${index}`} className="space-y-3">
                              {col.map((entry) => (
                                <li key={entry}>
                                  <Link href="#" className="inline-flex text-[13px] text-[#222] transition-all duration-200 hover:translate-x-1 hover:text-[#f46b45]">
                                    {entry}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          ))}
                        </div>
                        <div className="mt-9">
                          <Link href="#" className="group inline-flex items-center gap-2 text-[12px] font-medium text-[#111] hover:text-[#f46b45]">
                            All Industries
                            <span className="transition-transform group-hover:translate-x-1">→</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {id === "about" && isOpen && (
                  <div style={panelAnimationStyle} className="fixed inset-x-0 top-[72px] z-50 border-y border-gray-200 bg-white shadow-xl">
                    <div className="flex">
                      <LeftPanel
                        title="About"
                        subtitle="Since 2009, we've built software for companies of all types, from startups to Fortune 500 giants."
                        links={[]}
                        brand="Our CEO, speaking at the World Economic Forum at Davos 2025. Read more"
                        blurb=""
                      />
                      <div className="mx-auto flex-1 max-w-[1280px] px-12 py-10">
                        <div className="grid grid-cols-3 gap-10">
                          {aboutCols.map((col) => (
                            <div key={col.label}>
                              <DotHeading>{col.label}</DotHeading>
                              <ul className="space-y-3">
                                {col.items.map((entry) => (
                                  <li key={entry}>
                                  <Link href="#" className="inline-flex text-[13px] text-[#222] transition-all duration-200 hover:translate-x-1 hover:text-[#f46b45]">
                                      {entry}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        <div className="mt-9">
                          <Link href="#" className="group inline-flex items-center gap-2 text-[12px] font-medium text-[#111] hover:text-[#f46b45]">
                            Our Story
                            <span className="transition-transform group-hover:translate-x-1">→</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          <Link href="#" className="transition-colors hover:text-[#f46b45]">Our Work</Link>
          <Link href="/blog/history-of-ai" className="transition-colors hover:text-[#f46b45]">Blog</Link>

          <Link
            href="#"
            className="rounded-md bg-black px-4 py-2 text-[15px] font-medium text-white transition-colors hover:bg-gray-800"
          >
            Schedule a Call
          </Link>
        </nav>
      </div>

      {mobileOpen && (
        <div className="border-t border-gray-200 bg-white lg:hidden">
          <div className="mx-auto max-w-[1280px] px-4 py-3 sm:px-6">
            <div className="space-y-1">
              {menuItems.map((item) => {
                const id = item.toLowerCase();
                const isActive = mobileSection === id;
                let cols = [];

                if (id === "services") cols = servicesCols.map((col) => col.items).flat();
                if (id === "technologies") cols = technologiesCols.flat();
                if (id === "industries") cols = industriesCols.flat();
                if (id === "about") cols = aboutCols.map((col) => col.items).flat();

                return (
                  <div key={`mobile-${id}`} className="border-b border-gray-100 pb-1">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between py-3 text-left text-[15px] font-semibold text-[#111]"
                      onClick={() => setMobileSection(isActive ? null : id)}
                    >
                      <span>{item}</span>
                      <ArrowDown open={isActive} />
                    </button>
                    {isActive && (
                      <ul className="grid grid-cols-1 gap-y-2 pb-3 text-[13px] text-[#222] sm:grid-cols-2">
                        {cols.map((entry) => (
                          <li key={`${id}-${entry}`}>
                            <Link
                              href="#"
                              className="block rounded-md py-1 pr-2 transition-colors hover:text-[#f46b45]"
                              onClick={() => setMobileOpen(false)}
                            >
                              {entry}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-3 space-y-2 pb-2">
              <Link href="#" className="block py-2 text-[15px] font-semibold text-[#111] transition-colors hover:text-[#f46b45]">
                Our Work
              </Link>
              <Link href="/blog/history-of-ai" className="block py-2 text-[15px] font-semibold text-[#111] transition-colors hover:text-[#f46b45]">
                Blog
              </Link>
              <Link
                href="#"
                className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-black px-6 py-3 text-[15px] font-medium text-white transition-colors hover:bg-gray-800 sm:w-auto"
              >
                Schedule a Call
              </Link>
            </div>
          </div>
        </div>
      )}
      <style jsx global>{`
        @keyframes dropdownFadeSlide {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
}