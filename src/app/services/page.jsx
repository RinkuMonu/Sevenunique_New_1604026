"use client";

import Link from "next/link";
import Image from "next/image";
import { GoHome } from "react-icons/go";
import { serviceData } from "./[slug]/data";
import CaseStudySection from "@/components/Services/CaseStudySection";

/* ── Card Component ── */
function ServiceCard({ service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="block bg-white rounded-[18px] border border-gray-200 p-8
                 transition-all duration-300 hover:shadow-sm"
    >
      <h3 className="text-[22px] font-semibold text-[#1f2937] underline underline-offset-4">
        {service.name}
      </h3>

      <p className="text-[15px] text-gray-600 mt-3 leading-7">
        {service.description}
      </p>
    </Link>
  );
}

export default function ServicesPage() {
  const services = Object.keys(serviceData).map((key) => ({
    slug: key,
    name: serviceData[key].hero.title,
    description: serviceData[key].hero.description,
  }));

  return (
    <div className="min-h-screen bg-[#f5f6f7]">

      {/* HERO */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-12 items-center gap-10">

          {/* LEFT */}
          <div className="col-span-12 lg:col-span-7">

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
              <GoHome />
              <span>›</span>
              <span className="font-medium text-gray-700">Solutions</span>
            </div>
            

            {/* Label */}
            <p className="text-xs tracking-[0.2em] text-gray-500 uppercase mb-4">
              Software Development Solutions
            </p>

            {/* Heading */}
            <h1 className="text-[52px] leading-[1.1] font-semibold text-[#111827]">
              finto our end-to-end <br />
              <span className="text-[#c2410c]">tech solutions.</span>
            </h1>

          </div>

          {/* RIGHT IMAGE (FIXED) */}
          <div className="col-span-12 lg:col-span-5 flex justify-end">
            <div className="relative w-[420px] h-[320px] overflow-hidden">

              <Image
                src="/images/solutions.png"
                alt="solutions"
                fill
                priority
                className="object-cover"
                style={{
                  clipPath:
                    "ellipse(80% 65% at 50% 50%)",
                }}
              />

            </div>
          </div>

        </div>
      </section>
                
      {/* TITLE */}
      <section className="max-w-6xl mx-auto px-6 pb-6">
        <h2 className="text-[32px] font-semibold text-[#111827]">
          Software Development & Design
        </h2>
      </section>

      {/* GRID */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <CaseStudySection />
    </div>
  );
}