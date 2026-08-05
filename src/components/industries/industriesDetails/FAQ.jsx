// "use client";

// import { useState } from "react";

// const data = [
//   {
//     title: "Farms and Agricultural Producers",
//     desc: "Producers use custom solutions for farm management, precision agriculture, and livestock tracking.",
//   },
//   { title: "Agricultural Cooperatives", desc: "Custom platforms help cooperatives manage operations, logistics, and member coordination efficiently." },
//   { title: "Agribusiness Companies", desc: "Agribusinesses use software to optimize supply chains, production, and analytics." },
//   { title: "Agricultural Research Institutions", desc: "Research institutions leverage software for data analysis, experimentation, and reporting." },
//   { title: "Government Agricultural Departments", desc: "Government bodies use custom tools for monitoring, regulation, and policy implementation." },
//   { title: "Agricultural Extension Services", desc: "Extension services deliver insights and training to farmers using digital platforms." },
//   { title: "Agriculture-focused Nonprofits and NGOs", desc: "NGOs use software for outreach, impact tracking, and resource management." },
// ];

// export default function FAQ() {
//   const [active, setActive] = useState(0);

//   const toggle = (i) => {
//     setActive(active === i ? null : i);
//   };

//   return (
//     <section className="bg-[#f6f7f9] py-[90px] mt-10">
//       <div className="max-w-[1100px] mx-auto px-6">

//         {/* HEADING */}
//         <h2 className="text-[48px] leading-[58px] font-semibold text-[#1f2933] mb-6">
//           Which institutions benefit from custom agriculture software development?
//         </h2>

//         {/* DESCRIPTION */}
//         <p className="text-[18px] text-gray-500 mb-[50px] max-w-[850px]">
//           Custom agriculture software development services benefit numerous institutions across the industry. Examples include:
//         </p>

//         {/* LIST */}
//         <div className="border-t border-gray-300">

//           {data.map((item, i) => (
//             <div key={i} className="border-b border-gray-300 py-6">

//               <div
//                 onClick={() => toggle(i)}
//                 className="flex items-center justify-between cursor-pointer"
//               >
//                 <h3 className="text-[20px] font-medium text-[#1f2933]">
//                   {item.title}
//                 </h3>

//                 {/* ICON */}
//                 <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#f45d2d] text-white text-lg">
//                   {active === i ? "↑" : "↓"}
//                 </div>
//               </div>

//               {/* CONTENT */}
//               {active === i && (
//                 <p className="mt-4 text-[16px] leading-[28px] text-gray-500 max-w-[800px]">
//                   {item.desc}
//                 </p>
//               )}

//             </div>
//           ))}

//         </div>

//       </div>
//     </section>
//   );
// }



"use client";

import { useState } from "react";

export default function FAQ({ data }) {
  const [active, setActive] = useState(0);

  const toggle = (i) => {
    setActive(active === i ? null : i);
  };

  return (
   <section className="mt-10 bg-[#f6f7f9] py-12 sm:py-16 lg:py-[90px]">
  <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">

        {/* HEADING */}
        {/* Responsive UI update: FAQ title scales down for phone widths. */}
        <h2 className="mb-6 text-3xl font-semibold leading-tight sm:text-4xl lg:text-[48px] lg:leading-[58px]">
          {data.title}
        </h2>

    {/* DESCRIPTION */}
    <p className="mb-10 max-w-[850px] text-base leading-7 text-gray-500 sm:text-lg lg:mb-[50px]">
      {data.desc}
    </p>

    {/* ACCORDION */}
    <div className="border-t border-gray-300">

      {data.items.map((item, i) => (
        <div key={i} className="border-b border-gray-300 py-5 sm:py-6">

          {/* HEADER */}
          <button
            onClick={() => toggle(i)}
            className="flex w-full items-center justify-between gap-4 text-left"
          >
            <h3 className="flex-1 text-lg font-medium leading-7 sm:text-xl">
              {item.title}
            </h3>

            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f45d2d] text-sm font-semibold text-white sm:h-9 sm:w-9">
              {active === i ? "↑" : "↓"}
            </div>
          </button>

          {/* CONTENT */}
          {active === i && (
            <p className="mt-4 max-w-[800px] text-sm leading-7 text-gray-500 sm:text-base">
              {item.desc}
            </p>
          )}

        </div>
      ))}

    </div>

  </div>
</section>
  );
}
