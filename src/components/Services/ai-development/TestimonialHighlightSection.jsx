"use client";

import Image from "next/image";

export default function TestimonialHighlightSection({ testimonial }) {
  if (!testimonial) return null;

  return (
    <section className="bg-[#f5f5f5] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-6 text-[60px] leading-none text-[#f4622a]">
              &quot;
            </div>

            <p className="max-w-xl text-[28px] font-medium leading-[1.4] text-black">
              {testimonial?.quote}
            </p>
          </div>

          <div className="flex justify-end">
            <div className="flex w-full max-w-105 items-center gap-6 rounded-xl bg-white p-6 shadow-sm">
              <div>
                <h4 className="text-[16px] font-semibold text-black">
                  {testimonial?.name}
                </h4>
                <p className="mb-3 text-[13px] text-gray-500">
                  {testimonial?.role}
                </p>

                {testimonial?.companyLogo && (
                  <Image
                    src={testimonial.companyLogo}
                    alt={testimonial?.companyName || "company logo"}
                    width={90}
                    height={30}
                    className="object-contain"
                  />
                )}
              </div>

              <div className="relative h-[140px] w-[120px]">
                <Image
                  src={testimonial.personImage}
                  alt={testimonial.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end pr-2">
          <button className="flex items-center gap-2 text-[14px] font-medium text-black transition hover:text-[#f4622a]">
            Watch {testimonial?.name}
            {"'s "}
            Testimonial
            <span className="text-lg text-[#f4622a]">{">"}</span>
          </button>
        </div>

        <div className="my-12 border-t border-gray-300"></div>

        <p className="mx-auto max-w-3xl text-center text-[15px] leading-[1.7] text-gray-600">
          {testimonial?.summary}
        </p>
      </div>
    </section>
  );
}
