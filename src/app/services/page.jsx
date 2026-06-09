"use client";

import Link from "next/link";
import Image from "next/image";
import { GoHome } from "react-icons/go";
import { serviceData } from "./[slug]/data";
import CaseStudySection from "@/components/Services/CaseStudySection";
import ServicesGrid from "@/components/Services/Servicegridcard";

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


  const services = [
    {
      title: "AI DEVELOPMENT SERVICES",
      description:
        "We build intelligent AI solutions that move beyond prototypes. Our team helps organizations leverage generative AI, custom AI models, and autonomous AI systems to automate processes, enhance customer experiences, and accelerate growth.",
      image: "/images/services/ai-development.jpg",
    },
    {
      title: "BACK-END DEVELOPMENT SERVICES",
      description:
        "We develop secure, scalable, and cloud-ready backend infrastructures that power seamless user experiences, accelerate development, and support future growth.",
      image: "/images/services/backend-development.jpg",
    },
    {
      title: "CMS DEVELOPMENT SERVICES",
      description:
        "We develop custom content management systems that simplify content publishing, streamline workflows, and ensure exceptional performance across digital channels.",
      image: "/images/services/cms-development.jpg",
    },
    {
      title: "BLOCKCHAIN DEVELOPMENT SERVICES",
      description:
        "We design and develop blockchain-powered applications, smart contracts, and decentralized platforms that enhance transparency, security, and operational efficiency.",
      image: "/images/services/blockchain-development.jpg",
    },
  ];

export default function ServicesPage() {
  const services = Object.keys(serviceData).map((key) => ({
    slug: key,
    name: serviceData[key].hero.title,
    description: serviceData[key].hero.description,
  }));


  

  return (
    <div className="min-h-screen bg-[#325980]">

      {/* HERO */}
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
  {/* Background Image */}
  <Image
    src="/images/services-banner.png"
    alt="Solutions"
    fill
    priority
    className="object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60" />

  {/* Optional Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-24">
    {/* Breadcrumb */}
    <div className="flex items-center gap-2 text-sm text-gray-300 mb-6">
      <GoHome />
      <span>›</span>
      <span className="font-medium text-white">Solutions</span>
    </div>

    {/* Label */}
    <p className="text-xs tracking-[0.2em] text-orange-300 uppercase mb-4">
      Software Development Solutions
    </p>

    {/* Heading */}
    <h1 className="max-w-4xl text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight text-white">
      Build, scale, and grow
      <br />
      with expert
      <br />
      <span className="text-[#ff6b3d]">tech solutions.</span>
    </h1>

    {/* Description */}
    <p className="mt-6 max-w-2xl text-lg text-gray-200 leading-8">
      From AI and cloud engineering to web, mobile, and enterprise software,
      we help businesses launch, scale, and transform through technology.
    </p>

    {/* CTA */}
    <div className="mt-10 flex flex-wrap gap-4">
      <Link
        href="/schedule-a-call-page"
        className="rounded-xl bg-[#ff6b3d] px-7 py-4 text-white font-medium hover:bg-[#f45d2e] transition"
      >
        Schedule a Call
      </Link>

    </div>
  </div>
</section>
                
  <ServicesGrid services={services} />

      

      <CaseStudySection />
    </div>
  );
}