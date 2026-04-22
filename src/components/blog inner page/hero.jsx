import { ArrowRight } from "lucide-react";
import Image from "next/image";

const latestPosts = [
  {
    id: 1,
    title:
      "Testing AI Features Like Software: Why Evaluations Are the Missing Layer of...",
    color: "bg-teal-500",
    imgurl:
      "https://bairesdev.mo.cloudinary.net/blog/2026/04/Testing-AI-Features-Like-Software.png",
  },
  {
    id: 2,
    title:
      "Intent Audit Is How Engineering Teams Break the AI Code Review Bottleneck",
    color: "bg-green-600",
    imgurl:
      "https://bairesdev.mo.cloudinary.net/blog/2026/04/The-Future-of-Code-Review_-From-Bottleneck-to-Intent-Audit.png",
  },
  {
    id: 3,
    title:
      "Product Manager vs. Project Manager: Decision Rights, Not Job Descriptions",
    color: "bg-blue-500",
    imgurl:
      "https://bairesdev.mo.cloudinary.net/blog/2026/04/Product-Manager-vs.-Project-Manager.png",
  },
  {
    id: 4,
    title:
      "When Does Multi-Cloud Actually Earn Its Complexity? Lessons from a Global Carte...",
    color: "bg-sky-600",
    imgurl:
      "https://bairesdev.mo.cloudinary.net/blog/2026/03/Leveraging-Cloud-Native-Architecture.png",
  },
  {
    id: 5,
    title:
      "4 Use Cases That Make It to Production: A Portfolio and Capability-Pattern Guide",
    color: "bg-orange-500",
    imgurl:
      "https://bairesdev.mo.cloudinary.net/blog/2026/03/AI-Use-Cases-by-Capability-Pattern.png",
  },
];

export default function HeroSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 py-10">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-1">
          <p className="text-xs font-semibold text-[#656771] uppercase tracking-widest mb-3">
            Software Development
          </p>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800  mb-4 max-w-3xl">
            When to Train LLMs on Your Own Data: The Spectrum of Options
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed tracking-wide max-w-3xl font-medium">
            Decide when to use off-the-shelf LLMs, when RAG on your data is
            enough, and when fine-tuning or full training is worth the cost,
            risk, and overhead.
          </p>
          <Image
            src="https://bairesdev.mo.cloudinary.net/blog/2026/02/Train-LLM-on-Your-Own-Data.png?tx=w_1920,q_auto"
            alt="hero"
            width={800}
            height={500}
            className="object-cover object-top rounded-lg mt-6"
          />
        </div>

        <div className="w-full lg:w-80 xl:w-96">
          <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
            Latest Posts
          </h2>
          <div className="flex flex-col gap-3">
            {latestPosts.map((post) => (
              <a
                key={post.id}
                href="#"
                className="flex items-center gap-3 group  bg-gray-100"
              >
                <Image
                  src={post.imgurl}
                  alt={post.title}
                  width={110}
                  height={48}
                  className="w-full  object-cover rounded"
                />
                {/* className={`w-16 h-12 rounded flex-shrink-0 ${post.color} flex items-center justify-center overflow-hidden`}
                ></Image> */}
                <p className="text-md text-gray-700 leading-snug group-hover:underline transition-colors line-clamp-3">
                  {post.title}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
