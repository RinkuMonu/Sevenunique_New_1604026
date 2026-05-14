"use client";
import { useState } from "react";
import Image from "next/image";
import { Clipboard, ConeIcon, HomeIcon } from "lucide-react";
import { BiRightArrowAlt } from "react-icons/bi";
import { FaAngleRight } from "react-icons/fa";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import TestimonialSectionInAboutPage from "@/components/testimonialInaboutPage";
import Criclegrowth from "@/components/criclegrowth";
import Link from "next/link";

export default function ReferralPageAbout() {


  const steps = [
  {
    step: "STEP 1",
    title: "Make the connection",
    desc: "Fill out a short form with your referral’s name, email, and LinkedIn profile. If you’re referring multiple people, you’ll also get a unique link to submit them easily.",
    icon: <Clipboard />,
  },
  {
    step: "STEP 2",
    title: "We take it from there",
    desc: "After you submit the referral, our Talent Acquisition team handles the rest and guides the candidate through the hiring process.",
    icon: <ConeIcon />,
  },
  {
    step: "STEP 3",
    title: "Get rewarded",
    desc: "If the referral meets our requirements, you’ll receive your referral bonus. For full details, check our Terms and Conditions.",
    icon: <RiMoneyRupeeCircleLine />,
  },
];
  const faqs = [
  {
    id: 1,
    question: "How can I refer someone?",
    answer:
      "Go to our referrals hub to add your referral’s details or copy your unique link to share with multiple people. You can also email referrals@Sevenunique.com with your friend’s information.",
  },
  {
    id: 2,
    question: "What information is needed for a valid referral?",
    answer:
      "We require the referral’s full name, email address, primary skill, and LinkedIn profile or CV.",
  },
  {
    id: 3,
    question: "How many people can I refer?",
    answer:
      "There’s no limit — you can refer as many people as you want.",
  },
  {
    id: 4,
    question: "Will the candidate know I referred them?",
    answer:
      "Yes, absolutely. We will notify the candidate once we receive their referral details.",
  },
  {
    id: 5,
    question:
      "Can non-Sevenunique employees participate in the referral program?",
    answer:
      "Yes, definitely. Anyone can participate, whether they work at Sevenunique or not.",
  },
  {
    id: 6,
    question:
      "What are the requirements to receive the referral bonus?",
    answer:
      "Your referral should not have applied or been referred in the past 6 months and must not already be in our interview process. They need to be hired within 6 months of the referral and stay with the company for at least 3 months. For full details, please refer to the Terms and Conditions.",
  },
  {
    id: 7,
    question: "When will you pay the referral bonus?",
    answer:
      "The bonus is paid 20–40 days after your referral completes 90 continuous days at the company.",
  },
  {
    id: 8,
    question:
      "I’m not a Sevenunique employee. How do I get my referral bonus?",
    answer:
      "A member of our referral team will contact you and arrange payment via international bank transfer or PayPal.",
  },
  {
    id: 9,
    question:
      "What if I have questions or need further assistance?",
    answer:
      "Please refer to our Referral Program Terms and Conditions for more details, or email us at referrals@Sevenunique.com — we’ll be happy to help you.",
  },
  {
    id: 10,
    question:
      "What if my referred candidate has questions or needs assistance?",
    answer:
      "They can contact us through Live Chat on our applicants site or email recruiting.process@Sevenunique.com for support.",
  },
];

  // Track which FAQ is open (first one open by default)
  const [openId, setOpenId] = useState(1);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };
  return (
    <div className="font-sans antialiased">
      <div className="ml-8 pt-4 flex items-center gap-5">
        <HomeIcon size={19} className="text-gray-700" />{" "}
        <FaAngleRight className="text-gray-700" />{" "}
        <span className="text-gray-800 font-semibold">Talent Referral</span>
      </div>
      {/* SECTION 1: HERO */}
      <section className="max-w-[100rem] mx-auto px-2 md:px-2 lg:px-8 py-16 md:py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* LEFT */}
          <div className="flex-1">
            <p className="text-sm font-bold tracking-[0.18em] text-gray-400 uppercase mb-4">
              TALENT REFERRALS
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-800 leading-tight mb-4">
              Know someone passionate about innovation?
              <br />
              <span className="text-[#ff6a3d]">Refer them to us!</span>
            </h1>

            <p className="text-gray-500 text-lg max-w-lg mb-8">
             Our Referral Program is open to everyone, including Sevenunique members and people who simply support our company. 
            </p>

            <button className="flex items-center gap-2 bg-[#ff6a3d] hover:bg-[#e55a2e] text-white rounded-lg font-medium transition">
              <Link
                href="/schedule-a-call-page"
                className="cursor-pointer  px-6 py-3"
              >
                Get Started →
              </Link>
            </button>
          </div>

          {/* RIGHT (ACTUAL SHAPES IMAGES) */}
          <div className="flex-1 hidden md:flex flex-wrap items-center justify-center gap-4">
          
              <div
                className="relative"
              >
                <img
                  src="/images/team-vec.jpg"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
          
          </div>
        </div>
      </section>

      {/* SECTION 2: INFO + IMAGE */}
      <section className="bg-[#f5f6f8] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <p className="text-[#000000] text-xl leading-relaxed tracking-wide">
               To appreciate your help in finding great talent, we offer a $1,000 USD referral bonus. If you refer to a woman and support our goal of promoting gender equality in tech, the bonus increases to $1,300 USD.
Together, we can open new opportunities, connect talented people, and build a better future at Sevenunique®.

              </p>
              <p className="text-[#000000] text-lg leading-relaxed mt-6 tracking-wide">
                Together we can forge new paths, connect great minds and build a
                brighter future at BairesDev®.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative rounded-3xl overflow-hidden ">
                <Image
                  src="/images/mencoffee.jpg"
                  alt="Woman working on laptop"
                  className="object-cover"
                  height={400}
                  width={400}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PROCESS STEPS */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* LEFT */}
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 leading-tight mb-10">
              Referring someone is quick and straightforward.
              <span className="text-orange-500">.</span>
            </h2>

            {/* IMAGE (IMPORTANT — same as original) */}
            <div className="hidden md:block relative w-full h-[320px] rounded-3xl overflow-hidden">
              <img
                src="/images/working.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT TIMELINE */}
          <div className="flex-1 relative">
            {/* DASHED LINE */}
            <div className="absolute left-6 lg:left-8 top-6 h-[calc(100%-40px)] border-l-2 border-dashed border-gray-300"></div>

            <div className="space-y-14">
              {steps.map((item, i) => (
                <div key={i} className="flex relative lg:pl-[10px]">
                  {/* ICON */}
                  <div className="relative z-10 w-12 h-12 flex items-center justify-center rounded-full bg-orange-500">
                    {item.icon}
                  </div>

                  {/* TEXT */}
                  <div className="ml-5 md:ml-6 max-w-md">
                    <span className="text-gray-400 text-xs uppercase tracking-widest block mb-2">
                      {item.step}
                    </span>

                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}

              {/* BUTTON */}
              <div className="relative pl-20 mt-6 ">
                <div className="-z-30 absolute left-6 lg:left-8 top-8 w-16 border-t-2 border-dashed border-gray-300"></div>

                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium z-50">
                  <Link
                    href="/schedule-a-call-page"
                    className="cursor-pointer  px-6 py-3"
                  >
                    Submit Referral
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: TESTIMONIAL */}
      <TestimonialSectionInAboutPage />

      {/* SECTION 5: FAQ ACCORDION */}
      <section className="bg-white py-16 px-6 md:px-12 lg:px-8">
        <div className="max-w-8xl mx-auto">
          {/* Two column layout */}
          <div className="flex flex-col lg:flex-row lg:gap-16">
            {/* Left side - Heading */}
            <div className="lg:w-1/3 mb-8 lg:mb-0">
              <h2 className="text-5xl md:text-5xl font-bold text-gray-900">
                FAQs
              </h2>
            </div>

            {/* Right side - Accordion list */}
            <div className="lg:w-2/3">
              {faqs.map((faq, index) => (
                <div key={faq.id}>
                  {/* Accordion Item */}
                  <div className="py-6">
                    {/* Question Row */}
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full flex justify-between items-center group"
                    >
                      <span className="text-lg md:text-xl font-medium text-gray-900 text-left">
                        {faq.question}
                      </span>

                      {/* Circular orange icon button */}
                      <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 ml-4">
                        {openId === faq.id ? (
                          // Chevron up (minus style)
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 15l7-7 7 7"
                            />
                          </svg>
                        ) : (
                          // Chevron down (plus style)
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        )}
                      </div>
                    </button>

                    {/* Answer - only shown when open */}
                    {openId === faq.id && faq.answer && (
                      <div className="mt-4">
                        <p className="text-gray-500 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Divider - thin gray line (except after last item) */}
                  {index < faqs.length - 1 && (
                    <div className="border-t border-gray-200"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Criclegrowth />
    </div>
  );
}
