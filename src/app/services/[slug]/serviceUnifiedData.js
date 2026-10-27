import { serviceData } from "./data";
import { restServiceData } from "./rest-data";

export const serviceCategoryMap = {
  "AI & Machine Learning": [
    "ai-development",
    "machine-learning",
    "ai-solutions",
  ],
  "Cloud & Backend Engineering": [
    "backend-development",
    "api-integration",
    "cybersecurity",
    "cloud-applications",
    "devops",
    "backup-solutions",
  ],
  "Web & Mobile Engineering": [
    "web-development",
    "mobile-development",
    "mobile-app-development",
    "android-app-development",
    "ios-app-development",
    "frontend-development",
    "cms-development",
  ],
  "Enterprise & Scalable Systems": [
    "software-development",
    "qa-testing",
    "ui-ux-design",
    "blockchain",
    "erp-development",
    "crm-systems",
    "saas-development",
    "ecommerce-development",
    "data-engineering",
    "big-data",
    "business-intelligence",
    "digital-transformation",
    "digital-marketing",
  ],
};

export function getServiceCategory(slug) {
  const normalized = slug.replace(/-development$/, "");
  for (const [category, slugs] of Object.entries(serviceCategoryMap)) {
    if (slugs.includes(slug) || slugs.some((s) => s.startsWith(normalized))) {
      return category;
    }
  }
  return "Engineering Services";
}

const defaultUseCasesImages = [
  "/logos/office1.jpeg",
  "/logos/office2.png",
  "/logos/office3.png",
];

