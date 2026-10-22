import Image from "next/image";

const companies = [
  { name: "NextRoll", logo: "/logos/nextroll.svg" },
  { name: "A-LIGN", logo: "/logos/align.svg" },
  { name: "Keystone", logo: "/logos/keystone.svg" },
  { name: "Google", logo: "/logos/google.svg" },
  { name: "Pinterest", logo: "/logos/pinterest.svg" },
  { name: "Microsoft", logo: "/logos/microsoft.svg" },
];

export default function TrustedCompanies() {
  return (
    <div className="bg-black">
     <p className="text-center bg-[#EEEFF1] text-gray-400 text-xs tracking-widest mb-8">
          TRUSTED BY CTOS AT 1500+ COMPANIES:
        </p>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-10">
          {companies.map((company, index) => (
            <div key={index} className="opacity-80 hover:opacity-100 transition">
              <Image
                src={company.logo}
                alt={company.name}
                width={120}
                height={40}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}