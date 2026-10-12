"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const menuItems = [
  { name: "About", path: "/about-us" },
  { name: "Services", path: "/services" },
  { name: "Technologies", path: "/technologies" },
  { name: "Industries", path: "/industries" },
  // Temporarily hidden. Uncomment to restore Payment Solutions (desktop and mobile navigation).
  // { name: "Payment Solutions", path: "/payment-solutions" },
];

const paymentSolutionGroups = [
  {
    label: "Fintech Services",
    items: [
      { name: "Payin", path: "/payment-solutions/payin" },
      { name: "Payout", path: "/payment-solutions/payout" },
      { name: "DMT", path: "/payment-solutions/dmt" },
      { name: "AEPS", path: "/payment-solutions/aeps" },
    ],
  },
  {
    label: "Utility Services",
    items: [
      { name: "BBPS Bill Payments", path: "/payment-solutions/bbps-bill-payments" },
      { name: "Mobile & DTH Recharges", path: "/payment-solutions/recharges" },
      { name: "Electricity Bill Payment", path: "/payment-solutions/electricity-bill-payment" },
      { name: "Water Bill Payment", path: "/payment-solutions/water-bill-payment" },
      { name: "Gas Bill Payment", path: "/payment-solutions/gas-bill-payment" },
      { name: "FASTag Recharge", path: "/payment-solutions/fastag-recharge" },
      { name: "Broadband & Landline", path: "/payment-solutions/broadband-landline-payment" },
    ],
  },
  {
    label: "Verification Services",
    items: [
      { name: "CIBIL Score Check", path: "/payment-solutions/cibil-score-check" },
      { name: "PAN Verification with OTP", path: "/payment-solutions/pan-verification-otp" },
      { name: "Aadhaar Validation with OTP", path: "/payment-solutions/aadhaar-validation-otp" },
      { name: "GSTIN Verification", path: "/payment-solutions/gstin-verification" },
      { name: "Bank Verification", path: "/payment-solutions/bank-verification" },
      { name: "Udyam Verification", path: "/payment-solutions/udyam-verification" },
      { name: "CIN Verification", path: "/payment-solutions/cin-verification" },
      { name: "Voter ID Verification", path: "/payment-solutions/voter-id-verification" },
    ],
  },
  {
    label: "Booking Services",
    items: [
      { name: "Bus Booking", path: "/payment-solutions/bus-booking" },
      { name: "Hotel Booking", path: "/payment-solutions/hotel-booking" },
      { name: "Train Booking", path: "/payment-solutions/train-booking" },
      { name: "Flight Booking", path: "/payment-solutions/flight-booking" },
    ],
  },
  {
    label: "Loan & Insurance Services",
    items: [
      { name: "Credit Card", path: "/payment-solutions/credit-card" },
      { name: "Loans", path: "/payment-solutions/loans" },
      { name: "Home Loan", path: "/payment-solutions/home-loan" },
      { name: "Instant Loan", path: "/payment-solutions/instant-loan" },
      { name: "Personal Loan", path: "/payment-solutions/personal-loan" },
      { name: "Business Loan", path: "/payment-solutions/business-loan" },
      { name: "Education Loan", path: "/payment-solutions/education-loan" },
      { name: "Car Loan", path: "/payment-solutions/car-loan" },
      { name: "Gold Loan", path: "/payment-solutions/gold-loan" },
      { name: "Insurance", path: "/payment-solutions/insurance" },
      { name: "Health Insurance", path: "/payment-solutions/health-insurance" },
      { name: "Life Insurance", path: "/payment-solutions/life-insurance" },
      { name: "Motor Insurance", path: "/payment-solutions/motor-insurance" },
      { name: "Travel Insurance", path: "/payment-solutions/travel-insurance" },
    ],
  },
  {
    label: "Gifts & Vouchers",
    items: [
      { name: "Gift Cards & Vouchers", path: "/payment-solutions/gift-cards-vouchers" },
    ],
  },
];

const paymentSolutions = paymentSolutionGroups.flatMap((group) => group.items);