// Rich bespoke catalog definitions for primary services
const bespokeServices = {
  "ai-development": {
    name: "AI & Generative Copilot Solutions",
    category: "AI & Machine Learning",
    eyebrow: "Production-Grade AI Systems",
    headline: "Custom Artificial Intelligence & Copilot Engineering",
    description: "Build, fine-tune, and deploy custom LLM applications, generative copilots, and autonomous AI agents designed to automate complex workflows and accelerate business growth.",
    image: "/images/aiagent.png",
    proofStats: [
      ["Enterprise", "Production-grade code"],
      ["99.9%", "Model reliability"],
      ["Top 1%", "AI research engineers"],
      ["Rapid", "4-week MVP cycles"],
    ],
    highlights: [
      "Custom Generative Copilots",
      "Enterprise RAG & Embeddings",
      "Autonomous Multi-Agent Logic",
      "Continuous Model Evaluation",
    ],
    what: "AI Development provides businesses with full-lifecycle engineering for custom large language models, retrieval-augmented generation (RAG) platforms, and cognitive automation pipelines. From proprietary model fine-tuning to real-time inference orchestration, we build reliable AI that respects data sovereignty and delivers real ROI.",
    benefits: [
      "Proprietary Data Privacy & Security",
      "Sub-second Inference Latency",
      "Domain-Specific Accuracy & Guardrails",
      "Predictable Operational Scaling",
    ],
    capabilities: [
      "Fine-tuned LLMs & Multi-modal Copilots",
      "Vector Search & Semantic Knowledge Graphs",
      "Autonomous Multi-Agent Orchestration",
      "Custom Computer Vision & Speech Pipelines",
      "Enterprise Guardrails & Hallucination Mitigation",
      "Scalable Cloud GPU Inference Hosting",
    ],
    steps: [
      {
        title: "Feasibility & Data Architecture Review",
        desc: "We analyze your proprietary data, use cases, and business goals to determine the optimal model architecture and compute requirements.",
      },
      {
        title: "Model Selection, RAG & Fine-Tuning",
        desc: "We build retrieval pipelines, fine-tune domain models, and implement strict security guardrails against hallucinations.",
      },
      {
        title: "API & Backend Integration",
        desc: "We connect the AI models directly into your databases, mobile apps, ERPs, and customer channels via low-latency endpoints.",
      },
      {
        title: "Benchmark Testing & Guardrail Audits",
        desc: "Rigorous red-teaming, stress-testing, and accuracy benchmarking to ensure enterprise-grade safety and reliability.",
      },
      {
        title: "Continuous Observability & MLOps",
        desc: "Deploy automated monitoring for prompt drifts, accuracy degradation, and compute cost optimization in production.",
      },
    ],
    useCases: [
      {
        title: "Internal Enterprise Knowledge Copilot",
        desc: "Enable teams to query thousands of technical documents, legal contracts, and ERP records in seconds with verified citations.",
      },
      {
        title: "Automated Customer Support Agents",
        desc: "Resolve 75%+ of customer queries across web and WhatsApp with context-aware, multimodal reasoning agents.",
      },
      {
        title: "Predictive Intelligence & Workflow Automation",
        desc: "Automate complex data classification, document parsing, and financial anomaly detection with precision.",
      },
    ],
    faq: [
      {
        question: "How do you protect proprietary corporate data with AI?",
        answer: "We deploy private VPC models or air-gapped instances where your training data, queries, and vector embeddings are never used to train external foundation models. All data is encrypted in transit and at rest.",
      },
      {
        question: "How fast can we launch an AI MVP?",
        answer: "Our standard proof-of-concept sprint delivers a functioning, benchmarked prototype connected to your data within 3 to 4 weeks.",
      },
      {
        question: "Can these models integrate with our existing ERP or CRM?",
        answer: "Yes. We expose secure RESTful and GraphQL endpoints, webhook triggers, and direct SDKs that integrate seamlessly with your current software stack.",
      },
      {
        question: "What happens when foundation models update or drift?",
        answer: "We build our solutions on model-agnostic abstraction layers. If a better or cheaper model is released, we can swap or re-tune without disrupting your production workflows.",
      },
    ],
  },

  "backend-development": {
    name: "Back-End & Distributed Systems",
    category: "Cloud & Backend Engineering",
    eyebrow: "Resilient Cloud Backends",
    headline: "High-Concurrency Cloud Backend & Microservices",
    description: "Design and build secure, horizontally scalable backend platforms and distributed microservices engineered to process high-volume transactions with sub-second response times.",
    image: "/images/backup.png",
    proofStats: [
      ["Sub-50ms", "API latency benchmark"],
      ["99.99%", "Uptime SLAs"],
      ["Millions", "Daily transactions"],
      ["Zero-Downtime", "Deployments"],
    ],
    highlights: [
      "Microservices & Event-Driven Systems",
      "High-Throughput Database Sharding",
      "Real-Time WebSocket & gRPC Streaming",
      "Automated CI/CD Deployment Pipelines",
    ],
    what: "Back-End Engineering provides mission-critical computational power, database architecture, and integration layers that modern applications depend upon. We build resilient architectures that resist failures, scale on demand, and enforce zero-trust security.",
    benefits: [
      "High Concurrency & Load Tolerance",
      "Clean Modular Code Architecture",
      "Enterprise Data Protection & Encryption",
      "Cost-Optimized Cloud Infrastructure",
    ],
    capabilities: [
      "Distributed Microservices (Go, Node.js, Python)",
      "Event Streams & Message Brokers (Kafka, RabbitMQ)",
      "High-Performance Database Sharding & Caching",
      "RESTful, GraphQL & gRPC API Gateways",
      "Role-Based Access Control (RBAC) & OAuth2",
      "Automated Container Orchestration with Kubernetes",
    ],
    steps: [
      {
        title: "Architecture & Data Schema Blueprint",
        desc: "We model domain schemas, identify concurrency bottlenecks, and design decoupled services for predictable horizontal scaling.",
      },
      {
        title: "API Design & Core Logic Implementation",
        desc: "We write clean, test-driven backend services with idempotent handlers, error boundaries, and connection pooling.",
      },
      {
        title: "Database Indexing & Caching Strategy",
        desc: "Optimize queries, set up Redis caching layers, and partition read/write replicas for high read throughput.",
      },
      {
        title: "Security Auditing & Load Testing",
        desc: "Simulate massive traffic spikes and perform penetration tests to guarantee stability under extreme conditions.",
      },
      {
        title: "Continuous Observability & Monitoring",
        desc: "Integrate distributed tracing, APM, and automated alerting to catch anomalies before they affect users.",
      },
    ],
    useCases: [
      {
        title: "High-Frequency Transaction Processing",
        desc: "Engineered backends capable of reconciling financial ledger transfers and processing live checkouts at scale.",
      },
      {
        title: "Multi-Tenant SaaS Infrastructure",
        desc: "Secure tenant data isolation, granular subscription controls, and dynamic provisioning for B2B SaaS platforms.",
      },
      {
        title: "Real-Time Event & IoT Streaming",
        desc: "Ingest and process continuous sensor telemetry or live user events with Kafka and stream workers.",
      },
    ],
    faq: [
      {
        question: "Which backend languages and frameworks do you specialize in?",
        answer: "We primarily build in Node.js/TypeScript, Go, Python, and Java, leveraging cloud-native tools across AWS, GCP, and Azure.",
      },
      {
        question: "How do you ensure zero downtime during database migrations?",
        answer: "We utilize multi-phase expansion-and-contract schema migrations with blue/green deployment strategies so production users never experience interruptions.",
      },
      {
        question: "Can you help modernize an existing legacy monolithic backend?",
        answer: "Yes. We frequently execute strangler-fig pattern migrations to safely peel away legacy monolithic modules into clean, modern microservices.",
      },
      {
        question: "What security standards do your backends adhere to?",
        answer: "We build following OWASP Top 10 guidelines, SOC 2 compliance standards, end-to-end encryption, and strict role-based access controls.",
      },
    ],
  },

  "web-development": {
    name: "Enterprise Web Application Engineering",
    category: "Web & Mobile Engineering",
    eyebrow: "Performant Web Platforms",
    headline: "Fast, Modern & Scalable Web Applications",
    description: "Develop responsive, accessible, and ultra-fast web platforms and digital portals built on cutting-edge Next.js and React architectures with flawless user experience.",
    image: "/images/webd.png",
    proofStats: [
      ["100/100", "Lighthouse targets"],
      ["Top 1%", "Frontend architects"],
      ["Responsive", "Mobile-first delivery"],
      ["SEO-Ready", "Dynamic metadata"],
    ],
    highlights: [
      "Next.js SSR & React Server Actions",
      "Sub-second Core Web Vitals",
      "Interactive Design System Libraries",
      "Cross-Browser & WCAG Accessibility",
    ],
    what: "Web Development combines responsive UI design with enterprise engineering standards to deliver web applications that engage users and convert visitors. We build lightning-fast web interfaces that scale gracefully across mobile, tablet, and desktop viewports.",
    benefits: [
      "Optimized Core Web Vitals & Search Rankings",
      "Modular, Maintainable Component Design",
      "Lightning Fast Page Loads & Zero Clutter",
      "Smooth Omnichannel Responsiveness",
    ],
    capabilities: [
      "Next.js App Router & Hybrid Static/SSR Architecture",
      "Tailwind CSS & Tokenized Modern Design Systems",
      "State Management & Offline Synchronization",
      "Enterprise Single Sign-On (SSO) & Social Auth",
      "Real-time Dashboards & Interactive Analytics",
      "Automated End-to-End Testing with Playwright",
    ],
    steps: [
      {
        title: "Product UX Wireframing & Information Architecture",
        desc: "We define user journeys, responsive wireframes, and design token hierarchies before writing production code.",
      },
      {
        title: "Design System & Component Library Assembly",
        desc: "Build accessible, reusable UI components that enforce brand consistency across every viewport.",
      },
      {
        title: "Full-Stack Integration & State Flow",
        desc: "Connect backend APIs, handle async loading states, and implement optimistic UI updates.",
      },
      {
        title: "Cross-Device QA & Speed Optimization",
        desc: "Comprehensive testing on mobile, tablet, and desktop devices alongside Core Web Vitals tuning.",
      },
      {
        title: "Production Deployment & CDN Edge Delivery",
        desc: "Deploy to enterprise CDN edge networks with automated caching, compression, and monitoring.",
      },
    ],
    useCases: [
      {
        title: "Customer Portals & Interactive Dashboards",
        desc: "Intuitive self-service dashboards that enable users to manage accounts, analyze data, and run workflows effortlessly.",
      },
      {
        title: "Enterprise SaaS Web Applications",
        desc: "Feature-rich business applications engineered for high engagement, low latency, and continuous updates.",
      },
      {
        title: "High-Traffic Content & Media Platforms",
        desc: "Search-optimized, dynamically indexed web platforms capable of handling millions of concurrent visitors.",
      },
    ],
    faq: [
      {
        question: "Why do you recommend Next.js for web development?",
        answer: "Next.js provides the optimal balance of Server-Side Rendering (SSR) for search engines, client-side speed for users, and built-in edge caching.",
      },
      {
        question: "Is the web application fully responsive on smartphones?",
        answer: "Yes, every interface is designed mobile-first and tested rigorously across diverse screen sizes, operating systems, and network bandwidths.",
      },
      {
        question: "Do you build custom design systems?",
        answer: "Yes, we construct modular, tokenized component libraries that make future feature additions rapid and consistent.",
      },
      {
        question: "How do you handle ongoing maintenance and feature updates?",
        answer: "We offer dedicated engineering retainers and SLAs covering proactive maintenance, security patches, performance audits, and continuous feature releases.",
      },
    ],
  },

  "mobile-development": {
    name: "Mobile App Development (iOS & Android)",
    category: "Web & Mobile Engineering",
    eyebrow: "Native & Cross-Platform Apps",
    headline: "Mobile Applications That Users Love and Rely On",
    description: "Build intuitive, high-performance mobile applications across iOS and Android with seamless native device integrations, offline-first architectures, and top app store ratings.",
    image: "/images/mobileapp.png",
    proofStats: [
      ["4.8+ ★", "App Store ratings target"],
      ["60 FPS", "Silky UI animations"],
      ["Offline", "Data synchronization"],
      ["Unified", "Single codebase efficiency"],
    ],
    highlights: [
      "Native iOS (Swift) & Android (Kotlin)",
      "Cross-Platform Flutter & React Native",
      "Biometrics, Push & Hardware APIs",
      "App Store & Play Store Approval Guarantee",
    ],
    what: "Mobile Development provides end-to-end engineering from product strategy and UI design to mobile architecture and store publishing. We build applications that load instantly, operate smoothly in poor connectivity, and make full use of native device hardware.",
    benefits: [
      "Faster Time-to-Market with Cross-Platform Tools",
      "Native Performance & 60fps Micro-interactions",
      "Robust Offline-First SQLite/WatermelonDB Sync",
      "Smooth App Store & Google Play Launch",
    ],
    capabilities: [
      "React Native & Flutter Cross-Platform Engineering",
      "Native Swift & Kotlin Module Integration",
      "Push Notification & Deep Linking Architecture",
      "Biometric Security (Face ID & Fingerprint)",
      "In-App Purchases & Payment Gateway Integration",
      "Continuous CI/CD Mobile Build Pipelines",
    ],
    steps: [
      {
        title: "Mobile UX & Prototype Design",
        desc: "Design touch-optimized user journeys, gesture navigations, and human interface guidelines compliant mockups.",
      },
      {
        title: "App Architecture & Data Caching Setup",
        desc: "Architect local offline storage, secure keychain storage, and background sync routines.",
      },
      {
        title: "Feature Implementation & Native Bridge",
        desc: "Develop core feature modules, integrating camera, location, notifications, and payment SDKs.",
      },
      {
        title: "Real Device Lab Testing & QA",
        desc: "Test across 50+ physical Android and iOS devices covering various screen ratios, memory capacities, and OS versions.",
      },
      {
        title: "Store Submission & Launch Management",
        desc: "Manage complete Apple App Store and Google Play Store review processes, metadata setup, and launch rollout.",
      },
    ],
    useCases: [
      {
        title: "On-Demand Services & Booking Apps",
        desc: "Location-aware mobile apps with live map tracking, driver dispatch, instant notifications, and in-app checkout.",
      },
      {
        title: "Fintech & Mobile Wallet Solutions",
        desc: "Biometrically secured mobile banking and payment applications with instant QR scanning and account management.",
      },
      {
        title: "Enterprise Field & Operational Apps",
        desc: "Offline-enabled mobile tools that empower field agents, technicians, and sales reps to capture data anywhere.",
      },
    ],
    faq: [
      {
        question: "Should I build native apps or use React Native / Flutter?",
        answer: "For 90% of business applications, cross-platform with React Native or Flutter cuts development time by 40% while preserving native speed. If your app requires heavy 3D rendering or custom Bluetooth hardware protocols, we recommend pure native Swift/Kotlin.",
      },
      {
        question: "Do you assist with Apple and Google Store approvals?",
        answer: "Yes, our team handles all submission guidelines, privacy manifests, store assets, and review communications until your app is live.",
      },
      {
        question: "How do you ensure the app works with poor network connectivity?",
        answer: "We engineer offline-first architectures using local caching and background synchronization that queues user actions and syncs automatically when online.",
      },
      {
        question: "Can existing web systems connect to the mobile app?",
        answer: "Yes, our mobile apps interface cleanly with your existing REST or GraphQL APIs, ensuring live data synchronization across web and mobile platforms.",
      },
    ],
  },

  "cybersecurity": {
    name: "Cybersecurity & Cloud Protection",
    category: "Cloud & Backend Engineering",
    eyebrow: "Zero-Trust Security",
    headline: "Enterprise Cloud Application & Infrastructure Security",
    description: "Protect critical digital assets, customer data, and cloud workloads with penetration testing, automated vulnerability monitoring, and regulatory compliance frameworks.",
    image: "/images/cybersecurity.png",
    proofStats: [
      ["Zero", "Breach tolerance"],
      ["SOC 2", "Compliance alignment"],
      ["24/7", "Threat monitoring"],
      ["OWASP", "Top 10 fortified"],
    ],
    highlights: [
      "Penetration Testing & Vulnerability Scans",
      "Cloud Infrastructure Hardening (AWS/GCP/Azure)",
      "Zero-Trust Network & IAM Architecture",
      "Automated Continuous Security Pipelines",
    ],
    what: "Cybersecurity Services protect modern enterprises against evolving threats. We combine offensive security testing with defensive cloud architecture to seal vulnerabilities, protect databases, and ensure compliance with ISO 27001, SOC 2, and GDPR.",
    benefits: [
      "Proactive Threat Elimination Before Breaches",
      "Regulatory Compliance & Customer Trust",
      "Secure DevSecOps CI/CD Integration",
      "Comprehensive Disaster Recovery Readiness",
    ],
    capabilities: [
      "Web & Mobile Application Penetration Testing",
      "Cloud Security Posture Management (CSPM)",
      "Identity & Access Management (IAM) Hardening",
      "Automated Dependency & Container Vulnerability Scanning",
      "API Security & Rate-Limiting Gateways",
      "Incident Response Planning & Disaster Recovery",
    ],
    steps: [
      {
        title: "Threat Modeling & Attack Surface Audit",
        desc: "Identify exposed endpoints, misconfigured cloud storage, and architectural weak spots across your infrastructure.",
      },
      {
        title: "Penetration Testing & Vulnerability Discovery",
        desc: "Ethical security researchers simulate real-world attacks against your APIs, databases, and client applications.",
      },
      {
        title: "Remediation & Infrastructure Hardening",
        desc: "We work directly with your engineering team to patch code flaws, implement cryptographic safeguards, and enforce least-privilege IAM.",
      },
      {
        title: "DevSecOps Automation & CI/CD Security",
        desc: "Embed automated static analysis (SAST) and dynamic analysis (DAST) directly into your pull request pipelines.",
      },
      {
        title: "Compliance Documentation & Continuous Monitoring",
        desc: "Prepare audit-ready reports for ISO 27001 / SOC 2 certification and activate 24/7 cloud telemetry alerting.",
      },
    ],
    useCases: [
      {
        title: "Fintech & Payment Gateway Security",
        desc: "Ensure PCI-DSS compliance, tokenize sensitive cardholder data, and safeguard financial transaction ledgers.",
      },
      {
        title: "Healthcare & Sensitive Records Protection",
        desc: "Implement end-to-end encryption and audit logging to protect confidential patient and user data.",
      },
      {
        title: "Enterprise Cloud Workload Defense",
        desc: "Harden Kubernetes clusters, VPC configurations, and serverless compute against privilege escalation and data exfiltration.",
      },
    ],
    faq: [
      {
        question: "How often should our company perform penetration testing?",
        answer: "Industry standards recommend thorough third-party penetration testing at least annually, or whenever significant architectural changes are deployed to production.",
      },
      {
        question: "Do you help us achieve SOC 2 or ISO 27001 certifications?",
        answer: "Yes, our security engineers implement the exact technical controls, access policies, and audit trails required by certification assessors.",
      },
      {
        question: "Will penetration testing cause disruption to our live users?",
        answer: "No, we carefully coordinate test execution, utilizing staging replicas or controlled traffic throttles to avoid any disruption to production services.",
      },
      {
        question: "What deliverable do we receive upon test completion?",
        answer: "You receive an executive summary for stakeholders, an audit-ready compliance document, and a detailed technical report with exact steps to remediate each finding.",
      },
    ],
  },

  "qa-testing": {
    name: "QA Automation & Continuous Quality",
    category: "Enterprise & Scalable Systems",
    eyebrow: "Zero-Defect Engineering",
    headline: "Automated QA & Continuous Quality Engineering",
    description: "Eliminate software bugs, shorten release cycles, and deliver flawless digital experiences through automated testing frameworks, performance stress benchmarks, and continuous CI/CD quality gates.",
    image: "/images/qa.png",
    proofStats: [
      ["80%+", "Automated test coverage"],
      ["10x", "Faster regression cycles"],
      ["Zero", "Critical release regressions"],
      ["24/7", "Automated pipeline checks"],
    ],
    highlights: [
      "End-to-End Test Automation (Playwright & Cypress)",
      "API Performance & Concurrency Benchmarking",
      "Cross-Browser & Multi-Device Validation",
      "Continuous Quality Gates in CI/CD",
    ],
    what: "QA Automation helps engineering organizations ship faster with complete confidence. By combining automated regression suites, API contract testing, and performance benchmarking, we eliminate manual bottlenecks and ensure every release meets the highest quality standards.",
    benefits: [
      "Drastically Reduced Time-to-Market",
      "Consistent 80%+ Test Coverage Across Repositories",
      "Early Bug Detection in Development Sprints",
      "Guaranteed Cross-Device Compatibility",
    ],
    capabilities: [
      "Web UI End-to-End Automation (Playwright, Selenium)",
      "Mobile App Automation (Appium, Detox)",
      "API Contract & Load Testing (k6, Postman, JMeter)",
      "Visual Regression & Design System Audits",
      "Continuous CI/CD Integration (GitHub Actions, GitLab)",
      "Security & Penetration Quality Scans",
    ],
    steps: [
      {
        title: "Test Strategy & Coverage Analysis",
        desc: "We analyze critical user paths, identify failure-prone workflows, and create a comprehensive automated testing matrix.",
      },
      {
        title: "Framework Architecture & Test Scripting",
        desc: "Build scalable, maintainable test suites utilizing modern frameworks like Playwright and Cypress with reusable page-object models.",
      },
      {
        title: "API & Performance Stress Testing",
        desc: "Simulate concurrent user spikes to benchmark latency, database response times, and failure recovery under heavy load.",
      },
      {
        title: "CI/CD Pipeline Integration",
        desc: "Integrate automated test runs into pull request workflows to block regressions before code reaches production.",
      },
      {
        title: "Reporting Dashboard & Maintenance",
        desc: "Provide real-time test execution dashboards and maintain test suites alongside ongoing product iterations.",
      },
    ],
    useCases: [
      {
        title: "Rapid SaaS Release Pipelines",
        desc: "Enable daily production deployments with automated smoke and regression tests that complete in minutes.",
      },
      {
        title: "E-Commerce Checkout & Payment Validation",
        desc: "Ensure cart, checkout, payment gateways, and order confirmation flows function flawlessly under peak holiday traffic.",
      },
      {
        title: "Multi-Platform Mobile Application QA",
        desc: "Automate user flow testing across fragmented Android and iOS device ecosystems with zero manual overhead.",
      },
    ],
    faq: [
      {
        question: "Can automated testing replace manual QA completely?",
        answer: "Automation handles repetitive regression, performance, and API tests, freeing manual testers to focus on exploratory testing, UX nuances, and edge case discovery.",
      },
      {
        question: "Which automated testing tools do you recommend?",
        answer: "We primarily utilize Playwright for web UI, k6 for load testing, and Postman/REST-assured for API verification due to their speed and reliability.",
      },
      {
        question: "How long does it take to set up an automation suite?",
        answer: "We typically set up the core framework, CI/CD integration, and first critical test cases within 2 to 3 weeks.",
      },
      {
        question: "Can you train our in-house team to maintain the tests?",
        answer: "Yes, we structure our test code cleanly and conduct comprehensive handover sessions with documentation so your team can easily add new test cases.",
      },
    ],
  },
};

