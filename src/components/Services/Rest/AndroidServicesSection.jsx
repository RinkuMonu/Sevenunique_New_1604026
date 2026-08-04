"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

export default function AndroidServicesSection({ data }) {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 180) setOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!data) return null;

  const { title, services, navItems } = data;

  return (
    <section id="android-services" className="bg-[#f8fafc] py-12 sm:py-16 lg:py-24">
      {/* ✅ FIXED HERE */}
      <div className="mx-auto flex max-w-7xl items-start gap-12 px-4 sm:px-6 lg:items-stretch lg:px-8">
        {/* LEFT */}
        <div className="w-full min-w-0 lg:flex-1">
          {/* Responsive UI update: section title scales at small breakpoints. */}
          <h2 className="mb-7 [overflow-wrap:anywhere] text-3xl font-semibold leading-tight text-black sm:mb-10 sm:text-4xl lg:text-[42px]">
            {title}
          </h2>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services?.map((item, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg sm:p-6">
                <div className="mb-2 flex min-w-0 gap-3">
                  <FaCheckCircle className="mt-1 shrink-0 text-orange-500" />
                  <h3 className="min-w-0 [overflow-wrap:anywhere] font-semibold leading-snug text-black">{item.title}</h3>
                </div>
                <p className="text-sm leading-6 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        {/* ✅ FIXED HERE */}
        <div className="hidden w-[260px] shrink-0 self-start lg:block">
          <div className="sticky top-24">
            <div
              onClick={() => setOpen(!open)}
              className="bg-black text-white px-4 py-3 flex justify-between items-center rounded-md cursor-pointer"
            >
              <span className="text-sm font-medium">Navigate</span>
              <FiChevronDown
                className={`transition-transform ${open ? "rotate-180" : ""}`}
              />
            </div>

            {open && (
              <div className="mt-6 space-y-4">
                {navItems?.map((item, i) => (
                  <p
                    key={i}
                    onClick={() => {
                      const id = item.toLowerCase().replace(/\s+/g, "-");
                      const section = document.getElementById(id);

                      if (section) {
                        section.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                    }}
                    className="text-sm text-gray-600 cursor-pointer hover:text-black"
                  >
                    {item}
                  </p>
                ))}
              </div>
            )}

            <div className="mt-4">
              <Link href="/schedule-a-call-page">
                <div className="bg-[#c2410c] text-white rounded-xl p-4 shadow-lg cursor-pointer">
                  <p className="text-sm font-medium">
                    Accelerate Your Software Development →
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
