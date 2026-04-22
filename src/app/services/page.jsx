"use client";

import Link from "next/link";
import { serviceData } from "./[slug]/data";
import CaseStudySection from "@/components/Services/CaseStudySection";

/* ── Card Component ── */
function ServiceCard({ service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="bg-white rounded-2xl border border-gray-200 p-6
                 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
    >
      <h3 className="text-lg font-semibold text-gray-800">
        {service.name}
      </h3>

      <p className="text-sm text-gray-500 mt-2">
        {service.description}
      </p>
    </Link>
  );
}

export default function ServicesPage() {
  // Convert data → array
  const services = Object.keys(serviceData).map((key) => ({
    slug: key,
    name: serviceData[key].hero.title,
    description: serviceData[key].hero.description,
  }));

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO */}
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold text-gray-900">
          Our Services
        </h1>
        <p className="text-gray-500 mt-4">
          Explore what we can build for you.
        </p>
      </section>

      {/* GRID */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <CaseStudySection />
    </div>

  );
}
