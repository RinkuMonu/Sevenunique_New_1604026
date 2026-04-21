"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const technologies = [
  // A
  { name: "AI",                   slug: "ai",                   category: "Data Science",   color: "#7C3AED", logo: null,                                              textLogo: "Artificial\nIntelligence", textColor: "#7C3AED" },
  { name: "Amazon Web Services",  slug: "amazon-web-services",  category: "Cloud Computing",color: "#FF9900", logo: "https://cdn.simpleicons.org/amazonaws/FF9900" },
  { name: "Android",              slug: "android",              category: "Mobile",         color: "#3DDC84", logo: "https://cdn.simpleicons.org/android/3DDC84" },
  { name: "Angular",              slug: "angular",              category: "JavaScript",     color: "#DD0031", logo: "https://cdn.simpleicons.org/angular/DD0031" },
  { name: "API",                  slug: "api",                  category: "JavaScript",     color: "#FF6B35", logo: null,                                              textLogo: "API",                      textColor: "#FF6B35" },
  { name: "ASP.NET",              slug: "dotnet",               category: "Java",           color: "#512BD4", logo: "https://cdn.simpleicons.org/dotnet/512BD4" },
  { name: "Azure",                slug: "azure",                category: "Cloud Computing",color: "#0078D4", logo: "https://cdn.simpleicons.org/microsoftazure/0078D4" },
  // B
  { name: "Blockchain",           slug: "blockchain",           category: "Databases",      color: "#2EC49B", logo: null,                                              textLogo: "Blockchain",               textColor: "#2EC49B" },
  // C
  { name: "C",                    slug: "c",                    category: "Java",           color: "#00599C", logo: "https://cdn.simpleicons.org/c/00599C" },
  { name: "C#",                   slug: "csharp",               category: "Java",           color: "#239120", logo: "https://cdn.simpleicons.org/csharp/239120" },
  { name: "C++",                  slug: "cpp",                  category: "Java",           color: "#00599C", logo: "https://cdn.simpleicons.org/cplusplus/00599C" },
  { name: "Cardano",              slug: "cardano",              category: "Databases",      color: "#0033AD", logo: "https://cdn.simpleicons.org/cardano/0033AD" },
  { name: "Chaos Monkey",         slug: "chaos-monkey",         category: "DevOps and QA",  color: "#222222", logo: null,                                              textLogo: "🐵\nChaos",               textColor: "#222" },
  { name: "Cryptocurrency",       slug: "cryptocurrency",       category: "Databases",      color: "#F7931A", logo: null,                                              textLogo: "Cryptocurrency",           textColor: "#3B82F6" },
  // D
  { name: "Django",               slug: "django",               category: "Python",         color: "#092E20", logo: "https://cdn.simpleicons.org/django/092E20" },
  { name: "Docker",               slug: "docker",               category: "DevOps and QA",  color: "#2496ED", logo: "https://cdn.simpleicons.org/docker/2496ED" },
  // E
  { name: "Elixir",               slug: "elixir",               category: "Databases",      color: "#4B275F", logo: "https://cdn.simpleicons.org/elixir/4B275F" },
  // G
  { name: "Google Cloud",         slug: "google-cloud",         category: "Cloud Computing",color: "#4285F4", logo: "https://cdn.simpleicons.org/googlecloud/4285F4" },
  { name: "GraphQL",              slug: "graphql",              category: "JavaScript",     color: "#E10098", logo: "https://cdn.simpleicons.org/graphql/E10098" },
  { name: "GitHub Actions",       slug: "github-actions",       category: "DevOps and QA",  color: "#2088FF", logo: "https://cdn.simpleicons.org/githubactions/2088FF" },
  // J
  { name: "Java",                 slug: "java",                 category: "Java",           color: "#ED8B00", logo: "https://cdn.simpleicons.org/openjdk/ED8B00" },
  { name: "JavaScript",           slug: "javascript",           category: "JavaScript",     color: "#F7DF1E", logo: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "Jira",                 slug: "jira",                 category: "DevOps and QA",  color: "#0052CC", logo: "https://cdn.simpleicons.org/jira/0052CC" },
  { name: "jQuery",               slug: "jquery",               category: "JavaScript",     color: "#0769AD", logo: "https://cdn.simpleicons.org/jquery/0769AD" },
  // K
  { name: "Kubernetes",           slug: "kubernetes",           category: "DevOps and QA",  color: "#326CE5", logo: "https://cdn.simpleicons.org/kubernetes/326CE5" },
  // L
  { name: "Laravel",              slug: "laravel",              category: "PHP",            color: "#FF2D20", logo: "https://cdn.simpleicons.org/laravel/FF2D20" },
  { name: "Linux",                slug: "linux",                category: "DevOps and QA",  color: "#FCC624", logo: "https://cdn.simpleicons.org/linux/FCC624" },
  // M
  { name: "MongoDB",              slug: "mongodb",              category: "Databases",      color: "#47A248", logo: "https://cdn.simpleicons.org/mongodb/47A248" },
  // N
  { name: "Next.js",              slug: "nextjs",               category: "JavaScript",     color: "#000000", logo: "https://cdn.simpleicons.org/nextdotjs/000000" },
  { name: "Node.js",              slug: "nodejs",               category: "JavaScript",     color: "#339933", logo: "https://cdn.simpleicons.org/nodedotjs/339933" },
  // P
  { name: "Pandas",               slug: "pandas",               category: "Data Science",   color: "#150458", logo: "https://cdn.simpleicons.org/pandas/150458" },
  { name: "PHP",                  slug: "php",                  category: "PHP",            color: "#777BB4", logo: "https://cdn.simpleicons.org/php/777BB4" },
  { name: "PostgreSQL",           slug: "postgresql",           category: "Databases",      color: "#4169E1", logo: "https://cdn.simpleicons.org/postgresql/4169E1" },
  { name: "Python",               slug: "python",               category: "Python",         color: "#3776AB", logo: "https://cdn.simpleicons.org/python/3776AB" },
  // R
  { name: "React",                slug: "react",                category: "JavaScript",     color: "#61DAFB", logo: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Redis",                slug: "redis",                category: "Databases",      color: "#DC382D", logo: "https://cdn.simpleicons.org/redis/DC382D" },
  // S
  { name: "Shopify",              slug: "shopify",              category: "JavaScript",     color: "#7AB55C", logo: "https://cdn.simpleicons.org/shopify/7AB55C" },
  { name: "Spring Boot",          slug: "spring-boot",          category: "Java",           color: "#6DB33F", logo: "https://cdn.simpleicons.org/springboot/6DB33F" },
  { name: "Swift",                slug: "swift",                category: "Mobile",         color: "#FA7343", logo: "https://cdn.simpleicons.org/swift/FA7343" },
  // T
  { name: "TensorFlow",           slug: "tensorflow",           category: "Data Science",   color: "#FF6F00", logo: "https://cdn.simpleicons.org/tensorflow/FF6F00" },
  { name: "Terraform",            slug: "terraform",            category: "DevOps and QA",  color: "#7B42BC", logo: "https://cdn.simpleicons.org/terraform/7B42BC" },
  { name: "TypeScript",           slug: "typescript",           category: "JavaScript",     color: "#3178C6", logo: "https://cdn.simpleicons.org/typescript/3178C6" },
  // U
  { name: "Unity",                slug: "unity",                category: "JavaScript",     color: "#000000", logo: "https://cdn.simpleicons.org/unity/000000" },
  // V
  { name: "Vue.js",               slug: "vuejs",                category: "JavaScript",     color: "#4FC08D", logo: "https://cdn.simpleicons.org/vuedotjs/4FC08D" },
];

