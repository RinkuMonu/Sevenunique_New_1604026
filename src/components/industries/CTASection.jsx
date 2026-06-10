// components/CTASection.jsx

import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
  return (
 <section className="bg-[#6c6b6b] text-black py-20">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid lg:grid-cols-2 gap-12 items-center">

      {/* LEFT CONTENT */}
      <div>
        <h2 className="text-2xl md:text-4xl font-bold leading-snug">
          Speed up your product delivery by working with a trusted,
          <br />
          award-recognized{" "}
          <span className="text-orange-500">
            software development team.
          </span>
        </h2>

        <Link
          href="/schedule-a-call-page"
          className="mt-8 inline-block bg-green-800 hover:bg-green-900 transition px-6 py-3 rounded-lg font-medium text-white"
        >
          Schedule a Call
        </Link>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-center lg:justify-end">
        <div className="relative w-full max-w-[500px] h-[280px] md:h-[350px]">
          <Image
            src="/images/crm.png"
            alt="cta"
            fill
            className="object-cover rounded-xl shadow-xl"
          />
        </div>
      </div>

    </div>
  </div>
</section>
  );
}