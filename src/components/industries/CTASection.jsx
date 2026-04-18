// components/CTASection.jsx

import Image from "next/image";

export default function CTASection() {
  return (
    <section className="bg-black text-white pt-32 pb-20 relative overflow-hidden">
      
      {/* TOP IMAGE (OVERLAP) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-[300px] md:w-[400px] h-[180px] md:h-[220px] rotate-[-5deg] shadow-xl">
          <Image
            src="/CTAImage.avif" // 👈 apni image
            alt="cta"
            fill
            className="object-cover rounded-lg"
          />
          
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-4xl font-semibold leading-snug">
            Want to accelerate software development at your company?{" "}
            <span className="text-orange-500">
              See how we can help.
            </span>
          </h2>

          <button className="mt-8 bg-green-600 hover:bg-green-700 transition px-6 py-3 rounded-lg font-medium">
            Schedule a Call
          </button>
        </div>

      </div>
    </section>
  );
}