import Link from "next/link";

export default function CTABand() {
  return (
    <section className="bg-[#020202] px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 overflow-hidden">
      
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        
        {/* LEFT SIDE (TEXT + BUTTON) */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-[28px] sm:text-[34px] md:text-[40px] lg:text-[46px] font-semibold text-white tracking-tight leading-[1.15]">
           Want to build and 

            <br />
           scale software faster?
            <br />
            <span className="text-[#f4622a]">See how we can help.</span>
          </h2>

          <Link
            href="/start/basic-details"
            className="mt-8 inline-flex items-center justify-center bg-[#19b28c] hover:bg-[#149978] text-white font-semibold text-[14px] sm:text-[15px] px-6 sm:px-7 py-3 rounded-lg transition-colors duration-150"
          >
            Explore how we can help.
          </Link>
        </div>

        {/* RIGHT SIDE (IMAGE) */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[310px] sm:max-w-[420px] lg:max-w-[520px]">
            <div className="absolute inset-0 rounded-md bg-black/50 -rotate-6 scale-[0.985]" />
            <img
              src="https://assets.bairesdev.com//image/upload/c_limit,w_1920/dpr_auto/f_auto/q_auto/v1/www/core/bottom_cta_1_rnejgz?_a=BAVAfVDW0"
              alt="Two developers collaborating"
              className="relative rounded-md shadow-2xl -rotate-3 sm:-rotate-2 object-cover w-full aspect-[16/10]"
            />
          </div>
        </div>

      </div>
    </section>
  );
}