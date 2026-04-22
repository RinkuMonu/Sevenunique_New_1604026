"use client";
import Image from "next/image";
import { useState } from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaSquareYoutube, FaXTwitter } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { SiOpenai } from "react-icons/si"; // ChatGPT
import { SiGoogle } from "react-icons/si"; // Gemini (approx)
import { SiAnthropic } from "react-icons/si"; // Claude
import { SiX } from "react-icons/si"; // Grok (X)
import { TbBrandOpenai } from "react-icons/tb"; // fallback
import { BsStars } from "react-icons/bs"; // main AI icon
// ─── Icon helpers ─────────────────────────────────────────────────────────────
const CalendarIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
  </svg>
);
const ClockIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
  </svg>
);
const ChevronDown = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
  </svg>
);
const ChevronUp = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z" />
  </svg>
);
const LinkedInIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.22 0z" />
  </svg>
);
const ArticleIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
  </svg>
);
const VerifiedIcon = () => (
  <svg className="w-3 h-3" fill="white" viewBox="0 0 24 24">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
  </svg>
);
const ArrowForward = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
  </svg>
);
const ArrowBack = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
  </svg>
);

// ─── FAQ data ─────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "Why do most technical staff struggle with concurrency?",
    a: "Most engineers see very few serious concurrency problems in real systems, so they never build intuition for race conditions, deadlocks, thread-safety, etc. Frameworks hide Java thread details, and postmortems often blame timing instead of naming concrete multithreading defects.",
  },
  {
    q: "Is Java good for multithreading in large systems?",
    a: "Java provides built-in support for multithreading: the Java thread model, thread-safe collections, and modern executors. The platform is mature; most concurrency problems in large systems come from design and governance, not from weaknesses in Java multithreading itself.",
  },
  {
    q: "How should we standardize creating threads versus using thread pools?",
    a: "Don't let every team experiment with creating threads by extending the thread class or implementing the Runnable interface. Standardize how you manage thread pools for multiple tasks, so most code submits work to executors instead of calling a new thread in application logic.",
  },
  {
    q: "What Java code patterns should worry me in reviews and postmortems?",
    a: "Watch for ad hoc multithreaded application patterns: a main program with public static void main creating thread objects directly, custom public void run loops, or public synchronized void increment counters updating shared resources from two threads and a second thread checking an inconsistent final count.",
  },
  {
    q: "How do thread lifecycle and background tasks affect reliability?",
    a: "Unclear thread lifecycle and unmanaged background tasks make failures hard to reason about. If the main thread and other threads run concurrently without clear ownership, tasks may keep waiting, critical work may not remain responsive, and the current thread handling requests becomes unpredictable under load.",
  },
  {
    q: "How should we think about CPU cores and resource utilization?",
    a: "On modern CPUs, a single thread rarely uses all available resources. Multiple threads can improve performance and reduce execution time, but only when concurrency limits respect downstream constraints. Governance should chase predictable latency, not theoretical better utilization numbers from synthetic benchmarks.",
  },
];

// ─── Pressure table data ──────────────────────────────────────────────────────
const pressureRows = [
  {
    pressure: "Latency pressure at scale",
    what: "SLAs slipping as traffic, dependencies, and request paths grow",
    response:
      "Parallelizing work inside a service to reduce end-to-end response time",
    risk: "Increased contention, unpredictable tail latency, and failures that only appear under peak load",
  },
  {
    pressure: "Cost pressure",
    what: "Underutilized CPU cores and rising infrastructure spend",
    response:
      "Increasing thread counts to do more work per deployed service instance",
    risk: "CPU saturation, context-switching overhead, and harder-to-predict capacity limits",
  },
  {
    pressure: "Product pressure for async behavior",
    what: "Features that require background work, side effects, or long-running tasks",
    response:
      "Spawning background threads or using internal executors instead of decoupled workflows",
    risk: "Silent failures, lost work, and background tasks competing with user-facing traffic",
  },
  {
    pressure: "Delivery pressure",
    what: "Deadlines that favor incremental changes over architectural redesign",
    response:
      "Localized concurrency optimizations in individual services or components",
    risk: "Inconsistent patterns across teams and non-linear growth in concurrency-related risk",
  },
  {
    pressure: "Operational pressure",
    what: 'Pressure to "fix it quickly" during or after incidents',
    response: "Adding threads or pools to relieve immediate bottlenecks",
    risk: "Masked root causes, deferred failures, and harder post-incident diagnosis",
  },
];

