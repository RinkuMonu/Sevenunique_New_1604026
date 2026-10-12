"use client";

import Image from "next/image";
import Link from "next/link";

export default function PassionSection() {
const items = [
  {
    title: "Technology and Development",
    desc: "Deliver innovative projects for global clients.",
  },
  {
    title: "Talent Team & HR",
    desc: "Build and support a diverse global team.",
  },
  {
    title: "Marketing & Growth",
    desc: "Drive growth and strengthen the brand.",
  },
  {
    title: "Sales & Client Services",
    desc: "Build strong client relationships and support business growth.",
  },
  {
    title: "Continuous Improvement",
    desc: "Improve and streamline internal processes.",
  },
  {
    title: "Admin & Finance",
    desc: "Keep operations smooth and ensure financial stability.",
  },
];

  return (
    <section className="bg-[#f5f5f5] py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* TOP */}
        <div className="mb-12 grid grid-cols-1 gap-10 sm:mb-16 lg:grid-cols-3 lg:gap-12">
          {/* LEFT */}
          <div className="lg:col-span-2">
            {/* Responsive UI update: career title uses mobile-first sizing. */}
            <h2 className="mb-6 text-3xl font-semibold text-[#0b0e16] sm:text-4xl lg:text-[45px]">
               More work samples from different industries.
            </h2>

            {/* <p className="text-[#475569] text-lg max-w-xl">
              Be it tech mastery, management and leadership, or niche expertise,
              there's a path for you with us.
            </p> */}
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-10 lg:mt-10 lg:gap-y-14">
              {items.map((item, i) => (
                <div key={i}>
                  <div className="w-8 h-[2px] bg-orange-500 mb-3"></div>

                  <h3 className="text-xl font-semibold text-[#0f172a] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-[#475569]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COMPLEX IMAGE GRID */}
          {/* Responsive UI update: image mosaic uses balanced mobile heights and safe gaps. */}
          <div className="flex flex-col gap-6">
            {/* ROW 1 */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="relative h-36 overflow-hidden rounded-[16px] bg-[#F66135] sm:h-44 sm:rounded-[20px]">
                <span className="absolute inset-0 flex items-center justify-center text-white text-xs">
                  <Image
                    src="/images/t1.png"
                    fill
                    sizes="(max-width: 1023px) 50vw, 20vw"
                    className="object-cover"
                    alt="img"
                  />
                </span>
              </div>

              <div className="relative h-36 overflow-hidden rounded-[16px] bg-[#FFD785] sm:h-44 sm:rounded-[20px]">
                <span className="absolute inset-0 flex items-center justify-center text-black text-xs">
                  <Image
                    src="/images/t4.png"
                    fill
                    sizes="(max-width: 1023px) 50vw, 20vw"
                    alt="img"
                    className="object-cover"
                  />
                </span>
              </div>
            </div>

            {/* ROW 2 */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="relative h-36 overflow-hidden rounded-[16px] bg-[#FFAC00] sm:h-44 sm:rounded-[20px]">
                <span className="absolute inset-0 flex items-center justify-center text-white text-xs">
                  <Image
                    src="/images/t3.png"
                    fill
                    sizes="(max-width: 1023px) 50vw, 20vw"
                    alt="img"
                    className="object-cover"
                  />
                </span>
              </div>

              <div className="relative h-36 overflow-hidden rounded-[16px] bg-[#FBB39E] sm:h-44 sm:rounded-[20px]">
                <span className="absolute inset-0 flex items-center justify-center text-black text-xs">
                  <Image
                    src="/images/t2.png"
                    fill
                    sizes="(max-width: 1023px) 50vw, 20vw"
                    alt="img"
                    className="object-cover"
                  />
                </span>
              </div>
            </div>

           
          </div>
        </div>

        {/* BOTTOM TEXT GRID */}

        {/* BUTTON */}
        <div className="mt-10 sm:mt-16">
          <Link href="/jobOp" className="inline-flex w-full items-center justify-center rounded-lg bg-[#16A87A] px-6 py-3 font-semibold tracking-wide text-white hover:bg-[#138d68] sm:w-auto">
            Explore Careers
          </Link>
        </div>
      </div>
    </section>
  );
}
