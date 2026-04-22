function createRestServiceEntry({
  slug,
  breadcrumb,
  title,
  heading,
  description,
  buttonLabel,
  image,
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
  };
}

export const restServiceData = {
  "android-app-development": createRestServiceEntry({
    slug: "android-app-development",
    breadcrumb: "Android",
    title: "ANDROID APP DEVELOPMENT SERVICES",
    heading: "Tap into 3.6 billion users. Launch your Android app—fast.",
    description:
      "Access the top 1% of LATAM tech talent within 2 weeks. Create beautiful, secure Android apps to engage and convert mobile users.",
    buttonLabel: "Get Android App Developers",
    image: "/images/man.png",
  }),
  "business-intelligence": createRestServiceEntry({
    slug: "business-intelligence",
    breadcrumb: "Business Intelligence",
    title: "BUSINESS INTELLIGENCE SERVICES",
    heading: "Make data-driven decisions. Level up your BI.",
    description:
      "Optimize operations and stay competitive with our business intelligence services. Work with top-tier engineers who build dashboards, analytics workflows, and reporting systems that teams can rely on.",
    buttonLabel: "Access BI Services",
    image: "/images/man2.png",
  }),
  "data-engineering": createRestServiceEntry({
    slug: "data-engineering",
    breadcrumb: "Data Engineering",
    title: "DATA ENGINEERING SERVICES",
    heading: "Build cleaner pipelines. Make your data work harder.",
    description:
      "Strengthen your data foundation with data engineering services built for analytics, reporting, and scale. We help teams design pipelines and platforms that stay reliable as demand grows.",
    buttonLabel: "Access Data Engineering",
    image: "/images/man3.png",
  }),
  "ecommerce-development": createRestServiceEntry({
    slug: "ecommerce-development",
    breadcrumb: "eCommerce Development",
    title: "ECOMMERCE DEVELOPMENT SERVICES",
    heading: "Create ecommerce platforms that convert and scale with confidence.",
    description:
      "Improve digital commerce performance with ecommerce development services focused on user experience, integrations, and maintainable product growth.",
    buttonLabel: "Access eCommerce Services",
    image: "/images/man4.png",
  }),
  "ios-app-development": createRestServiceEntry({
    slug: "ios-app-development",
    breadcrumb: "iOS App Development",
    title: "IOS APP DEVELOPMENT SERVICES",
    heading: "Launch iOS apps with polished UX and dependable performance.",
    description:
      "Build iPhone and iPad products with iOS app development services that support quality, release confidence, and long-term mobile product growth.",
    buttonLabel: "Access iOS Services",
    image: "/images/man5.png",
  }),
  "mobile-app-development": createRestServiceEntry({
    slug: "mobile-app-development",
    breadcrumb: "Mobile App Development",
    title: "MOBILE APP DEVELOPMENT SERVICES",
    heading: "Deliver mobile apps users love across every major platform.",
    description:
      "Work with mobile app development specialists who can help you build, improve, and scale products across iOS and Android with stronger engineering support.",
    buttonLabel: "Access Mobile Services",
    image: "/images/man1.png",
  }),
  "saas-development": createRestServiceEntry({
    slug: "saas-development",
    breadcrumb: "SaaS Development",
    title: "SAAS DEVELOPMENT SERVICES",
    heading: "Build SaaS products designed for growth, speed, and retention.",
    description:
      "Accelerate product delivery with SaaS development services built around scalable architecture, maintainable systems, and better user experience.",
    buttonLabel: "Access SaaS Services",
    image: "/images/man2.png",
  }),
  "web-development": createRestServiceEntry({
    slug: "web-development",
    breadcrumb: "Web Development",
    title: "WEB DEVELOPMENT SERVICES",
    heading: "Create modern web experiences that are fast, flexible, and scalable.",
    description:
      "Build better digital products with web development services focused on performance, maintainability, and strong user experience across modern platforms.",
    buttonLabel: "Access Web Services",
    image: "/images/man3.png",
  }),
  "backup-solutions": createRestServiceEntry({
    slug: "backup-solutions",
    breadcrumb: "Backup Solutions",
    title: "BACKUP SOLUTIONS SERVICES",
    heading: "Protect critical systems with backup solutions built for resilience.",
    description:
      "Reduce operational risk with backup solutions that support stronger recovery planning, better continuity, and more dependable infrastructure operations.",
    buttonLabel: "Access Backup Solutions",
    image: "/images/man4.png",
  }),
  "big-data": createRestServiceEntry({
    slug: "big-data",
    breadcrumb: "Big Data",
    title: "BIG DATA SERVICES",
    heading: "Turn large-scale data into usable insight and better decisions.",
    description:
      "Support analytics and scale with big data services designed for throughput, reliability, and long-term platform growth.",
    buttonLabel: "Access Big Data Services",
    image: "/images/man5.png",
  }),
  "cloud-applications": createRestServiceEntry({
    slug: "cloud-applications",
    breadcrumb: "Cloud Applications",
    title: "CLOUD APPLICATION SERVICES",
    heading: "Build cloud applications that stay reliable as your platform grows.",
    description:
      "Improve agility and system resilience with cloud application services focused on architecture, deployment, and operational stability.",
    buttonLabel: "Access Cloud Services",
    image: "/images/man1.png",
  }),
  "crm-systems": createRestServiceEntry({
    slug: "crm-systems",
    breadcrumb: "CRM Systems",
    title: "CRM SYSTEM SERVICES",
    heading: "Create CRM systems that support teams, workflows, and customer growth.",
    description:
      "Build or modernize CRM systems with engineering support focused on better process visibility, stronger integrations, and long-term maintainability.",
    buttonLabel: "Access CRM Services",
    image: "/images/man2.png",
  }),
  cybersecurity: createRestServiceEntry({
    slug: "cybersecurity",
    breadcrumb: "Cybersecurity",
    title: "CYBERSECURITY SERVICES",
    heading: "Strengthen application and platform security with practical support.",
    description:
      "Improve protection across products and infrastructure with cybersecurity services designed around engineering quality, risk reduction, and operational discipline.",
    buttonLabel: "Access Cybersecurity",
    image: "/images/man3.png",
  }),
  devops: createRestServiceEntry({
    slug: "devops",
    breadcrumb: "DevOps",
    title: "DEVOPS SERVICES",
    heading: "Increase release speed and stability with better DevOps systems.",
    description:
      "Support faster, more reliable delivery with DevOps services built around CI/CD, observability, and maintainable infrastructure workflows.",
    buttonLabel: "Access DevOps Services",
    image: "/images/man4.png",
  }),
  "digital-transformation": createRestServiceEntry({
    slug: "digital-transformation",
    breadcrumb: "Digital Transformation",
    title: "DIGITAL TRANSFORMATION SERVICES",
    heading: "Modernize systems and workflows with transformation support that ships.",
    description:
      "Move transformation efforts forward with teams that can support modernization, delivery planning, and practical engineering execution across complex initiatives.",
    buttonLabel: "Access Transformation Services",
    image: "/images/man5.png",
  }),
  "erp-development": createRestServiceEntry({
    slug: "erp-development",
    breadcrumb: "ERP Development",
    title: "ERP DEVELOPMENT SERVICES",
    heading: "Build ERP systems that support operations, visibility, and scale.",
    description:
      "Create ERP solutions with stronger workflow alignment, cleaner integrations, and long-term support for growing business operations.",
    buttonLabel: "Access ERP Services",
    image: "/images/man1.png",
  }),
};


// rest-data.js

export const companyStripData = {
  title: "500+ companies rely on our top 1% tech talent.",
  companies: [
    {
      name: "Google",
      logo: "/logos/google-new.png",
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
