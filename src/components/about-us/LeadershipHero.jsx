"use client";

import Image from "next/image";

export default function LeadershipHero() {
    return (
       <section className="relative w-full h-[650px] overflow-hidden">
  
  {/* Background Image */}
  <Image
    src="/images/team-goa.JPG"
    alt="Leadership Team"
    fill
    className="object-cover"
    priority
  />

  {/* Dark Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-l from-black/20 via-black/30 to-black/80" />

  {/* Content */}
<div className="relative z-10 max-w-7xl mx-auto h-full flex items-end justify-start px-6 pb-16 sm:pb-20">
    
    {/* Text Card */}
    <div className="max-w-md text-white text-left">
      
      <p className="text-xs tracking-[0.3em] uppercase text-gray-300 mb-4">
        Our Leadership Team
      </p>

      {/* Responsive UI update: leadership title avoids mobile clipping. */}
      <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-[52px] lg:leading-[60px]">
        Recognized across the industry. <br />
        Award-winning excellence
        <span className="text-[#f66135]">.</span>
      </h1>

      <div className="mt-8 border-l-4 border-[#f66135] pl-5">
        <p className="text-[15px] leading-7 text-gray-200">
          “Seven Unique values talented individuals from diverse backgrounds,
          creating a stronger, more innovative, and collaborative work
          environment that drives growth and success.”
        </p>

        <p className="mt-5 text-sm font-semibold">
          Dinesh Kumar Prajapat, CEO
        </p>

        <p className="mt-1 text-xs text-gray-300">
          Seven Unique Tech Solutions PVT. LTD.
        </p>
      </div>
    </div>
  </div>
</section>
    );
}
