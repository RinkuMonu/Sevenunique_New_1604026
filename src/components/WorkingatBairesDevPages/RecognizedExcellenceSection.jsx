import Image from "next/image";

export default function RecognizedExcellenceSection() {
  const awards = [
    {
      title: "CLUTCH",
      subtitle: "Top web development company",
    },
    {
      title: "G2",
      subtitle: "Leader in software development",
    },
    {
      title: "DELOITTE",
      subtitle: "Technology fast 500",
    },
    {
      title: "Inc.",
      subtitle: "Top 5000 fastest growing",
    },
    {
      title: "Inc.",
      subtitle: "Top 5000 fastest growing",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Recognized Excellence
        </h2>
        <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
          Our work speaks for itself. We've been recognized by industry leaders
          for our commitment to quality and innovation.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {awards.map((award, idx) => (
          <div key={idx} className="p-8 rounded-lg text-center">
            <div className=" w-35 h-35 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Image
                src="https://assets.bairesdev.com//image/upload/c_limit,w_160/dpr_auto/f_auto/q_auto/v1/www/static/award-clutch_gz9kek?_a=BAVAfVDW0"
                width={700}
                height={600}
                className="object-cover w-full h-full"
                priority
                alt="img"
              />
            </div>
            <p className="font-semibold text-gray-900 text-lg mb-2">
              {award.title}
            </p>
            <p className="text-gray-600 text-md">{award.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
