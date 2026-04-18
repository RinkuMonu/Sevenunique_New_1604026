"use client";

import { Outfit } from "next/font/google";
import Image from "next/image";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function AIServiceHeroSection() {
  return (
    <section className={`${outfit.className} bg-[#f3f3f3] py-20 px-6`}>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT SIDE */}
        <div>

          {/* BREADCRUMB */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <span>🏠</span>
            <span>Technologies</span>
            <span>›</span>
            <span className="text-black font-medium">AI</span>
          </div>

          {/* SUBTITLE */}
          <p className="text-xs tracking-[0.2em] text-gray-400 mb-4">
            AI DEVELOPMENT SERVICES
          </p>

          {/* HEADING */}
          <h1 className="text-[48px] leading-[1.1] font-semibold text-[#1a1a18] mb-6">
            Work with{" "}
            <span className="text-[#f4622a]">AI</span> experts trusted
            <br />
            by the world’s top tech teams.
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-600 text-[16px] leading-[1.7] max-w-xl mb-10">
            As a leading AI development company, we deliver AI-powered solutions
            that go beyond experimentation. Our AI engineers help organizations
            integrate agentic AI, custom large language models (LLMs), and
            generative AI into their products.
          </p>

          {/* RATING */}
          <div className="flex items-center gap-10">

            {/* CLUTCH */}
            <div>
              <p className="font-semibold text-lg text-black">Clutch</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[18px] font-medium">4.9/5</span>
                <span className="text-[#f4622a] text-sm">★★★★★</span>
              </div>
              <p className="text-xs text-gray-500">60 client reviews</p>
            </div>

            {/* AI LABEL */}
            <div>
              <p className="text-blue-600 text-sm font-medium">
                Artificial Intelligence
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">

          <h3 className="text-[22px] font-semibold text-[#1a1a18] mb-6">
            Get expert help for your AI project.
          </h3>

          <form className="flex flex-col gap-5">

            {/* NAME */}
            <div>
              <label className="text-sm text-gray-600 mb-1 block">
                Your name
              </label>
              <input
                type="text"
                placeholder="Full name"
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#f4622a]"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-sm text-gray-600 mb-1 block">
                Your email
              </label>
              <input
                type="email"
                placeholder="name@company.com"
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#f4622a]"
              />
            </div>

            {/* TEXTAREA */}
            <div>
              <label className="text-sm text-gray-600 mb-1 block">
                What we can do for you?
              </label>
              <textarea
                placeholder="Tell us about your needs."
                rows={4}
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm resize-none focus:outline-none focus:border-[#f4622a]"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="mt-2 bg-[#f4622a] hover:bg-[#d94f1e] text-white py-3 rounded-md font-medium transition"
            >
              Jump-start Your Project
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}