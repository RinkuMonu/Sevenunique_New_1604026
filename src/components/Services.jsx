"use client";

import Link from "next/link";

const services = [
  {
    title: "Website Development",
    desc: "Build fast, responsive, and scalable websites designed for startups, businesses, and enterprises.",
    tags: [
      { name: "Business Website", link: "/services/web-development" },
      { name: "React.js", link: "/technologies/react" },
      { name: "Next.js", link: "/technologies/nextjs" },
      { name: "Responsive Design", link: "/services/frontend-development" },
    ],

    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        alt="React"
        className="w-8 h-8"
      />
    ),
  },

  {
    title: "Software Development",
    desc: "Develop custom ERP, CRM, billing, automation, and enterprise software solutions.",
    tags: [
      { name: "ERP Software", link: "/services/software-development" },
      { name: "CRM Development", link: "/services/crm-development" },
      { name: "School ERP", link: "/services/school-management" },
      { name: "Automation", link: "/services/automation" },
    ],

    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        alt="Node"
        className="w-8 h-8"
      />
    ),
  },

  {
    title: "AI & Automation",
    desc: "Integrate AI-powered tools, automation systems, and smart workflows into your business.",
    tags: [
      { name: "AI Chatbot", link: "/services/ai-chatbot" },
      { name: "Automation", link: "/services/automation" },
      { name: "Machine Learning", link: "/services/machine-learning" },
      { name: "OpenAI", link: "/technologies/openai" },
    ],

    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        alt="Python"
        className="w-8 h-8"
      />
    ),
  },

  {
    title: "Mobile App Development",
    desc: "Create modern Android and iOS apps with secure APIs and smooth user experiences.",
    tags: [
      { name: "Android App", link: "/services/android-app-development" },
      { name: "iOS App", link: "/services/ios-app-development" },
      { name: "React Native", link: "/technologies/react-native" },
      { name: "Flutter", link: "/technologies/flutter" },
    ],

    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
        alt="Flutter"
        className="w-8 h-8"
      />
    ),
  },

  {
    title: "UI/UX Designing",
    desc: "Design clean, modern, and user-focused interfaces that improve customer experience.",
    tags: [
      { name: "UI Design", link: "/services/ui-ux-design" },
      { name: "UX Research", link: "/services/ui-ux-design" },
      { name: "Figma Design", link: "/technologies/figma" },
      { name: "Prototype", link: "/services/prototype-design" },
    ],

    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
        alt="Figma"
        className="w-8 h-8"
      />
    ),
  },

  {
    title: "Digital Marketing & SEO",
    desc: "Boost your online presence with SEO, branding, social media, and performance marketing.",
    tags: [
      { name: "SEO", link: "/services/seo" },
      { name: "Google Ads", link: "/services/google-ads" },
      { name: "Social Media", link: "/services/social-media-marketing" },
      { name: "Branding", link: "/services/branding" },
    ],

    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
        alt="Google"
        className="w-8 h-8"
      />
    ),
  },
];

export default function Services() {
  return (
    <section className="px-6 py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-12">

          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.12] max-w-3xl text-[#191919]">
            Your Trusted Partner For
            <br />
            Web, App & Software Solutions
            <span className="text-[#f4622a]">.</span>
          </h2>

          <Link
            href="/services"
            className="shrink-0 inline-flex items-center gap-2 text-[15px] text-[#1f1f1f] border-b border-[#1f1f1f] pb-1 transition-colors"
          >
            Explore All Services
            <span aria-hidden>→</span>
          </Link>
        </div>

        {/* CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {services.map((svc) => (
            <div
              key={svc.title}
              className="group bg-[#f4f4f6] border border-[#ececef] rounded-2xl p-8 min-h-[290px] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >

              {/* ICON */}
              <div className="w-16 h-16 bg-white border border-[#ececef] text-[#191919]  group-hover:text-white rounded-2xl flex items-center justify-center mb-6 transition-all duration-300">
                {svc.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-2xl font-semibold mb-3 text-[#1f1f1f] leading-[1.3]">
                {svc.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-[15px] text-[#4f4f56] leading-relaxed mb-6">
                {svc.desc}
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2">

                {svc.tags.map((tag) => (
                  <Link
                    key={tag.name}
                    href={tag.link}
                    className="inline-flex items-center px-3 py-1.5 text-[14px] text-[#1764ca] border border-[#8db2e2] rounded-lg hover:bg-[#1764ca] hover:text-white transition-all duration-200"
                  >
                    {tag.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}