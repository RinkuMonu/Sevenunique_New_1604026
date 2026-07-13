const trustedClients = [
  { img: "/logos/l1.png", alt: "Client logo 1" },
  { img: "/logos/l2.png", alt: "Client logo 2" },
  { img: "/logos/l3.png", alt: "Client logo 3" },
  { img: "/logos/l4.png", alt: "Client logo 4" },
  { img: "/logos/l5.png", alt: "Client logo 5" },
  { img: "/logos/l6.png", alt: "Client logo 6" },
];

const defaultExpertImages = [
  "/images/1.png",
  "/images/t1.png",
  "/images/t1.png",
  "/images/t3.png",
  "/images/man5.png",
];


const defaultToolsTech = {
  sectionLabel: "TOOLS & TECHNOLOGIES",
  heading: "Tools and technologies we use across projects:",
  description:
    "We use modern, production-ready tools to build scalable and maintainable systems.",

  items: [
    {
      title: "Cloud Platforms",
      description: "Deploy and scale applications efficiently.",
tools: [
  { name: "AWS", logo: "/tools/aws.png" },
  { name: "Google Cloud", logo: "/tools/gcp.png" },
  { name: "Azure", logo: "/tools/azure.png" },
]    },
    {
      title: "Backend Technologies",
      description: "Reliable backend systems and APIs.",
      tools: [{ name: "Go", logo: "/tools/go.png" },
  { name: "Ruby", logo: "/tools/ruby.png" },
  { name: "PHP", logo: "/tools/php.png" }],
    },
    {
      title: "Frontend Technologies",
      description: "Modern UI frameworks and tools.",
      tools: [{ name: "C++", logo: "/tools/cpp.png" },
  { name: ".NET", logo: "/tools/dotnet.png" },
  { name: "Scala", logo: "/tools/scala.png" }],
    },
    {
      title: "DevOps & CI/CD",
      description: "Automation and deployment pipelines.",
      tools: [{ name: "Rust", logo: "/tools/rust.png" },
  { name: "Elixir", logo: "/tools/elixir.png" }],
    },
  ],
};

function createExpertsSection({
  serviceLine,
  heading,
  description,
  experts,
  ctaTitle,
  buttonLabel = "Talk to an expert",
  href = "/schedule-a-call-page",
}) {
  return {
    heading:
      heading ||
      `Meet the ${serviceLine.toLowerCase()} experts behind our best work.`,
    description,
    experts: (experts || []).map((expert, index) => ({
      image: expert.image || defaultExpertImages[index % defaultExpertImages.length],
      ...expert,
    })),
    cta: {
      title:
        ctaTitle ||
        `Onboard a ${serviceLine.toLowerCase()} team in weeks, not months.`,
      buttonLabel,
      href,
    },
  };
}

function createCompanyTrustSection({
  eyebrow = "ABOUT SEVEN UNIQUE",
  heading = "Why work with Seven Unique? We're trusted by the India's top tech teams.",
  description = "Seven Unique is a fintech company...",
  stats,
  image = "/logos/map.png",
} = {}) {
  return {
    eyebrow,
    heading,
    description,
    stats:
      stats || [
        { value: "450+", label: "Projects Delivered" },
        { value: "3500+", label: "Developers On Staff" },
        { value: "96%", label: "Client Retention Rate" },
        { value: "500+", label: "Active Clients" },
      ],
    image, // ✅ RETURN IMAGE
  };
}


