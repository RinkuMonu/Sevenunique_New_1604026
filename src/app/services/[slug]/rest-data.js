function createRestServiceEntry({
  slug,
  breadcrumb,
  title,
  heading,
  description,
  buttonLabel,
  image,
  sections = {}, // ✅ default safe
}) {
  return {
    slug,
    hero: {
      breadcrumb: ["Solutions", breadcrumb],
      title,
      heading,
      description,
      buttonLabel,
      image,
    },
    sections,
  };
}

export const restServiceData = {
  // ✅ ANDROID (WITH SECTIONS)
  "android-app-development": createRestServiceEntry({
    slug: "android-app-development",
    breadcrumb: "Android",
    title: "ANDROID APP DEVELOPMENT SERVICES",
    heading: "Tap into 3.6 billion users. Launch your Android app—fast.",
    description:
      "Access the top 1% of LATAM tech talent within 2 weeks.",
    buttonLabel: "Get Android App Developers",
    image: "/images/man.png",

    sections: {
      androidServices: {
        title: "Android App Development Services We Provide",
        services: [
          {
            title: "Custom Android App Development",
            desc: "Turn your idea into a functional app",
          },
          {
            title: "UI/UX Design",
            desc: "Make apps user-friendly and attractive",
          },
        ],
        navItems: [
          "Android Services",
          "Key Facts",
          "Best Practices",
          "Why Choose Us",
          "Process",
          "FAQ",
        ],
      },
    },
  }),

  // ✅ OTHER SERVICES (NO SECTIONS YET — SAFE)
  "business-intelligence": createRestServiceEntry({
    slug: "business-intelligence",
    breadcrumb: "Business Intelligence",
    title: "BUSINESS INTELLIGENCE SERVICES",
    heading: "Make data-driven decisions. Level up your BI.",
    description:
      "Optimize operations and stay competitive with our BI services.",
    buttonLabel: "Access BI Services",
    image: "/images/man2.png",
  }),

  "data-engineering": createRestServiceEntry({
    slug: "data-engineering",
    breadcrumb: "Data Engineering",
    title: "DATA ENGINEERING SERVICES",
    heading: "Build cleaner pipelines. Make your data work harder.",
    description:
      "Strengthen your data foundation with scalable pipelines.",
    buttonLabel: "Access Data Engineering",
    image: "/images/man3.png",
  }),

  "web-development": createRestServiceEntry({
    slug: "web-development",
    breadcrumb: "Web Development",
    title: "WEB DEVELOPMENT SERVICES",
    heading: "Create modern web experiences.",
    description:
      "Build scalable, high-performance web platforms.",
    buttonLabel: "Access Web Services",
    image: "/images/man3.png",
  }),

  // 👉 add more later same way
};


// ✅ COMPANY STRIP (WORKING NOW)
export const companyStripData = {
  title: "500+ companies rely on our top 1% tech talent.",
  companies: [
    {
      name: "Google",
      logo: "/images/google.png",
      subText: "Read case study",
    },
    {
      name: "NextRoll",
      logo: "/logos/nextroll-new.png",
      subText: "Watch testimonial",
      hasPlayIcon: true,
    },
    {
      name: "Pinterest",
      logo: "/logos/pintrest.png",
    },
    {
      name: "Adobe",
      logo: "/logos/adobe.png",
    },
    {
      name: "Square",
      logo: "/logos/salesforce.png",
    },
  ],
};