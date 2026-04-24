// components/ContactHero.jsx

import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="w-full bg-[#f5f7fa] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* LEFT CONTENT */}
        <div className="flex-1">
          <p className="text-sm tracking-[0.2em] text-gray-500 mb-4">
            CONTACT US
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black leading-tight">
            How Can We <br />
            <span className="text-orange-500">Help?</span>
          </h1>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 w-full">
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] rounded-2xl overflow-hidden">
            <Image
              // src=""
              src="https://assets.bairesdev.com//image/upload/c_limit,w_1920/dpr_auto/f_auto/q_auto/v1/www/core/contactus-hero_ck9ooa?_a=BAVAfVDW0"
              alt="contact"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}