function createServiceEntry({
  seo,
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
  expertsSection,
  companyTrustSection = createCompanyTrustSection(),
faq = null,
  // ✅ ADD HERE

   toolsTech = null, 
  workSection = {
    eyebrow: "HOW WE WORK",
    heading: "Here's what makes us easy to work with and hard to replace:",
    description:
      "From code quality to compliance, we’ve optimized every part of how we work to support high-performing engineering teams.",

    tabs: [
      {
        label: "Vetted Senior Talent",
        title: "VETTED SENIOR TALENT",
        heading:
          "We hire the top 1% of over two million applicants, so you only work with the best.",
        description:
          "We give you engineers who've already proven they can deliver.",
      },
      {
        label: "Timezone Aligned",
        title: "TIMEZONE ALIGNED",
        heading: "Work seamlessly with engineers in your timezone.",
        description: "No delays, no async friction.",
      },
      {
        label: "Proficient in English",
        title: "ENGLISH PROFICIENCY",
        heading: "Clear communication at every step.",
        description: "Our engineers are fluent in English.",
      },
      {
        label: "Full-stack Capabilities",
        title: "FULL STACK",
        heading: "End-to-end development expertise.",
        description: "Frontend, backend, DevOps — all covered.",
      },
      {
        label: "Scalable Teams",
        title: "SCALABILITY",
        heading: "Scale teams up or down quickly.",
        description: "Flexible hiring without delays.",
      },
    ],

    card: {
      cta: "Talk to an expert",
      subText: "Work with our backend development experts.",
    },
  },
  industrySection = {
  eyebrow: "BACKEND SOLUTIONS",
  heading: "Build with backend engineers who have experience in your industry.",
  description:
    "We've delivered projects across 130+ industry sectors. You won't have to spend weeks getting us up to speed.",

  items: [
    {
      label: "Financial Services",
      title: "Financial Services",
      description:
        "Build backend systems that process transactions securely, manage risk calculations, and support regulatory compliance.",
      image: "/logos/office1.jpeg",
      points: [
        "Core banking platform backends",
        "Payment processing systems",
        "Real-time fraud detection engines",
        "Trading platform infrastructure",
        "Risk analytics processing systems",
        "KYC/AML workflow automation",
      ],
    },
    {
      label: "Healthcare & Life Sciences",
      title: "Healthcare & Life Sciences",
      description: "Secure backend systems for healthcare platforms.",
      image: "/logos/office2.png",
      points: [
        "Patient data systems",
        "Medical APIs",
        "Compliance workflows",
        "Healthcare analytics",
      ],
    },
  ],
},
processSection = {
  eyebrow: "OUR DELIVERY PROCESS",

  heading:
    "How we transform ideas into scalable digital products and business solutions:",

  description:
    "Our proven delivery framework helps organizations launch, scale, and optimize digital products efficiently while maintaining quality, security, and long-term business value.",

  image: "/logos/office3.png",

  steps: [
    {
      title: "Discovery & Strategy",
      description:
        "We collaborate with stakeholders to understand business objectives, user needs, technical requirements, and success metrics before defining the roadmap.",
    },

    {
      title: "Research & Solution Design",
      description:
        "Our experts design the optimal solution architecture, workflows, user experiences, and technology stack tailored to your project goals.",
    },

    {
      title: "Planning & Roadmapping",
      description:
        "We define project milestones, delivery timelines, resource allocation, and implementation priorities to ensure smooth execution.",
    },

    {
      title: "Development & Implementation",
      description:
        "Our teams build, integrate, and configure solutions using modern technologies and best practices while maintaining transparency throughout the process.",
    },

    {
      title: "Testing & Quality Assurance",
      description:
        "Every solution undergoes comprehensive testing, validation, performance optimization, and security reviews to ensure production readiness.",
    },

    {
      title: "Deployment & Launch",
      description:
        "We manage deployment, release planning, infrastructure setup, and go-live activities to ensure a seamless launch experience.",
    },

    {
      title: "Monitoring & Optimization",
      description:
        "After launch, we continuously monitor performance, gather insights, and optimize the solution to maximize efficiency and user satisfaction.",
    },

    {
      title: "Support & Growth",
      description:
        "We provide ongoing maintenance, enhancements, scaling support, and strategic guidance to help your business grow with confidence.",
    },
  ],
},

  
}) {
  const backendServicesItems = (useCasesServices || []).map((service) => ({
    title: service.title,
    content: service.content,
  }));

  return {
 
  seo,

  aiServicesSection: {
    sectionLabel: "SERVICES WE OFFER",
    heading: "Services We Offer",
    description:
      "We build practical AI solutions that help businesses automate workflows, improve efficiency, and create intelligent digital experiences.",

    services: [
      {
        title: "AI Chatbot Development",
        image: "/services/chatbot.jpg",
        points: [
          "Custom AI-powered chatbots",
          "Website & WhatsApp assistants",
          "24/7 customer support automation",
        ],
      },
      {
        title: "Generative AI Solutions",
        image: "/services/generative-ai.jpg",
        points: [
          "Content generation tools",
          "Text, image & code generation",
          "Business process automation",
        ],
      },
      {
        title: "AI Agent Development",
        image: "/services/ai-agent.jpg",
        points: [
          "Autonomous AI agents",
          "Workflow automation",
          "Multi-agent systems",
        ],
      },
      {
        title: "Machine Learning Solutions",
        image: "/services/ml.jpg",
        points: [
          "Predictive analytics",
          "Recommendation systems",
          "Custom ML model development",
        ],
      },
      {
        title: "Computer Vision",
        image: "/services/computer-vision.jpg",
        points: [
          "Object detection systems",
          "Image & video analysis",
          "OCR and facial recognition",
        ],
      },
      {
        title: "Natural Language Processing",
        image: "/services/nlp.jpg",
        points: [
          "Sentiment analysis",
          "Language translation",
          "Text summarization & classification",
        ],
      },
    ],
  },

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
toolsTech: toolsTech ?? (typeof defaultToolsTech !== "undefined" ? defaultToolsTech : null),
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


    faq: faq || {
  sectionLabel: "FAQ",
  heading: `Frequently asked questions about ${label}`,
  items: [
    {
      question: `What does your ${label.toLowerCase()} team handle?`,
      answer: "We handle architecture, development, scaling, and maintenance.",
    },
    {
      question: "How fast can we start?",
      answer: "We usually start within a few weeks.",
    },
    {
      question: "Do you provide support?",
      answer: "Yes, we provide long-term support.",
    },
  ],
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
          photo: "/images/1.png",
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
          photo: "/images/t1.png",
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
          photo: "/images/t1.png",
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
          photo: "/images/t3.png",
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

    companyTrustSection,
    workSection,
    industrySection, // ✅ ADD THIS LINE

    processSection,
    expertsSection: createExpertsSection({
      serviceLine: label,
      experts: [
  {
    name: "Aarav Sharma",
    role: "Sr. Backend Engineer",
    experience: "11 years of experience",
    skills: ["Python", "Node.js", "PostgreSQL"],
    certifications: [
      "AWS Certified Solutions Architect – Professional",
      "Microsoft Certified: Azure Developer Associate",
    ],
  },
  {
    name: "Rohan Mehta",
    role: "Sr. Backend Architect",
    experience: "14 years of experience",
    skills: ["Kubernetes", "Terraform", "AWS"],
    certifications: [
      "AWS Certified Solutions Architect – Professional",
      "Google Professional Cloud Architect",
    ],
  },
  {
    name: "Priyansh Verma",
    role: "Sr. Database Engineer",
    experience: "9 years of experience",
    skills: ["PostgreSQL", "MongoDB", "Redis"],
    certifications: [
      "MongoDB Associate DBA",
      "Oracle Database Administration",
    ],
  },
  {
    name: "Ananya Kapoor",
    role: "Sr. API Engineer",
    experience: "10 years of experience",
    skills: ["Kong", "Postman", "Node.js"],
    certifications: [
      "AWS Certified Developer – Associate",
      "Kong Gateway Certified Associate",
    ],
  },
  {
    name: "Vikram Singh",
    role: "Sr. DevOps Engineer",
    experience: "12 years of experience",
    skills: ["Docker", "Jenkins", "GitHub Actions"],
    certifications: [
      "Certified Kubernetes Administrator",
      "HashiCorp Certified: Terraform Associate",
    ],
  },
]
    })
  };
}

const generatedServices = {
  "cms-development": createServiceEntry({
    breadcrumb: "CMS",
   title: "CMS DEVELOPMENT SERVICES",

heading: "Empower your team with flexible and scalable CMS solutions.",

description:
  "We develop custom content management systems that simplify content publishing, streamline workflows, and ensure exceptional performance across digital channels.",
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
        image: "/logos/office1.jpeg",
      },
      {
        tag: "ECOMMERCE",
        title: "Migrated Legacy CMS Workflows to a Headless Stack",
        description:
          "Improved flexibility for marketing teams while supporting modern frontend delivery.",
        image: "/logos/office2.png",
      },
      {
        tag: "ENTERPRISE",
        title: "Centralized Content Operations Across Regional Teams",
        description:
          "Created a governed CMS setup that scaled across multiple markets and editorial groups.",
        image: "/logos/office3.png",
      },
    ],
  }),
 blockchain: createServiceEntry({
  breadcrumb: "Blockchain",

  title: "BLOCKCHAIN DEVELOPMENT SERVICES",

  heading: "Build secure, scalable blockchain solutions for the future of digital business.",

  description:
    "We design and develop blockchain-powered applications, smart contracts, and decentralized platforms that enhance transparency, security, and operational efficiency.",

  label: "Blockchain Development",

  useCasesLabel: "BLOCKCHAIN SOLUTIONS",

  useCasesHeading: "Blockchain Development Use Cases",

  useCasesDescription:
    "From decentralized applications to enterprise blockchain platforms, we deliver solutions that create trust, automate processes, and unlock new business opportunities.",

  useCasesServices: [
    {
      title: "Smart Contract Development",
      content:
        "Create secure and reliable smart contracts tailored to your business requirements.\n\nOur experts develop, test, and optimize contract logic to ensure transparency, efficiency, and risk mitigation.",
    },
    {
      title: "Blockchain Application Development",
      content:
        "Build end-to-end blockchain solutions with seamless user experiences.\n\nWe develop decentralized applications, wallet integrations, and blockchain infrastructures that support scalable growth.",
    },
  ],

  teamEyebrow: "Our blockchain development team",

  teamHeading: "Why businesses choose our blockchain experts:",

  teamDescription:
    "We combine deep blockchain expertise with proven engineering practices to deliver secure, scalable, and production-ready solutions that drive measurable value.",

  ctaTitle: "Ready to turn your blockchain vision into reality?",

  ctaSubtitle:
    "Let's discuss your smart contracts, decentralized applications, tokenization strategy, or blockchain platform requirements.",

  testimonialHeading: "Blockchain solutions built for real-world success.",

  testimonialDescription:
    "Our focus is on delivering reliable, secure, and scalable blockchain products that create lasting business impact.",

  highlightQuote:
    "Their team transformed our blockchain concept into a secure, scalable platform that exceeded expectations.",

  highlightName: "Victor Hale",

  highlightRole: "Head of Product",

  highlightCompany: "LedgerWave",

  caseStudiesLabel: "BLOCKCHAIN CASE STUDIES",

  caseStudiesHeading: "Driving innovation through blockchain technology.",

  caseStudiesDescription:
    "Explore how we've helped organizations launch secure blockchain products, streamline operations, and create new digital opportunities.",

  caseStudyCards: [
    {
      tag: "FINTECH",
      title: "Developed Secure Smart Contract Infrastructure for a Digital Finance Platform",
      description:
        "Implemented automated transaction workflows with enhanced security and compliance controls.",
      image: "/logos/office1.jpeg",
    },
    {
      tag: "WEB3",
      title: "Built a Decentralized Identity and Wallet Management Solution",
      description:
        "Created seamless authentication and digital asset management experiences for users.",
      image: "/logos/office2.png",
    },
    {
      tag: "ENTERPRISE",
      title: "Modernized Business Operations with Enterprise Blockchain Technology",
      description:
        "Enabled transparent, auditable workflows while improving efficiency across distributed systems.",
      image: "/logos/office3.png",
    },
  ],
}),
 "frontend-development": createServiceEntry({
  breadcrumb: "Frontend",
  title: "FRONT-END DEVELOPMENT SERVICES",
  heading: "Build exceptional digital experiences with modern frontend engineering.",
  description:
    "We create fast, responsive, and scalable user interfaces that combine seamless user experiences with maintainable frontend architectures.",
  label: "Frontend Development",
  useCasesLabel: "FRONTEND SOLUTIONS",
  useCasesHeading: "Frontend Development Use Cases",
  useCasesDescription:
    "From customer-facing platforms to enterprise applications, we build frontend solutions that enhance usability, performance, and long-term scalability.",
  useCasesServices: [
    {
      title: "Web Application Development",
      content:
        "Create engaging and high-performing web interfaces.\n\nWe build responsive applications that deliver intuitive user experiences across devices and platforms.",
    },
    {
      title: "Design Systems & Component Libraries",
      content:
        "Establish consistency with reusable UI foundations.\n\nWe develop scalable design systems and component libraries that improve collaboration and accelerate development.",
    },
  ],
  teamEyebrow: "Our frontend development team",
  teamHeading: "Why businesses choose our frontend specialists:",
  teamDescription:
    "We combine design precision with engineering excellence to create frontend experiences that delight users and scale with business growth.",
  ctaTitle: "Ready to build a frontend experience users will love?",
  ctaSubtitle:
    "Tell us about your application, user experience goals, or frontend modernization plans.",
  testimonialHeading: "Frontend solutions built for performance and engagement.",
  testimonialDescription:
    "Our frontend development approach focuses on usability, speed, accessibility, and long-term maintainability.",
  highlightQuote:
    "Their team transformed our user experience and helped us deliver a faster, more intuitive product.",
  highlightName: "Sophie Turner",
  highlightRole: "Head of Product Design",
  highlightCompany: "BrightPixel",
  caseStudiesLabel: "FRONTEND CASE STUDIES",
  caseStudiesHeading: "Frontend experiences designed for growth and performance.",
  caseStudiesDescription:
    "We help organizations create modern digital products that improve engagement, increase conversions, and support future scalability.",
  caseStudyCards: [
    {
      tag: "SaaS",
      title: "Built a Modern Frontend Platform for a Growing SaaS Business",
      description:
        "Improved usability, consistency, and development velocity through reusable components.",
      image: "/logos/office1.jpeg",
    },
    {
      tag: "RETAIL",
      title: "Optimized User Experience Across High-Traffic E-Commerce Pages",
      description:
        "Enhanced responsiveness and customer engagement with a performance-first approach.",
      image: "/logos/office2.png",
    },
    {
      tag: "ENTERPRISE",
      title: "Created a Scalable Design System for Multiple Product Teams",
      description:
        "Standardized UI delivery and accelerated development across business units.",
      image: "/logos/office3.png",
    },
  ],
}),

