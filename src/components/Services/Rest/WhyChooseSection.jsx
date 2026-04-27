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
const FALLBACK_IMAGE = "/images/choose.png";

export default function WhyChooseSection({ data }) {
  if (!data) return null;

  const { title, image, points } = data;

  // ✅ ensure valid image
  const safeImage =
    image && image.trim() !== "" ? image : FALLBACK_IMAGE;

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-12 gap-10">
          
          {/* LEFT CONTENT */}
          <div className="col-span-12 lg:col-span-9">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              
              {/* LEFT SIDE */}
              <div>
                <h2 className="text-[42px] font-semibold text-[#0f172a] leading-tight mb-8">
                  {title}
                </h2>

                <div className="relative w-full h-[320px] rounded-2xl overflow-hidden">
                  <Image
                    src={safeImage}
                    alt="why choose"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* RIGHT TEXT */}
              <div className="space-y-8">
                {points?.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    
                    {/* ICON */}
                    <div className="mt-1">
                      {iconMap[item.icon] || iconMap.arrow}
                    </div>

                    {/* TEXT */}
                    <div>
                      <h3 className="text-[18px] font-semibold text-[#1e293b] mb-2">
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

          {/* RIGHT EMPTY SPACE */}
          <div className="hidden lg:block lg:col-span-3"></div>

        </div>
      </div>
    </section>
  );
}