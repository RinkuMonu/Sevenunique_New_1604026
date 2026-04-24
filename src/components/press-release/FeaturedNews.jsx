"use client";

import Image from "next/image";

const sidebarData = [
  {
    title:
      "BairesDev Named Top Global B2B Service Provider by Clutch",
    img: "/images/news1.png",
  },
  {
    title:
      "BairesDev Joins World Economic Forum as Associate Partner, Capping a Year of Enterpr...",
    img: "/images/news2.png",
  },
  {
    title:
      "BairesDev Acquires AI Upskilling Startup Modal, Taps Darren Shimkus as President of ...",
    img: "/images/news3.png",
  },
  {
    title:
      "BairesDev Announces Winners of its Inaugural 2025 Developer’s Choice Awards, Identif...",
    img: "/images/news4.png",
  },
    {
    title:
      "BairesDev Announces Winners of its Inaugural 2025 Developer’s Choice Awards, Identif...",
    img: "/images/news5.png",
  },
];

export default function FeaturedNews() {
  return (
    <section className="w-full bg-[#f3f4f6] px-6 md:px-12 py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        
        {/* LEFT BIG SECTION */}
        <div className="md:col-span-2">
          
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1f2937] leading-snug">
            64% of Women Developers Say AI Has Increased Their Career Agency,
            BairesDev’s Survey Finds
          </h2>

          {/* Subtitle */}
          <p className="mt-3 text-gray-600 text-base">
            Only 56% of women trust AI tools to be fair, and 1 in 2 say
            accountability for AI outcomes falls on them
          </p>

          {/* Orange Line */}
          <div className="mt-5 h-1 bg-[#ff5a2f] w-full" />

          {/* Image */}
          <div className="mt-6">
            <Image
              src="/images/press.png"
              alt="Main News"
              width={800}
              height={450}
              className="w-full rounded-md object-cover"
            />
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div>
          <h3 className="text-base tracking-widest text-gray-500 font-bold uppercase mb-4">
            Featured Press Releases
          </h3>

          <div className="flex flex-col gap-4">
            {sidebarData.map((item, index) => (
              <div
                key={index}
                className="flex gap-3 bg-white p-2 rounded-md"
              >
                <Image
                  src={item.img}
                  alt="news"
                  width={140}
                  height={90}
                  className="object-cover rounded"
                />

                <p className="text-sm text-gray-700 leading-snug">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}