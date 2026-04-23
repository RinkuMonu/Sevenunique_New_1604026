"use client";

import { useState } from "react";

export default function KeyFactsSection() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    "Main Reasons to Consider Outsourcing",
    "Why Develop Android Apps?",
    "Types of Android Apps We Create",
  ];

  const content = [
    {
      title: "Key Facts About Outsourcing Android App Development",
      body: `Whether you need a single Android developer or an entire software development team, an external partner can work with you to accelerate timelines and deliver custom solutions.

Here are 6 benefits of outsourcing:

Access Specialized Expertise: It can be difficult to find the tech talent you need in your local area. When you cast a wider net, it’s easier to access senior specialists with niche skill sets.

Accelerate Development: Experienced outsourced teams have established workflows in place to accelerate your app development. This means faster time to market.

Remain Compliant and Secure: Top outsourcing companies are knowledgeable about best security practices and compliance regulations. Adherence to these measures ensures that your Android app meets industry-specific regulatory requirements and modern security standards.

Retain Oversight: When you work with an outside software development company, you’ll retain control. You’ll receive regular progress updates, no matter what outsourcing model you choose.

Achieve Scalability: Mobile development rarely follows a linear path—you need flexibility. With an external team, you can scale your engagement as needed.`,
    },
    {
      title: "Why Develop Android Apps?",
      body: `Whether you need a single Android developer or an entire software development team, an external partner can work with you to accelerate timelines and deliver custom solutions.

Here are 6 benefits of outsourcing:

Access Specialized Expertise: It can be difficult to find the tech talent you need in your local area. When you cast a wider net, it’s easier to access senior specialists with niche skill sets.

Accelerate Development: Experienced outsourced teams have established workflows in place to accelerate your app development. This means faster time to market.

Remain Compliant and Secure: Top outsourcing companies are knowledgeable about best security practices and compliance regulations. Adherence to these measures ensures that your Android app meets industry-specific regulatory requirements and modern security standards.

Retain Oversight: When you work with an outside software development company, you’ll retain control. You’ll receive regular progress updates, no matter what outsourcing model you choose.

Achieve Scalability: Mobile development rarely follows a linear path—you need flexibility. With an external team, you can scale your engagement as needed.`,
    },
    {
      title: "Types of Android Apps We Create",
      body: `We build enterprise apps, consumer apps, eCommerce platforms, on-demand apps, and AI-powered mobile solutions tailored to business needs.`,
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADING - Now spanning across the first two columns of the content below */}
        <div className="grid grid-cols-12 gap-12 mb-10">
          <div className="col-span-12 lg:col-span-9">
            <h2 className="text-[44px] font-semibold text-[#0f172a] leading-[1.1] max-w-[800px]">
              {content[activeTab].title}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-12">
          
          {/* LEFT TABS */}
          <div className="col-span-12 lg:col-span-3">
            <div className="space-y-6">
              {tabs.map((tab, i) => (
                <div
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`cursor-pointer pb-4 border-b transition-all duration-200 group ${
                    activeTab === i
                      ? "text-orange-600 border-orange-500 font-medium"
                      : "text-gray-500 border-gray-100 hover:text-black"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[15px] leading-snug pr-4">{tab}</span>
                    <span className={`text-xl transition-opacity duration-200 ${activeTab === i ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                      →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* MIDDLE CONTENT */}
          <div className="col-span-12 lg:col-span-6">
            <p className="text-[17px] leading-8 text-gray-600 whitespace-pre-line">
              {content[activeTab].body}
            </p>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="col-span-12 lg:col-span-3 space-y-6">
          

            <div className="bg-gray-50 rounded-xl p-4">
              <div className="h-36 bg-gray-200 rounded-lg mb-4" />
              <p className="font-medium text-[#0f172a] hover:text-orange-600 cursor-pointer">
                What Is Xamarin & Why You Might Need It
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-4">
              <div className="h-36 bg-gray-200 rounded-lg mb-4" />
              <p className="font-medium text-[#0f172a] hover:text-orange-600 cursor-pointer">
                Guidelines for Inclusivity in Android App Development
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}