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
  "/images/nodejs.png",
  "/images/reactjs.png",
  "/images/aws-logo.png",
  "/images/flutter.png",
  "/images/ai.jpg",
];

export default function Logos() {
  return (
  <section className="bg-white py-10 sm:py-12 lg:py-16">
  <div className="mx-auto max-w-[1250px] px-4 sm:px-6 lg:px-8">

    <div className="flex flex-col lg:flex-row items-center gap-8 rounded-[24px] bg-[#5f6b76] px-6 py-8 sm:px-8 lg:px-10 shadow-md">

      {/* LEFT TEXT */}
      <div className="w-full lg:max-w-[280px] text-center lg:text-left">
        <p className="text-base sm:text-lg leading-7 text-white">
          500+ companies rely on our{" "}
          <span className="font-bold underline">
            top 1% tech talent
          </span>
          .
        </p>
      </div>

      {/* DIVIDER */}
      <div className="h-px w-full bg-white/40 lg:h-[60px] lg:w-px" />

      {/* LOGOS */}
      <div className="grid w-full flex-1 grid-cols-2 gap-4 sm:grid-cols-3 lg:flex lg:items-center lg:justify-between lg:gap-6">

        {logos.map((logo, i) => (
          <div
            key={i}
            className="flex h-[70px] items-center justify-center rounded-lg bg-white px-4 py-3 transition duration-300 hover:scale-105 sm:h-[75px] lg:min-w-[120px]"
          >
            <Image
              src={logo}
              alt="logo"
              width={100}
              height={40}
              className="h-auto max-h-[40px] w-auto object-contain"
            />
          </div>
        ))}

      </div>

    </div>
  </div>
</section>
  );
}
