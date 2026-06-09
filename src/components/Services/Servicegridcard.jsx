"use client";

import Image from "next/image";
import Link from "next/link";



const serviceCards = [
  {
    slug: "ai-development-services",
    name: "AI DEVELOPMENT SERVICES",
    description:
      "We build intelligent AI solutions that move beyond prototypes. Our team helps organizations leverage generative AI, custom AI models, and autonomous AI systems to automate processes, enhance customer experiences, and accelerate growth.",
    image: "/images/aiagent.png",
  },
  {
    slug: "backend-development-services",
    name: "BACK-END DEVELOPMENT SERVICES",
    description:
      "We develop secure, scalable, and cloud-ready backend infrastructures that power seamless user experiences, accelerate development, and support future growth.",
    image: "/images/backup.png",
  },
  {
    slug: "cms-development-services",
    name: "CMS DEVELOPMENT SERVICES",
    description:
      "We develop custom content management systems that simplify content publishing, streamline workflows, and ensure exceptional performance across digital channels.",
    image: "/images/crm.png",
  },
  {
    slug: "blockchain-development-services",
    name: "BLOCKCHAIN DEVELOPMENT SERVICES",
    description:
      "We design and develop blockchain-powered applications, smart contracts, and decentralized platforms that enhance transparency, security, and operational efficiency.",
    image: "/images/nlp.png",
  },
  {
    slug: "frontend-development-services",
    name: "FRONT-END DEVELOPMENT SERVICES",
    description:
      "We create fast, responsive, and scalable user interfaces that combine seamless user experiences with maintainable frontend architectures.",
    image: "/images/frontend.jpeg",
  },
  {
    slug: "machine-learning-services",
    name: "MACHINE LEARNING SERVICES",
    description:
      "We design, develop, and deploy machine learning systems that transform data into actionable insights, automation, and competitive advantage.",
    image: "/images/ml.png",
  },
  {
    slug: "qa-testing-automation-services",
    name: "QA TESTING & AUTOMATION SERVICES",
    description:
      "We help organizations improve software quality through structured testing strategies, automation frameworks, and continuous quality assurance processes.",
    image: "/images/qa.png",
  },
  {
    slug: "ui-ux-design-services",
    name: "UI/UX DESIGN SERVICES",
    description:
      "We design intuitive digital products that combine user-centered experiences, modern interfaces, and scalable design systems to drive business growth.",
    image: "/images/uiux.jpeg",
  },
  {
    slug: "web-development-services",
    name: "WEB DEVELOPMENT SERVICES",
    description:
      "We develop high-performance web solutions using modern technologies, helping businesses create secure, responsive, and future-ready digital products.",
    image: "/images/webd.png",
  },
  {
    slug: "mobile-app-development-services",
    name: "MOBILE APP DEVELOPMENT SERVICES",
    description:
      "From native iOS and Android apps to cross-platform solutions, we create secure, scalable, and engaging mobile experiences that drive results.",
    image: "/images/mobileapp.png",
  },
];

export default function ServicesGrid({ services }) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="mb-12">
        <span className="inline-block px-4 py-2 rounded-full bg-orange-50 text-black text-sm font-medium">
          Our Expertise
        </span>

        <h2 className="mt-4 text-4xl font-bold text-[#0f172a]">
          Software Development & Design
        </h2>

        <p className="mt-4 max-w-3xl text-gray-600">
          We help businesses accelerate growth with cutting-edge software,
          cloud, AI, mobile, and web development solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {serviceCards.map((service) => (
    <Link
      key={service.slug}
      href={`/services/${service.slug}`}
      className="group overflow-hidden rounded-3xl border border-gray-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
    >
            {/* Image */}
            <div className="relative h-60 overflow-hidden">
              <Image
                src={service.image}
                alt={service.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute bottom-5 left-5">
                <span className="rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-xs font-medium text-white">
                  Development
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-7">
              <h3 className="text-2xl font-bold text-[#0f172a] transition-colors duration-300 group-hover:text-[#ff6b3d]">
                {service.name}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {service.description}
              </p>

            
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}