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
    <section id="android-services" className="bg-white py-16">
      {/* ✅ FIXED HERE */}
      <div className="max-w-7xl mx-auto px-6 flex gap-12 items-start lg:items-stretch">
        {/* LEFT */}
        <div className="w-full lg:w-[70%]">
          <h2 className="text-[42px] font-semibold mb-10 text-black">
            {title}
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {services?.map((item, i) => (
              <div key={i} className="border-t pt-6">
                <div className="flex gap-3 mb-2">
                  <FaCheckCircle className="text-orange-500 mt-1" />
                  <h3 className="font-semibold text-black">{item.title}</h3>
                </div>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        {/* ✅ FIXED HERE */}
        <div className="hidden lg:block w-[280px] self-start">
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
