"use client";
import { useState } from "react";
import Image from "next/image";
import { HomeIcon } from "lucide-react";
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
    imgg: "/images/connection.png",
  },
  {
    step: "STEP 2",
    title: "We take it from there",
    desc: "After you submit the referral, our Talent Acquisition team handles the rest and guides the candidate through the hiring process.",
    imgg: "/images/hiring.png",
  },
  {
    step: "STEP 3",
    title: "Get rewarded",
    desc: "If the referral meets our requirements, you’ll receive your referral bonus. For full details, check our Terms and Conditions.",
    imgg: "/images/rewarded.png",
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
      {/* Responsive UI update: mobile-first spacing and typography across the referral page. */}
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 pt-4 sm:px-6 lg:px-8">
        <HomeIcon size={19} className="text-gray-700" />{" "}
        <FaAngleRight className="text-gray-700" />{" "}
        <span className="text-gray-800 font-semibold">Talent Referral</span>
      </div>
      {/* SECTION 1: HERO */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
          {/* LEFT */}
          <div className="flex-1">
            <p className="text-sm font-bold tracking-[0.18em] text-gray-400 uppercase mb-4">
              TALENT REFERRALS
            </p>

            <h1 className="mb-4 text-3xl font-medium leading-tight text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl">
              Know someone passionate about innovation?
              <br className="hidden sm:block" />{" "}
              <span className="text-[#ff6a3d]">Refer them to us!</span>
            </h1>

            <p className="mb-8 max-w-lg text-base leading-relaxed text-gray-500 sm:text-lg">
             Our Referral Program is open to everyone, including Sevenunique members and people who simply support our company. 
            </p>

            <Link
              href="/schedule-a-call-page"
              className="inline-flex w-full items-center justify-center rounded-lg bg-[#ff6a3d] px-6 py-3 font-medium text-white transition hover:bg-[#e55a2e] sm:w-auto"
            >
              Get Started →
            </Link>
          </div>

          {/* RIGHT (ACTUAL SHAPES IMAGES) */}
          <div className="flex flex-1 flex-wrap items-center justify-center gap-4">
          
              <div
                className="relative"
              >
                <img
                  src="/images/referral.png"
                  alt="Talent referral program"
                  className="h-auto w-full max-w-[560px] object-contain"
                />
              </div>
          
          </div>
        </div>
      </section>

      {/* SECTION 2: INFO + IMAGE */}
      <section className="bg-[#f5f6f8] py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
            <div className="flex-1">
              <p className="text-base leading-relaxed text-black sm:text-lg md:text-xl">
               To appreciate your help in finding great talent, we offer a $1,000 USD referral bonus. If you refer to a woman and support our goal of promoting gender equality in tech, the bonus increases to $1,300 USD.
Together, we can open new opportunities, connect talented people, and build a better future at Sevenunique®.

              </p>
              <p className="mt-5 text-base leading-relaxed text-black sm:text-lg">
                Together we can forge new paths, connect great minds and build a
                brighter future at Seven Unique.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative w-full max-w-lg overflow-hidden rounded-2xl sm:rounded-3xl">
                <Image
                  src="/images/workingp2.png"
                  alt="Woman working on laptop"
                  className="h-auto w-full object-cover"
                  height={500}
                  width={500}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PROCESS STEPS */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          {/* LEFT */}
          <div className="flex-1">
            <h2 className="mb-8 text-3xl font-medium leading-tight text-gray-900 sm:text-4xl md:text-5xl lg:mb-10">
              Referring someone is quick and straightforward.
              <span className="text-orange-500">.</span>
            </h2>

            {/* IMAGE (IMPORTANT — same as original) */}
            <div className="relative h-[220px] w-full overflow-hidden rounded-2xl sm:h-[280px] md:h-[320px] md:rounded-3xl">
              <img
                src="/images/team-handjoin.png"
                alt="Team members joining hands"
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
                <div key={i} className="relative flex lg:pl-[10px]">
                  {/* ICON */}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-500 sm:h-14 sm:w-14">
  <Image
    src={item.imgg}
    alt={item.title}
    width={28}
    height={28}
    className="object-contain brightness-0 invert"
  />
</div>

                  {/* TEXT */}
                  <div className="ml-4 min-w-0 max-w-md sm:ml-5 md:ml-6">
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
              <div className="relative mt-6 pl-16 sm:pl-20">
                <div className="-z-30 absolute left-6 lg:left-8 top-8 w-16 border-t-2 border-dashed border-gray-300"></div>

                <Link
                  href="/schedule-a-call-page"
                  className="relative z-10 inline-flex w-full items-center justify-center rounded-lg bg-green-600 px-5 py-3 font-medium text-white hover:bg-green-700 sm:w-auto sm:px-6"
                >
                  Submit Referral
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: TESTIMONIAL */}
      <TestimonialSectionInAboutPage />

      {/* SECTION 5: FAQ ACCORDION */}
      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Two column layout */}
          <div className="flex flex-col lg:flex-row lg:gap-16">
            {/* Left side - Heading */}
            <div className="lg:w-1/3 mb-8 lg:mb-0">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
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
                      className="group flex w-full items-center justify-between gap-3"
                      aria-expanded={openId === faq.id}
                      aria-controls={`referral-faq-${faq.id}`}
                    >
                      <span className="min-w-0 text-left text-base font-medium leading-snug text-gray-900 sm:text-lg md:text-xl">
                        {faq.question}
                      </span>

                      {/* Circular orange icon button */}
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500">
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
                      <div id={`referral-faq-${faq.id}`} className="mt-4">
                        <p className="text-sm leading-relaxed text-gray-500 sm:text-base">
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
