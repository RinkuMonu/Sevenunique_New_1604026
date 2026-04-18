// components/Logos.jsx

import Image from "next/image";

export default function Logos() {
  return (
    <section className="bg-[#f6f7f9] py-10">
      
      <div className="max-w-[1000px] px-6">
        
        {/* MAIN BOX */}
        <div className="bg-[#5f6b76] rounded-[20px] shadow-md px-8 py-6 flex items-center gap-8">

          {/* LEFT TEXT */}
          <div className="w-[260px]">
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
          <div className="flex flex-1 items-center justify-between">

            {/* Google */}
            <div className="group text-center cursor-pointer">
              <Image
                src="https://assets.bairesdev.com/image/upload/v1/www/silos/google-white_uooeom.svg"
                alt="Google"
                width={120}
                height={60}
                className="mx-auto h-[48px] object-contain"
              />
              <p className="text-white text-[12px] mt-1 group-hover:underline">
                Read case study
              </p>
            </div>

            {/* NextRoll */}
            <div className="group text-center cursor-pointer">
              <Image
                src="https://assets.bairesdev.com/image/upload/v1/www/silos/nextroll-white_quqpfz.svg"
                alt="NextRoll"
                width={120}
                height={60}
                className="mx-auto h-[48px] object-contain"
              />
              <p className="text-white text-[12px] mt-1 group-hover:underline">
                Watch testimonial ▶
              </p>
            </div>

            {/* Pinterest */}
            <Image
              src="https://assets.bairesdev.com/image/upload/v1/www/silos/pinterest-white_c7eb21.svg"
              alt="Pinterest"
              width={120}
              height={60}
              className="h-[48px] object-contain"
            />

            {/* Adobe */}
            <Image
              src="https://assets.bairesdev.com/image/upload/v1/www/silos/adobe-white_jtbwfc.svg"
              alt="Adobe"
              width={120}
              height={60}
              className="h-[48px] object-contain"
            />

            {/* Square */}
            <Image
              src="https://assets.bairesdev.com/image/upload/v1/www/silos/square-white_bzbuaj.svg"
              alt="Square"
              width={120}
              height={60}
              className="h-[48px] object-contain hidden md:block"
            />

          </div>
        </div>

      </div>
    </section>
  );
}