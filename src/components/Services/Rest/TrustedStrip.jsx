"use client";

export default function TrustedStrip() {
  return (
    <div className="w-full px-6 mt-10">
      <div className="bg-[#4b5563] text-white rounded-2xl px-12 py-6 flex items-center gap-14 max-w-6xl">
        
        {/* Left Text */}
        <div className="text-[16px] leading-6 font-medium whitespace-nowrap">
          <p>
            500+ companies rely on <br />
            <span className="font-semibold underline decoration-white/40">
              our top 1% tech talent.
            </span>
          </p>
        </div>

        {/* Divider */}
        <div className="h-12 w-px bg-white/20" />

        {/* Logos Section */}
        <div className="flex items-center gap-14 flex-1">
          
          {/* Google */}
          <a href="#" className="group flex flex-col items-center">
            <span className="text-[22px] font-semibold transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
              Google
            </span>
            <span className="text-[12px] text-white/70 mt-1">
              Read case study
            </span>
          </a>

          {/* NextRoll */}
          <a href="#" className="group flex flex-col items-center">
            <span className="text-[20px] font-semibold transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
              NextRoll
            </span>
            <span className="text-[12px] text-white/70 mt-1">
              Watch testimonial
            </span>
          </a>

          {/* Pinterest */}
          <div className="group">
            <span className="text-[20px] font-semibold transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
              Pinterest
            </span>
          </div>

          {/* Adobe */}
          <div className="group">
            <span className="text-[20px] font-semibold transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
              Adobe
            </span>
          </div>

          {/* Square */}
          <div className="group">
            <span className="text-[20px] font-semibold transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
              Square
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}