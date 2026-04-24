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
          desc: "We build scalable, secure, and high-performance Android apps tailored to your business goals.",
        },
        {
          title: "UI/UX Design",
          desc: "Intuitive, engaging, and user-centric designs that maximize retention and usability.",
        },
        {
          title: "Android App Testing",
          desc: "Comprehensive QA including functional, performance, and device compatibility testing.",
        },
        {
          title: "App Maintenance & Support",
          desc: "Continuous monitoring, updates, and optimization to ensure long-term performance.",
        },
        {
          title: "Enterprise Android Apps",
          desc: "Robust enterprise-grade applications with advanced security and scalability.",
        },
        {
          title: "API Integration",
          desc: "Seamless integration with third-party tools, payment gateways, and cloud services.",
        },
        {
          title: "Migration & Upgradation",
          desc: "Upgrade legacy apps to modern Android frameworks with improved performance.",
        },
        {
          title: "Cross-Platform Development",
          desc: "Develop apps that run smoothly across Android and other platforms.",
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

    // ✅ NEW SECTIONS (for future rendering)
    keyFacts: {
  tabs: [
    "Main Reasons to Consider Outsourcing",
    "Why Develop Android Apps?",
    "Types of Android Apps We Create",
  ],

  content: [
    {
      title: "Key Facts About Outsourcing Android App Development",
      body: `Whether you need a single Android developer or an entire team, outsourcing accelerates delivery.

Access Specialized Expertise: Hire niche experts globally.

Accelerate Development: Faster time to market.

Remain Secure: Follow best practices and compliance.

Retain Oversight: Full control with regular updates.

Achieve Scalability: Scale team anytime.`,
    },
    {
      title: "Why Develop Android Apps?",
      body: `Android dominates global market share.

Reach billions of users.

Flexible development ecosystem.

Open-source advantages.

Cost-effective solutions.`,
    },
    {
      title: "Types of Android Apps We Create",
      body: `We build enterprise apps, consumer apps, eCommerce platforms, on-demand apps, and AI-powered mobile solutions.`,
    },
  ],

  sidebar: [
    {
      title: "What Is Xamarin & Why You Might Need It",
    },
    {
      title: "Guidelines for Inclusivity in Android App Development",
    },
  ],
},

    bestPractices: {
  title: "Best Practices for Android App Development",
  description:
    "Android has evolved considerably over the years. Here are some industry-standard best practices we follow for high-quality app development.",

  items: [
    {
      title: "Part 1: Design",
      content:
        "Focus on intuitive UI/UX, accessibility, and responsive layouts. Use Material Design principles and user-centered design practices.",
    },
    {
      title: "Part 2: Implementation",
      content:
        "Write clean, modular code. Follow MVVM architecture, optimize performance, and ensure efficient API integration.",
    },
    {
      title: "Part 3: Testing",
      content:
        "Perform unit testing, UI testing, and real-device testing to ensure stability, performance, and bug-free experience.",
    },
  ],
},


  greenCta: {
    image: "/images/green.png",
    text: "100s of companies worldwide trust us for their Android services.",
    buttonLabel: "Schedule a Call",
    buttonLink: "/schedule-a-call-page",
  },

    whyChoose: {
  title: "Why Choose BairesDev for Android Mobile App Development?",
  image: "/images/choose.png",

  points: [
    {
      icon: "arrow",
      title: "Customized App Development",
      desc: "We create custom Android apps tailored to your business goals with full transparency throughout development.",
    },
    {
      icon: "location",
      title: "Top 1% of Android App Developers",
      desc: "We hire only the top 1% of developers after rigorous technical and soft skill evaluation.",
    },
    {
      icon: "work",
      title: "Flexible Engagement Models",
      desc: "Choose from staff augmentation, dedicated teams, or full outsourcing based on your needs.",
    },
  ],
},


process: {
  titleLines: [
    "Our process.",
    "Simple, seamless,",
    "streamlined.",
  ],
  image: "/images/process.png",

  steps: [
    {
      step: "STEP 1",
      title: "Discuss Your Requirements",
      desc: "We start by understanding goals, budget, timeline, and engagement model.",
    },
    {
      step: "STEP 2",
      title: "Create a Plan and Build Your Team",
      desc: "We assemble the right engineers and define the delivery approach.",
    },
    {
      step: "STEP 3",
      title: "Get to Work",
      desc: "Execution begins with full transparency and regular updates.",
    },
  ],

  buttonLabel: "Schedule a Call",
  buttonLink: "/schedule-a-call-page",
},

    faq: {
      questions: [
        {
          q: "How long does it take to build an Android app?",
          a: "Typically 4–12 weeks depending on complexity.",
        },
        {
          q: "Do you provide post-launch support?",
          a: "Yes, we offer continuous maintenance and updates.",
        },
        {
          q: "Can you upgrade my existing app?",
          a: "Absolutely, we handle migration and modernization.",
        },
      ],
    },

    darkCta: {
  titleLines: [
    "Looking for reliable Android app",
    "development services?",
  ],
  highlight: "See how we can help.",
  buttonLabel: "Schedule a Call",
  buttonLink: "/schedule-a-call-page",
  image: "/images/dark.png",
},
  },
}),

  // ✅ OTHER SERVICES (NO SECTIONS YET — SAFE)
"business-intelligence": createRestServiceEntry({
  slug: "business-intelligence",
  breadcrumb: "Business Intelligence",
  title: "BUSINESS INTELLIGENCE SERVICES",
  heading: "Turn raw data into actionable insights.",
  description:
    "Empower smarter decisions with advanced BI dashboards and analytics.",
  buttonLabel: "Access BI Services",
  image: "/images/man2.png",

  sections: {
    androidServices: {
      title: "Business Intelligence Services We Provide",

      services: [
        {
          title: "Data Visualization",
          desc: "Interactive dashboards using Power BI, Tableau, and custom tools.",
        },
        {
          title: "Data Warehousing",
          desc: "Centralized storage solutions for structured analytics.",
        },
        {
          title: "ETL Pipelines",
          desc: "Efficient data extraction, transformation, and loading processes.",
        },
        {
          title: "Predictive Analytics",
          desc: "Forecast trends using machine learning models.",
        },
        {
          title: "Reporting Automation",
          desc: "Automated reports for real-time business monitoring.",
        },
        {
          title: "Data Governance",
          desc: "Ensure data quality, compliance, and security.",
        },
      ],

      navItems: [
        "BI Services",
        "Key Facts",
        "Best Practices",
        "Why Choose Us",
        "Process",
        "FAQ",
      ],
    },

    // ✅ KEY FACTS (BI specific)
    keyFacts: {
      tabs: [
        "Why Choose BI?",
        "Business Impact",
        "Solutions We Deliver",
      ],

      content: [
        {
          title: "Why Businesses Need BI",
          body: `Business Intelligence helps organizations transform raw data into meaningful insights.

Improve decision-making with real-time dashboards.

Identify trends and patterns quickly.

Reduce operational inefficiencies.

Gain competitive advantage through data-driven strategies.`,
        },
        {
          title: "Business Impact of BI",
          body: `BI solutions improve ROI and performance.

Increase productivity through automation.

Enhance customer understanding.

Enable faster strategic decisions.

Improve forecasting accuracy.`,
        },
        {
          title: "BI Solutions We Deliver",
          body: `We build dashboards, reporting systems, analytics platforms, and data pipelines tailored to your business needs.`,
        },
      ],

      sidebar: [
        {
          title: "Power BI vs Tableau: Which One to Choose?",
        },
        {
          title: "Top BI Trends in 2026",
        },
      ],
    },

    // ✅ BEST PRACTICES (BI specific)
    bestPractices: {
      title: "Best Practices for Business Intelligence",
      description:
        "Follow industry best practices to maximize the value of your BI systems.",

      items: [
        {
          title: "Data Accuracy",
          content: "Ensure clean and validated data for reliable insights.",
        },
        {
          title: "User-Friendly Dashboards",
          content: "Design intuitive dashboards for better adoption.",
        },
        {
          title: "Real-time Data Processing",
          content: "Enable faster decisions with live data updates.",
        },
      ],
    },

    // ✅ GREEN CTA
    greenCta: {
      image: "/images/green.png",
      text: "Companies worldwide trust our BI expertise to unlock insights.",
      buttonLabel: "Talk to BI Experts",
      buttonLink: "/schedule-a-call-page",
    },

    // ✅ WHY CHOOSE (FIXED STRUCTURE)
    whyChoose: {
      title: "Why Choose Us for Business Intelligence?",
      image: "/images/choose.png",

      points: [
        {
          icon: "arrow",
          title: "Custom BI Solutions",
          desc: "We build tailored dashboards and analytics systems aligned with your business goals.",
        },
        {
          icon: "location",
          title: "Expert BI Engineers",
          desc: "Work with top-tier data analysts and BI specialists.",
        },
        {
          icon: "work",
          title: "Scalable Architecture",
          desc: "Our solutions grow with your data and business needs.",
        },
      ],
    },

    // ✅ PROCESS (FIXED STRUCTURE)
    process: {
      titleLines: [
        "Our BI process.",
        "Data-driven, scalable,",
        "impact-focused.",
      ],
      image: "/images/process.png",

      steps: [
        {
          step: "STEP 1",
          title: "Understand Data Sources",
          desc: "Analyze your current data ecosystem.",
        },
        {
          step: "STEP 2",
          title: "Design BI Architecture",
          desc: "Plan dashboards, pipelines, and storage.",
        },
        {
          step: "STEP 3",
          title: "Deploy & Optimize",
          desc: "Launch BI solutions and continuously improve them.",
        },
      ],

      buttonLabel: "Consult BI Experts",
      buttonLink: "/schedule-a-call-page",
    },

    // ✅ FAQ
    faq: {
      title: "Frequently Asked Questions (FAQ)",

      questions: [
        {
          q: "What tools do you use for BI?",
          a: "We use Power BI, Tableau, Looker, and custom solutions.",
        },
        {
          q: "Can you integrate with our systems?",
          a: "Yes, we integrate with CRMs, ERPs, and databases.",
        },
        {
          q: "Do you provide real-time dashboards?",
          a: "Yes, we build real-time analytics dashboards.",
        },
      ],
    },

    // ✅ DARK CTA
    darkCta: {
      titleLines: [
        "Ready to unlock insights",
        "from your data?",
      ],
      highlight: "Let’s build your BI system.",
      buttonLabel: "Get Started",
      buttonLink: "/schedule-a-call-page",
      image: "/images/dark.png",
    },
  },
}),


