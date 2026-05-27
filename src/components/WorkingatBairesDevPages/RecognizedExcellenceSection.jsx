import Image from "next/image";

export default function RecognizedExcellenceSection() {
  const awards = [
    {
      title: "CLUTCH",
      subtitle: "Top web development company",
      image:
        "https://assets.bairesdev.com/image/upload/c_limit,w_160/dpr_auto/f_auto/q_auto/v1/www/static/award-clutch_gz9kek?_a=BAVAfVDW0",
    },
    {
      title: "ISO Certified",
      subtitle: "Leader in software development",
      image:
        "/images/iso.png",
    },
    {
      title: "MSME Certified",
      subtitle: "Technology fast 500",
      image:
        "/images/msme.png",
    },
    {
      title: "PCI DSS Certified",
      subtitle: "Top 5000 fastest growing",
      image:
        "/images/pcidss.png",
    },
    {
      title: "KAB Award",
      subtitle: "Best innovation company",
      image:
        "/images/kab.png",
    },
      {
      title: "QRO Award",
      subtitle: "Best innovation company",
      image:
        "/images/qro.jpg"
    },
      {
      title: "DPIIT Certified",
      subtitle: "Best innovation company",
      image:
        "/images/dpiit-logo.png"
    },
      {
      title: "Certified Company",
      subtitle: "Best innovation company",
      image:
        "/images/certified.avif"
    },
      {
      title: "IAF Award",
      subtitle: "Best innovation company",
      image:
        "/images/iaf.png"
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Recognized Excellence
        </h2>

        <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
          Awards that reflect our commitment to innovation and quality. We’re
          proud to be recognized for our achievements.
        </p>
      </div>

      <div className="grid grid-cols-4 md:grid-cols-3 gap-6">
        {awards.map((award, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl border border-gray-300 hover:shadow-lg transition-all duration-300 text-center bg-white"
          >
            <div className="relative w-full h-[90px] mb-6 flex items-center justify-center">
              <Image
                src={award.image}
                width={160}
                height={80}
                className="object-contain w-auto h-full"
                priority
                alt={award.title}
              />
            </div>

            <p className="font-semibold text-gray-900 text-lg mb-2">
              {award.title}
            </p>

            <p className="text-gray-600 text-sm leading-6">
              {award.subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}