const servicesCols = [
  {
    label: "Top Services",
    items: [
      { name: "AI Development", link: "/services/ai-development" },
      { name: "Back-end Development", link: "/services/backend-development" },
      { name: "CMS Development", link: "/services/cms-development" },
      { name: "Cryptocurrency & Blockchain", link: "/services/blockchain" },
      { name: "Front-end Development", link: "/services/frontend-development" },
      { name: "Machine Learning", link: "/services/machine-learning" },
      { name: "QA Testing & Automation", link: "/services/qa-testing" },
      { name: "UX/UI Design", link: "/services/ui-ux-design" },
    ],
  },
  {
    label: "",
    items: [
      {
        name: "Android App Development",
        link: "/services/android-app-development",
      },
      {
        name: "Business Intelligence",
        link: "/services/business-intelligence",
      },
      { name: "Data Engineering", link: "/services/data-engineering" },
      {
        name: "eCommerce Development",
        link: "/services/ecommerce-development",
      },
      { name: "iOS App Development", link: "/services/ios-app-development" },
      {
        name: "Mobile App Development",
        link: "/services/mobile-app-development",
      },
      { name: "SaaS Development", link: "/services/saas-development" },
      { name: "Web Development", link: "/services/web-development" },
    ],
  },
  {
    label: "Enterprise Focused",
    items: [
      { name: "Backup Solutions", link: "/services/backup-solutions" },
      { name: "Big Data", link: "/services/big-data" },
      { name: "Cloud Applications", link: "/services/cloud-applications" },
      { name: "CRM Systems", link: "/services/crm-systems" },
      { name: "Cybersecurity", link: "/services/cybersecurity" },
      { name: "DevOps", link: "/services/devops" },
      {
        name: "Digital Transformation",
        link: "/services/digital-transformation",
      },
      { name: "ERP Development", link: "/services/erp-development" },
    ],
  },
];

const technologiesCols = [
  [
    { name: ".NET", path: "/technologies/dotnet" },
    { name: "AWS", path: "/technologies/aws" },
    { name: "Django", path: "/technologies/django" },
    { name: "Java", path: "/technologies/java" },
    { name: "Machine Learning", path: "/technologies/machine-learning" },
    { name: "PHP", path: "/technologies/php" },
    { name: "React", path: "/technologies/react" },
    { name: "TypeScript", path: "/technologies/typescript" },
  ],
  [
    { name: "AI", path: "/technologies/ai" },
    { name: "C#", path: "/technologies/csharp" },
    { name: "Golang", path: "/technologies/golang" },
    { name: "JavaScript", path: "/technologies/javascript" },
    { name: "Microsoft Azure", path: "/technologies/azure" },
    { name: "Power BI", path: "/technologies/power-bi" },
    { name: "Ruby", path: "/technologies/ruby" },
    { name: "Vue.js", path: "/technologies/vue" },
  ],
  [
    { name: "Angular", path: "/technologies/angular" },
    { name: "C++", path: "/technologies/cpp" },
    { name: "Google Cloud", path: "/technologies/google-cloud" },
    { name: "Kotlin", path: "/technologies/kotlin" },
    { name: "Node.js", path: "/technologies/nodejs" },
    { name: "Python", path: "/technologies/python" },
    { name: "Salesforce", path: "/technologies/salesforce" },
    { name: "Xamarin", path: "/technologies/xamarin" },
  ],
];

// const industriesCols = [
//   [
//     "Agriculture",
//     "Banking",
//     "Finance",
//     "Insurance",
//     "Real Estate",
//     "Telecommunications",
//   ],
//   [
//     "Automotive",
//     "Construction",
//     "Startups",
//     "Martech",
//     "Retail",
//     "Transportation and Logistics",
//   ],
//   [
//     "Aviation",
//     "Entertainment",
//     "Healthcare",
//     "Oil and Gas",
//     "Supply Chain",
//     "Travel and Hospitality",
//   ],
// ];

