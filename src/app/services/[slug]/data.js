const trustedClients = [
  { img: "/logos/l1.png", alt: "Client logo 1" },
  { img: "/logos/l2.png", alt: "Client logo 2" },
  { img: "/logos/l3.png", alt: "Client logo 3" },
  { img: "/logos/l4.png", alt: "Client logo 4" },
  { img: "/logos/l5.png", alt: "Client logo 5" },
  { img: "/logos/l6.png", alt: "Client logo 6" },
];

function createServiceEntry({
  breadcrumb,
  title,
  heading,
  description,
  label,
  reviews = "50 client reviews",
  useCasesLabel,
  useCasesHeading,
  useCasesDescription,
  useCasesServices,
  teamEyebrow,
  teamHeading,
  teamDescription,
  ctaTitle,
  ctaSubtitle,
  testimonialHeading,
  testimonialDescription,
  highlightQuote,
  highlightName,
  highlightRole,
  highlightCompany,
  caseStudiesLabel,
  caseStudiesHeading,
  caseStudiesDescription,
  caseStudyCards,
}) {
  const backendServicesItems = (useCasesServices || []).map((service) => ({
    title: service.title,
    content: service.content,
  }));

  return {
    sections: {
      trustedClientsStrip: true,
    },
    trustedClients,
    testimonialHighlight: {
      quote: highlightQuote,
      name: highlightName,
      role: highlightRole,
      companyName: highlightCompany,
      companyLogo: "/logos/nextroll-new.png",
      personImage: "/logos/img2.png",
      summary:
        `${label} teams need strong execution, reliable delivery, and systems that can evolve with the business. We help organizations build that foundation with practical engineering and long-term maintainability in mind.`,
    },
    hero: {
      breadcrumb: ["Services", breadcrumb], 
      title,
      heading,
      description,
      label,
      rating: {
        platform: "Clutch",
        score: "4.9/5",
        reviews,
      },
      formTitle: `Get expert help for your ${label.toLowerCase()} project.`,
    },
    useCases: {
      sectionLabel: useCasesLabel,
      heading: useCasesHeading,
      description: useCasesDescription,
      image: "/logos/img1.png",
      services: useCasesServices,
    },
    backendServices: {
      sectionLabel: title,
      heading: "No matter what you're building, we can help.",
      description:
        `Our ${label.toLowerCase()} teams help companies ship reliable systems, improve delivery quality, and support growth without unnecessary complexity.`,
      logos: [
        { src: "/images/gcp.png", alt: "Google Cloud" },
        { src: "/images/aws.png", alt: "AWS" },
        { src: "/images/ipo.png", alt: "Azure" },
      ],
      items: backendServicesItems,
    },
    teamSection: {
      eyebrow: teamEyebrow,
      supporterLabel: "Backed by",
      supporterValue: "4000+ devs",
      heading: teamHeading,
      description: teamDescription,
      buttonLabel: "Speak With Our Team",
      tabs: [
        {
          title: `Senior ${label.toLowerCase()} specialists`,
          content:
            `Our ${label.toLowerCase()} engineers bring deep hands-on experience, strong delivery discipline, and practical problem-solving across real production environments.`,
        },
        {
          title: "Built for production",
          content:
            `We focus on maintainability, collaboration, and measurable outcomes so your team can keep shipping confidently after the initial release.`,
        },
        {
          title: "Reliable execution",
          content:
            `From planning and architecture to QA and rollout, we help teams deliver ${label.toLowerCase()} initiatives with less risk and better visibility.`,
        },
      ],
    },
    ctaBanner: {
      title: ctaTitle,
      subtitle: ctaSubtitle,
      buttonLabel: "Talk to an expert",
      href: "https://www.bairesdev.com/start/basic-details/",
    },

    testimonials: {
      sectionLabel: "Client Testimonials",
      heading: testimonialHeading,
      description: testimonialDescription,
      leftItems: [
        {
          industry: "Technology",
          quote:
            `Their ${label.toLowerCase()} team integrated quickly, improved delivery confidence, and consistently produced work our internal stakeholders could trust.`,
          name: "Jordan Blake",
          role: "VP of Engineering",
          photo: "/images/man1.png",
          companyType: "text",
          companyText: "NEXORA",
          companyClassName:
            "text-[18px] font-semibold tracking-[0.2em] text-[#24456f]",
        },
        {
          industry: "Enterprise",
          subtitle: `Scaled delivery across a growing ${label.toLowerCase()} initiative`,
          quote:
            `They brought structure, technical depth, and strong follow-through. The team helped us move faster without lowering quality.`,
          name: "Melissa Grant",
          role: "Director of Engineering",
          photo: "/images/man2.png",
          companyType: "text",
          companyText: "STACKLANE",
          companyClassName:
            "text-[18px] font-semibold tracking-[0.18em] text-[#24456f]",
          hoverDetails: {
            description:
              `The engagement focused on improving delivery quality, reducing bottlenecks, and giving the client a more stable foundation for future ${label.toLowerCase()} work.`,
            tags: ["Delivery", "Architecture", "QA", "Scalability", "Support"],
            metrics: [
              { value: "7", label: "Team size" },
              { value: "99.9%", label: "Reliability" },
              { value: "12 mo", label: "Engagement" },
            ],
          },
        },
      ],
      rightItems: [
        {
          industry: "SaaS",
          subtitle: `Improved execution across a mission-critical ${label.toLowerCase()} roadmap`,
          quote:
            `They helped us simplify delivery, strengthen technical quality, and create a foundation our team could keep building on.`,
          name: "Nina Romero",
          role: "Head of Platform",
          photo: "/images/man3.png",
          companyType: "text",
          companyText: "coreOS",
          companyClassName: "text-[20px] font-semibold text-[#101828]",
          featured: true,
          hoverDetails: {
            description:
              `We supported the client with stronger execution, clearer ownership, and a better production-ready foundation for continued growth.`,
            tags: ["Strategy", "Execution", "Support", "Delivery", "Scale"],
            metrics: [
              { value: "10", label: "Team size" },
              { value: "30%", label: "Faster delivery" },
              { value: "15 mo", label: "Engagement" },
            ],
          },
        },
        {
          industry: "HealthTech",
          quote:
            `The engineers worked as a true extension of our team and delivered improvements that were practical, reliable, and easy for us to build on.`,
          name: "Daniel Brooks",
          role: "CTO",
          photo: "/images/man4.png",
          companyType: "text",
          companyText: "MEDSYNC",
          companyClassName: "text-[20px] font-semibold text-[#101828]",
        },
      ],
      calloutText:
        `Join 500+ companies building stronger ${label.toLowerCase()} capabilities with our engineers.`,
      calloutButtonLabel: "Schedule a Call",
    },
    engagementData: {
  sectionLabel: "Flexible engagement models",
  heading:
    "Need extra Amazon Web Services expertise? Plug us in where you need us most.",
  description:
    "We customize every engagement to fit your workflow, priorities, and delivery needs.",

  items: [
    {
      label: "Staff Augmentation",
      question: "Need a couple of extra software engineers on your team?",
      description: "Get senior developers who integrate into your team.",
      imgSrc: "/icons/staff.svg",
    },
    {
      label: "Dedicated Teams",
      question: "Need multiple teams working simultaneously?",
      description: "Delivery-ready teams managed by tech leads.",
      imgSrc: "/icons/team.svg",
    },
    {
      label: "Software Outsourcing",
      question: "Want full project ownership?",
      description: "We handle everything from start to finish.",
      imgSrc: "/icons/outsource.svg",
    },
  ],
},
    caseStudies: {
      sectionLabel: caseStudiesLabel,
      heading: caseStudiesHeading,
      description: caseStudiesDescription,
      cards: caseStudyCards,
    },
  };
}

