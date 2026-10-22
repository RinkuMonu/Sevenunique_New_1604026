import Link from "next/link";
import { paymentSolutionsData } from "./paymentData";

export const metadata = {
  title: "Payment Solutions | SevenUnique",
  description: "Explore secure fintech, utility, verification, booking, lending, insurance, and voucher solutions.",
};

const solutionCategories = [
  { title: "Fintech Services", description: "Payment collection, disbursal, money transfer, and assisted banking infrastructure.", slugs: ["payin", "payout", "dmt", "aeps"] },
  { title: "Utility Services", description: "Everyday bill payments and recharge services from one connected platform.", slugs: ["bbps-bill-payments", "recharges", "electricity-bill-payment", "water-bill-payment", "gas-bill-payment", "fastag-recharge", "broadband-landline-payment"] },
  { title: "Verification Services", description: "Consent-led identity, business, bank, and document verification workflows.", slugs: ["cibil-score-check", "pan-verification-otp", "aadhaar-validation-otp", "gstin-verification", "bank-verification", "udyam-verification", "cin-verification", "voter-id-verification"] },
  { title: "Booking Services", description: "Digital travel search and booking for road, rail, air, and accommodation.", slugs: ["bus-booking", "hotel-booking", "train-booking", "flight-booking"] },
  { title: "Loan & Insurance Services", description: "Guided discovery and application journeys for credit, loans, and protection products.", slugs: ["credit-card", "loans", "home-loan", "instant-loan", "personal-loan", "business-loan", "education-loan", "car-loan", "gold-loan", "insurance", "health-insurance", "life-insurance", "motor-insurance", "travel-insurance"] },
  { title: "Gifts & Vouchers", description: "Digital rewards for customers, employees, promotions, and special occasions.", slugs: ["gift-cards-vouchers"] },
];

const categoryId = (title) =>
  `category-${title.toLowerCase().replaceAll("&", "and").replaceAll(" ", "-")}`;

export default function PaymentSolutionsPage() {
  return (
    <main className="bg-white">
      <section className="relative isolate overflow-hidden bg-linear-to-br from-[#fff4ef] via-white to-[#ffe5dc] px-6 py-20 text-[#171717] lg:px-8 lg:py-28">
        <div className="absolute -right-24 -top-32 h-96 w-96 rounded-full border-72 border-[#f46b45]/10" />
        <div className="absolute -bottom-28 left-1/3 h-72 w-72 rounded-full bg-[#f46b45]/10 blur-3xl" />
        <div className="relative mx-auto max-w-[1180px]">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#f46b45]">SevenUnique Fintech</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl lg:text-7xl">Payment infrastructure for every business journey.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-600">From accepting and sending money to assisted banking, bill payments, travel, cards, and lending—discover solutions designed to scale.</p>
        </div>
      </section>

      <section className="bg-[#fffdfc] px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-14 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f46b45]">Our solutions</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#171717] sm:text-5xl">One connected ecosystem for modern payments.</h2>
          </div>

          <div className="space-y-20">
            {solutionCategories.map((category) => {
              const solutions = category.slugs
                .map((slug) => [slug, paymentSolutionsData[slug]])
                .filter(([, solution]) => solution);
              const headingId = categoryId(category.title);

              return (
                <section key={category.title} aria-labelledby={headingId}>
                  <div className="mb-8 flex flex-col gap-3 border-b border-[#f46b45]/15 pb-6 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f46b45]">Service category</p>
                      <h3 id={headingId} className="mt-2 text-3xl font-semibold text-[#171717]">{category.title}</h3>
                      <p className="mt-2 max-w-2xl leading-7 text-gray-600">{category.description}</p>
                    </div>
                    <span className="text-sm font-semibold text-gray-400">{solutions.length} {solutions.length === 1 ? "service" : "services"}</span>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {solutions.map(([slug, solution], index) => (
                      <Link key={slug} href={`/payment-solutions/${slug}`} className="group relative overflow-hidden rounded-3xl border border-[#f46b45]/10 bg-white p-7 shadow-[0_12px_40px_rgba(30,20,15,0.05)] transition duration-300 hover:-translate-y-2 hover:border-[#f46b45]/35 hover:shadow-[0_24px_60px_rgba(244,107,69,0.14)]">
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#fff1ec] text-sm font-bold text-[#f46b45] transition group-hover:bg-[#f46b45] group-hover:text-white">{String(index + 1).padStart(2, "0")}</span>
                        <h4 className="mt-8 text-2xl font-semibold text-[#171717]">{solution.name}</h4>
                        <p className="mt-4 leading-7 text-gray-600">{solution.description}</p>
                        <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#f46b45]">View solution <span className="transition group-hover:translate-x-1">→</span></span>
                      </Link>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
