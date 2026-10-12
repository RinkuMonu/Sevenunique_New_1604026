// components/FAQHero.jsx

import Image from "next/image";
import { Home } from "lucide-react"; // optional icon

export default function FAQHero() {
  return (
    <section className="bg-[#f3f4f6] overflow-hidden">
      
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        
        {/* Responsive UI update: give FAQ copy the full phone width and use two columns on desktop. */}
        <div className="grid grid-cols-1 items-center lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div className="min-w-0 py-12 sm:py-16 lg:py-0">

            {/* BREADCRUMB */}
            <div className="flex items-center gap-3 text-gray-500 mb-8">
              <Home size={18} />
              <span className="text-[14px]">›</span>
              <span className="text-[14px] font-medium text-black">FAQ</span>
            </div>

            {/* HEADING */}
            {/* Responsive UI update: fluid FAQ heading and decoration. */}
            <h1 className="max-w-xl break-normal text-3xl font-semibold leading-tight text-[#111] sm:text-4xl md:text-5xl lg:text-[54px] lg:leading-[72px]">
              Frequently Asked{" "}
              <br className="hidden sm:block" />
              Questions
            </h1>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative hidden h-[420px] lg:block">

            {/* SHAPE CONTAINER */}
            <div className="absolute right-[-80px] top-0 hidden h-full w-[600px] overflow-hidden lg:block">

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
                  sizes="600px"
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
