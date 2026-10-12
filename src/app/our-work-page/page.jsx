"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";

// export const metadata = {
//   title: "Software Development Portfolio & Case Studies | SevenUnique",
//   description: "Explore SevenUnique projects and digital solutions across web, mobile, AI, fintech, ecommerce, and custom software development. Get expert support today.",
// };


export default function PortfolioPage() {
  const [portfolio] = useState([
    {
      id: 1,
      title: "Food Delivery Application",
      product_category: "Food & Restaurant Platform",
      image: "/images/port1.jpeg",
      summary:
        "A modern food ordering and delivery platform with real-time order tracking, restaurant management, and secure online payments.",
      description:
        "Food Delivery Application is a complete online food ordering platform that connects customers with restaurants. Users can browse menus, place orders, track deliveries in real time, and make secure online payments. The platform includes restaurant dashboards, order management, customer accounts, and a responsive user experience optimized for all devices.",
      technology_used:
        "React.js || Node.js || Express.js || MongoDB || Payment Gateway || Tailwind CSS",
      product_link: "#",
      status: "Completed",
    },
    {
      id: 2,
      title: "Healthcare Management System",
      product_category: "Healthcare Platform",
      image: "/images/port2.jpeg",
      summary:
        "A digital healthcare solution for hospitals, clinics, doctors, and patients with appointment and record management.",
      description:
        "Healthcare Management System is designed to streamline healthcare operations by enabling online appointments, patient record management, doctor scheduling, prescription tracking, and secure communication between patients and healthcare providers. The platform improves efficiency and enhances patient care through a centralized management system.",
      technology_used:
        "React.js || Node.js || MongoDB || Express.js || REST APIs",
      product_link: "#",
      status: "Completed",
    },
    {
      id: 3,
      title: "E-Commerce Marketplace",
      product_category: "E-Commerce Platform",
      image: "/images/port3.jpeg",
      summary:
        "A scalable online shopping platform featuring product catalogs, cart management, and secure checkout.",
      description:
        "E-Commerce Marketplace is a comprehensive online shopping solution developed for businesses looking to sell products digitally. The platform includes product listings, advanced filtering, shopping cart functionality, order tracking, inventory management, and secure payment gateway integration for a seamless customer experience.",
      technology_used:
        "React.js || Node.js || MongoDB || Express.js || Payment Gateway",
      product_link: "#",
      status: "Completed",
    },
    {
      id: 4,
      title: "Booking Services Platform",
      product_category: "Booking & Reservation System",
      image: "/images/port4.jpeg",
      summary:
        "An online booking solution for appointments, services, events, and reservations with automated scheduling.",
      description:
        "Booking Services Platform enables businesses to manage appointments, reservations, and service bookings efficiently. Customers can browse available slots, make bookings, receive confirmations, and manage their schedules. The platform includes calendar integration, automated notifications, and secure payment support.",
      technology_used:
        "React.js || Node.js || MongoDB || Calendar APIs || Payment Gateway",
      product_link: "#",
      status: "Completed",
    },
    {
      id: 5,
      title: "Business Enterprise Management System",
      product_category: "Enterprise Solutions",
      image: "/images/port5.jpeg",
      summary:
        "A centralized enterprise platform for managing business operations, employees, workflows, and reporting.",
      description:
        "Business Enterprise Management System helps organizations streamline operations through employee management, workflow automation, document handling, reporting dashboards, and role-based access controls. The platform is designed to improve productivity, collaboration, and decision-making across departments.",
      technology_used:
        "React.js || Node.js || MongoDB || Express.js || Analytics Dashboard",
      product_link: "#",
      status: "Completed",
    },
    {
      id: 6,
      title: "Digital Payment Wallet",
      product_category: "Fintech & Wallet Solution",
      image: "/images/port6.jpeg",
      summary:
        "A secure digital wallet platform for money transfers, bill payments, wallet top-ups, and transaction management.",
      description:
        "Digital Payment Wallet is a fintech solution that enables users to store funds, transfer money, pay utility bills, recharge services, and manage transactions securely. The platform includes wallet management, transaction history, user verification, and robust security mechanisms for safe digital payments.",
      technology_used:
        "React.js || Node.js || MongoDB || BBPS APIs || Wallet System",
      product_link: "#",
      status: "Completed",
    },
    {
      id: 7,
      title: "Real Estate Property Portal",
      product_category: "Real Estate Platform",
      image: "/images/port7.jpeg",
      summary:
        "A property listing and management platform for buyers, sellers, agents, and real estate businesses.",
      description:
        "Real Estate Property Portal allows users to buy, sell, rent, and manage properties through a modern digital platform. Features include property listings, advanced search filters, agent profiles, inquiry management, virtual property showcases, and customer engagement tools.",
      technology_used:
        "React.js || Node.js || MongoDB || Maps API || Express.js",
      product_link: "#",
      status: "Completed",
    },

    {
      id: 8,
      title: "AI-Powered Business Automation Platform",
      product_category: "Artificial Intelligence Solutions",
      image: "/images/port8.PNG",
      summary:
        "An intelligent AI platform that automates workflows, customer support, analytics, and business decision-making.",
      description:
        "AI-Powered Business Automation Platform leverages artificial intelligence and machine learning to automate repetitive business processes, provide AI-driven customer support, generate predictive analytics, and improve operational efficiency. The platform includes chatbots, intelligent recommendations, data insights, workflow automation, and seamless integration with existing business systems.",
      technology_used:
        "React.js || Node.js || Python || OpenAI APIs || Machine Learning || MongoDB",
      product_link: "#",
      status: "Completed",
    },
    {
      id: 9,
      title: "CRM & ERP Management System",
      product_category: "CRM & Enterprise Resource Planning",
      image: "/images/port9.PNG",
      summary:
        "A unified CRM and ERP platform for managing customers, sales, inventory, finance, and business operations.",
      description:
        "CRM & ERP Management System provides businesses with a centralized solution to manage customer relationships, sales pipelines, inventory, accounting, procurement, employee management, and reporting. The platform enhances productivity through workflow automation, real-time dashboards, and integrated business intelligence tools.",
      technology_used:
        "React.js || Node.js || Express.js || MongoDB || Analytics Dashboard",
      product_link: "#",
      status: "Completed",
    },
    {
      id: 10,
      title: "Education & Learning Management System",
      product_category: "EdTech & LMS Platform",
      image: "/images/port10.PNG",
      summary:
        "A comprehensive online learning platform for schools, universities, training institutes, and educators.",
      description:
        "Education & Learning Management System enables institutions to deliver online education through course management, live classes, assignments, examinations, progress tracking, certifications, and student engagement tools. The platform supports both academic and corporate training environments with a scalable digital learning ecosystem.",
      technology_used:
        "React.js || Node.js || MongoDB || Video Streaming APIs || LMS Modules",
      product_link: "#",
      status: "Completed",
    },
    {
      id: 11,
      title: "Fintech Banking & Payment Solution",
      product_category: "Fintech Platform",
      image: "/images/port11.PNG",
      summary:
        "A secure fintech ecosystem for digital banking, payments, fund transfers, and financial services.",
      description:
        "Fintech Banking & Payment Solution offers a complete financial technology platform that supports digital payments, money transfers, account management, KYC verification, merchant payments, and transaction monitoring. Built with enterprise-grade security, the platform provides a seamless and reliable financial experience for users and businesses.",
      technology_used:
        "React.js || Node.js || MongoDB || BBPS APIs || Payment Gateway || KYC System",
      product_link: "#",
      status: "Completed",
    },
    {
      id: 12,
      title: "Logistics & Transportation Management Platform",
      product_category: "Logistics & Supply Chain Solution",
      image: "/images/port12.PNG",
      summary:
        "A logistics management platform for shipment tracking, fleet monitoring, route optimization, and delivery operations.",
      description:
        "Logistics & Transportation Management Platform streamlines supply chain and transportation operations through real-time shipment tracking, fleet management, route optimization, warehouse integration, and delivery monitoring. The platform helps logistics companies improve efficiency, reduce operational costs, and enhance customer satisfaction.",
      technology_used:
        "React.js || Node.js || MongoDB || Maps API || GPS Tracking || Express.js",
      product_link: "#",
      status: "Completed",
    },
    {
      id: 13,
      title: "Social Media Marketing & Campaign Platform",
      product_category: "Digital Marketing Solution",
      image: "/images/port13.PNG",
      summary:
        "A social media management platform for campaign automation, content scheduling, analytics, and audience engagement.",
      description:
        "Social Media Marketing & Campaign Platform helps businesses manage multiple social channels from a single dashboard. Features include content scheduling, campaign automation, social analytics, audience engagement tracking, influencer management, and performance reporting to maximize marketing ROI.",
      technology_used:
        "React.js || Node.js || MongoDB || Social Media APIs || Analytics Dashboard",
      product_link: "#",
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
            We help startups and enterprises build scalable web apps, fintech
            platforms, mobile applications and enterprise software.
          </p>
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="pb-24 px-4 sm:px-6 lg:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-12">
          {portfolio.map((project, index) => (
            <div
              key={index}
              className="
group
bg-white
rounded-xl
overflow-hidden
border
border-gray-200
hover:shadow-xl
hover:-translate-y-2
transition-all
duration-500
"
            >
              {/* IMAGE */}
              <div className="relative aspect-[4/4] overflow-hidden bg-[#f4f4f4]">
                <Image
                  src={project.image || "/placeholder.png"}
                  alt={project.title}
                  fill
                  className="object-fill group-hover:scale-105 transition duration-700"
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
              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-4 py-2 rounded-full bg-[#f5f5f5] text-sm text-gray-700">
                    {project.product_category}
                  </span>

                  <span className="text-green-600 text-sm font-medium">
                    Completed
                  </span>
                </div>

                <h2 className="text-[24px] leading-[36px] font-semibold text-[#111]">
                  {project.title}
                </h2>

                <p className="text-gray-500 text-[16px] leading-7 mt-4 line-clamp-3">
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
                <div className="flex items-center justify-between mt-auto pt-8">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-black font-medium inline-flex items-center gap-2"
                  >
                    View More
                    <ArrowRight size={18} />
                  </button>

                  {/* <Link
                    href={project.product_link || "#"}
                    target="_blank"
                    className="text-gray-500 hover:text-black transition"
                  >
                    Live Demo
                  </Link> */}
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

                {/* Responsive UI update: modal/project title scales without clipping. */}
                <h2 className="mt-6 text-3xl font-semibold leading-tight text-[#111] sm:text-4xl lg:text-[42px] lg:leading-[48px]">
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
                  {/* <Link
                    href={selectedProject.product_link || "#"}
                    target="_blank"
                    className="h-[56px] px-7 rounded-2xl bg-black text-white inline-flex items-center gap-3 font-medium hover:bg-gray-900 transition"
                  >
                    Visit Live Project
                    <ArrowRight size={18} />
                  </Link> */}

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
