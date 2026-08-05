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
  title: "KYC Policy & Customer Verification Guide | SevenUnique",
  description: "Read the SevenUnique KYC Policy to understand identity verification, compliance requirements, documentation, and customer due diligence for scalable growth.",
};

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
{/* ===================== 1. OVERVIEW ===================== */}

<div className="border-0 shadow-lg">
  <div className="bg-gradient-to-r from-blue-50 to-purple-50">
    <div className="flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
      <div className="rounded-full bg-blue-100 p-2">
        <AlertCircle className="h-6 w-6 text-blue-600" />
      </div>
      Overview
    </div>
  </div>

  <div className="p-8 space-y-6 text-gray-500 leading-8 text-lg">
    <p>
      SevenUnique Tech Solutions Private Limited ("SevenUnique",
      "Company", "we", "our", or "us") is committed to maintaining a
      secure, transparent, and compliant onboarding process through
      robust Know Your Customer (KYC) and Customer Due Diligence (CDD)
      procedures.
    </p>

    <p>
      Our KYC process is designed to verify the identity of customers,
      merchants, businesses, partners, and authorized representatives
      before providing access to our software platforms, APIs, SaaS
      products, cloud services, AI solutions, enterprise software,
      payment integrations, merchant onboarding solutions, and other
      technology services.
    </p>

    <p>
      These verification measures help prevent fraud, reduce financial
      and operational risks, protect the integrity of our platform, and
      ensure compliance with applicable legal, regulatory, and
      contractual obligations.
    </p>

    <p>
      Where regulated financial or payment-related services are provided
      through licensed banking institutions, payment aggregators,
      payment gateways, or other regulated financial partners, KYC
      verification, merchant approval, and compliance requirements may
      be carried out in accordance with applicable laws and the policies
      of those regulated entities.
    </p>
  </div>
</div>

{/* ===================== 2. PURPOSE OF KYC ===================== */}

<div className="border-0 shadow-lg">
  <div className="bg-gradient-to-r from-blue-50 to-purple-50">
    <div className="flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
      <div className="rounded-full bg-blue-100 p-2">
        <AlertCircle className="h-6 w-6 text-blue-600" />
      </div>
     Purpose of KYC
    </div>
  </div>

  <div className="p-8">
    <ul className="space-y-4 text-lg text-gray-500 list-disc pl-6">
      <li>Verify the identity of customers, merchants, and business entities.</li>
      <li>Prevent fraud, identity theft, money laundering, and unauthorized activities.</li>
      <li>Support Anti-Money Laundering (AML) and Counter-Terrorist Financing (CTF) requirements where applicable.</li>
      <li>Enable secure customer and merchant onboarding.</li>
      <li>Protect our technology platforms, customers, and business partners.</li>
      <li>Meet applicable legal, regulatory, and contractual obligations.</li>
      <li>Promote a safe, secure, and trusted digital ecosystem.</li>
    </ul>
  </div>
</div>

{/* ===================== 3. SCOPE & APPLICABILITY ===================== */}

<div className="border-0 shadow-lg">
  <div className="bg-gradient-to-r from-blue-50 to-purple-50">
    <div className="flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
      <div className="rounded-full bg-blue-100 p-2">
        <AlertCircle className="h-6 w-6 text-blue-600" />
      </div>
     Scope & Applicability
    </div>
  </div>

  <div className="p-8">
    <p className="text-lg text-gray-500 mb-6">
      This policy applies to individuals and organizations that use or
      apply for SevenUnique's products or services, including but not
      limited to:
    </p>

    <div className="grid md:grid-cols-2 gap-4">

      <div className="rounded-lg bg-gray-50 p-4">• Individual Customers</div>
      <div className="rounded-lg bg-gray-50 p-4">• Sole Proprietorships</div>

      <div className="rounded-lg bg-gray-50 p-4">• Partnership Firms</div>
      <div className="rounded-lg bg-gray-50 p-4">• Limited Liability Partnerships (LLPs)</div>

      <div className="rounded-lg bg-gray-50 p-4">• Private Limited Companies</div>
      <div className="rounded-lg bg-gray-50 p-4">• Public Limited Companies</div>

      <div className="rounded-lg bg-gray-50 p-4">• Startups</div>
      <div className="rounded-lg bg-gray-50 p-4">• MSMEs</div>

      <div className="rounded-lg bg-gray-50 p-4">• Enterprise Customers</div>
      <div className="rounded-lg bg-gray-50 p-4">• Merchants</div>

      <div className="rounded-lg bg-gray-50 p-4">• API Users</div>
      <div className="rounded-lg bg-gray-50 p-4">• SaaS Customers</div>

      <div className="rounded-lg bg-gray-50 p-4">• Business Partners</div>
      <div className="rounded-lg bg-gray-50 p-4">• Authorized Representatives</div>

    </div>
  </div>