"machine-learning": createServiceEntry({
  breadcrumb: "Machine Learning",
  title: "MACHINE LEARNING SERVICES",
  heading: "Unlock business intelligence with advanced machine learning solutions.",
  description:
    "We design, develop, and deploy machine learning systems that transform data into actionable insights, automation, and competitive advantage.",
  label: "Machine Learning",
  useCasesLabel: "ML SOLUTIONS",
  useCasesHeading: "Machine Learning Use Cases",
  useCasesDescription:
    "From predictive analytics to intelligent automation, we build machine learning solutions that deliver measurable business outcomes.",
  useCasesServices: [
    {
      title: "Predictive Analytics",
      content:
        "Leverage data-driven forecasting for smarter decisions.\n\nWe develop machine learning models that identify patterns, predict outcomes, and support business growth.",
    },
    {
      title: "MLOps & Deployment",
      content:
        "Scale machine learning beyond experimentation.\n\nWe implement deployment, monitoring, and retraining workflows that keep models reliable and effective in production.",
    },
  ],
  teamEyebrow: "Our machine learning team",
  teamHeading: "Why organizations trust our ML experts:",
  teamDescription:
    "We help businesses transform data into intelligent systems that improve efficiency, enhance decision-making, and drive innovation.",
  ctaTitle: "Ready to turn your data into a competitive advantage?",
  ctaSubtitle:
    "Let's discuss your machine learning initiatives, predictive analytics needs, or AI-driven product ideas.",
  testimonialHeading: "Machine learning solutions built for measurable impact.",
  testimonialDescription:
    "Our machine learning services focus on delivering scalable systems that generate real business value.",
  highlightQuote:
    "Their expertise helped us move from raw data to actionable intelligence that transformed our operations.",
  highlightName: "Priya Nair",
  highlightRole: "Data Science Lead",
  highlightCompany: "SignalWorks",
  caseStudiesLabel: "ML CASE STUDIES",
  caseStudiesHeading: "Machine learning projects delivering real business outcomes.",
  caseStudiesDescription:
    "We help organizations apply machine learning to solve complex challenges and unlock new opportunities.",
  caseStudyCards: [
    {
      tag: "ANALYTICS",
      title: "Developed Predictive Forecasting Models for Business Planning",
      description:
        "Improved forecasting accuracy and enabled more informed strategic decisions.",
      image: "/logos/office1.jpeg",
    },
    {
      tag: "SaaS",
      title: "Built Recommendation Engines to Increase User Engagement",
      description:
        "Delivered personalized experiences that improved retention and product adoption.",
      image: "/logos/office2.png",
    },
    {
      tag: "ENTERPRISE",
      title: "Implemented Scalable MLOps Workflows for Production AI Systems",
      description:
        "Enhanced model monitoring, deployment reliability, and operational efficiency.",
      image: "/logos/office3.png",
    },
  ],
}),

