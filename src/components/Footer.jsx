"use client";

import Image from "next/image";
import Link from "next/link";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";


export default function Footer() {
  return (
    <footer className="relative bg-[#f7f7f7] text-[#111] overflow-hidden border-t border-[#ececec]">

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">

        <div className="grid lg:grid-cols-[340px_1fr] gap-16">

          <div>
            <Link href="/">
              <Image
                src="/images/logo-2.png"
                alt="Sevenunique"
                width={220}
                height={73}
                className="object-contain"
                style={{ height: "auto" }}
              />
            </Link>
            <p className="mt-5 text-[16px] leading-7 text-[#555] max-w-[300px]">
              Building scalable websites, mobile apps, AI solutions, and
              enterprise software for modern businesses.
            </p>
            <div className="mt-8">
              <h3 className="text-[17px] font-semibold text-gray-700 tracking-wide">
                Monday - Friday
              </h3>
              <p className="text-[#f4622a] text-[17px] mt-2 tracking-wide font-medium">
                10:00 AM to 07:00 PM
              </p>
            </div>
            <div className="mt-6 space-y-3">
              <div>
                <p className="text-sm font-semibold text-gray-700 ">
                  Call or WhatsApp Us on
                </p>
                <a
                  href="tel:+918741886688"
                  className="text-[#555] hover:text-[#f4622a] transition-colors"
                >
                  +91 8741886688
                </a>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-700 ">
                  Contact us on
                </p>
                <a
                  href="tel:+91 141-4511098"
                  className="text-[#555] hover:text-[#f4622a] transition-colors"
                >
                  +91 141-4511098
                </a>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-700">Email Us</p>
                <a
                  href="mailto:info@sevenunique.com"
                  className="text-[#555] hover:text-[#f4622a] transition-colors"
                >
                  info@sevenunique.com
                </a>
                <br />
                <a
                  href="mailto:support@sevenunique.com"
                  className="text-[#555] hover:text-[#f4622a] transition-colors"
                >
                  support@sevenunique.com
                </a>
              </div>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <Link
                href="https://www.facebook.com/people/SevenUnique-Tech-Solutions-Pvtltd/61556669918427/"
                target="_blank"
                className="w-11 h-11 rounded-full bg-white border border-[#e7e7e7] flex items-center justify-center hover:bg-[#f4622a] hover:text-white transition-all duration-300"
              >
                <FaFacebookF />
              </Link>

              <Link
                href="https://www.instagram.com/sevenuniquetech/?hl=en"
                target="_blank"
                className="w-11 h-11 rounded-full bg-white border border-[#e7e7e7] flex items-center justify-center hover:bg-[#f4622a] hover:text-white transition-all duration-300"
              >
                <FaInstagram />
              </Link>

              <Link
                href="https://www.linkedin.com/company/sevenuniquetech/posts/?feedView=all"
                target="_blank"
                className="w-11 h-11 rounded-full bg-white border border-[#e7e7e7] flex items-center justify-center hover:bg-[#f4622a] hover:text-white transition-all duration-300"
              >
                <FaLinkedinIn />
              </Link>

              <Link
                href="https://x.com/sevenuniqu42041"
                target="_blank"
                className="w-11 h-11 rounded-full bg-white border border-[#e7e7e7] flex items-center justify-center hover:bg-[#f4622a] hover:text-white transition-all duration-300"
              >
                <FaXTwitter />
              </Link>

              <Link
                href="#"
                className="w-11 h-11 rounded-full bg-white border border-[#e7e7e7] flex items-center justify-center hover:bg-[#f4622a] hover:text-white transition-all duration-300"
              >
                <FaYoutube />
              </Link>
            </div>
          </div>


          <div className="grid sm:grid-cols-3 gap-12">

            <div>
              <h3 className="text-[24px] font-semibold text-gray-700 mb-6 text-[#111]">
                Company
              </h3>

              <ul className="space-y-4 text-[16px] text-[#555]">
                <li>
                  <Link
                    href="/about-us"
                    className="hover:text-[#f4622a] transition"
                  >
                    About Us
                  </Link>
                </li>

                <li>
                  <Link
                    href="/our-work-page"
                    className="hover:text-[#f4622a] transition"
                  >
                    Portfolio
                  </Link>
                </li>



                <li>
                  <Link
                    href="/about-us/Leadership"
                    className="hover:text-[#f4622a] transition"
                  >
                    Leadership Team
                  </Link>
                </li>
              </ul>
            </div>


            <div>
              <h3 className="text-[24px] font-semibold text-gray-700 mb-6 text-[#111]">
                Services
              </h3>

              <ul className="space-y-4 text-[16px] text-[#555]">
                <li>
                  <Link
                    href="/services/web-development"
                    className="hover:text-[#f4622a] transition"
                  >
                    Web Development
                  </Link>
                </li>

                <li>
                  <Link
                    href="/services/software-development"
                    className="hover:text-[#f4622a] transition"
                  >
                    Software Development
                  </Link>
                </li>

                <li>
                  <Link
                    href="/technologies"
                    className="hover:text-[#f4622a] transition"
                  >
                    Technology
                  </Link>
                </li>

                <li>
                  <Link
                    href="/services/ai-development"
                    className="hover:text-[#f4622a] transition"
                  >
                    AI Development
                  </Link>
                </li>
              </ul>
            </div>


            <div>
              <h3 className="text-[24px] font-semibold text-gray-700 mb-6 text-[#111]">
                Quick Links
              </h3>

              <ul className="space-y-4 text-[16px] text-[#555]">
                <li>
                  <Link
                    href="/jobOp"
                    className="hover:text-[#f4622a] transition"
                  >
                    Careers
                  </Link>
                </li>

                <li>
                  <Link
                    href="/blog"
                    className="hover:text-[#f4622a] transition"
                  >
                    Blogs
                  </Link>
                </li>

                <li>
                  <Link
                    href="/schedule-a-call-page"
                    className="hover:text-[#f4622a] transition"
                  >
                    Support
                  </Link>
                </li>

                <li>
                  <Link
                    href="/privacy-policy"
                    className="hover:text-[#f4622a] transition"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-[#111] px-5 py-6 sm:px-6 md:py-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5 md:gap-4">
          <p className="max-w-sm text-center text-[13px] leading-6 text-white/70 sm:text-[14px] md:max-w-none md:text-left">
            © 2026 Sevenunique Tech Solution Pvt. Ltd. All rights reserved.
          </p>

          <div className="flex max-w-md flex-wrap items-center justify-center gap-x-5 gap-y-3 text-center text-[13px] leading-5 text-white/70 sm:max-w-xl sm:text-[14px] md:max-w-none md:justify-end md:gap-5 md:text-left">
            <Link
              href="/privacy-policy"
              className="hover:text-[#f4622a] transition"
            >
              Privacy Policy
            </Link>
            <Link
              href="/apiterms"
              className="hover:text-[#f4622a] transition"
            >
              API Terms
            </Link>

            <Link
              href="/termsAndCondition"
              className="hover:text-[#f4622a] transition"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/cancellationpolicy"
              className="hover:text-[#f4622a] transition"
            >
              Cancellation & Refund Policy
            </Link>
            <Link href="/kycpolicy" className="hover:text-[#f4622a] transition">
              KYC & Chargeback Policy
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}




