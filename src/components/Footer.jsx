import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
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
                  src="https://assets.bairesdev.com//image/upload/c_limit,w_60/fl_sanitize/v1/www/static/bairesdev-logo-footer_wbvcp2.svg"
                  alt="BairesDev"
                  width={58}
                  height={38}
                  className="h-auto w-[58px]"
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
            <p className="mt-5">Sevenunique 2009 - 2026. All rights reserved.</p>
          </div>
        </div>

        <aside className="bg-[#d9dcdf] px-6 py-14 sm:px-10 lg:px-8">
          <div>
            <h3 className="mb-6 text-[16px] font-semibold leading-none tracking-tight">
              Get in touch.
            </h3>

            <div className="mb-4 flex flex-wrap gap-3">
              <button className="rounded-md border-[2px] border-black bg-transparent px-5 py-2 text-[16px] font-medium leading-none">
                Contact Us
              </button>
              <button className="rounded-md bg-[#ff5b1f] px-2 py-2 text-[16px] font-semibold leading-none text-white">
                Schedule a Call &rarr;
              </button>
            </div>

            <p className="flex items-center gap-2 text-[16px] leading-none">
              <FiPhone className="text-lg" />
              +1(408) 478-2739
            </p>
          </div>

          <div className="mt-14">
            <p className="max-w-[300px] text-[12px] font-semibold leading-tight">
              Get insights from the experts on building and scaling technology teams.
            </p>

            <div className="mt-5 flex gap-3">
              <input
                type="email"
                placeholder="name@email.com"
                className="w-full rounded-md border border-black/40 bg-white px-4 py-3 text-sm placeholder:text-[#818181] focus:outline-none"
              />
              <button className="inline-flex items-center bg-[#d9dcdf] text-black gap-2 rounded-md border-[2px] border-black  px-4 py-3 text-sm font-medium">
                Subscribe
                <FiMail />
              </button>
            </div>

            <label className="mt-4 flex items-start gap-2 text-xs">
              <input type="checkbox" className="mt-0.5 size-4" />
              <span>
                By subscribing I accept the{" "}
                <Link href="#" className="underline hover:no-underline">
                  Privacy Policy
                </Link>
                .
              </span>
            </label>
          </div>

          <div className="mt-16">
            <h3 className="text-[20px] font-semibold leading-none tracking-tight">
              Follow us.
            </h3>
            <div className="mt-5 flex items-center gap-6 text-lg">
              <Link href="#" aria-label="LinkedIn" className="hover:opacity-70">
                <FaLinkedinIn />
              </Link>
              <Link href="#" aria-label="Facebook" className="hover:opacity-70">
                <FaFacebookF />
              </Link>
              <Link href="#" aria-label="X" className="hover:opacity-70">
                <FaXTwitter />
              </Link>
              <Link href="#" aria-label="Instagram" className="hover:opacity-70">
                <FaInstagram />
              </Link>
              <Link href="#" aria-label="Youtube" className="hover:opacity-70">
                <FaYoutube />
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </footer>
  );
}
