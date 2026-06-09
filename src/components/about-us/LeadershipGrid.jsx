"use client";

import Image from "next/image";

const leaders = [
  {
    name: "Dinesh Kumar Prajapat",
    role: "Founder & Promoter • CEO",
    img: "/team/person1.png",
    color: "hover:bg-[#E7BE17]",
  },
  {
    name: "Rahul Prajapat",
    role: "Company Secretary",
    img: "/team/p2.png",
    color: "hover:bg-[#4C88D1]",
  },
  {
    name: "Vijay Gupta",
    role: "Sr. Full Stack Developer",
    img: "/team/p3.png",
    color: "hover:bg-[#F03333]",
  },
  {
    name: "Krishan Prajapat",
    role: "Office Admin",
    img: "/team/krishan.PNG",
    color: "hover:bg-[#2EE66E]",
  },

  {
    name: "Bhumika Soni",
    role: "HR Manager",
    img: "/images/hr.png",
    color: "hover:bg-[#26F0DF]",
  },
];



export default function LeadershipGrid() {
  return (
    <section className="bg-[#f5f6f7] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADING */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-[40px] leading-[1.2] font-semibold text-[#f66135]">
            Meet our leadership team
          </h2>

          <p className="text-3xl leading-[1.2] font-semibold text-[#111827] mt-2">
            With their guidance, we have achieved numerous accolades recognized
            across the industry
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {leaders.map((item, i) => (
            <div key={i} className="group text-center">
              {/* IMAGE */}
              <div className="relative mx-auto w-full h-[320px] overflow-hidden rounded-[28px] bg-[#f7f7f7]">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-contain grayscale-[8%] transition-all duration-500 group-hover:scale-[1.02]"
                />

                {/* Soft Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>

              {/* TEXT */}
              <div className="mt-5">
                <h3 className="text-[20px] font-bold tracking-[-0.3px] text-[#111827]">
                  {item.name}
                </h3>

                <div className="w-10 h-[2px] bg-[#f66135] mx-auto my-3 rounded-full" />

                <p className="text-[14px] text-gray-500 tracking-[0.2px]">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
