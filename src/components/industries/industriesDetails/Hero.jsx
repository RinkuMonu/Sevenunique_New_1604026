// // components/Hero.jsx

// import Image from "next/image";

// export default function Hero() {
//   return (
//     <section className="bg-[#f6f7f9] pt-[60px] pb-[80px] overflow-hidden">
      
//       <div className="max-w-[1220px] mx-auto pl-6 pr-0">
        
//         <div className="grid grid-cols-2 items-center">

//           {/* LEFT CONTENT */}
//           <div className="pr-[60px]">

//             <p className="text-[13px] tracking-[2px] text-gray-500 font-semibold mb-6 uppercase">
//               FINANCE SOFTWARE DEVELOPMENT
//             </p>

//             <h1 className="text-[56px] leading-[64px] font-bold text-[#1f2933] tracking-[-0.5px]">
//               Build custom
//               software solutions for 
//               businesses across the 
//               financial industry.
//             </h1>

//             <p className="mt-6 text-[18px] leading-[30px] text-gray-500 max-w-[520px]">
//               Financial software solutions for automated business processes,
//               enhanced customer experiences, and more.
//             </p>

//             <button className="mt-8 bg-[#f45d2d] hover:bg-[#e14f21] text-white px-7 py-[14px] text-[15px] font-semibold rounded-lg shadow-sm transition">
//               Accelerate Your Roadmap
//             </button>

//           </div>

//           {/* RIGHT IMAGE */}
//           <div className="relative h-[520px]">

//             {/* EDGE ALIGN IMAGE */}
//             <div className="absolute right-[-140px] top-0 w-[620px] h-full rounded-l-[24px] overflow-hidden">
              
//               <Image
//                 src="/contactus-hero.avif" // 👉 apni image yaha daal
//                 alt="finance hero"
//                 fill
//                 className="object-cover"
//                 priority
//               />

//             </div>

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }


// components/Hero.jsx

import Image from "next/image";
import Link from "next/link";

export default function Hero({ data }) {
  return (
  <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-100 py-[40px]">

  {/* Decorative Blobs */}
  <div className="absolute top-[-150px] left-[-100px] w-[350px] h-[350px] bg-orange-300/20 rounded-full blur-3xl"></div>
  <div className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-orange-500/15 rounded-full blur-3xl"></div>
  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:60px_60px] opacity-40"></div>
  <div className="relative max-w-[1280px] mx-auto px-6">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      {/* LEFT CONTENT */}
      <div>
        {/* Label */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-orange-200 shadow-sm mb-6">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          <span className="text-[13px] tracking-[2px] text-orange-600 font-semibold uppercase">
            {data.label}
          </span>
        </div>
        {/* Heading */}
        {/* Responsive UI update: industry hero uses a fluid type scale. */}
        <h1 className="text-4xl font-bold leading-[1.05] tracking-[-1px] text-gray-900 sm:text-5xl lg:text-[64px] lg:tracking-[-2px]">
          {data.title}
        </h1>
        {/* Description */}
        <p className="mt-8 text-[18px] leading-[32px] text-gray-600 max-w-[600px]">
          {data.desc}
        </p>
        
        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-10">
          <Link
            href="/schedule-a-call-page"
            className="
              inline-flex
              items-center
              gap-2
              bg-orange-500
              hover:bg-orange-600
              px-8
              py-4
              rounded-xl
              text-white
              font-semibold
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_15px_40px_rgba(249,115,22,0.35)]
            "
          >
            Accelerate Your Roadmap
            <span>→</span>
          </Link>
        </div>
      </div>
      {/* RIGHT IMAGE */}
      <div className="relative">
        {/* Glow */}
        <div className="absolute inset-0 bg-orange-400/20 blur-[100px] rounded-full"></div>
        <div className="relative">
          <div className="relative h-[600px]">
            <Image
              src={data.image}
              alt={data.title}
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}
