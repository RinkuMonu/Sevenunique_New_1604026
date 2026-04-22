// components/FAQHero.jsx

import Image from "next/image";
import { Home } from "lucide-react"; // optional icon

export default function FAQHero() {
  return (
    <section className="bg-[#f3f4f6] overflow-hidden">
      
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="grid grid-cols-2 items-center">

          {/* LEFT CONTENT */}
          <div>

            {/* BREADCRUMB */}
            <div className="flex items-center gap-3 text-gray-500 mb-8">
              <Home size={18} />
              <span className="text-[14px]">›</span>
              <span className="text-[14px] font-medium text-black">FAQ</span>
            </div>

            {/* HEADING */}
            <h1 className="text-[54px] leading-[72px] font-semibold text-[#111]">
              Frequently Asked
              <br />
              Questions
            </h1>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative h-[420px]">

            {/* SHAPE CONTAINER */}
            <div className="absolute right-[-80px] top-0 w-[600px] h-full overflow-hidden">

              <div
                className="relative w-full h-full"
                style={{
                  clipPath:
                    "path('M0,0 H450 Q600,0 600,150 V270 Q600,420 450,420 H0 Z')",
                }}
              >
                <Image
                  src="https://assets.bairesdev.com//image/upload/c_limit,w_528/dpr_auto/f_auto/q_auto/v1/www/core/faq-hero_1764606462?_a=BAVAfVDW0"
                  alt="faq"
                  fill
                  className="object-cover"
                />
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}