"data-engineering": createRestServiceEntry({
  slug: "data-engineering",
  breadcrumb: "Data Engineering",
  title: "DATA ENGINEERING SERVICES",
  heading: "Build cleaner pipelines. Make your data work harder.",
  description:
    "Strengthen your data foundation with scalable, reliable, and high-performance data systems.",
  buttonLabel: "Access Data Engineering",
  image: "/images/man3.png",

  sections: {
    androidServices: {
      title: "Data Engineering Services We Provide",

      services: [
        {
          title: "Data Pipeline Development",
          desc: "Design and build robust ETL/ELT pipelines for seamless data flow.",
        },
        {
          title: "Data Warehousing",
          desc: "Centralized storage solutions for structured analytics.",
        },
        {
          title: "Big Data Processing",
          desc: "Handle large-scale data using Spark and distributed systems.",
        },
        {
          title: "Real-time Data Streaming",
          desc: "Process live data streams using Kafka and event-driven systems.",
        },
        {
          title: "Cloud Data Engineering",
          desc: "Build scalable pipelines on AWS, Azure, and GCP.",
        },
        {
          title: "Data Lake Architecture",
          desc: "Create flexible data lakes for structured and unstructured data.",
        },
      ],

      navItems: [
        "Data Engineering Services",
        "Key Facts",
        "Best Practices",
        "Why Choose Us",
        "Process",
        "FAQ",
      ],
    },

    // ✅ FIXED KEY FACTS (matches component)
    keyFacts: {
      tabs: [
        "Why Data Engineering?",
        "Business Benefits",
        "What We Deliver",
      ],

      content: [
        {
          title: "Why Data Engineering Matters",
          body: `Data engineering enables organizations to process, store, and analyze massive datasets efficiently.

It ensures data availability, reliability, and scalability.`,
        },
        {
          title: "Business Benefits",
          body: `Improve decision-making with clean data.

Enable real-time analytics.

Reduce operational inefficiencies.

Scale your data infrastructure easily.`,
        },
        {
          title: "What We Deliver",
          body: `We build pipelines, warehouses, data lakes, and real-time systems tailored to your needs.`,
        },
      ],

      sidebar: [
        { title: "What is a Data Pipeline?" },
        { title: "Batch vs Real-time Processing" },
      ],
    },

    // ✅ FIXED BEST PRACTICES
    bestPractices: {
      title: "Best Practices for Data Engineering",
      description:
        "Ensure high performance and reliability with proven data engineering practices.",

      items: [
        {
          title: "Scalable Architecture",
          content: "Design pipelines that grow with your data volume.",
        },
        {
          title: "Data Validation",
          content: "Ensure data quality and consistency across systems.",
        },
        {
          title: "Monitoring & Alerts",
          content: "Track pipeline performance and failures in real time.",
        },
      ],
    },

    // ✅ GREEN CTA
    greenCta: {
      image: "/images/green.png",
      text: "Companies trust our data engineering expertise to scale their systems.",
      buttonLabel: "Consult Data Experts",
      buttonLink: "/schedule-a-call-page",
    },

    // ✅ FIXED WHY CHOOSE
    whyChoose: {
      title: "Why Choose Us for Data Engineering?",
      image: "/images/choose.png",

      points: [
        {
          icon: "arrow",
          title: "Expert Data Engineers",
          desc: "Work with experienced engineers specialized in large-scale systems.",
        },
        {
          icon: "location",
          title: "Cloud-Native Solutions",
          desc: "We build scalable architectures on modern cloud platforms.",
        },
        {
          icon: "work",
          title: "High Performance Pipelines",
          desc: "Optimized pipelines for speed, reliability, and cost-efficiency.",
        },
      ],
    },

    // ✅ FIXED PROCESS
    process: {
      titleLines: [
        "Our data process.",
        "Scalable, reliable,",
        "future-ready.",
      ],
      image: "/images/process.png",

      steps: [
        {
          step: "STEP 1",
          title: "Assess Data Systems",
          desc: "Analyze your current infrastructure and workflows.",
        },
        {
          step: "STEP 2",
          title: "Design Architecture",
          desc: "Plan scalable pipelines and storage systems.",
        },
        {
          step: "STEP 3",
          title: "Build & Deploy",
          desc: "Implement pipelines and optimize performance.",
        },
      ],

      buttonLabel: "Consult Data Experts",
      buttonLink: "/schedule-a-call-page",
    },

    // ✅ FIXED FAQ
    faq: {
      title: "Frequently Asked Questions (FAQ)",

      questions: [
        {
          q: "What tools do you use?",
          a: "We use Spark, Kafka, Airflow, AWS, Azure, and GCP.",
        },
        {
          q: "Can you handle real-time data?",
          a: "Yes, we build real-time streaming pipelines.",
        },
        {
          q: "Do you ensure data security?",
          a: "Yes, we follow strict compliance and encryption standards.",
        },
      ],
    },

    // ✅ DARK CTA
    darkCta: {
      titleLines: [
        "Ready to scale your data",
        "infrastructure?",
      ],
      highlight: "Let’s build your pipelines.",
      buttonLabel: "Get Started",
      buttonLink: "/schedule-a-call-page",
      image: "/images/dark.png",
    },
  },
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

  sections: {
    androidServices: {
      title: "Web Development Services We Provide",

      services: [
        {
          title: "Custom Web Development",
          desc: "Build tailored web applications aligned with your business goals.",
        },
        {
          title: "Frontend Development",
          desc: "Modern UI using React, Next.js, and responsive design.",
        },
        {
          title: "Backend Development",
          desc: "Robust APIs and scalable server-side architecture.",
        },
        {
          title: "E-commerce Development",
          desc: "Build high-converting online stores and platforms.",
        },
        {
          title: "CMS Development",
          desc: "Flexible content management systems like WordPress & headless CMS.",
        },
        {
          title: "Web App Maintenance",
          desc: "Continuous updates, optimization, and support.",
        },
      ],

      navItems: [
        "Web Services",
        "Key Facts",
        "Best Practices",
        "Why Choose Us",
        "Process",
        "FAQ",
      ],
    },

    // ✅ KEY FACTS
    keyFacts: {
      tabs: [
        "Why Web Development?",
        "Business Benefits",
        "Solutions We Offer",
      ],

      content: [
        {
          title: "Why Web Development Matters",
          body: `A strong web presence is essential for business growth.

Reach global audiences.

Improve brand visibility.

Enhance customer engagement.`,
        },
        {
          title: "Business Benefits",
          body: `Faster performance improves user experience.

SEO-friendly structure boosts traffic.

Scalable systems grow with your business.`,
        },
        {
          title: "Solutions We Offer",
          body: `We build websites, web apps, SaaS platforms, and enterprise systems.`,
        },
      ],

      sidebar: [
        { title: "What is a Headless CMS?" },
        { title: "Frontend vs Backend Explained" },
      ],
    },

    // ✅ BEST PRACTICES
    bestPractices: {
      title: "Best Practices for Web Development",
      description:
        "Follow modern web standards to ensure performance, scalability, and security.",

      items: [
        {
          title: "Responsive Design",
          content: "Ensure compatibility across all devices and screen sizes.",
        },
        {
          title: "Performance Optimization",
          content: "Minimize load times with optimized assets and code.",
        },
        {
          title: "SEO Optimization",
          content: "Structure content for search engine visibility.",
        },
      ],
    },

    // ✅ GREEN CTA
    greenCta: {
      image: "/images/green.png",
      text: "Companies trust us to build scalable web platforms.",
      buttonLabel: "Talk to Web Experts",
      buttonLink: "/schedule-a-call-page",
    },

    // ✅ WHY CHOOSE
    whyChoose: {
      title: "Why Choose Us for Web Development?",
      image: "/images/choose.png",

      points: [
        {
          icon: "arrow",
          title: "Modern Tech Stack",
          desc: "We use React, Next.js, Node.js, and modern frameworks.",
        },
        {
          icon: "location",
          title: "Experienced Developers",
          desc: "Work with top-tier frontend and backend engineers.",
        },
        {
          icon: "work",
          title: "Scalable Solutions",
          desc: "We build systems that grow with your business.",
        },
      ],
    },

    // ✅ PROCESS
    process: {
      titleLines: [
        "Our web process.",
        "Fast, scalable,",
        "user-focused.",
      ],
      image: "/images/process.png",

      steps: [
        {
          step: "STEP 1",
          title: "Understand Requirements",
          desc: "Gather business needs and technical goals.",
        },
        {
          step: "STEP 2",
          title: "Design & Development",
          desc: "Create UI/UX and build scalable architecture.",
        },
        {
          step: "STEP 3",
          title: "Launch & Optimize",
          desc: "Deploy and continuously improve performance.",
        },
      ],

      buttonLabel: "Start Your Project",
      buttonLink: "/schedule-a-call-page",
    },

    // ✅ FAQ
    faq: {
      title: "Frequently Asked Questions (FAQ)",

      questions: [
        {
          q: "What technologies do you use?",
          a: "We use React, Next.js, Node.js, and modern frameworks.",
        },
        {
          q: "Do you build custom web apps?",
          a: "Yes, we build fully customized web applications.",
        },
        {
          q: "Do you provide maintenance?",
          a: "Yes, we offer ongoing support and optimization.",
        },
      ],
    },

    // ✅ DARK CTA
    darkCta: {
      titleLines: [
        "Ready to build your",
        "next web platform?",
      ],
      highlight: "Let’s make it happen.",
      buttonLabel: "Get Started",
      buttonLink: "/schedule-a-call-page",
      image: "/images/dark.png",
    },
  },
}),


