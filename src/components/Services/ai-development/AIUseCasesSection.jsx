"use client";

import Image from "next/image";
import { useState } from "react";

const services = [
  {
    title: "Agentic AI Systems and Custom LLM Projects",
    content:
      "We build intelligent agentic systems powered by custom LLMs tailored to your workflows.\n\nFrom automation to decision-making pipelines, our solutions enable scalable, context-aware AI that integrates seamlessly into your business processes.",
  },
  {
    title: "Machine Learning Models",
    content:
      "We create machine learning models tailored to your data and business goals. Our AI development services cover everything from data collection and feature engineering to model training and deployment.\n\nMany clients come to us after struggling with brittle models or hard-to-maintain code. We build pipelines that adapt to shifting data inputs and evolving business needs.",
  },
  {
    title: "AI-Powered Predictive Analytics",
    content:
      "Leverage AI to forecast trends, customer behavior, and business outcomes.\n\nWe design predictive systems that help organizations make data-driven decisions with confidence and accuracy.",
  },
  {
    title: "Natural Language Processing (NLP)",
    content:
      "We develop NLP systems for chatbots, sentiment analysis, document processing, and more.\n\nOur solutions understand, interpret, and generate human language effectively at scale.",
  },
  {
    title: "Custom AI for Business Process Automation",
    content:
      "Automate repetitive workflows and optimize operations using AI.\n\nWe build intelligent systems that reduce manual effort, increase efficiency, and improve accuracy across departments.",
  },
  {
    title: "Generative AI Product Development",
    content:
      "We design and build generative AI applications using cutting-edge models.\n\nFrom content generation to design automation, we create products that unlock new creative and business possibilities.",
  },
  {
    title: "Data Analysis and Business Intelligence Platforms",
    content:
      "Transform raw data into actionable insights with AI-powered analytics.\n\nWe build dashboards and intelligence systems that help businesses monitor performance and uncover opportunities.",
  },
  {
    title: "AI-Powered Inventory and Supply Chain Optimization",
    content:
      "Optimize supply chains using predictive AI and automation.\n\nWe help businesses reduce costs, improve forecasting, and ensure efficient inventory management.",
  },
];

export default function AIUseCasesSection() {
  const [active, setActive] = useState(1);

  return (
    <section className="bg-[#f5f5f5] py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

        {/* LEFT */}
        <div>
          <p className="text-[12px] tracking-[0.2em] text-gray-500 mb-4 uppercase">
            Custom AI Development Services
          </p>

          <h2 className="text-[42px] leading-[1.2] font-semibold text-black mb-6">
            You’ve probably used <br />
            products built by our AI <br />
            engineers.
          </h2>

          <p className="text-black/80 text-[15px] leading-[1.7] mb-8 max-w-lg">
            We’ve developed custom AI solutions across industries. Whether
            you’re building AI-powered platforms to enhance operational
            efficiency or using AI to supercharge data analysis, we can help.
          </p>

          <div className="relative w-full h-[240px] rounded-xl overflow-hidden">
            <Image
              src="/logos/img1.png"
              alt="AI Team"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">
          {services.map((item, i) => {
            const isOpen = active === i;

            return (
              <div
                key={i}
                className="border-l-2 pl-5 cursor-pointer transition-all duration-300"
                style={{
                  borderColor: isOpen ? "#22c55e" : "#d1d5db",
                }}
                onClick={() => setActive(i)}
              >
                {/* TITLE */}
                <h3
                  className={`text-[18px] font-medium transition ${
                    isOpen ? "text-black" : "text-black/70"
                  }`}
                >
                  {item.title}
                </h3>

                {/* CONTENT */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isOpen ? "max-h-[300px] mt-3" : "max-h-0"
                  }`}
                >
                  <div className="text-black/80 text-[14px] leading-[1.7] space-y-3">
                    {item.content.split("\n\n").map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}