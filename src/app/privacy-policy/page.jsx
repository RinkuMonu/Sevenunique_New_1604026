import { Mail, Shield, Phone, AlertCircle, Lock, Eye, CheckCircle, Database, Share2, Cookie } from "lucide-react";


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
                Salient features that we offer seclusion of your data
              </div>
            </div>
            <div className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground text-gray-500">
                Our privacy policy prioritizes the protection of your personal data, ensuring that any information we
                collect is securely stored and used exclusively for the purpose of delivering and enhancing our
                services. We are committed to respecting your privacy and will never share your data with third parties
                without your explicit consent. Additionally, we adhere to all applicable data protection laws and
                regulations, including GDPR and other relevant frameworks. Our policy ensures transparency, providing
                you with clear information on how your data is collected, processed, and stored, so you can make
                informed decisions about your privacy and security when interacting with our services.
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
                Data Security
              </div>
            </div>
            <div className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground text-gray-500 mb-6">
                We take reasonable precautions to protect your personal data from unauthorized access, disclosure,
                alteration, or destruction. We use encryption, secure servers, and other measures to safeguard your
                information. These are measures and practices that protect digital data from unauthorized access,
                corruption, theft, or loss. It is a critical aspect of safeguarding sensitive information and ensuring
                the privacy of individuals and organizations. The goal of data security is to maintain the
                confidentiality, integrity, and availability of data.
              </p>

              {/* Security Principles */}
              <div className="grid gap-6 md:grid-cols-3">
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
              </div>
            </div>
          </div>

          {/* Information Sharing Section */}
          <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50">
              <div className=" flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
                <div className="rounded-full bg-purple-100 p-2">
                  <Share2 className="h-6 w-6 text-purple-600" />
                </div>
                Sharing Your Information
              </div>
            </div>
            <div className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground  text-gray-500">
                At our company, we prioritize the protection of your personal information and respect your privacy. We
                do not engage in the sale, trade, or rental of your personal data to third parties for any marketing or
                commercial purposes.
                <br />
                <br />
                Your information is solely used to enhance your experience with our services and to ensure we can
                provide the best possible service to you.
                <br />
                <br />
                However, there are instances where we may need to share your information with trusted partners or
                service providers who assist us in operating our website or conducting business operations. These
                partners may include web hosting companies, payment processors, customer support services, or analytics
                providers. In these cases, we ensure that all third-party partners sign strict confidentiality
                agreements.
                <br />
                <br />
                These agreements are designed to protect your data and ensure that it is used only for the purposes we
                have outlined, such as processing transactions or improving our services.
                <br />
                <br />
                The third-party service providers we work with are required to follow industry standards for data
                protection and must adhere to similar privacy and security measures as we do. They are not permitted to
                use your information for any purpose other than to provide the specific services we have contracted them
                for.
                <br />
                <br />
                We are transparent about these practices and make it clear to you when your information is being shared
                with such third parties. Additionally, we ensure that your personal data is only shared to the extent
                necessary for these partners to fulfill their role in helping us deliver the services you need. We take
                every precaution to prevent misuse or unauthorized access to your information, ensuring your data
                remains secure and confidential.
                <br />
                <br />
                We will never disclose, sell, or lease your personal information to any entity without your explicit
                consent, except when required by law or as part of a legal process.
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
                Concern for Cookies
              </div>
            </div>
            <div className="p-8">
              <p className="text-lg leading-relaxed  text-gray-500 ">
                While cookies offer significant benefits, they also raise concerns about privacy. As a result, you have
                control over them. Most modern browsers allow you to manage cookies by adjusting your settings. You can
                choose to block or delete cookies, although doing so might affect your experience on certain websites,
                as some features may no longer work as intended.
                <br />
                <br />
                Our team implements a robust cookie policy that complies with privacy regulations like GDPR and CCPA.
                <br />
                <br />
                This includes informing users about the types of cookies being used (such as necessary, performance, and
                advertising cookies) and providing them with clear options to consent or manage preferences. We deploy a
                cookie consent banner or pop-up when users first visit the website, allowing them to accept, reject, or
                customize cookie settings.
                <br />
                <br />
                Additionally, it is important to ensure that only necessary cookies are used by default, with
                non-essential cookies activated only after user consent. We also maintain transparency in our privacy
                policy, regularly audit cookie practices for security and compliance, and offer users an easy way to
                opt-out or delete cookies at any time.
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
