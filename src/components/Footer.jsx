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

import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#f7f7f7] text-[#111] overflow-hidden border-t border-[#ececec]">

      {/* TOP */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-[340px_1fr] gap-16">

          {/* LEFT SIDE */}
          <div>

            {/* LOGO */}
            <Link href="/">
              <Image
                src="/sevenLogo.png"
                alt="Sevenunique"
                width={220}
                height={70}
                className="object-contain"
              />
            </Link>

            {/* HOOK LINE */}
            <p className="mt-5 text-[16px] leading-7 text-[#555] max-w-[300px]">
              Building scalable websites, mobile apps, AI solutions, and
              enterprise software for modern businesses.
            </p>

            {/* WORKING HOURS */}
            <div className="mt-8">
              <h3 className="text-[17px] font-semibold tracking-wide">
                Monday - Friday
              </h3>

              <p className="text-[#f4622a] text-[17px] mt-2 tracking-wide font-medium">
                10:00 AM to 07:00 PM
              </p>
            </div>

            {/* SOCIAL */}
            <div className="mt-8 flex items-center gap-4">

              <Link
                href="#"
                className="w-11 h-11 rounded-full bg-white border border-[#e7e7e7] flex items-center justify-center hover:bg-[#f4622a] hover:text-white transition-all duration-300"
              >
                <FaFacebookF />
              </Link>

              <Link
                href="#"
                className="w-11 h-11 rounded-full bg-white border border-[#e7e7e7] flex items-center justify-center hover:bg-[#f4622a] hover:text-white transition-all duration-300"
              >
                <FaInstagram />
              </Link>

              <Link
                href="#"
                className="w-11 h-11 rounded-full bg-white border border-[#e7e7e7] flex items-center justify-center hover:bg-[#f4622a] hover:text-white transition-all duration-300"
              >
                <FaLinkedinIn />
              </Link>

              <Link
                href="#"
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

          {/* RIGHT SIDE LINKS */}
          <div className="grid sm:grid-cols-3 gap-12">

            {/* COMPANY */}
            <div>

              <h3 className="text-[24px] font-semibold mb-6 text-[#111]">
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
                    href="/about-us"
                    className="hover:text-[#f4622a] transition"
                  >
                    Our Team
                  </Link>
                </li>

                <li>
                  <Link
                    href="/contact-us"
                    className="hover:text-[#f4622a] transition"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* SERVICES */}
            <div>

              <h3 className="text-[24px] font-semibold mb-6 text-[#111]">
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
                    Software Solution
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

            {/* QUICK LINKS */}
            <div>

              <h3 className="text-[24px] font-semibold mb-6 text-[#111]">
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
                    href="/contact-us"
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

        {/* OFFICES */}
        <div className="grid md:grid-cols-2 gap-8 mt-20">

          {/* JAIPUR */}
          <div className="bg-white rounded-[24px] p-8 border border-[#ececec] hover:shadow-lg transition-all duration-300">

            <Image
              src="https://www.avendus.com/uploads/City-Icons-Jaipur.svg"
              alt="Jaipur"
              width={170}
              height={50}
              className="object-contain mb-6"
            />

            <h4 className="text-[24px] font-semibold mb-4">
              Jaipur Head Office
            </h4>

            <div className="space-y-4">

              <div className="flex gap-3">
                <FiMapPin className="text-[#f4622a] mt-1 text-lg shrink-0" />

                <p className="text-[16px] leading-7 text-[#555]">
                  Plot No 97, Dakshinpuri - I Shrikishan, Sanganer, Jagatpura, Jaipur, Shri Kishanpura, Rajasthan 302017
                </p>
              </div>

              <div className="flex items-center gap-3 text-[16px]">
                <FiPhone className="text-[#f4622a]" />
                +91 141-4511098
              </div>

              <div className="flex items-center gap-3 text-[16px]">
                <FiMail className="text-[#f4622a]" />
                info@sevenunique.com
              </div>
            </div>
          </div>

          {/* GURUGRAM */}
          <div className="bg-white rounded-[24px] p-8 border border-[#ececec] hover:shadow-lg transition-all duration-300">

            <Image
              src="https://www.avendus.com/uploads/Kolkata_83b7a1c794.svg"
              alt="Gurugram"
              width={190}
              height={50}
              className="object-contain mb-6"
            />

            <h4 className="text-[24px] font-semibold mb-4">
              Mumbai Office
            </h4>

            <div className="space-y-4">

              <div className="flex gap-3">
                <FiMapPin className="text-[#f4622a] mt-1 text-lg shrink-0" />

                <p className="text-[16px] leading-7 text-[#555]">
                  No. 101/2, Vakratunda Corporate Park Premises Co-operative Society Limited, Off Aarey Road, Goregaon (East), Mumbai – 400 063
                </p>
              </div>

              <div className="flex items-center gap-3 text-[16px]">
                <FiPhone className="text-[#f4622a]" />
                +91 141-4511098
              </div>

              <div className="flex items-center gap-3 text-[16px]">
                <FiMail className="text-[#f4622a]" />
                info@sevenunique.com
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-[#111] py-5 px-6">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-white/70 text-[14px] text-center md:text-left">
            © 2026 Sevenunique Tech Solution Pvt. Ltd. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-[14px] text-white/70">

            <Link
              href="/privacy-policy"
              className="hover:text-[#f4622a] transition"
            >
              Privacy Policy
            </Link>

            <Link
              href="/termsAndCondition"
              className="hover:text-[#f4622a] transition"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}