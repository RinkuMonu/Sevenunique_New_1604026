"use client";

import Image from "next/image";

export default function ClientLogos() {
  const logos = [
    {
      name: "Adobe",
      src: "https://assets.bairesdev.com/image/upload/c_limit,w_112/fl_sanitize/v1/www/static/clientlogos/adobe_w0ibl5.svg",
    },
    {
      name: "Google",
      src: "https://assets.bairesdev.com/image/upload/c_limit,w_112/fl_sanitize/v1/www/static/clientlogos/google_svpwxi.svg",
    },
    {
      name: "Paramount",
      src: "https://assets.bairesdev.com/image/upload/c_limit,w_112/fl_sanitize/v1/www/static/clientlogos/paramount_ijkvhh.svg",
    },
    {
      name: "Motorola",
      src: "https://assets.bairesdev.com/image/upload/c_limit,w_112/fl_sanitize/v1/www/static/clientlogos/motorolla_oabmds.svg",
    },
    {
      name: "Johnson & Johnson",
      src: "https://assets.bairesdev.com/image/upload/c_limit,w_112/fl_sanitize/v1/www/static/clientlogos/johnson_johnson_g0mzip.svg",
    },
    {
      name: "Salesforce",
      src: "https://assets.bairesdev.com/image/upload/c_limit,w_112/fl_sanitize/v1/www/static/clientlogos/salesforce_wvbl9s.svg",
    },
    {
      name: "Pinterest",
      src: "https://assets.bairesdev.com/image/upload/c_limit,w_112/fl_sanitize/v1/www/static/clientlogos/pinterest_grk7u9.svg",
    },
    {
      name: "HP",
      src: "https://assets.bairesdev.com/image/upload/c_limit,w_112/fl_sanitize/v1/www/static/clientlogos/Client_HP_Type_Neutral-500_Boxed_True_bq4ruj.svg",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-sm md:text-base tracking-widest uppercase text-gray-400 mb-10 text-center md:text-left font-semibold">
          Our talent works with the industry leaders
        </h2>

        {/* Logos Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-y-6 gap-x-4 items-center justify-items-center">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center opacity-60 hover:opacity-100 transition duration-300 grayscale hover:grayscale-0"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={112}
                height={56}
                className="object-contain h-10 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
