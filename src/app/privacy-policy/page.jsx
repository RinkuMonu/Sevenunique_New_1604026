import { MailIcon } from "lucide-react";

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
      <section className="bg-gradient-to-r from-[#db7356] to-[#da846d] py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="rounded-lg bg-white/10 px-6 py-4 text-center">
            <h2 className="text-2xl font-bold text-white">
              SevenUnique Tech Solutions Private Limited
            </h2>
            <p className="mt-2 text-sm text-white/90 flex justify-center items-center gap-5">
              <MailIcon />
              <span className="text-white/80">info@7unique.in</span>
            </p>
          </div>
        </div>
      </section>

      {/* Salient Features */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-blue-500"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 16v-4m0-4h.01"></path>
            </svg>
            <h3 className="text-xl font-bold text-gray-900">
              Salient features that we offer seclucion of your data
            </h3>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <p className="text-gray-700 leading-relaxed mb-4">
              Our privacy policy prioritizes the protection of your personal
              data, ensuring that any information we collect is securely stored
              and used exclusively for the purpose of delivering and enhancing
              our services. We are committed to respecting your privacy and will
              never share your data with third parties without your explicit
              consent. Additionally, we adhere to all applicable data protection
              laws and regulations, including GDPR and other relevant
              frameworks. Our policy ensures transparency, providing you with
              clear information on how your data is collected, processed, and
              stored, so you can make informed decisions about your privacy and
              security when interacting with our services.
            </p>
          </div>
        </div>
      </section>

      {/* Data Security Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-green-500"
            >
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
            </svg>
            <h3 className="text-xl font-bold text-gray-900">Data Security</h3>
          </div>
          <p className="text-gray-700 leading-relaxed mb-8">
            We take reasonable precautions to protect your personal data from
            unauthorized access, disclosure, alteration, or destruction. We use
            encryption, secure servers, and other measures to safeguard your
            information. These are measures and practices that protect digital
            data from unauthorized access, corruption, theft, or loss. It is a
            critical aspect of safeguarding sensitive information and ensuring
            the privacy of individuals and organizations. The goal of data
            security is to maintain the confidentiality, integrity, and
            availability of data.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Confidentiality Card */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-purple-500"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                </svg>
                <h4 className="font-bold text-gray-900">Confidentiality</h4>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Ensures that sensitive information is only accessible to
                authorized individuals or systems. It can be maintained using
                encryption methods, access controls, and authentication
                mechanisms such as usernames, passwords, biometrics, or
                two-factor authentication.
              </p>
            </div>

            {/* Integrity Card */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-teal-500"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <h4 className="font-bold text-gray-900">Integrity</h4>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Involves protecting data from being altered or tampered with,
                either accidentally or maliciously. To ensure data integrity,
                checksum algorithms, hash functions, and digital signatures are
                commonly used. These tools help verify that data remains
                accurate and unmodified during transmission or storage.
              </p>
            </div>

            {/* Availability Card */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-cyan-500"
                >
                  <circle cx="12" cy="12" r="1"></circle>
                  <path d="M12 1v6m6.364 1.636l-4.243 4.243M19 12h-6m-1.636 6.364l-4.243-4.243M12 19v-6M4.636 17.364l4.243-4.243M5 12h6M7.636 4.636l4.243 4.243"></path>
                </svg>
                <h4 className="font-bold text-gray-900">Availability</h4>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Ensures that data is accessible to authorized users when needed,
                despite any potential technical disruptions or cyberattacks.
                Measures like regular backups, redundant systems, disaster
                recovery plans, and ensuring network security (firewalls,
                intrusion detection systems) help protect data from being lost
                or made inaccessible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sharing Information */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-pink-500"
            >
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
              <polyline points="16 6 12 2 8 6"></polyline>
              <line x1="12" y1="2" x2="12" y2="15"></line>
            </svg>
            <h3 className="text-xl font-bold text-gray-900">
              Sharing Your information
            </h3>
          </div>
          <div className="space-y-6 text-gray-700">
            <p className="leading-relaxed">
              At our company, we prioritize the protection of your personal
              information and respect your privacy. We do not engage in the
              sale, trade, or rental of your personal data to third parties for
              any marketing or commercial purposes.
            </p>
            <p className="leading-relaxed">
              Your information is solely used to enhance your experience with
              our services and to ensure we can provide the best possible
              service to you.
            </p>
            <p className="leading-relaxed">
              However, there are instances where we may need to share your
              information with trusted partners or service providers who assist
              us in operating our website or conducting business operations.
              These partners may include web hosting companies, payment
              processors, customer support services, or analytics providers. In
              these cases, we ensure that all third-party partners sign strict
              confidentiality agreements.
            </p>
            <p className="leading-relaxed">
              These agreements are designed to protect your data and ensure that
              it is used only for the purposes we have outlined, such as
              processing transactions or improving our services.
            </p>
            <p className="leading-relaxed">
              The third-party service providers we work with are required to
              follow industry standards for data protection and must adhere to
              similar privacy and security measures as we do. They are not
              permitted to use your information for any purpose other than to
              provide the specific services we have contracted them for.
            </p>
            <p className="leading-relaxed">
              We are transparent about these practices and make it clear to you
              when your information is being shared with such third parties.
              Additionally, we ensure that your personal data is only shared to
              the extent necessary for these partners to fulfill their role in
              helping us deliver the services you need. We take every precaution
              to prevent misuse or unauthorized access to your information,
              ensuring your data remains secure and confidential.
            </p>
            <p className="leading-relaxed">
              We will never disclose, sell, or lease your personal information
              to any entity without your explicit consent, except when required
              by law or as part of a legal process.
            </p>
          </div>
        </div>
      </section>

      {/* Cookies Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-orange-500"
            >
              <circle cx="12" cy="12" r="1"></circle>
              <path d="M12 1v6m6.364 1.636l-4.243 4.243M19 12h-6m-1.636 6.364l-4.243-4.243M12 19v-6M4.636 17.364l4.243-4.243M5 12h6M7.636 4.636l4.243 4.243"></path>
            </svg>
            <h3 className="text-xl font-bold text-gray-900">
              Concern for Cookies
            </h3>
          </div>
          <div className="space-y-6 text-gray-700">
            <p className="leading-relaxed">
              While cookies offer significant benefits, they also raise concerns
              about privacy. As a result, you have control over them. Most
              modern browsers allow you to manage cookies by adjusting your
              settings. You can choose to block or delete cookies, although
              doing so might affect your experience on certain websites, as some
              features may no longer work as intended.
            </p>
            <p className="leading-relaxed">
              Our team implements a robust cookie policy that complies with
              privacy regulations like GDPR and CCPA.
            </p>
            <p className="leading-relaxed">
              This includes informing users about the types of cookies being
              used (such as necessary, performance, and advertising cookies) and
              providing them with clear options to consent or manage
              preferences. We deploy a cookie consent banner or pop-up when
              users first visit the website, allowing them to accept, reject, or
              customize cookie settings.
            </p>
            <p className="leading-relaxed">
              Additionally, it is important to ensure that only necessary
              cookies are used by default, with non-essential cookies activated
              only after user consent. We also maintain transparency in our
              privacy policy, regularly audit cookie practices for security and
              compliance, and offer users an easy way to opt-out or delete
              cookies at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="bg-gradient-to-r from-[#b8654d] to-[#d9385f] py-12 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h3 className="text-2xl font-bold text-white mb-3">
            Privacy Questions?
          </h3>
          <p className="text-white/90 mb-6">
            If you have questions about our privacy policy or need assistance
            with data protection matters, don&apos;t let us so
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-gray-900 hover:bg-gray-50 transition">
              <MailIcon />
              info@7unique.in
            </button>
            <button className="inline-flex items-center justify-center gap-2 rounded-full bg-white/20 px-6 py-3 font-semibold text-white hover:bg-white/30 transition border border-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              +91-8824203847
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
