"use client";

import Image from "next/image";

const insights = [
  {
    title: "Outsource Mobile App Development: Startup Guide",
    author: "Nacho De Marco",
    img: "/images/avatar1.png",
    avatar: "/images/l1.png",
  },
  {
    title: "5 Elements of a High-Performing Agile Team",
    author: "Paul Azorin",
    img: "/images/avatar2.png",
    avatar: "/images/l2.png",
  },
  {
    title: "How AI is Transforming Enterprise Software",
    author: "Maria Lopez",
    img: "/images/avatar3.png",
    avatar: "/images/l3.png",
  },
  {
    title: "Scaling Engineering Teams Efficiently",
    author: "John Carter",
    img: "/images/avatar4.png",
    avatar: "/images/l4.png",
  },
];

export default function InsightsSection() {
  return (
    <section className="bg-[#f5f6f7] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-[34px] md:text-[38px] font-semibold text-[#111827] mb-12 leading-tight">
          Insights from our leaders on the future of technology and talent.
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {insights.map((item, i) => (
            <div key={i} className="group cursor-pointer">

              {/* IMAGE */}
              <div className="relative w-full h-[300px] rounded-[20px] overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300"
                />
              </div>

              {/* TITLE */}
              <h3 className="mt-5 text-[20px] font-semibold text-[#111827] leading-snug group-hover:text-[#f66135] transition">
                {item.title}
              </h3>

              {/* AUTHOR */}
              <div className="flex items-center gap-3 mt-4">
                <div className="relative w-8 h-8 rounded-full overflow-hidden">
                  <Image
                    src={item.avatar}
                    alt={item.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-[14px] text-gray-500">
                  By <span className="text-[#111827] font-medium">{item.author}</span>
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
              {/* READ BLOG CTA */}
        <div className="mt-16 ps-24">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-[#f66135] font-medium text-[20px] group transition-all duration-300"
          >
            <span className="border-b border-[#f66135] pb-1 font-bold">
              Read our blog
            </span>

            {/* Arrow */}
            <span className="transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </a>
        </div>
    </section>
  );
}