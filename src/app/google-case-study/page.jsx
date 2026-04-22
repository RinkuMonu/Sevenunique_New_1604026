import SummarySection from "@/components/innnerPages/summarySection";
import Image from "next/image";

export default function HeroExact() {
  return (
    <>
      <section className="relative h-[100vh] flex items-center -mt-5">
        {/* BACKGROUND */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://assets.bairesdev.com/image/upload/v1/www/core/hero_yu702i"
            alt="hero"
            fill
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* CONTAINER */}
        <div className="w-full px-6 flex flex-col items-start gap-10 max-w-7xl mx-auto">
          {/* MAIN */}
          <div className="flex flex-col gap-10">
            {/* BREADCRUMB */}
            <div className="text-white text-sm mb-6 opacity-80 flex items-center gap-4">
              <span className="mx-2">›</span>
              Our Clients <span className="mx-2">›</span>
              <span className="font-semibold">Google</span>
            </div>
            {/* miidle */}
            <div className="max-w-full">
              <p className="uppercase tracking-[0.25em] text-gray-400 text-sm mb-4 font-bold">
                GOOGLE CASE STUDY - INTERNET AND TECHNOLOGY
              </p>

              <h1 className="text-white font-bold leading-[1.1] text-[48px] md:text-[64px] lg:text-[72px]">
                Comprehensive QA for YouTube and Android TV
              </h1>
            </div>

            {/* FORM */}
          </div>
          <div className="bg-white rounded-2xl px-8 py-6 w-full max-w-[500px] shadow-2xl mt-10">
            <p className="text-gray-700 text-lg mb-5 tracking-wide">
              Get this case study in PDF to your inbox.
            </p>
            <form className="flex gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 border border-gray-200 text-gray-700 placeholder:text-gray-400 rounded-lg px-4 py-3 outline-1 outline-gray-400"
              />

              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium">
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
      <SummarySection />
    </>
  );
}
