import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function ClutchSection() {
  return (
    <section className="bg-[#ffff] py-20 px-4 md:px-10 mt-10">
      <div className=" relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 -top-40 justify-center">
        {/* LEFT IMAGE */}
        <div className=" w-full md:w-1/2 ">
          {/* MAIN IMAGE */}
          <div className="relative h-[260px] md:h-[300px] rounded-2xl overflow-hidden ">
            <Image
              src="https://assets.bairesdev.com//image/upload/c_limit,w_1920/dpr_auto/f_auto/q_auto/v1/www/core/clutch_ggh2er?_a=BAVAfVDW0"
              alt="meeting"
              fill
              className="object-cover"
            />
          </div>

          {/* FLOATING CARD */}
          <div className="absolute -bottom-12 left-1/2 left-30 ">
            <div className="bg-white rounded-2xl shadow-xl w-[280px] h-25 flex items-center justify-center">
              <Image
                src="/clutch-rating.webp"
                alt="IBM Logo"
                width={220}
                height={100}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative w-full md:w-1/2 flex justify-center md:justify-start">
          <div>
            <a
              href="#"
              className="group text-orange-500 text-xl font-[600]  pb-2 flex items-center gap-2   absolute tracking-wide top-40 hover:translate-x-[24px] transition-all duration-300"
            >
              Read our reviews on Clutch <ArrowRight size={18} />
            </a>
          </div>
          <div className="border-b-2 border-orange-600 h-[0.2px] bg-orange-600 w-full md:w-1/2 absolute -bottom-50 rounded-md">.</div>
        </div>
      </div>
    </section>
  );
}
