// import Image from "next/image";

// export default function Process() {
//   return (
//     <section className="bg-[#f6f7f9] py-[60px]">
//       <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 gap-[80px] items-start">

//         {/* LEFT SIDE */}
//         <div>

//           {/* HEADING */}
//           <h2 className="text-[48px] leading-[60px] font-semibold text-[#1f2933] mb-[60px]">
//             Our process. <br />
//             Simple, seamless, <br />
//             streamlined.
//           </h2>

//           {/* IMAGE */}
//           <div className="relative w-[380px] h-[380px] overflow-hidden">
//             <Image
//               src="https://assets.bairesdev.com/image/upload/v1/www/core/silos_solutions_our-process_dudyi1"
//               alt="process"
//               fill
//               className="object-cover rounded-[120px]"
//               sizes="380px"
//             />
//           </div>

//         </div>

//         {/* RIGHT SIDE */}
//         <div className="relative">

//           {/* DASHED LINE */}
//           <div className="absolute left-[16px] top-0 bottom-0 border-l border-dashed border-gray-300"></div>

//           <div className="space-y-[50px]">

//             {/* STEP 1 */}
//             <div className="flex gap-6 relative">
              
//               {/* ICON */}
//               <div className="w-8 h-8 bg-[#f45d2d] rounded-full flex items-center justify-center text-white text-sm z-10">
//                 📞
//               </div>

//               <div>
//                 <p className="text-[12px] tracking-[2px] text-gray-400 uppercase mb-2">
//                   Step 1
//                 </p>

//                 <h3 className="text-[22px] font-semibold text-[#1f2933] mb-2">
//                   Discuss your requirements.
//                 </h3>

//                 <p className="text-[16px] leading-[28px] text-gray-500 max-w-[500px]">
//                   We'll discuss your business goals, budget, and timeline. During this initial call, we'll determine if you need end-to-end software outsourcing or one of our other engagement models.
//                 </p>
//               </div>
//             </div>

//             {/* STEP 2 */}
//             <div className="flex gap-6 relative">
              
//               <div className="w-8 h-8 bg-[#f45d2d] rounded-full flex items-center justify-center text-white text-sm z-10">
//                 👥
//               </div>

//               <div>
//                 <p className="text-[12px] tracking-[2px] text-gray-400 uppercase mb-2">
//                   Step 2
//                 </p>

//                 <h3 className="text-[22px] font-semibold text-[#1f2933] mb-2">
//                   Create a plan and assemble a team.
//                 </h3>

//                 <p className="text-[16px] leading-[28px] text-gray-500 max-w-[500px]">
//                   We'll craft a plan outlining our approach, based on your requirements and the chosen engagement model. We'll also assemble a team of specialists who possess the necessary technical expertise.
//                 </p>
//               </div>
//             </div>

//             {/* STEP 3 */}
//             <div className="flex gap-6 relative">
              
//               <div className="w-8 h-8 bg-[#f45d2d] rounded-full flex items-center justify-center text-white text-sm z-10">
//                 🚀
//               </div>

//               <div>
//                 <p className="text-[12px] tracking-[2px] text-gray-400 uppercase mb-2">
//                   Step 3
//                 </p>

//                 <h3 className="text-[22px] font-semibold text-[#1f2933] mb-2">
//                   Get to work.
//                 </h3>

//                 <p className="text-[16px] leading-[28px] text-gray-500 max-w-[500px]">
//                   Our software engineers will get to work. Throughout the software development process, we will track metrics and keep you informed about our progress to ensure you stay up to date.
//                 </p>
//               </div>
//             </div>

//           </div>

//           {/* BUTTON */}
//           <button className="mt-[50px] bg-[#f45d2d] hover:bg-[#e14f21] text-white px-7 py-[14px] rounded-lg text-[15px] font-semibold">
//             Schedule a Call
//           </button>

//         </div>

//       </div>
//     </section>
//   );
// }


import Image from "next/image";
import Link from "next/link";

export default function Process({ data }) {
  return (
   <section className="bg-[#f6f7f9] py-12 sm:py-16 lg:py-[60px]">
  <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20">

    {/* LEFT */}
    <div>

      <h2 className="mb-8 text-3xl font-semibold leading-tight sm:text-4xl lg:mb-14 lg:text-5xl lg:leading-[60px]">
        {data.title}
      </h2>

      <div className="relative mx-auto aspect-square w-full max-w-[320px] sm:max-w-[380px] lg:mx-0">
        <Image
          src="/images/qa.png"
          alt="process"
          fill
          className="rounded-[50px] sm:rounded-[80px] lg:rounded-[120px] object-cover"
        />
      </div>

    </div>

    {/* RIGHT */}
    <div className="relative">

      <div className="relative">

        {/* Timeline */}
        <div className="absolute left-4 top-0 bottom-0 border-l border-dashed border-gray-300" />

        <div className="space-y-10 sm:space-y-12 lg:space-y-[50px]">
          {data.steps.map((step, i) => (
            <div key={i} className="relative flex gap-4 sm:gap-6">

              {/* Icon */}
              <div className="z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f45d2d] text-sm text-white">
                {step.icon}
              </div>

              {/* Content */}
              <div>
                <p className="mb-2 text-[11px] sm:text-xs uppercase tracking-[2px] text-gray-400">
                  Step {i + 1}
                </p>

                <h3 className="mb-2 text-xl font-semibold sm:text-2xl">
                  {step.title}
                </h3>

                <p className="max-w-full text-sm leading-7 text-gray-500 sm:text-base">
                  {step.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Button */}
      <Link
        href="/schedule-a-call-page"
        className="mt-10 inline-flex w-full justify-center rounded-lg bg-[#f45d2d] px-7 py-4 text-white transition hover:bg-[#e14f21] sm:mt-12 sm:w-auto"
      >
        Schedule a Call
      </Link>

    </div>

  </div>
</section>
  );
}