</div>

{/* ===================== 4. REGULATORY FRAMEWORK ===================== */}

<div className="border-0 shadow-lg">
  <div className="bg-gradient-to-r from-blue-50 to-purple-50">
    <div className="flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
      <div className="rounded-full bg-blue-100 p-2">
        <AlertCircle className="h-6 w-6 text-blue-600" />
      </div>
     Regulatory Framework
    </div>
  </div>

  <div className="p-8">
    <p className="text-lg text-gray-500 mb-6">
      This KYC Policy has been prepared considering applicable legal and
      regulatory requirements, including but not limited to:
    </p>

    <ul className="space-y-4 text-lg text-gray-500 list-disc pl-6">
      <li>
        Reserve Bank of India (RBI) directions applicable to regulated
        payment entities and merchant onboarding.
      </li>

      <li>
        Prevention of Money Laundering Act, 2002 (PMLA), where applicable.
      </li>

      <li>
        Digital Personal Data Protection Act, 2023 (India).
      </li>

      <li>
        Information Technology Act, 2000.
      </li>

      <li>
        Applicable contractual obligations imposed by licensed banks,
        payment aggregators, payment gateways, NBFCs, and other regulated
        financial institutions.
      </li>
    </ul>

    <div className="mt-8 rounded-xl border-l-4 border-blue-500 bg-blue-50 p-6">
      <p className="text-gray-700 leading-8">
        <strong>Important:</strong> SevenUnique Tech Solutions Private
        Limited is a technology service provider and is not a banking
        company, payment aggregator, payment gateway, or regulated
        financial institution unless expressly stated otherwise.
      </p>

      <p className="mt-4 text-gray-700 leading-8">
        Where regulated financial services are offered through licensed
        partners, KYC approval, merchant onboarding, and regulatory
        compliance may be performed by the respective regulated financial
        institution.
      </p>
    </div>
  </div>
</div>

{/* ===================== 5. CUSTOMER DUE DILIGENCE ===================== */}

<div className="border-0 shadow-lg">
  <div className="bg-gradient-to-r from-blue-50 to-purple-50">
    <div className="flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
      <div className="rounded-full bg-blue-100 p-2">
        <AlertCircle className="h-6 w-6 text-blue-600" />
      </div>
     Customer Due Diligence (CDD)
    </div>
  </div>

  <div className="p-8">

    <p className="text-lg text-gray-500 mb-6">
      Before activating services, SevenUnique may perform Customer Due
      Diligence (CDD), which may include verification of:
    </p>

    <ul className="space-y-3 text-lg text-gray-500 list-disc pl-6">
      <li>Customer identity</li>
      <li>Business registration and legal existence</li>
      <li>Authorized signatory</li>
      <li>Ultimate Beneficial Owner (UBO), where applicable</li>
      <li>Registered business address</li>
      <li>Bank account information</li>
      <li>Mobile number and email address</li>
      <li>Nature of business</li>
      <li>Expected transaction profile</li>
      <li>Source of funds or business activity, where applicable</li>
      <li>Risk classification</li>
    </ul>

    <div className="mt-8 rounded-xl bg-amber-50 border-l-4 border-amber-500 p-6">
      <p className="text-gray-700 leading-8">
        Additional verification or Enhanced Due Diligence (EDD) may be
        conducted depending on the customer's business profile,
        regulatory obligations, or risk assessment.
      </p>
    </div>

  </div>
</div>

{/* ===================== 6. DOCUMENTS REQUIRED FOR KYC ===================== */}