const generatedServices = {
  "cms-development": createServiceEntry({
    breadcrumb: "CMS",
    title: "CMS DEVELOPMENT SERVICES",
    heading: "Deliver content-rich digital experiences with scalable CMS solutions.",
    description:
      "We build CMS platforms that give marketing teams flexibility while keeping performance, governance, and maintainability under control.",
    label: "CMS Development",
    useCasesLabel: "CMS SOLUTIONS",
    useCasesHeading: "CMS Development Use Cases",
    useCasesDescription:
      "From publishing workflows to enterprise content operations, we build CMS solutions that are flexible for editors and reliable for engineering teams.",
    useCasesServices: [
      {
        title: "Custom CMS Platforms",
        content:
          "Build custom content management solutions around your business workflow.\n\nWe help teams manage structured content, permissions, and publishing flows without forcing operations into rigid templates.",
      },
      {
        title: "Headless CMS Delivery",
        content:
          "Connect content systems to modern web and app experiences.\n\nWe support headless architectures that separate editorial workflows from presentation for better speed and flexibility.",
      },
    ],
    teamEyebrow: "Our CMS development team",
    teamHeading: "Why teams choose our CMS engineers:",
    teamDescription:
      "We help businesses launch and scale content platforms that are fast for users, manageable for editors, and sustainable for internal development teams.",
    ctaTitle: "Looking for a CMS team with proven delivery experience?",
    ctaSubtitle: "Tell us about your content platform, migration, or publishing workflow needs.",
    testimonialHeading: "CMS outcomes your team can manage with confidence.",
    testimonialDescription:
      "Our CMS work helps teams publish faster, reduce operational friction, and support growing digital content demands.",
    highlightQuote:
      "They helped us modernize our content platform without disrupting day-to-day publishing.",
    highlightName: "Elena Morris",
    highlightRole: "Director of Digital Experience",
    highlightCompany: "ContentForge",
    caseStudiesLabel: "CMS CASE STUDIES",
    caseStudiesHeading: "CMS platforms delivered for flexibility and scale.",
    caseStudiesDescription:
      "We build CMS solutions that support editorial teams, campaign launches, and long-term digital growth without sacrificing maintainability.",
    caseStudyCards: [
      {
        tag: "MEDIA",
        title: "Built a Multi-Site CMS Platform for Faster Publishing",
        description:
          "Delivered reusable content models and publishing workflows for a growing media brand.",
        image: "/logos/office1.jpg",
      },
      {
        tag: "ECOMMERCE",
        title: "Migrated Legacy CMS Workflows to a Headless Stack",
        description:
          "Improved flexibility for marketing teams while supporting modern frontend delivery.",
        image: "/logos/office2.jpg",
      },
      {
        tag: "ENTERPRISE",
        title: "Centralized Content Operations Across Regional Teams",
        description:
          "Created a governed CMS setup that scaled across multiple markets and editorial groups.",
        image: "/logos/office3.jpg",
      },
    ],
  }),
  blockchain: createServiceEntry({
    breadcrumb: "Blockchain",
    title: "BLOCKCHAIN DEVELOPMENT SERVICES",
    heading: "Build secure blockchain products and distributed systems with confidence.",
    description:
      "We help teams design blockchain solutions, smart contract systems, and crypto-enabled platforms with a focus on security, maintainability, and practical delivery.",
    label: "Blockchain Development",
    useCasesLabel: "BLOCKCHAIN SOLUTIONS",
    useCasesHeading: "Blockchain Development Use Cases",
    useCasesDescription:
      "From smart contracts to token-enabled products, we build blockchain solutions that align with real product goals and operational needs.",
    useCasesServices: [
      {
        title: "Smart Contract Development",
        content:
          "Develop secure smart contracts for blockchain-based products.\n\nWe help teams design core contract logic, review flows, and reduce avoidable implementation risks.",
      },
      {
        title: "Blockchain Platforms",
        content:
          "Build end-to-end blockchain applications and supporting infrastructure.\n\nWe connect wallet flows, data services, and operational tooling into cohesive product experiences.",
      },
    ],
    teamEyebrow: "Our blockchain development team",
    teamHeading: "Why companies work with our blockchain engineers:",
    teamDescription:
      "We help organizations ship blockchain products with stronger engineering discipline, practical architecture, and clearer delivery processes.",
    ctaTitle: "Need a blockchain team that can build beyond prototypes?",
    ctaSubtitle: "Tell us about your smart contracts, platform architecture, or blockchain product goals.",
    testimonialHeading: "Blockchain delivery you can support in production.",
    testimonialDescription:
      "Our blockchain work focuses on security, maintainability, and product readiness instead of experimentation alone.",
    highlightQuote:
      "They helped us turn an ambitious blockchain concept into a product we could actually operate.",
    highlightName: "Victor Hale",
    highlightRole: "Head of Product",
    highlightCompany: "LedgerWave",
    caseStudiesLabel: "BLOCKCHAIN CASE STUDIES",
    caseStudiesHeading: "Blockchain products delivered with security and structure.",
    caseStudiesDescription:
      "We support blockchain initiatives that need dependable implementation, scalable architecture, and practical operational planning.",
    caseStudyCards: [
      {
        tag: "FINTECH",
        title: "Built Smart Contract Workflows for a Digital Asset Platform",
        description:
          "Designed contract logic and supporting services for secure transaction handling.",
        image: "/logos/office1.jpg",
      },
      {
        tag: "WEB3",
        title: "Developed Wallet and Identity Flows for a Blockchain Product",
        description:
          "Created user-facing and backend flows to support secure blockchain interactions.",
        image: "/logos/office2.jpg",
      },
      {
        tag: "ENTERPRISE",
        title: "Implemented Audit-Friendly Blockchain Operations",
        description:
          "Improved visibility, maintainability, and risk controls across a distributed platform.",
        image: "/logos/office3.jpg",
      },
    ],
  }),
  "frontend-development": createServiceEntry({
    breadcrumb: "Frontend",
    title: "FRONT-END DEVELOPMENT SERVICES",
    heading: "Create responsive frontend experiences that feel fast, polished, and scalable.",
    description:
      "We build modern frontend applications with strong performance, accessible interfaces, and component systems teams can maintain over time.",
    label: "Frontend Development",
    useCasesLabel: "FRONTEND SOLUTIONS",
    useCasesHeading: "Frontend Development Use Cases",
    useCasesDescription:
      "From marketing sites to complex product interfaces, we build frontend systems that support speed, clarity, and maintainable growth.",
    useCasesServices: [
      {
        title: "Web App Interfaces",
        content:
          "Build high-performance interfaces for modern web applications.\n\nWe focus on clarity, responsiveness, and component patterns that help teams ship quickly.",
      },
      {
        title: "Design System Implementation",
        content:
          "Turn design language into reusable frontend components.\n\nWe help teams align product consistency, accessibility, and development efficiency across the UI stack.",
      },
    ],
    teamEyebrow: "Our front-end development team",
    teamHeading: "Why product teams choose our frontend engineers:",
    teamDescription:
      "We help companies ship frontend experiences that are polished for users, practical for teams, and maintainable as products evolve.",
    ctaTitle: "Need a frontend team that can move fast without losing quality?",
    ctaSubtitle: "Tell us about your product UI, performance, or design system needs.",
    testimonialHeading: "Frontend delivery users notice and teams can maintain.",
    testimonialDescription:
      "Our frontend work improves product usability, interface quality, and implementation speed without creating long-term complexity.",
    highlightQuote:
      "They raised the quality of our frontend experience while making the codebase easier to work with.",
    highlightName: "Sophie Turner",
    highlightRole: "Head of Product Design",
    highlightCompany: "BrightPixel",
    caseStudiesLabel: "FRONTEND CASE STUDIES",
    caseStudiesHeading: "Frontend systems built for performance and product quality.",
    caseStudiesDescription:
      "We build frontend experiences that improve usability, support growth, and help internal teams ship with more consistency.",
    caseStudyCards: [
      {
        tag: "SaaS",
        title: "Built a Component-Driven Frontend for a B2B Platform",
        description:
          "Improved design consistency and development speed with reusable UI patterns.",
        image: "/logos/office1.jpg",
      },
      {
        tag: "RETAIL",
        title: "Improved Frontend Performance Across High-Traffic Pages",
        description:
          "Reduced friction in key flows by focusing on responsiveness and UX polish.",
        image: "/logos/office2.jpg",
      },
      {
        tag: "ENTERPRISE",
        title: "Standardized UI Delivery with a Shared Design System",
        description:
          "Created scalable frontend building blocks for multiple product teams.",
        image: "/logos/office3.jpg",
      },
    ],
  }),
  "machine-learning": createServiceEntry({
    breadcrumb: "Machine Learning",
    title: "MACHINE LEARNING SERVICES",
    heading: "Build machine learning systems that move from experimentation to practical value.",
    description:
      "We help teams design, train, and operationalize machine learning solutions that support real business decisions and scalable product experiences.",
    label: "Machine Learning",
    useCasesLabel: "ML SOLUTIONS",
    useCasesHeading: "Machine Learning Use Cases",
    useCasesDescription:
      "From predictive systems to recommendation engines, we build machine learning solutions that can be deployed, monitored, and improved over time.",
    useCasesServices: [
      {
        title: "Predictive Modeling",
        content:
          "Build machine learning models that support forecasting and decision-making.\n\nWe help teams turn available data into practical predictions with measurable business value.",
      },
      {
        title: "ML Operations",
        content:
          "Operationalize machine learning systems for real production use.\n\nWe focus on deployment workflows, monitoring, retraining, and long-term maintainability.",
      },
    ],
    teamEyebrow: "Our machine learning team",
    teamHeading: "Why teams trust our machine learning engineers:",
    teamDescription:
      "We help organizations turn ML initiatives into production-ready systems with stronger engineering, clearer iteration cycles, and better operational reliability.",
    ctaTitle: "Need an ML team that can ship beyond experimentation?",
    ctaSubtitle: "Tell us about your models, data workflows, or ML product goals.",
    testimonialHeading: "Machine learning delivery grounded in real operations.",
    testimonialDescription:
      "Our machine learning work focuses on measurable outcomes, maintainable systems, and deployment-ready engineering.",
    highlightQuote:
      "They helped us make machine learning useful in production instead of keeping it trapped in experiments.",
    highlightName: "Priya Nair",
    highlightRole: "Data Science Lead",
    highlightCompany: "SignalWorks",
    caseStudiesLabel: "ML CASE STUDIES",
    caseStudiesHeading: "Machine learning systems delivered for impact and maintainability.",
    caseStudiesDescription:
      "We help teams apply machine learning where it creates practical value, stronger decisions, and sustainable delivery workflows.",
    caseStudyCards: [
      {
        tag: "ANALYTICS",
        title: "Built Predictive Models for Demand Forecasting",
        description:
          "Supported planning teams with more reliable projections and clearer data pipelines.",
        image: "/logos/office1.jpg",
      },
      {
        tag: "SaaS",
        title: "Operationalized Recommendation Models for Product Growth",
        description:
          "Connected model outputs to user-facing product experiences with production support.",
        image: "/logos/office2.jpg",
      },
      {
        tag: "ENTERPRISE",
        title: "Improved ML Deployment and Monitoring Workflows",
        description:
          "Created better visibility, retraining processes, and release discipline for model systems.",
        image: "/logos/office3.jpg",
      },
    ],
  }),
  "qa-testing": createServiceEntry({
    breadcrumb: "QA",
    title: "QA TESTING & AUTOMATION SERVICES",
    heading: "Protect release quality with structured QA and test automation services.",
    description:
      "We help teams improve release confidence through manual QA, automated testing, and quality processes that scale with product complexity.",
    label: "QA Testing & Automation",
    useCasesLabel: "QA SOLUTIONS",
    useCasesHeading: "QA and Automation Use Cases",
    useCasesDescription:
      "From release validation to automated regression coverage, we build QA processes that help teams move faster with fewer production issues.",
    useCasesServices: [
      {
        title: "Manual QA Coverage",
        content:
          "Support product quality with structured manual testing workflows.\n\nWe help teams validate functionality, user flows, and edge cases before releases reach production.",
      },
      {
        title: "Automation Frameworks",
        content:
          "Build automated testing systems for repeatable release confidence.\n\nWe create regression coverage and quality workflows that scale alongside product complexity.",
      },
    ],
    teamEyebrow: "Our QA and automation team",
    teamHeading: "Why teams choose our QA specialists:",
    teamDescription:
      "We help organizations improve software quality through clear test strategy, disciplined execution, and automation that supports faster releases.",
    ctaTitle: "Need QA support that improves quality without slowing delivery?",
    ctaSubtitle: "Tell us about your testing gaps, automation goals, or release quality challenges.",
    testimonialHeading: "Quality outcomes that improve release confidence.",
    testimonialDescription:
      "Our QA work helps teams reduce regressions, increase release stability, and create more predictable delivery cycles.",
    highlightQuote:
      "They gave our team a much stronger release process and far more confidence in every deployment.",
    highlightName: "Aaron Cole",
    highlightRole: "Engineering Manager",
    highlightCompany: "LaunchGrid",
    caseStudiesLabel: "QA CASE STUDIES",
    caseStudiesHeading: "Quality programs delivered for speed, coverage, and stability.",
    caseStudiesDescription:
      "We help teams improve release quality with structured QA execution and automation strategies that fit the product lifecycle.",
    caseStudyCards: [
      {
        tag: "SaaS",
        title: "Built Automated Regression Coverage for Core Workflows",
        description:
          "Improved release confidence and reduced manual repetition for a growing product team.",
        image: "/logos/office1.jpg",
      },
      {
        tag: "FINTECH",
        title: "Strengthened QA for High-Risk Transaction Flows",
        description:
          "Added structured test coverage and validation processes around critical releases.",
        image: "/logos/office2.jpg",
      },
      {
        tag: "ENTERPRISE",
        title: "Standardized Cross-Team Testing Practices",
        description:
          "Created better quality visibility and more dependable release workflows across teams.",
        image: "/logos/office3.jpg",
      },
    ],
  }),
  "ui-ux-design": createServiceEntry({
    breadcrumb: "UI/UX",
    title: "UX/UI DESIGN SERVICES",
    heading: "Design digital experiences that are intuitive, consistent, and built for growth.",
    description:
      "We help teams improve product usability, design systems, and digital journeys through practical UX research and scalable UI design.",
    label: "UX/UI Design",
    useCasesLabel: "DESIGN SOLUTIONS",
    useCasesHeading: "UX/UI Design Use Cases",
    useCasesDescription:
      "From product redesigns to new platform launches, we design user experiences that support clarity, conversion, and maintainable implementation.",
    useCasesServices: [
      {
        title: "Product UX Design",
        content:
          "Design user journeys that make complex products easier to understand and use.\n\nWe support discovery, flow mapping, wireframing, and interface design grounded in real product needs.",
      },
      {
        title: "Design Systems",
        content:
          "Create scalable UI systems for more consistent product delivery.\n\nWe help teams align design quality, accessibility, and implementation across growing digital products.",
      },
    ],
    teamEyebrow: "Our UX/UI design team",
    teamHeading: "Why product teams choose our designers:",
    teamDescription:
      "We help organizations improve product quality through clearer journeys, more consistent interfaces, and design work that supports engineering execution.",
    ctaTitle: "Need a design team that balances usability and execution?",
    ctaSubtitle: "Tell us about your redesign, product UX, or design system goals.",
    testimonialHeading: "Design outcomes that improve product clarity and adoption.",
    testimonialDescription:
      "Our design work helps teams reduce friction, improve usability, and create interfaces that support long-term product growth.",
    highlightQuote:
      "They helped us simplify a complicated product experience without losing depth or capability.",
    highlightName: "Laura Finch",
    highlightRole: "VP of Product",
    highlightCompany: "Northbeam",
    caseStudiesLabel: "DESIGN CASE STUDIES",
    caseStudiesHeading: "Product design systems delivered for clarity and scale.",
    caseStudiesDescription:
      "We help teams improve UX and UI quality with design processes that connect strategy, research, and implementation.",
    caseStudyCards: [
      {
        tag: "SaaS",
        title: "Redesigned Core Product Flows to Reduce User Friction",
        description:
          "Improved navigation, clarity, and task completion across a complex product experience.",
        image: "/logos/office1.jpg",
      },
      {
        tag: "FINTECH",
        title: "Built a Reusable Design System for Faster Delivery",
        description:
          "Supported more consistent product design and stronger handoff to engineering.",
        image: "/logos/office2.jpg",
      },
      {
        tag: "ENTERPRISE",
        title: "Improved Usability Across Multi-Step Business Workflows",
        description:
          "Refined information architecture and interface patterns for a more intuitive product.",
        image: "/logos/office3.jpg",
      },
    ],
  }),
};

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
      companyLogo: "/logos/nr.png",
      personImage: "/logos/img2.png",
      summary:
        "The best partnerships are the ones you do not have to worry about. We deliver the kind of technical execution and reliability that builds long-term trust and consistent results.",
    },
    engagementData: {
  sectionLabel: "Flexible engagement models",
  heading:
    "Need extra Amazon Web Services expertise? Plug us in where you need us most.",
  description:
    "We customize every engagement to fit your workflow, priorities, and delivery needs.",

  items: [
    {
      label: "Staff Augmentation",
      question: "Need a couple of extra software engineers?",
      description: "Get senior developers integrated into your team.",
      imgSrc: "/icons/staff.svg",
    },
  ],
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
    
    toolsTech: {
  sectionLabel: "TOOLS FOR AI DEVELOPMENT",
  heading: "Tools and technologies used in our AI development projects:",
  description:
    "We combine industry-standard frameworks with modern tooling and proven internal processes to accelerate delivery and maintain custom AI solutions over time.",

  items: [
    {
      title: "Deep Learning Frameworks",
      description:
        "We use high-performance frameworks to build, train, and optimize deep learning models across different use cases.",
      tools: ["PyTorch", "TensorFlow", "Keras"],
    },
    {
      title: "Machine Learning Libraries",
      description:
        "We leverage ML libraries to build scalable and efficient models for real-world applications.",
      tools: ["Scikit-learn", "XGBoost", "LightGBM"],
    },
    {
      title: "Data Engineering Tools",
      description:
        "Robust pipelines for handling large-scale structured and unstructured data.",
      tools: ["Apache Spark", "Kafka", "Airflow"],
    },
    {
      title: "Data Analysis Tools",
      description:
        "Tools for data processing, visualization, and insights extraction.",
      tools: ["Pandas", "NumPy", "Matplotlib"],
    },
    {
      title: "Cloud ML Platforms",
      description:
        "Deploy and scale ML models using cloud-native infrastructure.",
      tools: ["AWS SageMaker", "Google AI", "Azure ML"],
    },
    {
      title: "Development Environments",
      description:
        "Efficient coding and experimentation environments.",
      tools: ["Jupyter", "VS Code", "Colab"],
    },
    {
      title: "AI Coding Tools",
      description:
        "Accelerate development with AI-assisted tools.",
      tools: ["GitHub Copilot", "ChatGPT", "Codeium"],
    },
  ],
},
  },

 "backend-development": createServiceEntry({
  breadcrumb: "Backend",
  title: "BACK-END DEVELOPMENT SERVICES",
  heading: "Build robust backend systems engineered for performance and scale.",
  description:
    "We design and develop secure backend architectures, APIs, databases, and cloud-ready systems that keep your products fast, reliable, and easy to grow.",
  label: "Backend Development",

  useCasesLabel: "BACKEND SYSTEMS",
  useCasesHeading: "Backend Use Cases",
  useCasesDescription:
    "We build backend platforms that support high traffic, clean integrations, and stable performance as your product and team grow.",

  useCasesServices: [
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
    {
      title: "Microservices Architecture",
      content:
        "Design service-oriented backend systems for products that need cleaner scaling paths and better service boundaries.\n\nWe help teams break down monoliths, define communication patterns, and reduce operational complexity as platforms grow.",
    },
    {
      title: "Database Architecture & Optimization",
      content:
        "Build database layers that support performance, consistency, and long-term maintainability.\n\nWe design schemas, indexing strategies, and query patterns that help products stay responsive under increasing load.",
    },
    {
      title: "Authentication & Authorization Systems",
      content:
        "Implement secure access control across products, APIs, and internal platforms.\n\nWe support identity flows, permissions models, and token-based authentication strategies that fit real production requirements.",
    },
    {
      title: "Backend Modernization & Migration",
      content:
        "Upgrade outdated backend systems without disrupting business-critical workflows.\n\nWe help teams modernize architecture, reduce technical debt, and improve long-term maintainability through phased engineering plans.",
    },
    {
      title: "Real-Time Processing",
      content:
        "Support products that rely on live updates, event-driven workflows, and streaming data.\n\nWe build backend systems that can process and deliver real-time information reliably across customer-facing and internal use cases.",
    },
    {
      title: "Monitoring & Observability",
      content:
        "Create stronger production visibility across backend systems and infrastructure.\n\nWe help teams instrument services, surface useful alerts, and improve response speed when performance or reliability issues appear.",
    },
  ],

  teamEyebrow: "Our backend development team",
  teamHeading: "Why product teams choose our backend engineers:",
  teamDescription:
    "We help companies build backend systems that stay reliable under real production pressure. Our engineers focus on clean architecture, maintainable services, and infrastructure that supports long-term growth.",

  ctaTitle: "Looking for a backend team with this kind of track record?",
  ctaSubtitle:
    "Tell us more about your platform, APIs, or infrastructure needs.",

  testimonialHeading: "Get backend results you can build on.",
  testimonialDescription:
    "Our backend work stands up under production traffic, product growth, and long-term operational demands.",

  highlightQuote:
    "They helped us strengthen our backend architecture and gave us the confidence to scale without sacrificing stability.",
  highlightName: "Aarav Shah",
  highlightRole: "Head of Engineering",
  highlightCompany: "CloudForge",

  caseStudiesLabel: "BACKEND CASE STUDIES",
  caseStudiesHeading:
    "Backend systems built for scale, speed, and reliability.",
  caseStudiesDescription:
    "We help teams support growth without sacrificing performance through strong backend engineering.",

  caseStudyCards: [
    {
      tag: "FINTECH",
      title:
        "Built Secure Transaction APIs for a High-Volume Finance Platform",
      description:
        "Engineered resilient backend APIs with strong security controls.",
      image: "/logos/office1.jpg",
    },
    {
      tag: "SAAS",
      title:
        "Modernized Backend Services to Support Multi-Tenant Growth",
      description:
        "Improved scalability and maintainability for a SaaS platform.",
      image: "/logos/office2.jpg",
    },
    {
      tag: "ENTERPRISE",
      title:
        "Re-Architected Core Systems for Reliability and Observability",
      description:
        "Improved monitoring and system stability.",
      image: "/logos/office3.jpg",
    },
  ],
}),
  ...generatedServices,

  "web-development": {
    sections: {
      trustedClientsStrip: false,
    },
    backendServices: {
      sectionLabel: "WEB DEVELOPMENT SERVICES",
      heading: "No matter what you're building, we can help.",
      description:
        "Our web development teams help companies build fast, maintainable web applications with stronger user experience and reliable delivery.",
      logos: [
        { src: "/images/gcp.png", alt: "Google Cloud" },
        { src: "/images/aws.png", alt: "AWS" },
        { src: "/images/ipo.png", alt: "Azure" },
      ],
      items: [
        {
          title: "Custom Web Applications",
          content:
            "Build high-performance web applications tailored to your product and business workflows.",
        },
        {
          title: "Frontend Architecture",
          content:
            "Create scalable UI systems and maintainable frontend foundations for growing products.",
        },
        {
          title: "Platform Modernization",
          content:
            "Upgrade legacy web systems to improve performance, maintainability, and release speed.",
        },
      ],
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
    backendServices: {
      sectionLabel: "MOBILE APP DEVELOPMENT",
      heading: "No matter what you're building, we can help.",
      description:
        "Our mobile app teams help companies launch and scale reliable products across iOS and Android with strong engineering support.",
      logos: [
        { src: "/images/gcp.png", alt: "Google Cloud" },
        { src: "/images/aws.png", alt: "AWS" },
        { src: "/images/ipo.png", alt: "Azure" },
      ],
      items: [
        {
          title: "Cross-Platform Apps",
          content:
            "Build mobile applications that support efficient delivery across major platforms.",
        },
        {
          title: "Native App Development",
          content:
            "Deliver polished mobile experiences optimized for platform performance and usability.",
        },
        {
          title: "Mobile Modernization",
          content:
            "Improve app stability, release quality, and long-term maintainability across evolving products.",
        },
      ],
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
