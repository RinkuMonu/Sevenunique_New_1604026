"use client";

import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { MdOutlineWorkOutline } from "react-icons/md";

export default function WhyChooseSection() {
  const points = [
    {
      icon: <FiArrowUpRight className="text-orange-500 text-lg" />,
      title: "Customized App Development",
      desc: `We specialize in creating custom apps. During our Android app development process, we work closely with you to understand your business requirements and craft a plan to build user-friendly, discoverable apps. We will also keep you informed about our progress throughout the development cycle.`,
    },
    {
      icon: <FaMapMarkerAlt className="text-orange-500 text-lg" />,
      title: "Top 1% of Android App Developers",
      desc: `We hire only the top 1% of nearshore Android developers. Our thorough vetting process assesses both technical knowledge and soft skills, ensuring that we work with only the best developers in Latin America.`,
    },
    {
      icon: <MdOutlineWorkOutline className="text-orange-500 text-lg" />,
      title: "Flexible Engagement Models",
      desc: `We offer three flexible engagement models: staff augmentation, dedicated teams, and end-to-end software outsourcing. Whether you want one Android developer or an entire mobile app development team, we have a model to suit your needs.`,
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 12 column grid */}
        <div className="grid grid-cols-12 gap-10">
          
          {/* LEFT CONTENT (9 cols only) */}
          <div className="col-span-12 lg:col-span-9">
            
            {/* Inner split */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              
              {/* LEFT SIDE */}
              <div>
                <h2 className="text-[42px] font-semibold text-[#0f172a] leading-tight mb-8">
                  Why Choose BairesDev for Android Mobile App Development?
                </h2>

                <div className="relative w-full h-[320px] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/choose.png"
                    alt="developer"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* RIGHT TEXT */}
              <div className="space-y-8">
                {points.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1">{item.icon}</div>
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

          {/* RIGHT EMPTY SPACE (3 cols reserved) */}
          <div className="hidden lg:block lg:col-span-3"></div>

        </div>
      </div>
    </section>
  );
}