"ecommerce-development": createRestServiceEntry({
  slug: "ecommerce-development",
  breadcrumb: "eCommerce Development",
  title: "ECOMMERCE DEVELOPMENT SERVICES",
  heading: "Build powerful online stores that convert.",
  description:
    "Launch scalable, high-performance eCommerce platforms tailored to your business goals.",
  buttonLabel: "Get eCommerce Experts",
  image: "/images/man3.png",

  sections: {
    androidServices: {
      title: "eCommerce Development Services We Provide",

      services: [
        {
          title: "Custom eCommerce Development",
          desc: "Build tailored online stores with advanced features and scalability.",
        },
        {
          title: "Shopify Development",
          desc: "Create fast, secure, and customizable Shopify stores.",
        },
        {
          title: "WooCommerce Development",
          desc: "Flexible WordPress-based eCommerce solutions.",
        },
        {
          title: "Marketplace Development",
          desc: "Build multi-vendor platforms like Amazon or Flipkart.",
        },
        {
          title: "Payment Gateway Integration",
          desc: "Secure and seamless payment processing solutions.",
        },
        {
          title: "eCommerce Optimization",
          desc: "Improve performance, SEO, and conversion rates.",
        },
      ],

      navItems: [
        "eCommerce Services",
        "Key Facts",
        "Best Practices",
        "Why Choose Us",
        "Process",
        "FAQ",
      ],
    },

    // ✅ KEY FACTS
    keyFacts: {
      tabs: [
        "Why eCommerce?",
        "Business Benefits",
        "What We Deliver",
      ],

      content: [
        {
          title: "Why eCommerce Matters",
          body: `eCommerce enables businesses to reach global audiences and operate 24/7.

Increase sales opportunities.

Expand beyond geographical limits.

Enhance customer convenience.`,
        },
        {
          title: "Business Benefits",
          body: `Automated operations reduce costs.

Better analytics and customer insights.

Scalable platforms for business growth.`,
        },
        {
          title: "What We Deliver",
          body: `We build online stores, marketplaces, and custom commerce platforms with high performance and security.`,
        },
      ],

      sidebar: [
        { title: "Shopify vs WooCommerce" },
        { title: "How to Improve Conversion Rates" },
      ],
    },

    // ✅ BEST PRACTICES
    bestPractices: {
      title: "Best Practices for eCommerce Development",
      description:
        "Follow proven strategies to build high-converting and scalable online stores.",

      items: [
        {
          title: "Mobile Optimization",
          content: "Ensure seamless shopping experience across devices.",
        },
        {
          title: "Fast Load Speed",
          content: "Optimize performance to reduce bounce rates.",
        },
        {
          title: "Secure Transactions",
          content: "Implement SSL and secure payment gateways.",
        },
      ],
    },

    // ✅ GREEN CTA
    greenCta: {
      image: "/images/green.png",
      text: "Businesses trust us to build high-converting eCommerce platforms.",
      buttonLabel: "Talk to eCommerce Experts",
      buttonLink: "/schedule-a-call-page",
    },

    // ✅ WHY CHOOSE
    whyChoose: {
      title: "Why Choose Us for eCommerce Development?",
      image: "/images/choose.png",

      points: [
        {
          icon: "arrow",
          title: "Custom Store Solutions",
          desc: "We build fully customized stores tailored to your brand.",
        },
        {
          icon: "location",
          title: "Expert Developers",
          desc: "Work with experienced eCommerce engineers.",
        },
        {
          icon: "work",
          title: "Conversion-Focused",
          desc: "We design stores that maximize sales and user engagement.",
        },
      ],
    },

    // ✅ PROCESS
    process: {
      titleLines: [
        "Our eCommerce process.",
        "Simple, scalable,",
        "conversion-focused.",
      ],
      image: "/images/process.png",

      steps: [
        {
          step: "STEP 1",
          title: "Understand Requirements",
          desc: "Analyze your business model and goals.",
        },
        {
          step: "STEP 2",
          title: "Design & Development",
          desc: "Build user-friendly and scalable store architecture.",
        },
        {
          step: "STEP 3",
          title: "Launch & Optimize",
          desc: "Deploy store and continuously improve conversions.",
        },
      ],

      buttonLabel: "Start Your Store",
      buttonLink: "/schedule-a-call-page",
    },

    // ✅ FAQ
    faq: {
      title: "Frequently Asked Questions (FAQ)",

      questions: [
        {
          q: "Which platforms do you use?",
          a: "We use Shopify, WooCommerce, Magento, and custom solutions.",
        },
        {
          q: "Can you build multi-vendor marketplaces?",
          a: "Yes, we build scalable marketplace platforms.",
        },
        {
          q: "Do you provide maintenance?",
          a: "Yes, we offer ongoing support and optimization.",
        },
      ],
    },

    // ✅ DARK CTA
    darkCta: {
      titleLines: [
        "Ready to launch your",
        "eCommerce business?",
      ],
      highlight: "Let’s build your store.",
      buttonLabel: "Get Started",
      buttonLink: "/schedule-a-call-page",
      image: "/images/dark.png",
    },
  },
}),

"ios-app-development": createRestServiceEntry({
  slug: "ios-app-development",
  breadcrumb: "iOS",
  title: "iOS APP DEVELOPMENT SERVICES",
  heading: "Build premium iOS apps that users love.",
  description:
    "Create high-performance, secure, and scalable iOS applications for Apple devices.",
  buttonLabel: "Get iOS Developers",
  image: "/images/man.png",

  sections: {
    androidServices: {
      title: "iOS App Development Services We Provide",

      services: [
        {
          title: "Custom iOS App Development",
          desc: "Build scalable and secure iOS apps tailored to your business needs.",
        },
        {
          title: "UI/UX Design",
          desc: "Design intuitive and elegant interfaces following Apple guidelines.",
        },
        {
          title: "iOS App Testing",
          desc: "Ensure performance, security, and device compatibility.",
        },
        {
          title: "App Store Deployment",
          desc: "Seamless publishing on the Apple App Store.",
        },
        {
          title: "API Integration",
          desc: "Integrate third-party services, payments, and cloud systems.",
        },
        {
          title: "Maintenance & Support",
          desc: "Ongoing updates and performance optimization.",
        },
      ],

      navItems: [
        "iOS Services",
        "Key Facts",
        "Best Practices",
        "Why Choose Us",
        "Process",
        "FAQ",
      ],
    },

    // ✅ KEY FACTS
    keyFacts: {
      tabs: [
        "Why iOS Development?",
        "Business Benefits",
        "Apps We Build",
      ],

      content: [
        {
          title: "Why iOS Development Matters",
          body: `iOS users are known for higher engagement and spending power.

Premium user base.

Strong security ecosystem.

Optimized performance across devices.`,
        },
        {
          title: "Business Benefits",
          body: `Higher ROI with premium users.

Better app monetization opportunities.

Strong brand perception.`,
        },
        {
          title: "Apps We Build",
          body: `We build enterprise apps, consumer apps, fintech apps, healthcare apps, and custom iOS solutions.`,
        },
      ],

      sidebar: [
        { title: "Swift vs Objective-C" },
        { title: "App Store Optimization Tips" },
      ],
    },

    // ✅ BEST PRACTICES
    bestPractices: {
      title: "Best Practices for iOS App Development",
      description:
        "Follow Apple standards to build secure, high-performance, and user-friendly apps.",

      items: [
        {
          title: "Follow Apple Guidelines",
          content: "Ensure compliance with App Store policies.",
        },
        {
          title: "Performance Optimization",
          content: "Deliver smooth and fast user experience.",
        },
        {
          title: "Data Security",
          content: "Implement strong encryption and secure APIs.",
        },
      ],
    },

    // ✅ GREEN CTA
    greenCta: {
      image: "/images/green.png",
      text: "Top companies trust us for premium iOS app development.",
      buttonLabel: "Talk to iOS Experts",
      buttonLink: "/schedule-a-call-page",
    },

    // ✅ WHY CHOOSE
    whyChoose: {
      title: "Why Choose Us for iOS Development?",
      image: "/images/choose.png",

      points: [
        {
          icon: "arrow",
          title: "Expert iOS Developers",
          desc: "Work with experienced Swift and Objective-C developers.",
        },
        {
          icon: "location",
          title: "Apple Ecosystem Expertise",
          desc: "Deep knowledge of iPhone, iPad, and Apple services.",
        },
        {
          icon: "work",
          title: "High-Quality Standards",
          desc: "We build apps that meet Apple’s strict quality benchmarks.",
        },
      ],
    },

    // ✅ PROCESS
    process: {
      titleLines: [
        "Our iOS process.",
        "Simple, premium,",
        "user-focused.",
      ],
      image: "/images/process.png",

      steps: [
        {
          step: "STEP 1",
          title: "Requirement Analysis",
          desc: "Understand your app idea and business goals.",
        },
        {
          step: "STEP 2",
          title: "Design & Development",
          desc: "Create UI/UX and build scalable architecture.",
        },
        {
          step: "STEP 3",
          title: "Launch & Optimize",
          desc: "Deploy to App Store and improve continuously.",
        },
      ],

      buttonLabel: "Start Your iOS App",
      buttonLink: "/schedule-a-call-page",
    },

    // ✅ FAQ
    faq: {
      title: "Frequently Asked Questions (FAQ)",

      questions: [
        {
          q: "Do you build apps for iPhone and iPad?",
          a: "Yes, we build apps optimized for all Apple devices.",
        },
        {
          q: "Which languages do you use?",
          a: "We primarily use Swift and Objective-C.",
        },
        {
          q: "Do you handle App Store submission?",
          a: "Yes, we manage the complete submission process.",
        },
      ],
    },

    // ✅ DARK CTA
    darkCta: {
      titleLines: [
        "Ready to build your",
        "next iOS app?",
      ],
      highlight: "Let’s launch it together.",
      buttonLabel: "Get Started",
      buttonLink: "/schedule-a-call-page",
      image: "/images/dark.png",
    },
  },
}),

