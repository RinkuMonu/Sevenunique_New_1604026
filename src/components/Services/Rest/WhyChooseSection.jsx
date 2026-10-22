"use client";

import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { MdOutlineWorkOutline } from "react-icons/md";

// ✅ icon mapper
const iconMap = {
  arrow: <FiArrowUpRight className="text-orange-500 text-lg" />,
  location: <FaMapMarkerAlt className="text-orange-500 text-lg" />,
  work: <MdOutlineWorkOutline className="text-orange-500 text-lg" />,
};

// ✅ fallback image
const FALLBACK_IMAGE = "/images/qa.png";

export default function WhyChooseSection({ data }) {
  if (!data) return null;

  const { title, image, points } = data;

  // ✅ ensure valid image
  const safeImage =
    image && image.trim() !== "" ? image : FALLBACK_IMAGE;

  return (
    <section id="why-choose-us" className="bg-white py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        <div>
          
          {/* LEFT CONTENT */}
          <div>
            
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1.05fr_0.95fr] md:gap-12 lg:gap-16">
              
              {/* LEFT SIDE */}
              <div>
                {/* Responsive UI update: section title scales at small breakpoints. */}
                <h2 className="mb-6 [overflow-wrap:anywhere] text-3xl font-semibold leading-tight text-[#0f172a] sm:mb-8 sm:text-4xl lg:text-[42px]">
                  {title}
                </h2>

                <div className="relative h-[220px] w-full overflow-hidden rounded-2xl sm:h-[280px] md:h-[320px]">
                  <Image
                    src={safeImage}
                    alt="why choose"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* RIGHT TEXT */}
              <div className="space-y-4">
                {points?.map((item, i) => (
                  <div key={i} className="flex min-w-0 gap-3 rounded-2xl border border-slate-100 bg-[#f8fafc] p-4 sm:gap-4 sm:p-5">
                    
                    {/* ICON */}
                    <div className="mt-1 shrink-0">
                      {iconMap[item.icon] || iconMap.arrow}
                    </div>

                    {/* TEXT */}
                    <div className="min-w-0">
                      <h3 className="mb-2 [overflow-wrap:anywhere] text-lg font-semibold text-[#1e293b]">
                        {item.title}
                      </h3>
                      <p className="text-[15px] text-gray-600 leading-7">
                        {item.desc}
                      </p>
                    </div>

                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
