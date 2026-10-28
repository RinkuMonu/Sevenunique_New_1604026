"use client";

import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    title: "Backend Lead",
    desc: "Leads backend architecture, manages distributed system workflows, and ensures high-performance API delivery.",
    img: "/team/avatar-rajyavardhan-singh.webp",
    link: "/services/backend-development",
  },
  {
    title: "Sr. Full Stack Developer",
    desc: "Develops scalable frontend and backend solutions while handling APIs, databases, and application performance optimization.",
    img: "/team/avatar-vijay-gupta.webp",
    link: "/services/web-development",
  },
  {
    title: "Server Admin & DevOps",
    desc: "Manages servers, cloud hosting environments, security, CI/CD deployments, and 24/7 system reliability.",
    img: "/team/avatar-rinku-yadav.webp",
    link: "/services/devops",
  },
  {
    title: "Sr. Frontend Developer",
    desc: "Builds responsive, accessible, and high-performance interactive interfaces with modern Next.js and React technologies.",
    img: "/team/avatar-devika-chhipa.webp",
    link: "/services/frontend-development",
  },
  {
    title: "Mobile App Developer",
    desc: "Engineers high-performance native iOS, Android, and cross-platform Flutter/React Native mobile applications.",
    img: "/team/avatar-deepak-yadav.webp",
    bg: "bg-yellow-200",
    link: "/services/mobile-development",
  },
  {
    title: "UI/UX Designer",
    desc: "Designs intuitive user interfaces, cohesive design systems, and engaging experiences focused on conversion and usability.",
    img: "/team/avatar-khyati-jain.webp",
    bg: "bg-red-200",
    link: "/services/ui-ux-design",
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
        {/* Responsive UI update: mobile-first section typography. */}
        <h2 className="text-3xl font-semibold text-[#111827] sm:text-4xl lg:text-[40px]">
          Need more than developers?
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Along with developers, we also offer designers, product managers, QA specialists, and other experts.
        </p>

        {/* BUTTON */}
        <Link href="/schedule-a-call-page">
          <button className="mt-6 bg-black text-white px-6 py-3 rounded-lg text-sm font-medium inline:flex items-center gap-2 hover:bg-gray-800 transition">
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
