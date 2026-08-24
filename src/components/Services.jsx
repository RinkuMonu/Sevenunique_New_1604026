"use client";

import Link from "next/link";

const services = [
  {
    title: "Web Development",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    height: "h-[250px]",
    link: "/services/web-development",
  },
  {
    title: "Software Development",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    height: "h-[520px]",
    link: "/services/saas-development",
  },
  {
    title: "UI/UX Development",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb",
    height: "h-[250px]",
    link: "/services/ui-ux-design",
  },
  {
    title: "Mobile App Development",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
    height: "h-[250px]",
    link: "/services/mobile-app-development",
  },
  {
    title: "Hire Remote Developers",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    height: "h-[250px]",
    link: "/schedule-a-call-page",
  },
  {
    title: "QA Solutions",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    height: "h-[520px]",
    link: "/services/qa-testing",
  },
];

export default function Services() {
  return (
    <section className="bg-white py-16 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">

          <div>
            <p className="text-[#f4622a] font-semibold mb-3 tracking-wide uppercase text-sm">
              Our Expertise
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#111827] leading-tight max-w-4xl">
              Transforming Ideas Into
              <span className="text-[#f4622a]">
                {" "}Digital Solutions
              </span>
            </h2>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[#111827] border border-gray-300 px-6 py-3 rounded-full hover:bg-[#f4622a] hover:text-white hover:border-[#f4622a] transition-all duration-300 w-fit"
          >
            Explore Services →
          </Link>
        </div>

        {/* Masonry Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-5">
            <ServiceCard service={services[0]} />
            <ServiceCard service={services[3]} />
          </div>

          {/* CENTER LARGE */}
          <div>
            <ServiceCard service={services[1]} />
          </div>

          {/* CENTER SMALL */}
          <div className="flex flex-col gap-5">
            <ServiceCard service={services[2]} />
            <ServiceCard service={services[4]} />
          </div>

          {/* RIGHT LARGE */}
          <div>
            <ServiceCard service={services[5]} />
          </div>

        </div>
      </div>
    </section>
  );
}

/* CARD */
function ServiceCard({ service }) {
  return (
    <Link
      href={service.link}
      className={`group relative overflow-hidden rounded-[28px] ${service.height} cursor-pointer shadow-lg block`}
    >
      {/* Background Image */}
      <img
        src={service.image}
        alt={service.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45 group-hover:bg-black/55 transition-all duration-300" />

      {/* Orange Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-t from-[#f4622a]/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full p-7">
        
        {/* Title */}
        <div>
          <h3 className="text-white text-3xl font-bold leading-tight max-w-[220px]">
            {service.title}
          </h3>
        </div>

        {/* Button */}
        <div className="translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <span className="inline-block bg-white text-black px-5 py-2.5 rounded-full font-medium hover:bg-[#f4622a] hover:text-white transition">
            View Service →
          </span>
        </div>
      </div>
    </Link>
  );
}