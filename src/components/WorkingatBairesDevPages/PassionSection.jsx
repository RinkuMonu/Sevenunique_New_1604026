"use client";

import Image from "next/image";

export default function PassionSection() {
  const items = [
    {
      title: "Technology and Development",
      desc: "Deliver groundbreaking projects for global clients.",
    },
    {
      title: "Talent Team & HR",
      desc: "Spotlight and elevate our diverse, globalized team.",
    },
    {
      title: "Marketing & Growth",
      desc: "Drive growth and shape our brand.",
    },
    {
      title: "Sales & Client Services",
      desc: "Forge impactful relationships and spearhead organizational growth.",
    },
    {
      title: "Continuous Improvement",
      desc: "Streamline our internal processes.",
    },
    {
      title: "Admin & Finance",
      desc: "Ensure smooth operations and a sustainable future.",
    },
  ];

  return (
    <section className="bg-[#f5f5f5] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* TOP */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* LEFT */}
          <div className="lg:col-span-2">
            <h2 className="text-[45px] font-semibold text-[#0b0e16] mb-6">
              What drives your passion?
            </h2>

            <p className="text-[#475569] text-lg max-w-xl">
              Be it tech mastery, management and leadership, or niche expertise,
              there's a path for you with us.
            </p>
            <div className="grid md:grid-cols-2 gap-y-14 gap-x-12 mt-10">
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
          <div className="flex flex-col gap-6">
            {/* ROW 1 */}
            <div className="flex gap-4">
              <div className="w-[40%] h-44 bg-[#F66135] rounded-[20px] relative overflow-hidden">
                <span className="absolute inset-0 flex items-center justify-center text-white text-xs">
                  <Image
                    src="https://assets.bairesdev.com//image/upload/c_limit,w_1920/dpr_auto/f_auto/q_auto/v1/www/core/joinus_what-drives-2_jocucg?_a=BAVAfVDW0"
                    fill
                    className="object-cover"
                  />
                </span>
              </div>

              <div className="w-[60%] h-44 bg-[#FFD785] rounded-[20px] relative overflow-hidden">
                <span className="absolute inset-0 flex items-center justify-center text-black text-xs">
                  <Image
                    src="https://assets.bairesdev.com//image/upload/c_limit,w_1920/dpr_auto/f_auto/q_auto/v1/www/core/joinus_what-drives-2_jocucg?_a=BAVAfVDW0"
                    fill
                    className="object-cover"
                  />
                </span>
              </div>
            </div>

            {/* ROW 2 */}
            <div className="flex gap-4">
              <div className="w-[60%] h-44 bg-[#FFAC00] rounded-[20px] relative overflow-hidden">
                <span className="absolute inset-0 flex items-center justify-center text-white text-xs">
                  <Image
                    src="https://assets.bairesdev.com//image/upload/c_limit,w_1920/dpr_auto/f_auto/q_auto/v1/www/core/joinus_what-drives-1_wfqly4?_a=BAVAfVDW00"
                    fill
                    className="object-cover"
                  />
                </span>
              </div>

              <div className="w-[40%] h-44 bg-[#FBB39E] rounded-[20px] relative overflow-hidden">
                <span className="absolute inset-0 flex items-center justify-center text-black text-xs">
                  <Image
                    src="https://assets.bairesdev.com//image/upload/c_limit,w_1920/dpr_auto/f_auto/q_auto/v1/www/core/joinus_what-drives-2_jocucg?_a=BAVAfVDW0"
                    fill
                    className="object-cover"
                  />
                </span>
              </div>
            </div>

            {/* ROW 3 */}
            <div className="flex gap-4">
              <div className="w-[40%] h-44 bg-[#16A87A] rounded-[20px] relative overflow-hidden">
                <span className="absolute inset-0 flex items-center justify-center text-white text-xs">
                  <Image
                    src="https://assets.bairesdev.com//image/upload/c_limit,w_1920/dpr_auto/f_auto/q_auto/v1/www/core/joinus_what-drives-1_wfqly4?_a=BAVAfVDW00"
                    fill
                    className="object-cover"
                  />
                </span>
              </div>

              <div className="w-[60%] h-44 bg-[#2F6FD3] rounded-[20px] relative overflow-hidden">
                <span className="absolute inset-0 flex items-center justify-center text-white text-xs">
                  <Image
                    src="https://assets.bairesdev.com//image/upload/c_limit,w_1920/dpr_auto/f_auto/q_auto/v1/www/core/joinus_what-drives-2_jocucg?_a=BAVAfVDW0"
                    fill
                    className="object-cover"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM TEXT GRID */}

        {/* BUTTON */}
        <div className="mt-16">
          <button className="bg-[#16A87A] hover:bg-[#16A87A] text-white px-6 py-3 rounded-lg font-semibold tracking-wide">
            Explore Careers
          </button>
        </div>
      </div>
    </section>
  );
}
