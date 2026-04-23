"use client";

import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

export default function AndroidServicesSection() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 180;
      setScrolled(isScrolled);

      if (isScrolled) setOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      title: "Custom Android App Development",
      desc: "Turn your idea into a functional, user-friendly Android application.",
    },
    {
      title: "UI/UX Design",
      desc: "Your apps should be user-friendly, attractive, and engaging.",
    },
    {
      title: "Cross-Platform Development",
      desc: "Build apps for iOS & Android using one codebase.",
    },
    {
      title: "Integration Services",
      desc: "Integrate APIs like payments, maps, authentication.",
    },
  ];

  const navItems = [
    "Android App Development Services We Provide",
    "Key Facts About Outsourcing Android App Development",
    "Best Practices for Android App Development",
    "Why Choose BairesDev for Android Mobile App Development?",
    "Our process. Simple, seamless, streamlined.",
    "Frequently Asked Questions (FAQ)",
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 flex gap-12 items-start">
        
        {/* LEFT */}
        <div className="w-full lg:w-[70%]">
          <h2 className="text-[42px] font-semibold mb-10 text-black">
            Android App Development Services We Provide
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {services.map((item, i) => (
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

        {/* RIGHT (STICKY FIXED PROPERLY) */}
        <div className="hidden lg:block w-[280px] self-start">
          
          <div className="sticky top-24">

            {/* NAV HEADER */}
            <div
              onClick={() => setOpen(!open)}
              className="bg-black text-white px-4 py-3 flex justify-between items-center rounded-md cursor-pointer"
            >
              <span className="text-sm font-medium">Navigate</span>
              <FiChevronDown
                className={`transition-transform ${
                  open ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* LIST */}
            {open && (
              <div className="mt-6 space-y-4">
                {navItems.map((item, i) => (
                  <p key={i} className="text-sm text-gray-600 leading-6">
                    {item}
                  </p>
                ))}
              </div>
            )}

            {/* CTA */}
            <div className="mt-4">
              <div className="bg-[#c2410c] text-white rounded-xl p-4 shadow-lg">
                <p className="text-sm font-medium">
                  Accelerate Your Software Development →
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}