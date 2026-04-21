"use client";

import Image from "next/image";

const defaultClients = [
  { img: "/logos/l1.png", alt: "Client logo 1" },
  { img: "/logos/l2.png", alt: "Client logo 2" },
  { img: "/logos/l3.png", alt: "Client logo 3" },
  { img: "/logos/l4.png", alt: "Client logo 4" },
  { img: "/logos/l5.png", alt: "Client logo 5" },
  { img: "/logos/l6.png", alt: "Client logo 6" },
];

export default function TrustedClientsStrip({ clients = defaultClients }) {
  return (
    <section className="bg-black px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-10">
        {clients.map((client, index) => (
          <div
            key={`${client.img}-${index}`}
            className="relative flex items-center justify-center group"
          >
            <Image
              src={client.img}
              alt={client.alt || "Client logo"}
              width={140}
              height={50}
              className="opacity-80 transition duration-300 group-hover:opacity-20"
            />

            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
              <span className="text-sm font-medium tracking-wide text-white">
                Watch testimonial
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
