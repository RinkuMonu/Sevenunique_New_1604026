"use client";
import Link from "next/link";
import Image from "next/image";

export default function DarkShowcase() {
  return (
    <section className="relative mt-10 overflow-hidden rounded-[28px] border border-orange-200 bg-orange-100 px-4 py-14 sm:mt-16 sm:rounded-[40px] sm:px-6 sm:py-20 lg:py-28">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-orange-300/30 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#f15c2d]/20 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <div className="inline-flex items-center gap-2 bg-white border border-orange-200 rounded-full px-4 py-2 text-sm text-gray-700 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Build Your Dedicated Tech Team
          </div>

          <h2 className="text-[#111827] text-[38px] md:text-[54px] leading-[1.15] font-bold">
            Hire exceptional{" "}
            <span className="text-[#f15c2d]">
              tech talent
            </span>{" "}
            to launch and scale products faster.
          </h2>

          <p className="mt-6 text-gray-700 text-lg leading-relaxed max-w-2xl">
            Work with experienced developers, designers, QA engineers, and
            project managers who integrate seamlessly into your workflow and
            help your business grow with confidence.
          </p>

          {/* STATS */}
          <div className="flex flex-wrap gap-8 mt-10">
            <div>
              <h3 className="text-3xl font-bold text-[#111827]">375+</h3>
              <p className="text-gray-600 text-sm mt-1">Tech Experts</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#111827]">98%</h3>
              <p className="text-gray-600 text-sm mt-1">
                Client Satisfaction
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#111827]">24/7</h3>
              <p className="text-gray-600 text-sm mt-1">Support Available</p>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 mt-10">
            <Link href="/schedule-a-call-page">
              <button className="bg-[#f15c2d] hover:bg-[#d94f24] transition-all duration-300 text-white px-7 py-4 rounded-xl font-semibold shadow-lg cursor-pointer">
                Schedule a Call
              </button>
            </Link>

            <Link href="/hire-developers">
              <button className="border border-orange-300 hover:bg-white transition-all duration-300 text-[#111827] px-7 py-4 rounded-xl font-semibold cursor-pointer">
                Explore Talent
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Responsive UI update: mobile badges sit below the image instead of covering it. */}
          <div className="relative w-full max-w-[540px] lg:h-[420px]">
            
            {/* MAIN IMAGE */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] border border-white/40 shadow-2xl sm:aspect-[16/10] sm:rounded-[32px] lg:absolute lg:inset-0 lg:aspect-auto">
              <Image
                src="/images/handonhand.png"
                alt="Tech Talent Team"
                fill
                sizes="(max-width: 1023px) 100vw, 540px"
                className="object-cover"
              />
            </div>

            {/* FLOATING CARD 1 */}
            <div className="relative mt-3 rounded-xl border border-orange-100 bg-white px-4 py-3 shadow-lg sm:px-5 sm:py-4 lg:absolute lg:-left-10 lg:top-10 lg:mt-0 lg:rounded-2xl lg:shadow-xl">
              <h4 className="text-xl font-bold text-[#111827] sm:text-2xl">3500+</h4>
              <p className="text-sm text-gray-500">
                Projects Delivered
              </p>
            </div>

            {/* FLOATING CARD 2 */}
            <div className="relative mt-3 rounded-xl bg-[#111827] px-4 py-3 text-white shadow-lg sm:px-6 sm:py-4 lg:absolute lg:-right-6 lg:bottom-10 lg:mt-0 lg:rounded-2xl lg:shadow-2xl">
              <h4 className="text-lg font-semibold sm:text-xl">
                Dedicated Teams
              </h4>

              <p className="text-sm text-gray-300 mt-1">
                Flexible & scalable hiring
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
