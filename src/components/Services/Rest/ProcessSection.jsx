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
    <section id="process" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-12 gap-10">
          
          {/* MAIN CONTENT */}
          <div className="col-span-12 lg:col-span-9">
            
            <div className="grid md:grid-cols-2 gap-12">
              
              {/* LEFT SIDE */}
              <div>
                <h2 className="text-[44px] font-semibold text-[#0f172a] leading-tight mb-10">
                  {titleLines?.map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </h2>

                {/* Image */}
                <div className="relative w-full h-[300px] rounded-[40px] overflow-hidden">
                  <Image
                    src={safeImage}
                    alt="process"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* RIGHT TIMELINE */}
              <div className="relative">
                
                {/* Vertical Line */}
                <div className="absolute left-[19px] top-6 bottom-20 border-l border-dashed border-gray-400"></div>

                <div className="space-y-12">
                  {steps?.map((item, i) => (
                    <div key={i} className="flex gap-6 relative">
                      
                      {/* Dot */}
                      <div className="relative z-10">
                        <div className="w-10 h-10 rounded-full bg-[#c2410c] flex items-center justify-center"></div>
                      </div>

                      {/* Content */}
                      <div>
                        <p className="text-xs tracking-widest text-gray-400 mb-1">
                          {item.step}
                        </p>

                        <h3 className="text-[22px] font-semibold text-[#0f172a] mb-2">
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
                    className="bg-[#c2410c] text-white px-5 py-2.5 rounded-lg text-sm font-medium inline-block"
                  >
                    {buttonLabel}
                  </a>
                </div>

              </div>

            </div>
          </div>

          {/* EMPTY RIGHT */}
          <div className="hidden lg:block lg:col-span-3"></div>

        </div>
      </div>
    </section>
  );
}