"use client";

import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    title: "Software developers",
    desc: "Create intuitive, beautiful and easy-to-use user interfaces for websites and applications.",
    img: "/images/l1.png",
    bg: "bg-orange-200",
    link: "/roles/software-developers",
  },
  {
    title: "Back-end Developers",
    desc: "Focus on non-visible software components such as logic, performance, servers, databases, and system design.",
    img: "/images/l2.png",
    bg: "bg-blue-200",
    link: "/roles/backend-developers",
  },
  {
    title: "Project Managers/ Product Owners",
    desc: "Lead and manage the entire development process to ensure a project’s success.",
    img: "/images/l3.png",
    bg: "bg-green-200",
    link: "/roles/project-managers",
  },
  {
    title: "QA Engineers",
    desc: "Ensure applications work as intended without errors.",
    img: "/images/l4.png",
    bg: "bg-blue-300",
    link: "/roles/qa-engineers",
  },
  {
    title: "Business Analysts",
    desc: "Identify and share valuable data insights that improve business and development processes.",
    img: "/images/l5.png",
    bg: "bg-yellow-200",
    link: "/roles/business-analysts",
  },
  {
    title: "UX/UI Designers",
    desc: "Create delightful digital experiences by wireframing and prototyping user interfaces.",
    img: "/images/l6.png",
    bg: "bg-red-200",
    link: "/roles/ui-ux-designers",
  },
  {
    title: "DevOps Engineers",
    desc: "Ensures the reliability, scalability, and security of underlying infrastructure",
    img: "/images/l7.png",
    bg: "bg-green-300",
    link: "/roles/devops-engineers",
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
          In addition to devs, we also provide clients with designers,
          product managers, QA specialists, and more.
        </p>

        {/* BUTTON */}
        <button className="mt-6 bg-black text-white px-6 py-3 rounded-lg text-sm font-medium inline-flex items-center gap-2">
          Assemble Your Team →
        </button>

        {/* GRID */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

          {cards.slice(0, 6).map((item, i) => (
            <Link key={i} href={item.link} className="group">
              <div className="bg-white rounded-[20px] shadow-md p-6 text-center relative cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1">

                {/* IMAGE */}
                <div className="relative w-28 h-28 mx-auto mb-4">
                  <div
                    className={`absolute inset-0 rounded-full ${item.bg} translate-x-3 translate-y-3`}
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

        {/* DEVOPS CARD */}
        <div className="mt-16 flex justify-center">
          <Link href={cards[6].link} className="group">
            <div className="bg-white rounded-[20px] shadow-md p-6 w-[280px] text-center relative cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1">

              <div className="relative w-28 h-28 mx-auto mb-4">
                <div className="absolute inset-0 rounded-md bg-green-300 rotate-6" />
                <Image
                  src={cards[6].img}
                  alt={cards[6].title}
                  fill
                  className="object-contain relative z-10"
                />
              </div>

              <h3 className="font-semibold text-[18px] text-[#111827] relative inline-block">
                {cards[6].title}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#111827] transition-all duration-300 group-hover:w-full"></span>
              </h3>

              <p className="text-gray-600 mt-2 text-sm leading-[1.6]">
                {cards[6].desc}
              </p>

            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}