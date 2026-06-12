"use client";

import {
  Mail,
  Shield,
  Phone,
  AlertCircle,
  Lock,
  Eye,
  CheckCircle,
  Database,
  Share2,
  Cookie,
} from "lucide-react";

export default function KYCPolicy() {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#fff2e2] py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-[#E95730] p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-12 w-12 text-white"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                </svg>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#E95730] mb-4">
             KYC Policy & Onboarding Process
            </h1>
            <p className="mt-6 text-lg text-gray-800">
          Secure, compliant, and streamlined customer verification process
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/30 px-4 py-2 text-sm font-medium text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                Legal Protection
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/30 px-4 py-2 text-sm font-medium text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="1"></circle>
                  <path d="M12 1v6m6.364 1.636l-4.243 4.243M19 12h-6m-1.636 6.364l-4.243-4.243M12 19v-6M4.636 17.364l4.243-4.243M5 12h6M7.636 4.636l4.243 4.243"></path>
                </svg>
                Clients Rights
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/30 px-4 py-2 text-sm font-medium text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Service Terms
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Banner */}
      <div className="container py-12 max-h-6xl mx-auto">
        <div className="mx-auto max-w-6xl space-y-8">
          {/* Company Info div */}
          <div className="border-0 bg-gradient-to-r from-[#ab6545] to-purple-600 text-white shadow-2xl">
            <div className="p-8 text-center">
              <h2 className="text-2xl font-bold">
                SevenUnique Tech Solutions Private Limited
              </h2>
              <div className="mt-4 flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:info@sevenunique.com" className="hover:underline">
                    info@sevenunique.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  <span>Privacy & Data Protection</span>
                </div>
              </div>
            </div>
          </div>

          {/* Overview Section */}
          <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50">
              <div className=" flex items-center gap-3 text-xl font-bold p-3 text-gray-600 p-3">
                <div className="rounded-full bg-blue-100 p-2">
                  <AlertCircle className="h-6 w-6 text-blue-600" />
                </div>
               Purpose
              </div>
            </div>
            <div className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground text-gray-500">
                This Know Your Customer (KYC) Policy outlines the standards followed by SevenUnique Tech Solutions Pvt. Ltd. to verify the identity and address of customers before onboarding, in compliance with applicable legal and regulatory requirements.
              </p>
            </div>
          </div>

         

         <div className="border-0 shadow-lg rounded-2xl overflow-hidden bg-white">
  {/* Header */}
  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-3">
    <div className="flex items-center gap-3 text-xl font-bold text-gray-600">
      <div className="rounded-full bg-green-100 p-3">
        <Lock className="h-7 w-7 text-green-600" />
      </div>

   Documents Required for KYC
    </div>
  </div>

  {/* Table */}
  <div className="p-8 overflow-x-auto">
    <table className="w-full border border-gray-200 rounded-xl overflow-hidden">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-5 text-left text-xl font-semibold text-gray-600 border-b">
            Clause
          </th>

          <th className="px-6 py-5 text-left text-xl font-semibold text-gray-600 border-b">
            Description
          </th>

          <th className="px-6 py-5 text-center text-xl font-semibold text-gray-600 border-b">
            Status
          </th>
        </tr>
      </thead>

      <tbody>
        <tr className="border-b">
          <td className="px-6 py-6 text-lg font-medium text-black">
            Invalid Provision
          </td>

          <td className="px-6 py-6 text-lg text-gray-700">
            If any provision of the agreement is found invalid, illegal, or
            unenforceable, it will not affect the remaining provisions.
          </td>

          <td className="px-6 py-6 text-center">
            <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700">
              Applicable
            </span>
          </td>
        </tr>

        <tr className="border-b">
          <td className="px-6 py-6 text-lg font-medium text-black">
            Remaining Terms
          </td>

          <td className="px-6 py-6 text-lg text-gray-700">
            All remaining sections of the agreement shall continue to remain
            fully valid and enforceable.
          </td>

          <td className="px-6 py-6 text-center">
            <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
              Active
            </span>
          </td>
        </tr>

        <tr className="border-b">
          <td className="px-6 py-6 text-lg font-medium text-black">
            Replacement Clause
          </td>

          <td className="px-6 py-6 text-lg text-gray-700">
            The invalid provision may be replaced with a mutually acceptable
            clause reflecting the original intent of both parties.
          </td>

          <td className="px-6 py-6 text-center">
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Required
            </span>
          </td>
        </tr>

        <tr>
          <td className="px-6 py-6 text-lg font-medium text-black">
            Agreement Continuity
          </td>

          <td className="px-6 py-6 text-lg text-gray-700">
            The agreement will not become void solely because one clause is
            deemed unenforceable.
          </td>

          <td className="px-6 py-6 text-center">
            <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
              Protected
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

          {/* Contact Support */}
          <div className="border-0 bg-gradient-to-r from-[#ab6545] to-red-500 text-white shadow-2xl">
            <div className="p-8 text-center">
              <div className="mb-6 flex justify-center">
                <div className="rounded-full bg-white/20 p-4 backdrop-blur-sm">
                  <Phone className="h-8 w-8" />
                </div>
              </div>
              <h2 className="mb-4 text-2xl font-bold">Privacy Questions?</h2>
              <p className="mb-6 text-orange-100">
                If you have questions about our privacy policy or need
                assistance with data protection matters, reach out to us:
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href="mailto:info@sevenunique.com"
                  className="flex items-center gap-2 rounded-full bg-white/20 px-6 py-3 backdrop-blur-sm transition-all hover:bg-white/30"
                >
                  <Mail className="h-5 w-5" />
                  info@sevenunique.com
                </a>
                <a
                  href="tel:+919660339514"
                  className="flex items-center gap-2 rounded-full bg-white/20 px-6 py-3 backdrop-blur-sm transition-all hover:bg-white/30"
                >
                  <Phone className="h-5 w-5" />
                  +91-9660339514
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
