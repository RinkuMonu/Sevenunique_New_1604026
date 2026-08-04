import { Mail, Shield, Phone, AlertCircle, Lock, Eye, CheckCircle, Database, Share2, Cookie } from "lucide-react";



export const metadata = {
  title: "Privacy Policy & Data Protection Guide | SevenUnique",
  description: "Read the SevenUnique Privacy Policy to understand how information is collected, used, protected, and managed when you access our website and services.",
};


export default function PrivacyPolicy() {
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
              Privacy Policy
            </h1>
            <p className="mt-6 text-lg text-gray-800">
              Learn how we collect, store, and protect your personal data as you
              use our software, apps, and digital platforms responsibly and
              securely.
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
                Data Protection
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
                Transparency
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
                GDPR Compliant
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
              <h2 className="text-2xl font-bold">SevenUnique Tech Solutions Private Limited</h2>
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
          {/* Introduction Section */}
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
    <p className="text-lg leading-relaxed text-muted-foreground text-gray-500">
      Welcome to Sevenunique Tech Solutions Private Limited ("Sevenunique," "we,"
      "our," or "us"). We are committed to protecting your privacy and
      safeguarding your personal information with the highest standards of
      security. This Privacy Policy explains how we collect, use, disclose, and
      protect your information when you use our website, enterprise software,
      SaaS platforms, APIs, AI solutions, cloud services, mobile applications,
      and other digital services.
    </p>
  </div>
</div>
{/* Information Collected Section */}
<div className="border-0 shadow-lg">
  <div className="bg-gradient-to-r from-blue-50 to-purple-50">
    <div className="flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
      <div className="rounded-full bg-blue-100 p-2">
        <AlertCircle className="h-6 w-6 text-blue-600" />
      </div>
      Information We Collect
    </div>
  </div>

  <div className="p-8">
    <div className="text-lg leading-relaxed text-gray-500">
      <p className="mb-4">
        To provide and improve our services, we may collect the following types
        of information:
      </p>

      <ul className="list-disc pl-6 space-y-3">
        <li>
          <strong>Personal Information</strong> – Name, email address, phone
          number, and other contact details.
        </li>

        <li>
          <strong>Business Information</strong> – Company name, job title,
          organization details, and business-related information.
        </li>

        <li>
          <strong>Technical Information</strong> – IP address, browser type,
          operating system, device information, cookies, and API usage data.
        </li>

        <li>
          <strong>Service Usage Information</strong> – Pages visited, features
          used, session duration, and interaction with our services.
        </li>
      </ul>
    </div>
  </div>
</div>


        
{/* Purpose of Processing Section */}
<div className="border-0 shadow-lg">
  <div className="bg-gradient-to-r from-blue-50 to-purple-50">
    <div className="flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
      <div className="rounded-full bg-blue-100 p-2">
        <AlertCircle className="h-6 w-6 text-blue-600" />
      </div>
      How We Use Your Information
    </div>
  </div>

  <div className="p-8">
    <div className="text-lg leading-relaxed text-gray-500">

      <p className="mb-4">
        We use your information to:
      </p>

      <ul className="list-disc pl-6 space-y-3 mb-6">
        <li>Provide, operate, and maintain our services.</li>
        <li>Improve website performance, products, and customer experience.</li>
        <li>Communicate with you regarding inquiries, updates, and support.</li>
        <li>Process service requests and business transactions.</li>
        <li>Ensure platform security and prevent fraud.</li>
        <li>Comply with legal and regulatory obligations.</li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-700 mb-4">
        Legal Basis for Processing
      </h3>

      <p className="mb-4">
        Where required by applicable law, we process your personal information
        based on one or more of the following legal grounds:
      </p>

      <ul className="list-disc pl-6 space-y-3">
        <li>Your consent.</li>
        <li>Performance of a contract.</li>
        <li>Compliance with legal obligations.</li>
        <li>Our legitimate business interests.</li>
        <li>
          Any other lawful basis permitted under applicable data protection
          laws.
        </li>
      </ul>

    </div>
  </div>
</div>

         {/* Sharing Your Information Section */}
<div className="border-0 shadow-lg">
  <div className="bg-gradient-to-r from-green-50 to-blue-50">
    <div className="flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
      <div className="rounded-full bg-green-100 p-2">
        <Lock className="h-6 w-6 text-green-600" />
      </div>
      Sharing Your Information
    </div>
  </div>

  <div className="p-8">
    <div className="text-lg leading-relaxed text-gray-500">

      <p className="mb-4">
        We do not sell or rent your personal information.
      </p>

      <p className="mb-4">
        We may share your information only in the following circumstances:
      </p>

      <ul className="list-disc pl-6 space-y-3">
        <li>
          With trusted service providers who assist in operating our business.
        </li>

        <li>
          When required by applicable law or legal process.
        </li>

        <li>
          During a merger, acquisition, restructuring, or business transfer,
          where appropriate privacy protections continue to apply.
        </li>
      </ul>

    </div>
  </div>
</div>
           {/* Data Security Section */}
<div className="border-0 shadow-lg">
  <div className="bg-gradient-to-r from-green-50 to-blue-50">
    <div className="flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
      <div className="rounded-full bg-green-100 p-2">
        <Lock className="h-6 w-6 text-green-600" />
      </div>
      Data Security
    </div>
  </div>

  <div className="p-8">
    <div className="text-lg leading-relaxed text-gray-500">

      <p className="mb-4">
        We implement appropriate technical, administrative, and organizational
        security measures to protect your personal information against
        unauthorized access, misuse, alteration, disclosure, or destruction.
      </p>

      <p className="mb-4">
        These measures include:
      </p>

      <ul className="list-disc pl-6 space-y-3 mb-6">
        <li>Secure infrastructure.</li>
        <li>Encryption where appropriate.</li>
        <li>Access controls.</li>
        <li>Continuous monitoring.</li>
        <li>Regular security reviews.</li>
      </ul>

      <p>
        While we strive to protect your data, no internet-based service can
        guarantee absolute security.
      </p>

    </div>
  </div>
</div>

          {/* Data Retention Section */}
<div className="border-0 shadow-lg">
  <div className="bg-gradient-to-r from-blue-50 to-purple-50">
    <div className="flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
      <div className="rounded-full bg-blue-100 p-2">
        <AlertCircle className="h-6 w-6 text-blue-600" />
      </div>
      Data Retention
    </div>
  </div>

  <div className="p-8">
    <p className="text-lg leading-relaxed text-gray-500">
      We retain personal information only for as long as necessary to provide
      our services, comply with legal obligations, resolve disputes, enforce
      agreements, and meet legitimate business requirements. Information is
      securely deleted or anonymized when it is no longer required.
    </p>
  </div>
</div>
            
         {/* User Rights Section */}
<div className="border-0 shadow-lg">
  <div className="bg-gradient-to-r from-purple-50 to-pink-50">
    <div className="flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
      <div className="rounded-full bg-purple-100 p-2">
        <Share2 className="h-6 w-6 text-purple-600" />
      </div>
      Your Rights
    </div>
  </div>

  <div className="p-8">
    <div className="text-lg leading-relaxed text-gray-500">
      <p className="mb-4">
        Depending on applicable laws, you may have the right to:
      </p>

      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Access your personal information.</li>
        <li>Request correction of inaccurate information.</li>
        <li>Request deletion of your personal data.</li>
        <li>Withdraw previously provided consent.</li>
        <li>Request data portability where applicable.</li>
        <li>Opt out of marketing communications at any time.</li>
      </ul>

      <p>
        To exercise these rights, please contact us using the details provided below.
      </p>
    </div>
  </div>
</div>

{/* Cookies and Tracking Technologies Section */}
<div className="border-0 shadow-lg">
  <div className="bg-gradient-to-r from-orange-50 to-yellow-50">
    <div className="flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
      <div className="rounded-full bg-orange-100 p-2">
        <Cookie className="h-6 w-6 text-orange-600" />
      </div>
      Cookies and Tracking Technologies
    </div>
  </div>

  <div className="p-8">
    <p className="text-lg leading-relaxed text-gray-500">
      Our website may use cookies and similar technologies to improve user
      experience, analyze website traffic, remember user preferences, maintain
      secure sessions, and enhance security. You may manage or disable cookies
      through your browser settings, although some features may not function
      properly.
    </p>
  </div>
</div>

          {/* International Data Transfers Section */}
<div className="border-0 shadow-lg">
  <div className="bg-gradient-to-r from-purple-50 to-pink-50">
    <div className="flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
      <div className="rounded-full bg-purple-100 p-2">
        <Share2 className="h-6 w-6 text-purple-600" />
      </div>
      International Data Transfers
    </div>
  </div>

  <div className="p-8">
    <p className="text-lg leading-relaxed text-gray-500">
      Where our services involve cloud infrastructure, third-party providers, or
      global service partners, your personal information may be processed or
      stored outside your country of residence.
    </p>

    <p className="text-lg leading-relaxed text-gray-500 mt-4">
      Whenever such transfers occur, we implement appropriate contractual,
      technical, and organizational safeguards to protect your personal
      information in accordance with applicable privacy and data protection
      laws.
    </p>
  </div>
</div>


        {/* Third-Party Websites Section */}
<div className="border-0 shadow-lg">
  <div className="bg-gradient-to-r from-orange-50 to-yellow-50">
    <div className="flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
      <div className="rounded-full bg-orange-100 p-2">
        <Cookie className="h-6 w-6 text-orange-600" />
      </div>
      Third-Party Websites
    </div>
  </div>

  <div className="p-8">
    <p className="text-lg leading-relaxed text-gray-500">
      Our website and services may contain links to third-party websites or
      services. We are not responsible for the privacy practices, security, or
      content of those third-party websites. We encourage users to review their
      respective privacy policies before providing any personal information.
    </p>
  </div>
</div>


  {/* Children's Privacy Section */}
<div className="border-0 shadow-lg">
  <div className="bg-gradient-to-r from-green-50 to-blue-50">
    <div className="flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
      <div className="rounded-full bg-green-100 p-2">
        <Lock className="h-6 w-6 text-green-600" />
      </div>
      Children's Privacy
    </div>
  </div>

  <div className="p-8">
    <p className="text-lg leading-relaxed text-gray-500">
      Our services are intended for individuals who are at least 18 years of
      age. We do not knowingly collect personal information from children under
      the age of 18. If we become aware that such information has been
      collected, we will take reasonable steps to delete it promptly.
    </p>
  </div>
</div>

{/* Data Breach Response Section */}
<div className="border-0 shadow-lg">
  <div className="bg-gradient-to-r from-green-50 to-blue-50">
    <div className="flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
      <div className="rounded-full bg-green-100 p-2">
        <Lock className="h-6 w-6 text-green-600" />
      </div>
      Data Breach Response
    </div>
  </div>

  <div className="p-8">
    <p className="text-lg leading-relaxed text-gray-500">
      If we become aware of a security incident affecting personal information,
      we will promptly investigate the incident, take appropriate corrective
      measures, and, where required by applicable law, notify affected
      individuals and the relevant regulatory authorities within the legally
      prescribed timeframes.
    </p>
  </div>
</div>

{/* Changes to This Privacy Policy Section */}
<div className="border-0 shadow-lg">
  <div className="bg-gradient-to-r from-blue-50 to-purple-50">
    <div className="flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
      <div className="rounded-full bg-blue-100 p-2">
        <AlertCircle className="h-6 w-6 text-blue-600" />
      </div>
      Changes to This Privacy Policy
    </div>
  </div>

  <div className="p-8">
    <p className="text-lg leading-relaxed text-gray-500">
      We may update this Privacy Policy from time to time to reflect changes in
      our business practices, legal requirements, technologies, or services.
      The updated version will be published on this page with the revised Last
      Updated date. Continued use of our services after changes are posted
      constitutes acceptance of the updated Privacy Policy.
    </p>
  </div>
</div>

{/* Governing Law Section */}
<div className="border-0 shadow-lg">
  <div className="bg-gradient-to-r from-purple-50 to-pink-50">
    <div className="flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
      <div className="rounded-full bg-purple-100 p-2">
        <Share2 className="h-6 w-6 text-purple-600" />
      </div>
      Governing Law
    </div>
  </div>

  <div className="p-8">
    <p className="text-lg leading-relaxed text-gray-500">
      This Privacy Policy shall be governed by and interpreted in accordance
      with the laws of India.
    </p>

    <p className="text-lg leading-relaxed text-gray-500 mt-4">
      Any disputes arising out of or relating to this Privacy Policy shall be
      subject to the exclusive jurisdiction of the competent courts located in
      Jaipur, Rajasthan, India.
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
                If you have questions about our privacy policy or need assistance with data protection matters, reach
                out to us:
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
