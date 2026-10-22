"use client";

export default function TrustedStrip() {
  return (
    <div className="mt-8 w-full px-4 sm:mt-10 sm:px-6">
        {/* Responsive UI update: trust strip stacks and reduces padding on phones. */}
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-5 rounded-2xl bg-[#4b5563] px-5 py-6 text-white sm:px-8 md:flex-row md:items-center md:gap-8 lg:px-12 lg:gap-12">
        
        {/* Left Text */}
        <div className="min-w-0 text-base font-medium leading-6 md:shrink-0">
          <p>
           A trusted partner for startups and <br className="hidden sm:block" />{" "}
            <span className="font-semibold underline decoration-white/40">
            Fortune 500 companies.
            </span>
          </p>
        </div>

        {/* Divider */}
        <div className="hidden h-12 w-px bg-white/20 md:block" />

        {/* Logos Section */}
        <div className="grid w-full min-w-0 flex-1 grid-cols-2 items-center gap-x-4 gap-y-5 sm:grid-cols-3 md:flex md:flex-wrap md:gap-8 lg:flex-nowrap lg:gap-10">
          
          {/* Google */}
          <a href="#" className="group flex min-w-0 flex-col items-center text-center">
            <span className="text-[22px] font-semibold transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
              Google
            </span>
            <span className="text-[12px] text-white/70 mt-1">
              Read case study
            </span>
          </a>

          {/* NextRoll */}
          <a href="#" className="group flex min-w-0 flex-col items-center text-center">
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
