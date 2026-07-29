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
          <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50">
              <div className=" flex items-center gap-3 text-xl font-bold p-3 text-gray-600 p-3">
                <div className="rounded-full bg-blue-100 p-2">
                  <AlertCircle className="h-6 w-6 text-blue-600" />
                </div>
                Introduction
              </div>
            </div>
            <div className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground text-gray-500">
                This Enterprise Privacy Policy governs the collection, use, disclosure, storage,
                processing and protection of information handled by SevenUnique Tech Solutions
                Private Limited while providing software development, SaaS, API, cloud, AI, fintech
                integrations, enterprise applications and managed IT services. We implement
                organizational, administrative and technical safeguards to ensure confidentiality,
                integrity and availability of information. Policies are reviewed periodically, employees
                receive security awareness training, vendors are evaluated, and privacy-by-design
                principles are considered throughout the software development lifecycle. This section
                should be read together with applicable customer agreements, API documentation and
                security standards.
              </p>
            </div>
          </div>

          {/* Data Security Section */}
          <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-green-50 to-blue-50">

              <div className=" flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
                <div className="rounded-full bg-green-100 p-2">
                  <Lock className="h-6 w-6 text-green-600" />
                </div>
                Definitions
              </div>
            </div>
            <div className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground text-gray-500 mb-6">
                Defines Personal Data, Sensitive Data, Customer Data, API Data, Processing, Controller,
                Processor, User, Client and Service Provider. We implement organizational,
                administrative and technical safeguards to ensure confidentiality, integrity and
                availability of information. Policies are reviewed periodically, employees receive
                security awareness training, vendors are evaluated, and privacy-by-design principles
                are considered throughout the software development lifecycle. This section should be
                read together with applicable customer agreements, API documentation and security
                standards.

              </p>

              {/* Security Principles */}
              {/* <div className="grid gap-6 md:grid-cols-3">
                <div className="border-2 border-dashed border-gray-200 bg-gradient-to-br from-white to-gray-50 transition-all hover:border-green-300 hover:shadow-md">
                  <div className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="rounded-full bg-green-100 p-3">
                        <Eye className="h-6 w-6 text-green-600" />
                      </div>
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-gray-600">Confidentiality</h3>
                    <p className="text-sm text-muted-foreground text-gray-500">
                      Ensures that sensitive information is only accessible to authorized individuals or systems. It can
                      be maintained using encryption methods, access controls, and authentication mechanisms such as
                      usernames, passwords, biometrics, or two-factor authentication.
                    </p>
                  </div>
                </div>

                <div className="border-2 border-dashed border-gray-200 bg-gradient-to-br from-white to-gray-50 transition-all hover:border-green-300 hover:shadow-md">
                  <div className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="rounded-full bg-green-100 p-3">
                        <CheckCircle className="h-6 w-6 text-green-600" />
                      </div>
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-gray-600">Integrity</h3>
                    <p className="text-sm text-muted-foreground text-gray-500">
                      Involves protecting data from being altered or tampered with, either accidentally or maliciously.
                      To ensure data integrity, checksum algorithms, hash functions, and digital signatures are commonly
                      used. These tools help verify that data remains accurate and unmodified during transmission or
                      storage.
                    </p>
                  </div>
                </div>

                <div className="border-2 border-dashed border-gray-200 bg-gradient-to-br from-white to-gray-50 transition-all hover:border-green-300 hover:shadow-md">
                  <div className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="rounded-full bg-green-100 p-3">
                        <Database className="h-6 w-6 text-green-600" />
                      </div>
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-gray-600">Availability</h3>
                    <p className="text-sm text-muted-foreground text-gray-500">
                      Ensures that data is accessible to authorized users when needed, despite any potential technical
                      disruptions or cyberattacks. Measures like regular backups, redundant systems, disaster recovery
                      plans, and ensuring network security (firewalls, intrusion detection systems) help protect data
                      from being lost or made inaccessible.
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        

          {/* Information Sharing Section */}
          <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50">
              <div className=" flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
                <div className="rounded-full bg-purple-100 p-2">
                  <Share2 className="h-6 w-6 text-purple-600" />
                </div>
                Scope
              </div>
            </div>
            <div className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground  text-gray-500">
                Applies to websites, portals, dashboards, APIs, SDKs, mobile apps, cloud platforms,
                customer support, integrations and partner ecosystems. We implement organizational,
                administrative and technical safeguards to ensure confidentiality, integrity and
                availability of information. Policies are reviewed periodically, employees receive
                security awareness training, vendors are evaluated, and privacy-by-design principles
                are considered throughout the software development lifecycle. This section should be
                read together with applicable customer agreements, API documentation and security
                standards.

              </p>
            </div>
          </div>

          {/* Cookie Policy Section */}
          <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50">
              <div className=" flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
                <div className="rounded-full bg-orange-100 p-2">
                  <Cookie className="h-6 w-6 text-orange-600" />
                </div>
                Legal Compliance
              </div>
            </div>
            <div className="p-8">
              <p className="text-lg leading-relaxed  text-gray-500 ">
                Our privacy program aligns with the Digital Personal Data Protection Act 2023 (India),
                GDPR, Information Technology Act 2000, ISO 27001 principles and applicable
                international privacy obligations. We implement organizational, administrative and
                technical safeguards to ensure confidentiality, integrity and availability of information.
                Policies are reviewed periodically, employees receive security awareness training,
                vendors are evaluated, and privacy-by-design principles are considered throughout the
                software development lifecycle. This section should be read together with applicable
                customer agreements, API documentation and security standards.

              </p>
            </div>
          </div>

            {/* Info Section */}
          <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50">
              <div className=" flex items-center gap-3 text-xl font-bold p-3 text-gray-600 p-3">
                <div className="rounded-full bg-blue-100 p-2">
                  <AlertCircle className="h-6 w-6 text-blue-600" />
                </div>
                Information Collected
              </div>
            </div>
            <div className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground text-gray-500">
               Identity, business information, billing, GST, contact details, authentication data, IP
                address, browser details, cookies, audit logs, API credentials, usage analytics, crash
                reports and communications. We implement organizational, administrative and
                technical safeguards to ensure confidentiality, integrity and availability of information.
                Policies are reviewed periodically, employees receive security awareness training,
                vendors are evaluated, and privacy-by-design principles are considered throughout the
                software development lifecycle. This section should be read together with applicable
                customer agreements, API documentation and security standards.
              </p>
            </div>
          </div>

           {/* Information Sharing Section */}
          <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50">
              <div className=" flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
                <div className="rounded-full bg-purple-100 p-2">
                  <Share2 className="h-6 w-6 text-purple-600" />
                </div>
                 AI Services
              </div>
            </div>
            <div className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground  text-gray-500">
                AI features process submitted content only for requested functionality, security
                monitoring and service quality. Customers remain responsible for ensuring lawful
                submission of data. We implement organizational, administrative and technical
                safeguards to ensure confidentiality, integrity and availability of information. Policies
                are reviewed periodically, employees receive security awareness training, vendors are
                evaluated, and privacy-by-design principles are considered throughout the software
                development lifecycle. This section should be read together with applicable customer
                agreements, API documentation and security standards.
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
                 Purpose of Processing
              </div>
            </div>
            <div className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground text-gray-500">
                Service delivery, onboarding, authentication, fraud prevention, billing, compliance,
                analytics, customer support, system improvement and legal obligations. We implement
                organizational, administrative and technical safeguards to ensure confidentiality,
                integrity and availability of information. Policies are reviewed periodically, employees
                receive security awareness training, vendors are evaluated, and privacy-by-design
                principles are considered throughout the software development lifecycle. This section
                should be read together with applicable customer agreements, API documentation and
                security standards.
              </p>
            </div>
          </div>


            {/* Cookie Policy Section */}
          <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50">
              <div className=" flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
                <div className="rounded-full bg-orange-100 p-2">
                  <Cookie className="h-6 w-6 text-orange-600" />
                </div>
                 Cookies
              </div>
            </div>
            <div className="p-8">
              <p className="text-lg leading-relaxed  text-gray-500 ">
              Necessary cookies operate the platform. Analytics, preference and marketing cookies
              require consent where applicable. Users may modify preferences anytime. We
              implement organizational, administrative and technical safeguards to ensure
              confidentiality, integrity and availability of information. Policies are reviewed
              periodically, employees receive security awareness training, vendors are evaluated,
              and privacy-by-design principles are considered throughout the software development
              lifecycle. This section should be read together with applicable customer agreements,
              API documentation and security standards.
              </p>
            </div>
          </div>

          {/* Data Security Section */}
          <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-green-50 to-blue-50">

              <div className=" flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
                <div className="rounded-full bg-green-100 p-2">
                  <Lock className="h-6 w-6 text-green-600" />
                </div>
                Data Sharing
              </div>
            </div>
            <div className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground text-gray-500 mb-6">
                We never sell personal information. Data may be shared only with cloud providers,
                payment processors, communication providers, regulators or legal authorities where
                required. We implement organizational, administrative and technical safeguards to
                ensure confidentiality, integrity and availability of information. Policies are reviewed
                periodically, employees receive security awareness training, vendors are evaluated,
                and privacy-by-design principles are considered throughout the software development
                lifecycle. This section should be read together with applicable customer agreements,
                API documentation and security standards.

              </p>
              </div>
              </div>

            
           {/* Information Sharing Section */}
          <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50">
              <div className=" flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
                <div className="rounded-full bg-purple-100 p-2">
                  <Share2 className="h-6 w-6 text-purple-600" />
                </div>
                  International Transfers
              </div>
            </div>
            <div className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground  text-gray-500">
                Cross-border transfers are protected using appropriate contractual and technical
                safeguards. We implement organizational, administrative and technical safeguards to
                 ensure confidentiality, integrity and availability of information. Policies are reviewed
                periodically, employees receive security awareness training, vendors are evaluated,
                and privacy-by-design principles are considered throughout the software development
                lifecycle. This section should be read together with applicable customer agreements,
                API documentation and security standards
              </p>
            </div>
          </div>
                    {/* Data Security Section */}
          <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-green-50 to-blue-50">

              <div className=" flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
                <div className="rounded-full bg-green-100 p-2">
                  <Lock className="h-6 w-6 text-green-600" />
                </div>
                Security
              </div>
            </div>
            <div className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground text-gray-500 mb-6">
               Encryption in transit and at rest, RBAC, MFA, firewalls, secure SDLC, logging, SIEM
              monitoring, vulnerability assessments, penetration testing, backups and disaster
              recovery. We implement organizational, administrative and technical safeguards to
                ensure confidentiality, integrity and availability of information. Policies are reviewed
                periodically, employees receive security awareness training, vendors are evaluated,
                and privacy-by-design principles are considered throughout the software development
                lifecycle. This section should be read together with applicable customer agreements,
                API documentation and security standards.

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
                 Data Retention
              </div>
            </div>
            <div className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground text-gray-500">
                Information is retained only for contractual, operational, taxation, audit, dispute
                resolution and legal requirements before secure deletion or anonymization. We
                implement organizational, administrative and technical safeguards to ensure
                confidentiality, integrity and availability of information. Policies are reviewed
                periodically, employees receive security awareness training, vendors are evaluated,
                and privacy-by-design principles are considered throughout the software development
                lifecycle. This section should be read together with applicable customer agreements,
                API documentation and security standards.
              </p>
            </div>
          </div>
           {/* Information Sharing Section */}
          <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50">
              <div className=" flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
                <div className="rounded-full bg-purple-100 p-2">
                  <Share2 className="h-6 w-6 text-purple-600" />
                </div>
                 User Rights
              </div>
            </div>
            <div className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground  text-gray-500">
                Users may request access, correction, deletion, portability, restriction, objection and
                withdrawal of consent where applicable. We implement organizational, administrative
                and technical safeguards to ensure confidentiality, integrity and availability of
                information. Policies are reviewed periodically, employees receive security awareness
                training, vendors are evaluated, and privacy-by-design principles are considered
                throughout the software development lifecycle. This section should be read together
                with applicable customer agreements, API documentation and security standards.
              </p>
            </div>
          </div>

           {/* Data Security Section */}
          <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-green-50 to-blue-50">

              <div className=" flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
                <div className="rounded-full bg-green-100 p-2">
                  <Lock className="h-6 w-6 text-green-600" />
                </div>
                Incident Response
              </div>
            </div>
            <div className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground text-gray-500 mb-6">
               Security incidents are investigated promptly. Notifications are provided where legally
                required. We implement organizational, administrative and technical safeguards to
                  ensure confidentiality, integrity and availability of information. Policies are reviewed
                periodically, employees receive security awareness training, vendors are evaluated,
                and privacy-by-design principles are considered throughout the software development
              lifecycle. This section should be read together with applicable customer agreements,
              API documentation and security standards.
              </p>
              </div>
              </div>

               {/* Cookie Policy Section */}
          <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50">
              <div className=" flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
                <div className="rounded-full bg-orange-100 p-2">
                  <Cookie className="h-6 w-6 text-orange-600" />
                </div>
                 Third-Party Integrations
              </div>
            </div>
            <div className="p-8">
              <p className="text-lg leading-relaxed  text-gray-500 ">
              Integrated providers maintain independent privacy practices. Clients should review
              those policies before use. We implement organizational, administrative and technical
              safeguards to ensure confidentiality, integrity and availability of information. Policies
              are reviewed periodically, employees receive security awareness training, vendors are
              evaluated, and privacy-by-design principles are considered throughout the software
              development lifecycle. This section should be read together with applicable customer
              agreements, API documentation and security standards.
              </p>
            </div>
          </div>
             {/* Data Security Section */}
          <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-green-50 to-blue-50">

              <div className=" flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
                <div className="rounded-full bg-green-100 p-2">
                  <Lock className="h-6 w-6 text-green-600" />
                </div>
                Children's Privacy
              </div>
            </div>
            <div className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground text-gray-500 mb-6">
               Services are intended for organizations and legally eligible users. We implement
              organizational, administrative and technical safeguards to ensure confidentiality,
              integrity and availability of information. Policies are reviewed periodically, employees
              receive security awareness training, vendors are evaluated, and privacy-by-design
              principles are considered throughout the software development lifecycle. This section
              should be read together with applicable customer agreements, API documentation and
              security standards.
              </p>
              </div>
              </div>
               {/* Information Sharing Section */}
          <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50">
              <div className=" flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
                <div className="rounded-full bg-purple-100 p-2">
                  <Share2 className="h-6 w-6 text-purple-600" />
                </div>
                 Governing Law
              </div>
            </div>
            <div className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground  text-gray-500">
                Governed by applicable laws of India unless otherwise agreed by contract. We
                implement organizational, administrative and technical safeguards to ensure
                confidentiality, integrity and availability of information. Policies are reviewed
                periodically, employees receive security awareness training, vendors are evaluated,
                and privacy-by-design principles are considered throughout the software development
                lifecycle. This section should be read together with applicable customer agreements,
                API documentation and security standards.

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
                 Changes
              </div>
            </div>
            <div className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground text-gray-500">
                This policy may be updated periodically. Continued use constitutes acceptance of
                revisions. We implement organizational, administrative and technical safeguards to
                ensure confidentiality, integrity and availability of information. Policies are reviewed
                periodically, employees receive security awareness training, vendors are evaluated,
                and privacy-by-design principles are considered throughout the software development
                lifecycle. This section should be read together with applicable customer agreements,
                API documentation and security standards.
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