<div className="border-0 shadow-lg">
  <div className="bg-gradient-to-r from-blue-50 to-purple-50">
    <div className="flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
      <div className="rounded-full bg-blue-100 p-2">
        <AlertCircle className="h-6 w-6 text-blue-600" />
      </div>
     Documents Required for KYC
    </div>
  </div>

  <div className="p-8">

    <p className="text-lg text-gray-500 mb-8">
      Depending on the type of customer or organization, we may request
      one or more of the following documents.
    </p>

    <div className="space-y-8">

      <div>
        <h3 className="font-bold text-xl text-gray-700 mb-4">
          Individual
        </h3>

        <ul className="list-disc pl-6 space-y-2 text-gray-500 text-lg">
          <li>PAN Card</li>
          <li>Aadhaar Card or other officially valid identity document (where legally permissible)</li>
          <li>Passport, Driving Licence, or Voter ID</li>
          <li>Recent Photograph</li>
          <li>Mobile Number</li>
          <li>Email Address</li>
        </ul>
      </div>

      <div>
        <h3 className="font-bold text-xl text-gray-700 mb-4">
          Sole Proprietorship
        </h3>

        <ul className="list-disc pl-6 space-y-2 text-gray-500 text-lg">
          <li>PAN Card</li>
          <li>GST Registration (if applicable)</li>
          <li>Business Registration Proof</li>
          <li>Business Address Proof</li>
          <li>Cancelled Cheque</li>
          <li>Recent Bank Statement</li>
        </ul>
      </div>

      <div>
        <h3 className="font-bold text-xl text-gray-700 mb-4">
          Partnership Firm / LLP
        </h3>

        <ul className="list-disc pl-6 space-y-2 text-gray-500 text-lg">
          <li>PAN Card</li>
          <li>Partnership Deed or LLP Incorporation Certificate</li>
          <li>GST Registration (if applicable)</li>
          <li>Business Address Proof</li>
          <li>Bank Account Proof</li>
          <li>Authorized Signatory Documents</li>
        </ul>
      </div>

      <div>
        <h3 className="font-bold text-xl text-gray-700 mb-4">
          Private Limited / Public Limited Company
        </h3>

        <ul className="list-disc pl-6 space-y-2 text-gray-500 text-lg">
          <li>Certificate of Incorporation</li>
          <li>PAN Card</li>
          <li>Memorandum & Articles of Association (MOA & AOA)</li>
          <li>GST Registration (if applicable)</li>
          <li>Board Resolution</li>
          <li>Director KYC Documents</li>
          <li>UBO Declaration (where applicable)</li>
          <li>Cancelled Cheque</li>
          <li>Bank Verification</li>
          <li>Registered Office Address Proof</li>
        </ul>
      </div>

    </div>

    <div className="mt-8 rounded-xl bg-gray-100 p-6">
      <p className="text-gray-700 leading-8">
        Additional documentation may be requested based on applicable
        laws, partner requirements, business type, or risk profile.
      </p>
    </div>

  </div>
</div>

{/* ===================== 7. RISK-BASED VERIFICATION ===================== */}

<div className="border-0 shadow-lg">
  <div className="bg-gradient-to-r from-blue-50 to-purple-50">
    <div className="flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
      <div className="rounded-full bg-blue-100 p-2">
        <AlertCircle className="h-6 w-6 text-blue-600" />
      </div>
     Risk-Based Verification
    </div>
  </div>

  <div className="p-8">

    <p className="text-lg text-gray-500 mb-6">
      Customers may be categorized into different risk levels depending
      on various factors including:
    </p>

    <ul className="space-y-3 list-disc pl-6 text-lg text-gray-500">
      <li>Nature of business</li>
      <li>Business category</li>
      <li>Geographical location</li>
      <li>Expected transaction volume</li>
      <li>Products and services offered</li>
      <li>Ownership structure</li>
      <li>Regulatory exposure</li>
      <li>Previous compliance history (where available)</li>
    </ul>

    <div className="mt-8 rounded-xl bg-yellow-50 border-l-4 border-yellow-500 p-6">
      <p className="text-gray-700 leading-8">
        Customers identified as Medium or High Risk may be required to
        undergo Enhanced Due Diligence (EDD), including additional
        documentation, verification, or periodic review.
      </p>
    </div>

  </div>
</div>

{/* ===================== 8. ONGOING MONITORING ===================== */}

<div className="border-0 shadow-lg">
  <div className="bg-gradient-to-r from-blue-50 to-purple-50">
    <div className="flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
      <div className="rounded-full bg-blue-100 p-2">
        <AlertCircle className="h-6 w-6 text-blue-600" />
      </div>
     Ongoing Monitoring
    </div>
  </div>

  <div className="p-8">

    <p className="text-lg text-gray-500 mb-6">
      KYC is not a one-time activity. SevenUnique may periodically review
      customer information throughout the business relationship.
    </p>

    <p className="text-lg text-gray-500 mb-6">
      Customers may be requested to:
    </p>

    <ul className="space-y-3 list-disc pl-6 text-lg text-gray-500">
      <li>Update expired identity documents.</li>
      <li>Submit revised business registration records.</li>
      <li>Confirm ownership information.</li>
      <li>Provide updated bank account details.</li>
      <li>Respond to compliance verification requests.</li>
    </ul>

    <div className="mt-8 rounded-xl bg-blue-50 p-6">
      <p className="text-gray-700 leading-8">
        Failure to provide updated information may result in delayed
        onboarding, temporary suspension, or discontinuation of services,
        where permitted by applicable law or contractual obligations.
      </p>
    </div>

  </div>
