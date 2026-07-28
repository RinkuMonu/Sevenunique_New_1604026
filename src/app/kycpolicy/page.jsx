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

          {/* Overview Section */}
          <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50">
              <div className=" flex items-center gap-3 text-xl font-bold p-3 text-gray-600 p-3">
                <div className="rounded-full bg-blue-100 p-2">
                  <AlertCircle className="h-6 w-6 text-blue-600" />
                </div>
               Know Your Customer (KYC) Policy
              </div>
            </div>
            <div className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground text-gray-500">
                SevenUnique Tech Solutions Private Limited (SevenUnique,Company,we,our, or us) is
                committed to implementing robust Know Your Customer (KYC) procedures to verify the identity of
                merchants, customers, partners, and authorized representatives before providing technology services,
                payment integrations, API access, merchant onboarding, or related solutions.
                Where our services involve payment processing or merchant onboarding through regulated banking or
                payment partners, KYC verification is conducted in accordance with applicable laws, contractual
                requirements, and the compliance standards of our regulated partners.
              </p>
            </div>
          </div>
 {/* Overview Section */}
          <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50">
              <div className=" flex items-center gap-3 text-xl font-bold p-3 text-gray-600 p-3">
                <div className="rounded-full bg-blue-100 p-2">
                  <AlertCircle className="h-6 w-6 text-blue-600" />
                </div>
               Purpose of KYC
              </div>
            </div>
            <div className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground text-gray-500">
                The objectives of this KYC Policy are to:
                <ul className="my-5 space-y-4 text-sm text-gray-500 leading-relaxed list-disc pl-5">
  <li>Verify the identity of merchants and customers.</li>
  <li>Prevent identity theft and fraud.</li>
  <li>Comply with applicable Anti-Money Laundering (AML) and Counter-Terrorist Financing (CTF) requirements where applicable.</li>
  <li>Support secure onboarding of merchants using our technology platform.</li>
  <li>Protect the integrity of our services.</li>
</ul>

              </p>
            </div>
          </div>

         {/* Overview Section */}
          <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50">
              <div className=" flex items-center gap-3 text-xl font-bold p-3 text-gray-600 p-3">
                <div className="rounded-full bg-blue-100 p-2">
                  <AlertCircle className="h-6 w-6 text-blue-600" />
                </div>
                Regulatory Framework
              </div>
            </div>
            <div className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground text-gray-500">
               This policy is designed considering applicable requirements, including:
              <ul className="my-5 space-y-4 text-sm text-gray-500 leading-relaxed list-disc pl-5">
  <li>
    Reserve Bank of India (RBI) directions applicable to regulated payment entities and merchant onboarding through regulated partners.
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
    Applicable contractual requirements imposed by our banking, payment, or financial service partners.
  </li>
</ul>
<p className="text-sm text-gray-500 leading-relaxed">
  <strong className="font-semibold text-gray-700">Important:</strong>{" "}
  SevenUnique Tech Solutions Private Limited is a technology service provider.
  Where regulated financial services are offered, KYC approval and regulatory
  compliance may be performed by the relevant licensed bank, payment
  aggregator, payment service provider, or other regulated financial
  institution.
</p>


              </p>
            </div>
          </div>
 {/* Overview Section */}
          <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50">
              <div className=" flex items-center gap-3 text-xl font-bold p-3 text-gray-600 p-3">
                <div className="rounded-full bg-blue-100 p-2">
                  <AlertCircle className="h-6 w-6 text-blue-600" />
                </div>
                Customer Due Diligence (CDD)
              </div>
            </div>
            <div className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground text-gray-500">
               Before activation of services, we may verify:
               <ul className="my-5 space-y-4 text-sm text-gray-500 leading-relaxed list-disc pl-5">
  <li>Identity of the applicant.</li>
  <li>Business existence.</li>
  <li>Authorized signatory.</li>
  <li>Ultimate Beneficial Owner (UBO), where required.</li>
  <li>Business address.</li>
  <li>Bank account details.</li>
  <li>Contact information.</li>
  <li>Nature of business.</li>
  <li>Risk profile.</li>
</ul>
Enhanced verification may be required for higher-risk businesses.


              </p>
            </div>
          </div>
 {/* Overview Section */}
          <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50">
              <div className=" flex items-center gap-3 text-xl font-bold p-3 text-gray-600 p-3">
                <div className="rounded-full bg-blue-100 p-2">
                  <AlertCircle className="h-6 w-6 text-blue-600" />
                </div>
              Documents Required
              </div>
            </div>
            <div className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground text-gray-500">
               Depending on the customer type, documents may include:
<h4 className="mt-4 mb-3 text-base font-semibold text-gray-700">
  Individual
</h4>