const categories = [
  "All", "Cloud Computing", "Data Science", "Databases",
  "DevOps and QA", "Java", "JavaScript", "PHP", "Python",
];

/* ── Tech icon (logo or colored text fallback) ── */
function TechIcon({ tech, className = "w-20 h-20" }) {
  const [errored, setErrored] = useState(false);

  if (tech.logo && !errored) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={tech.logo}
        alt={tech.name}
        className={`${className} object-contain group-hover:scale-110 transition-transform duration-200`}
        onError={() => setErrored(true)}
      />
    );
  }

  return (
    <div
      className="text-center font-bold text-xl leading-snug whitespace-pre-line px-2"
      style={{ color: tech.textColor || tech.color }}
    >
      {tech.textLogo || tech.name}
    </div>
  );
}

/* ── Clickable tech card that navigates to /technologies/[slug] ── */
function TechCard({ tech }) {
  return (
    <Link
      href={`/technologies/${tech.slug}`}
      className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm
                 hover:shadow-md transition-all duration-300 hover:-translate-y-1
                 cursor-pointer group flex flex-col"
    >
      {/* Logo area */}
      <div className="flex-1 flex items-center justify-center p-6 min-h-[140px]">
        <TechIcon tech={tech} className="w-20 h-20" />
      </div>
      {/* Name footer */}
      <div className="bg-gray-50 border-t border-gray-100 px-4 py-3 text-center">
        <span className="text-sm font-medium text-gray-700 group-hover:text-orange-500 transition-colors duration-200">
          {tech.name}
        </span>
      </div>
    </Link>
  );
}

/* ── Ambient floating card (not clickable) ── */
function FloatingCard({ tech, style }) {
  const [errored, setErrored] = useState(false);

  return (
    <div
      className="absolute bg-white rounded-2xl shadow-md border border-gray-100 px-4 py-3
                 flex items-center gap-2.5 opacity-60 pointer-events-none select-none"
      style={style}
    >
      {tech.logo && !errored ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={tech.logo}
          alt={tech.name}
          className="w-6 h-6 object-contain"
          onError={() => setErrored(true)}
        />
      ) : (
        <div
          className="w-6 h-6 rounded flex items-center justify-center text-xs font-bold"
          style={{ backgroundColor: (tech.color || "#000") + "20", color: tech.textColor || tech.color }}
        >
          {(tech.textLogo || tech.name).replace(/\n/g, " ").slice(0, 2)}
        </div>
      )}
      <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">{tech.name}</span>
    </div>
  );
}

