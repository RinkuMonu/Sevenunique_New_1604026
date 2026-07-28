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
    <footer className="relative bg-[#f7f7f7] text-[#111] overflow-hidden border-t border-[#ececec]">
    
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
      
        <div className="grid lg:grid-cols-[340px_1fr] gap-16">
      
          <div>
            <Link href="/">
              <Image
                src="/images/logo-2.png"
                alt="Sevenunique"
                width={220}
                height={70}
                className="object-contain"
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
                    href="/services/backup-solutions"
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

    
        <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-5 mt-16 md:mt-30">
          {[
            {
              title: "Jaipur Head Office",
              image: "https://www.avendus.com/uploads/City-Icons-Jaipur.svg",
              address:
                "Plot No 97, Dakshinpuri - I Shrikishan, Sanganer, Jagatpura, Jaipur, Rajasthan 302017",
              phone: "+91 141-4511098",
              email: "info@sevenunique.com",
            },
            {
              title: "Mumbai Office",
              image: "https://www.avendus.com/uploads/Kolkata_83b7a1c794.svg",
              address:
                "No. 101/2, Vakratunda Corporate Park, Off Aarey Road, Goregaon East, Mumbai – 400063",
              phone: "+91 141-4511098",
              email: "info@sevenunique.com",
            },
            {
              title: "UAE Office",
              image: "https://ezulix.com/assets/image/icons/uk.webp",
              address:
                "Office Number 01-02, C-1 Building, Ajman Free Zone, Dubai, United Arab Emirates",
              phone: "+971 55 000 0000",
              email: "salesuae@sevenunique.com",
            },
            {
              title: "USA Office",
              image: "https://ezulix.com/assets/image/icons/uae.webp",
              address:
                "514 State Shelton Street Garden, Wisconsin, USA – 55309",
              phone: "+1 414 000 0000",
              email: "salesusa@sevenunique.com",
            },
          ].map((office, index) => (
            <div
              key={index}
              className="
        group relative overflow-hidden
        rounded-[16px]
        bg-white
        border border-[#ececec]
        p-5 lg:p-6
        transition-all duration-500
        hover:-translate-y-1
        hover:shadow-[0_12px_35px_rgba(0,0,0,0.06)]
      "
            >
          
              <div className="relative z-10 flex items-start gap-3 mb-5">
                {/* FLAG */}
                <div
                  className="
            w-[56px] h-[56px]
            rounded-full
            bg-[#f8f8f8]
            border border-[#ececec]
            flex items-center justify-center
            shrink-0
            shadow-sm
          "
                >
                  <img
                    src={office.image}
                    alt={office.title}
                    className="w-[36px] h-[36px] object-cover"
                  />
                </div>

                {/* TITLE + PHONE */}
                <div>
                  <h3
                    className="
              text-[16px] md:text-[18px]
              font-bold
              text-[#111]
              leading-tight
              mb-1
              transition-colors duration-300
              group-hover:text-orange-500
            "
                  >
                    {office.title}
                  </h3>

                  <p className="text-[11px] text-gray-700 font-medium">
                    {office.phone}
                  </p>
                </div>
              </div>

           
              <div className="relative z-10 mb-4">
                <div
                  className="
            inline-flex items-center gap-2
            text-orange-500
            font-semibold text-gray-700
            text-[12px]
            break-all
          "
                >
                  <FiMail className="text-[14px]" />
                  {office.email}
                </div>
              </div>

          
              <div className="relative z-10 flex items-start gap-3">
                <div
                  className="
            w-9 h-9
            rounded-lg
            bg-orange-50
            text-orange-500
            flex items-center justify-center
            shrink-0
          "
                >
                  <FiMapPin className="text-[14px]" />
                </div>

                <p
                  className="
            text-[12px]
            leading-6
            text-gray-600
            font-medium
          "
                >
                  {office.address}
                </p>
              </div>

          
              <div
                className="
          absolute bottom-0 left-0
          h-[3px] w-0
          bg-orange-500
          transition-all duration-500
          group-hover:w-full
        "
              />
            </div>
          ))}
        </div>
      </div>

     
     <div
  className="
    absolute
    right-30
    top-100
    -translate-y-1/2
    hidden xl:block
    pointer-events-none
    z-0
  "
>
  <img
    src="/images/mapp.png"
    alt="footer shape"
    className="w-[610px] object-cover opacity-70"
  />
</div>


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
              href="/apiterms"
              className="hover:text-[#f4622a] transition"
            >
              ApiTerms
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




