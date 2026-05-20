"use client";

import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    title: "Tech Team Lead",
    desc: "Leads the development team, manages project workflows, and ensures high-quality software delivery through effective technical guidance.",
    img: "/images/rajyawardhan.png",
    bg: "bg-orange-200",
    link: "/roles/software-developers",
  },
  {
    title: "Sr. Full Stack Developers",
    desc: "Develop scalable frontend and backend solutions while handling APIs, databases, and application performance optimization.",
    img: "/team/p3.png",
    bg: "bg-blue-200",
    link: "/roles/backend-developers",
  },
  {
    title: "Server Admin",
    desc: "Manages servers, hosting environments, security, deployments, and system monitoring to ensure smooth application performance.",
    img: "/images/Rinkusir.png",
    bg: "bg-green-200",
    link: "/roles/project-managers",
  },
  {
    title: "Frontend Developer",
    desc: "Builds responsive and interactive user interfaces with modern frontend technologies to deliver seamless user experiences.",
    img: "/images/devika.png",
    bg: "bg-blue-300",
    link: "/roles/qa-engineers",
  },
  {
    title: "Rahul Singh",
    desc: "Contributes to project execution, collaboration, and innovative development solutions to support business and technical goals.",
    img: "/images/rahul.png",
    bg: "bg-yellow-200",
    link: "/roles/business-analysts",
  },
  {
    title: "UX/UI Designers",
    desc: "Design intuitive user interfaces, wireframes, and engaging user experiences focused on usability and modern design principles.",
    img: "/images/khyati.PNG",
    bg: "bg-red-200",
    link: "/roles/ui-ux-designers",
  },
];

export default function TeamRolesSection() {
  return (
    <section className="relative py-28 overflow-hidden bg-[#f5f6f7] pb-45">
      {/* BIG CIRCLE BACKGROUND */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[1400px] h-[1400px] bg-[#e9eaec] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* HEADING */}
        <h2 className="text-[40px] font-semibold text-[#111827]">
          Need more than developers?
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Along with developers, we also offer designers, product managers, QA specialists, and other experts.
        </p>

        {/* BUTTON */}
        <Link href="/schedule-a-call-page">
          <button className="mt-6 bg-black text-white px-6 py-3 rounded-lg text-sm font-medium inline-flex items-center gap-2 cursor-pointer">
            Assemble Your Team →
          </button>
        </Link>

        {/* GRID */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {cards.slice(0, 6).map((item, i) => (
            <Link key={i} href={item.link} className="group">
              <div className="bg-white rounded-[20px] shadow-md p-6 text-center relative cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                {/* IMAGE */}
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <div
                    className={`absolute inset-0  rounded-full  translate-x-3 translate-y-3`}
                  />
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-contain relative z-10"
                  />
                </div>

                {/* TITLE WITH UNDERLINE */}
                <h3 className="font-semibold text-[18px] text-[#111827] relative inline-block">
                  {item.title}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#111827] transition-all duration-300 group-hover:w-full"></span>
                </h3>

                <p className="text-gray-600 mt-2 text-sm leading-[1.6]">
                  {item.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>

       
      </div>
    </section>
  );
}