const find = (name) => technologies.find((t) => t.name === name);

const leftFloating = [
  { tech: find("AI"),                  style: { top: "8%",  left: "3%" } },
  { tech: find("Amazon Web Services"), style: { top: "22%", left: "7%" } },
  { tech: find("Android"),             style: { top: "38%", left: "3%" } },
  { tech: find("Azure"),               style: { top: "54%", left: "7%" } },
  { tech: find("Blockchain"),          style: { top: "68%", left: "3%" } },
  { tech: find("C++"),                 style: { top: "30%", left: "16%" } },
  { tech: find("Docker"),              style: { top: "46%", left: "18%" } },
  { tech: find("Java"),                style: { top: "62%", left: "16%" } },
  { tech: find("JavaScript"),          style: { top: "80%", left: "7%" } },
];

const rightFloating = [
  { tech: find("Shopify"),    style: { top: "8%",  right: "3%" } },
  { tech: find("Laravel"),    style: { top: "22%", right: "7%" } },
  { tech: find("Linux"),      style: { top: "38%", right: "3%" } },
  { tech: find("React"),      style: { top: "54%", right: "7%" } },
  { tech: find("Swift"),      style: { top: "68%", right: "3%" } },
  { tech: find("TypeScript"), style: { top: "30%", right: "16%" } },
  { tech: find("Vue.js"),     style: { top: "46%", right: "18%" } },
  { tech: find("Python"),     style: { top: "62%", right: "16%" } },
  { tech: find("GraphQL"),    style: { top: "80%", right: "7%" } },
];

/* ══════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════ */
export default function TechnologiesPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const filtered = technologies.filter((t) => {
    const matchSearch = t.name.toLowerCase().includes(search.toLowerCase());
    const matchCat = activeCategory === "All" || t.category === activeCategory;
    return matchSearch && matchCat;
  });

  // Group by first letter
  const grouped = filtered.reduce((acc, tech) => {
    const letter = tech.name[0].toUpperCase();
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(tech);
    return acc;
  }, {});
  const sortedLetters = Object.keys(grouped).sort();

  const fadeIn = (delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(14px)",
    transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
  });

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gray-50 pt-10 pb-6 min-h-[420px]">

        {/* Floating left */}
        <div className="hidden xl:block absolute inset-y-0 left-0 w-72">
          {leftFloating.map((item, i) =>
            item.tech ? <FloatingCard key={i} tech={item.tech} style={item.style} /> : null
          )}
        </div>

        {/* Floating right */}
        <div className="hidden xl:block absolute inset-y-0 right-0 w-72">
          {rightFloating.map((item, i) =>
            item.tech ? <FloatingCard key={i} tech={item.tech} style={item.style} /> : null
          )}
        </div>

        {/* Centre */}
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">

          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-8" style={fadeIn(0)}>
            <Link href="/" className="hover:text-orange-500 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </Link>
            <span className="text-gray-400">›</span>
            <span className="font-semibold text-gray-900">Technologies</span>
          </nav>

          <p className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-5" style={fadeIn(80)}>
            Our Tech Expertise
          </p>

          <h1
            className="text-5xl md:text-6xl font-black text-gray-900 leading-tight"
            style={{ ...fadeIn(160), fontFamily: "Georgia, serif" }}
          >
            What&apos;s your stack?
          </h1>
          <h2
            className="text-5xl md:text-6xl font-black leading-tight mb-10"
            style={{ ...fadeIn(240), color: "#F97316", fontFamily: "Georgia, serif" }}
          >
            We cover them all.
          </h2>

          {/* Search */}
          <div className="relative" style={fadeIn(320)}>
            <span className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search technology name"
              className="w-full pl-14 pr-6 py-4 text-base bg-white border border-gray-200 rounded-2xl shadow-sm
                         focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent
                         transition-all duration-200 placeholder-gray-400 text-gray-700"
            />
          </div>
        </div>

        
      </section>
          {/* Filter chips */}
        <div
          className="relative z-10 flex flex-wrap justify-center items-center gap-2 py-4 px-4 bg-[#F6F7F8]"
          style={fadeIn(400)}
        >
          <span className="text-sm font-semibold text-gray-700 mr-1">Filter by:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-orange-400 text-white border-orange-400 shadow-sm"
                  : "bg-white text-gray-700 border-gray-200 hover:border-orange-300 hover:text-orange-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      {/* ── Alphabetical Grid ── */}
      <section className="max-w-7xl mx-auto px-6 py-10">
      
        {sortedLetters.length > 0 ? (
          <div className="space-y-12">
            {sortedLetters.map((letter) => (
              <div key={letter}>
                {/* Letter divider */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-sm font-bold text-gray-500 w-4 shrink-0">{letter}</span>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>
                {/* Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                  {grouped[letter].map((tech) => (
                    <TechCard key={tech.slug} tech={tech} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 text-gray-400">
            <div className="text-5xl mb-3">🔍</div>
            <p className="text-lg font-semibold">No technologies found</p>
            <p className="text-sm mt-1">Try a different search term or filter</p>
          </div>
        )}
      </section>
    </div>
  );
}