<ul className="my-5 space-y-4 text-sm text-gray-500 leading-relaxed list-disc pl-5">
  <li>PAN Card</li>
  <li>Aadhaar or other officially valid identity document (where legally permissible)</li>
  <li>Passport / Driving Licence / Voter ID (as applicable)</li>
  <li>Photograph</li>
  <li>Mobile Number</li>
  <li>Email Address</li>
</ul>
<h4 className="mt-4 mb-3 text-base font-semibold text-gray-700">
  Proprietorship
</h4>

<ul className="my-5 space-y-4 text-sm text-gray-500 leading-relaxed list-disc pl-5">
  <li>PAN</li>
  <li>GST Registration (if applicable)</li>
  <li>Business Registration</li>
  <li>Address Proof</li>
  <li>Cancelled Cheque</li>
  <li>Bank Statement</li>
</ul>
<h4 className="mt-4 mb-3 text-base font-semibold text-gray-700">
  Partnership / LLP
</h4>

<ul className="my-5 space-y-4 text-sm text-gray-500 leading-relaxed list-disc pl-5">
  <li>PAN</li>
  <li>Partnership Deed / LLP Incorporation Documents</li>
  <li>GST Certificate (if applicable)</li>
  <li>Bank Proof</li>
  <li>Authorized Signatory Documents</li>
</ul>
<h4 className="mt-4 mb-3 text-base font-semibold text-gray-700">
  Private Limited / Public Limited Company
</h4>

<ul className="my-5 space-y-4 text-sm text-gray-500 leading-relaxed list-disc pl-5">
  <li>Certificate of Incorporation</li>
  <li>PAN</li>
  <li>Memorandum &amp; Articles of Association</li>
  <li>GST Registration (if applicable)</li>
  <li>Board Resolution</li>
  <li>Director KYC</li>
  <li>UBO Declaration (where required)</li>
  <li>Cancelled Cheque</li>
  <li>Bank Verification</li>
  <li>Business Address Proof</li>
</ul>
Additional documents may be requested depending on the risk profile or partner requirements. 
              </p>
            </div>
          </div>
 {/* Overview Section */}
          <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50">
              <div className=" flex items-center gap-3 text-xl font-bold p-3 text-gray-600 p-3">
                <div className="rounded-full bg-blue-100 p-2">
                  <AlertCircle className="h-6 w-6 text-blue-600" />
                </div>
               Risk-Based Verification
              </div>
            </div>
            <div className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground text-gray-500">
                Customers may be classified into Low, Medium, or High Risk based on factors such as:
               <ul className="my-5 space-y-4 text-sm text-gray-500 leading-relaxed list-disc pl-5">
                <li>Business category.</li>
                 <li>Transaction profile.</li>
                  <li>Geographic exposure.</li>
                   <li>Regulatory requirements.</li> 
                   <li>Nature of products or services.</li>
               </ul>
               Higher-risk customers may undergo Enhanced Due Diligence (EDD).
              </p>
            </div>
          </div>
 {/* Overview Section */}
          <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50">
              <div className=" flex items-center gap-3 text-xl font-bold p-3 text-gray-600 p-3">
                <div className="rounded-full bg-blue-100 p-2">
                  <AlertCircle className="h-6 w-6 text-blue-600" />
                </div>
            Data Protection
              </div>
            </div>
            <div className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground text-gray-500">
                <p className="text-lg leading-relaxed text-gray-500">
               KYC information is stored using appropriate technical and organizational safeguards.
                <br />
                Information is used only for authorised business purposes.
                </p>
                <ul className="my-5 space-y-4 text-lg leading-relaxed text-gray-500 list-disc pl-5">
                <li>Identity verification.</li>
                <li>Fraud prevention.</li>
                <li>Security.</li>
                <li>Regulatory compliance.</li>
              <li>Contractual obligations.</li>
              </ul>
              Data is processed in accordance with our Privacy Policy and applicable data protection laws.

              </p>
            </div>
          </div>
 {/* Overview Section */}
          <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50">
              <div className=" flex items-center gap-3 text-xl font-bold p-3 text-gray-600 p-3">
                <div className="rounded-full bg-blue-100 p-2">
                  <AlertCircle className="h-6 w-6 text-blue-600" />
                </div>
                  Refusal or Suspension
              </div>
            </div>
            <div className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground text-gray-500">
               SevenUnique may refuse onboarding or suspend services where:
              <ul className="my-5 space-y-3 text-lg leading-relaxed text-gray-500 list-disc pl-5">
              <li>False information is provided.</li>
              <li>Documents appear fraudulent.</li>
               <li>Required KYC information is not submitted.</li>
               <li>Applicable legal or partner compliance requirements are not satisfied.</li>
               <li>Continued service presents legal, security, or fraud risks.</li>
                </ul>
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