const signalRows = [
  {
    signal: "Unpredictable latency under load",
    indicates: "System behavior changes non-linearly as traffic increases",
    cause: "Contention, blocking, or unbounded concurrency",
    why: "Capacity planning becomes unreliable; SLAs fail unexpectedly",
  },
  {
    signal: "Throughput plateaus despite available CPU",
    indicates: "Adding load doesn't increase useful work",
    cause: "Threads blocked on I/O, locks, or downstream limits",
    why: "Indicates concurrency inefficiency, not lack of resources",
  },
  {
    signal: "Incidents that are hard to reproduce",
    indicates: "Failures appear only in production",
    cause: "Timing-dependent concurrency defects",
    why: "Drives long MTTR and postmortems without clear fixes",
  },
  {
    signal: "High variance between environments",
    indicates: "Staging behaves nothing like production",
    cause: "Thread scheduling and load-sensitive behavior",
    why: "Undermines confidence in testing and release gates",
  },
  {
    signal: "Symptoms migrate across services",
    indicates: '"The problem keeps moving"',
    cause: "Stacked concurrency and load amplification",
    why: "Makes ownership unclear; increases organizational drag",
  },
  {
    signal: "Fixes that work briefly, then regress",
    indicates: "Short-lived stability after tuning",
    cause: "Masked concurrency bottlenecks",
    why: "Creates false confidence and recurring incidents",
  },
];