"mobile-app-development": createRestServiceEntry({
  slug: "mobile-app-development",
  breadcrumb: "Mobile App Development",
  title: "MOBILE APP DEVELOPMENT SERVICES",
  heading: "Build high-performing mobile apps across platforms.",
  description:
    "Design, develop, and scale mobile applications for Android, iOS, and cross-platform environments.",
  buttonLabel: "Hire Mobile App Developers",
  image: "/images/man.png",

  sections: {
    androidServices: {
      title: "Mobile App Development Services We Provide",

      services: [
        {
          title: "Custom Mobile App Development",
          desc: "End-to-end mobile app solutions tailored to your business.",
        },
        {
          title: "iOS & Android Development",
          desc: "Native apps built for performance and scalability.",
        },
        {
          title: "Cross-Platform Development",
          desc: "Single codebase apps using Flutter and React Native.",
        },
        {
          title: "UI/UX Design",
          desc: "User-centric, intuitive, and engaging app interfaces.",
        },
        {
          title: "App Testing & QA",
          desc: "Ensure stability, security, and performance across devices.",
        },
        {
          title: "App Maintenance & Support",
          desc: "Ongoing updates, monitoring, and optimization.",
        },
      ],

      navItems: [
        "Mobile Services",
        "Key Facts",
        "Best Practices",
        "Why Choose Us",
        "Process",
        "FAQ",
      ],
    },

    // ✅ KEY FACTS
    keyFacts: {
      tabs: [
        "Why Mobile Apps?",
        "Business Benefits",
        "What We Build",
      ],

      content: [
        {
          title: "Why Mobile Apps Matter",
          body: `Mobile apps provide direct access to users anytime, anywhere.

Improve engagement and retention.

Enhance brand presence.

Deliver seamless user experiences.`,
        },
        {
          title: "Business Benefits",
          body: `Increase revenue through mobile channels.

Enable real-time communication with users.

Gain valuable customer insights through analytics.`,
        },
        {
          title: "What We Build",
          body: `We develop enterprise apps, consumer apps, on-demand platforms, and scalable mobile ecosystems.`,
        },
      ],

      sidebar: [
        { title: "Native vs Cross-Platform Apps" },
        { title: "Top Mobile App Trends" },
      ],
    },

    // ✅ BEST PRACTICES
    bestPractices: {
      title: "Best Practices for Mobile App Development",
      description:
        "Ensure performance, usability, and scalability with proven mobile development strategies.",

      items: [
        {
          title: "User-Centric Design",
          content: "Focus on usability and intuitive navigation.",
        },
        {
          title: "Performance Optimization",
          content: "Ensure fast load times and smooth interactions.",
        },
        {
          title: "Security First",
          content: "Implement encryption and secure APIs.",
        },
      ],
    },

    // ✅ GREEN CTA
    greenCta: {
      image: "/images/green.png",
      text: "Leading companies trust us to build scalable mobile apps.",
      buttonLabel: "Talk to Experts",
      buttonLink: "/schedule-a-call-page",
    },

    // ✅ WHY CHOOSE
    whyChoose: {
      title: "Why Choose Us for Mobile App Development?",
      image: "/images/choose.png",

      points: [
        {
          icon: "arrow",
          title: "Full-Cycle Development",
          desc: "From idea to launch, we handle everything.",
        },
        {
          icon: "location",
          title: "Cross-Platform Expertise",
          desc: "Build apps for Android, iOS, and beyond.",
        },
        {
          icon: "work",
          title: "Scalable Architecture",
          desc: "Apps built to grow with your business.",
        },
      ],
    },

    // ✅ PROCESS
    process: {
      titleLines: [
        "Our mobile process.",
        "Agile, scalable,",
        "user-focused.",
      ],
      image: "/images/process.png",

      steps: [
        {
          step: "STEP 1",
          title: "Requirement Analysis",
          desc: "Understand your app idea and business needs.",
        },
        {
          step: "STEP 2",
          title: "Design & Development",
          desc: "Create UI/UX and build scalable architecture.",
        },
        {
          step: "STEP 3",
          title: "Launch & Optimize",
          desc: "Deploy apps and continuously improve performance.",
        },
      ],

      buttonLabel: "Start Your App",
      buttonLink: "/schedule-a-call-page",
    },

    // ✅ FAQ
    faq: {
      title: "Frequently Asked Questions (FAQ)",

      questions: [
        {
          q: "Do you build both Android and iOS apps?",
          a: "Yes, we develop both native and cross-platform apps.",
        },
        {
          q: "Which technologies do you use?",
          a: "We use Flutter, React Native, Swift, and Kotlin.",
        },
        {
          q: "Do you provide post-launch support?",
          a: "Yes, we offer continuous maintenance and updates.",
        },
      ],
    },

    // ✅ DARK CTA
    darkCta: {
      titleLines: [
        "Ready to build your",
        "mobile application?",
      ],
      highlight: "Let’s turn your idea into reality.",
      buttonLabel: "Get Started",
      buttonLink: "/schedule-a-call-page",
      image: "/images/dark.png",
    },
  },
}),

"saas-development": createRestServiceEntry({
  slug: "saas-development",
  breadcrumb: "SaaS Development",
  title: "SAAS DEVELOPMENT SERVICES",
  heading: "Build scalable SaaS products that grow with your business.",
  description:
    "Design, develop, and launch secure, multi-tenant SaaS platforms with subscription-based models.",
  buttonLabel: "Build Your SaaS Product",
  image: "/images/man3.png",

  sections: {
    androidServices: {
      title: "SaaS Development Services We Provide",

      services: [
        {
          title: "Custom SaaS Application Development",
          desc: "Build scalable SaaS platforms tailored to your business model.",
        },
        {
          title: "Multi-Tenant Architecture",
          desc: "Design systems that efficiently serve multiple customers.",
        },
        {
          title: "Subscription & Billing Systems",
          desc: "Implement recurring payments, plans, and invoicing.",
        },
        {
          title: "Cloud Infrastructure Setup",
          desc: "Deploy on AWS, Azure, or GCP with high scalability.",
        },
        {
          title: "API Development & Integration",
          desc: "Build robust APIs for integrations and extensibility.",
        },
        {
          title: "SaaS Maintenance & Scaling",
          desc: "Continuous monitoring, updates, and performance optimization.",
        },
      ],

      navItems: [
        "SaaS Services",
        "Key Facts",
        "Best Practices",
        "Why Choose Us",
        "Process",
        "FAQ",
      ],
    },

    // ✅ KEY FACTS
    keyFacts: {
      tabs: [
        "Why SaaS?",
        "Business Benefits",
        "What We Build",
      ],

      content: [
        {
          title: "Why SaaS Matters",
          body: `SaaS enables businesses to deliver software over the internet without installation.

Access from anywhere.

Automatic updates.

Lower upfront costs.`,
        },
        {
          title: "Business Benefits",
          body: `Recurring revenue model.

Scalable user base.

Lower maintenance overhead.

Faster go-to-market.`,
        },
        {
          title: "What We Build",
          body: `We build CRM platforms, project management tools, analytics dashboards, and custom SaaS applications.`,
        },
      ],

      sidebar: [
        { title: "What is Multi-Tenancy?" },
        { title: "SaaS vs Traditional Software" },
      ],
    },

    // ✅ BEST PRACTICES
    bestPractices: {
      title: "Best Practices for SaaS Development",
      description:
        "Build reliable and scalable SaaS platforms with proven strategies.",

      items: [
        {
          title: "Scalable Architecture",
          content: "Design systems to handle growth in users and data.",
        },
        {
          title: "Security & Compliance",
          content: "Implement strong authentication and data protection.",
        },
        {
          title: "Performance Optimization",
          content: "Ensure fast response times and uptime.",
        },
      ],
    },

    // ✅ GREEN CTA
    greenCta: {
      image: "/images/green.png",
      text: "Businesses trust us to build scalable SaaS platforms.",
      buttonLabel: "Talk to SaaS Experts",
      buttonLink: "/schedule-a-call-page",
    },

    // ✅ WHY CHOOSE
    whyChoose: {
      title: "Why Choose Us for SaaS Development?",
      image: "/images/choose.png",

      points: [
        {
          icon: "arrow",
          title: "End-to-End SaaS Development",
          desc: "From idea to launch, we build complete SaaS products.",
        },
        {
          icon: "location",
          title: "Cloud-Native Expertise",
          desc: "We build scalable SaaS apps on modern cloud platforms.",
        },
        {
          icon: "work",
          title: "Subscription-Ready Systems",
          desc: "Built-in billing, plans, and user management.",
        },
      ],
    },

    // ✅ PROCESS
    process: {
      titleLines: [
        "Our SaaS process.",
        "Scalable, secure,",
        "growth-ready.",
      ],
      image: "/images/process.png",

      steps: [
        {
          step: "STEP 1",
          title: "Product Discovery",
          desc: "Understand your SaaS idea and business model.",
        },
        {
          step: "STEP 2",
          title: "Build & Integrate",
          desc: "Develop core features, APIs, and infrastructure.",
        },
        {
          step: "STEP 3",
          title: "Launch & Scale",
          desc: "Deploy and optimize for growth and performance.",
        },
      ],

      buttonLabel: "Launch Your SaaS",
      buttonLink: "/schedule-a-call-page",
    },

    // ✅ FAQ
    faq: {
      title: "Frequently Asked Questions (FAQ)",

      questions: [
        {
          q: "What is SaaS development?",
          a: "It involves building cloud-based software accessible via subscription.",
        },
        {
          q: "Can you build multi-tenant systems?",
          a: "Yes, we specialize in scalable multi-tenant architectures.",
        },
        {
          q: "Do you support scaling?",
          a: "Yes, we design SaaS systems to handle growth efficiently.",
        },
      ],
    },

    // ✅ DARK CTA
    darkCta: {
      titleLines: [
        "Ready to launch your",
        "SaaS product?",
      ],
      highlight: "Let’s build it together.",
      buttonLabel: "Get Started",
      buttonLink: "/schedule-a-call-page",
      image: "/images/dark.png",
    },
  },
}),


