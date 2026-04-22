import ArticleSection from "@/components/blog inner page/articleSectioncard";
import HeroSection from "@/components/blog inner page/hero";
import Navbar from "@/components/blog inner page/navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const softwareDevelopmentArticles = [
  {
    title:
      "Java Multithreading for Engineering Leaders: A Concurrency Risk and Governance Playbook",
    author: "Fernando Ugarte",
    readTime: "11",
    img: "https://bairesdev.mo.cloudinary.net/blog/2026/03/Java-Multithreading-for-Engineering-Leaders.png?tx=w_1920,q_auto",
  },
  {
    title:
      "Zero Trust 2.0 and the Shift to Identity-First Security — Webinar Replay",
    author: "Bob Leibholz",
    readTime: "8",
    img: "https://bairesdev.mo.cloudinary.net/blog/2026/02/zero-trust-2.0.png?tx=w_1920,q_auto",
  },
  {
    title: "Ruby on Rails for Startup MVPs: When Rails Isn't the Right Choice",
    author: "Silvia Orta",
    readTime: "10",
    img: "https://bairesdev.mo.cloudinary.net/blog/2026/02/Rails-for-Minimum-Viable-Products-hero.png?tx=w_1920,q_auto",
  },
];

const bizTechArticles = [
  {
    title: "Kubernetes Cost Optimization: Stop Overprovisioning by Default",
    author: "Jimmy E. Bonilla",
    readTime: "11",
    img: "https://bairesdev.mo.cloudinary.net/blog/2026/03/Kubernetes-Cost-Optimization.png?tx=w_1920,q_auto",
  },
  {
    title: "From AI Experiments to the AI-First Enterprise — Webinar Replay",
    author: "Bob Leibholz",
    readTime: "7",
    img: "https://bairesdev.mo.cloudinary.net/blog/2026/03/Webinar-AI-first-enterprise.png?tx=w_1920,q_auto",
  },
  {
    title: "Secure Software Development Lifecycle for Distributed Teams",
    author: "Tiago Machado",
    readTime: "10",
    img: "https://bairesdev.mo.cloudinary.net/blog/2026/02/Secure-Software-Development-Lifecycle.png?tx=w_1920,q_auto",
    bgColor: "bg-slate-700",
  },
];

const talentArticles = [
  {
    title:
      "Engineering Team Scaling Strategies: Why Headcount Alone Can Slow Delivery",
    author: "Gilberto de Dinghy",
    readTime: "11",
    img: "https://bairesdev.mo.cloudinary.net/blog/2026/03/Engineering-team-scaling-strategies.png?tx=w_1920,q_auto",
  },
  {
    title:
      "Dev Barometer Q1 2026: Women's Career Agency and the AI Accountability Gap in Software Development",
    author: "Rodrigo Ouhomuru",
    readTime: "7",
    img: "https://bairesdev.mo.cloudinary.net/blog/2026/03/Blog-Cover-1-1.png?tx=w_1920,q_auto",
    featured: true,
  },
  {
    title: "How to Build a Software Development Team",
    author: "Alessandro Baggio",
    readTime: "12",
    img: "https://bairesdev.mo.cloudinary.net/blog/2026/02/How-to-Build-a-Software-Development-Team.png?tx=w_1920,q_auto",
  },
];

const technologyArticles = [
  {
    title:
      "Machine Learning vs. Artificial Intelligence: What you're Actually Building and When to Buy vs Build",
    author: "Agustin Achille",
    readTime: "13",
    img: "https://bairesdev.mo.cloudinary.net/blog/2026/03/Machine-Learning-vs-AI.png?tx=w_1920,q_auto",
  },
  {
    title: "What Is an LLM? A Systems-Level Primer for Engineering Leaders",
    author: "Alejandro Cordova",
    readTime: "13",
    img: "https://bairesdev.mo.cloudinary.net/blog/2026/03/What-is-LLMs.png?tx=w_1920,q_auto",
  },
  {
    title: "Web Design Trends: What to Adopt, What to Pilot, What to Ignore",
    author: "Juan Carlos Casado",
    readTime: "12",
    img: "https://bairesdev.mo.cloudinary.net/blog/2026/02/Web-Design-Trends-for-2026.png?tx=w_1920,q_auto",
  },
];

const insightsArticles = [
  {
    title:
      "The Future of Software Development: Why Coding Becomes a Specialist Sport",
    author: "Ayman Shoukry",
    readTime: "9",
    img: "https://bairesdev.mo.cloudinary.net/blog/2026/03/Why-Coding-Becomes-a-Specialist-Sport.png?tx=w_1920,q_auto",
  },
  {
    title:
      "How to Scale Enterprise AI When Your Data Isn't Ready: A Pragmatic Blueprint",
    author: "Charles Boyle",
    readTime: "9",
    img: "https://bairesdev.mo.cloudinary.net/blog/2026/03/How-Agentic-System-work.png?tx=w_1920,q_auto",
  },
  {
    title: "How Conway's Law Shapes Reliability in Enterprise Systems",
    author: "Jim Moore",
    readTime: "16",
    img: "https://bairesdev.mo.cloudinary.net/blog/2026/02/Conways-Law.png?tx=w_1920,q_auto",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />

      <ArticleSection
        category="Software Development"
        linkLabel="All Software Development articles"
        articles={softwareDevelopmentArticles}
      />

      <ArticleSection
        category="Biz & Tech"
        linkLabel="All Biz & Tech articles"
        articles={bizTechArticles}
      />

      <ArticleSection
        category="Talent"
        linkLabel="All Talent articles"
        articles={talentArticles}
      />

      <ArticleSection
        category="Technology"
        linkLabel="All Technology articles"
        articles={technologyArticles}
      />

      <ArticleSection
        category="Insights"
        linkLabel="All Insights articles"
        articles={insightsArticles}
      />

      <div className="flex justify-center py-10">
        <a
          href="#"
          className="flex items-center gap-2 border border-gray-800 text-gray-800 text-sm font-semibold px-8 py-3 rounded-full hover:bg-gray-800 hover:text-white transition-all"
        >
          See all articles
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      <Footer />
    </div>
  );
}