"qa-testing": createServiceEntry({
   seo: {
    title: "QA Testing & Automation Services Solutions | SevenUnique",
    description:
      "Improve software quality with manual testing, test automation, performance testing, security validation, and structured quality assurance for scalable growth.",
  },
  breadcrumb: "QA",
  title: "QA TESTING & AUTOMATION SERVICES",
  heading: "Deliver reliable software with comprehensive QA and test automation.",
  description:
    "We help organizations improve software quality through structured testing strategies, automation frameworks, and continuous quality assurance processes.",
  label: "QA Testing & Automation",
  useCasesLabel: "QA SOLUTIONS",
  useCasesHeading: "QA and Automation Use Cases",
  useCasesDescription:
    "From manual testing to enterprise-scale automation, we create quality assurance processes that reduce risk and accelerate releases.",
  useCasesServices: [
    {
      title: "Quality Assurance Testing",
      content:
        "Ensure software quality across every release cycle.\n\nWe perform comprehensive testing to validate functionality, usability, performance, and reliability.",
    },
    {
      title: "Test Automation Solutions",
      content:
        "Accelerate delivery with automated quality workflows.\n\nWe build scalable automation frameworks that improve test coverage and reduce repetitive manual effort.",
    },
  ],
  teamEyebrow: "Our QA and automation team",
  teamHeading: "Why businesses trust our QA specialists:",
  teamDescription:
    "We help organizations achieve higher release confidence through robust testing strategies, automation, and continuous quality improvement.",
  ctaTitle: "Looking to improve release confidence and product quality?",
  ctaSubtitle:
    "Tell us about your testing challenges, automation goals, or software quality requirements.",
  testimonialHeading: "Quality assurance that supports faster, safer releases.",
  testimonialDescription:
    "Our QA services help teams reduce defects, improve stability, and deliver better user experiences.",
  highlightQuote:
    "Their QA processes significantly improved our release quality and reduced production issues.",
  highlightName: "Aaron Cole",
  highlightRole: "Engineering Manager",
  highlightCompany: "LaunchGrid",
  caseStudiesLabel: "QA CASE STUDIES",
  caseStudiesHeading: "Quality programs built for reliability and scale.",
  caseStudiesDescription:
    "We help organizations strengthen product quality through structured testing and intelligent automation.",
  caseStudyCards: [
    {
      tag: "SaaS",
      title: "Implemented Automated Regression Testing for Core Products",
      description:
        "Reduced manual effort and increased confidence in every release cycle.",
      image: "/logos/office1.jpeg",
    },
    {
      tag: "FINTECH",
      title: "Enhanced Testing Coverage for Critical Financial Workflows",
      description:
        "Improved reliability and compliance across high-risk transaction processes.",
      image: "/logos/office2.png",
    },
    {
      tag: "ENTERPRISE",
      title: "Established Enterprise-Wide QA Standards and Automation",
      description:
        "Created consistent testing practices and improved release predictability.",
      image: "/logos/office3.png",
    },
  ],
}),
  "ui-ux-design": createServiceEntry({
     seo: {
    title: "UI UX Design Services for Digital Products | SevenUnique",
    description:
      "Create intuitive digital experiences with UI UX design services covering user research, wireframes, prototypes, design systems, and product interfaces.",
  },
  breadcrumb: "UI/UX",
  title: "UI/UX DESIGN SERVICES",
  heading: "Create user experiences that engage, convert, and inspire.",
  description:
    "We design intuitive digital products that combine user-centered experiences, modern interfaces, and scalable design systems to drive business growth.",
  label: "UI/UX Design",
  useCasesLabel: "DESIGN SOLUTIONS",
  useCasesHeading: "UI/UX Design Use Cases",
  useCasesDescription:
    "From new product concepts to enterprise redesigns, we create digital experiences that improve usability, strengthen engagement, and support long-term success.",
  useCasesServices: [
    {
      title: "User Experience Design",
      content:
        "Design seamless user journeys that make digital products simple and enjoyable to use.\n\nWe conduct research, map workflows, create wireframes, and develop intuitive experiences tailored to user needs.",
    },
    {
      title: "Design Systems & UI Frameworks",
      content:
        "Build scalable design foundations for consistent product experiences.\n\nWe create reusable design systems and component libraries that improve collaboration, accessibility, and development efficiency.",
    },
  ],
  teamEyebrow: "Our UI/UX design team",
  teamHeading: "Why businesses choose our design experts:",
  teamDescription:
    "We blend creativity, strategy, and usability to create digital experiences that delight users while supporting business objectives and technical implementation.",
  ctaTitle: "Ready to transform your product experience?",
  ctaSubtitle:
    "Tell us about your design challenges, product vision, or user experience goals.",
  testimonialHeading: "Design solutions that drive engagement and growth.",
  testimonialDescription:
    "Our UI/UX design services help organizations improve usability, strengthen customer satisfaction, and create memorable digital experiences.",
  highlightQuote:
    "Their design expertise helped us simplify complex workflows and create a product our users genuinely enjoy using.",
  highlightName: "Laura Finch",
  highlightRole: "VP of Product",
  highlightCompany: "Northbeam",
  caseStudiesLabel: "DESIGN CASE STUDIES",
  caseStudiesHeading: "Digital experiences designed for impact and scalability.",
  caseStudiesDescription:
    "We help organizations build intuitive, visually engaging products that improve adoption, increase retention, and support business growth.",
  caseStudyCards: [
    {
      tag: "SaaS",
      title: "Redesigned a Complex SaaS Platform for Better User Adoption",
      description:
        "Improved navigation, workflow efficiency, and user satisfaction through a user-centered redesign.",
      image: "/logos/office1.jpeg",
    },
    {
      tag: "FINTECH",
      title: "Created a Scalable Design System for a Financial Platform",
      description:
        "Established consistent UI patterns that accelerated product development and improved accessibility.",
      image: "/logos/office2.png",
    },
    {
      tag: "ENTERPRISE",
      title: "Enhanced Enterprise Workflow Experiences Through UX Research",
      description:
        "Optimized information architecture and interaction design to improve productivity and ease of use.",
      image: "/logos/office3.png",
    },
  ],
}),
};