</div>

{/* ===================== 9. CUSTOMER RESPONSIBILITIES ===================== */}

<div className="border-0 shadow-lg">
  <div className="bg-gradient-to-r from-blue-50 to-purple-50">
    <div className="flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
      <div className="rounded-full bg-blue-100 p-2">
        <AlertCircle className="h-6 w-6 text-blue-600" />
      </div>
   Customer Responsibilities
    </div>
  </div>

  <div className="p-8">

    <p className="text-lg text-gray-500 mb-6">
      Customers are responsible for ensuring that all KYC information
      submitted to SevenUnique is:
    </p>

    <ul className="space-y-3 list-disc pl-6 text-lg text-gray-500">
      <li>Accurate</li>
      <li>Complete</li>
      <li>Current</li>
      <li>Truthful</li>
      <li>Legally valid</li>
    </ul>

    <p className="mt-8 text-lg text-gray-500 leading-8">
      Customers must promptly notify SevenUnique of any material changes
      relating to ownership, business registration, address, authorized
      signatories, contact details, or regulatory status.
    </p>

  </div>
</div>

{/* ===================== 10. THIRD-PARTY VERIFICATION ===================== */}

<div className="border-0 shadow-lg">
  <div className="bg-gradient-to-r from-blue-50 to-purple-50">
    <div className="flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
      <div className="rounded-full bg-blue-100 p-2">
        <AlertCircle className="h-6 w-6 text-blue-600" />
      </div>
     Third-Party Verification
    </div>
  </div>

  <div className="p-8">

    <p className="text-lg text-gray-500 leading-8">
      SevenUnique may verify customer information through authorized
      third-party verification agencies, government databases, banking
      partners, payment service providers, identity verification
      providers, or other legally permitted sources where applicable.
    </p>

    <div className="mt-8 rounded-xl border-l-4 border-green-500 bg-green-50 p-6">
      <p className="text-gray-700 leading-8">
        By submitting KYC information, customers consent to such
        verification activities where permitted by applicable law.
      </p>
    </div>

  </div>
</div>

{/* ===================== 11. DATA PROTECTION ===================== */}

<div className="border-0 shadow-lg">
  <div className="bg-gradient-to-r from-blue-50 to-purple-50">
    <div className="flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
      <div className="rounded-full bg-blue-100 p-2">
        <AlertCircle className="h-6 w-6 text-blue-600" />
      </div>
     Data Protection
    </div>
  </div>

  <div className="p-8">

    <p className="text-lg text-gray-500 leading-8 mb-6">
      SevenUnique is committed to protecting customer information using
      appropriate technical, organizational, and administrative security
      measures.
    </p>

    <p className="text-lg text-gray-500 mb-5">
      KYC information may be used only for legitimate business purposes,
      including:
    </p>

    <ul className="space-y-3 list-disc pl-6 text-lg text-gray-500">
      <li>Identity verification</li>
      <li>Customer onboarding</li>
      <li>Fraud prevention</li>
      <li>Security monitoring</li>
      <li>Regulatory compliance</li>
      <li>Contractual obligations</li>
      <li>Risk management</li>
      <li>Legal compliance</li>
    </ul>

    <div className="mt-8 rounded-xl bg-green-50 border-l-4 border-green-500 p-6">
      <p className="text-gray-700 leading-8">
        Customer information is processed in accordance with our Privacy
        Policy and applicable data protection laws.
      </p>
    </div>

  </div>
</div>

{/* ===================== 12. RECORD RETENTION ===================== */}

<div className="border-0 shadow-lg">
  <div className="bg-gradient-to-r from-blue-50 to-purple-50">
    <div className="flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
      <div className="rounded-full bg-blue-100 p-2">
        <AlertCircle className="h-6 w-6 text-blue-600" />
      </div>
     Record Retention
    </div>
  </div>

  <div className="p-8">

    <p className="text-lg text-gray-500 leading-8">
      KYC records and supporting documentation may be retained for the
      period required under applicable laws, contractual obligations,
      regulatory requirements, internal compliance policies, or dispute
      resolution purposes.
    </p>

    <p className="mt-6 text-lg text-gray-500 leading-8">
      After the applicable retention period, records may be securely
      deleted, anonymized, or archived in accordance with our internal
      data retention policies.
    </p>

  </div>