"backup-solutions": createRestServiceEntry({
  slug: "backup-solutions",
  breadcrumb: "Backup Solutions",
  title: "BACKUP & DISASTER RECOVERY SERVICES",
  heading: "Protect your data. Ensure business continuity.",
  description:
    "Secure, automated, and scalable backup solutions to safeguard your critical data.",
  buttonLabel: "Get Backup Solutions",
  image: "/images/man3.png",

  sections: {
    androidServices: {
      title: "Backup & Disaster Recovery Services We Provide",

      services: [
        {
          title: "Cloud Backup Solutions",
          desc: "Secure data backups on AWS, Azure, and Google Cloud.",
        },
        {
          title: "Disaster Recovery Planning",
          desc: "Ensure quick recovery from outages or cyber incidents.",
        },
        {
          title: "Automated Backup Systems",
          desc: "Schedule and manage backups without manual effort.",
        },
        {
          title: "Database Backup",
          desc: "Protect critical databases with reliable backup strategies.",
        },
        {
          title: "File & System Backup",
          desc: "Full system and file-level backups for complete protection.",
        },
        {
          title: "Backup Monitoring & Support",
          desc: "24/7 monitoring to ensure data safety and integrity.",
        },
      ],

      navItems: [
        "Backup Services",
        "Key Facts",
        "Best Practices",
        "Why Choose Us",
        "Process",
        "FAQ",
      ],
    },

    // ✅ KEY FACTS
    keyFacts: {
      tabs: [
        "Why Backup?",
        "Business Benefits",
        "What We Protect",
      ],

      content: [
        {
          title: "Why Backup Solutions Matter",
          body: `Data loss can happen due to cyberattacks, system failures, or human error.

Backup ensures data safety and recovery.

Protects against ransomware attacks.

Maintains business continuity.`,
        },
        {
          title: "Business Benefits",
          body: `Minimize downtime.

Avoid financial loss.

Ensure compliance and data security.

Quick disaster recovery.`,
        },
        {
          title: "What We Protect",
          body: `We secure databases, applications, cloud systems, and enterprise infrastructure.`,
        },
      ],

      sidebar: [
        { title: "What is Disaster Recovery?" },
        { title: "Cloud vs On-Prem Backup" },
      ],
    },

    // ✅ BEST PRACTICES
    bestPractices: {
      title: "Best Practices for Backup Solutions",
      description:
        "Ensure data safety and fast recovery with proven backup strategies.",

      items: [
        {
          title: "Regular Backups",
          content: "Schedule frequent backups to avoid data loss.",
        },
        {
          title: "Offsite Storage",
          content: "Store backups securely in remote locations or cloud.",
        },
        {
          title: "Backup Testing",
          content: "Regularly test backups to ensure recovery readiness.",
        },
      ],
    },

    // ✅ GREEN CTA
    greenCta: {
      image: "/images/green.png",
      text: "Businesses trust us to protect their critical data and systems.",
      buttonLabel: "Talk to Experts",
      buttonLink: "/schedule-a-call-page",
    },

    // ✅ WHY CHOOSE
    whyChoose: {
      title: "Why Choose Us for Backup Solutions?",
      image: "/images/choose.png",

      points: [
        {
          icon: "arrow",
          title: "Reliable Backup Systems",
          desc: "Ensure your data is always secure and recoverable.",
        },
        {
          icon: "location",
          title: "Cloud & Hybrid Expertise",
          desc: "Backup solutions across cloud and on-prem environments.",
        },
        {
          icon: "work",
          title: "24/7 Monitoring",
          desc: "Continuous monitoring for maximum data protection.",
        },
      ],
    },

    // ✅ PROCESS
    process: {
      titleLines: [
        "Our backup process.",
        "Secure, automated,",
        "reliable.",
      ],
      image: "/images/process.png",

      steps: [
        {
          step: "STEP 1",
          title: "Assess Requirements",
          desc: "Analyze your data and backup needs.",
        },
        {
          step: "STEP 2",
          title: "Implement Backup Strategy",
          desc: "Deploy secure and automated backup systems.",
        },
        {
          step: "STEP 3",
          title: "Monitor & Optimize",
          desc: "Continuously monitor and improve backup performance.",
        },
      ],

      buttonLabel: "Secure Your Data",
      buttonLink: "/schedule-a-call-page",
    },

    // ✅ FAQ
    faq: {
      title: "Frequently Asked Questions (FAQ)",

      questions: [
        {
          q: "How often should backups be taken?",
          a: "It depends on your business needs, but daily backups are recommended.",
        },
        {
          q: "Do you provide cloud backup?",
          a: "Yes, we provide secure cloud-based backup solutions.",
        },
        {
          q: "Can you recover lost data?",
          a: "Yes, we ensure quick and reliable data recovery.",
        },
      ],
    },

    // ✅ DARK CTA
    darkCta: {
      titleLines: [
        "Ready to secure your",
        "business data?",
      ],
      highlight: "Let’s protect it today.",
      buttonLabel: "Get Started",
      buttonLink: "/schedule-a-call-page",
      image: "/images/dark.png",
    },
  },
}),

"big-data": createRestServiceEntry({
  slug: "big-data",
  breadcrumb: "Big Data",
  title: "BIG DATA SOLUTIONS",
  heading: "Harness massive data. Unlock real-time insights.",
  description:
    "Process, analyze, and scale large datasets with powerful big data technologies and architectures.",
  buttonLabel: "Explore Big Data Solutions",
  image: "/images/man3.png",

  sections: {
    androidServices: {
      title: "Big Data Services We Provide",

      services: [
        {
          title: "Big Data Architecture",
          desc: "Design scalable distributed systems for high-volume data processing.",
        },
        {
          title: "Data Processing & Analytics",
          desc: "Process large datasets using Spark, Hadoop, and modern frameworks.",
        },
        {
          title: "Real-time Data Streaming",
          desc: "Handle live data streams with Kafka and event-driven systems.",
        },
        {
          title: "Data Lake Implementation",
          desc: "Store and manage structured and unstructured data efficiently.",
        },
        {
          title: "Big Data Consulting",
          desc: "Define strategies and choose the right tech stack for your needs.",
        },
        {
          title: "Performance Optimization",
          desc: "Improve speed, cost efficiency, and scalability of data systems.",
        },
      ],

      navItems: [
        "Big Data Services",
        "Key Facts",
        "Best Practices",
        "Why Choose Us",
        "Process",
        "FAQ",
      ],
    },

    // ✅ KEY FACTS
    keyFacts: {
      tabs: [
        "Why Big Data?",
        "Business Benefits",
        "What We Deliver",
      ],

      content: [
        {
          title: "Why Big Data Matters",
          body: `Organizations generate massive amounts of data daily.

Big data enables processing and analyzing this data efficiently.

Unlock hidden insights.

Drive smarter decisions.`,
        },
        {
          title: "Business Benefits",
          body: `Improve decision-making with data insights.

Enhance customer understanding.

Optimize operations and reduce costs.

Enable predictive analytics.`,
        },
        {
          title: "What We Deliver",
          body: `We build data lakes, analytics platforms, real-time pipelines, and large-scale processing systems.`,
        },
      ],

      sidebar: [
        { title: "What is Hadoop?" },
        { title: "Batch vs Real-Time Processing" },
      ],
    },

    // ✅ BEST PRACTICES
    bestPractices: {
      title: "Best Practices for Big Data Solutions",
      description:
        "Build efficient and scalable systems for handling large-scale data.",

      items: [
        {
          title: "Distributed Architecture",
          content: "Use distributed systems to handle large volumes of data.",
        },
        {
          title: "Data Governance",
          content: "Ensure data quality, consistency, and compliance.",
        },
        {
          title: "Scalable Storage",
          content: "Use data lakes and cloud storage for flexibility.",
        },
      ],
    },

    // ✅ GREEN CTA
    greenCta: {
      image: "/images/green.png",
      text: "Enterprises trust us to handle and scale their big data systems.",
      buttonLabel: "Talk to Data Experts",
      buttonLink: "/schedule-a-call-page",
    },

    // ✅ WHY CHOOSE
    whyChoose: {
      title: "Why Choose Us for Big Data Solutions?",
      image: "/images/choose.png",

      points: [
        {
          icon: "arrow",
          title: "Advanced Big Data Expertise",
          desc: "Experienced in Spark, Hadoop, Kafka, and cloud platforms.",
        },
        {
          icon: "location",
          title: "Scalable Infrastructure",
          desc: "Systems designed to handle petabytes of data.",
        },
        {
          icon: "work",
          title: "Real-Time Processing",
          desc: "Enable instant insights with streaming architectures.",
        },
      ],
    },

    // ✅ PROCESS
    process: {
      titleLines: [
        "Our big data process.",
        "Scalable, efficient,",
        "data-driven.",
      ],
      image: "/images/process.png",

      steps: [
        {
          step: "STEP 1",
          title: "Data Assessment",
          desc: "Analyze your data sources and requirements.",
        },
        {
          step: "STEP 2",
          title: "Architecture Design",
          desc: "Design scalable big data infrastructure.",
        },
        {
          step: "STEP 3",
          title: "Implementation & Optimization",
          desc: "Build pipelines and optimize performance.",
        },
      ],

      buttonLabel: "Start Big Data Project",
      buttonLink: "/schedule-a-call-page",
    },

    // ✅ FAQ
    faq: {
      title: "Frequently Asked Questions (FAQ)",

      questions: [
        {
          q: "What tools do you use for big data?",
          a: "We use Hadoop, Spark, Kafka, and cloud-native tools.",
        },
        {
          q: "Can you handle real-time data processing?",
          a: "Yes, we build real-time streaming pipelines.",
        },
        {
          q: "Is big data suitable for small businesses?",
          a: "Yes, scalable solutions can be tailored to any size.",
        },
      ],
    },

    // ✅ DARK CTA
    darkCta: {
      titleLines: [
        "Ready to unlock insights",
        "from your big data?",
      ],
      highlight: "Let’s build your data platform.",
      buttonLabel: "Get Started",
      buttonLink: "/schedule-a-call-page",
      image: "/images/dark.png",
    },
  },
}),


