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

          {/* Overview Section */}
          <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50">
              <div className=" flex items-center gap-3 text-xl font-bold p-3 text-gray-600 p-3">
                <div className="rounded-full bg-blue-100 p-2">
                  <AlertCircle className="h-6 w-6 text-blue-600" />
                </div>
                General Work Terms and Client Responsibilities & Liabilities
              </div>
            </div>
            <div className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground text-gray-500">
                The client shall be solely responsible for providing all site
                content, including text and multimedia, to Sevenuniqu Tech
                Solutions Pvt. Ltd. before work begins. By engaging with
                Sevenunique Tech Solutions Pvt. Ltd., the user confirms that
                they have read, understood, and accepted the Privacy Policy of
                Sevenunique Tech Solutions Pvt. Ltd. The user also agrees to
                receive SMS and email notifications on their registered mobile
                number. Additionally, the client is responsible for creating
                proper backups of all website content before allowing
                SevenUnique Tech Solutions Pvt. Ltd. to proceed with the agreed
                tasks. The company will not be held liable for any loss or
                damage to existing data under any circumstances.
                <br />
                The contract does not hold Sevenunique Tech Solutions Pvt. Ltd.
                responsible for tasks related to data entry, web hosting, or
                custom artwork/graphics unless explicitly specified, agreed
                upon, and paid by both parties. Any artwork, images, or text
                provided or created by Sevenunique Tech Solutions Pvt. Ltd. for
                the client will remain the property of the company and/or its
                suppliers unless otherwise agreed upon in writing.
                <br />
                Sevenunique Tech Solutions Pvt. Ltd. strives to meet all
                delivery timelines; however, there may be instances where
                extensions or adjustments are necessary due to unforeseen and
                unavoidable circumstances. These may include deployment
                challenges, dependencies, third-party support delays,
                development bottlenecks, resource unavailability due to
                emergencies, communication delays, or similar issues. The
                company will make every effort to address these challenges
                promptly and minimize any impact on delivery schedules.
                <br />
                Sevenunique Tech Solutions Pvt. Ltd. will provide the Client
                with an opportunity to review the website's design and content
                during the development process and after completion. The company
                will wait a period of 7 days to receive feedback on the shared
                work or outputs. If the Client does not respond within this
                timeframe, the material will be considered automatically
                accepted and approved. The Client retains copyright ownership of
                any data, files, or graphic logos provided and grants
                Sevenunique Tech Solutions Pvt. Ltd. the rights to publish and
                use such materials. It is the Client's responsibility to obtain
                the necessary permissions and rights for any third-party
                copyrighted information or files used in the project.
                Additionally, the Client agrees to provide Sevenunique Tech
                Solutions Pvt. Ltd. with the rights to use such materials and
                indemnify the company against any claims arising from the
                Client's failure to secure proper copyright permissions. A
                contract for website design and/or placement serves as the
                Client's assurance to Sevenunique Tech Solutions Pvt. Ltd. that
                all required permissions and authorizations have been obtained.
                <br />
                Evidence of permissions and authorizations may be requested.
                SevenUnique Tech Solutions Pvt. Ltd. will not be held
                responsible for any changes made to the Client's pages or
                website by the Client or any third party after deployment. These
                changes may include, but are not limited to, additions,
                modifications, or deletions. The company may charge a one-time
                Web Development fee to address and resolve any issues arising
                from such alterations.
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
                Payments
              </div>
            </div>
            <div className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground text-gray-500 mb-6">
                Sevenunique Tech Solutions Pvt. Ltd. accepts payments via
                cheque, cash, or bank transfers, though the company reserves the
                right to refuse any payment method without prior notice.
                Additionally, SevenUnique Tech Solutions Pvt. Ltd. retains the
                right to withdraw accepted payment methods or adjust pricing at
                any time without notice. If the Customer cancels the service
                before its completion, a cancellation fee may apply, equivalent
                to the value of the work completed up to the cancellation point.
                Failure to pay the cancellation fee or settle overdue amounts
                may result in legal action if necessary.
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
                Support and Third Party
              </div>
            </div>
            <div className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground  text-gray-500">
                Upon site launch, we provide free support for the first month.
                After this period, support services are charged based on various
                pricing packages tailored to the client's needs, with attractive
                discounts available for higher-tier packages.
                <br />
                The scope of support includes bug fixes and email support but
                excludes issues related to site architecture, rule changes, and
                add-ons or enhancements. Any third-party products, services, or
                integrations requiring licensing, payments, or copyright
                compliance will be the sole responsibility of the client.
                Alternatively, Sevenunique Tech Solutions Pvt. Ltd. can procure
                them on the client's behalf, subject to pre-payment for
                associated costs.
                <br />
                Fees charged by Sevenunique Tech Solutions Pvt. Ltd. do not
                include out-of-pocket expenses or claims from third-party
                products or services. The company does not guarantee or warrant
                the accuracy or performance of any third-party product or
                service. Additionally, any upgrades or modifications to
                third-party products or services used in the project may require
                a feasibility review and potential adjustments to pricing and
                timelines.
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
                Re-work, Enhancements/Add-ons and Billing
              </div>
            </div>
            <div className="p-8">
              <p className="text-lg leading-relaxed  text-gray-500 ">
                Any additional features not included in the agreed scope of work
                will be addressed through a Change Management process and billed
                separately. Scope changes occurring after wireframe approval
                will also incur additional charges, with corresponding
                adjustments to timelines and costs. While minor tweaks or
                reworks are typically accommodated, repeated or excessive
                requests may be deemed abusive. <br />
                In such cases, a list of the work involved will be compiled, and
                additional charges will apply based on the time and effort
                required, ranging from $15 to $20 per hour. Although we strive
                to include most changes within the project budget, certain
                requests may be classified as enhancements or add-ons and will
                be chargeable. <br />
                Clients will be informed of such costs before work begins. Any
                rework, changes, or tweaks requested after approval or
                subsequent project stages will also be treated as additional
                work and billed accordingly. The client agrees to pay all fees
                charged by Sevenunique Tech Solutions Pvt. Ltd. in full, without
                deductions, discounts, or offsets, by the agreed due dates.
              </p>
            </div>
          </div>

          <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-green-50 to-blue-50">
              <div className=" flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
                <div className="rounded-full bg-green-100 p-2">
                  <Lock className="h-6 w-6 text-green-600" />
                </div>
                Approvals and Delivery
              </div>
            </div>
            <div className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground text-gray-500 mb-6">
                The project will progress through various stages, with work on
                the next stage commencing only after receiving approval and the
                agreed payments for the previous stage. Upon completion of the
                service (website design and/or development), the website will be
                uploaded to Sevenunique Tech Solutions Pvt. Ltd.'s server for
                the Client's review and approval.
                <br /> Once approved, the website will be uploaded to the final
                destination server. Sevenunique Tech Solutions Pvt. Ltd.
                reserves the right to delay the final upload until full payment
                has been received. All code and materials developed during the
                project will be transferred to the Client upon project
                completion and after the necessary approvals. Ownership of the
                code will reside with the Client after final payments are made.{" "}
                <br />
                Sevenunique Tech Solutions Pvt. Ltd. retains the right to
                showcase the completed work and/or deployed website as a
                reference for potential clients. If the Client wishes to
                restrict this, they must notify Sevenunique Tech Solutions Pvt.
                Ltd. in advance and obtain prior approval for such a request.
              </p>
            </div>
          </div>

          <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-green-50 to-blue-50">
              <div className=" flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
                <div className="rounded-full bg-green-100 p-2">
                  <Lock className="h-6 w-6 text-green-600" />
                </div>
                Limitations of Liability
              </div>
            </div>
            <div className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground text-gray-500 mb-6">
                Sevenunique Tech Solutions Pvt. Ltd. will exercise reasonable
                skill and care in providing its services. However, the company
                makes no guarantees and disclaims all express or implied
                warranties regarding the availability, quality, accuracy,
                timeliness, completeness, performance, or fitness of the
                services provided. <br />
                Sevenunique Tech Solutions Pvt. Ltd., including its employees
                and agents, accepts no liability for any loss or damage caused
                by inaccuracies, omissions, delays, or errors in the website's
                production, whether due to negligence or other reasons.
                Furthermore, the company is not responsible for any loss or
                damage to the Client's artwork, photos, data, or content
                supplied for the website, regardless of the cause. <br />
                Except in cases of death or personal injury caused by the
                company's negligence, Sevenunique Tech Solutions Pvt. Ltd. will
                not be liable for any damages arising from or in connection with
                this agreement or the operation of the services, whether in
                contract, tort, or otherwise.
                <br /> The company will not be responsible for any direct,
                indirect, or consequential damages, including loss of profit,
                property damage, or third-party claims. Additionally,
                Sevenunique Tech Solutions Pvt. Ltd. does not guarantee services
                provided by third-party organizations and will not be held
                liable for any failures or issues related to third-party
                services.
              </p>
            </div>
          </div>

          <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-green-50 to-blue-50">
              <div className=" flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
                <div className="rounded-full bg-green-100 p-2">
                  <Lock className="h-6 w-6 text-green-600" />
                </div>
                Timescale
              </div>
            </div>
            <div className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground text-gray-500 mb-6">
                Sevenunique Tech Solutions Pvt. Ltd. will make every effort to
                complete all services within the agreed-upon timescale. The
                project timeline will begin once the agreed deposit (ranging
                from 30% to 50% of the project price, as mutually discussed and
                agreed upon before contract finalization) and all required
                website content from the Customer are received. However,
                Sevenunique Tech Solutions Pvt. Ltd. may need to extend the
                timescale if circumstances beyond its control arise.
              </p>
            </div>
          </div>

          <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-green-50 to-blue-50">
              <div className=" flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
                <div className="rounded-full bg-green-100 p-2">
                  <Lock className="h-6 w-6 text-green-600" />
                </div>
                Jurisdiction
              </div>
            </div>
            <div className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground text-gray-500 mb-6">
                These terms shall be governed by and construed in accordance
                with the applicable laws, and any disputes arising from or
                relating to these Terms and Conditions shall be subject to the
                exclusive jurisdiction of the relevant authorities. By placing
                an order, the Customer confirms acceptance of these terms, which
                are attached to the Order.
              </p>
            </div>
          </div>

          <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-green-50 to-blue-50">
              <div className=" flex items-center gap-3 text-xl font-bold p-3 text-gray-600">
                <div className="rounded-full bg-green-100 p-2">
                  <Lock className="h-6 w-6 text-green-600" />
                </div>
                Severability
              </div>
            </div>
            <div className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground text-gray-500 mb-6">
                If any provision of this Agreement and/or Order is found to be
                invalid, illegal, or unenforceable, the remaining provisions
                will remain unaffected, and the Agreement and/or Order will not
                be void for this reason alone. The invalid, illegal, or
                unenforceable provision will be replaced with a mutually
                acceptable, valid, legal, and enforceable provision that closely
                reflects the original intent of the parties.
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
