"use client";

import Image from "next/image";
import Link from "next/link";

export default function BaiPortfolioSection() {
  const items = [
    {
      title: "Built a new US challenger bank.",
      logo: "https://assets.bairesdev.com//image/upload/c_limit,w_1920/dpr_auto/f_auto/q_auto/v1/www/core/joinus_azlo_orzvnp?_a=BAVAfVDW0",
    },
    {
      title: "Improved power plant safety.",
      logo: "https://assets.bairesdev.com//image/upload/fl_sanitize/v1/www/core/joinus_rolls-royce_nca2nu.svg",
    },
    {
      title: "Powered Oscar-worthy 3D visuals.",
      logo: "https://assets.bairesdev.com//image/upload/fl_sanitize/v1/www/core/joinus_autodesk_i4gbui.svg",
    },
    {
      title: "Revamped the Ads Manager.",
      logo: "https://assets.bairesdev.com//image/upload/fl_sanitize/v1/www/core/joinus_pinterest_lrytcg.svg",
    },
  ];

  return (
    <section className="bg-[#f5f5f5] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-10 mb-16">
          {/* LEFT TEXT */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight">
              A snapshot of some <br /> previous work.
            </h2>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-[1.3] relative h-[260px] md:h-[320px] lg:h-[380px] rounded-xl overflow-hidden">
            <Image
              src="https://assets.bairesdev.com//image/upload/c_limit,w_1920/dpr_auto/f_auto/q_auto/v1/www/core/join-us-previous-work_zseruc?_a=BAVAfVDW0"
              alt="preview"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* CARDS (OVERLAP SECTION) */}
        <div className="relative -mt-24 md:-mt-32">
          <div className="flex flex-wrap gap-6">
            {items.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-lg p-6 w-full sm:w-[48%] lg:w-[23%] flex flex-col justify-between min-h-[150px]"
              >
                <h4 className="text-gray-900 text-lg font-medium leading-snug">
                  {item.title}
                </h4>

                <div className="mt-6 h-10 relative w-32">
                  <Image
                    src={item.logo}
                    alt="logo"
                    fill
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
