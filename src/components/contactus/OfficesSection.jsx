// components/OfficesSection.jsx

import Image from "next/image";

const offices = [
  {
    city: "San Francisco",
    address: ["50 California Street", "California", "USA"],
    img: "/image1.avif",
  },
  {
    city: "North Carolina",
    address: ["717 Green Valley Road", "Greensboro", "USA"],
    img: "/iamge2.avif",
  },
  {
    city: "New York City",
    address: ["195 Montague Street", "New York", "USA"],
    img: "/iamge3.avif",
  },
  {
    city: "Washington, D.C.",
    address: ["1401 Chain Bridge Road", "McLean, VA", "USA"],
    img: "/iamge3.avif",
  },
  {
    city: "Massachusetts",
    address: ["249 Ayer Road", "Harvard", "USA"],
    img: "/image1.avif",
  },
  {
    city: "Buenos Aires",
    address: ["Laminar Catalinas,", "Ingeniero Butty 240", "CABA, Argentina"],
    img: "/iamge2.avif",
  },
  {
    city: "Barcelona",
    address: ["Plaça de Francesc", "Macià, 7", "Spain"],
    img: "/image1.avif",
  },
  {
    city: "Mexico City",
    address: ["P. de la Reforma 342", "Mexico"],
    img: "/iamge3.avif",
  },
  {
    city: "São Paulo",
    address: ["Av. B. Faria Lima, 4221", "São Paulo", "Brazil"],
    img: "/iamge2.avif",
  },
];

export default function OfficesSection() {
  return (
    <section className="bg-[#f5f7fa] py-16 text-black">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-2xl md:text-3xl font-semibold mb-10">
          BairesDev Around the World - Our Offices
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {offices.map((office, i) => (
            <div key={i} className="flex gap-5 items-start">
              
              <div className="relative w-32 h-24 rounded-lg overflow-hidden">
                <Image
                  src={office.img}
                  alt={office.city}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-1">
                  {office.city}
                </h3>

                {office.address.map((line, idx) => (
                  <p key={idx} className="text-gray-600 text-sm">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}