"cloud-applications": createRestServiceEntry({
  slug: "cloud-applications",
  breadcrumb: "Cloud Applications",
  title: "CLOUD APPLICATION DEVELOPMENT SERVICES",
  heading: "Build scalable, cloud-native applications.",
  description:
    "Design, develop, and deploy high-performance applications on modern cloud infrastructure.",
  buttonLabel: "Build Cloud Applications",
  image: "/images/man3.png",

  sections: {
    androidServices: {
      title: "Cloud Application Services We Provide",

      services: [
        {
          title: "Cloud-Native App Development",
          desc: "Build applications optimized for cloud environments from day one.",
        },
        {
          title: "Microservices Architecture",
          desc: "Design modular, scalable systems using microservices.",
        },
        {
          title: "Cloud Migration",
          desc: "Move legacy systems to AWS, Azure, or Google Cloud.",
        },
        {
          title: "API Development",
          desc: "Develop secure and scalable APIs for cloud applications.",
        },
        {
          title: "DevOps & CI/CD",
          desc: "Automate deployment pipelines for faster releases.",
        },
        {
          title: "Cloud Maintenance & Scaling",
          desc: "Monitor, optimize, and scale applications seamlessly.",
        },
      ],

      navItems: [
        "Cloud Services",
        "Key Facts",
        "Best Practices",
        "Why Choose Us",
        "Process",
        "FAQ",
      ],
    },

    // ✅ KEY FACTS
    keyFacts: {
      tabs: [
        "Why Cloud?",
        "Business Benefits",
        "What We Build",
      ],

      content: [
        {
          title: "Why Cloud Applications Matter",
          body: `Cloud applications enable businesses to scale without infrastructure limitations.

Access from anywhere.

High availability.

Cost-efficient infrastructure.`,
        },
        {
          title: "Business Benefits",
          body: `Reduce infrastructure costs.

Improve scalability and flexibility.

Faster deployment and updates.

Better reliability and uptime.`,
        },
        {
          title: "What We Build",
          body: `We build SaaS apps, enterprise platforms, cloud-native systems, and scalable APIs.`,
        },
      ],

      sidebar: [
        { title: "AWS vs Azure vs GCP" },
        { title: "What is Cloud-Native Development?" },
      ],
    },

    // ✅ BEST PRACTICES
    bestPractices: {
      title: "Best Practices for Cloud Applications",
      description:
        "Ensure scalability, performance, and reliability with cloud best practices.",

      items: [
        {
          title: "Microservices Architecture",
          content: "Build modular systems for flexibility and scaling.",
        },
        {
          title: "Auto Scaling",
          content: "Adjust resources automatically based on demand.",
        },
        {
          title: "Security & Compliance",
          content: "Protect data with encryption and access controls.",
        },
      ],
    },

    // ✅ GREEN CTA
    greenCta: {
      image: "/images/green.png",
      text: "Businesses trust us to build scalable cloud applications.",
      buttonLabel: "Talk to Cloud Experts",
      buttonLink: "/schedule-a-call-page",
    },

    // ✅ WHY CHOOSE
    whyChoose: {
      title: "Why Choose Us for Cloud Applications?",
      image: "/images/choose.png",

      points: [
        {
          icon: "arrow",
          title: "Cloud-Native Expertise",
          desc: "We build apps optimized for AWS, Azure, and GCP.",
        },
        {
          icon: "location",
          title: "Scalable Infrastructure",
          desc: "Applications designed to handle growth seamlessly.",
        },
        {
          icon: "work",
          title: "DevOps-Driven Approach",
          desc: "Faster deployment with CI/CD pipelines.",
        },
      ],
    },

    // ✅ PROCESS
    process: {
      titleLines: [
        "Our cloud process.",
        "Scalable, secure,",
        "efficient.",
      ],
      image: "/images/process.png",

      steps: [
        {
          step: "STEP 1",
          title: "Assess Requirements",
          desc: "Understand your application and infrastructure needs.",
        },
        {
          step: "STEP 2",
          title: "Design Architecture",
          desc: "Plan cloud-native and scalable systems.",
        },
        {
          step: "STEP 3",
          title: "Deploy & Optimize",
          desc: "Launch and continuously improve performance.",
        },
      ],

      buttonLabel: "Start Cloud Project",
      buttonLink: "/schedule-a-call-page",
    },

    // ✅ FAQ
    faq: {
      title: "Frequently Asked Questions (FAQ)",

      questions: [
        {
          q: "Which cloud platforms do you use?",
          a: "We use AWS, Azure, and Google Cloud.",
        },
        {
          q: "Can you migrate existing apps to cloud?",
          a: "Yes, we provide seamless cloud migration services.",
        },
        {
          q: "Do you provide ongoing support?",
          a: "Yes, we offer maintenance and scaling support.",
        },
      ],
    },

    // ✅ DARK CTA
    darkCta: {
      titleLines: [
        "Ready to scale your",
        "application in the cloud?",
      ],
      highlight: "Let’s build it together.",
      buttonLabel: "Get Started",
      buttonLink: "/schedule-a-call-page",
      image: "/images/dark.png",
    },
  },
}),


"crm-systems": createRestServiceEntry({
  slug: "crm-systems",
  breadcrumb: "CRM Systems",
  title: "CRM DEVELOPMENT SERVICES",
  heading: "Build smarter customer relationships with powerful CRM systems.",
  description:
    "Design, develop, and optimize CRM solutions to manage customers, sales, and business workflows efficiently.",
  buttonLabel: "Get CRM Solutions",
  image: "/images/man3.png",

  sections: {
    androidServices: {
      title: "CRM Services We Provide",

      services: [
        {
          title: "Custom CRM Development",
          desc: "Build tailored CRM systems aligned with your business processes.",
        },
        {
          title: "CRM Integration",
          desc: "Integrate CRM with ERP, marketing tools, and third-party systems.",
        },
        {
          title: "Sales Automation",
          desc: "Automate lead tracking, pipelines, and sales workflows.",
        },
        {
          title: "Customer Data Management",
          desc: "Centralize and manage customer data effectively.",
        },
        {
          title: "CRM Migration",
          desc: "Migrate from legacy systems to modern CRM platforms.",
        },
        {
          title: "CRM Maintenance & Support",
          desc: "Continuous updates and performance optimization.",
        },
      ],

      navItems: [
        "CRM Services",
        "Key Facts",
        "Best Practices",
        "Why Choose Us",
        "Process",
        "FAQ",
      ],
    },

    // ✅ KEY FACTS
    keyFacts: {
      tabs: [
        "Why CRM?",
        "Business Benefits",
        "What We Deliver",
      ],

      content: [
        {
          title: "Why CRM Systems Matter",
          body: `CRM systems help businesses manage customer relationships efficiently.

Centralized customer data.

Better communication.

Improved customer experience.`,
        },
        {
          title: "Business Benefits",
          body: `Increase sales productivity.

Improve customer retention.

Streamline business processes.

Better decision-making with insights.`,
        },
        {
          title: "What We Deliver",
          body: `We build custom CRM systems, dashboards, automation tools, and integrations tailored to your business.`,
        },
      ],

      sidebar: [
        { title: "CRM vs ERP: What’s the Difference?" },
        { title: "Top CRM Features for Businesses" },
      ],
    },

    // ✅ BEST PRACTICES
    bestPractices: {
      title: "Best Practices for CRM Development",
      description:
        "Build efficient and scalable CRM systems with proven strategies.",

      items: [
        {
          title: "User-Friendly Design",
          content: "Ensure easy navigation and usability for teams.",
        },
        {
          title: "Data Accuracy",
          content: "Maintain clean and updated customer data.",
        },
        {
          title: "Automation",
          content: "Automate repetitive tasks to increase productivity.",
        },
      ],
    },

    // ✅ GREEN CTA
    greenCta: {
      image: "/images/green.png",
      text: "Businesses trust us to build powerful CRM solutions.",
      buttonLabel: "Talk to CRM Experts",
      buttonLink: "/schedule-a-call-page",
    },

    // ✅ WHY CHOOSE
    whyChoose: {
      title: "Why Choose Us for CRM Systems?",
      image: "/images/choose.png",

      points: [
        {
          icon: "arrow",
          title: "Custom CRM Solutions",
          desc: "We build CRM systems tailored to your workflows.",
        },
        {
          icon: "location",
          title: "Integration Expertise",
          desc: "Seamless integration with your existing tools.",
        },
        {
          icon: "work",
          title: "Scalable Systems",
          desc: "CRM platforms designed to grow with your business.",
        },
      ],
    },

    // ✅ PROCESS
    process: {
      titleLines: [
        "Our CRM process.",
        "Efficient, scalable,",
        "business-focused.",
      ],
      image: "/images/process.png",

      steps: [
        {
          step: "STEP 1",
          title: "Analyze Requirements",
          desc: "Understand your business workflows and needs.",
        },
        {
          step: "STEP 2",
          title: "Develop & Integrate",
          desc: "Build CRM system and integrate with tools.",
        },
        {
          step: "STEP 3",
          title: "Deploy & Optimize",
          desc: "Launch and continuously improve performance.",
        },
      ],

      buttonLabel: "Start CRM Project",
      buttonLink: "/schedule-a-call-page",
    },

    // ✅ FAQ
    faq: {
      title: "Frequently Asked Questions (FAQ)",

      questions: [
        {
          q: "Can you build custom CRM systems?",
          a: "Yes, we develop fully customized CRM solutions.",
        },
        {
          q: "Do you integrate CRM with other tools?",
          a: "Yes, we integrate CRM with ERP, marketing, and analytics tools.",
        },
        {
          q: "Do you provide CRM support?",
          a: "Yes, we offer ongoing maintenance and optimization.",
        },
      ],
    },

    // ✅ DARK CTA
    darkCta: {
      titleLines: [
        "Ready to improve your",
        "customer relationships?",
      ],
      highlight: "Let’s build your CRM system.",
      buttonLabel: "Get Started",
      buttonLink: "/schedule-a-call-page",
      image: "/images/dark.png",
    },
  },
}),

