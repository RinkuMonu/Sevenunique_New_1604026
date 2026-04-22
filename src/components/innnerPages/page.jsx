import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const IndustriesSection = () => {
  const industriesData = [
    // SIMPLE
    {
      type: "simple",
      name: "Abbott",
      logo: "https://assets.bairesdev.com/image/upload/v1/www/static/clientlogos/abbott_hy3b63.svg",
    },
    {
      type: "simple",
      name: "AbbVie",
      logo: "https://assets.bairesdev.com/image/upload/v1/www/static/clientlogos/abbvie_zguh3o.svg",
    },

    // BIG CARD
    {
      type: "big",
      name: "Abra",
      logo: "https://assets.bairesdev.com/image/upload/v1/www/static/clientlogos/abra_bfjobk.svg",
      desc: " We are extremely satisfied with their collaboration and achievement. We are happy to have given BairesDev a chance to earn our trust. ",
      link: "/case-studies/abra/",
    },

    // SIMPLE
    {
      type: "simple",
      name: "Acklands Grainger",
      logo: "https://assets.bairesdev.com/image/upload/v1/www/static/clientlogos/Acklands_Grainger_zurgpn.svg",
    },

    // HOVER
    {
      type: "hover",
      name: "Acumen",
      logo: "https://assets.bairesdev.com/image/upload/v1/www/static/clientlogos/Acumen_iwijve.svg",
      link: "/case-studies/acumen/",
    },

    {
      type: "hover",
      name: "Arlo",
      logo: "https://assets.bairesdev.com/image/upload/v1/www/static/clientlogos/arlo_einst6.svg",
      link: "/case-studies/arlo/",
    },

    // BIG
    {
      type: "big",
      name: "Associated Press",
      logo: "https://assets.bairesdev.com/image/upload/v1/www/static/clientlogos/associated-press_ki8ugn.svg",
      desc: "From our very first meeting, we were confident in the team.",
      link: "/case-studies/associated-press/",
    },

    {
      type: "big",
      name: "Autodesk",
      logo: "https://assets.bairesdev.com/image/upload/v1/www/static/clientlogos/autodesk_xeonns.svg",
      desc: "Creating a new product is the fun part of programming.",
      link: "/case-studies/autodesk/",
    },

    {
      type: "hover",
      name: "Avigilon",
      logo: "https://assets.bairesdev.com/image/upload/v1/www/static/clientlogos/avigilon_jlogpx.svg",
      link: "/case-studies/avigilon-motorola/",
    },

    {
      type: "big",
      name: "Azlo",
      logo: "https://assets.bairesdev.com/image/upload/v1/www/static/clientlogos/azlo_umjgog.svg",
      desc: "Great business partner providing quality development resources.",
      link: "/case-studies/azlo/",
    },

    {
      type: "simple",
      name: "BBVA",
      logo: "https://assets.bairesdev.com/image/upload/v1/www/static/clientlogos/bbva_l7d6el.svg",
    },

    {
      type: "hover",
      name: "Blackboard",
      logo: "https://assets.bairesdev.com/image/upload/v1/www/static/clientlogos/Blackboard_chcpik.svg",
      link: "/case-studies/blackboard/",
    },

    {
      type: "simple",
      name: "Burger King",
      logo: "https://assets.bairesdev.com/image/upload/v1/www/static/clientlogos/burger-king_ilkjim.svg",
    },

    {
      type: "simple",
      name: "Care",
      logo: "https://assets.bairesdev.com/image/upload/v1/www/static/clientlogos/care-com_prq6ii.svg",
    },

    {
      type: "simple",
      name: "Chime",
      logo: "https://assets.bairesdev.com/image/upload/v1/www/static/clientlogos/chime_lcxkym.svg",
    },

    {
      type: "big",
      name: "ConsumerAffairs",
      logo: "https://assets.bairesdev.com/image/upload/v1/www/static/clientlogos/consumer-affairs_tkax7p.svg",
      desc: "We quickly augmented internal staff and found the right talent.",
      link: "/case-studies/consumeraffairs/",
    },

    {
      type: "hover",
      name: "CropTrak",
      logo: "https://assets.bairesdev.com/image/upload/v1/www/static/clientlogos/Croptrak_yfiqcz.svg",
      link: "/case-studies/croptrak/",
    },

    {
      type: "simple",
      name: "eBay",
      logo: "https://assets.bairesdev.com/image/upload/v1/www/static/clientlogos/eBay_hcomrd.svg",
    },

    {
      type: "simple",
      name: "EY",
      logo: "https://assets.bairesdev.com/image/upload/v1/www/static/clientlogos/ernst-young_fpef18.svg",
    },

    {
      type: "simple",
      name: "Fresenius",
      logo: "https://assets.bairesdev.com/image/upload/v1/www/static/clientlogos/fresenius_cpapnu.svg",
    },

    {
      type: "big",
      name: "Forcepoint",
      logo: "https://assets.bairesdev.com/image/upload/v1/www/static/clientlogos/forcepoint_prceil.svg",
      desc: "Efficient in hitting every milestone in roadmap.",
      link: "/case-studies/forcepoint/",
    },

    {
      type: "hover",
      name: "Gennev",
      logo: "https://assets.bairesdev.com/image/upload/v1/www/static/clientlogos/gennev_h1csgg.svg",
      link: "/case-studies/gennev/",
    },

    {
      type: "simple",
      name: "Globalstar",
      logo: "https://assets.bairesdev.com/image/upload/v1/www/static/clientlogos/globalstar_color_stcnkk.svg",
    },

    {
      type: "hover",
      name: "Google",
      logo: "https://assets.bairesdev.com/image/upload/v1/www/static/clientlogos/google_xozzle.svg",
      link: "/case-studies/google/",
    },

    {
      type: "big",
      name: "Great Wolf Lodge",
      logo: "https://assets.bairesdev.com/image/upload/v1/www/static/clientlogos/Great_Wolf_Lodge_eljspt.svg",
      desc: "Delivered stylish experience across locations.",
      link: "/case-studies/great-wolf-lodge/",
      extraMargin: true,
    },

    {
      type: "hover",
      name: "Groupon",
      logo: "https://assets.bairesdev.com/image/upload/v1/www/static/clientlogos/groupon_w4xjlo.svg",
      link: "/case-studies/groupon/",
    },

    {
      type: "simple",
      name: "HP",
      logo: "https://assets.bairesdev.com/image/upload/v1/www/static/clientlogos/hp_g5pqxc.svg",
    },

    {
      type: "simple",
      name: "IBM",
      logo: "https://assets.bairesdev.com/image/upload/v1/www/static/clientlogos/ibm_m8dbui.svg",
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
