// components/GlobalHero.jsx

import Image from "next/image";

export default function GlobalHero() {
  return (
    <section className="relative bg-black text-white py-28 overflow-hidden">
      
      {/* Background Image (World Map) */}
      <div className="absolute inset-0 opacity-30">
        <Image
          src="/global.png" // 👈 apni image yaha daal
          alt="world map"
          fill
          className="object-contain object-top"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        
        <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
          Accelerate your roadmap <br />
          with a{" "}
          <span className="text-orange-500">
            global partner.
          </span>
        </h1>

        <button className="mt-10 bg-green-600 hover:bg-green-700 transition px-6 py-3 rounded-lg text-white font-medium">
          Book a Discovery Call
        </button>
      </div>
    </section>
  );
}