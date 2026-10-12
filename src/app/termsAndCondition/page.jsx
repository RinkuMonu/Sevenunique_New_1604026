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




export const metadata = {
  title: "Website Terms and Conditions Policy Solutions | SevenUnique",
  description: "Read the SevenUnique Terms and Conditions governing website access, service usage, responsibilities, limitations, and applicable user for scalable growth.",
};


export default function TermsOfUse() {
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
              Terms Of Use
            </h1>
            <p className="mt-6 text-lg text-gray-800">
              Understand the rules and conditions under which you access and use
              our digital platforms, software, and associated services.
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
          
  {/* ================= INTRODUCTION ================= */}

<div className="border-0 shadow-lg">
  <div className="bg-gradient-to-r from-blue-50 to-purple-50">
    <div className="flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
      <div className="rounded-full bg-blue-100 p-2">
        <AlertCircle className="h-6 w-6 text-blue-600" />
      </div>
     Introduction
    </div>
  </div>

  <div className="p-8">
    <p className="text-lg leading-relaxed text-gray-500">
      These Terms &amp; Conditions ("Terms") govern the use of services
      provided by Sevenunique Tech Solutions Private Limited
      ("Sevenunique", "Company", "we", "our", or "us").
    </p>

    <p className="mt-4 text-lg leading-relaxed text-gray-500">
      By accessing our website, requesting a quotation, purchasing any
      service, signing a proposal, Statement of Work (SOW), work order,
      purchase order, agreement, or making any payment ("Client"),
      you agree to be legally bound by these Terms.
    </p>

    <p className="mt-4 text-lg leading-relaxed text-gray-500">
      These Terms apply to all software development, website development,
      mobile application development, API services, SaaS platforms,
      cloud solutions, AI services, enterprise software,
      IT consulting, maintenance, hosting, and related services
      provided by Sevenunique.
    </p>
  </div>
</div>

{/* ================= SCOPE OF SERVICES ================= */}

<div className="border-0 shadow-lg mt-8">
  <div className="bg-gradient-to-r from-green-50 to-blue-50">
    <div className="flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
      <div className="rounded-full bg-green-100 p-2">
        <Lock className="h-6 w-6 text-green-600" />
      </div>
     Scope of Services
    </div>
  </div>

  <div className="p-8">
    <p className="text-lg leading-relaxed text-gray-500">
      Sevenunique provides, including but not limited to:
    </p>

    <ul className="list-disc pl-6 mt-5 space-y-2 text-lg text-gray-500">
      <li>Custom Software Development</li>
      <li>Website Design & Development</li>
      <li>Mobile Application Development</li>
      <li>API Development & Integration</li>
      <li>SaaS Platforms</li>
      <li>Cloud Solutions</li>
      <li>Enterprise Software</li>
      <li>AI & Automation Solutions</li>
      <li>UI/UX Design</li>
      <li>Payment Gateway Integration</li>
      <li>Maintenance & Support</li>
      <li>Digital Transformation Services</li>
    </ul>

    <p className="mt-5 text-lg leading-relaxed text-gray-500">
      All services shall be governed by the applicable proposal,
      quotation, Statement of Work (SOW), purchase order,
      agreement, or contract.
    </p>
  </div>
</div>

{/* ================= ELIGIBILITY ================= */}

<div className="border-0 shadow-lg mt-8">
  <div className="bg-gradient-to-r from-red-50 to-pink-50">
    <div className="flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
      <div className="rounded-full bg-red-100 p-2">
        <Cookie className="h-6 w-6 text-red-600" />
      </div>
    Eligibility &amp; Prohibited Use
    </div>
  </div>

  <div className="p-8">
    <p className="text-lg leading-relaxed text-gray-500">
      Clients must be legally competent to enter into a binding contract.
    </p>

    <p className="mt-4 text-lg leading-relaxed text-gray-500">
      You agree not to use our services for any unlawful purpose,
      including but not limited to:
    </p>

    <ul className="list-disc pl-6 mt-5 space-y-2 text-lg text-gray-500">
      <li>Unauthorized access to systems or data</li>
      <li>Distribution of malware or malicious software</li>
      <li>Reverse engineering</li>
      <li>Scraping or automated data extraction</li>
      <li>Credential abuse</li>
      <li>Phishing</li>
      <li>Spam or fraudulent activities</li>
    </ul>

    <p className="mt-5 text-lg leading-relaxed text-gray-500">
      Violation of this section may result in immediate suspension
      or termination of services.
    </p>
  </div>
</div>

{/* ================= CLIENT RESPONSIBILITIES ================= */}

<div className="border-0 shadow-lg mt-8">
  <div className="bg-gradient-to-r from-orange-50 to-yellow-50">
    <div className="flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
      <div className="rounded-full bg-orange-100 p-2">
        <Cookie className="h-6 w-6 text-orange-600" />
      </div>
     Client Responsibilities
    </div>
  </div>

  <div className="p-8">
    <p className="text-lg leading-relaxed text-gray-500">
      The Client agrees to:
    </p>

    <ul className="list-disc pl-6 mt-5 space-y-2 text-lg text-gray-500">
      <li>Provide complete and accurate project requirements.</li>
      <li>Provide all required content, logos, images, documents, credentials and technical information before development begins.</li>
      <li>Ensure that all supplied content is legally owned or properly licensed.</li>
      <li>Maintain independent backups of existing websites, applications and business data.</li>
      <li>Review deliverables within the agreed review period.</li>
      <li>Make payments according to the agreed payment schedule.</li>
    </ul>

    <p className="mt-5 text-lg leading-relaxed text-gray-500">
      Sevenunique shall not be liable for delays caused by incomplete
      requirements, delayed approvals, or failure to provide requested
      information.
    </p>
  </div>
</div>

{/* ================= INTELLECTUAL PROPERTY ================= */}

<div className="border-0 shadow-lg mt-8">
  <div className="bg-gradient-to-r from-orange-50 to-yellow-50">
    <div className="flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
      <div className="rounded-full bg-orange-100 p-2">
        <Cookie className="h-6 w-6 text-orange-600" />
      </div>
     Intellectual Property
    </div>
  </div>

  <div className="p-8">
    <p className="text-lg text-gray-500">
      Unless otherwise agreed in writing:
    </p>

    <ul className="list-disc pl-6 mt-5 space-y-3 text-lg text-gray-500">
      <li>The Client retains ownership of all materials supplied by the Client.</li>
      <li>Sevenunique retains ownership of its proprietary frameworks, reusable libraries, methodologies, templates, development tools, and source components.</li>
      <li>Ownership of custom-developed deliverables, including source code (where applicable), shall transfer to the Client only after full payment of all applicable invoices has been received.</li>
      <li>Until full payment is received, all intellectual property rights in the deliverables shall remain with Sevenunique Tech Solutions Private Limited.</li>
    </ul>
  </div>
</div>

{/* ================= THIRD PARTY MATERIALS ================= */}

<div className="border-0 shadow-lg mt-8">
  <div className="bg-gradient-to-r from-indigo-50 to-blue-50">
    <div className="flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
      <div className="rounded-full bg-indigo-100 p-2">
        <Cookie className="h-6 w-6 text-indigo-600" />
      </div>
      Third-Party Materials
    </div>
  </div>

  <div className="p-8">
    <p className="text-lg text-gray-500">
      Projects may include third-party:
    </p>

    <ul className="list-disc pl-6 mt-5 space-y-2 text-lg text-gray-500">
      <li>APIs</li>
      <li>Libraries</li>
      <li>Themes</li>
      <li>Plugins</li>
      <li>Fonts</li>
      <li>Payment Gateways</li>
      <li>Cloud Services</li>
      <li>Hosting Providers</li>
    </ul>

    <p className="mt-5 text-lg text-gray-500">
      Licensing fees and compliance responsibilities remain the Client's responsibility unless specifically included in the proposal.
    </p>

    <p className="mt-4 text-lg text-gray-500">
      Sevenunique is not responsible for outages, failures, pricing changes, policy changes, licensing modifications, or discontinued services provided by third-party vendors.
    </p>
  </div>
</div>

{/* ================= PAYMENTS ================= */}

<div className="border-0 shadow-lg mt-8">
  <div className="bg-gradient-to-r from-green-50 to-emerald-50">
    <div className="flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
      <div className="rounded-full bg-green-100 p-2">
        <Cookie className="h-6 w-6 text-green-600" />
      </div>
      Payments
    </div>
  </div>

  <div className="p-8">
    <p className="text-lg text-gray-500">
      Payment milestones shall be defined in the quotation or agreement.
    </p>

    <p className="mt-4 text-lg text-gray-500">
      Unless otherwise agreed:
    </p>

    <ul className="list-disc pl-6 mt-5 space-y-2 text-lg text-gray-500">
      <li>30%–50% advance payment before project initiation.</li>
      <li>Remaining payments according to agreed milestones.</li>
      <li>Final delivery after receipt of all outstanding payments.</li>
    </ul>

    <p className="mt-5 text-lg text-gray-500">
      Late payments may result in:
    </p>

    <ul className="list-disc pl-6 mt-4 space-y-2 text-lg text-gray-500">
      <li>Suspension of services</li>
      <li>Delay in delivery</li>
      <li>Administrative charges</li>
      <li>Legal recovery proceedings where applicable</li>
    </ul>

    <p className="mt-5 text-lg text-gray-500">
      Unless expressly stated otherwise, third-party costs such as domain registration, web hosting, SSL certificates, software licenses, cloud infrastructure, SMS services, email services, payment gateway charges, and external subscriptions are not included in the quoted fees and shall be borne by the Client.
    </p>

    <p className="mt-4 text-lg text-gray-500">
      All payments are non-refundable except where expressly agreed in writing.
    </p>
  </div>
</div>

{/* ================= CANCELLATION ================= */}

<div className="border-0 shadow-lg mt-8">
  <div className="bg-gradient-to-r from-red-50 to-pink-50">
    <div className="flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
      <div className="rounded-full bg-red-100 p-2">
        <Cookie className="h-6 w-6 text-red-600" />
      </div>
   Cancellation
    </div>
  </div>

  <div className="p-8">
    <p className="text-lg text-gray-500">
      If the Client terminates the project:
    </p>

    <ul className="list-disc pl-6 mt-5 space-y-2 text-lg text-gray-500">
      <li>Work completed up to the cancellation date shall be billed.</li>
      <li>Advance payments already utilized are non-refundable.</li>
      <li>Sevenunique may retain completed work until outstanding payments have been cleared.</li>
    </ul>
  </div>
</div>

{/* ================= CHANGE REQUESTS ================= */}

<div className="border-0 shadow-lg mt-8">
  <div className="bg-gradient-to-r from-purple-50 to-pink-50">
    <div className="flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
      <div className="rounded-full bg-purple-100 p-2">
        <Cookie className="h-6 w-6 text-purple-600" />
      </div>
    Change Requests
    </div>
  </div>

  <div className="p-8">
    <p className="text-lg text-gray-500">
      Any feature or requirement outside the approved project scope shall be treated as a Change Request.
    </p>

    <p className="mt-4 text-lg text-gray-500">
      Additional work may result in:
    </p>

    <ul className="list-disc pl-6 mt-5 space-y-2 text-lg text-gray-500">
      <li>Additional development charges</li>
      <li>Revised delivery timelines</li>
      <li>Updated project estimates</li>
      <li>Repeated revisions after approval may be billed separately.</li>
    </ul>
  </div>
</div>

{/* ================= PROJECT APPROVAL ================= */}

<div className="border-0 shadow-lg mt-8">
  <div className="bg-gradient-to-r from-cyan-50 to-sky-50">
    <div className="flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
      <div className="rounded-full bg-cyan-100 p-2">
        <Cookie className="h-6 w-6 text-cyan-600" />
      </div>
     Project Approval
    </div>
  </div>

  <div className="p-8">
    <p className="text-lg text-gray-500">
      The Client shall review submitted work within seven (7) calendar days.
    </p>

    <p className="mt-4 text-lg text-gray-500">
      If no written feedback is received during this period, the submitted work shall be deemed approved, and development will proceed based on the approved version.
    </p>
  </div>
</div>

{/* ================= DELIVERY ================= */}

<div className="border-0 shadow-lg mt-8">
  <div className="bg-gradient-to-r from-blue-50 to-cyan-50">
    <div className="flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
      <div className="rounded-full bg-blue-100 p-2">
        <Cookie className="h-6 w-6 text-blue-600" />
      </div>
     Delivery
    </div>
  </div>

  <div className="p-8">
    <p className="text-lg text-gray-500">
      Delivery timelines are estimates and depend upon:
    </p>

    <ul className="list-disc pl-6 mt-5 space-y-2 text-lg text-gray-500">
      <li>Timely client approvals</li>
      <li>Availability of required information</li>
      <li>Third-party dependencies</li>
      <li>Technical constraints</li>
      <li>Force majeure events</li>
    </ul>

    <p className="mt-5 text-lg text-gray-500">
      Sevenunique will make reasonable efforts to meet agreed schedules
      but does not guarantee delivery dates.
    </p>
  </div>
</div>

{/* ================= SUPPORT & MAINTENANCE ================= */}

<div className="border-0 shadow-lg mt-8">
  <div className="bg-gradient-to-r from-green-50 to-teal-50">
    <div className="flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
      <div className="rounded-full bg-green-100 p-2">
        <Cookie className="h-6 w-6 text-green-600" />
      </div>
    Support & Maintenance
    </div>
  </div>

  <div className="p-8">
    <p className="text-lg text-gray-500">
      Unless otherwise specified:
    </p>

    <ul className="list-disc pl-6 mt-5 space-y-2 text-lg text-gray-500">
      <li>One (1) month of complimentary bug-fix support is provided after deployment.</li>
      <li>Complimentary support covers only bugs or defects related to the originally delivered work.</li>
      <li>New features, redesigns, integrations, server administration, content updates, third-party software updates, or issues caused by unauthorized modifications are not included.</li>
      <li>Ongoing maintenance is available under separate AMC or support plans.</li>
    </ul>
  </div>
</div>

{/* ================= API SERVICES ================= */}

<div className="border-0 shadow-lg mt-8">
  <div className="bg-gradient-to-r from-purple-50 to-indigo-50">
    <div className="flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
      <div className="rounded-full bg-purple-100 p-2">
        <Cookie className="h-6 w-6 text-purple-600" />
      </div>
    API Services
    </div>
  </div>

  <div className="p-8">
    <p className="text-lg text-gray-500">
      Where API services are provided:
    </p>

    <ul className="list-disc pl-6 mt-5 space-y-2 text-lg text-gray-500">
      <li>API keys remain confidential.</li>
      <li>Clients must protect API credentials.</li>
      <li>Excessive requests, abuse, scraping, reverse engineering, or unauthorized use are prohibited.</li>
      <li>Sevenunique may suspend API access to protect service integrity.</li>
      <li>API rate limits may apply.</li>
    </ul>
  </div>
</div>

{/* ================= SAAS SERVICES ================= */}

<div className="border-0 shadow-lg mt-8">
  <div className="bg-gradient-to-r from-pink-50 to-rose-50">
    <div className="flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
      <div className="rounded-full bg-pink-100 p-2">
        <Cookie className="h-6 w-6 text-pink-600" />
      </div>
    SaaS Services
    </div>
  </div>

  <div className="p-8">
    <p className="text-lg text-gray-500">
      For SaaS products:
    </p>

    <ul className="list-disc pl-6 mt-5 space-y-2 text-lg text-gray-500">
      <li>Subscription fees must be paid in advance.</li>
      <li>Services may be subject to scheduled maintenance.</li>
      <li>Account owners are responsible for account security.</li>
      <li>Abuse, illegal activity, or misuse may result in immediate suspension or termination.</li>
    </ul>
  </div>
</div>

{/* ================= CONFIDENTIALITY ================= */}

<div className="border-0 shadow-lg mt-8">
  <div className="bg-gradient-to-r from-yellow-50 to-orange-50">
    <div className="flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
      <div className="rounded-full bg-yellow-100 p-2">
        <Cookie className="h-6 w-6 text-yellow-600" />
      </div>
    Confidentiality
    </div>
  </div>

  <div className="p-8">
    <p className="text-lg text-gray-500">
      Both parties agree to maintain the confidentiality of business,
      financial, technical, and proprietary information disclosed during
      the project.
    </p>

    <p className="mt-5 text-lg text-gray-500">
      Confidential information shall not be disclosed except with prior
      written consent or where required by law.
    </p>
  </div>
</div>

{/* ================= DATA PROTECTION ================= */}

<div className="border-0 shadow-lg mt-8">
  <div className="bg-gradient-to-r from-sky-50 to-blue-50">
    <div className="flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
      <div className="rounded-full bg-sky-100 p-2">
        <Cookie className="h-6 w-6 text-sky-600" />
      </div>
    Data Protection
    </div>
  </div>

  <div className="p-8">
    <p className="text-lg text-gray-500">
      Sevenunique processes information in accordance with its Privacy
      Policy and applicable data protection laws, including the Digital
      Personal Data Protection Act, 2023 (India), where applicable.
    </p>
  </div>
</div>

{/* ================= WARRANTY DISCLAIMER ================= */}

<div className="border-0 shadow-lg mt-8">
  <div className="bg-gradient-to-r from-red-50 to-orange-50">
    <div className="flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
      <div className="rounded-full bg-red-100 p-2">
        <Cookie className="h-6 w-6 text-red-600" />
      </div>
    Warranty Disclaimer
    </div>
  </div>

  <div className="p-8">
    <p className="text-lg text-gray-500">
      All services are provided on an "as is" and "as available" basis.
    </p>

    <p className="mt-5 text-lg text-gray-500">
      Except as expressly stated in these Terms, Sevenunique makes no
      warranties, express or implied, regarding merchantability, fitness
      for a particular purpose, uninterrupted operation, or compatibility
      with every third-party platform.
    </p>
  </div>
</div>

{/* ================= LIMITATION OF LIABILITY ================= */}

<div className="border-0 shadow-lg mt-8">
  <div className="bg-gradient-to-r from-red-50 to-pink-50">
    <div className="flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
      <div className="rounded-full bg-red-100 p-2">
        <Cookie className="h-6 w-6 text-red-600" />
      </div>
     Limitation of Liability
    </div>
  </div>

  <div className="p-8">
    <p className="text-lg text-gray-500">
      To the maximum extent permitted by law, Sevenunique shall not be liable for:
    </p>

    <ul className="list-disc pl-6 mt-5 space-y-2 text-lg text-gray-500">
      <li>Loss of revenue</li>
      <li>Loss of profits</li>
      <li>Loss of business</li>
      <li>Loss of goodwill</li>
      <li>Indirect or consequential damages</li>
      <li>Data loss caused by third-party systems</li>
      <li>Cyberattacks beyond reasonable control</li>
      <li>Hosting failures</li>
      <li>Cloud outages</li>
      <li>Payment gateway downtime</li>
      <li>Third-party API failures</li>
    </ul>

    <p className="mt-5 text-lg text-gray-500">
      Total liability shall not exceed the total amount actually paid by the Client for the affected service.
    </p>
  </div>
</div>

{/* ================= INDEMNIFICATION ================= */}

<div className="border-0 shadow-lg mt-8">
  <div className="bg-gradient-to-r from-orange-50 to-yellow-50">
    <div className="flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
      <div className="rounded-full bg-orange-100 p-2">
        <Cookie className="h-6 w-6 text-orange-600" />
      </div>
     Indemnification
    </div>
  </div>

  <div className="p-8">
    <p className="text-lg text-gray-500">
      The Client agrees to indemnify and hold harmless Sevenunique Tech Solutions Private Limited from any claims, damages, liabilities, losses, costs, or legal expenses arising from:
    </p>

    <ul className="list-disc pl-6 mt-5 space-y-2 text-lg text-gray-500">
      <li>Misuse of our services</li>
      <li>Violation of these Terms</li>
      <li>Client-supplied content</li>
      <li>Intellectual property infringement</li>
      <li>Unlawful activities</li>
    </ul>
  </div>
</div>

{/* ================= FORCE MAJEURE ================= */}

<div className="border-0 shadow-lg mt-8">
  <div className="bg-gradient-to-r from-blue-50 to-indigo-50">
    <div className="flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
      <div className="rounded-full bg-blue-100 p-2">
        <Cookie className="h-6 w-6 text-blue-600" />
      </div>
       Force Majeure
    </div>
  </div>

  <div className="p-8">
    <p className="text-lg text-gray-500">
      Sevenunique shall not be liable for delays caused by events beyond its reasonable control, including:
    </p>

    <ul className="list-disc pl-6 mt-5 space-y-2 text-lg text-gray-500">
      <li>Natural disasters</li>
      <li>Internet failures</li>
      <li>Cyber incidents</li>
      <li>Government restrictions</li>
      <li>Labor disputes</li>
      <li>Pandemics</li>
      <li>Power failures</li>
      <li>Failures of third-party infrastructure</li>
    </ul>
  </div>
</div>

{/* ================= MARKETING RIGHTS ================= */}

<div className="border-0 shadow-lg mt-8">
  <div className="bg-gradient-to-r from-green-50 to-emerald-50">
    <div className="flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
      <div className="rounded-full bg-green-100 p-2">
        <Cookie className="h-6 w-6 text-green-600" />
      </div>
       Marketing Rights
    </div>
  </div>

  <div className="p-8">
    <p className="text-lg text-gray-500">
      Unless otherwise agreed in writing or restricted under a Non-Disclosure Agreement (NDA), Sevenunique may display completed projects, screenshots, logos, company names, and general project descriptions in its portfolio, official website, proposals, presentations, and marketing materials.
    </p>

    <p className="mt-5 text-lg text-gray-500">
      Confidential information will never be disclosed without prior written consent.
    </p>
  </div>
</div>

{/* ================= TERMINATION ================= */}

<div className="border-0 shadow-lg mt-8">
  <div className="bg-gradient-to-r from-purple-50 to-pink-50">
    <div className="flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
      <div className="rounded-full bg-purple-100 p-2">
        <Cookie className="h-6 w-6 text-purple-600" />
      </div>
      Termination
    </div>
  </div>

  <div className="p-8">
    <ul className="list-disc pl-6 space-y-2 text-lg text-gray-500">
      <li>Non-payment</li>
      <li>Fraud</li>
      <li>Illegal activities</li>
      <li>Security risks</li>
      <li>Violation of these Terms</li>
    </ul>
  </div>
</div>

{/* ================= DISPUTE RESOLUTION ================= */}

<div className="border-0 shadow-lg mt-8">
  <div className="bg-gradient-to-r from-cyan-50 to-sky-50">
    <div className="flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
      <div className="rounded-full bg-cyan-100 p-2">
        <Cookie className="h-6 w-6 text-cyan-600" />
      </div>
      Dispute Resolution
    </div>
  </div>

  <div className="p-8">
    <p className="text-lg text-gray-500">
      The parties shall first attempt to resolve any dispute through good-faith negotiation.
    </p>

    <p className="mt-5 text-lg text-gray-500">
      If unresolved within thirty (30) days, the matter may proceed to mediation or arbitration before litigation, without prejudice to either party's right to seek urgent injunctive relief.
    </p>
  </div>
</div>

{/* ================= GOVERNING LAW ================= */}

<div className="border-0 shadow-lg mt-8">
  <div className="bg-gradient-to-r from-orange-50 to-amber-50">
    <div className="flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
      <div className="rounded-full bg-orange-100 p-2">
        <Cookie className="h-6 w-6 text-orange-600" />
      </div>
       Governing Law
    </div>
  </div>

  <div className="p-8">
    <p className="text-lg text-gray-500">
      These Terms shall be governed by the laws of India.
    </p>

    <p className="mt-5 text-lg text-gray-500">
      Any dispute shall be subject to the exclusive jurisdiction of the competent courts located in Jaipur, Rajasthan, India, unless otherwise agreed in writing.
    </p>
  </div>
</div>

{/* ================= SEVERABILITY ================= */}

<div className="border-0 shadow-lg mt-8">
  <div className="bg-gradient-to-r from-slate-50 to-gray-50">
    <div className="flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
      <div className="rounded-full bg-slate-100 p-2">
        <Cookie className="h-6 w-6 text-slate-600" />
      </div>
       Severability
    </div>
  </div>

  <div className="p-8">
    <p className="text-lg text-gray-500">
      If any provision of these Terms is held invalid or unenforceable, the remaining provisions shall continue in full force and effect.
    </p>
  </div>
</div>

{/* ================= ENTIRE AGREEMENT ================= */}

<div className="border-0 shadow-lg mt-8">
  <div className="bg-gradient-to-r from-violet-50 to-purple-50">
    <div className="flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
      <div className="rounded-full bg-violet-100 p-2">
        <Cookie className="h-6 w-6 text-violet-600" />
      </div>
       Entire Agreement
    </div>
  </div>

  <div className="p-8">
    <p className="text-lg text-gray-500">
      These Terms, together with the applicable proposal, quotation, Statement of Work (SOW), purchase order, agreement, Privacy Policy, and API Terms, constitute the entire understanding between the parties and supersede all prior discussions relating to the subject matter.
    </p>
  </div>
</div>

{/* ================= AMENDMENTS ================= */}

<div className="border-0 shadow-lg mt-8">
  <div className="bg-gradient-to-r from-yellow-50 to-orange-50">
    <div className="flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
      <div className="rounded-full bg-yellow-100 p-2">
        <Cookie className="h-6 w-6 text-yellow-600" />
      </div>
       Amendments
    </div>
  </div>

  <div className="p-8">
    <p className="text-lg text-gray-500">
      Sevenunique reserves the right to modify these Terms at any time.
    </p>

    <p className="mt-5 text-lg text-gray-500">
      The latest version will always be available on our website. Continued use of our website or services constitutes acceptance of the revised Terms.
    </p>
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
                  href="tel:+918741886688"
                  className="flex items-center gap-2 rounded-full bg-white/20 px-6 py-3 backdrop-blur-sm transition-all hover:bg-white/30"
                >
                  <Phone className="h-5 w-5" />
                  +91-8741886688
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