"cybersecurity": createRestServiceEntry({
  slug: "cybersecurity",
  breadcrumb: "Cybersecurity",
  title: "CYBERSECURITY SERVICES",
  heading: "Protect your systems. Secure your digital future.",
  description:
    "Advanced cybersecurity solutions to safeguard your applications, data, and infrastructure.",
  buttonLabel: "Get Cybersecurity Services",
  image: "/images/man3.png",

  sections: {
    androidServices: {
      title: "Cybersecurity Services We Provide",

      services: [
        {
          title: "Security Assessment & Audits",
          desc: "Identify vulnerabilities and strengthen system security.",
        },
        {
          title: "Threat Detection & Monitoring",
          desc: "24/7 monitoring to detect and respond to threats.",
        },
        {
          title: "Network Security",
          desc: "Protect networks from unauthorized access and attacks.",
        },
        {
          title: "Application Security",
          desc: "Secure web and mobile apps against vulnerabilities.",
        },
        {
          title: "Cloud Security",
          desc: "Protect cloud infrastructure and data from breaches.",
        },
        {
          title: "Compliance & Risk Management",
          desc: "Ensure compliance with industry standards and regulations.",
        },
      ],

      navItems: [
        "Security Services",
        "Key Facts",
        "Best Practices",
        "Why Choose Us",
        "Process",
        "FAQ",
      ],
    },

    // ✅ KEY FACTS
    keyFacts: {
      tabs: [
        "Why Cybersecurity?",
        "Business Benefits",
        "What We Secure",
      ],

      content: [
        {
          title: "Why Cybersecurity Matters",
          body: `Cyber threats are increasing rapidly across industries.

Protect sensitive data.

Prevent financial losses.

Ensure business continuity.`,
        },
        {
          title: "Business Benefits",
          body: `Reduce risk of cyberattacks.

Maintain customer trust.

Ensure regulatory compliance.

Minimize downtime and disruptions.`,
        },
        {
          title: "What We Secure",
          body: `We secure applications, networks, cloud systems, and enterprise infrastructure.`,
        },
      ],

      sidebar: [
        { title: "What is Zero Trust Security?" },
        { title: "Top Cybersecurity Threats Today" },
      ],
    },

    // ✅ BEST PRACTICES
    bestPractices: {
      title: "Best Practices for Cybersecurity",
      description:
        "Implement strong security strategies to protect your systems and data.",

      items: [
        {
          title: "Regular Security Audits",
          content: "Continuously identify and fix vulnerabilities.",
        },
        {
          title: "Access Control",
          content: "Limit access based on roles and permissions.",
        },
        {
          title: "Data Encryption",
          content: "Protect sensitive data using encryption standards.",
        },
      ],
    },

    // ✅ GREEN CTA
    greenCta: {
      image: "/images/green.png",
      text: "Companies trust us to secure their digital infrastructure.",
      buttonLabel: "Talk to Security Experts",
      buttonLink: "/schedule-a-call-page",
    },

    // ✅ WHY CHOOSE
    whyChoose: {
      title: "Why Choose Us for Cybersecurity?",
      image: "/images/choose.png",

      points: [
        {
          icon: "arrow",
          title: "Advanced Security Expertise",
          desc: "Experienced professionals in modern security practices.",
        },
        {
          icon: "location",
          title: "24/7 Monitoring",
          desc: "Continuous threat detection and response.",
        },
        {
          icon: "work",
          title: "Compliance-Ready Solutions",
          desc: "Meet industry standards and regulatory requirements.",
        },
      ],
    },

    // ✅ PROCESS
    process: {
      titleLines: [
        "Our security process.",
        "Proactive, reliable,",
        "defense-first.",
      ],
      image: "/images/process.png",

      steps: [
        {
          step: "STEP 1",
          title: "Security Assessment",
          desc: "Identify vulnerabilities and risks.",
        },
        {
          step: "STEP 2",
          title: "Implement Protection",
          desc: "Deploy security solutions and controls.",
        },
        {
          step: "STEP 3",
          title: "Monitor & Improve",
          desc: "Continuously monitor and enhance security.",
        },
      ],

      buttonLabel: "Secure Your Business",
      buttonLink: "/schedule-a-call-page",
    },

    // ✅ FAQ
    faq: {
      title: "Frequently Asked Questions (FAQ)",

      questions: [
        {
          q: "What cybersecurity services do you offer?",
          a: "We provide audits, monitoring, application security, and cloud security.",
        },
        {
          q: "Do you provide 24/7 monitoring?",
          a: "Yes, we offer continuous threat monitoring and response.",
        },
        {
          q: "Can you help with compliance?",
          a: "Yes, we ensure adherence to industry standards and regulations.",
        },
      ],
    },

    // ✅ DARK CTA
    darkCta: {
      titleLines: [
        "Ready to secure your",
        "digital assets?",
      ],
      highlight: "Let’s protect your business.",
      buttonLabel: "Get Started",
      buttonLink: "/schedule-a-call-page",
      image: "/images/dark.png",
    },
  },
}),

"devops": createRestServiceEntry({
  slug: "devops",
  breadcrumb: "DevOps",
  title: "DEVOPS SERVICES",
  heading: "Accelerate development with modern DevOps practices.",
  description:
    "Streamline workflows, automate deployments, and improve collaboration with scalable DevOps solutions.",
  buttonLabel: "Get DevOps Services",
  image: "/images/man3.png",

  sections: {
    androidServices: {
      title: "DevOps Services We Provide",

      services: [
        {
          title: "CI/CD Pipeline Setup",
          desc: "Automate build, test, and deployment processes.",
        },
        {
          title: "Infrastructure as Code (IaC)",
          desc: "Manage infrastructure using tools like Terraform and CloudFormation.",
        },
        {
          title: "Cloud DevOps",
          desc: "Implement DevOps practices on AWS, Azure, and GCP.",
        },
        {
          title: "Containerization & Orchestration",
          desc: "Use Docker and Kubernetes for scalable deployments.",
        },
        {
          title: "Monitoring & Logging",
          desc: "Track system performance and logs using modern tools.",
        },
        {
          title: "DevOps Automation",
          desc: "Automate repetitive tasks to improve efficiency.",
        },
      ],

      navItems: [
        "DevOps Services",
        "Key Facts",
        "Best Practices",
        "Why Choose Us",
        "Process",
        "FAQ",
      ],
    },

    // ✅ KEY FACTS
    keyFacts: {
      tabs: [
        "Why DevOps?",
        "Business Benefits",
        "What We Deliver",
      ],

      content: [
        {
          title: "Why DevOps Matters",
          body: `DevOps bridges the gap between development and operations.

Faster deployments.

Improved collaboration.

Higher software quality.`,
        },
        {
          title: "Business Benefits",
          body: `Reduce time-to-market.

Improve system reliability.

Automate workflows.

Enhance scalability.`,
        },
        {
          title: "What We Deliver",
          body: `We build CI/CD pipelines, cloud infrastructure, monitoring systems, and automated workflows.`,
        },
      ],

      sidebar: [
        { title: "What is CI/CD?" },
        { title: "Docker vs Kubernetes" },
      ],
    },

    // ✅ BEST PRACTICES
    bestPractices: {
      title: "Best Practices for DevOps",
      description:
        "Improve efficiency and scalability with proven DevOps strategies.",

      items: [
        {
          title: "Automation First",
          content: "Automate builds, testing, and deployments.",
        },
        {
          title: "Continuous Monitoring",
          content: "Track performance and detect issues early.",
        },
        {
          title: "Infrastructure as Code",
          content: "Manage infrastructure using code for consistency.",
        },
      ],
    },

    // ✅ GREEN CTA
    greenCta: {
      image: "/images/green.png",
      text: "Teams trust us to streamline their DevOps workflows.",
      buttonLabel: "Talk to DevOps Experts",
      buttonLink: "/schedule-a-call-page",
    },

    // ✅ WHY CHOOSE
    whyChoose: {
      title: "Why Choose Us for DevOps?",
      image: "/images/choose.png",

      points: [
        {
          icon: "arrow",
          title: "Automation-Driven Approach",
          desc: "We automate processes to improve efficiency and speed.",
        },
        {
          icon: "location",
          title: "Cloud Expertise",
          desc: "Deep experience with AWS, Azure, and GCP.",
        },
        {
          icon: "work",
          title: "Scalable Infrastructure",
          desc: "Systems designed for growth and reliability.",
        },
      ],
    },

    // ✅ PROCESS
    process: {
      titleLines: [
        "Our DevOps process.",
        "Automated, scalable,",
        "efficient.",
      ],
      image: "/images/process.png",

      steps: [
        {
          step: "STEP 1",
          title: "Assess Current Setup",
          desc: "Analyze your existing workflows and infrastructure.",
        },
        {
          step: "STEP 2",
          title: "Implement DevOps Tools",
          desc: "Set up CI/CD, automation, and monitoring systems.",
        },
        {
          step: "STEP 3",
          title: "Optimize & Scale",
          desc: "Continuously improve performance and reliability.",
        },
      ],

      buttonLabel: "Start DevOps Transformation",
      buttonLink: "/schedule-a-call-page",
    },

    // ✅ FAQ
    faq: {
      title: "Frequently Asked Questions (FAQ)",

      questions: [
        {
          q: "What tools do you use for DevOps?",
          a: "We use Docker, Kubernetes, Jenkins, GitHub Actions, and Terraform.",
        },
        {
          q: "Can you set up CI/CD pipelines?",
          a: "Yes, we specialize in building automated CI/CD pipelines.",
        },
        {
          q: "Do you provide monitoring solutions?",
          a: "Yes, we implement logging and monitoring systems.",
        },
      ],
    },

    // ✅ DARK CTA
    darkCta: {
      titleLines: [
        "Ready to transform your",
        "development workflow?",
      ],
      highlight: "Let’s implement DevOps.",
      buttonLabel: "Get Started",
      buttonLink: "/schedule-a-call-page",
      image: "/images/dark.png",
    },
  },
}),


