import { MailIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiMail, FiPhone } from "react-icons/fi";

export default function Footer() {
  const discoverLinks = [
    "About Us",
    "Methodologies",
    "Technologies",
    "Certifications",
    "Software Development Services",
    "Software Development Solutions",
    "Dedicated Software Development Teams",
    "Staff Augmentation",
    "Software Development Outsourcing",
    "Diversity",
    "Social Responsibility",
    "Senior Advisor Program",
  ];

  const resourceLinks = [
    "Case Studies",
    "AI Learning Hub",
    "Blog",
    "Press",
    "Industries Insights",
    "Technology Resource Center",
    "Client Referral Program",
    "Fellows Program",
  ];

  return (
    <footer className="bg-white text-[#111827]">
      <div className="mx-auto max-w-[1280px] lg:grid lg:grid-cols-[1fr_360px]">
        <div className="px-6 py-14 sm:px-10 lg:px-12">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[96px_1fr_1fr_1fr] lg:gap-8">
            <div className="pt-1">
              <Link href="#" aria-label="BairesDev">
                <Image
                  // src="https://assets.bairesdev.com//image/upload/c_limit,w_60/fl_sanitize/v1/www/static/bairesdev-logo-footer_wbvcp2.svg"
                  src="/sevenLogo.png"
                  alt="BairesDev"
                  width={170}
                  height={160}
                />
              </Link>
            </div>

            <div>
              <h3 className="mb-4 text-[16px] font-semibold leading-none tracking-tight">
                Discover Sevenunique.
              </h3>
              <ul className="space-y-2 text-sm leading-5 text-[#202124]">
                {discoverLinks.map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:underline">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-[16px] font-semibold leading-none tracking-tight">
                Resources.
              </h3>
              <ul className="space-y-2 text-sm leading-5 text-[#202124]">
                {resourceLinks.map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:underline">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-[16px] font-semibold leading-none tracking-tight">
                Careers.
              </h3>
              <ul className="space-y-2 text-sm leading-5 text-[#202124]">
                <li>
                  <Link href="#" className="hover:underline">
                    Job Opportunities
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Talent Referrals
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-14 text-xs text-[#202124]">
            <div className="flex flex-wrap items-center gap-2">
              <Link href="#" className="hover:underline">
                Privacy Policy
              </Link>
              <span>|</span>
              <Link href="#" className="hover:underline">
                Terms of Service
              </Link>
              <span>|</span>
              <Link href="#" className="hover:underline">
                Do Not Sell My Personal Information
              </Link>
            </div>
            <p className="mt-5">
              Sevenunique 2026. All rights reserved.
            </p>
          </div>
        </div>

        <aside className="bg-[#d9dcdf] px-6 py-14 sm:px-10 lg:px-8">
          <div>
            <h3 className="mb-6 text-[16px] font-semibold leading-none tracking-tight">
              Get in touch.
            </h3>

            <div className="mb-4 flex flex-wrap gap-3">
              <Link
                href="/schedule-a-call-page"
                className="rounded-md border-[2px] border-black bg-transparent px-5 py-2 text-[16px] font-medium leading-none"
              >
                Contact Us
              </Link>
              <Link
                href="/schedule-a-call-page"
                className="rounded-md bg-[#ff5b1f] px-2 py-2 text-[16px] font-semibold leading-none text-white"
              >
                Schedule a Call &rarr;
              </Link>
            </div>

            <p className="flex items-center gap-2 text-[16px] leading-none">
              <FiPhone className="text-lg" />
              0141-4511098
            </p>
            <p className="flex items-center gap-2 text-[16px] leading-none mt-4">
              <MailIcon className="text-lg" />
              info@7unique.in
            </p>
          </div>

          <div className="mt-14 max-w-sm">
            <p className="text-sm font-semibold text-gray-800 mb-2">
              Office Address
            </p>

            <p className="text-gray-600 text-[14px] leading-relaxed">
              Plot No. 97, Dakshinpuri - I <br />
              Shrikishan, Sanganer, Jagatpura <br />
              Jaipur, Rajasthan, India - 302017
            </p>
          </div>

          <div className="mt-16">
            <h3 className="text-[20px] font-semibold leading-none tracking-tight">
              Follow us.
            </h3>
            <div className="mt-5 flex items-center gap-6 text-lg">
              <Link
                href="https://www.linkedin.com/in/sevenuniquetechsolution/"
                aria-label="LinkedIn"
                className="hover:opacity-70"
              >
                <FaLinkedinIn className="hover:text-orange-600 "/>
              </Link>
              <Link
                href="https://www.facebook.com/people/SevenUnique-Tech-Solutions-Pvtltd/61556669918427/"
                aria-label="Facebook"
                className="hover:opacity-70"
              >
                <FaFacebookF className="hover:text-orange-600 "/>
              </Link>
              <Link
                href="https://x.com/Sevenuniqu42041"
                aria-label="X"
                className="hover:opacity-70"
              >
                <FaXTwitter className="hover:text-orange-600 "/>
              </Link>
              <Link
                href="https://www.linkedin.com/in/sevenuniquetechsolution/"
                aria-label="Instagram"
                className="hover:opacity-70"
              >
                <FaInstagram className="hover:text-orange-600 "/>
              </Link>
              {/* <Link href="#" aria-label="Youtube" className="hover:opacity-70">
                <FaYoutube />
              </Link> */}
            </div>
          </div>
        </aside>
      </div>
    </footer>
  );
}
