"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Wallet,
  GraduationCap,
  ShoppingBag,
} from "lucide-react";

const stats = [
  {
    number: "3500+",
    label: "Projects Delivered",
  },
  {
    number: "2700+",
    label: "Happy Clients",
  },
  {
    number: "200+",
    label: "API Integrations",
  },
  {
    number: "99.9%",
    label: "Server Uptime",
  },
];

const projects = [
  {
    title: "E-Commerce Website & Mobile App Development",
    desc: "Launch your online business with a powerful E-Commerce Website and Mobile Application designed for seamless shopping experiences. Our solution includes product management, secure payment gateways, order tracking, inventory management, responsive web design, and feature-rich Android & iOS apps. Build a scalable online store that increases sales, enhances customer engagement, and grows your brand across all digital platforms.",
    icon: ShoppingBag,
    image: "/images/ecomm-img2.PNG",
    tags: ["React", "Node.js", "MongoDB", "Mobikwik"],
    link: "/services/ecommerce-development",
  },
  {
    title: "KYC Verification Panel & API Integration Development",
    desc: "Build a secure and scalable KYC Verification Panel with seamless API integrations for instant customer onboarding and identity verification. Our solution supports Aadhaar Verification, PAN Verification, Document Validation, Face Match, OCR, Bank Account Verification, and real-time compliance checks. Available as both Web Portal and Mobile Application with advanced dashboards, automated workflows, secure data processing, and third-party API integration capabilities.",
    icon: ShieldCheck,
    image: "/images/verify-img2.PNG",
    tags: ["Verification", "Wallet", "APIs"],
    link: "/industries/finance",
  },
  {
    title: "BBPS Utility Website & Mobile App Development",
    desc: "Build a powerful and secure BBPS Utility Website & Mobile Application with advanced bill payment services. Enable Electricity, Water, Gas, DTH, Broadband, Mobile Recharge, Insurance, and other utility payments through a single platform. Our solution offers a modern 3D UI, real-time transaction tracking, secure payment processing, responsive web & mobile apps, and seamless user experience for customers and agents.",
    icon: Wallet,
    image: "/images/bbps-img2.PNG",
    tags: ["BBPS", "Fintech", "Wallet"],
    link: "/services/ecommerce-development",
  },
  {
    title: "Education Website & Mobile App Development",
    desc: "Create a powerful and interactive Education Website & Mobile Application designed for schools, coaching institutes, universities, and e-learning platforms. Our solution includes online courses, live classes, test series, student management, attendance tracking, digital study materials, progress analytics, payment gateway integration, and advanced admin panels. Deliver seamless learning experiences across web and mobile platforms with modern UI/UX and scalable technology.",
    icon: GraduationCap,
    image: "/images/edu-img2.PNG",
    tags: ["Courses", "Learning", "PDF"],
    link: "/services/ecommerce-development",
  },
];

const awards = [
  {
    title: "Jaipur's fastest-growing companies",
    year: "2025",
  },
  {
    title: "Enterprise excellence and IT Innovation",
    year: "2025",
  },
  {
    title: "Computerworld's Best Places to Work in IT",
    year: "2026",
  },
  {
    title: "Women in AI Awards - Finalist",
    year: "2025",
  },
];

