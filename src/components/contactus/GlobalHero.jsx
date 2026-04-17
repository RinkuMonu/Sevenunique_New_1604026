// components/GlobalHero.jsx

import Image from "next/image";

export default function GlobalHero() {
  return (
    <section className="relative bg-black text-white py-32 overflow-hidden">
      
      {/* TOP RIGHT IMAGE */}
      <div className="absolute top-0 right-30 w-[60%] h-[60%]">
        <Image
          src="/global.png"
          alt="world map"
          fill
          className="object-contain object-top-right"
        />
      </div>

      {/* CONTENT LEFT SIDE */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            Accelerate your roadmap
            <br />
            with a{" "}
            <span className="text-orange-500">
              global partner.
            </span>
          </h1>

          <button className="mt-10 bg-green-600 hover:bg-green-700 transition px-6 py-3 rounded-lg text-white font-medium">
            Book a Discovery Call
          </button>
        </div>

      </div>
    </section>
  );
}