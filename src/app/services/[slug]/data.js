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
  "android-app-development": createServiceEntry({
    breadcrumb: "Android",
    title: "ANDROID APP DEVELOPMENT SERVICES",
    heading: "Build Android apps that perform reliably across modern devices and user demands.",
    description:
      "We help teams create Android applications with strong performance, maintainable architecture, and user experiences built for long-term growth.",
    label: "Android App Development",
    useCasesLabel: "ANDROID SOLUTIONS",
    useCasesHeading: "Android App Development Use Cases",
    useCasesDescription:
      "From consumer apps to enterprise workflows, we build Android experiences that support usability, performance, and maintainable mobile delivery.",
    useCasesServices: [
      {
        title: "Native Android Apps",
        content:
          "Build Android applications optimized for performance and platform-native behavior.\n\nWe support architecture, UI implementation, and integrations that fit real mobile product needs.",
      },
      {
        title: "Enterprise Mobile Workflows",
        content:
          "Support internal Android tools used in demanding business environments.\n\nWe help teams build reliable mobile experiences around field operations, data entry, and workflow efficiency.",
      },
    ],
    teamEyebrow: "Our Android development team",
    teamHeading: "Why teams choose our Android engineers:",
    teamDescription:
      "We help organizations build Android products that are stable in production, easy to evolve, and aligned with the realities of mobile delivery.",
    ctaTitle: "Need Android engineers who can support product growth?",
    ctaSubtitle: "Tell us about your Android roadmap, architecture, or mobile delivery needs.",
    testimonialHeading: "Android delivery built for reliability and maintainability.",
    testimonialDescription:
      "Our Android work helps teams improve performance, streamline releases, and support better mobile experiences over time.",
    highlightQuote:
      "They helped us raise the quality of our Android product while making delivery more predictable.",
    highlightName: "Jason Reed",
    highlightRole: "Mobile Engineering Lead",
    highlightCompany: "AppForge",
    caseStudiesLabel: "ANDROID CASE STUDIES",
    caseStudiesHeading: "Android apps delivered for quality, scale, and product fit.",
    caseStudiesDescription:
      "We build Android solutions that improve performance, usability, and long-term maintainability across mobile products.",
    caseStudyCards: [
      {
        tag: "MOBILE",
        title: "Built a Native Android App for a High-Usage Consumer Platform",
        description:
          "Improved responsiveness and product quality across core mobile experiences.",
        image: "/logos/office1.jpg",
      },
      {
        tag: "ENTERPRISE",
        title: "Developed Android Workflows for Internal Operations",
        description:
          "Supported field teams with reliable mobile tools and faster task execution.",
        image: "/logos/office2.jpg",
      },
      {
        tag: "HEALTHTECH",
        title: "Improved Stability Across a Critical Android Product",
        description:
          "Reduced issues and strengthened release quality for a mobile healthcare platform.",
        image: "/logos/office3.jpg",
      },
    ],
  }),
  "business-intelligence": createServiceEntry({
    breadcrumb: "BI",
    title: "BUSINESS INTELLIGENCE SERVICES",
    heading: "Turn business data into clearer reporting, better decisions, and actionable visibility.",
    description:
      "We help organizations build BI systems, dashboards, and analytics workflows that improve operational insight and decision-making across teams.",
    label: "Business Intelligence",
    useCasesLabel: "BI SOLUTIONS",
    useCasesHeading: "Business Intelligence Use Cases",
    useCasesDescription:
      "From executive dashboards to operational reporting, we build business intelligence systems that improve visibility and support better planning.",
    useCasesServices: [
      {
        title: "Dashboard Development",
        content:
          "Build dashboards that turn business data into useful operational visibility.\n\nWe help teams align stakeholders around metrics that are clear, timely, and easier to act on.",
      },
      {
        title: "Reporting Workflows",
        content:
          "Create reporting systems that reduce manual effort and improve decision support.\n\nWe help organizations standardize reporting and improve confidence in business insights.",
      },
    ],
    teamEyebrow: "Our business intelligence team",
    teamHeading: "Why organizations choose our BI specialists:",
    teamDescription:
      "We help companies improve reporting clarity, data accessibility, and decision support with practical business intelligence systems.",
    ctaTitle: "Need BI support that makes data more useful across the business?",
    ctaSubtitle: "Tell us about your dashboards, reporting needs, or analytics visibility goals.",
    testimonialHeading: "Business intelligence work that supports better decisions.",
    testimonialDescription:
      "Our BI solutions help teams reduce reporting friction and improve the quality of business visibility across stakeholders.",
    highlightQuote:
      "They helped us turn scattered reporting into a business intelligence system leaders actually use.",
    highlightName: "Carla Benton",
    highlightRole: "VP of Operations",
    highlightCompany: "InsightCore",
    caseStudiesLabel: "BI CASE STUDIES",
    caseStudiesHeading: "Business intelligence systems built for visibility and action.",
    caseStudiesDescription:
      "We help organizations improve reporting workflows, executive visibility, and decision support through stronger BI foundations.",
    caseStudyCards: [
      {
        tag: "ANALYTICS",
        title: "Built Executive Dashboards for Cross-Functional Reporting",
        description:
          "Improved visibility into operational metrics for leadership and product stakeholders.",
        image: "/logos/office1.jpg",
      },
      {
        tag: "FINANCE",
        title: "Streamlined Reporting Workflows Across Business Units",
        description:
          "Reduced manual reporting effort and improved consistency in key performance views.",
        image: "/logos/office2.jpg",
      },
      {
        tag: "ENTERPRISE",
        title: "Unified KPI Tracking Across Multiple Teams",
        description:
          "Created better alignment around metrics through centralized BI delivery.",
        image: "/logos/office3.jpg",
      },
    ],
  }),
  "data-engineering": createServiceEntry({
    breadcrumb: "Data Engineering",
    title: "DATA ENGINEERING SERVICES",
    heading: "Build data pipelines and platforms that support analytics, products, and scale.",
    description:
      "We help teams design data infrastructure, ETL workflows, and pipeline architecture that improve reliability, accessibility, and long-term growth.",
    label: "Data Engineering",
    useCasesLabel: "DATA SOLUTIONS",
    useCasesHeading: "Data Engineering Use Cases",
    useCasesDescription:
      "From ingestion pipelines to modern warehouse foundations, we build data systems that support analytics, reporting, and product development.",
    useCasesServices: [
      {
        title: "ETL and Data Pipelines",
        content:
          "Build reliable data ingestion and transformation workflows.\n\nWe help teams move data with better structure, monitoring, and maintainability across systems.",
      },
      {
        title: "Warehouse Architecture",
        content:
          "Design data platforms that support analytics and product needs at scale.\n\nWe focus on accessible data models, throughput, and infrastructure that can evolve over time.",
      },
    ],
    teamEyebrow: "Our data engineering team",
    teamHeading: "Why teams trust our data engineers:",
    teamDescription:
      "We help organizations create stronger data foundations for reporting, analytics, and product experiences through practical engineering discipline.",
    ctaTitle: "Need data engineering support that improves reliability and access?",
    ctaSubtitle: "Tell us about your pipelines, storage challenges, or data platform roadmap.",
    testimonialHeading: "Data engineering systems built for consistency and scale.",
    testimonialDescription:
      "Our data engineering work helps teams improve data movement, reporting reliability, and infrastructure readiness as demand grows.",
    highlightQuote:
      "They gave us a much stronger data foundation and made our reporting systems far more dependable.",
    highlightName: "Priya Nair",
    highlightRole: "Director of Data",
    highlightCompany: "MetricFlow",
    caseStudiesLabel: "DATA ENGINEERING CASE STUDIES",
    caseStudiesHeading: "Data platforms delivered for reliability and long-term use.",
    caseStudiesDescription:
      "We build data systems that reduce operational friction, improve accessibility, and support more confident analytics workflows.",
    caseStudyCards: [
      {
        tag: "ANALYTICS",
        title: "Built ETL Pipelines for Multi-Source Business Reporting",
        description:
          "Improved data availability and reduced manual preparation across analytics teams.",
        image: "/logos/office1.jpg",
      },
      {
        tag: "SaaS",
        title: "Modernized Warehouse Architecture for Product Analytics",
        description:
          "Created cleaner models and stronger pipeline stability for data consumers.",
        image: "/logos/office2.jpg",
      },
      {
        tag: "ENTERPRISE",
        title: "Improved Monitoring Across Critical Data Pipelines",
        description:
          "Strengthened visibility and reliability for essential reporting and operational flows.",
        image: "/logos/office3.jpg",
      },
    ],
  }),
  "ecommerce-development": createServiceEntry({
    breadcrumb: "eCommerce",
    title: "ECOMMERCE DEVELOPMENT SERVICES",
    heading: "Build ecommerce platforms that support growth, conversion, and smooth operations.",
    description:
      "We help retailers and digital brands create ecommerce experiences with strong performance, reliable integrations, and scalable customer journeys.",
    label: "eCommerce Development",
    useCasesLabel: "ECOMMERCE SOLUTIONS",
    useCasesHeading: "eCommerce Development Use Cases",
    useCasesDescription:
      "From storefront experiences to operational integrations, we build ecommerce systems that support merchandising, conversion, and growth.",
    useCasesServices: [
      {
        title: "Storefront Development",
        content:
          "Build ecommerce experiences optimized for browsing, conversion, and performance.\n\nWe support product discovery, checkout flows, and interfaces that keep customers moving.",
      },
      {
        title: "Commerce Integrations",
        content:
          "Connect ecommerce platforms to backend systems and business operations.\n\nWe help teams integrate inventory, fulfillment, payments, and reporting more cleanly.",
      },
    ],
    teamEyebrow: "Our ecommerce development team",
    teamHeading: "Why brands choose our ecommerce engineers:",
    teamDescription:
      "We help companies build ecommerce platforms that support customer growth, operational efficiency, and stable product delivery.",
    ctaTitle: "Need ecommerce support that improves customer experience and scale?",
    ctaSubtitle: "Tell us about your storefront, platform integrations, or conversion goals.",
    testimonialHeading: "eCommerce delivery that supports product, ops, and growth teams.",
    testimonialDescription:
      "Our ecommerce work helps organizations improve performance, reduce friction, and support more dependable digital commerce operations.",
    highlightQuote:
      "They helped us modernize the ecommerce experience without disrupting the business.",
    highlightName: "Maya Ellis",
    highlightRole: "VP of Digital Commerce",
    highlightCompany: "RetailSpring",
    caseStudiesLabel: "ECOMMERCE CASE STUDIES",
    caseStudiesHeading: "eCommerce platforms built for conversion and operations.",
    caseStudiesDescription:
      "We build commerce systems that improve user journeys, support core business workflows, and scale with demand.",
    caseStudyCards: [
      {
        tag: "RETAIL",
        title: "Built a High-Performance Storefront for a Growing Brand",
        description:
          "Improved user experience and supported conversion-focused product delivery.",
        image: "/logos/office1.jpg",
      },
      {
        tag: "ECOMMERCE",
        title: "Integrated Commerce Operations Across Payments and Inventory",
        description:
          "Reduced operational friction through cleaner platform and backend connections.",
        image: "/logos/office2.jpg",
      },
      {
        tag: "ENTERPRISE",
        title: "Modernized Commerce Systems for Multi-Region Growth",
        description:
          "Strengthened platform flexibility and maintainability for expanding digital operations.",
        image: "/logos/office3.jpg",
      },
    ],
  }),
  "ios-app-development": createServiceEntry({
    breadcrumb: "iOS",
    title: "IOS APP DEVELOPMENT SERVICES",
    heading: "Create iOS apps with strong performance, polished UX, and maintainable mobile architecture.",
    description:
      "We help teams design and build iOS applications that feel native, scale with product needs, and support dependable mobile delivery.",
    label: "iOS App Development",
    useCasesLabel: "IOS SOLUTIONS",
    useCasesHeading: "iOS App Development Use Cases",
    useCasesDescription:
      "From new product launches to mature app modernization, we build iOS solutions that balance experience quality with engineering sustainability.",
    useCasesServices: [
      {
        title: "Native iOS Apps",
        content:
          "Build native iOS products that deliver strong performance and platform-native experiences.\n\nWe support architecture, interface development, and integrations built for long-term mobile growth.",
      },
      {
        title: "App Modernization",
        content:
          "Improve existing iOS codebases for scale, maintainability, and release quality.\n\nWe help teams reduce friction in mobile delivery while strengthening the product foundation.",
      },
    ],
    teamEyebrow: "Our iOS development team",
    teamHeading: "Why teams choose our iOS engineers:",
    teamDescription:
      "We help organizations build iOS products that are dependable in production, maintainable across releases, and aligned with real product roadmaps.",
    ctaTitle: "Need iOS engineers who can support quality and delivery speed?",
    ctaSubtitle: "Tell us about your iPhone app roadmap, architecture, or UX goals.",
    testimonialHeading: "iOS delivery built for product quality and mobile scale.",
    testimonialDescription:
      "Our iOS work helps teams improve app stability, streamline releases, and create stronger user experiences over time.",
    highlightQuote:
      "They strengthened both the product experience and the engineering quality behind our iOS app.",
    highlightName: "Rachel Kim",
    highlightRole: "Mobile Product Lead",
    highlightCompany: "AppMotion",
    caseStudiesLabel: "IOS CASE STUDIES",
    caseStudiesHeading: "iOS products delivered for quality, speed, and maintainability.",
    caseStudiesDescription:
      "We build iOS applications that improve product experience, release reliability, and long-term development velocity.",
    caseStudyCards: [
      {
        tag: "MOBILE",
        title: "Built a Native iOS Experience for a Consumer Product",
        description:
          "Improved performance, interface quality, and release readiness across the app.",
        image: "/logos/office1.jpg",
      },
      {
        tag: "FINTECH",
        title: "Modernized iOS App Architecture for Faster Delivery",
        description:
          "Reduced technical friction and improved maintainability for an evolving mobile roadmap.",
        image: "/logos/office2.jpg",
      },
      {
        tag: "HEALTHTECH",
        title: "Improved Stability Across a Critical iOS Product",
        description:
          "Supported better release confidence and long-term product support.",
        image: "/logos/office3.jpg",
      },
    ],
  }),
  "mobile-app-development": createServiceEntry({
    breadcrumb: "Mobile",
    title: "MOBILE APP DEVELOPMENT SERVICES",
    heading: "Build mobile apps that deliver strong experiences across platforms and user journeys.",
    description:
      "We help organizations create mobile products with dependable performance, practical architecture, and user experiences built for long-term growth.",
    label: "Mobile App Development",
    useCasesLabel: "MOBILE SOLUTIONS",
    useCasesHeading: "Mobile App Development Use Cases",
    useCasesDescription:
      "From cross-platform products to platform-specific mobile experiences, we build apps that support scale, usability, and reliable delivery.",
    useCasesServices: [
      {
        title: "Cross-Platform Apps",
        content:
          "Build mobile applications that support efficient delivery across iOS and Android.\n\nWe focus on maintainability, product consistency, and performance across platforms.",
      },
      {
        title: "Mobile Product Modernization",
        content:
          "Improve mobile apps that need better stability, speed, or feature velocity.\n\nWe help teams strengthen mobile foundations without interrupting product momentum.",
      },
    ],
    teamEyebrow: "Our mobile app development team",
    teamHeading: "Why companies choose our mobile app engineers:",
    teamDescription:
      "We help organizations build mobile experiences that are practical to maintain, polished for users, and aligned with evolving product goals.",
    ctaTitle: "Need a mobile team that can support launch and long-term growth?",
    ctaSubtitle: "Tell us about your mobile roadmap, app quality goals, or platform strategy.",
    testimonialHeading: "Mobile app delivery built for quality, speed, and product fit.",
    testimonialDescription:
      "Our mobile work helps teams improve usability, reduce technical friction, and support stronger release cycles.",
    highlightQuote:
      "They gave us a mobile team that could move quickly while still thinking long-term about the product.",
    highlightName: "Chris Nolan",
    highlightRole: "Head of Mobile",
    highlightCompany: "FlowSync",
    caseStudiesLabel: "MOBILE CASE STUDIES",
    caseStudiesHeading: "Mobile apps delivered for performance and product growth.",
    caseStudiesDescription:
      "We build mobile products that improve user experience, release confidence, and team execution across platforms.",
    caseStudyCards: [
      {
        tag: "MOBILE",
        title: "Launched a Cross-Platform App for a Growing Digital Product",
        description:
          "Delivered a stronger user experience with a maintainable mobile foundation.",
        image: "/logos/office1.jpg",
      },
      {
        tag: "CONSUMER",
        title: "Improved Mobile Performance Across Core User Flows",
        description:
          "Reduced friction and improved reliability for high-usage app experiences.",
        image: "/logos/office2.jpg",
      },
      {
        tag: "ENTERPRISE",
        title: "Modernized Mobile Architecture to Support Faster Releases",
        description:
          "Strengthened team velocity and long-term maintainability across app delivery.",
        image: "/logos/office3.jpg",
      },
    ],
  }),
  "saas-development": createServiceEntry({
    breadcrumb: "SaaS",
    title: "SAAS DEVELOPMENT SERVICES",
    heading: "Build SaaS products that support growth, maintainability, and product velocity.",
    description:
      "We help teams create SaaS platforms with strong architecture, scalable delivery workflows, and user experiences that support long-term adoption.",
    label: "SaaS Development",
    useCasesLabel: "SAAS SOLUTIONS",
    useCasesHeading: "SaaS Development Use Cases",
    useCasesDescription:
      "From multi-tenant systems to product expansion initiatives, we build SaaS solutions that support growth without creating delivery bottlenecks.",
    useCasesServices: [
      {
        title: "Multi-Tenant Platforms",
        content:
          "Build SaaS platforms that support tenant isolation, scalability, and operational clarity.\n\nWe help teams create foundations that can grow with product demand and organizational complexity.",
      },
      {
        title: "Product Modernization",
        content:
          "Improve SaaS architecture and workflows for better delivery and maintainability.\n\nWe focus on reducing friction, supporting roadmap speed, and strengthening long-term product health.",
      },
    ],
    teamEyebrow: "Our SaaS development team",
    teamHeading: "Why SaaS companies choose our product engineers:",
    teamDescription:
      "We help SaaS teams strengthen architecture, improve release quality, and support the kind of product evolution that growth requires.",
    ctaTitle: "Need SaaS engineering support for scale and long-term product growth?",
    ctaSubtitle: "Tell us about your platform roadmap, tenant model, or delivery bottlenecks.",
    testimonialHeading: "SaaS delivery built for scale, speed, and maintainability.",
    testimonialDescription:
      "Our SaaS work helps organizations improve platform quality, delivery confidence, and the engineering foundation behind growing products.",
    highlightQuote:
      "They helped us scale the product without turning our platform into something fragile.",
    highlightName: "Kevin Rhodes",
    highlightRole: "Chief Product Officer",
    highlightCompany: "TenantFlow",
    caseStudiesLabel: "SAAS CASE STUDIES",
    caseStudiesHeading: "SaaS platforms delivered for scale and product momentum.",
    caseStudiesDescription:
      "We help SaaS teams build stronger product foundations, improve operations, and support long-term platform growth.",
    caseStudyCards: [
      {
        tag: "SaaS",
        title: "Built Multi-Tenant Capabilities for a Growing Product",
        description:
          "Improved platform flexibility and tenant support without sacrificing maintainability.",
        image: "/logos/office1.jpg",
      },
      {
        tag: "B2B",
        title: "Modernized Core SaaS Workflows to Support Faster Delivery",
        description:
          "Reduced friction across release cycles and improved internal development speed.",
        image: "/logos/office2.jpg",
      },
      {
        tag: "ENTERPRISE",
        title: "Improved Platform Reliability for High-Growth SaaS Operations",
        description:
          "Strengthened architecture and production readiness as customer demands increased.",
        image: "/logos/office3.jpg",
      },
    ],
  }),
  "backup-solutions": createServiceEntry({
    breadcrumb: "Backup",
    title: "BACKUP SOLUTIONS SERVICES",
    heading: "Build backup and recovery systems that protect data and reduce operational risk.",
    description:
      "We help organizations implement backup solutions and recovery workflows that support resilience, continuity, and stronger infrastructure operations.",
    label: "Backup Solutions",
    useCasesLabel: "BACKUP SOLUTIONS",
    useCasesHeading: "Backup Solutions Use Cases",
    useCasesDescription:
      "From business continuity to critical system recovery, we build backup solutions that improve resilience and support operational readiness.",
    useCasesServices: [
      {
        title: "Backup Architecture",
        content:
          "Design backup systems that support reliability and recovery objectives.\n\nWe help teams plan storage, redundancy, and restoration workflows that fit operational realities.",
      },
      {
        title: "Recovery Planning",
        content:
          "Create recovery processes that reduce downtime and support continuity.\n\nWe focus on practical backup validation, recovery readiness, and infrastructure resilience.",
      },
    ],
    teamEyebrow: "Our backup solutions team",
    teamHeading: "Why teams trust our backup and recovery specialists:",
    teamDescription:
      "We help organizations reduce data risk through practical backup engineering, stronger recovery planning, and more dependable operational workflows.",
    ctaTitle: "Need backup solutions that support real recovery readiness?",
    ctaSubtitle: "Tell us about your resilience goals, data protection needs, or infrastructure risks.",
    testimonialHeading: "Backup systems built for resilience and operational confidence.",
    testimonialDescription:
      "Our work helps teams protect critical systems and improve continuity planning through stronger backup and recovery capabilities.",
    highlightQuote:
      "They helped us move from basic backups to a recovery strategy we could actually rely on.",
    highlightName: "Martin Cole",
    highlightRole: "Infrastructure Director",
    highlightCompany: "SafeStack",
    caseStudiesLabel: "BACKUP CASE STUDIES",
    caseStudiesHeading: "Backup systems delivered for resilience and continuity.",
    caseStudiesDescription:
      "We help organizations improve backup architecture, recovery processes, and operational readiness across critical environments.",
    caseStudyCards: [
      {
        tag: "INFRASTRUCTURE",
        title: "Designed Backup Workflows for Business-Critical Systems",
        description:
          "Improved data protection and reduced recovery uncertainty for core operations.",
        image: "/logos/office1.jpg",
      },
      {
        tag: "ENTERPRISE",
        title: "Built Recovery Processes Around Key Platform Dependencies",
        description:
          "Strengthened continuity planning and restoration confidence across teams.",
        image: "/logos/office2.jpg",
      },
      {
        tag: "CLOUD",
        title: "Modernized Backup Operations for a Cloud-First Environment",
        description:
          "Improved operational discipline and visibility across backup infrastructure.",
        image: "/logos/office3.jpg",
      },
    ],
  }),
  "big-data": createServiceEntry({
    breadcrumb: "Big Data",
    title: "BIG DATA SERVICES",
    heading: "Build big data systems that support high-volume processing and scalable insight.",
    description:
      "We help teams design big data architecture and processing workflows that handle volume, complexity, and downstream analytics needs more effectively.",
    label: "Big Data",
    useCasesLabel: "BIG DATA SOLUTIONS",
    useCasesHeading: "Big Data Use Cases",
    useCasesDescription:
      "From event-heavy systems to analytics pipelines, we build big data foundations that support speed, scale, and maintainable operations.",
    useCasesServices: [
      {
        title: "Large-Scale Data Processing",
        content:
          "Build data systems that support high-volume ingestion and transformation.\n\nWe help teams design processing workflows that stay reliable under growing data demand.",
      },
      {
        title: "Analytics Infrastructure",
        content:
          "Create architecture that supports large-scale reporting and downstream analysis.\n\nWe focus on throughput, visibility, and maintainability across data platforms.",
      },
    ],
    teamEyebrow: "Our big data team",
    teamHeading: "Why teams choose our big data engineers:",
    teamDescription:
      "We help organizations build data systems that can scale, support analytics goals, and reduce operational complexity as volume increases.",
    ctaTitle: "Need big data support that can handle scale and complexity?",
    ctaSubtitle: "Tell us about your ingestion, processing, or large-scale analytics challenges.",
    testimonialHeading: "Big data systems built for throughput, clarity, and scale.",
    testimonialDescription:
      "Our big data work helps teams support growing data volume while improving reliability and downstream usability.",
    highlightQuote:
      "They helped us create a big data foundation that could keep pace with our growth.",
    highlightName: "Anya Patel",
    highlightRole: "Head of Data Platform",
    highlightCompany: "StreamMetric",
    caseStudiesLabel: "BIG DATA CASE STUDIES",
    caseStudiesHeading: "Big data platforms delivered for scale and operational control.",
    caseStudiesDescription:
      "We help organizations improve large-scale data handling, analytics readiness, and engineering sustainability across data platforms.",
    caseStudyCards: [
      {
        tag: "DATA",
        title: "Built High-Volume Processing Pipelines for Event Data",
        description:
          "Supported throughput growth while improving platform reliability and visibility.",
        image: "/logos/office1.jpg",
      },
      {
        tag: "ANALYTICS",
        title: "Improved Big Data Infrastructure for Faster Downstream Reporting",
        description:
          "Reduced bottlenecks and strengthened the path from raw data to business insight.",
        image: "/logos/office2.jpg",
      },
      {
        tag: "ENTERPRISE",
        title: "Modernized Large-Scale Data Workflows Across Systems",
        description:
          "Created cleaner architecture and stronger support for long-term growth.",
        image: "/logos/office3.jpg",
      },
    ],
  }),
  "cloud-applications": createServiceEntry({
    breadcrumb: "Cloud",
    title: "CLOUD APPLICATION SERVICES",
    heading: "Build cloud applications that are scalable, reliable, and easier to operate.",
    description:
      "We help teams create cloud-based applications with strong architecture, operational visibility, and infrastructure foundations built for growth.",
    label: "Cloud Applications",
    useCasesLabel: "CLOUD SOLUTIONS",
    useCasesHeading: "Cloud Application Use Cases",
    useCasesDescription:
      "From cloud-native product delivery to modernization initiatives, we build applications that support agility, reliability, and operational scale.",
    useCasesServices: [
      {
        title: "Cloud-Native Development",
        content:
          "Build applications designed for cloud environments from the start.\n\nWe help teams create services and workflows that support scalability, flexibility, and clearer operations.",
      },
      {
        title: "Cloud Modernization",
        content:
          "Move application architecture toward better cloud fit and maintainability.\n\nWe focus on deployment, resilience, and operational improvements that support long-term growth.",
      },
    ],
    teamEyebrow: "Our cloud application team",
    teamHeading: "Why teams choose our cloud engineers:",
    teamDescription:
      "We help organizations build cloud applications that are easier to maintain, easier to scale, and better aligned with business growth.",
    ctaTitle: "Need cloud application support for scale and operational stability?",
    ctaSubtitle: "Tell us about your cloud roadmap, modernization priorities, or architecture needs.",
    testimonialHeading: "Cloud application delivery built for scale and resilience.",
    testimonialDescription:
      "Our cloud application work helps teams improve deployment confidence, architecture quality, and operational readiness.",
    highlightQuote:
      "They helped us make the move to cloud-native delivery in a way our team could actually sustain.",
    highlightName: "Sean Wallace",
    highlightRole: "Platform Director",
    highlightCompany: "NimbusWorks",
    caseStudiesLabel: "CLOUD CASE STUDIES",
    caseStudiesHeading: "Cloud applications delivered for agility and long-term growth.",
    caseStudiesDescription:
      "We build cloud systems that improve operational flexibility, product delivery, and platform readiness as demand grows.",
    caseStudyCards: [
      {
        tag: "CLOUD",
        title: "Built Cloud-Native Services for a Modern Product Platform",
        description:
          "Improved scalability and deployment readiness with stronger cloud architecture.",
        image: "/logos/office1.jpg",
      },
      {
        tag: "SaaS",
        title: "Modernized Application Delivery for a Cloud-First Team",
        description:
          "Reduced friction and improved platform maintainability across releases.",
        image: "/logos/office2.jpg",
      },
      {
        tag: "ENTERPRISE",
        title: "Improved Operational Visibility Across Cloud Systems",
        description:
          "Created a more dependable application foundation for long-term platform growth.",
        image: "/logos/office3.jpg",
      },
    ],
  }),
  "crm-systems": createServiceEntry({
    breadcrumb: "CRM",
    title: "CRM SYSTEM DEVELOPMENT SERVICES",
    heading: "Build CRM systems that support sales, service, and stronger customer operations.",
    description:
      "We help organizations create and modernize CRM systems that improve workflow visibility, data consistency, and day-to-day business efficiency.",
    label: "CRM Systems",
    useCasesLabel: "CRM SOLUTIONS",
    useCasesHeading: "CRM System Use Cases",
    useCasesDescription:
      "From customer data workflows to business process automation, we build CRM solutions that support teams across sales and operations.",
    useCasesServices: [
      {
        title: "Custom CRM Workflows",
        content:
          "Build CRM experiences around your actual customer operations.\n\nWe help teams support lead management, service processes, and business visibility with practical system design.",
      },
      {
        title: "CRM Integrations",
        content:
          "Connect CRM systems to the rest of your product and business stack.\n\nWe support cleaner data movement and more reliable workflows across operational tools.",
      },
    ],
    teamEyebrow: "Our CRM systems team",
    teamHeading: "Why organizations choose our CRM engineers:",
    teamDescription:
      "We help businesses improve customer operations with CRM systems that are easier to use, easier to extend, and better aligned with internal workflows.",
    ctaTitle: "Need CRM support that improves customer operations and internal flow?",
    ctaSubtitle: "Tell us about your CRM platform, process bottlenecks, or integration needs.",
    testimonialHeading: "CRM delivery that supports customer operations and scale.",
    testimonialDescription:
      "Our CRM work helps teams improve visibility, reduce workflow friction, and create stronger system support around customer-facing operations.",
    highlightQuote:
      "They helped us make our CRM a useful business system instead of just another tool.",
    highlightName: "Olivia Hart",
    highlightRole: "Operations Lead",
    highlightCompany: "ClientBridge",
    caseStudiesLabel: "CRM CASE STUDIES",
    caseStudiesHeading: "CRM systems delivered for workflow clarity and business support.",
    caseStudiesDescription:
      "We help organizations improve CRM quality through cleaner processes, stronger integrations, and more dependable operational systems.",
    caseStudyCards: [
      {
        tag: "SALES",
        title: "Built CRM Workflows for a Growing Revenue Team",
        description:
          "Improved lead handling, process visibility, and day-to-day team efficiency.",
        image: "/logos/office1.jpg",
      },
      {
        tag: "OPERATIONS",
        title: "Integrated CRM Data Across Customer-Facing Systems",
        description:
          "Reduced manual effort and improved consistency across business workflows.",
        image: "/logos/office2.jpg",
      },
      {
        tag: "ENTERPRISE",
        title: "Modernized Legacy CRM Processes for Better Maintainability",
        description:
          "Created a stronger foundation for long-term customer operations and reporting.",
        image: "/logos/office3.jpg",
      },
    ],
  }),
  cybersecurity: createServiceEntry({
    breadcrumb: "Cybersecurity",
    title: "CYBERSECURITY SERVICES",
    heading: "Strengthen product and infrastructure security with practical cybersecurity support.",
    description:
      "We help organizations improve application security, infrastructure hardening, and operational security practices through hands-on engineering support.",
    label: "Cybersecurity",
    useCasesLabel: "SECURITY SOLUTIONS",
    useCasesHeading: "Cybersecurity Use Cases",
    useCasesDescription:
      "From secure architecture to operational hardening, we help teams improve cybersecurity readiness across products and infrastructure.",
    useCasesServices: [
      {
        title: "Application Security",
        content:
          "Improve security posture across product architecture and implementation.\n\nWe help teams identify practical security gaps and reduce risk through stronger engineering practices.",
      },
      {
        title: "Infrastructure Hardening",
        content:
          "Strengthen operational security across cloud and platform environments.\n\nWe support access controls, configuration discipline, and clearer risk management workflows.",
      },
    ],
    teamEyebrow: "Our cybersecurity team",
    teamHeading: "Why teams trust our cybersecurity specialists:",
    teamDescription:
      "We help organizations improve security without derailing product momentum, combining practical engineering work with stronger operational habits.",
    ctaTitle: "Need cybersecurity support that improves security and engineering confidence?",
    ctaSubtitle: "Tell us about your application, infrastructure, or operational security priorities.",
    testimonialHeading: "Security work built around practical delivery and lower risk.",
    testimonialDescription:
      "Our cybersecurity engagements help teams strengthen posture, improve visibility, and support more confident engineering operations.",
    highlightQuote:
      "They helped us improve our security posture in a way that actually fit how our team works.",
    highlightName: "Derrick Long",
    highlightRole: "Chief Information Security Officer",
    highlightCompany: "SecureTrail",
    caseStudiesLabel: "SECURITY CASE STUDIES",
    caseStudiesHeading: "Cybersecurity improvements delivered for products and infrastructure.",
    caseStudiesDescription:
      "We help teams reduce risk and improve operational discipline through practical cybersecurity engineering and stronger platform controls.",
    caseStudyCards: [
      {
        tag: "SECURITY",
        title: "Strengthened Application Security Across Critical Product Flows",
        description:
          "Improved controls and reduced risk around high-value product functionality.",
        image: "/logos/office1.jpg",
      },
      {
        tag: "CLOUD",
        title: "Improved Infrastructure Hardening for a Growing Platform",
        description:
          "Supported better operational controls and clearer security ownership across systems.",
        image: "/logos/office2.jpg",
      },
      {
        tag: "ENTERPRISE",
        title: "Created More Audit-Ready Security Operations",
        description:
          "Helped teams improve visibility, governance, and security-related engineering practices.",
        image: "/logos/office3.jpg",
      },
    ],
  }),
  devops: createServiceEntry({
    breadcrumb: "DevOps",
    title: "DEVOPS SERVICES",
    heading: "Improve software delivery speed and stability with stronger DevOps practices.",
    description:
      "We help teams improve CI/CD, observability, deployment workflows, and infrastructure processes that support reliable software delivery at scale.",
    label: "DevOps",
    useCasesLabel: "DEVOPS SOLUTIONS",
    useCasesHeading: "DevOps Use Cases",
    useCasesDescription:
      "From release automation to production visibility, we build DevOps foundations that help teams move faster with less operational risk.",
    useCasesServices: [
      {
        title: "CI/CD Pipelines",
        content:
          "Build delivery pipelines that improve release speed and confidence.\n\nWe help teams automate testing, deployment, and environment consistency around modern delivery workflows.",
      },
      {
        title: "Observability and Reliability",
        content:
          "Improve production visibility and operational response.\n\nWe support monitoring, alerting, and reliability practices that help teams operate platforms more confidently.",
      },
    ],
    teamEyebrow: "Our DevOps team",
    teamHeading: "Why engineering teams choose our DevOps specialists:",
    teamDescription:
      "We help organizations improve release quality, operational visibility, and infrastructure discipline through practical DevOps engineering support.",
    ctaTitle: "Need DevOps support that improves speed and operational control?",
    ctaSubtitle: "Tell us about your delivery pipelines, infrastructure workflows, or reliability goals.",
    testimonialHeading: "DevOps outcomes built for velocity, visibility, and stability.",
    testimonialDescription:
      "Our DevOps work helps teams reduce deployment friction, improve operations, and support more dependable release cycles.",
    highlightQuote:
      "They helped us turn DevOps into a real delivery advantage instead of a constant bottleneck.",
    highlightName: "Karan Shah",
    highlightRole: "Director of Platform Engineering",
    highlightCompany: "DeployWorks",
    caseStudiesLabel: "DEVOPS CASE STUDIES",
    caseStudiesHeading: "DevOps systems delivered for faster, more reliable releases.",
    caseStudiesDescription:
      "We help teams strengthen CI/CD, observability, and operational discipline so software delivery becomes more predictable and scalable.",
    caseStudyCards: [
      {
        tag: "PLATFORM",
        title: "Built CI/CD Pipelines for Faster Multi-Team Releases",
        description:
          "Improved consistency and release confidence across shared deployment workflows.",
        image: "/logos/office1.jpg",
      },
      {
        tag: "CLOUD",
        title: "Improved Monitoring and Alerting Across Critical Services",
        description:
          "Strengthened production visibility and response readiness for a growing platform.",
        image: "/logos/office2.jpg",
      },
      {
        tag: "ENTERPRISE",
        title: "Standardized Infrastructure Delivery for Better Reliability",
        description:
          "Created stronger operational discipline and easier platform maintenance.",
        image: "/logos/office3.jpg",
      },
    ],
  }),
  "digital-transformation": createServiceEntry({
    breadcrumb: "Transformation",
    title: "DIGITAL TRANSFORMATION SERVICES",
    heading: "Modernize systems, workflows, and delivery models through practical digital transformation.",
    description:
      "We help organizations modernize products, operations, and engineering workflows with transformation efforts grounded in implementation reality.",
    label: "Digital Transformation",
    useCasesLabel: "TRANSFORMATION SOLUTIONS",
    useCasesHeading: "Digital Transformation Use Cases",
    useCasesDescription:
      "From modernization programs to workflow redesign, we support digital transformation initiatives that need measurable progress and engineering follow-through.",
    useCasesServices: [
      {
        title: "Platform Modernization",
        content:
          "Improve legacy systems and delivery workflows through structured modernization.\n\nWe help teams reduce technical friction and create better foundations for future product work.",
      },
      {
        title: "Operational Transformation",
        content:
          "Support process and tooling improvements that enable stronger digital operations.\n\nWe focus on sustainable change that supports both internal teams and end-user outcomes.",
      },
    ],
    teamEyebrow: "Our digital transformation team",
    teamHeading: "Why organizations trust our transformation teams:",
    teamDescription:
      "We help companies turn broad transformation goals into practical, phased delivery programs with clearer outcomes and stronger engineering support.",
    ctaTitle: "Need digital transformation support that turns strategy into execution?",
    ctaSubtitle: "Tell us about your modernization goals, legacy systems, or operational change priorities.",
    testimonialHeading: "Transformation work grounded in execution, not just planning.",
    testimonialDescription:
      "Our digital transformation engagements help teams modernize systems and workflows with stronger delivery structure and measurable progress.",
    highlightQuote:
      "They helped us turn a vague transformation initiative into a roadmap the organization could actually execute.",
    highlightName: "Emma Wright",
    highlightRole: "Chief Transformation Officer",
    highlightCompany: "ModernPath",
    caseStudiesLabel: "TRANSFORMATION CASE STUDIES",
    caseStudiesHeading: "Digital transformation programs delivered with structure and follow-through.",
    caseStudiesDescription:
      "We help organizations modernize technology and processes through implementation-focused transformation work that supports real change.",
    caseStudyCards: [
      {
        tag: "MODERNIZATION",
        title: "Modernized Legacy Systems to Support New Product Delivery",
        description:
          "Reduced technical bottlenecks and improved the platform foundation for growth.",
        image: "/logos/office1.jpg",
      },
      {
        tag: "OPERATIONS",
        title: "Improved Internal Workflows Through Digital Process Transformation",
        description:
          "Created better coordination, visibility, and delivery consistency across teams.",
        image: "/logos/office2.jpg",
      },
      {
        tag: "ENTERPRISE",
        title: "Built a Practical Roadmap for Multi-Phase Transformation",
        description:
          "Helped stakeholders move from strategy discussions to implementation planning.",
        image: "/logos/office3.jpg",
      },
    ],
  }),
  "erp-development": createServiceEntry({
    breadcrumb: "ERP",
    title: "ERP DEVELOPMENT SERVICES",
    heading: "Build ERP systems that support operational complexity, visibility, and business scale.",
    description:
      "We help organizations create and modernize ERP solutions that support core workflows, system integration, and long-term business operations.",
    label: "ERP Development",
    useCasesLabel: "ERP SOLUTIONS",
    useCasesHeading: "ERP Development Use Cases",
    useCasesDescription:
      "From internal operations to multi-team process alignment, we build ERP systems that support efficiency, data consistency, and business growth.",
    useCasesServices: [
      {
        title: "Custom ERP Workflows",
        content:
          "Build ERP capabilities that reflect the way your business actually operates.\n\nWe help teams support finance, operations, inventory, and internal process management through structured system design.",
      },
      {
        title: "ERP Integration",
        content:
          "Connect ERP systems to the rest of the business technology stack.\n\nWe create cleaner data movement and more dependable workflows across operational systems.",
      },
    ],
    teamEyebrow: "Our ERP development team",
    teamHeading: "Why organizations choose our ERP engineers:",
    teamDescription:
      "We help businesses improve internal operations with ERP systems that are better aligned to workflows, easier to maintain, and more dependable over time.",
    ctaTitle: "Need ERP support that improves systems and internal operations?",
    ctaSubtitle: "Tell us about your ERP roadmap, process complexity, or integration challenges.",
    testimonialHeading: "ERP delivery that supports better business operations.",
    testimonialDescription:
      "Our ERP work helps organizations reduce workflow friction, improve visibility, and create stronger operational system foundations.",
    highlightQuote:
      "They helped us make our ERP system far more useful to the teams who depend on it every day.",
    highlightName: "Noah Bennett",
    highlightRole: "Operations Director",
    highlightCompany: "OpsBridge",
    caseStudiesLabel: "ERP CASE STUDIES",
    caseStudiesHeading: "ERP systems delivered for workflow alignment and scale.",
    caseStudiesDescription:
      "We help teams improve ERP quality through better system design, integration planning, and long-term operational support.",
    caseStudyCards: [
      {
        tag: "OPERATIONS",
        title: "Built ERP Workflows Around Real Business Processes",
        description:
          "Improved internal coordination and system usefulness across operational teams.",
        image: "/logos/office1.jpg",
      },
      {
        tag: "ENTERPRISE",
        title: "Integrated ERP Data Across Core Business Systems",
        description:
          "Reduced manual work and improved consistency in cross-functional processes.",
        image: "/logos/office2.jpg",
      },
      {
        tag: "MANUFACTURING",
        title: "Modernized ERP Architecture for Better Maintainability",
        description:
          "Created a stronger long-term foundation for internal operations and reporting.",
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
    trustedClients,
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
    teamSection: {
      eyebrow: "Our backend development team",
      supporterLabel: "Backed by",
      supporterValue: "4000+ devs",
      heading: "Why product teams choose our backend engineers:",
      description:
        "We help companies build backend systems that stay reliable under real production pressure. Our engineers focus on clean architecture, maintainable services, and infrastructure that supports long-term growth.",
      buttonLabel: "Speak With Our Team",
      tabs: [
        {
          title: "Senior backend specialists",
          content:
            "Our backend engineers bring deep experience across APIs, distributed systems, databases, and cloud-native architecture. Every engineer is vetted for code quality, system thinking, and practical delivery in production environments.",
        },
        {
          title: "Systems built for scale",
          content:
            "We design backend platforms that handle growth without becoming hard to maintain. That includes service boundaries, observability, deployment pipelines, and the reliability practices teams need as usage increases.",
        },
        {
          title: "Security and operational rigor",
          content:
            "From access control to infrastructure hardening and auditability, we help teams ship backend systems with security and governance built into day-to-day engineering work.",
        },
      ],
    },
    ctaBanner: {
      title: "Looking for a backend team with this kind of track record?",
      subtitle: "Tell us more about your platform, APIs, or infrastructure needs.",
      buttonLabel: "Talk to an expert",
      href: "https://www.bairesdev.com/start/basic-details/",
    },
    testimonials: {
      sectionLabel: "Client Testimonials",
      heading: "Get backend results you can build on.",
      description:
        "Our backend work stands up under production traffic, product growth, and long-term operational demands.",
      leftItems: [
        {
          industry: "Fintech",
          quote:
            "Their backend engineers helped us stabilize core transaction flows and improve confidence in every release. The team brought strong technical judgment and real ownership.",
          name: "Anika Patel",
          role: "VP of Engineering",
          photo: "/images/man1.png",
          companyType: "text",
          companyText: "PAYGRID",
          companyClassName:
            "text-[18px] font-semibold tracking-[0.2em] text-[#24456f]",
        },
        {
          industry: "SaaS",
          subtitle: "Scaled multi-tenant backend services for a growing platform",
          quote:
            "They were thoughtful about architecture, proactive in delivery, and strong at turning messy legacy services into something our team could confidently extend.",
          name: "Marcus Lee",
          role: "Director of Engineering",
          photo: "/images/man2.png",
          companyType: "text",
          companyText: "STACKLANE",
          companyClassName:
            "text-[18px] font-semibold tracking-[0.18em] text-[#24456f]",
          hoverDetails: {
            description:
              "We partnered with the client to modernize service boundaries, improve deployment confidence, and support a fast-growing tenant base without sacrificing maintainability.",
            tags: ["Node.js", "PostgreSQL", "AWS", "CI/CD", "Observability"],
            metrics: [
              { value: "8", label: "Team size" },
              { value: "99.95%", label: "Uptime" },
              { value: "14 mo", label: "Engagement" },
            ],
          },
        },
      ],
      rightItems: [
        {
          industry: "Enterprise Software",
          subtitle: "Reworked backend architecture for reliability and speed",
          quote:
            "They improved service performance, simplified releases, and gave us a backend foundation we could keep building on as the product matured.",
          name: "Nina Romero",
          role: "Head of Platform",
          photo: "/images/man3.png",
          companyType: "text",
          companyText: "coreOS",
          companyClassName: "text-[20px] font-semibold text-[#101828]",
          featured: true,
          hoverDetails: {
            description:
              "The engagement focused on backend modernization, clearer service ownership, and production visibility so the platform team could move faster with less risk.",
            tags: ["Java", "Spring Boot", "Kafka", "Docker", "Prometheus"],
            metrics: [
              { value: "12", label: "Team size" },
              { value: "35%", label: "Faster releases" },
              { value: "16 mo", label: "Engagement" },
            ],
          },
        },
        {
          industry: "HealthTech",
          quote:
            "The engineers integrated smoothly with our internal team and consistently delivered backend improvements that made the platform more stable and easier to support.",
          name: "Daniel Brooks",
          role: "CTO",
          photo: "/images/man4.png",
          companyType: "text",
          companyText: "MEDSYNC",
          companyClassName: "text-[20px] font-semibold text-[#101828]",
        },
      ],
      calloutText:
        "Join 500+ companies strengthening their backend systems with our engineers.",
      calloutButtonLabel: "Schedule a Call",
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
          image: "/logos/office1.jpg",
        },
        {
          tag: "SAAS",
          title: "Modernized Backend Services to Support Multi-Tenant Product Growth",
          description:
            "Refactored core services to improve tenant isolation, maintainability, and long-term scaling for a growing SaaS platform.",
          image: "/logos/office2.jpg",
        },
        {
          tag: "ENTERPRISE",
          title: "Re-Architected Core Systems for Better Reliability and Observability",
          description:
            "Improved system stability with cleaner service boundaries, stronger monitoring, and better visibility into production behavior.",
          image: "/logos/office3.jpg",
        },
      ],
    },
  },

  ...generatedServices,

  "web-development": {
    ...createServiceEntry({
      breadcrumb: "Web",
      title: "WEB DEVELOPMENT SERVICES",
      heading: "Build modern web products that are fast, scalable, and easy to evolve.",
      description:
        "We help teams create web applications with strong frontend architecture, reliable backend integration, and performance that supports real product growth.",
      label: "Web Development",
      useCasesLabel: "WEB SOLUTIONS",
      useCasesHeading: "Web Development Use Cases",
      useCasesDescription:
        "From digital platforms to customer-facing products, we build web applications that support performance, usability, and maintainable delivery.",
      useCasesServices: [
        {
          title: "Custom Web Applications",
          content:
            "Build web products designed around your business workflows and user needs.\n\nWe support frontend, backend, and architectural work that keeps applications flexible as requirements grow.",
        },
        {
          title: "Platform Modernization",
          content:
            "Improve existing web applications for speed, maintainability, and product growth.\n\nWe help teams modernize systems without losing momentum across delivery roadmaps.",
        },
      ],
      teamEyebrow: "Our web development team",
      teamHeading: "Why teams choose our web engineers:",
      teamDescription:
        "We help organizations build web products that support growth, improve user experience, and remain maintainable as product complexity increases.",
      ctaTitle: "Need web engineers who can support product growth from end to end?",
      ctaSubtitle: "Tell us about your web platform, architecture, or performance priorities.",
      testimonialHeading: "Web delivery built for product quality and scale.",
      testimonialDescription:
        "Our web work helps teams improve performance, support roadmap speed, and build stronger product foundations.",
      highlightQuote:
        "They gave us a web team that could move quickly while still thinking about long-term maintainability.",
      highlightName: "Maya Chen",
      highlightRole: "Head of Engineering",
      highlightCompany: "WebSpring",
      caseStudiesLabel: "WEB CASE STUDIES",
      caseStudiesHeading: "Web applications delivered for speed, usability, and growth.",
      caseStudiesDescription:
        "We build web products that support customer experience, engineering efficiency, and long-term platform evolution.",
      caseStudyCards: [
        {
          tag: "SaaS",
          title: "Built a Scalable Web Platform for Product Growth",
          description:
            "Improved maintainability and user experience across a growing software platform.",
          image: "/logos/office1.jpg",
        },
        {
          tag: "RETAIL",
          title: "Improved Web Performance Across High-Traffic Journeys",
          description:
            "Supported faster pages and stronger customer-facing digital experiences.",
          image: "/logos/office2.jpg",
        },
        {
          tag: "ENTERPRISE",
          title: "Modernized a Legacy Web Application for Better Delivery",
          description:
            "Reduced technical friction and improved product velocity for internal teams.",
          image: "/logos/office3.jpg",
        },
      ],
    }),
  },

  "mobile-development": {
    ...createServiceEntry({
      breadcrumb: "Mobile",
      title: "MOBILE DEVELOPMENT SERVICES",
      heading: "Create mobile products that balance performance, usability, and delivery speed.",
      description:
        "We help teams build mobile applications across platforms with strong engineering foundations, polished UX, and maintainable release workflows.",
      label: "Mobile Development",
      useCasesLabel: "MOBILE SOLUTIONS",
      useCasesHeading: "Mobile Development Use Cases",
      useCasesDescription:
        "From customer-facing apps to internal mobile tools, we build solutions that support quality, scale, and practical long-term maintenance.",
      useCasesServices: [
        {
          title: "Cross-Platform Delivery",
          content:
            "Build mobile products that support efficient delivery across platforms.\n\nWe help teams create consistent experiences while keeping architecture practical and maintainable.",
        },
        {
          title: "Native Mobile Experiences",
          content:
            "Support platform-specific mobile experiences where performance and UX matter most.\n\nWe focus on quality, release stability, and product fit across mobile roadmaps.",
        },
      ],
      teamEyebrow: "Our mobile development team",
      teamHeading: "Why teams choose our mobile engineers:",
      teamDescription:
        "We help organizations build mobile products that are reliable in production, maintainable across releases, and aligned with product goals.",
      ctaTitle: "Need mobile support for launch, growth, or modernization?",
      ctaSubtitle: "Tell us about your mobile strategy, app quality goals, or release bottlenecks.",
      testimonialHeading: "Mobile delivery built for product quality and long-term support.",
      testimonialDescription:
        "Our mobile work helps teams improve app stability, user experience, and release confidence across evolving products.",
      highlightQuote:
        "They helped us improve both the quality of our app and the way our team ships mobile features.",
      highlightName: "Emma Brooks",
      highlightRole: "Director of Mobile Product",
      highlightCompany: "MotionLabs",
      caseStudiesLabel: "MOBILE CASE STUDIES",
      caseStudiesHeading: "Mobile products delivered for usability, scale, and release confidence.",
      caseStudiesDescription:
        "We build mobile solutions that improve experience quality, reduce technical friction, and support long-term product growth.",
      caseStudyCards: [
        {
          tag: "MOBILE",
          title: "Built a Scalable Mobile Product for a Consumer Platform",
          description:
            "Improved user experience, release quality, and platform readiness across the app.",
          image: "/logos/office1.jpg",
        },
        {
          tag: "FINTECH",
          title: "Improved Mobile Reliability for Critical User Flows",
          description:
            "Supported stronger release confidence and better mobile performance under growth.",
          image: "/logos/office2.jpg",
        },
        {
          tag: "ENTERPRISE",
          title: "Modernized Mobile Delivery Workflows Across Teams",
          description:
            "Reduced friction in the release process and improved long-term maintainability.",
          image: "/logos/office3.jpg",
        },
      ],
    }),
  },
};
