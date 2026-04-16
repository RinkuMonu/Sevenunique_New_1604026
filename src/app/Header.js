"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(null);

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/">
          <Image
            src="https://assets.bairesdev.com/image/upload/www/static/bairesdev-logo_mdbbsh.svg"
            alt="logo"
            width={140}
            height={40}
          />
        </Link>

        {/* NAV */}
        <nav className="hidden md:flex items-center gap-8 font-semibold relative">

          {/* SERVICES */}
          <div
            onMouseEnter={() => setOpen("services")}
            onMouseLeave={() => setOpen(null)}
            className="relative"
          >
            <button className="hover:text-orange-500">
              Services ▼
            </button>

            {open === "services" && (
              <div className="absolute left-0 top-full mt-4 w-[1000px] bg-white shadow-xl grid grid-cols-4">
                {/* SAME SERVICES CODE (keep your previous one) */}
              </div>
            )}
          </div>

          {/* TECHNOLOGIES */}
          <div
            onMouseEnter={() => setOpen("tech")}
            onMouseLeave={() => setOpen(null)}
            className="relative"
          >
            <button className="text-orange-500 border-b-2 border-orange-400 pb-1">
              Technologies ^
            </button>

            {open === "tech" && (
              <div className="absolute left-0 top-full mt-4 w-[1000px] bg-white shadow-xl grid grid-cols-4">

                {/* LEFT PANEL */}
                <div className="bg-gray-100 p-6">
                  <h2 className="text-xl font-bold mb-3">
                    Technologies<span className="text-orange-500">.</span>
                  </h2>

                  <p className="text-gray-600 text-sm mb-4">
                    Get experts in 100+ technologies. Cover any tech stack.
                  </p>

                  <ul className="space-y-3 font-medium">
                    <li><Link href="#">Hire Software Developers</Link></li>
                    <li><Link href="#">Top 1% Talent</Link></li>
                  </ul>

                  <div className="mt-8 border-t pt-4">
                    <h3 className="font-bold text-lg">URBAN OUTFITTERS</h3>
                    <p className="text-sm text-gray-600 mt-2">
                      We optimized website performance, leading to 38% increase in net profits.
                    </p>
                    <Link href="#" className="text-blue-600 text-sm underline">
                      Read case study
                    </Link>
                  </div>
                </div>

                {/* COLUMN 1 */}
                <div className="p-6 space-y-3 text-gray-700">
                  <p>.NET</p>
                  <p>AWS</p>
                  <p>Django</p>
                  <p>Java</p>
                  <p>Machine Learning</p>
                  <p>PHP</p>
                  <p>React</p>
                  <p>TypeScript</p>
                </div>

                {/* COLUMN 2 */}
                <div className="p-6 space-y-3 text-gray-700">
                  <p>AI</p>
                  <p>C#</p>
                  <p>Golang</p>
                  <p>JavaScript</p>
                  <p>Microsoft Azure</p>
                  <p>Power BI</p>
                  <p>Ruby</p>
                  <p>Vue.js</p>
                </div>

                {/* COLUMN 3 */}
                <div className="p-6 space-y-3 text-gray-700">
                  <p>Angular</p>
                  <p>C++</p>
                  <p>Google Cloud</p>
                  <p>Kotlin</p>
                  <p>Node.js</p>
                  <p>Python</p>
                  <p>Salesforce</p>
                  <p>Xamarin</p>

                  <div className="mt-6 font-semibold">
                    <Link href="#">All Technologies →</Link>
                  </div>
                </div>

              </div>
            )}
          </div>

          {/* OTHER LINKS */}
          <Link href="#">Industries</Link>
          <Link href="#">About</Link>
          <Link href="#">Our Work</Link>
          <Link href="#">Blog</Link>

          {/* CTA */}
          <Link
            href="#"
            className="bg-black text-white px-4 py-2 rounded-lg"
          >
            Schedule a Call
          </Link>
        </nav>
      </div>
    </header>
  );
}