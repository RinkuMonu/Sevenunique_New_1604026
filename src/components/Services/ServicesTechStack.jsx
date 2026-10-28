"use client";

import { useState } from "react";
import { Cloud, Cpu, Layout, Server, Database, Check } from "lucide-react";

const techCategories = [
  {
    id: "ai",
    label: "AI & Machine Learning",
    icon: Cpu,
    description: "Production-ready tools for generative models, vector search, and automated intelligence.",
    items: [
      { name: "OpenAI & Anthropic", role: "LLM Foundation Models", level: "Enterprise Tier" },
      { name: "PyTorch & TensorFlow", role: "Custom Neural Networks & Training", level: "Core ML" },
      { name: "LangChain & LlamaIndex", role: "Agent Orchestration & RAG", level: "Orchestration" },
      { name: "ChromaDB & Pinecone", role: "Vector Embeddings & Search", level: "Vector DB" },
      { name: "Hugging Face", role: "Pre-trained Model Deployment", level: "Model Hub" },
      { name: "FastAPI & ONNX", role: "High-Throughput Model Serving", level: "Inference Engine" },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    icon: Cloud,
    description: "Elastic, secure infrastructure designed for 99.99% availability and instant scaling.",
    items: [
      { name: "Amazon Web Services (AWS)", role: "Cloud Infrastructure & Lambda", level: "Certified" },
      { name: "Google Cloud Platform (GCP)", role: "BigQuery & Vertex AI", level: "Certified" },
      { name: "Microsoft Azure", role: "Enterprise Cloud Hosting", level: "Enterprise Tier" },
      { name: "Docker & Kubernetes (K8s)", role: "Containerized Orchestration", level: "Standard" },
      { name: "Terraform", role: "Infrastructure as Code (IaC)", level: "Standard" },
      { name: "GitHub Actions & ArgoCD", role: "Automated CI/CD Delivery", level: "Pipeline" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend & Mobile",
    icon: Layout,
    description: "Responsive, accessible, 60fps digital interfaces and cross-platform mobile apps.",
    items: [
      { name: "Next.js & React 19", role: "Server-Rendered Web Applications", level: "Primary" },
      { name: "TypeScript", role: "Type-Safe Robust Codebases", level: "Standard" },
      { name: "Tailwind CSS & Radix", role: "Modern Design Systems & Tokens", level: "Styling" },
      { name: "React Native", role: "Cross-Platform iOS & Android", level: "Mobile" },
      { name: "Flutter", role: "High-Performance Native UX", level: "Mobile" },
      { name: "Framer Motion", role: "Fluid Micro-Interactions", level: "Animation" },
    ],
  },
  {
    id: "backend",
    label: "Backend & APIs",
    icon: Server,
    description: "Resilient microservices, GraphQL gateways, and high-concurrency event streams.",
    items: [
      { name: "Node.js & NestJS", role: "High-Concurrency Async Services", level: "Core" },
      { name: "Python & Django/FastAPI", role: "Data Engines & API Services", level: "Core" },
      { name: "Go (Golang)", role: "Ultra-Low Latency Microservices", level: "High Scale" },
      { name: "Java & Spring Boot", role: "Enterprise Banking Engines", level: "Enterprise" },
      { name: "GraphQL & REST", role: "Flexible Client-Side API Layers", level: "API Tier" },
      { name: "Apache Kafka & RabbitMQ", role: "Event-Driven Message Queues", level: "Messaging" },
    ],
  },
  {
    id: "database",
    label: "Databases & Storage",
    icon: Database,
    description: "Optimized relational, NoSQL, in-memory, and analytical storage layers.",
    items: [
      { name: "PostgreSQL", role: "Relational ACID Core Database", level: "Primary SQL" },
      { name: "MongoDB", role: "Flexible Document Storage", level: "NoSQL" },
      { name: "Redis", role: "In-Memory Caching & Session Stores", level: "Performance" },
      { name: "Supabase", role: "Real-Time Backend & Auth", level: "BaaS" },
      { name: "ClickHouse & BigQuery", role: "Petabyte Analytical Warehouses", level: "Analytics" },
      { name: "AWS S3 & Cloudflare R2", role: "Distributed Object Storage", level: "Blob Storage" },
    ],
  },
];

export default function ServicesTechStack() {
  const [activeTab, setActiveTab] = useState("ai");

  const currentCategory = techCategories.find((cat) => cat.id === activeTab) || techCategories[0];

  return (
    <section className="bg-[#0b1324] py-20 sm:py-24 lg:py-28 text-white relative overflow-hidden">
      {/* AMBIENT GLOW */}
      <div className="pointer-events-none absolute top-0 right-1/4 h-[400px] w-[400px] rounded-full bg-[#ff6b3d]/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 left-10 h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#ff8f6b]">
            <span className="h-2 w-2 rounded-full bg-[#ff6b3d]" />
            Modern Tech Ecosystem
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Battle-Tested Tools.{" "}
            <span className="bg-gradient-to-r from-[#ff6b3d] to-[#ffa07a] bg-clip-text text-transparent">
              Zero Vendor Lock-in.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed">
            We build with production-ready, open-standards technologies that your internal engineering
            team can comfortably scale, audit, and own.
          </p>
        </div>

        {/* CATEGORY TABS */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {techCategories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2.5 rounded-2xl px-5 py-3 text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#ff6b3d] text-white shadow-lg shadow-orange-500/25 scale-102"
                    : "bg-white/[0.05] border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* ACTIVE STACK CARD */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-10 backdrop-blur-xl">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <span>{currentCategory.label}</span>
              </h3>
              <p className="mt-1 text-sm text-gray-400">
                {currentCategory.description}
              </p>
            </div>
            <span className="self-start sm:self-auto rounded-full bg-white/10 px-3.5 py-1 text-xs font-medium text-orange-300 border border-white/15">
              Production Verified
            </span>
          </div>

          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {currentCategory.items.map((item, idx) => (
              <div
                key={idx}
                className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 transition-all duration-300 hover:border-[#ff6b3d]/40 hover:bg-white/[0.06] hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h4 className="text-base font-bold text-white group-hover:text-[#ff8f6b] transition-colors">
                    {item.name}
                  </h4>
                  <span className="rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-medium text-gray-300 border border-white/10">
                    {item.level}
                  </span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {item.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