const faq = [
  {
    q: "What technologies do you work with?",
    a: "We mainly work with MERN Stack, Next.js, fintech APIs, ecommerce systems and scalable backend architectures.",
  },
  {
    q: "Do you build fintech platforms?",
    a: "Yes, we build wallet systems, BBPS portals, payment integrations and verification systems.",
  },
  {
    q: "Do you provide long-term support?",
    a: "Yes, we provide scaling, maintenance and support for all client projects.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#f8f8f8] overflow-hidden">
      {/* HERO */}
      <section className="relative px-6 md:px-16 lg:px-24 pt-10 pb-24 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-3 text-sm text-gray-400 mb-16">
            <span>Home</span>
            <span>/</span>
            <span className="text-black font-medium">About Us</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT */}
            <div>
              <p className="uppercase tracking-[0.3em] text-orange-500 text-xs font-semibold mb-5">
                About Seven Unique
              </p>

              <h1 className="text-5xl md:text-7xl font-black text-[#111827] leading-[1.05] mb-8">
                Building Digital
                <span className="text-orange-500"> Products </span>
                That Help
                Businesses Grow.
              </h1>

              <p className="text-gray-500 text-lg leading-9 max-w-2xl mb-10">
                We help startups and enterprises build scalable fintech,
                ecommerce, verification and utility platforms with modern
                technologies and premium user experiences.
              </p>

              <div className="flex flex-wrap gap-5">
                <Link
                  href="/contact"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-3"
                >
                  Schedule a Call
                  <ArrowRight size={18} />
                </Link>

                {/* <Link
                  href="/projects"
                  className="border border-gray-300 hover:border-orange-500 hover:text-orange-500 px-8 py-4 rounded-2xl font-semibold transition-all duration-300"
                >
                  View Projects
                </Link> */}
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">
              <div className="relative h-[620px] rounded-[35px] overflow-hidden shadow-2xl">
                <Image
                  src="/images/team-handjoin.png"
                  alt="team"
                  fill
                  className="object-cover"
                />

                {/* FLOATING CARD */}
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-xl p-6 rounded-3xl shadow-xl">
                  <h3 className="text-4xl font-black text-orange-500">
                    3500+
                  </h3>
                  <p className="text-gray-600">
                    Successfully Delivered Projects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-6 md:px-16 lg:px-24 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-[28px] p-10 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
            >
              <h2 className="text-5xl font-black text-orange-500 mb-4">
                {item.number}
              </h2>

              <p className="text-gray-500 text-lg">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CEO SECTION */}
      <section className="px-6 md:px-16 lg:px-24 py-24 bg-[#fffaf6]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          {/* IMAGE */}
       

          {/* CONTENT */}
          <div>
            <p className="uppercase tracking-[0.3em] text-orange-500 text-xs font-semibold mb-5">
              Leadership & Vision
            </p>

            <h2 className="text-4xl md:text-6xl font-black text-[#111827] leading-tight mb-8">
              Innovation-driven
              growth journey.
            </h2>

            <p className="text-gray-500 text-lg leading-9 mb-10">
              Including our CEO speaking about the company’s fintech growth
              journey and innovation-driven vision focused on scalable digital
              solutions.
            </p>

            <div className="space-y-5">
              {[
                "Scalable fintech systems",
                "Enterprise-grade architecture",
                "Modern MERN applications",
                "Client-first development process",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4"
                >
                  <div className="w-7 h-7 rounded-full bg-orange-500 flex items-center justify-center text-white">
                    ✓
                  </div>

                  <p className="text-lg text-gray-700 font-medium">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
             <div className="relative">
            <div className="relative h-[550px] overflow-hidden rounded-2xl">
              <Image
                 src="/images/dineshsir.jpeg"
                alt="CEO"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="px-6 md:px-16 lg:px-24 py-28 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* TOP */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
            <div>
              <p className="uppercase tracking-[0.3em] text-orange-500 text-xs font-semibold mb-5">
                Featured Work
              </p>

              <h2 className="text-4xl md:text-6xl font-black text-[#111827] leading-tight">
                Successful Projects
              </h2>
            </div>

            <p className="max-w-xl text-gray-500 text-lg leading-8">
              We build fintech, ecommerce, utility and educational platforms
              with scalable architecture and premium experiences.
            </p>
          </div>

          {/* GRID */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, i) => {
              const Icon = project.icon;

              return (
                <Link
  href={project.link}
  className="block bg-[#fafafa] rounded-[35px] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500"
>
                <div
                  key={i}
                  className="bg-[#fafafa] rounded-[35px] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500"
                >
                  {/* IMAGE */}
                  <div className="relative h-[300px] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain hover:scale-105 transition-all duration-700"
                    />

                    <div className="absolute top-6 left-2 w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-lg">
                      <Icon className="text-orange-500" size={26} />
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[#111827] mb-5">
                      {project.title}
                    </h3>

                    <p className="text-gray-500 leading-8 text-base mb-8">
                      {project.desc}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 rounded-full bg-orange-50 text-orange-500 border border-orange-100 text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

</Link>

              );
            })}
          </div>
        </div>
      </section>

      {/* AWARDS */}
      <section className="px-6 md:px-16 lg:px-24 py-28 bg-[#fffaf6]">
        <div className="max-w-7xl mx-auto">
          {/* TOP */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-20">
            <div>
              <p className="uppercase tracking-[0.3em] text-orange-500 text-xs font-semibold mb-5">
                Recognition
              </p>

              <h2 className="text-4xl md:text-6xl font-black text-[#111827] leading-tight">
                Awards &
                Recognitions
              </h2>
            </div>

            <p className="max-w-xl text-gray-500 text-lg leading-8">
              Our work continues to receive recognition for innovation,
              technology excellence and scalable digital solutions.
            </p>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award, i) => (
              <div
                key={i}
                className="bg-white rounded-[28px] p-8 border border-gray-100 hover:shadow-xl transition-all duration-500"
              >
                <div className="flex items-center justify-between mb-10">
                  <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-2xl">
                    🏆
                  </div>

                  <span className="text-gray-400 text-sm">
                    {award.year}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#111827] leading-snug">
                  {award.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="px-6 md:px-16 lg:px-24 py-28 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[0.3em] text-orange-500 text-xs font-semibold mb-5">
              Why Choose Us
            </p>

            <h2 className="text-4xl md:text-6xl font-black text-[#111827]">
              Built for Modern Businesses
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {[
              "Fast Project Delivery",
              "Secure Payment Systems",
              "Modern UI/UX",
              "Scalable Architecture",
              "24/7 Support",
              "Enterprise APIs",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#fafafa] rounded-[28px] p-8 border border-gray-100 hover:shadow-xl transition-all duration-500"
              >
                <CheckCircle2
                  className="text-orange-500 mb-6"
                  size={34}
                />

                <h3 className="text-2xl font-bold text-[#111827] mb-4">
                  {item}
                </h3>

                <p className="text-gray-500 leading-8">
                  We deliver scalable solutions with premium development
                  standards and modern technologies.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

     
     

      
    </div>
  );
}