export const serviceData = {
  "ai-development": {
 seo: {
    title: "AI Development Services Solutions Solutions | SevenUnique",
    description:
      "Build custom AI solutions, generative AI applications, intelligent automation, and scalable AI systems designed around your business for scalable growth.",
  },

    sections: {
      trustedClientsStrip: true,
    },
    testimonialHighlight: {
      quote:
        "Their engineers perform at very high standards. We've had a strong relationship for almost 7 years.",
      name: "Prateek Garg",
      role: "EVP of Engineering",
      companyName: "NextRoll",
      companyLogo: "/logos/nr.png",
      personImage: "/images/10.png",
      summary:
        "The best partnerships are the ones you do not have to worry about. We deliver the kind of technical execution and reliability that builds long-term trust and consistent results.",
    },


  faq: {
  sectionLabel: "FAQ",
  heading: "Frequently asked questions about AI development",
  items: [
    {
      question: "What AI services do you offer?",
      answer:
        "We build AI systems including LLM applications, automation workflows, and custom AI integrations tailored to business needs.",
    },
    {
      question: "How long does an AI project take?",
      answer:
        "It depends on complexity, but most projects range from a few weeks to a few months.",
    },
    {
      question: "Do you provide ongoing AI support?",
      answer:
        "Yes, we help with scaling, monitoring, and improving AI systems over time.",
    },
  ],
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

heading: "Partner with AI specialists driving innovation for modern businesses.",

description:
  "We build intelligent AI solutions that move beyond prototypes. Our team helps organizations leverage generative AI, custom AI models, and autonomous AI systems to automate processes, enhance customer experiences, and accelerate growth.",

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
          image: "/logos/office1.jpeg",

        },
        {
          tag: "AUDIO AND VIDEO MEDIA",
          title: "Automated GenAI Video Integration for HubSpot Campaigns",
          description:
            "Built a generative video pipeline that connected campaign systems, reduced manual production work, and accelerated content delivery.",
          image: "/logos/office2.png",

        },
        {
          tag: "TECHNOLOGY",
          title: "Built an IDE That Simplifies AI Pipeline Prototyping",
          description:
            "Designed a developer workflow that made AI experimentation easier, faster, and more structured for internal engineering teams.",
          image: "/logos/office3.png",

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

  heading: "Reliable backend systems built for scale and performance.",

  description:
    "We develop secure, scalable, and cloud-ready backend infrastructures that power seamless user experiences, accelerate development, and support future growth.",

  label: "Backend Development",

  useCasesLabel: "BACKEND SOLUTIONS",

  useCasesHeading: "Backend Development Use Cases",

  useCasesDescription:
    "From API-driven platforms to enterprise-grade cloud architectures, we build backend systems that ensure reliability, performance, and long-term scalability.",

  useCasesServices: [
    {
      title: "API Development & Integration",
      content:
        "Build secure, scalable APIs that connect applications, services, and data seamlessly.\n\nWe create RESTful and GraphQL APIs that improve interoperability, performance, and developer productivity.",
    },
    {
      title: "Cloud-Native Architecture",
      content:
        "Design backend infrastructures optimized for cloud environments.\n\nOur solutions improve availability, scalability, and resilience while reducing operational complexity.",
    },
    {
      title: "Microservices Development",
      content:
        "Create modular backend systems that scale efficiently.\n\nWe design service-oriented architectures that improve flexibility, maintainability, and deployment speed.",
    },
    {
      title: "Database Design & Optimization",
      content:
        "Build high-performance data architectures that support business growth.\n\nWe optimize database structures, queries, and indexing strategies to ensure reliability and responsiveness.",
    },
    {
      title: "Identity & Access Management",
      content:
        "Secure applications with robust authentication and authorization systems.\n\nWe implement modern identity solutions that protect users, data, and business-critical services.",
    },
    {
      title: "Legacy System Modernization",
      content:
        "Transform outdated backend infrastructures into modern, scalable platforms.\n\nWe help businesses reduce technical debt and improve agility through strategic modernization initiatives.",
    },
    {
      title: "Real-Time Data Processing",
      content:
        "Enable live experiences with event-driven backend systems.\n\nWe build solutions capable of handling real-time messaging, analytics, notifications, and streaming workloads.",
    },
    {
      title: "Monitoring & Performance Management",
      content:
        "Gain complete visibility into backend operations.\n\nWe implement observability, logging, and monitoring solutions that improve reliability and speed up issue resolution.",
    },
  ],

  teamEyebrow: "Our backend development team",

  teamHeading: "Why businesses trust our backend engineers:",

  teamDescription:
    "We combine deep technical expertise with proven engineering practices to build backend systems that remain secure, reliable, and scalable as your business grows.",

  ctaTitle: "Ready to strengthen the foundation of your digital products?",

  ctaSubtitle:
    "Let's discuss your APIs, cloud infrastructure, architecture challenges, or backend modernization goals.",

  testimonialHeading: "Backend solutions engineered for long-term success.",

  testimonialDescription:
    "Our backend development services help organizations improve reliability, accelerate innovation, and support sustained business growth.",

  highlightQuote:
    "Their expertise helped us build a highly scalable backend platform that continues to support our rapid growth.",

  highlightName: "Aarav Shah",

  highlightRole: "Head of Engineering",

  highlightCompany: "CloudForge",

  caseStudiesLabel: "BACKEND CASE STUDIES",

  caseStudiesHeading:
    "Scalable backend systems powering modern digital businesses.",

  caseStudiesDescription:
    "Explore how we've helped organizations improve performance, reliability, and scalability through strategic backend engineering.",

  caseStudyCards: [
    {
      tag: "FINTECH",
      title:
        "Developed Secure API Infrastructure for a Financial Services Platform",
      description:
        "Built high-performance backend services with advanced security controls and transaction processing capabilities.",
      image: "/logos/office1.jpeg",
    },
    {
      tag: "SAAS",
      title:
        "Scaled Multi-Tenant Backend Architecture for a Growing SaaS Company",
      description:
        "Enhanced platform scalability, reliability, and operational efficiency to support rapid customer growth.",
      image: "/logos/office2.png",
    },
    {
      tag: "ENTERPRISE",
      title:
        "Modernized Legacy Backend Systems for Improved Reliability",
      description:
        "Implemented cloud-native services, monitoring solutions, and performance optimizations across critical business systems.",
      image: "/logos/office3.png",
    },
  ],
}),
  ...generatedServices,

"web-development": {
  sections: {
    trustedClientsStrip: false,
  },

  companyTrustSection: createCompanyTrustSection(),

    seo: {
    title: "Web Development Services | SevenUnique",
    description:
      "Professional web development services for scalable, secure, and high-performance websites.",
  },

  backendServices: {
    sectionLabel: "WEB DEVELOPMENT SERVICES",

    heading: "Build powerful web experiences that drive business growth.",

    description:
      "We design and develop scalable web applications that combine modern user experiences, robust performance, and long-term maintainability.",

    logos: [
      { src: "/images/gcp.png", alt: "Google Cloud" },
      { src: "/images/aws.png", alt: "AWS" },
      { src: "/images/ipo.png", alt: "Azure" },
    ],

    items: [
      {
        title: "Custom Web Application Development",
        content:
          "Create tailored web solutions that align with your business goals, streamline operations, and deliver exceptional user experiences.",
      },
      {
        title: "Frontend Engineering",
        content:
          "Build responsive, accessible, and high-performance user interfaces using modern frameworks and scalable component architectures.",
      },
      {
        title: "Web Platform Modernization",
        content:
          "Transform legacy systems into agile, cloud-ready applications that improve performance, security, and development efficiency.",
      },
    ],
  },

  hero: {
    breadcrumb: ["Services", "Web"],

    title: "WEB DEVELOPMENT SERVICES",

    heading:
      "Build scalable web applications that deliver exceptional user experiences.",

    description:
      "We develop high-performance web solutions using modern technologies, helping businesses create secure, responsive, and future-ready digital products.",

    label: "Web Development",

    rating: {
      platform: "Clutch",
      score: "4.9/5",
      reviews: "50+ client reviews",
    },

    formTitle: "Let's discuss your web development project.",
  },

  trustedClients,
},

"mobile-development": {
  sections: {
    trustedClientsStrip: false,
  },

  companyTrustSection: createCompanyTrustSection(),


    seo: {
    title: "Mobile App Development Services Solutions | SevenUnique",
    description:
      "Create secure and scalable mobile apps for iOS, Android, and cross-platform environments with expert mobile app development services. Get expert support today.",
  },

  
  backendServices: {
    sectionLabel: "MOBILE APP DEVELOPMENT SERVICES",

    heading:
      "Create mobile experiences that engage users and accelerate growth.",

    description:
      "We build intuitive, high-performance mobile applications that deliver seamless experiences across iOS and Android platforms.",

    logos: [
      { src: "/images/gcp.png", alt: "Google Cloud" },
      { src: "/images/aws.png", alt: "AWS" },
      { src: "/images/ipo.png", alt: "Azure" },
    ],

    items: [
      {
        title: "Cross-Platform App Development",
        content:
          "Launch feature-rich mobile applications faster with scalable cross-platform solutions that reduce development time and cost.",
      },
      {
        title: "Native Mobile Development",
        content:
          "Build premium iOS and Android applications optimized for performance, security, and platform-specific user experiences.",
      },
      {
        title: "Mobile App Modernization",
        content:
          "Enhance existing applications with modern technologies, improved performance, and scalable architectures to support future growth.",
      },
    ],
  },

  hero: {
    breadcrumb: ["Services", "Mobile"],

    title: "MOBILE APP DEVELOPMENT SERVICES",

    heading:
      "Build mobile applications that users love and businesses trust.",

    description:
      "From native iOS and Android apps to cross-platform solutions, we create secure, scalable, and engaging mobile experiences that drive results.",

    label: "Mobile Development",

    rating: {
      platform: "Clutch",
      score: "4.8/5",
      reviews: "40+ client reviews",
    },

    formTitle: "Let's discuss your mobile app idea.",
  },

  trustedClients,
},
};
