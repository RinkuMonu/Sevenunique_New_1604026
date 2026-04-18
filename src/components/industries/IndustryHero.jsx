// components/IndustryHero.jsx

import Image from "next/image";

export default function IndustryHero() {
  return (
    <section className="bg-white py-2">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <div>
          <p className="text-lg font-bold text-gray-500 mb-3">
            INDUSTRIES WE WORK IN
          </p>


          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-black">
            What’s your Industry? <br />
            <span className="text-orange-500">
              We cover them all.
            </span>
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            We’ve completed 1480+ projects across 130+ industry sectors since 2009.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-[400px]">
          <Image
            src="/industriesHero.avif"
            alt="industry"
            width={750}
            height={350}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}