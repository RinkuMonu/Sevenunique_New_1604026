import { CircleCheck as CheckCircle } from "lucide-react";
import Image from "next/image";

export default function WhyBairesdevSection() {
  const features = [
    {
      title: "Agile Procurement",
      description: "Flexible process for finding the right fit",
    },
    {
      title: "Seamless Integration",
      description: "Build and scale quickly",
    },
    {
      title: "Flexible Schedules",
      description: "Work with any timezone",
    },
    {
      title: "Exceptional Talent",
      description: "Certified developers and architects",
    },
    {
      title: "Top Talent Pool",
      description: "Developers with specialized expertise",
    },
    {
      title: "Life-Changing Careers",
      description: "International opportunities for growth",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-16 md:py-24 ">
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why BairesDev?
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-8">
            We take a holistic approach to finding the right fit and building
            lasting partnerships. Our process ensures we find exactly what you
            need.
          </p>
          <Image
            src="https://assets.bairesdev.com//image/upload/c_limit,w_1920/dpr_auto/f_auto/q_auto/v1/www/core/joinus_why-baires-dev_frrxg7?_a=BAVAfVDW0"
            width={500}
            height={600}
            className="object-cover "
            priority
            alt="img"
          />
        </div>
        <div className="rounded-lg aspect-video flex items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="flex gap-4">
                <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image section below */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 relative"></div> */}
    </section>
  );
}