const industriesCols = [
  [
    { name: "Agriculture", slug: "agriculture" },
    { name: "Banking", slug: "banking" },
    { name: "Finance", slug: "finance" },
    { name: "Insurance", slug: "insurance" },
    { name: "Real Estate", slug: "real-estate" },
    { name: "Telecommunications", slug: "telecommunications" },
  ],
  [
    { name: "Automotive", slug: "automotive" },
    { name: "Construction", slug: "construction" },
    { name: "Startups", slug: "startups" },
    { name: "Martech", slug: "martech" },
    { name: "Retail", slug: "retail" },
    { name: "Education", slug: "education" },
  ],
  [
    { name: "Aviation", slug: "aviation" },
    { name: "Entertainment", slug: "entertainment" },
    { name: "Healthcare", slug: "healthcare" },
    { name: "Oil and Gas", slug: "oil-gas" },
    { name: "Supply Chain", slug: "supply-chain" },
    { name: "Travel and Hospitality", slug: "travel-hospitality" },
  ],
  [
    { name: "AEPS Software", slug: "aeps-software" },
    { name: "Recharge Software", slug: "recharge-software" },
    { name: "BBPS Software", slug: "bbps-software" },
    { name: "DMT Software", slug: "dmt-software" },
    { name: "UTI (Pancard) Software", slug: "uti-pancard-software" },
    { name: "Travel Software", slug: "travel-software" },
  ],
];

const aboutCols = [
  {
    label: "Inside Seven Unique",
    items: [
      { name: "Leadership Team", path: "/about-us/Leadership" },
      { name: "Our Tech Talent", path: "/about-us/tech-talent" },
      // { name: "Press Releases", path: "/about-us/press" },
      // { name: "Contact Us", path: "/contact-us" },
      { name: "FAQs", path: "/faq" },
    ],
  },
  {
    label: "Recognitions",
    items: [
      { name: "Awards", path: "/awards" },
      { name: "Certifications", path: "/certifications" },
    ],
  },
  {
    label: "Careers",
    items: [
      { name: "Working at Seven Unique", path: "/Working-at-Sevenunique" },
      { name: "Job Opportunities", path: "/jobOp" },
      { name: "Talent Referrals", path: "/ReferralPageAbout" },
      { name: "Our Circles Program", path: "/circle" },
      { name: "Company Culture", path: "/culture" },
    ],
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
      <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-gray-400">
        {children}
      </span>
    </div>
  );
}

