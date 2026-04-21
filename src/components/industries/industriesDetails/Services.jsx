// "use client";

// import { useState } from "react";

// const navItems = [
//   "Finance development services we provide",
//   "Benefits of building bespoke solutions",
//   "Which institutions benefit from custom financial software development?",
//   "Why Choose BairesDev for Finance Development",
//   "Our process. Simple, seamless, streamlined.",
//   "Frequently Asked Questions (FAQ)",
// ];

// export default function Services() {
//   const [active, setActive] = useState(0);

//   return (
//     <section className="bg-white py-[80px]">
//       <div className="max-w-[1200px] mx-auto pl-6 pr-0 grid grid-cols-[2fr_1fr] gap-[80px]">

//         {/* LEFT CONTENT */}
//         <div>

//           {/* DYNAMIC HEADING */}
//           <h2 className="text-[36px] leading-[52px] font-semibold text-[#1f2933] mb-6">
//             {navItems[active]}
//           </h2>

//           {/* DYNAMIC DESCRIPTION */}
//           <p className="text-[14px] leading-[32px] text-gray-500 max-w-[760px] mb-12">

//             This is dynamic content for: <b>{navItems[active]}</b>. Replace this
//             with actual section data (API / object based).
//             We provide financial software development services tailored for diverse institutions, fintech startups, and other businesses in the sector. From core banking systems to payment processing solutions and regulatory compliance tools, we offer a breadth of development services. Our solutions are designed to enhance
//           </p>

//           {/* SERVICES GRID (same for now) */}
//           <div className="grid grid-cols-2 gap-x-[60px] gap-y-[40px]">
//             {[1,2,3,4].map((i) => (
//               <div key={i} className="border-t border-gray-200 pt-6">

//                 <div className="flex items-start gap-3">

//                   <div className="w-5 h-5 mt-1 border-2 border-orange-500 rounded-full flex items-center justify-center">
//                     <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
//                   </div>

//                   <div>
//                     <h3 className="text-[20px] font-semibold text-[#1f2933] mb-2">
//                       Financial Services Application Development
//                     </h3>

//                     <p className="text-[16px] leading-[28px] text-gray-500">
//                       We develop solutions for online banking, mobile banking,
//                       payment processing, and wealth management.
//                     </p>
//                   </div>

//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT SIDEBAR (SHIFTED RIGHT) */}
//         <div className="sticky top-[120px] h-fit ml-auto pr-6">

//           <p className="text-[12px] tracking-[2px] text-gray-400 uppercase mb-6">
//             Navigate
//           </p>

//           <div className="space-y-6 text-[16px]">

//             {navItems.map((item, i) => (
//               <p
//                 key={i}
//                 onClick={() => setActive(i)}
//                 className={`cursor-pointer transition pl-4 ${
//                   active === i
//                     ? "font-semibold border-l-2 border-black text-black"
//                     : "text-gray-500 hover:text-black"
//                 }`}
//               >
//                 {item}
//               </p>
//             ))}

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

export default function Services({ data }) {
  return (
    <section className="bg-white py-[80px]">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-[36px] leading-[52px] font-semibold mb-6">
          {data.title}
        </h2>

        {/* DESCRIPTION */}
        <p className="text-[16px] leading-[30px] text-gray-500 max-w-[800px] mb-12">
          {data.desc}
        </p>

        {/* GRID */}
        <div className="grid grid-cols-2 gap-x-[60px] gap-y-[40px]">

          {data.items.map((item, i) => (
            <div key={i} className="border-t border-gray-200 pt-6">

              <div className="flex gap-3">

                {/* ICON */}
                <div className="w-5 h-5 mt-1 border-2 border-orange-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                </div>

                <div>
                  <h3 className="text-[20px] font-semibold mb-2">
                    {item.title}
                  </h3>

                  <p className="text-[16px] leading-[28px] text-gray-500">
                    {item.desc}
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}