"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  ArrowRight,
  Sparkles,
  Cpu,
  Server,
  Globe,
  Smartphone,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Layers,
  Code2,
  Lock,
  SlidersHorizontal,
} from "lucide-react";

export const allServices = [
  {
    slug: "ai-development",
    name: "AI Development & Generative Solutions",
    category: "AI & Machine Learning",
    description:
      "We build intelligent AI solutions that move far beyond prototypes. Harness custom LLMs, generative AI assistants, and autonomous reasoning agents engineered for enterprise workflows.",
    image: "/images/aiagent.png",
    icon: Cpu,
    capabilities: [
      "Custom Generative AI & Copilots",
      "Autonomous Multi-Agent Systems",
      "Enterprise LLM Fine-Tuning & RAG",
    ],
    tech: ["Python", "PyTorch", "LangChain", "OpenAI"],
  },
  {
    slug: "machine-learning",
    name: "Machine Learning & Predictive Systems",
    category: "AI & Machine Learning",
    description:
      "Transform business data into automated decisions, predictive insights, and competitive advantages with custom ML models, neural networks, and scalable inference pipelines.",
    image: "/images/ml.png",
    icon: Sparkles,
    capabilities: [
      "Predictive Analytics & Forecasting",
      "Computer Vision & NLP Pipelines",
      "Continuous MLOps & Monitoring",
    ],
    tech: ["TensorFlow", "Scikit-Learn", "FastAPI", "Kubeflow"],
  },
  {
    slug: "ai-solutions",
    name: "Autonomous AI Agents & Intelligent Automation",
    category: "AI & Machine Learning",
    description:
      "Deploy self-governing autonomous agents that handle complex multi-step reasoning, automated market intelligence, customer support, and operational workflows.",
    image: "/images/nlp.png",
    icon: Terminal,
    capabilities: [
      "Multi-Agent Workflow Orchestration",
      "Vector Embeddings & Semantic Search",
      "Automated Knowledge Retrieval",
    ],
    tech: ["LlamaIndex", "ChromaDB", "Anthropic", "Python"],
  },
  {
    slug: "backend-development",
    name: "Back-End Engineering & Microservices",
    category: "Cloud & Backend",
    description:
      "We design and build secure, resilient, cloud-native backend systems engineered to handle millions of transactions with sub-millisecond latencies and high availability.",
    image: "/images/backup.png",
    icon: Server,
    capabilities: [
      "High-Concurrency Microservices",
      "Event-Driven Distributed Architecture",
      "Database Optimization & Sharding",
    ],
    tech: ["Node.js", "Go", "PostgreSQL", "Redis"],
  },
  {
    slug: "api-integration",
    name: "API Integration & Cloud Ecosystems",
    category: "Cloud & Backend",
    description:
      "Connect fragmented systems with robust RESTful and GraphQL APIs, high-security payment gateways, third-party platform sync, and real-time event streaming architectures.",
    image: "/images/connection.png",
    icon: Layers,
    capabilities: [
      "REST & GraphQL Gateway Architecture",
      "Payment & Identity Integrations",
      "Real-time Webhook & Event Streaming",
    ],
    tech: ["GraphQL", "Apache Kafka", "AWS Lambda", "Docker"],
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity & Cloud Application Security",
    category: "Cloud & Backend",
    description:
      "Protect your enterprise software, cloud infrastructure, and sensitive customer data with penetration testing, security auditing, and SOC-2 / ISO compliance alignment.",
    image: "/images/usecases.png",
    icon: ShieldCheck,
    capabilities: [
      "Cloud Infrastructure Hardening",
      "Penetration Testing & Vulnerability Scans",
      "SOC-2 & ISO Compliance Strategy",
    ],
    tech: ["AWS IAM", "CloudFlare", "HashiCorp Vault", "Kubernetes"],
  },
  {
    slug: "web-development",
    name: "Enterprise Web Application Development",
    category: "Web & Mobile",
    description:
      "Develop ultra-fast, responsive, and maintainable web applications and enterprise portals built on modern architectures with peak performance and clean UX.",
    image: "/images/webd.png",
    icon: Globe,
    capabilities: [
      "High-Performance Web Applications",
      "Scalable SaaS Portals & Dashboards",
      "Next.js SSR & Server Actions Architecture",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    slug: "mobile-development",
    name: "Mobile App Development (iOS & Android)",
    category: "Web & Mobile",
    description:
      "From native Swift and Kotlin applications to cross-platform React Native and Flutter solutions, we build engaging, intuitive mobile apps with offline capability.",
    image: "/images/mobileapp.png",
    icon: Smartphone,
    capabilities: [
      "Native iOS & Android Engineering",
      "Cross-Platform React Native & Flutter",
      "Offline-First Architecture & Real-Time Sync",
    ],
    tech: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  {
    slug: "frontend-development",
    name: "Front-End Development & UI Engineering",
    category: "Web & Mobile",
    description:
      "Create accessible, 60fps responsive interfaces that translate complex user flows into effortless experiences backed by modular, reusable design systems.",
    image: "/images/frontend.jpeg",
    icon: Code2,
    capabilities: [
      "Design System & Component Library Creation",
      "Interactive Micro-Animations & Fluid UX",
      "Core Web Vitals & Speed Optimization",
    ],
    tech: ["React", "Vue.js", "TypeScript", "Framer Motion"],
  },
  {
    slug: "cms-development",
    name: "CMS & Headless Content Platforms",
    category: "Web & Mobile",
    description:
      "Empower your marketing and editorial teams with headless CMS platforms and custom content architectures that simplify publishing without restricting front-end design.",
    image: "/images/crm.png",
    icon: Layers,
    capabilities: [
      "Headless CMS (Strapi, Sanity, Contentful)",
      "Multi-Site Content Modeling & Workflows",
      "Automated Omnichannel Publishing",
    ],
    tech: ["Strapi", "Sanity", "WordPress Headless", "GraphQL"],
  },
  {
    slug: "software-development",
    name: "Custom Software Engineering & Modernization",
    category: "Enterprise & Quality",
    description:
      "We design, build, and deploy tailored enterprise software, bespoke ERP engines, and workflow automation systems built specifically around your business rules.",
    image: "/images/build-img.jpg",
    icon: Code2,
    capabilities: [
      "Full-Lifecycle Custom Software Engineering",
      "Legacy Codebase Refactoring & Migration",
      "Mission-Critical Internal Systems",
    ],
    tech: ["Java", "C# .NET", "Python", "PostgreSQL"],
  },
  {
    slug: "qa-testing",
    name: "QA Automation & Continuous Testing",
    category: "Enterprise & Quality",
    description:
      "Guarantee product reliability and shorten release cycles with automated testing suites, regression pipelines, stress benchmarks, and end-to-end quality validation.",
    image: "/images/qa.png",
    icon: CheckCircle2,
    capabilities: [
      "End-to-End Test Automation Frameworks",
      "Load, Stress & Concurrency Benchmarking",
      "Continuous CI/CD Quality Gates",
    ],
    tech: ["Playwright", "Cypress", "Selenium", "Postman"],
  },
  {
    slug: "ui-ux-design",
    name: "UI/UX Design & Product Strategy",
    category: "Enterprise & Quality",
    description:
      "Transform complex systems into elegant, intuitive digital interfaces. We combine user journey mapping, design systems, and rapid prototyping to maximize user conversion.",
    image: "/images/uiux.jpeg",
    icon: Sparkles,
    capabilities: [
      "User Research & Journey Architecture",
      "Figma Interactive Design Systems",
      "Conversion Rate & Usability Audits",
    ],
    tech: ["Figma", "Design Tokens", "Wireframing", "Usability Testing"],
  },
  {
    slug: "blockchain",
    name: "Blockchain & Decentralized Architecture",
    category: "Enterprise & Quality",
    description:
      "Develop secure, auditable decentralized applications, smart contract protocols, and Web3 asset management platforms built for transparency and security.",
    image: "/images/nlp.png",
    icon: Lock,
    capabilities: [
      "Secure Smart Contract Development & Audits",
      "Decentralized Finance (DeFi) Protocols",
      "Enterprise Blockchain & Tokenization",
    ],
    tech: ["Solidity", "EVM", "Ethereum", "Web3.js"],
  },
];

const categories = [
  "All Services",
  "AI & Machine Learning",
  "Cloud & Backend",
  "Web & Mobile",
  "Enterprise & Quality",
];

export default function ServicesGrid() {
  const [activeCategory, setActiveCategory] = useState("All Services");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = useMemo(() => {
    return allServices.filter((service) => {
      const matchesCategory =
        activeCategory === "All Services" || service.category === activeCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        service.name.toLowerCase().includes(q) ||
        service.description.toLowerCase().includes(q) ||
        service.capabilities.some((cap) => cap.toLowerCase().includes(q)) ||
        service.tech.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="services-catalog" className="bg-[#f8fafc] py-20 sm:py-24 lg:py-28 text-[#0f172a] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#ff6b3d]">
              <span className="h-2 w-2 rounded-full bg-[#ff6b3d]" />
              Our Core Capabilities
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0f172a] sm:text-4xl md:text-5xl">
              Software Development &{" "}
              <span className="text-[#ff6b3d]">AI Engineering</span>
            </h2>
            <p className="mt-4 max-w-2xl text-base sm:text-lg text-gray-600 leading-relaxed">
              Explore specialized practices designed to modernize legacy workflows, engineer scalable
              cloud architectures, and ship intelligent digital products.
            </p>
          </div>

          {/* SEARCH BOX */}
          <div className="relative w-full md:w-80 shrink-0">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by tech or service..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-2xl border border-gray-200 bg-white py-3.5 pl-11 pr-4 text-sm text-gray-800 placeholder-gray-400 shadow-sm outline-none transition focus:border-[#ff6b3d] focus:ring-4 focus:ring-orange-100"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-gray-400 hover:text-gray-700 bg-gray-100 px-2 py-0.5 rounded-full"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* CATEGORY TABS */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar mb-10">
          <div className="flex items-center gap-2 shrink-0">
            <SlidersHorizontal className="h-4 w-4 text-gray-400 mr-1 hidden sm:block" />
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "bg-[#0f172a] text-white shadow-md shadow-slate-900/10"
                      : "bg-white border border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-900"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="ml-auto hidden lg:block text-xs font-medium text-gray-500">
            Showing <span className="font-bold text-gray-900">{filteredServices.length}</span> of{" "}
            {allServices.length} services
          </div>
        </div>

        {/* SERVICES GRID */}
        {filteredServices.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-gray-300 bg-white p-12 text-center">
            <Search className="mx-auto h-12 w-12 text-gray-300 mb-3" />
            <h3 className="text-lg font-bold text-gray-800">No services found</h3>
            <p className="mt-1 text-sm text-gray-500">
              Try searching with different keywords like &quot;AI&quot;, &quot;Cloud&quot;, &quot;Mobile&quot;, or &quot;Python&quot;.
            </p>
            <button
              onClick={() => {
                setActiveCategory("All Services");
                setSearchQuery("");
              }}
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#ff6b3d] px-5 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-[#f45d2e]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service) => {
              const IconComponent = service.icon || Sparkles;

              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-[26px] border border-gray-200/90 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#ff6b3d]/40 hover:shadow-[0_20px_50px_rgba(255,107,61,0.12)]"
                >
                  {/* TOP IMAGE WITH OVERLAY */}
                  <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-108 opacity-85 group-hover:opacity-100"
                    />

                    {/* GRADIENT SCRIM */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />

                    {/* TOP BADGES */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="rounded-full bg-white/20 backdrop-blur-md border border-white/25 px-3 py-1 text-[11px] font-semibold text-white tracking-wide">
                        {service.category}
                      </span>

                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-[#ff8f6b] group-hover:bg-[#ff6b3d] group-hover:text-white transition-colors duration-300">
                        <IconComponent className="h-4 w-4" />
                      </div>
                    </div>

                    {/* BOTTOM TITLE ON IMAGE */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white leading-snug drop-shadow-sm group-hover:text-[#ff8f6b] transition-colors duration-300">
                        {service.name}
                      </h3>
                    </div>
                  </div>

                  {/* BODY CONTENT */}
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      {/* DESCRIPTION */}
                      <p className="text-sm text-gray-600 leading-relaxed font-normal">
                        {service.description}
                      </p>

                      {/* CAPABILITIES BULLETS */}
                      <div className="mt-5 space-y-2 border-t border-gray-100 pt-4">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                          Key Capabilities
                        </p>
                        {service.capabilities.map((cap, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-gray-700">
                            <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#ff6b3d]" />
                            <span className="line-clamp-1">{cap}</span>
                          </div>
                        ))}
                      </div>

                      {/* TECH STACK CHIPS */}
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {service.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-lg bg-gray-100 px-2.5 py-1 text-[11px] font-medium text-gray-600 border border-gray-200/60"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CARD FOOTER */}
                    <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-xs font-bold text-[#ff6b3d] uppercase tracking-wider">
                        Explore Service
                      </span>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-50 text-[#ff6b3d] group-hover:bg-[#ff6b3d] group-hover:text-white transition-all duration-300 group-hover:translate-x-1">
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
