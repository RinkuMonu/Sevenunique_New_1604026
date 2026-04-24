// // components/Logos.jsx

// import Image from "next/image";

// export default function Logos() {
//   return (
//     // <section className="bg-[#f6f7f9] py-10">
//     <section className="bg-white py-10">
      
//       <div className="max-w-[1250px] px-6">
        
//         {/* MAIN BOX */}
//         <div className="bg-[#5f6b76] rounded-[20px] shadow-md px-8 py-6 flex items-center gap-8">

//           {/* LEFT TEXT */}
//           <div className="w-[260px]">
//             <p className="text-white text-[18px] leading-[28px]">
//               500+ companies rely on our{" "}
//               <span className="font-bold underline">
//                 top 1% tech talent
//               </span>.
//             </p>
//           </div>

//           {/* DIVIDER */}
//           <div className="w-[1px] h-[60px] bg-white/40" />

//           {/* LOGOS */}
//           <div className="flex flex-1 items-center justify-between">

//             {/* Google */}
//             <div className="group text-center cursor-pointer">
//               <Image
//                 // src="https://assets.bairesdev.com/image/upload/v1/www/silos/google-white_uooeom.svg"
//                 src="https://www.sevenunique.com/bank/instantpay.png"
//                 alt="Google"
//                 width={120}
//                 height={60}
//                 className="mx-auto h-[48px] object-contain"
//               />
//               {/* <p className="text-white text-[12px] mt-1 group-hover:underline">
//                 Read case study
//               </p> */}
//             </div>

//             {/* NextRoll */}
//             <div className="group text-center cursor-pointer">
//               <Image
//                 // src="https://assets.bairesdev.com/image/upload/v1/www/silos/nextroll-white_quqpfz.svg"
//                 src="https://www.sevenunique.com/bank/exotel.png"
//                 alt="NextRoll"
//                 width={120}
//                 height={60}
//                 className="mx-auto h-[48px] object-contain"
//               />
//               {/* <p className="text-white text-[12px] mt-1 group-hover:underline">
//                 Watch testimonial ▶
//               </p> */}
//             </div>

//             {/* Pinterest */}
//             <Image
//               // src="https://assets.bairesdev.com/image/upload/v1/www/silos/pinterest-white_c7eb21.svg"
//               src="https://www.sevenunique.com/bank/tripjack.png"
//               alt="Pinterest"
//               width={120}
//               height={60}
//               className="h-[48px] object-contain"
//             />

//             {/* Adobe */}
//             <Image
//               // src="https://assets.bairesdev.com/image/upload/v1/www/silos/adobe-white_jtbwfc.svg"
//               src="https://www.sevenunique.com/bank/nsdl.png"
//               alt="Adobe"
//               width={120}
//               height={60}
//               className="h-[48px] object-contain"
//             />

//             {/* Square */}
//             <Image
//               // src="https://assets.bairesdev.com/image/upload/v1/www/silos/square-white_bzbuaj.svg"
//               src="https://www.sevenunique.com/bank/tbo.png"
//               alt="Square"
//               width={120}
//               height={60}
//               className="h-[48px] object-contain hidden md:block"
//             />

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }


// components/Logos.jsx

import Image from "next/image";

const logos = [
  "https://www.sevenunique.com/bank/instantpay.png",
  "https://www.sevenunique.com/bank/exotel.png",
  "https://www.sevenunique.com/bank/tripjack.png",
  "https://www.sevenunique.com/bank/nsdl.png",
  "https://www.sevenunique.com/bank/surepass.png",
];

export default function Logos() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-[1250px] mx-auto px-6">

        <div className="bg-[#5f6b76] rounded-[24px] shadow-md px-8 py-6 flex items-center gap-10">

          {/* LEFT TEXT */}
          <div className="w-[280px]">
            <p className="text-white text-[18px] leading-[28px]">
              500+ companies rely on our{" "}
              <span className="font-bold underline">
                top 1% tech talent
              </span>.
            </p>
          </div>

          {/* DIVIDER */}
          <div className="w-[1px] h-[60px] bg-white/40" />

          {/* LOGOS */}
          <div className="flex flex-1 items-center justify-between gap-6">

            {logos.map((logo, i) => (
              <div
                key={i}
                className="bg-white rounded-lg px-6 py-3 flex items-center justify-center h-[70px] min-w-[120px] hover:scale-105 transition"
              >
                <Image
                  src={logo}
                  alt="logo"
                  width={100}
                  height={40}
                  className="object-contain max-h-[40px] w-auto"
                />
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}