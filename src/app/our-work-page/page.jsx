
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";


export default function PortfolioPage() {
  const [portfolio] = useState([
  {
    id: 1,
    title: "E-commerce Website for Fashion Brand",
    product_category: "E-Commerce Platform",
    image: "/images/jajam.jpeg",
    summary:
      "A modern clothing e-commerce platform developed for a fashion brand with smooth shopping experience, secure checkout and scalable architecture.",
    description:
      "E-commerce Website for Fashion Brand is a full-featured e-commerce platform developed using the MERN stack. The platform allows customers to browse clothing collections, place orders, manage accounts and complete secure online payments. We integrated the Mobikwik payment gateway for seamless transactions and built a responsive user experience optimized for mobile and desktop devices.",
    technology_used:
      "React.js || Node.js || Express.js || MongoDB || Mobikwik || Tailwind CSS",
    product_link: "https://jajamblockprints.com/",
    status: "Completed",
  },
  {
    id: 2,
    title: "Banking Verification Platform",
    product_category: "Verification Platform",
    image: "/images/avatar1.png",
    summary:
      "Enterprise verification panel with 200+ APIs for Aadhaar, GST, PAN, license and multiple document verification services.",
    description:
      "Verify Panel is a powerful document verification platform built using React and Node.js. The platform integrates more than 200 APIs for PAN verification, GST verification, driving license verification, Aadhaar validation and many other government and private verification services. The system supports retailer and business verification workflows with per-hit API charging functionality.",
    technology_used:
      "React.js || Node.js || MongoDB || REST APIs || Express.js",
    product_link: "https://7uniqueverify.com/",
    status: "Completed",
  },
  {
    id: 3,
    title: "Fintech Utility Services Portal",
    product_category: "Fintech Platform",
    image: "/images/bbps.jpeg",
    summary:
      "A BBPS utility payment platform designed for retailers and distributors with wallet management and utility services.",
    description:
      "The BBPS Utility Service Portal is a fintech-based utility management platform developed for retailers and distributors. The portal provides multiple utility services including bill payments, recharge systems and wallet management. We developed a complete distributor-retailer hierarchy with wallet functionality, transaction management and scalable backend architecture.",
    technology_used:
      "React.js || Node.js || MongoDB || BBPS APIs || Wallet System",
    product_link: "https://finuniques.in/",
    status: "Completed",
  },
  {
    id: 4,
    title: "Education Website",
    product_category: "EdTech Platform",
    image: "/images/pvv.jpeg",
    summary:
      "An educational platform for selling courses, lecture videos, current affairs PDFs and GK study materials.",
    description:
      "PV Classes is an online learning platform built for educational content delivery and course selling. Students can purchase courses, access lecture videos, download PDFs, read current affairs content and study GK materials through an easy-to-use interface. The system includes authentication, content management and secure course access functionality.",
    technology_used:
      "React.js || Node.js || MongoDB || Video Streaming || Payment Gateway",
    product_link: "https://pvclasses.in/",
    status: "Completed",
  },
  {
    id: 5,
    title: "Electronics E-Commerce Website",
    product_category: "Electronics E-Commerce",
    image: "/images/digi.jpeg",
    summary:
      "A modern electronics e-commerce website designed for selling gadgets, accessories and digital products online.",
    description:
      "DigiHub Electronics is a scalable e-commerce platform developed for selling electronic products, gadgets and accessories online. The platform includes product management, secure checkout, responsive UI, category filtering, cart system and payment gateway integration for seamless customer shopping experience across devices.",
    technology_used:
      "React.js || Node.js || MongoDB || Express.js || Payment Gateway",
    product_link: "https://digihubtech.in/",
    status: "Completed",
  },
]);
  const [selectedProject, setSelectedProject] = useState(null);

  

  return (
    <div className="min-h-screen bg-[#f7f8fc]">
      {/* HERO */}
      <section className="pt-16 pb-20 px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <span className="uppercase tracking-[4px] text-sm text-gray-500">
            Portfolio
          </span>

          <h1 className="text-[42px] md:text-[70px] leading-[1.05] font-semibold text-[#111] mt-5 max-w-5xl mx-auto">
            Successfully Delivered Digital Products For Businesses
          </h1>

          <p className="text-gray-500 text-lg leading-8 mt-6 max-w-3xl mx-auto">
            We help startups and enterprises build scalable web apps,
            fintech platforms, mobile applications and enterprise software.
          </p>
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="pb-24 px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {portfolio.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-[32px] border border-gray-200 overflow-hidden hover:border-black transition duration-500"
            >
              {/* IMAGE */}
              <div className="relative h-[280px] overflow-hidden bg-[#f4f4f4]">
                <Image
                  src={project.image || "/placeholder.png"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-700"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-500" />

                {/* VIEW BUTTON */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="absolute bottom-5 left-5 opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0 transition duration-500 bg-white text-black px-5 h-[50px] rounded-2xl text-sm font-medium flex items-center gap-2"
                >
                  View Details
                  <ArrowRight size={16} />
                </button>
              </div>

              {/* CONTENT */}
              <div className="p-7">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-4 py-2 rounded-full bg-[#f5f5f5] text-sm text-gray-700">
                    {project.product_category}
                  </span>

                  <span className="text-green-600 text-sm font-medium">
                    Completed
                  </span>
                </div>

                <h2 className="text-[28px] leading-[36px] font-semibold text-[#111]">
                  {project.title}
                </h2>

                <p className="text-gray-500 leading-7 mt-4 line-clamp-3">
                  {project.summary}
                </p>

                {/* TECH */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project?.technology_used
                    ?.split("||")
                    .slice(0, 4)
                    .map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-2 rounded-full bg-[#f7f7f7] text-sm text-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                </div>

                {/* BUTTON */}
                <div className="flex items-center justify-between mt-8">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-black font-medium inline-flex items-center gap-2"
                  >
                    View More
                    <ArrowRight size={18} />
                  </button>

                  <Link
                    href={project.product_link || "#"}
                    target="_blank"
                    className="text-gray-500 hover:text-black transition"
                  >
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-5xl rounded-[35px] overflow-hidden relative animate-in fade-in zoom-in duration-300 max-h-[90vh] overflow-y-auto">
            {/* CLOSE */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center z-20"
            >
              <X size={20} />
            </button>

            <div className="grid lg:grid-cols-2">
              {/* IMAGE */}
              <div className="relative min-h-[320px] lg:min-h-full bg-[#f5f5f5]">
                <Image
                  src={selectedProject.image || "/placeholder.png"}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-8 md:p-10">
                <span className="px-4 py-2 rounded-full bg-[#f5f5f5] text-sm text-gray-700 inline-flex">
                  {selectedProject.product_category}
                </span>

                <h2 className="text-[42px] leading-[48px] font-semibold text-[#111] mt-6">
                  {selectedProject.title}
                </h2>

                <p className="text-gray-500 leading-8 text-lg mt-6">
                  {selectedProject.summary}
                </p>

                {/* TECH STACK */}
                <div className="mt-8">
                  <h3 className="text-[18px] font-semibold text-black mb-4">
                    Technologies Used
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {selectedProject?.technology_used
                      ?.split("||")
                      .map((tech, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 rounded-full bg-[#f5f5f5] text-gray-700 text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                  </div>
                </div>

                {/* DESCRIPTION */}
                <div className="mt-10">
                  <h3 className="text-[18px] font-semibold text-black mb-4">
                    Project Overview
                  </h3>

                  <p className="text-gray-500 leading-8">
                    {selectedProject.description ||
                      "This project was successfully delivered by our development team with a focus on performance, scalability, clean UI/UX and seamless business operations. We worked closely with the client to deliver a high-quality digital product that solves real business challenges and improves customer experience."}
                  </p>
                </div>

                {/* BUTTONS */}
                <div className="flex flex-wrap gap-4 mt-10">
                  <Link
                    href={selectedProject.product_link || "#"}
                    target="_blank"
                    className="h-[56px] px-7 rounded-2xl bg-black text-white inline-flex items-center gap-3 font-medium hover:bg-gray-900 transition"
                  >
                    Visit Live Project
                    <ArrowRight size={18} />
                  </Link>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="h-[56px] px-7 rounded-2xl border border-gray-300 text-black font-medium hover:bg-[#f5f5f5] transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
