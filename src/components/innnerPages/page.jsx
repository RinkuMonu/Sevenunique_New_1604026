import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const IndustriesSection = () => {
  const industriesData = [
    // SIMPLE
    {
      type: "simple",
      name: "Abbott",
      logo: "/images/exotel.png",
    },
    {
      type: "simple",
      name: "AbbVie",
      logo: "/images/surepass.png",
    },

    // BIG CARD
    {
      type: "big",
      name: "Abra",
      logo: "/logos/irctc.png",
      desc: " We are extremely satisfied with their collaboration and achievement. We are happy to have given Seven Unique a chance to earn our trust. ",
      link: "/case-studies/abra/",
    },

    // SIMPLE
    {
      type: "simple",
      name: "Acklands Grainger",
      logo: "/images/travelboutique.jpg",
    },

    // HOVER
    {
      type: "hover",
      name: "Acumen",
      logo: "/images/tbo.png",
      link: "/case-studies/acumen/",
    },

    
  ];
  return (
    <section className="bg-[#f7f7f7] py-16 px-4 md:px-10">
      {/* FILTER */}
      <div className="mb-10 max-w-md">
        <div className="flex items-center justify-between bg-white border rounded-md px-3 py-2 shadow-sm">
          <input
            type="text"
            value="All industries"
            readOnly
            className="w-full outline-none text-gray-700"
          />
          <span>⌄</span>
        </div>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-8">
        {industriesData.map((item, index) => {
          // 🔹 BIG CARD
          if (item.type === "big") {
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition row-span-2 relative"
              >
                <div className={`flex justify-center items-center h-20 my-8 ${item.extraMargin ? 'mt-15' : ''}`}>
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={140}
                    height={60}
                    className="object-contain grayscale"
                  />
                </div>

                <p className="text-gray-500 text-sm leading-relaxed px-4 mt-2">
                  <span className="text-orange-600 text-[18px]">“</span>{" "}
                  {item.desc}{" "}
                  <span className="text-orange-600 text-[18px]">”</span>
                </p>

                <div className="absolute top-6 right-6 flex items-center text-sm text-gray-400">
                  See case study →
                </div>
              </div>
            );
          }

          // 🔹 HOVER CARD
          if (item.type === "hover") {
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition relative group"
              >
                <div className="flex justify-center items-center h-16 my-6">
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={120}
                    height={60}
                    className="object-contain grayscale"
                  />
                </div>

                <div className="absolute top-4 right-4 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition">
                  See case study →
                </div>
              </div>
            );
          }

          // 🔹 SIMPLE CARD
          return (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition"
            >
              <div className="flex justify-center items-center h-16 my-6">
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={160}
                  height={60}
                  className="object-contain grayscale"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