</div>

{/* ===================== 13. REFUSAL OR SUSPENSION OF SERVICES ===================== */}

<div className="border-0 shadow-lg">
  <div className="bg-gradient-to-r from-blue-50 to-purple-50">
    <div className="flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
      <div className="rounded-full bg-blue-100 p-2">
        <AlertCircle className="h-6 w-6 text-blue-600" />
      </div>
   Refusal or Suspension of Services
    </div>
  </div>

  <div className="p-8">

    <p className="text-lg text-gray-500 mb-6">
      SevenUnique may refuse onboarding, suspend, restrict, or terminate
      services where:
    </p>

    <ul className="space-y-3 list-disc pl-6 text-lg text-gray-500">
      <li>False or misleading information is submitted.</li>
      <li>Fraudulent or forged documents are detected.</li>
      <li>Required KYC documents are not provided.</li>
      <li>Regulatory or contractual requirements are not satisfied.</li>
      <li>There is suspicion of fraud, money laundering, or unlawful activity.</li>
      <li>Continued services may expose SevenUnique or its partners to legal, financial, or security risks.</li>
    </ul>

    <div className="mt-8 rounded-xl bg-red-50 border-l-4 border-red-500 p-6">
      <p className="text-gray-700 leading-8">
        Such decisions may be taken without prior notice where required by
        law, regulatory direction, or risk management obligations.
      </p>
    </div>

  </div>
</div>

{/* ===================== 14. POLICY UPDATES ===================== */}

<div className="border-0 shadow-lg">
  <div className="bg-gradient-to-r from-blue-50 to-purple-50">
    <div className="flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
      <div className="rounded-full bg-blue-100 p-2">
        <AlertCircle className="h-6 w-6 text-blue-600" />
      </div>
     Policy Updates
    </div>
  </div>

  <div className="p-8">

    <p className="text-lg text-gray-500 leading-8">
      SevenUnique reserves the right to amend, modify, or update this KYC
      Policy at any time to reflect changes in applicable laws,
      regulations, business operations, partner requirements, or internal
      compliance standards.
    </p>

    <p className="mt-6 text-lg text-gray-500 leading-8">
      The latest version of this Policy will always be published on our
      official website and shall become effective immediately upon
      publication unless otherwise stated.
    </p>

  </div>
</div>


{/* ===================== 15. ACCEPTANCE OF THIS POLICY ===================== */}

<div className="border-0 shadow-lg">
  <div className="bg-gradient-to-r from-blue-50 to-purple-50">
    <div className="flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
      <div className="rounded-full bg-blue-100 p-2">
        <CheckCircle className="h-6 w-6 text-blue-600" />
      </div>
 Acceptance of this Policy
    </div>
  </div>

  <div className="p-6">

    <p className="text-lg text-gray-500 leading-8">
      By applying for, registering, or continuing to use any products,
      services, software platforms, APIs, merchant solutions, or other
      offerings provided by SevenUnique Tech Solutions Private Limited,
      customers acknowledge that they have read, understood, and agreed
      to this KYC Policy.
    </p>

    <p className="mt-6 text-lg text-gray-500 leading-8">
      Customers further agree to provide accurate, complete, and updated
      information whenever requested and to comply with all applicable
      verification requirements, regulatory obligations, and partner
      compliance standards.
    </p>

  </div>
</div>

{/* ===================== 16. SEVERABILITY ===================== */}

<div className="border-0 shadow-lg">
  <div className="bg-gradient-to-r from-blue-50 to-purple-50">
    <div className="flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
      <div className="rounded-full bg-blue-100 p-2">
        <Shield className="h-6 w-6 text-blue-600" />
      </div>
     Severability
    </div>
  </div>

  <div className="p-6">

    <p className="text-lg text-gray-500 leading-8">
      If any provision of this KYC Policy is held to be invalid, illegal,
      or unenforceable by any court or competent authority, such provision
      shall be deemed severed from this Policy to the extent of such
      invalidity or unenforceability.
    </p>

    <p className="mt-6 text-lg text-gray-500 leading-8">
      The remaining provisions shall continue in full force and effect and
      shall remain valid, binding, and enforceable to the fullest extent
      permitted under applicable law.
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
