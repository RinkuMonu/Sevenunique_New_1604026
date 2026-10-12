"use client";

import Image from "next/image";
import Link from "next/link";

export default function BaiPortfolioSection() {
  const items = [
    {
      title: "Created a modern digital banking platform in the US.",
      logo: "/images/tripjack.jpg",
    },
    {
      title: "Enhanced safety systems and operations in power plants.",
      logo: "/team/tbo.PNG",
    },
    {
      title: "Created high-quality 3D visuals used in award-level productions.",
      logo: "/images/surepass.png",
    },
    {
      title: "Improved and redesigned the Ads Manager platform for better performance and usability.",
      logo: "/images/exotel.png",
    },
  ];

  return (
    <section className="bg-[#f5f5f5] py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* TOP */}
        <div className="mb-10 flex flex-col gap-8 sm:mb-16 lg:flex-row lg:gap-10">
          {/* LEFT TEXT */}
          <div className="flex-1">
            <h2 className="text-3xl font-semibold leading-tight text-gray-900 md:text-5xl">
             A quick look at some of our <br className="hidden sm:block" /> past projects and experience.
            </h2>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-[1.3] relative h-[260px] md:h-[320px] lg:h-[380px] rounded-xl overflow-hidden">
            <Image
              src="https://assets.bairesdev.com//image/upload/c_limit,w_1920/dpr_auto/f_auto/q_auto/v1/www/core/join-us-previous-work_zseruc?_a=BAVAfVDW0"
              alt="preview"
              fill
              sizes="(max-width: 1023px) 100vw, 55vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* CARDS (OVERLAP SECTION) */}
        {/* Responsive UI update: remove mobile overlap and use exact grid columns. */}
        <div className="relative lg:-mt-32">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {items.map((item, i) => (
              <div
                key={i}
                className="flex min-h-[150px] min-w-0 flex-col justify-between rounded-xl bg-white p-5 shadow-lg sm:p-6"
              >
                <h4 className="text-gray-900 text-lg font-medium leading-snug">
                  {item.title}
                </h4>

                <div className="mt-6 h-10 relative w-32">
                  <Image
                    src={item.logo}
                    alt="logo"
                    fill
                    sizes="128px"
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <div className="mt-10">
            <Link href="/schedule-a-call-page" className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition">
              More Previous Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
