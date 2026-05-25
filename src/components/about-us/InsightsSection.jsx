// "use client";

// import Image from "next/image";

// const insights = [
//   {
//     title: "Outsource Mobile App Development: Startup Guide",
//     author: "Aman Goswami",
//     img: "/images/avatar1.png",
//     avatar: "/images/l1.png",
//   },
//   {
//     title: "5 Elements of a High-Performing Agile Team",
//     author: "Pankaj Kumar",
//     img: "/images/avatar2.png",
//     avatar: "/images/l2.png",
//   },
//   {
//     title: "How AI is Transforming Enterprise Software",
//     author: "Mayank Rathore",
//     img: "/images/avatar3.png",
//     avatar: "/images/l3.png",
//   },
//   {
//     title: "Scaling Engineering Teams Efficiently",
//     author: "Jyoti Sharma",
//     img: "/images/avatar4.png",
//     avatar: "/images/l4.png",
//   },
// ];

// export default function InsightsSection() {
//   return (
//     <section className="bg-[#f5f6f7] py-20">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* HEADING */}
//         <h2 className="text-[34px] md:text-[38px] font-semibold text-[#111827] mb-12 leading-tight">
//         Perspectives from our leaders on the future of technology and talent.
//         </h2>

//         {/* GRID */}
//         <div className="grid md:grid-cols-2 gap-10">

//           {insights.map((item, i) => (
//             <div key={i} className="group cursor-pointer">

//               {/* IMAGE */}
//               <div className="relative w-full h-[300px] rounded-[20px] overflow-hidden">
//                 <Image
//                   src={item.img}
//                   alt={item.title}
//                   fill
//                   className="object-cover transition-transform duration-300"
//                 />
//               </div>

//               {/* TITLE */}
//               <h3 className="mt-5 text-[20px] font-semibold text-[#111827] leading-snug group-hover:text-[#f66135] transition">
//                 {item.title}
//               </h3>

//               {/* AUTHOR */}
//               <div className="flex items-center gap-3 mt-4">
//                 <div className="relative w-8 h-8 rounded-full overflow-hidden">
//                   <Image
//                     src={item.avatar}
//                     alt={item.author}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//                 <p className="text-[14px] text-gray-500">
//                   By <span className="text-[#111827] font-medium">{item.author}</span>
//                 </p>
//               </div>

//             </div>
//           ))}

//         </div>
//       </div>
//               {/* READ BLOG CTA */}
//         <div className="mt-16 ps-24">
//           <a
//             href="/blog"
//             className="inline-flex items-center gap-2 text-[#f66135] font-medium text-[20px] group transition-all duration-300"
//           >
//             <span className="border-b border-[#f66135] pb-1 font-bold">
//               Read our blog
//             </span>

//             {/* Arrow */}
//             <span className="transition-transform duration-300 group-hover:translate-x-2">
//               →
//             </span>
//           </a>
//         </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";

const sections = [
  {
    type: "Vision",
    title: "Building the Future Through Innovation",
    description:
      "Our vision is to empower businesses worldwide with cutting-edge technology solutions that drive growth, inspire innovation, and create meaningful digital experiences.",
    img: "/images/vision.png",
  },
  {
    type: "Mission",
    title: "Delivering Excellence with Purpose",
    description:
      "We are committed to providing scalable, reliable, and people-focused digital solutions while fostering creativity, collaboration, and long-term partnerships with our clients.",
    img: "/images/mission.png",
  },
];

export default function VisionMissionSection() {
  return (
    <section className="bg-[#f5f6f7] py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADING */}
        <div className="max-w-4xl mb-20">
          <p className="text-[#f66135] font-semibold uppercase tracking-[3px] mb-4">
            Who We Are
          </p>

          <h2 className="text-[36px] md:text-[52px] leading-tight font-semibold text-[#111827]">
            Driven by Purpose. Powered by Innovation.
          </h2>

          <p className="mt-6 text-[18px] text-gray-600 leading-relaxed max-w-3xl">
            We believe technology should create impact, simplify challenges,
            and help businesses grow sustainably in a rapidly evolving digital world.
          </p>
        </div>

        {/* VISION & MISSION */}
        <div className="space-y-24">
          {sections.map((item, i) => (
            <div
              key={i}
              className={`grid lg:grid-cols-2 gap-14 items-center ${
                i % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* IMAGE */}
              <div className="relative h-[350px] md:h-[450px] rounded-[28px] overflow-hidden group">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20"></div>

                {/* Label */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-5 py-2 rounded-full">
                  <span className="text-[#111827] font-semibold text-[14px] uppercase tracking-wide">
                    {item.type}
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div>
                <p className="text-[#f66135] font-semibold uppercase tracking-[3px] mb-4">
                  {item.type}
                </p>

                <h3 className="text-[32px] md:text-[42px] font-semibold text-[#111827] leading-tight">
                  {item.title}
                </h3>

                <p className="mt-6 text-[18px] text-gray-600 leading-relaxed">
                  {item.description}
                </p>

                {/* POINTS */}
                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-[#f66135] text-xl">✓</span>
                    <p className="text-gray-700">
                      Client-focused digital transformation strategies.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-[#f66135] text-xl">✓</span>
                    <p className="text-gray-700">
                      Innovation-driven culture with modern technologies.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-[#f66135] text-xl">✓</span>
                    <p className="text-gray-700">
                      Long-term partnerships built on trust and excellence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-28 text-center">
          <h4 className="text-[28px] md:text-[36px] font-semibold text-[#111827] leading-snug mb-10">
            Together, we create solutions that make a lasting impact.
          </h4>

          <Link href="/schedule-a-call-page" className="mt-12 bg-[#f66135] hover:bg-[#e9552b] transition-all duration-300 text-white px-8 py-4 rounded-full text-[16px] font-medium shadow-lg hover:scale-105">
            Explore Our Services
          </Link >
        </div>
      </div>
    </section>
  );
}