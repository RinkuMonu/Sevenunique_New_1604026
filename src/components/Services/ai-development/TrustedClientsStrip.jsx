"use client";

import Image from "next/image";

const clients = [
  { img: "/logos/l1.png" },
  { img: "/logos/l2.png" },
  { img: "/logos/l3.png" },
  { img: "/logos/l4.png" },
  { img: "/logos/l5.png" },
  { img: "/logos/l6.png" },
];

export default function TrustedClientsStrip() {
  return (
    <section className="bg-black py-8 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-10 flex-wrap">

        {clients.map((client, i) => (
          <div
            key={i}
            className="relative group flex items-center justify-center"
          >
            {/* LOGO */}
            <Image
              src={client.img}
              alt="client"
              width={140}
              height={50}
              className="opacity-80 group-hover:opacity-20 transition duration-300"
            />

            {/* HOVER TEXT */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <span className="text-white text-sm font-medium tracking-wide">
                Watch testimonial ▶
              </span>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}