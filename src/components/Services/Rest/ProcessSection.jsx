"use client";

import Image from "next/image";

const FALLBACK_IMAGE = "/images/process.png";

export default function ProcessSection({ data }) {
  if (!data) return null;

  const {
    titleLines,
    image,
    steps,
    buttonLabel,
    buttonLink,
  } = data;

  // ✅ fix: ensure valid image
  const safeImage =
    image && image.trim() !== "" ? image : FALLBACK_IMAGE;

  return (
    <section id="process" className="bg-[#f8fafc] py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        <div>
          
          {/* MAIN CONTENT */}
          <div>
            
            <div className="grid items-center gap-9 md:grid-cols-[0.95fr_1.05fr] md:gap-12 lg:gap-16">
              
              {/* LEFT SIDE */}
              <div>
                {/* Responsive UI update: process title remains readable on phones. */}
                <h2 className="mb-7 block w-full max-w-full whitespace-normal break-words text-3xl font-semibold leading-tight text-[#0f172a] sm:mb-10 sm:text-4xl lg:text-[44px]">
                  {titleLines?.join(" ")}
                </h2>

                {/* Image */}
                <div className="relative h-[220px] w-full overflow-hidden rounded-2xl sm:h-[300px] sm:rounded-[40px]">
                  <Image
                    src="/images/qa.png"
                    alt="process"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* RIGHT TIMELINE */}
              <div className="relative rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
                
                {/* Vertical Line */}
                <div className="absolute left-[19px] top-6 bottom-20 border-l border-dashed border-gray-400"></div>

                <div className="space-y-9 sm:space-y-12">
                  {steps?.map((item, i) => (
                    <div key={i} className="relative flex min-w-0 gap-4 sm:gap-6">
                      
                      {/* Dot */}
                      <div className="relative z-10 shrink-0">
                        <div className="w-10 h-10 rounded-full bg-[#c2410c] flex items-center justify-center"></div>
                      </div>

                      {/* Content */}
                      <div className="min-w-0">
                        <p className="text-xs tracking-widest text-gray-400 mb-1">
                          {item.step}
                        </p>

                        <h3 className="mb-2 [overflow-wrap:anywhere] text-xl font-semibold text-[#0f172a] sm:text-[22px]">
                          {item.title}
                        </h3>

                        <p className="text-[15px] text-gray-600 leading-7 max-w-md">
                          {item.desc}
                        </p>
                      </div>

                    </div>
                  ))}
                </div>

                {/* Button */}
                <div className="mt-5">
                  <a
                    href={buttonLink || "#"}
                    className="inline-flex w-full items-center justify-center rounded-lg bg-[#c2410c] px-5 py-2.5 text-sm font-medium text-white sm:w-auto"
                  >
                    {buttonLabel}
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
