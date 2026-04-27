"use client";
import Link from "next/link";
import Image from "next/image";

export default function GlobalCTA() {
  return (
    <section className="w-full bg-black py-20 px-6 md:px-12 text-center">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        
        {/* MAP IMAGE */}
        <div className="mb-10">
          <Image
            src="/images/map.png"
            alt="World Map"
            width={450}
            height={200}
            className="object-contain"
          />
        </div>

        {/* TEXT */}
        <h2 className="text-2xl md:text-3xl font-semibold text-white leading-snug max-w-2xl">
          Delivering{" "}
          <span className="text-[#ff5a2f]">end-to-end</span>{" "}
          tech solutions worldwide.
        </h2>

        {/* BUTTON */}
        <Link href="/schedule-a-call-page">
  <button className="mt-8 bg-[#2bb673] hover:bg-[#249e62] text-white px-6 py-3 rounded-md text-sm font-medium transition cursor-pointer">
    Schedule a Call
  </button>
</Link>

      </div>
    </section>
  );
}