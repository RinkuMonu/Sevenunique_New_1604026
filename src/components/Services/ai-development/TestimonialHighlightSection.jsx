"use client";

import Image from "next/image";

export default function TestimonialHighlightSection() {
  return (
    <section className="bg-[#f5f5f5] py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* TOP CONTENT */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT QUOTE */}
          <div>
            {/* QUOTE ICON */}
            <div className="text-[60px] text-[#f4622a] leading-none mb-6">
              “
            </div>

            {/* TEXT */}
            <p className="text-[28px] leading-[1.4] font-medium text-black max-w-xl">
              Their engineers perform at very high standards. We've had a strong
              relationship for almost 7 years.
            </p>
          </div>

          {/* RIGHT CARD */}
          <div className="flex justify-end">
            <div className="bg-white rounded-xl p-6 flex items-center gap-6 shadow-sm max-w-[420px] w-full">

              {/* TEXT */}
              <div>
                <h4 className="font-semibold text-black text-[16px]">
                  Patrick Mee
                </h4>
                <p className="text-gray-500 text-[13px] mb-3">
                  EVP Of Engineering
                </p>

                {/* LOGO */}
                <div className="flex items-center gap-2">
                  <Image
                    src="/logos/nextroll-new.png" // 👈 replace with your logo
                    alt="NextRoll"
                    width={90}
                    height={30}
                  />
                </div>
              </div>

              {/* IMAGE */}
              <div className="relative w-[120px] h-[140px]">
                <Image
                  src="/logos/img2.png" // 👈 replace with your image
                  alt="Patrick"
                  fill
                  className="object-contain"
                />
              </div>

            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6 flex justify-end pr-2">
          <button className="flex items-center gap-2 text-black text-[14px] font-medium hover:text-[#f4622a] transition">
            Watch Patrick's Testimonial
            <span className="text-[#f4622a] text-lg">▶</span>
          </button>
        </div>

        {/* DIVIDER */}
        <div className="my-12 border-t border-gray-300"></div>

        {/* BOTTOM TEXT */}
        <p className="text-center text-gray-600 text-[15px] leading-[1.7] max-w-3xl mx-auto">
          The best partnerships are the ones you don't have to worry about. We
          deliver the kind of technical execution and reliability that builds
          long-term trust. It's why clients consistently praise our work quality
          and performance.
        </p>

      </div>
    </section>
  );
}