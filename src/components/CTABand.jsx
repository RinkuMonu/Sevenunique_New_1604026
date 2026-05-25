import Link from "next/link";

export default function CTABand() {
  return (
    <section className="bg-[#020202]   mt-10 px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 overflow-hidden">
      
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        
        {/* LEFT SIDE (TEXT + BUTTON) */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-[28px] sm:text-[34px] md:text-[40px] lg:text-[46px] font-semibold text-white tracking-tight leading-[1.15]">
         Build, Launch & Scale With Confidence

            <br />Partner with us for reliable and 
            <br />
            <span className="text-[#f4622a]">future-ready software solutions.</span>
          </h2>

          <Link
           
            href="/schedule-a-call-page"
            className="inline-block bg-[#f4622a] hover:bg-[#d94f1e] text-white px-6 py-3 rounded-md font-medium transition"
          >
            Explore how we can help.
          </Link>
        </div>

        {/* RIGHT SIDE (IMAGE) */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[310px] sm:max-w-[420px] lg:max-w-[520px]">
            <div className="absolute inset-0 rounded-md bg-black/50 " />
            <img
              // src="/images/1779359281185.png"
              src="/images/1779359110276.png"
              alt="Two developers collaborating"
              className="relative rounded-md shadow-2xl  object-cover w-full aspect-[16/10]"
            />
          </div>
        </div>

      </div>
    </section>
  );
}