"use client";

import Link from "next/link";

export default function Breadcrumb() {
  return (
    <nav className="flex items-center gap-2 px-12 py-5 text-sm text-gray-500">
      {/* Home icon */}
      <Link href="/" className="hover:text-gray-800 transition-colors">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
          <polyline points="9 21 9 12 15 12 15 21" />
        </svg>
      </Link>

      <span className="text-gray-400">›</span>

      <Link
        href="/technologies"
        className="hover:text-gray-800 transition-colors"
      >
        Technologies
      </Link>

      <span className="text-gray-400">›</span>

      <span className="text-gray-800 font-semibold">.NET</span>
    </nav>
  );
}