// Generic factory for any service slug that extracts available data or applies high-standard defaults
export function getUnifiedServiceData(slug) {
  // 1. Check if we have a bespoke entry
  if (bespokeServices[slug]) {
    const bespoke = bespokeServices[slug];
    return {
      slug,
      name: bespoke.name,
      category: bespoke.category || getServiceCategory(slug),
      eyebrow: bespoke.eyebrow,
      headline: bespoke.headline,
      description: bespoke.description,
      image: bespoke.image,
      proofStats: bespoke.proofStats,
      highlights: bespoke.highlights,
      what: bespoke.what,
      benefits: bespoke.benefits,
      capabilities: bespoke.capabilities,
      steps: bespoke.steps,
      useCases: bespoke.useCases,
      useCaseImages: defaultUseCasesImages,
      faq: bespoke.faq,
    };
  }

  // 2. Check serviceData or restServiceData
  const rest = restServiceData?.[slug];
  const standard = serviceData?.[slug] || serviceData?.[`${slug}-development`];

  // Derive human title
  const cleanTitle = slug
    .replace(/-development$/, "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  const category = getServiceCategory(slug);

  // Compute image based on slug
  let image = "/images/build-img.jpg";
  if (slug.includes("android")) image = "/images/android.png";
  else if (slug.includes("ios")) image = "/images/ios.png";
  else if (slug.includes("mobile")) image = "/images/mobileapp.png";
  else if (slug.includes("ai") || slug.includes("ml")) image = "/images/aiagent.png";
  else if (slug.includes("cloud")) image = "/images/cloud.png";
  else if (slug.includes("devops")) image = "/images/devops.png";
  else if (slug.includes("data") || slug.includes("big-data")) image = "/images/data-engg.png";
  else if (slug.includes("cyber") || slug.includes("security")) image = "/images/cybersecurity.png";
  else if (slug.includes("web") || slug.includes("frontend")) image = "/images/webd.png";
  else if (slug.includes("ecommerce") || slug.includes("ecomm")) image = "/images/ecomm.png";
  else if (slug.includes("saas")) image = "/images/saas.png";
  else if (slug.includes("erp") || slug.includes("crm")) image = "/images/erp.png";
  else if (slug.includes("blockchain")) image = "/images/fullstack.png";
  else if (slug.includes("ui") || slug.includes("design")) image = "/images/uiux.jpeg";

  const headline =
    standard?.hero?.heading ||
    rest?.hero?.heading ||
    `Enterprise ${cleanTitle} Engineering Solutions`;

  const description =
    standard?.hero?.description ||
    rest?.hero?.description ||
    `Build, scale, and optimize high-performance ${cleanTitle} solutions engineered for security, reliability, and measurable business growth.`;

  const what =
    `Our ${cleanTitle} practice delivers full-lifecycle engineering designed to eliminate technical debt, improve architectural resiliency, and accelerate release velocity. We partner with ambitious organizations to build secure, future-ready systems that scale seamlessly.`;

  // Capabilities
  let capabilities = [
    `Custom ${cleanTitle} Architecture & Delivery`,
    "High-Performance System Optimization",
    "Enterprise Security & Access Controls",
    "Continuous CI/CD & Deployment Pipelines",
    "Cross-System Integration & Modern APIs",
    "Production Monitoring & SLA Maintenance",
  ];

  if (rest?.sections?.androidServices?.services) {
    capabilities = rest.sections.androidServices.services
      .slice(0, 6)
      .map((s) => s.title);
  } else if (standard?.backendServices?.items) {
    capabilities = standard.backendServices.items
      .slice(0, 6)
      .map((s) => s.title);
  }

  // Benefits
  let benefits = [
    "Enterprise-Grade Scalability & Performance",
    "Dedicated Top 1% Senior Engineers",
    "Predictable Sprint-Based Milestones",
    "Full IP Ownership & Security Assurance",
  ];

  if (rest?.sections?.whyChoose?.items) {
    benefits = rest.sections.whyChoose.items
      .slice(0, 4)
      .map((i) => i.title);
  }

  // Steps
  let steps = [
    {
      title: "Discovery & Technical Feasibility",
      desc: `We analyze your existing workflows, architecture constraints, and roadmap requirements to build a clear implementation plan.`,
    },
    {
      title: "Architecture & System Design",
      desc: `Design scalable schemas, API specifications, and modular components adhering to industry standards.`,
    },
    {
      title: "Agile Sprint Development",
      desc: `Iterative, test-driven engineering with transparent sprint demos and continuous delivery updates.`,
    },
    {
      title: "Rigorous QA & Security Hardening",
      desc: `Comprehensive regression testing, vulnerability scanning, and performance benchmarking.`,
    },
    {
      title: "Production Deployment & Scaling",
      desc: `Zero-downtime deployment backed by automated observability, monitoring, and proactive support.`,
    },
  ];

  if (rest?.sections?.process?.steps) {
    steps = rest.sections.process.steps.slice(0, 5).map((st) => ({
      title: st.title || st.heading,
      desc: st.desc || st.description || "Guided execution following proven engineering standards.",
    }));
  }

  // Use cases
  const useCases = [
    {
      title: `Mission-Critical ${cleanTitle} Modernization`,
      desc: `Upgrade existing architectures to cloud-native platforms with zero disruption to active customer operations.`,
    },
    {
      title: `High-Throughput Digital Operations`,
      desc: `Engineer robust workflows capable of scaling under heavy concurrency and peak commercial traffic.`,
    },
    {
      title: `End-to-End Enterprise Integration`,
      desc: `Unify disparate internal databases, external partner APIs, and modern frontends into a cohesive ecosystem.`,
    },
  ];

  // FAQ
  let faq = [
    {
      question: `What is SevenUnique's approach to ${cleanTitle}?`,
      answer: `We assign senior specialists who embed directly with your team, applying modern architectural standards, clean code principles, and rigorous automated testing.`,
    },
    {
      question: `How fast can an engagement begin?`,
      answer: `Our dedicated engineering pods can onboard and begin sprint delivery within 1 to 2 weeks following initial discovery alignment.`,
    },
    {
      question: `Do you provide post-launch support and SLAs?`,
      answer: `Yes, we provide ongoing maintenance retainers covering infrastructure monitoring, performance tuning, security patches, and continuous feature updates.`,
    },
    {
      question: `Who owns the intellectual property and code?`,
      answer: `You maintain 100% full intellectual property ownership and source code access from day one of the engagement.`,
    },
  ];

  if (standard?.faq?.items) {
    faq = standard.faq.items.slice(0, 4);
  } else if (rest?.sections?.faq?.items) {
    faq = rest.sections.faq.items.slice(0, 4).map((f) => ({
      question: f.q || f.question,
      answer: f.a || f.answer,
    }));
  }

  return {
    slug,
    name: `${cleanTitle} Services`,
    category,
    eyebrow: `${cleanTitle} Practice`,
    headline,
    description,
    image,
    proofStats: [
      ["Enterprise", "Production standards"],
      ["Top 1%", "Senior engineering talent"],
      ["99.9%", "System reliability target"],
      ["Agile", "Bi-weekly sprint demos"],
    ],
    highlights: [
      "Modular Clean Architecture",
      "Robust Security & Encryption",
      "Automated CI/CD Workflows",
      "Predictable Sprint Governance",
    ],
    what,
    benefits,
    capabilities,
    steps,
    useCases,
    useCaseImages: defaultUseCasesImages,
    faq,
  };
}

export const allKnownServiceSlugs = [
  "ai-development",
  "ai-solutions",
  "android-app-development",
  "api-integration",
  "backend-development",
  "backup-solutions",
  "big-data",
  "blockchain",
  "business-intelligence",
  "cloud-applications",
  "cms-development",
  "crm-systems",
  "cybersecurity",
  "data-engineering",
  "devops",
  "digital-marketing",
  "digital-transformation",
  "ecommerce-development",
  "erp-development",
  "frontend-development",
  "ios-app-development",
  "machine-learning",
  "mobile-app-development",
  "mobile-development",
  "qa-testing",
  "saas-development",
  "software-development",
  "ui-ux-design",
  "web-development",
];
