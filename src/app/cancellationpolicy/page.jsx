import { Mail, Shield, Phone, RefreshCcw, AlertCircle, Lock, Eye, CheckCircle, Database, Share2, Cookie } from "lucide-react";



// export const metadata = {
//   title: "Service Cancellation Policy & Process | SevenUnique",
//   description: "Review the SevenUnique Cancellation Policy for information about cancellation requests, service conditions, eligibility, and applicable for scalable growth.",
// };



export default function CancellationPolicy() {
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
              Cancellation & Refund Policy
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

      

          {/* Data Security Section */}
         {/* Cancellation & Refund Policy Section */}
<div className="border-0 shadow-lg">
  <div className="bg-gradient-to-r from-red-500 to-pink-400">
    <div className="flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
      <div className="rounded-full bg-red-100 p-2">
        <RefreshCcw className="h-6 w-6 text-red-600" />
      </div>
      Cancellation & Refund Policy
    </div>
  </div>

  <div className="p-8">
    <p className="text-lg leading-relaxed text-gray-500 mb-8">
      Our cancellation and refund policy outlines the terms and conditions under
      which a customer can cancel a service or order and potentially receive a
      refund. We aim to maintain complete transparency while ensuring fair
      service practices for all customers.
    </p>

    {/* Policy Cards */}
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

      {/* Cancellation Process */}
      <div className="border-2 border-dashed border-purple-600 bg-gradient-to-br from-white to-gray-50 transition-all hover:border-red-300 hover:shadow-md rounded-2xl">
        <div className="p-6">
          <h3 className="mb-3 text-xl font-semibold text-gray-700">
            Cancellation Process
          </h3>

          <p className="text-sm text-gray-500 leading-relaxed">
            Customers may request cancellation by submitting a formal request
            through email, support portal, or official communication channels
            within the allowed time frame. Relevant order details or proof of
            purchase may be required for verification and processing.
          </p>
        </div>
      </div>

      {/* Refund Conditions */}
      <div className="border-2 border-dashed border-purple-600 bg-gradient-to-br from-white to-gray-50 transition-all hover:border-red-300 hover:shadow-md rounded-2xl">
        <div className="p-6">
          <h3 className="mb-3 text-xl font-semibold text-gray-700">
            Refund Conditions
          </h3>

          <p className="text-sm text-gray-500 leading-relaxed">
            Refunds may be issued when services are not delivered as promised,
            technical issues prevent functionality, or cancellations are made
            within the eligible period. Refunds may be full or partial depending
            on service usage and project completion status.
          </p>
        </div>
      </div>

      {/* Non Refundable */}
      <div className="border-2 border-dashed border-gray-200 bg-gradient-to-br from-white to-gray-50 transition-all hover:border-red-300 hover:shadow-md rounded-2xl">
        <div className="p-6">
          <h3 className="mb-3 text-xl font-semibold text-gray-700">
            Non-Refundable Services
          </h3>

          <p className="text-sm text-gray-500 leading-relaxed">
            Setup fees, custom software development work, consultation charges,
            and third-party software or subscription payments are generally
            non-refundable once initiated or delivered.
          </p>
        </div>
      </div>

      {/* Processing Time */}
      <div className="border-2 border-dashed border-gray-200 bg-gradient-to-br from-white to-gray-50 transition-all hover:border-red-300 hover:shadow-md rounded-2xl">
        <div className="p-6">
          <h3 className="mb-3 text-xl font-semibold text-gray-700">
            Refund Processing Time
          </h3>

          <p className="text-sm text-gray-500 leading-relaxed">
            Approved refunds are generally processed within 5–10 business days.
            Processing time may vary depending on bank procedures, payment
            gateway processing, or holidays.
          </p>
        </div>
      </div>

      {/* Late Cancellation */}
      <div className="border-2 border-dashed border-gray-200 bg-gradient-to-br from-white to-gray-50 transition-all hover:border-red-300 hover:shadow-md rounded-2xl">
        <div className="p-6">
          <h3 className="mb-3 text-xl font-semibold text-gray-700">
            Late Cancellations or Service Usage
          </h3>

          <p className="text-sm text-gray-500 leading-relaxed">
            If services have already been partially used or delivered, a reduced
            refund may apply based on the work completed, resources utilized,
            support provided, or project progress at the time of cancellation.
          </p>
        </div>
      </div>

      {/* Refund Method */}
      <div className="border-2 border-dashed border-gray-200 bg-gradient-to-br from-white to-gray-50 transition-all hover:border-red-300 hover:shadow-md rounded-2xl">
        <div className="p-6">
          <h3 className="mb-3 text-xl font-semibold text-gray-700">
            Refund Method
          </h3>

          <p className="text-sm text-gray-500 leading-relaxed">
            Refunds are usually credited through the original payment method,
            including bank transfer, UPI, cards, or payment gateways. In special
            cases, customers may be contacted for alternate refund arrangements.
          </p>
        </div>
      </div>
    </div>
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
