"use client";

import Image from "next/image";

export default function DarkCtaStrip() {
  return (
    <section className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex items-center justify-between gap-10">
          
          {/* LEFT CONTENT */}
          <div className="max-w-xl">
            <h2 className="text-[37px] leading-tight font-semibold text-white mb-6">
              Looking for reliable Android app <br />
              development services? <br />
              <span className="text-[#f97316]">
                See how we can help.
              </span>
            </h2>

            <button className="bg-[#1f8a63] text-white px-6 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition">
              Schedule a Call
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-[360px] h-[300px] hidden md:block">
            
            {/* Mask Shape */}
            <div className="w-full h-full overflow-hidden rounded-[120px]">
              <Image
                src="/images/dark.png" 
                alt="team"
                fill
                className="object-cover"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
