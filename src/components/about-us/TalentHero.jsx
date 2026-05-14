"use client";
import Link from "next/link";
import Image from "next/image";

export default function TalentHero() {
  return (
    <section className="w-full bg-[#f5f6f7] py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
        {/* LEFT CONTENT */}
        <div>
          {/* TOP LABEL */}
          <p className="text-[13px] tracking-[0.2em] font-semibold text-gray-500 mb-6 uppercase">
            The Top 1%
          </p>
          <h1 className="text-[48px] md:text-[56px] leading-[1.1] font-semibold text-[#111827]">
            We evaluate <span className="text-[#f66135]">over 2.5 million</span> <br />
            candidates each year to provide <br />
             you with only the <span className="text-[#f66135]">top 1%</span> of{" "}
            tech talent.
          </h1>

          <p className="mt-6 text-[16px] leading-[1.7] text-gray-600 max-w-xl">
            Since 2024, we have built thousands of high-performing development teams. This success is driven by a rigorous vetting process that identifies professionals with strong technical expertise, collaboration abilities, and the AI proficiency required for modern software teams.
          </p>

          <Link href="/schedule-a-call-page">
            <button className="mt-8 bg-[#f66135] hover:bg-[#f66135] transition text-white px-6 py-3 rounded-lg text-base cursor-pointer">
           Bring the Top 1% onto Your Team 
            </button>
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-[520px]">
          <Image
            src="/images/talenthero.png" // 🔁 replace with your actual image path
            alt="Team working"
            fill
            className="object-cover rounded-[24px]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
