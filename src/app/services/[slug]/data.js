const trustedClients = [
  { img: "/logos/l1.png", alt: "Client logo 1" },
  { img: "/logos/l2.png", alt: "Client logo 2" },
  { img: "/logos/l3.png", alt: "Client logo 3" },
  { img: "/logos/l4.png", alt: "Client logo 4" },
  { img: "/logos/l5.png", alt: "Client logo 5" },
  { img: "/logos/l6.png", alt: "Client logo 6" },
];

export const serviceData = {
  "ai-development": {
    sections: {
      trustedClientsStrip: true,
    },
    testimonialHighlight: {
      quote:
        "Their engineers perform at very high standards. We've had a strong relationship for almost 7 years.",
      name: "Patrick Mee",
      role: "EVP of Engineering",
      companyName: "NextRoll",
      companyLogo: "/logos/nextroll-new.png",
      personImage: "/logos/img2.png",
      summary:
        "The best partnerships are the ones you do not have to worry about. We deliver the kind of technical execution and reliability that builds long-term trust and consistent results.",
    },
    hero: {
      breadcrumb: ["Services", "AI"],
      title: "AI DEVELOPMENT SERVICES",
      heading: "Work with AI experts trusted by the world’s top tech teams.",
      description:
        "As a leading AI development company, we deliver AI-powered solutions that go beyond experimentation. Our AI engineers help organizations integrate agentic AI, custom LLMs, and generative AI into their products.",
      
      label: "Artificial Intelligence",

      rating: {
        platform: "Clutch",
        score: "4.9/5",
        reviews: "60 client reviews",
      },

      formTitle: "Get expert help for your AI project.",
    },
    trustedClients,

    useCases: {
      sectionLabel: "AI SOLUTIONS",
      heading: "AI Use Cases",
      description:
        "From intelligent assistants to workflow automation, we help teams ship practical AI products that solve real business problems.",
      image: "/logos/img1.png",
      services: [
        {
          title: "LLM Applications",
          content:
            "Build ChatGPT-like systems for your business.\n\nCreate internal copilots, customer-facing chat experiences, and knowledge assistants that use your own data safely and effectively.",
        },
        {
          title: "Automation",
          content:
            "Automate workflows using AI agents.\n\nReduce manual work across operations, support, and content pipelines with smart agents that can reason, act, and adapt.",
        },
      ],
    },
    caseStudies: {
      sectionLabel: "AI CASE STUDIES",
      heading: "Dozens of AI development projects delivered.",
      description:
        "We've provided AI development services across industries, ranging from predictive analytics enterprise platforms to consumer-oriented mobile apps with AI features. Our clients consider us a leading AI development company because we repeatedly deliver scalable, robust solutions.",
      cards: [
        {
          tag: "LEGAL",
          title: "Developed AI Tool to Summarize 10,000 Legal Transcripts Daily",
          description:
            "Created an AI workflow that processes high-volume legal content with speed, consistency, and reliable summaries for downstream review teams.",
          image: "/logos/office1.jpg",
         
        },
        {
          tag: "AUDIO AND VIDEO MEDIA",
          title: "Automated GenAI Video Integration for HubSpot Campaigns",
          description:
            "Built a generative video pipeline that connected campaign systems, reduced manual production work, and accelerated content delivery.",
          image: "/logos/office2.jpg",
         
        },
        {
          tag: "TECHNOLOGY",
          title: "Built an IDE That Simplifies AI Pipeline Prototyping",
          description:
            "Designed a developer workflow that made AI experimentation easier, faster, and more structured for internal engineering teams.",
          image: "/logos/office3.jpg",
      
        },
      ],
    },
  },

  "backend-development": {
    sections: {
      trustedClientsStrip: true,
    },
    testimonialHighlight: {
      quote:
        "They helped us strengthen our backend architecture and gave us the confidence to scale without sacrificing stability.",
      name: "Aarav Shah",
      role: "Head of Engineering",
      companyName: "CloudForge",
      companyLogo: "/logos/nextroll-new.png",
      personImage: "/logos/img2.png",
      summary:
        "Reliable backend engineering creates room for product growth. Our team focuses on performance, maintainability, and system design that supports long-term business goals.",
    },
    hero: {
      breadcrumb: ["Services", "Backend"],
      title: "BACK-END DEVELOPMENT SERVICES",
      heading: "Build robust backend systems engineered for performance and scale.",
      description:
        "We design and develop secure backend architectures, APIs, databases, and cloud-ready systems that keep your products fast, reliable, and easy to grow.",

      label: "Backend Development",

      rating: {
        platform: "Clutch",
        score: "4.9/5",
        reviews: "55 client reviews",
      },

      formTitle: "Get expert help for your backend project.",
    },

    useCases: {
      sectionLabel: "BACKEND SYSTEMS",
      heading: "Backend Use Cases",
      description:
        "We build backend platforms that support high traffic, clean integrations, and stable performance as your product and team grow.",
      image: "/logos/img1.png",
      services: [
        {
          title: "API Development",
          content:
            "Create scalable REST and GraphQL APIs for web and mobile products.\n\nDesign service contracts, authentication flows, and data access layers that are easy to maintain and extend.",
        },
        {
          title: "Cloud Architecture",
          content:
            "Build resilient backend systems optimized for cloud deployment and growth.\n\nSupport reliability, observability, and future scaling with cloud-ready architecture and strong infrastructure foundations.",
        },
      ],
    },
    caseStudies: {
      sectionLabel: "BACKEND CASE STUDIES",
      heading: "Backend systems built for scale, speed, and reliability.",
      description:
        "We've delivered backend development services for products that demand strong APIs, dependable infrastructure, and long-term maintainability. These engagements show how we help teams support growth without sacrificing performance.",
      cards: [
        {
          tag: "FINTECH",
          title: "Built Secure Transaction APIs for a High-Volume Finance Platform",
          description:
            "Engineered resilient backend APIs with strong security controls and throughput designed for demanding transaction workloads.",
          image: "/logos/out.png",
        },
        {
          tag: "SAAS",
          title: "Modernized Backend Services to Support Multi-Tenant Product Growth",
          description:
            "Refactored core services to improve tenant isolation, maintainability, and long-term scaling for a growing SaaS platform.",
          image: "/logos/l2.png",
        },
        {
          tag: "ENTERPRISE",
          title: "Re-Architected Core Systems for Better Reliability and Observability",
          description:
            "Improved system stability with cleaner service boundaries, stronger monitoring, and better visibility into production behavior.",
          image: "/logos/l3.png",
        },
      ],
    },
  },

  "web-development": {
    sections: {
      trustedClientsStrip: false,
    },
    hero: {
      breadcrumb: ["Services", "Web"],
      title: "WEB DEVELOPMENT SERVICES",
      heading: "Modern web apps built for scale",
      description:
        "We create high-performance web applications using React, Next.js, and modern stacks.",

      label: "Web Development",

      rating: {
        platform: "Clutch",
        score: "4.9/5",
        reviews: "50+ client reviews",
      },

      formTitle: "Get expert help for your web project.",
    },
    trustedClients,
  },

  "mobile-development": {
    sections: {
      trustedClientsStrip: false,
    },
    hero: {
      breadcrumb: ["Services", "Mobile"],
      title: "MOBILE APP DEVELOPMENT",
      heading: "iOS & Android apps that scale",
      description:
        "We build cross-platform and native mobile apps for startups and enterprises.",

      label: "Mobile Development",

      rating: {
        platform: "Clutch",
        score: "4.8/5",
        reviews: "40+ client reviews",
      },

      formTitle: "Get expert help for your mobile project.",
    },
    trustedClients,
  },
};