function LeftPanel({ title, subtitle, links, brand, blurb, footerLink }) {
  return (
    <div className="flex w-[280px] shrink-0 flex-col border-r border-gray-200 bg-[#f5f5f7] px-7 py-8">
      <h2 className="mb-2 text-[25px] leading-none font-semibold text-[#111]">
        {title}
        <span className="text-[#ff6a3d]">.</span>
      </h2>
      <p className="mb-7 max-w-[230px] text-[12px] leading-7 text-gray-700">
        {subtitle}
      </p>
      <ul className="space-y-3 text-[12px]">
        {links.map((item) => (
          <li key={typeof item === "string" ? item : item.name}>
            <Link
              href={typeof item === "string" ? "#" : item.href}
              className="inline-flex font-medium text-[#111] transition-all duration-200 hover:translate-x-1 hover:text-[#ff6a3d]"
            >
              {typeof item === "string" ? item : item.name}
            </Link>
          </li>
        ))}
      </ul>
      {(brand || blurb) && <div className="my-8 border-t border-gray-300" />}
      <div className="flex flex-1 flex-col">
        {brand && (
          <p className="mb-3 text-[12px] font-semibold text-[#222]">{brand}</p>
        )}
        {blurb && (
          <p className="max-w-[230px] text-[12px] leading-6 text-gray-700">
            {blurb}
          </p>
        )}
        {footerLink && (
          <Link
            href={footerLink.href}
            className="mt-auto inline-flex items-center gap-2 border-t border-gray-300 pt-5 text-[12px] font-medium text-[#111] transition-colors duration-200 hover:text-[#ff6a3d]"
          >
            {footerLink.name}
            <span aria-hidden="true">→</span>
          </Link>
        )}
      </div>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState(null);
  const panelAnimationStyle = { animation: "dropdownFadeSlide 220ms ease-out" };

  // Responsive UI update: keep page position fixed while the mobile menu scrolls independently.
  useEffect(() => {
    if (!mobileOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-2 sm:px-6">
        <Link href="/" className="block">
          <Image
            src="/images/logo-2.png"
            alt="logo"
            width={866}
            height={288}
            className="h-14 w-auto object-contain"
            style={{ width: "auto" }}
          />
        </Link>
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          className="inline-flex items-center rounded-md border border-gray-300 p-2 text-[#111] transition-colors hover:bg-gray-100 lg:hidden"
          onClick={() => {
            setMobileOpen((prev) => !prev);
            setMobileSection(null);
          }}
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <nav className="relative hidden items-center gap-6 text-[14px] font-semibold text-[#111] xl:gap-9 xl:text-[15px] lg:flex">
          {menuItems.map((item) => {
            const id = item.name.toLowerCase();
            const isOpen = open === id;

            return (
              <div
                key={item.name}
                className="relative py-5 cursor-pointer"
                onMouseEnter={() => setOpen(id)}
                onMouseLeave={() => setOpen(null)}
              >
                <Link href={item.path}>
                  <button
                    className={`relative flex items-center cursor-pointer gap-1 transition-colors ${
                      isOpen ? "text-[#f46b45]" : "hover:text-[#f46b45]"
                    }`}
                  >
                    {item.name}
                    <ArrowDown open={isOpen} />
                    {isOpen && (
                      <span className="absolute -bottom-[23px] left-0 h-[4px] w-full bg-[#f4b09e]" />
                    )}
                  </button>
                </Link>
                {id === "services" && isOpen && (
                  <div
                    style={panelAnimationStyle}
                    className="fixed inset-x-0 top-[72px] z-50 border-y border-gray-200 bg-white shadow-xl"
                  >
                    <div className="flex">
                      <LeftPanel
                        title="Services"
                        subtitle="Get software development services, built around your needs:"
                        links={[
                          "Staff Augmentation",
                          "Dedicated Teams",
                          "Software Outsourcing",
                        ]}
                        brand="E-commerce"
                        blurb="We built a scalable eCommerce platform with real-time inventory tracking, secure payments, and seamless shopping experiences."
                      />
                      <div className="mx-auto flex-1 max-w-[1280px] px-12 py-10">
                        <div className="grid grid-cols-3 gap-10">
                          {servicesCols.map((col) => (
                            <div key={col.label || "services-second-col"}>
                              {col.label ? (
                                <DotHeading>{col.label}</DotHeading>
                              ) : (
                                <div className="mb-4 h-[18px]" />
                              )}
                              <ul className="space-y-3">
                                {col.items.map((entry, index) => {
                                  const isObject = typeof entry === "object";
                                  const name = isObject ? entry.name : entry;
                                  const path = isObject ? entry.link : "#";

                                  return (
                                    <li key={name + index}>
                                      <Link
                                        onClick={() => setOpen(null)}
                                        href={path}
                                        className="hover:text-[#f46b45]"
                                      >
                                        {name}
                                      </Link>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          ))}
                        </div>
                        <div className="mt-9">
                          <Link
                            href="/services"
                            className="group inline-flex items-center gap-2 text-[12px] font-medium text-[#111] hover:text-[#f46b45]"
                          >
                            All Services
                            <span className="transition-transform group-hover:translate-x-1">
                              →
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {id === "technologies" && isOpen && (
                  <div
                    style={panelAnimationStyle}
                    className="fixed inset-x-0 top-[72px] z-50 border-y border-gray-200 bg-white shadow-xl"
                  >
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
                                <li key={entry.name}>
                                  <Link
                                    onClick={() => setOpen(null)}
                                    href={entry.path}
                                    className="inline-flex text-[13px] text-[#222] transition-all duration-200 hover:translate-x-1 hover:text-[#f46b45]"
                                  >
                                    {entry.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          ))}
                        </div>
                        <div className="mt-9">
                          <Link
                            href="/technologies"
                            className="group inline-flex items-center gap-2 text-[12px] font-medium text-[#111] hover:text-[#f46b45]"
                          >
                            All Technologies
                            <span className="transition-transform group-hover:translate-x-1">
                              →
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {id === "industries" && isOpen && (
                  <div
                    style={panelAnimationStyle}
                    className="fixed inset-x-0 top-[72px] z-50 border-y border-gray-200 bg-white shadow-xl"
                  >
                    <div className="flex">
                      <LeftPanel
                        title="Industries"
                        subtitle="We've delivered 3500+ projects across 130+ sectors. Experience in your industry? We have it."
                        links={[]}
                        brand="IQVIA"
                        blurb="We scaled IQVIA's clinical research platforms with React. Read case study."
                      />
                      <div className="mx-auto flex-1 max-w-[1280px] px-12 py-10">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
                          {industriesCols.map((col, index) => (
                            <ul
                              key={`industry-col-${index}`}
                              className="space-y-3"
                            >
                              {col.map((entry) => (
                                <li key={entry.slug}>
                                  <Link href={`/industries/${entry.slug}`}>
                                    {entry.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          ))}
                        </div>
                        <div className="mt-9">
                          <Link
                            href="/industries"
                            className="group inline-flex items-center gap-2 text-[12px] font-medium text-[#111] hover:text-[#f46b45]"
                          >
                            All Industries
                            <span className="transition-transform group-hover:translate-x-1">
                              →
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {id === "payment solutions" && isOpen && (
                  <div
                    style={panelAnimationStyle}
                    className="fixed inset-x-0 top-[72px] z-50 max-h-[calc(100dvh-72px)] overflow-y-auto overscroll-contain border-y border-gray-200 bg-white shadow-xl"
                  >
                    <div className="flex">
                      <LeftPanel
                        title="Payment Solutions"
                        subtitle="Secure, scalable payment services built for businesses, agents, and customers."
                        links={[]}
                        brand="SEVENUNIQUE PAYMENTS"
                        blurb="Power collections, transfers, bill payments, travel, cards, and lending from one reliable platform."
                        footerLink={{
                          name: "All Payment Solutions",
                          href: "/payment-solutions",
                        }}
                      />
                      <div className="mx-auto max-w-[1280px] flex-1 px-7 py-6 xl:px-9">
                        <div
                          className="grid items-start gap-4"
                          style={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}
                        >
                          {paymentSolutionGroups.map((group) => (
                            <div
                              key={group.label}
                              className="rounded-xl border border-gray-200 bg-[#fafafa] px-4 py-3.5 transition-colors hover:border-orange-200 hover:bg-orange-50/30"
                              style={
                                group.label === "Loan & Insurance Services"
                                  ? { gridColumn: "span 3 / span 3" }
                                  : undefined
                              }
                            >
                              <div className="mb-2.5 flex items-center gap-2 border-b border-gray-200 pb-2.5">
                                <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff6a3d]" />
                                <h3 className="text-[10px] font-bold uppercase tracking-[0.14em] text-gray-500">
                                  {group.label}
                                </h3>
                              </div>
                              <ul
                                className="grid gap-x-3 gap-y-1.5"
                                style={
                                  group.label === "Loan & Insurance Services"
                                    ? { gridTemplateColumns: "repeat(5, minmax(0, 1fr))" }
                                    : { gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }
                                }
                              >
                                {group.items.map((entry) => (
                                  <li key={entry.name}>
                                    <Link
                                      href={entry.path}
                                      onClick={() => setOpen(null)}
                                      className="inline-flex py-0.5 text-[12px] font-semibold leading-4 text-[#333] transition-all duration-200 hover:translate-x-0.5 hover:text-[#f46b45]"
                                    >
                                      {entry.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {id === "about" && isOpen && (
                  <div
                    style={panelAnimationStyle}
                    className="fixed inset-x-0 top-[72px] z-50 border-y border-gray-200 bg-white shadow-xl"
                  >
                    <div className="flex">
                      <LeftPanel
                        title="About"
                        subtitle="Since 2024, we've built software for companies of all types, from startups to Fortune 500 giants."
                        links={[]}
                        // brand="Our CEO, speaking at the World Economic Forum at Davos 2025. Read more"
                        blurb=""
                      />
                      <div className="mx-auto flex-1 max-w-[1280px] px-12 py-10">
                        <div className="grid grid-cols-3 gap-10">
                          {aboutCols.map((col) => (
                            <div key={col.label}>
                              <DotHeading>{col.label}</DotHeading>
                              <ul className="space-y-3">
                                {col.items.map((entry) => (
                                  <li key={entry.name}>
                                    <Link
                                      href={entry.path}
                                      className="inline-flex text-[13px] text-[#222] transition-all duration-200 hover:translate-x-1 hover:text-[#f46b45]"
                                    >
                                      {entry.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          <Link
            href="/our-work-page"
            className="transition-colors hover:text-[#f46b45]"
          >
            Our Work
          </Link>
          {/* <Link
            href="/blog"
            className="transition-colors hover:text-[#f46b45]"
          >
            Blog
          </Link> */}
          <Link
            href="/schedule-a-call-page"
            className="rounded-md bg-black px-4 py-2 text-[15px] font-medium text-white transition-colors hover:bg-gray-800"
          >
            Schedule a Call
          </Link>
        </nav>
      </div>

      {mobileOpen && (
        // Responsive UI update: absolute positioning avoids backdrop-filter trapping fixed children.
        <div
          id="mobile-navigation"
          className="absolute inset-x-0 top-full z-40 h-[calc(100dvh-72px)] overflow-y-auto overscroll-contain border-t border-gray-200 bg-white shadow-xl [-webkit-overflow-scrolling:touch] lg:hidden"
        >
          <div className="mx-auto min-h-full max-w-[1280px] px-4 py-3 sm:px-6">
            <div className="space-y-1">
              {menuItems.map((item) => {
                const id = item.name.toLowerCase();
                const isActive = mobileSection === id;
                let cols = [];

                if (id === "services")
                  cols = servicesCols.map((col) => col.items).flat();
                if (id === "technologies") cols = technologiesCols.flat();
                if (id === "industries") cols = industriesCols.flat();
                if (id === "payment solutions") cols = paymentSolutions;
                if (id === "about")
                  cols = aboutCols.map((col) => col.items).flat();

                return (
                  <div
                    key={`mobile-${id}`}
                    className="border-b border-gray-100 pb-1"
                  >
                    <button
                      type="button"
                      className="flex w-full items-center justify-between py-3 text-left text-[15px] font-semibold text-[#111]"
                      onClick={() => setMobileSection(isActive ? null : id)}
                    >
                      <span>{item.name}</span>
                      <ArrowDown open={isActive} />
                    </button>
                    {isActive && (
                      id === "payment solutions" ? (
                        <div className="grid grid-cols-1 gap-5 pb-4 sm:grid-cols-2">
                          {paymentSolutionGroups.map((group) => (
                            <div key={`mobile-${group.label}`}>
                              <DotHeading>{group.label}</DotHeading>
                              <ul className="space-y-2 text-[13px] text-[#222]">
                                {group.items.map((entry) => (
                                  <li key={entry.name}>
                                    <Link
                                      href={entry.path}
                                      className="block rounded-md py-1 pr-2 transition-colors hover:text-[#f46b45]"
                                      onClick={() => setMobileOpen(false)}
                                    >
                                      {entry.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <ul className="grid grid-cols-1 gap-y-2 pb-3 text-[13px] text-[#222] sm:grid-cols-2">
                          {cols.map((entry) => {
                            const isObject = typeof entry === "object";
                            const name = isObject ? entry.name : entry;
                            const path = isObject
                              ? entry.link ||
                                entry.path ||
                                (entry.slug ? `/industries/${entry.slug}` : "#")
                              : "#";

                            return (
                              <li key={name}>
                                <Link
                                  href={path}
                                  className="block rounded-md py-1 pr-2 transition-colors hover:text-[#f46b45]"
                                  onClick={() => setMobileOpen(false)}
                                >
                                  {name}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      )
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-3 space-y-2 pb-[calc(1rem+env(safe-area-inset-bottom))]">
              <Link
                href="#"
                className="block py-2 text-[15px] font-semibold text-[#111] transition-colors hover:text-[#f46b45]"
              >
                Our Work
              </Link>
              <Link
                href="/blog/history-of-ai"
                className="block py-2 text-[15px] font-semibold text-[#111] transition-colors hover:text-[#f46b45]"
              >
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
    </header>
  );
}