"digital-transformation": createRestServiceEntry({
  slug: "digital-transformation",
  breadcrumb: "Digital Transformation",
  title: "DIGITAL TRANSFORMATION SERVICES",
  heading: "Transform your business with modern technology.",
  description:
    "Leverage digital technologies to improve efficiency, innovation, and customer experience.",
  buttonLabel: "Start Transformation",
  image: "/images/man3.png",

  sections: {
    androidServices: {
      title: "Digital Transformation Services We Provide",

      services: [
        {
          title: "Business Process Automation",
          desc: "Automate workflows to improve efficiency and reduce manual effort.",
        },
        {
          title: "Legacy System Modernization",
          desc: "Upgrade outdated systems to modern, scalable solutions.",
        },
        {
          title: "Cloud Transformation",
          desc: "Move infrastructure and applications to cloud platforms.",
        },
        {
          title: "Data & Analytics Integration",
          desc: "Enable data-driven decision-making with analytics solutions.",
        },
        {
          title: "Digital Strategy Consulting",
          desc: "Define roadmap for digital growth and innovation.",
        },
        {
          title: "Technology Implementation",
          desc: "Deploy modern tools and platforms across your organization.",
        },
      ],

      navItems: [
        "Transformation Services",
        "Key Facts",
        "Best Practices",
        "Why Choose Us",
        "Process",
        "FAQ",
      ],
    },

    // ✅ KEY FACTS
    keyFacts: {
      tabs: [
        "Why Transform?",
        "Business Benefits",
        "What We Deliver",
      ],

      content: [
        {
          title: "Why Digital Transformation Matters",
          body: `Businesses must evolve to stay competitive in the digital era.

Improve operational efficiency.

Enhance customer experience.

Enable innovation.`,
        },
        {
          title: "Business Benefits",
          body: `Increase productivity.

Reduce costs through automation.

Improve agility and scalability.

Drive data-driven decisions.`,
        },
        {
          title: "What We Deliver",
          body: `We deliver automation systems, modern applications, cloud solutions, and digital strategies.`,
        },
      ],

      sidebar: [
        { title: "What is Digital Transformation?" },
        { title: "Top Trends in Digital Innovation" },
      ],
    },

    // ✅ BEST PRACTICES
    bestPractices: {
      title: "Best Practices for Digital Transformation",
      description:
        "Adopt modern strategies to successfully transform your business.",

      items: [
        {
          title: "Start with Strategy",
          content: "Define clear goals and roadmap before implementation.",
        },
        {
          title: "Focus on User Experience",
          content: "Ensure solutions improve customer and employee experience.",
        },
        {
          title: "Leverage Data",
          content: "Use analytics to drive decisions and improvements.",
        },
      ],
    },

    // ✅ GREEN CTA
    greenCta: {
      image: "/images/green.png",
      text: "Organizations trust us to drive digital transformation.",
      buttonLabel: "Talk to Experts",
      buttonLink: "/schedule-a-call-page",
    },

    // ✅ WHY CHOOSE
    whyChoose: {
      title: "Why Choose Us for Digital Transformation?",
      image: "/images/choose.png",

      points: [
        {
          icon: "arrow",
          title: "End-to-End Transformation",
          desc: "From strategy to implementation and optimization.",
        },
        {
          icon: "location",
          title: "Industry Expertise",
          desc: "Experience across multiple industries and domains.",
        },
        {
          icon: "work",
          title: "Scalable Solutions",
          desc: "Technologies that grow with your business.",
        },
      ],
    },

    // ✅ PROCESS
    process: {
      titleLines: [
        "Our transformation process.",
        "Strategic, scalable,",
        "impact-driven.",
      ],
      image: "/images/process.png",

      steps: [
        {
          step: "STEP 1",
          title: "Assess & Plan",
          desc: "Evaluate current systems and define transformation roadmap.",
        },
        {
          step: "STEP 2",
          title: "Implement Solutions",
          desc: "Deploy modern technologies and automation tools.",
        },
        {
          step: "STEP 3",
          title: "Optimize & Scale",
          desc: "Continuously improve performance and scalability.",
        },
      ],

      buttonLabel: "Start Your Journey",
      buttonLink: "/schedule-a-call-page",
    },

    // ✅ FAQ
    faq: {
      title: "Frequently Asked Questions (FAQ)",

      questions: [
        {
          q: "What is digital transformation?",
          a: "It involves adopting modern technologies to improve business processes and customer experience.",
        },
        {
          q: "Can you modernize legacy systems?",
          a: "Yes, we upgrade legacy systems to scalable, modern solutions.",
        },
        {
          q: "Do you provide consulting?",
          a: "Yes, we offer strategy and implementation consulting.",
        },
      ],
    },

    // ✅ DARK CTA
    darkCta: {
      titleLines: [
        "Ready to transform your",
        "business digitally?",
      ],
      highlight: "Let’s build your future.",
      buttonLabel: "Get Started",
      buttonLink: "/schedule-a-call-page",
      image: "/images/dark.png",
    },
  },
}),


"erp-development": createRestServiceEntry({
  slug: "erp-development",
  breadcrumb: "ERP Development",
  title: "ERP DEVELOPMENT SERVICES",
  heading: "Streamline operations with powerful ERP systems.",
  description:
    "Design and build scalable ERP solutions to manage business processes, resources, and data in one place.",
  buttonLabel: "Build ERP System",
  image: "/images/man3.png",

  sections: {
    androidServices: {
      title: "ERP Development Services We Provide",

      services: [
        {
          title: "Custom ERP Development",
          desc: "Build ERP systems tailored to your business workflows.",
        },
        {
          title: "ERP Integration",
          desc: "Integrate ERP with CRM, HR, finance, and other systems.",
        },
        {
          title: "Business Process Automation",
          desc: "Automate operations to improve efficiency and reduce errors.",
        },
        {
          title: "ERP Migration & Upgrade",
          desc: "Upgrade legacy ERP systems to modern platforms.",
        },
        {
          title: "Cloud ERP Solutions",
          desc: "Deploy ERP systems on scalable cloud infrastructure.",
        },
        {
          title: "ERP Maintenance & Support",
          desc: "Ensure performance, updates, and long-term reliability.",
        },
      ],

      navItems: [
        "ERP Services",
        "Key Facts",
        "Best Practices",
        "Why Choose Us",
        "Process",
        "FAQ",
      ],
    },

    // ✅ KEY FACTS
    keyFacts: {
      tabs: [
        "Why ERP?",
        "Business Benefits",
        "What We Deliver",
      ],

      content: [
        {
          title: "Why ERP Systems Matter",
          body: `ERP systems unify business processes into a single platform.

Centralized data.

Improved visibility.

Better decision-making.`,
        },
        {
          title: "Business Benefits",
          body: `Increase operational efficiency.

Reduce manual errors.

Improve collaboration across departments.

Enable real-time insights.`,
        },
        {
          title: "What We Deliver",
          body: `We build ERP systems for finance, HR, inventory, operations, and enterprise management.`,
        },
      ],

      sidebar: [
        { title: "ERP vs CRM: Key Differences" },
        { title: "Top ERP Features for Enterprises" },
      ],
    },

    // ✅ BEST PRACTICES
    bestPractices: {
      title: "Best Practices for ERP Development",
      description:
        "Build scalable and efficient ERP systems with proven strategies.",

      items: [
        {
          title: "Modular Architecture",
          content: "Design ERP systems in modules for flexibility.",
        },
        {
          title: "Data Centralization",
          content: "Maintain a single source of truth for business data.",
        },
        {
          title: "User Training & Adoption",
          content: "Ensure teams are trained to maximize ERP usage.",
        },
      ],
    },

    // ✅ GREEN CTA
    greenCta: {
      image: "/images/green.png",
      text: "Enterprises trust us to build reliable ERP systems.",
      buttonLabel: "Talk to ERP Experts",
      buttonLink: "/schedule-a-call-page",
    },

    // ✅ WHY CHOOSE
    whyChoose: {
      title: "Why Choose Us for ERP Development?",
      image: "/images/choose.png",

      points: [
        {
          icon: "arrow",
          title: "Custom ERP Solutions",
          desc: "ERP systems tailored to your business needs.",
        },
        {
          icon: "location",
          title: "Integration Expertise",
          desc: "Seamless integration with existing enterprise tools.",
        },
        {
          icon: "work",
          title: "Scalable Architecture",
          desc: "ERP systems designed to grow with your organization.",
        },
      ],
    },

    // ✅ PROCESS
    process: {
      titleLines: [
        "Our ERP process.",
        "Structured, scalable,",
        "enterprise-ready.",
      ],
      image: "/images/process.png",

      steps: [
        {
          step: "STEP 1",
          title: "Analyze Requirements",
          desc: "Understand workflows and business needs.",
        },
        {
          step: "STEP 2",
          title: "Develop & Integrate",
          desc: "Build ERP modules and integrate systems.",
        },
        {
          step: "STEP 3",
          title: "Deploy & Optimize",
          desc: "Launch ERP system and improve performance.",
        },
      ],

      buttonLabel: "Start ERP Project",
      buttonLink: "/schedule-a-call-page",
    },

    // ✅ FAQ
    faq: {
      title: "Frequently Asked Questions (FAQ)",

      questions: [
        {
          q: "Can you build custom ERP systems?",
          a: "Yes, we develop ERP systems tailored to your business.",
        },
        {
          q: "Do you integrate ERP with other systems?",
          a: "Yes, we integrate ERP with CRM, HR, and finance tools.",
        },
        {
          q: "Do you provide ERP support?",
          a: "Yes, we offer maintenance and optimization services.",
        },
      ],
    },

    // ✅ DARK CTA
    darkCta: {
      titleLines: [
        "Ready to streamline your",
        "business operations?",
      ],
      highlight: "Let’s build your ERP system.",
      buttonLabel: "Get Started",
      buttonLink: "/schedule-a-call-page",
      image: "/images/dark.png",
    },
  },
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