const relatedArticles = [
  {
    title: "Java Performance Issues: A Two-Layer Model for Root Cause Analysis",
    href: "#",
  },
  {
    title:
      "Java Microservices Architecture: Stabilize sprawl, regain velocity, reduce risk",
    href: "#",
  },
  { title: "Java Facade Pattern Demystified With Examples", href: "#" },
  { title: "Java Data Structures for Beginners With Examples", href: "#" },
  { title: "Java Integration Testing Explained With Examples", href: "#" },
  {
    title:
      "Java Unit Testing With JUnit 5: Best Practices & Techniques Explained",
    href: "#",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function Breadcrumb() {
  return (
    <ol className="hidden md:flex items-center flex-wrap gap-1 text-sm text-gray-600 mb-8 px-4 lg:px-0">
      <li className="flex items-center gap-3">
        <a href="#" className="hover:underline ">
          <IoHomeOutline size={18} color="text-gray-700" />
        </a>
        <svg
          className="w-4 h-4 text-gray-800"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M9.71 6L8.3 7.41 12.88 12l-4.58 4.59L9.71 18l6-6z" />
        </svg>
      </li>
      <li className="flex items-center gap-1">
        <a href="#" className="hover:underline">
          Blog
        </a>
        <svg
          className="w-4 h-4 text-gray-800"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M9.71 6L8.3 7.41 12.88 12l-4.58 4.59L9.71 18l6-6z" />
        </svg>
      </li>
      <li className="flex items-center gap-1">
        <a href="#" className="hover:underline">
          Software Development
        </a>
        <svg
          className="w-4 h-4 text-gray-800"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M9.71 6L8.3 7.41 12.88 12l-4.58 4.59L9.71 18l6-6z" />
        </svg>
      </li>
      <li className="font-bold text-gray-900 text-sm">
        Java Multithreading for Engineering Leaders: A Concurrency Risk and
        Governance Playbook
      </li>
    </ol>
  );
}

function AuthorCard() {
  return (
    <div className="relative bg-gray-50 rounded-xl border border-gray-100 p-4 mb-10 mt-10 md:mt-0">
      {/* Badge */}
      <div className="absolute -top-3 right-6">
        <div className="relative inline-block">
          <div className="bg-gradient-to-t from-[#10654a] to-[#23a87e] text-white text-[11px] font-medium px-3 py-1 rounded-full flex items-center gap-1">
            <VerifiedIcon />
            <span>Verified Top Talent</span>
          </div>
        </div>
      </div>

      <div className="flex items-start gap-3">
        {/* Avatar placeholder */}
        <div className="w-16 h-16 rounded-xl bg-gray-200 flex-shrink-0 overflow-hidden">
          {/* Replace with <Image src="..." alt="Fernando Ugarte" width={64} height={64} className="rounded-xl object-cover" /> */}
          <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-gray-500 text-xs">
            <Image
              src="https://assets.bairesdev.com/image/upload/f_auto,q_auto/www/blog/authors/FernandoUgarte_1760447453"
              alt="Fernando Ugarte"
              width={64}
              height={64}
              className="rounded-xl object-cover"
            />
          </div>
        </div>

        <div className="flex-1">
          <p className="text-xl font-semibold text-gray-700">
            By{" "}
            <a
              href="#"
              className="font-bold text-gray-900 hover:text-blue-600 underline text-[30px]"
            >
              Fernando Ugarte
            </a>
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0 mt-1">
            <span className="text-md text-gray-600">
              Principal Software Engineer
            </span>
            <span className="hidden sm:inline mx-2 w-1.5 h-1.5 rounded-full bg-gray-200"></span>
            <span className="text-md text-gray-500">
              16 years of experience
            </span>
          </div>
          <div className="flex items-center gap-3 mt-2">
            <a href="#" className="text-gray-600 hover:text-orange-600 ">
              <LinkedInIcon size={22} />
            </a>
            <a href="#" className="text-gray-600 hover:text-orange-600 ">
              <FaXTwitter size={22} />
            </a>
            <a href="#" className="text-gray-600 hover:text-orange-600 ">
              <FaInstagram size={22} />
            </a>
            <a href="#" className="text-gray-600 hover:text-orange-600 ">
              <FaSquareYoutube size={22} />
            </a>
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-600 mt-4">
        Fernando is a principal software engineer with 16+ years of experience
        in backend development, data analysis, and full-stack solutions. He has
        worked with Synacor and Nextar, specializing in Java, SQL Server, SAP,
        and BI tools including Power BI and Qlik.
      </p>

      <div className="mt-3">
        <span className="text-xs font-bold uppercase text-gray-500 tracking-wide">
          Expertise
        </span>
        <div className="flex flex-wrap gap-2 mt-2">
          {["Java", "SQL Server", "Backend Development"].map((tag) => (
            <span
              key={tag}
              className="border border-gray-300 rounded-lg px-3 py-1 text-xs text-gray-700 hover:border-blue-500 cursor-pointer font-semibold tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ArticleMeta() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-xs uppercase tracking-wide text-gray-600 font-bold mt-4 tracking-widest">
      <span className="flex items-center gap-2">
        <CalendarIcon color="text-gray-500" />
        Last Updated: March 9th 2026
      </span>
      <span className="flex items-center gap-2">
        <ClockIcon />
        11 min read
      </span>
    </div>
  );
}

function HeroImage() {
  return (
    <div className="relative w-full aspect-video bg-gray-200 rounded overflow-hidden mt-8 md:mt-0">
      {/* Replace with <Image src="/images/java-multithreading-hero.png" alt="Java Multithreading" fill className="object-cover" /> */}
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center text-gray-400">
          <Image
            src="https://bairesdev.mo.cloudinary.net/blog/2026/03/Java-Multithreading-for-Engineering-Leaders.png?tx=w_1920,q_auto"
            alt="Java Multithreading"
            width={900}
            height={800}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

function DiagramImage({ alt, className = "" }) {
  return (
    <div
      className={`w-full bg-gray-100 rounded overflow-hidden my-6 ${className}`}
    >
      <div className="aspect-[2/1] flex items-center justify-center text-gray-400">
        <div className="text-center p4">
          <div className="">
            <Image
              src="https://bairesdev.mo.cloudinary.net/blog/2026/03/JPI-1-1536x773.png"
              alt="Diagram placeholder"
              width={900}
              height={900}
              className="object-cover"
            />
          </div>
          <p className="text-xs">{alt}</p>
        </div>
      </div>
    </div>
  );
}

function DataTable({ headers, rows }) {
  return (
    <div className="overflow-x-auto my-6">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-gray-100">
            {headers.map((h, i) => (
              <th
                key={i}
                className="text-left p-3 font-semibold text-gray-900 border border-gray-200 text-lg"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className="p-3 border border-gray-200 text-gray-900 text-md align-top"
                >
                  {ci === 0 ? <strong>{cell}</strong> : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section className="bg-gray-50 rounded-xl p-5 md:p-8 my-12">
      <h3 className="text-xl font-bold text-gray-700 mb-8">
        Frequently Asked Questions
      </h3>
      <ul>
        {faqs.map((faq, i) => {
          const isOpen = openIdx === i;
          return (
            <li
              key={i}
              className="border-b border-gray-200 last:border-0 mb-4 last:mb-0"
            >
              <button
                onClick={() => setOpenIdx(isOpen ? -1 : i)}
                className="w-full flex items-center justify-between gap-4 text-left mb-4 py-2"
              >
                <span className="text-gray-700 text-base font-medium flex-1">
                  {faq.q}
                </span>
                <span
                  className={`rounded-full p-1 ${isOpen ? "bg-orange-600 text-white" : "bg-gray-200 text-gray-600"}`}
                >
                  {isOpen ? <ChevronUp /> : <ChevronDown />}
                </span>
              </button>
              {isOpen && (
                <div className="pb-6 pr-0 md:pr-10">
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function SocialShare({ vertical = false }) {
  const platforms = [
    {
      label: "Facebook",
      color: "text-gray-700 hover:text-blue-600",
      icon: "f",
    },
    {
      label: "LinkedIn",
      color: "text-gray-700 hover:text-blue-700",
      icon: "in",
    },
    { label: "X", color: "text-gray-700 hover:text-gray-900", icon: "𝕏" },
    {
      label: "WhatsApp",
      color: "text-gray-700 hover:text-green-600",
      icon: "w",
    },
    { label: "Email", color: "text-gray-700 hover:text-red-500", icon: "✉" },
  ];
  return (
    <div
      className={`bg-gray-50 shadow rounded-2xl p-3 flex ${vertical ? "flex-col gap-4" : "flex-row gap-4"} items-center`}
    >
      {platforms.map((p) => (
        <button
          key={p.label}
          title={p.label}
          className={`w-6 h-6 flex items-center justify-center text-sm font-bold ${p.color}`}
        >
          {p.icon}
        </button>
      ))}
    </div>
  );
}

function HiringWidget() {
  return (
    <div className="border border-blue-100 rounded-lg shadow overflow-hidden bg-[#EAF2FD]">
      <div className="px-4 pt-4 pb-2">
        <h4 className="font-semibold text-gray-900 text-base">
          Hiring engineers?
        </h4>
      </div>
      <div className="px-4 pb-6 flex flex-col gap-4">
        <p className="text-sm text-gray-800">
          We provide nearshore tech talent to companies from startups to
          enterprises like Google and Rolls-Royce.
        </p>
        {[
          { name: "Alejandro D.", role: "Sr. Full-stack Dev.", img: "" },
          {
            name: "Gustavo A.",
            role: "Sr. QA Engineer",
            img: "",
            extraMargin: true,
          },
          { name: "Fiorella G.", role: "Sr. Data Scientist", img: "" },
        ].map((person) => (
          <div
            key={person.name}
            className={`bg-white flex items-center gap-3 rounded-3xl py-1 pl-2 pr-8 w-fit ${person.extraMargin ? "ml-10" : ""}`}
          >
            <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0 ">
              {" "}
              <Image
                src="https://assets.bairesdev.com//image/upload/c_limit,w_80/dpr_auto/f_auto/q_auto/v1/www/static/talent-1_ylgyum?_a=BAVAfVDW0"
                alt={person.name}
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>

            <div>
              <p className="text-sm text-gray-600">{person.name}</p>
              <p className="text-xs text-gray-500">{person.role}</p>
            </div>
          </div>
        ))}
        <div className="flex flex-col gap-1 mt-1">
          {["About Us", "Our Services", "Our Clients"].map((l) => (
            <a key={l} href="#" className="text-sm text-gray-900 underline">
              {l}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function TestimonialWidget() {
  return (
    <div className="bg-white border border-blue-100 rounded-lg shadow sticky top-32">
      <div className="relative p-4 pt-6">
        <span className="absolute left-0 top-0 -translate-x-4 -translate-y-6 text-7xl font-bold text-orange-600 leading-none select-none hidden lg:block z-99">
          “
        </span>
        <p className="text-gray-900 text-base italic">
          BairesDev assembled a dream team for us and in just a few months our
          digital offering was completely transformed.
        </p>
        <div className="bg-[#FEF1ED] mt-4 flex items-center gap-3 px-3 py-3 rounded">
          <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0">
            <div className="w-6 h-8 bg-[#FEF1ED] rounded">
              <Image
                src="https://assets.bairesdev.com//image/upload/c_limit,w_24/fl_sanitize/v1/www/core/joinus_rolls-royce_nca2nu.svg?_a=BAVAfVDW0"
                alt="Rolls-Royce"
                width={24}
                height={32}
                className="object-contain"
              />
            </div>
          </div>
          <div className="">
            <p className="text-sm text-gray-900">VP Product Manager</p>
            <p className="text-xs text-gray-500">Rolls-Royce</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 rounded-b-lg">
        <a
          href="#"
          className="block text-center text-white text-sm font-medium py-2 hover:bg-gray-700 rounded-b-lg transition"
        >
          Read Case Study
        </a>
      </div>
    </div>
  );
}

function RelatedArticlesWidget() {
  return (
    <div className="bg-white border border-blue-100 rounded-lg shadow sticky top-32">
      <div className="bg-blue-50 px-4 py-4 rounded-t-lg">
        <h4 className="font-semibold text-gray-900">Related articles</h4>
      </div>
      <ul className="flex flex-col gap-3 px-4 py-4">
        {relatedArticles.map((a, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1 text-blue-500 flex-shrink-0">
              <ArticleIcon />
            </span>
            <a
              href={a.href}
              className="text-sm text-gray-600 hover:underline leading-snug"
            >
              {a.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PrevNextNav() {
  return (
    <div className="grid grid-cols-2 gap-4 mt-12 mb-4">
      <div className="flex flex-col h-full">
        <div className="relative h-44 bg-gray-200 rounded overflow-hidden group cursor-pointer">
          <Image
            src="https://bairesdev.mo.cloudinary.net/blog/2026/03/Why-Coding-Becomes-a-Specialist-Sport.png?tx=w_1920,q_auto"
            alt="The Future of Software Development"
            width={900}
            height={800}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-end p-3">
            <span className="text-white font-bold text-sm group-hover:underline leading-snug">
              The Future of Software Development: Why Coding Becomes a
              Specialist Sport
            </span>
          </div>
        </div>
        <a
          href="#"
          className="flex items-center gap-2 text-gray-900 text-sm font-medium py-2 hover:border-b border-gray-900 w-fit mt-1"
        >
          <ArrowBack />
          Previous article
        </a>
      </div>
      <div className="flex flex-col h-full">
        <div className="relative h-44 bg-gray-200 rounded overflow-hidden group cursor-pointer">
          <Image
            src="https://bairesdev.mo.cloudinary.net/blog/2026/03/Webinar-AI-first-enterprise.png?tx=w_1920,q_auto"
            alt="The Future of Software Development"
            width={900}
            height={800}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-end p-3">
            <span className="text-white font-bold text-sm group-hover:underline leading-snug text-right w-full">
              From AI Experiments to the AI-First Enterprise — Webinar Replay
            </span>
          </div>
        </div>
        <a
          href="#"
          className="flex items-center gap-2 text-gray-900 text-sm font-medium py-2 hover:border-b border-gray-900 w-fit mt-1 self-end"
        >
          Next article
          <ArrowForward />
        </a>
      </div>
    </div>
  );
}

// ─── Main article body ────────────────────────────────────────────────────────

function ArticleContents() {
  const [open, setOpen] = useState(false);

  const items = [
    "Why Java Multithreading Fails Differently at Scale",
    "How Organization Pressures Drive Multithreading Use",
    "Why Teams Struggle with Multithreading",
    "Concurrency Risk Signals Leaders Should Recognize",
    "How to Diagnose and Prevent Multithreading Defects",
  ];

  return (
    <div className="border border-gray-300 rounded-xl bg-white overflow-hidden">
      {/* HEADER */}
      <div
        onClick={() => setOpen(!open)}
        className={`flex justify-between items-center px-5 py-4 cursor-pointer transition
        ${open ? "" : ""}`}
      >
        <span className="text-base font-medium text-gray-800">
          Article Contents
        </span>

        <ChevronDown
          className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* DROPDOWN */}
      <div
        className={`transition-all duration-300 ${
          open ? "max-h-72" : "max-h-0"
        } overflow-hidden`}
      >
        <div className="max-h-72 overflow-y-auto">
          {items.map((item, i) => (
            <div
              key={i}
              className={`px-5 py-3 text-sm cursor-pointer border- last:border-none
              ${
                i === 0
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
function ArticleBody() {
  return (
    <article className="text-gray-700 text-base leading-relaxed mt-12 space-y-5">
      <ArticleContents />
      <p>
        Java multithreading improves performance, but in large organizations it
        can also amplify failures unless it is governed like any other high-risk
        capability.
      </p>
      <ul className="list-disc list-inside space-y-2 pl-2">
        <li>
          Teams reach for multithreading under latency, cost, and delivery
          pressure, often as a substitute for structural change.
        </li>
        <li>
          Concurrency risk grows non-linearly when teams "roll their own" thread
          pools and patterns across services.
        </li>
        <li>
          Leaders should learn the signals of concurrency-driven incidents.
        </li>
        <li>
          Use a consistent playbook to spot, stabilize, instrument, classify,
          fix, and standardize.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-900 pt-4">
        Why Java Multithreading Fails Differently at Scale
      </h2>
      <p>
        Java-heavy engineering organizations put Java multithreading bugs in a
        class of their own because they bring down systems faster, defy
        diagnosis longer, and resist resolution more stubbornly than any other
        kind of defect. Leaders don't need to understand the <em>mechanics</em>{" "}
        of Java multithreading to solve these problems. Instead, they need to{" "}
        <em>govern when and how to apply</em> multithreading that meets
        organizational demands without creating new problems.
      </p>
      <p>
        Multithreading is a force multiplier for both performance and failures.
        Problems emerge through the combined weight of concurrency design
        decisions applied without oversight. The larger the organization, the
        more this weight causes the risk of failures to increase in a non-linear
        fashion.
      </p>
      <p>
        Your leadership contribution is to work with the architects to establish
        guidelines for all teams to follow. The decision matrix you build
        includes measures that lead to predictability, risk reduction, and early
        detection. This governance is not only preventative, it's also
        diagnostic.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 pt-4">
        How Organization Pressures Drive Multithreading Use
      </h2>
      <p>
        Your IT department is under constant pressure to go faster, cost less,
        and deliver more. In most cases, your only short-term alternative is to
        apply some kind of optimization to address specific pain points.
        Concurrency is one type of optimization your teams can apply, but it
        comes with a different kind of risk.
      </p>
      <ol className="list-disc list-inside space-y-2 pl-2 text-[20px]">
        <li>
          Restructuring to improved architecture: Wholesale changes risk losing
          business rules built across the life of the original architecture.
          Success can be assured by existing regression tests to make sure
          features still work.
        </li>
        <li>
          Optimizing with concurrency: Optimizing a familiar architecture risks
          unpredictable behavior changes. Existing regression tests may not
          trigger these behaviors, so they only emerge in production, usually
          under heavy loads.
        </li>
      </ol>

      <DataTable
        headers={[
          "Organizational pressure",
          "What leaders are responding to",
          "Typical multithreading response",
          "Hidden risk introduced",
        ]}
        rows={pressureRows.map((r) => [r.pressure, r.what, r.response, r.risk])}
      />

      <p className="text-lg">
        You got your marching orders from the organization and you responded in
        a pragmatic fashion. This is good, but it should leave you asking two
        questions about each optimization:
      </p>
      <ol className="list-decimal list-inside space-y-2 pl-2 text-lg">
        <li>
          Implemented in sound fashion, or are we going to see the predicted
          problems?
        </li>
        <li>
          Stand-in for restructuring, or a band-aid that only raises the failure
          threshold?
        </li>
      </ol>

      <p className="text-lg">
        Each team that independently devises its own Java multithreading
        solutions contributes to an organizational risk surface. Larger
        organizations with more teams rolling their own solutions cause the risk
        to increase non-linearly.
      </p>

      <p className="text-lg">
        Knowing the risks causes leaders to lose sleep. It gets worse, though,
        when you realize that these problems are the most difficult to diagnose
        and fix. This is true not just because of their insidious nature, but
        also because thread problem diagnosis-savvy people are rare.
      </p>

      <h2 className="text-3xl font-semibold text-black pt-4">
        Why Teams Struggle with Multithreading
      </h2>
      <p>
        Seasoned professionals find threading problems challenging to diagnose,
        even after long practice. Younger developers face the same challenges
        with more disadvantages: computer science programs do not emphasize
        multithreading fundamentals compared to earlier times. As a result,
        recent graduates rarely have the ability to understand threading issues
        without on-the-job training.
      </p>
      <ol className="list-disc list-inside space-y-2 pl-2 text-lg">
        <li>
          Implemented in sound fashion, or are we going to see the predicted
          problems?
        </li>
        <li>
          Stand-in for restructuring, or a band-aid that only raises the failure
          threshold?
        </li>
      </ol>
      <p>
        Why did this happen? Modern platforms and libraries like Spring hide the
        gritty details that developers used to grapple with in custom code.
      </p>

      <DiagramImage />

      <p className="text-lg">
        The net effect creates an organizational blind spot when multithreading
        problems arise. Even with an expert diagnostician, these problems are
        hard to find because:
      </p>
      <ul className="list-disc list-inside space-y-2 pl-2 text-lg">
        <li>They do not appear in happy-path testing.</li>
        <li>Static code reviews are weak at spotting the risks.</li>
        <li>
          Incidents lack clear ownership (you'll often hear "the code is fine;
          it's a timing issue")
        </li>
      </ul>
      <p className="text-lg">
        The problem is not with the Java platform. It was designed to support
        threading, and it has only gotten more capable with lightweight
        threading extensions. The root organizational problem stems from lack of
        architectural oversight.
      </p>
      <p className="text-lg">
        As a leader, you need to involve the architects to:
      </p>

      <ol className="list-decimal list-inside space-y-2 pl-2 text-lg">
        <li>
          Establish guidelines for when and how to apply multithreading,
          including approved patterns and banned anti-patterns.
        </li>
        <li>
          Build a playbook for diagnosing and fixing multithreading problems
          when they arise.
        </li>
      </ol>

      <h2 className="text-3xl font-semibold text-black pt-4">
        Concurrency Risk Signals Leaders Should Recognize
      </h2>
      <p>
        Multithreading defects have problem signatures unique to their
        implementation. When they crop up, you may find yourself wishing for the
        good old days of a service showing an understandable problem. The first
        hallmark to look for is the sudden, large-scale flare-up.
      </p>

      <DataTable
        headers={[
          "Leadership signal",
          "What it indicates",
          "Typical underlying cause",
          "Why it matters",
        ]}
        rows={signalRows.map((r) => [r.signal, r.indicates, r.cause, r.why])}
      />

      <h2 className="text-2xl font-semibold text-gray-900 pt-4">
        How to Diagnose and Prevent Multithreading Defects
      </h2>
      <p>
        This section contains the multithreading playbook that enables leaders
        to help architects and team leads: identify concurrency-driven failures
        early, contain their blast radius, and prevent their recurrence through
        governance.
      </p>

      <DiagramImage />

      {[
        {
          title: "Phase 1: Recognize the Failure Signature",
          body: "For the recognition phase, revisit the signal table. Review each of the patterns and decide which one matches most closely the failure behavior. A multithreading defect will often involve multiple conflicting metrics or alarms — that is one tell that the failure is not from another cause. When a simpler root cause is absent, assume it's a concurrency problem.",
        },
        {
          title: "Phase 2: Contain and Stabilize the Problem",
          body: 'For the containment and stabilization phase, reduce the fuel to the fire. Teams under pressure face the temptation to "change something," including the multithreading code itself. Concurrency problems respond to: (1) reducing the workload to take pressure off the failure, and (2) reducing the number of threads to make the problem more linear.',
        },
        {
          title: "Phase 3: Build Visibility into the Multithreading Usage",
          body: "Direct your architects to review the multithreading code and suggest logging and metrics to surface its specific behavior. Thread pools, consumers, and executors must be measurable. Concurrency limits must be configurable and visible. Saturation must be visible before failure happens.",
        },
        {
          title: "Phase 4: Classify the Failure and its Hallmarks",
          body: "The failure incident must get a first-class write-up including: what concurrency mechanism was implemented, how and why did it fail, how should the system respond to the root cause conditions, and what limits the architects recommend. This is how the organization learns.",
        },
        {
          title: "Phase 5: Decide the Nature of the Long-Term Fix",
          body: "This is a crucial decision point. After reviewing the case documentation and actual code, pick the final concurrency remedy: (1) Bad substitute for architectural constraint — back off the concurrency parameters. (2) Core component of service — replace with a standard solution. (3) Accidental code issue — fix it and reintroduce after sufficient load testing.",
        },
        {
          title: "Phase 6: Prevent Recurrence through Standards",
          body: "All incidents lead to the final phase. Have a set of approved concurrency patterns. Document anti-patterns that must never be followed. Establish load-testing expectations. Mandate that every concurrency implementation has an owner. Establish gateways for every future concurrency implementation. When this playbook is followed by all teams, the risk surface decreases.",
        },
      ].map((phase, i) => (
        <div key={i}>
          <h3 className="text-xl font-semibold text-gray-900 pt-2">
            {phase.title}
          </h3>
          <p>{phase.body}</p>
        </div>
      ))}

      <h2 className="text-2xl font-semibold text-gray-900 pt-4">
        Expert Perspective
      </h2>
      <p>
        I have seen organizations treat Java multithreading as a local
        optimization and then act surprised when incidents become harder to
        reproduce, harder to diagnose, and harder to permanently fix. More often
        than not, the problem is that concurrency decisions are made without
        consistent architectural guardrails.
      </p>
      <p>
        What makes these failures expensive is the lack of a clear story.
        Metrics conflict, behavior changes under load, and the issue disappears
        when you try to reproduce it. That is why I like to start with
        recognition and containment: reduce load, reduce threads, and stabilize
        before anyone starts "tuning" code under pressure.
      </p>
      <p>
        The turning point is visibility. If thread pools, queues, and saturation
        aren't measurable and configurable, you're flying blind. The most
        practical outcome is not perfect concurrency, but predictable
        concurrency — approved patterns, banned anti-patterns, load-test
        expectations, and a named owner for every concurrency implementation.
      </p>
    </article>
  );
}

// ─── Progress bar ─────────────────────────────────────────────────────────────
function ReadingProgress() {
  return (
    <div className="bg-gray-100 fixed top-20 z-30 h-2 w-full">
      <div className="bg-blue-600 h-full" style={{ width: "4.5%" }} />
    </div>
  );
}

function AISidebar() {
  const [hovered, setHovered] = useState(false);
  const [open, setOpen] = useState(false);

  const aiTools = [
    {
      name: "ChatGPT",
      icon: <SiOpenai className="text-green-500 text-lg" />,
    },
    {
      name: "Grok",
      icon: <SiX className="text-black text-lg" />,
    },
    {
      name: "Perplexity",
      icon: <BsStars className="text-blue-500 text-lg" />,
    },
    {
      name: "Google Gemini",
      icon: <SiGoogle className="text-yellow-500 text-lg" />,
    },
    {
      name: "Claude",
      icon: <SiAnthropic className="text-orange-500 text-lg" />,
    },
  ];

  return (
    <>
      <div className="hidden lg:block absolute left-0 top-0 z-20">
        <div className="sticky top-32 flex flex-col gap-6">
          {/* AI BUTTON */}
          <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => setOpen(!open)}
            className={`relative cursor-pointer transition-all duration-300 rounded-xl shadow-lg
          ${hovered || open ? "w-56" : "w-16"}
          bg-gradient-to-b from-blue-700 to-gray-900 p-3`}
          >
            <div className="flex items-center gap-3">
              {/* ICON */}
              <div
                className="w-6 h-6 bg-white"
                style={{
                  mask: "url(https://assets.bairesdev.com/image/upload/www/static/union_1758745001.svg)",
                  WebkitMask:
                    "url(https://assets.bairesdev.com/image/upload/www/static/union_1758745001.svg)",
                  maskRepeat: "no-repeat",
                  WebkitMaskRepeat: "no-repeat",
                  maskSize: "contain",
                  WebkitMaskSize: "contain",
                  maskPosition: "center",
                  WebkitMaskPosition: "center",
                }}
              />

              {/* TEXT (HOVER) */}
              <span
                className={`text-white text-sm font-semibold whitespace-nowrap transition-all duration-300
              ${hovered || open ? "opacity-100" : "opacity-0 w-0 overflow-hidden"}`}
              >
                Summarize with AI
              </span>
            </div>

            {/* DROPDOWN (CLICK) */}
            {open && (
              <div className="mt-4 bg-white rounded-xl p-3 flex flex-col gap-3 shadow-xl">
                {aiTools.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer"
                  >
                    {item.icon}
                    <span className="text-sm font-medium text-gray-700">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* <SocialShare /> */}
    </>
  );
}
// ─── Main Page ────────────────────────────────────────────────────────────────
export default function JavaMultithreadingPage() {
  return (
    <div className="min-h-screen bg-white font-sans mb-10">
      {/* <ReadingProgress /> */}

      {/* ── Nav (simplified) ─────────────────────────────── */}

      {/* ── Main layout ──────────────────────────────────── */}
      <main className="max-w-[89.5rem] mx-auto px-4 lg:px-14 mt-6">
        <Breadcrumb />

        {/* Two-column layout */}
        <div className="flex flex-col md:grid md:grid-cols-[1fr_min-content] md:gap-6 lg:gap-12 lg:relative">
          {/* ── LEFT: Article ── */}
          <div className="max-w-4xl">
            {/* Title block */}
            <div className="mb-6">
              <h1 className="text-3xl lg:text-4xl font-medium text-gray-900 leading-tight">
                Java Multithreading for Engineering Leaders: A Concurrency Risk
                and Governance Playbook
              </h1>
              <p className="text-gray-500 text-xl mt-4 leading-relaxed">
                See how large Java teams can use governed multithreading to
                improve performance, reduce incident risk, and keep critical
                services predictable.
              </p>
              <ArticleMeta />
            </div>

            {/* Author card */}
            <AuthorCard />

            {/* Hero image */}
            <HeroImage />

            {/* Inline share + AI summary (desktop left side) */}
            <div className="relative lg:pl-24 xl:pl-28">
              {/* Floating share sidebar (desktop) */}
              <AISidebar />

              {/* Article content */}
              <ArticleBody />

              {/* FAQ */}
              <FAQSection />

              {/* Bottom share (mobile) */}
              <div className="lg:hidden my-8">
                <SocialShare />
              </div>

              {/* Bottom author card repeat */}
              <AuthorCard />

              {/* Prev / Next */}
              <PrevNextNav />
            </div>
          </div>

          {/* ── RIGHT: Sidebar ── */}
          <div className="hidden md:flex flex-col gap-8 min-w-[17.5rem] max-w-[17.5rem]">
            <HiringWidget />
            <TestimonialWidget />
            <RelatedArticlesWidget />
          </div>
        </div>
      </main>

      {/* ── Footer (simplified) ─────────────────────────── */}
     
    </div>
  );
}
