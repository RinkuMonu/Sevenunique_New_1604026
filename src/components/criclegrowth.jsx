"use client";

import Link from "next/link";

export default function Criclegrowth() {
  return (
    <section className="w-full relative -mt-20">
      {/* TOP SECTION */}
      <div className="bg-white h-[40vh]" />

      {/* CENTER IMAGE (OVERLAP FIX) */}
      <div className="absolute left-1/2 top-[47%] -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="">
          <img
            src="https://assets.bairesdev.com//image/upload/c_limit,w_1920/dpr_auto/f_auto/q_auto/v1/www/static/circles-bottom-cta_suha1s?_a=BAVAfVDW0"
            alt=""
            className="w-[360px] object-cover"
          />
        </div>
      </div>

      {/* BLACK SECTION */}
      <div className="bg-black pt-32 pb-20 md:pt-40 md:pb-24 text-center flex flex-col items-center gap-10">
        {/* HEADING */}
        <p className="text-white font-bold text-2xl  leading-tight max-w-3xl">
          We&apos;re software experts
          <br />
          committed to <span className="text-orange-500">continous growth</span>
          .
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Link href="circle" className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg text-white font-semibold transition">
            Join us Inside Circles
          </Link>

          <a
            href="/jobOp"
            className="text-white font-semibold border-b-2 border-white pb-1 flex items-center gap-2 hover:opacity-80"
          >
            Hire Our Experts →
          </a>
        </div>
      </div>
    </section>
  );
}
