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

export default function Hero({ data }) {
  return (
    <section className="bg-[#f6f7f9] pt-[60px] pb-[80px] overflow-hidden">
      
      <div className="max-w-[1220px] mx-auto pl-6 pr-0">
        
        <div className="grid grid-cols-2 items-center">

          {/* LEFT */}
          <div className="pr-[60px]">

            <p className="text-[13px] tracking-[2px] text-gray-500 font-semibold mb-6 uppercase">
              {data.label}
            </p>

            <h1 className="text-[56px] leading-[64px] font-bold text-[#1f2933] tracking-[-0.5px]">
              {data.title}
            </h1>

            <p className="mt-6 text-[18px] leading-[30px] text-gray-500 max-w-[520px]">
              {data.desc}
            </p>

            <button className="mt-8 bg-[#f45d2d] text-white px-7 py-[14px] rounded-lg">
              Accelerate Your Roadmap
            </button>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative h-[520px]">
            <div className="absolute right-[-140px] top-0 w-[620px] h-full rounded-l-[24px] overflow-hidden">
              
              <Image
                src={data.image}
                alt="hero"
                fill
                className="object-cover"
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}