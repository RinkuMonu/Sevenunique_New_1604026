import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ChevronRight, House } from "lucide-react";
import FAQSection from "@/components/FAQSection";
import ScrollHighlight from "@/components/ScrollHighlight";
import {
  paymentSolutionsData,
  paymentSolutionSlugs,
} from "../paymentData";

const categoryBySlug = {
  "Fintech Services": ["payin", "payout", "dmt", "aeps"],
  "Utility Services": ["bbps-bill-payments", "recharges", "electricity-bill-payment", "water-bill-payment", "gas-bill-payment", "fastag-recharge", "broadband-landline-payment"],
  "Verification Services": ["cibil-score-check", "pan-verification-otp", "aadhaar-validation-otp", "gstin-verification", "bank-verification", "udyam-verification", "cin-verification", "voter-id-verification"],
  "Booking Services": ["bus-booking", "hotel-booking", "train-booking", "flight-booking"],
  "Loan & Insurance Services": ["credit-card", "loans", "home-loan", "instant-loan", "personal-loan", "business-loan", "education-loan", "car-loan", "gold-loan", "insurance", "health-insurance", "life-insurance", "motor-insurance", "travel-insurance"],
  "Gifts & Vouchers": ["gift-cards-vouchers"],
};

function getCategory(slug) {
  return Object.entries(categoryBySlug).find(([, slugs]) =>
    slugs.includes(slug),
  )?.[0];
}

export function generateStaticParams() {
  return paymentSolutionSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const solution = paymentSolutionsData[slug];

  if (!solution) return { title: "Payment Solution Not Found | SevenUnique" };

  return {
    title: `${solution.name} Solutions | SevenUnique`,
    description: solution.description,
  };
}

export default async function PaymentSolutionPage({ params }) {
  const { slug } = await params;
  const solution = paymentSolutionsData[slug];

  if (!solution) notFound();
  const category = getCategory(slug);

  return (
    <main className="overflow-hidden bg-white">
      {/* Light orange hero replaces the former black treatment to match the website brand. */}
      <section className="relative isolate bg-linear-to-br from-[#fff4ef] via-white to-[#ffe5dc] px-6 py-12 text-[#171717] sm:py-14 lg:px-8 lg:py-16">
        <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full border-70 border-[#f46b45]/15" />
        <div className="absolute -bottom-36 left-1/3 h-72 w-72 rounded-full bg-[#f46b45]/15 blur-3xl" />
        <div className="relative mx-auto max-w-1180px">
          <nav
            aria-label="Breadcrumb"
            className="mb-7 overflow-x-auto"
          >
            <ol className="flex min-w-max items-center gap-2 text-[15px] text-slate-400 sm:gap-3 sm:text-base">
              <li>
                <Link
                  href="/"
                  aria-label="Home"
                  className="inline-flex rounded-md p-1 transition-colors hover:text-[#f46b45]"
                >
                  <House size={19} strokeWidth={1.8} aria-hidden="true" />
                </Link>
              </li>
              <li aria-hidden="true" className="text-slate-300">
                <ChevronRight size={16} />
              </li>
              <li>
                <Link
                  href="/payment-solutions"
                  className="transition-colors hover:text-[#f46b45]"
                >
                  Payment Solutions
                </Link>
              </li>
              {category && (
                <>
                  <li aria-hidden="true" className="text-slate-300">
                    <ChevronRight size={16} />
                  </li>
                  <li className="text-slate-500">{category}</li>
                </>
              )}
              <li aria-hidden="true" className="text-slate-300">
                <ChevronRight size={16} />
              </li>
              <li aria-current="page" className="font-semibold text-[#1e293b]">
                {solution.name}
              </li>
            </ol>
          </nav>
          <div className="grid items-center gap-9 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
            <p className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#ff7650]">
              <span className="h-2 w-2 rounded-full bg-[#ff7650]" />
              {solution.eyebrow}
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              {solution.headline}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
              {solution.description}
            </p>
            <Link
              href="/payment-solutions/connect-with-us"
              className="mt-7 inline-flex rounded-xl bg-[#f46b45] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#f46b45]/20 transition hover:-translate-y-0.5 hover:bg-[#db5937]"
            >
              Discuss Your Requirements
            </Link>
            </div>
            <div className="relative block">
              <div className="absolute -inset-4 rounded-4xl border border-[#f46b45]/15" />
              {/* Hero image stays clean: no text badge or dark overlay. */}
              <div className="relative aspect-16/10 overflow-hidden rounded-[1.6rem] border border-[#f46b45]/15 bg-white shadow-2xl shadow-[#f46b45]/10">
                <Image
                  src={solution.image}
                  alt={`${solution.name} digital payment solution`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A single compact proof strip replaces the oversized standalone cards. */}
      <section className="bg-white px-6 py-7 lg:px-8">
        <div className="mx-auto grid max-w-1080px grid-cols-2 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_12px_40px_rgba(30,20,15,0.06)] sm:grid-cols-4">
          {[['API', 'Ready integration'], ['24/7', 'Service availability'], ['Live', 'Transaction visibility'], ['Secure', 'Data workflows']].map(([value, label]) => (
            <div key={label} className="group relative cursor-default border-gray-200 bg-white px-4 py-5 text-center transition-all duration-300 ease-out hover:z-10 hover:scale-[1.04] hover:rounded-2xl hover:shadow-[0_18px_45px_rgba(30,20,15,0.16)] sm:py-6 &:nth-child(odd):border-r &:nth-child(-n+2):border-b sm:&:not(:last-child):border-r sm:&:nth-child(-n+2):border-b-0">
              <p className="text-2xl font-semibold tracking-tight text-[#f46b45] transition-transform duration-300 group-hover:scale-105 sm:text-[28px]">{value}</p>
              <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-500 sm:text-[11px]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Clean product story with a focused visual and interactive benefit cards. */}
      <section className="bg-white px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-1180px items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20">
          <div className="relative pb-8 pr-3 sm:pr-8">
            <div className="absolute -left-5 -top-5 h-32 w-32 rounded-4xl bg-[#fff0eb]" />
            <div className="absolute -bottom-1 right-0 h-40 w-40 rounded-full border-28px border-[#f46b45]/8" />
            <div className="relative aspect-5/4 overflow-hidden rounded-4xl border border-gray-100 bg-gray-100 shadow-[0_24px_70px_rgba(30,20,15,0.14)]">
              <Image
                src={solution.image}
                alt={`${solution.name} platform and service experience`}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition duration-700 hover:scale-[1.03]"
              />
            </div>
            <div className="absolute bottom-0 right-0 z-10 rounded-2xl border border-white bg-white px-5 py-4 shadow-[0_18px_45px_rgba(30,20,15,0.16)] sm:right-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-gray-400">Live transaction status</p>
              <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-[#171717]"><span className="relative flex h-2.5 w-2.5 rounded-full bg-emerald-500 before:absolute before:inset-0 before:animate-ping before:rounded-full before:bg-emerald-400" /> Real-time visibility</p>
            </div>
          </div>
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-[#fff0eb] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#f46b45]"><span className="h-1.5 w-1.5 rounded-full bg-[#f46b45]" /> A complete service experience</p>
            <h2 className="mt-6 text-3xl font-semibold leading-[1.12] tracking-tight text-[#171717] sm:text-5xl">Designed around customers, teams, and growth.</h2>
            <p className="mt-6 border-l-2 border-[#f46b45] pl-5 text-base leading-8 text-gray-600 sm:text-lg">Our {solution.name} platform brings service delivery, transaction visibility, and operational reporting into one carefully designed experience. It supports growing transaction volumes while keeping everyday workflows clear for your team.</p>
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {["Clear user journeys", "Organized operations", "Responsive experience", "Scalable foundation"].map((item, index) => (
                <div key={item} className="group flex min-h-20 items-center gap-4 rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-[0_8px_25px_rgba(30,20,15,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#f46b45]/30 hover:shadow-[0_16px_35px_rgba(244,107,69,0.12)]">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#fff0eb] text-xs font-bold text-[#f46b45] transition group-hover:bg-[#f46b45] group-hover:text-white">0{index + 1}</span>
                  <span className="text-sm font-semibold leading-5 text-[#171717]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-1180px gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            {/* Every solution supports both service operators and the people using it. */}
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f46b45]">Built for businesses and users</p>
            <h2 className="mt-4 text-3xl font-semibold text-[#171717] sm:text-5xl">
              What is {solution.name}?
            </h2>
            <div className="mt-7 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#f46b45]/15 bg-[#fff8f5] px-4 py-2 text-xs font-semibold text-[#171717]"><span className="h-2 w-2 rounded-full bg-[#f46b45]" /> For businesses</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#f46b45]/15 bg-white px-4 py-2 text-xs font-semibold text-[#171717]"><span className="h-2 w-2 rounded-full border-2 border-[#f46b45]" /> For end users</span>
            </div>
          </div>
          <div className="rounded-3xl border border-[#f46b45]/15 bg-[#fff8f5] p-7 shadow-sm sm:p-10">
            <p className="text-lg leading-9 text-gray-600">{solution.what}</p>
            <div className="mt-7 grid gap-3 border-t border-[#f46b45]/10 pt-6 sm:grid-cols-2">
              <p className="text-sm leading-6 text-gray-600"><strong className="block text-[#171717]">Business value</strong> Clear operations, visibility, and scalable service delivery.</p>
              <p className="text-sm leading-6 text-gray-600"><strong className="block text-[#171717]">User value</strong> Simple journeys, responsive access, and transparent status updates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits use spacious cards with softer branded depth. */}
      <section className="bg-linear-to-b from-[#fff8f5] to-white px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-1180px">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f46b45]">Business advantages</p>
            <h2 className="mt-4 text-3xl font-semibold text-[#171717] sm:text-5xl">
              Why Choose Our {solution.name} Solution?
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {solution.benefits.map((benefit, index) => (
              <article key={benefit} className="group min-h-56 rounded-3xl border border-[#f46b45]/10 bg-white p-7 shadow-[0_12px_35px_rgba(30,20,15,0.05)] transition duration-300 hover:-translate-y-2 hover:border-[#f46b45]/40 hover:shadow-[0_22px_50px_rgba(244,107,69,0.13)]">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fff0eb] text-sm font-bold text-[#f46b45]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-12 text-xl font-semibold text-[#171717]">{benefit}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Capability cards use a clean responsive grid with individual elevation. */}
      <section className="bg-white px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-1180px">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f46b45]">Platform capabilities</p>
            <h2 className="mt-4 text-3xl font-semibold text-[#171717] sm:text-5xl">Everything needed to operate with confidence.</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[...solution.benefits, "Responsive management dashboard", "Downloadable transaction reports"].map((capability, index) => (
              <article key={capability} className="min-h-52 rounded-3xl border border-gray-100 bg-white p-7 shadow-[0_10px_32px_rgba(30,20,15,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#f46b45]/25 hover:bg-[#fffaf8]">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-[#f46b45]">0{index + 1}</span>
                  <span className="text-2xl text-gray-300">↗</span>
                </div>
                <h3 className="mt-16 text-xl font-semibold leading-7 text-[#171717]">{capability}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Animated zig-zag journey highlights each step in sequence. */}
      <section className="relative isolate overflow-hidden bg-[#fff8f5] px-6 py-24 lg:px-8 lg:py-32">
        <div className="absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-[#f46b45]/5 blur-3xl" />
        <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full border-70 border-[#f46b45]/5" />
        <div className="relative mx-auto max-w-1180px">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f46b45]">Simple, connected process</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#171717] sm:text-6xl">How It Works</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">A clear, guided journey from initial setup to a fully connected {solution.name} experience.</p>
          </div>
          <div className="payment-journey relative mt-20 space-y-10 before:absolute before:bottom-12 before:left-8 before:top-12 before:w-0.5 before:bg-[#f46b45]/20 sm:space-y-9 sm:before:left-1/2">
            {solution.steps.map((step, index) => (
              <ScrollHighlight key={step} className="relative grid grid-cols-[64px_1fr] items-center sm:grid-cols-[1fr_110px_1fr]">
                <span
                  className="relative z-20 col-start-1 row-start-1 flex h-16 w-16 items-center justify-center rounded-[1.35rem] border-[5px] border-[#fff8f5] bg-white text-base font-bold text-[#f46b45] shadow-md transition duration-300 group-hover:scale-110 group-hover:bg-[#f46b45] group-hover:text-white group-data-[active=true]:scale-110 group-data-[active=true]:bg-[#f46b45] group-data-[active=true]:text-white group-data-[active=true]:shadow-[0_0_0_8px_rgba(244,107,69,0.14)] sm:col-start-2 sm:mx-auto sm:h-18 sm:w-18"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                {/* The image occupies the open side of the zig-zag, separate from the text card. */}
                <figure className={`group relative row-start-1 hidden aspect-video w-full max-w-460px overflow-hidden rounded-[1.75rem] shadow-[0_16px_40px_rgba(30,20,15,0.12)] sm:block ${index % 2 === 0 ? "sm:col-start-3 sm:justify-self-start" : "sm:col-start-1 sm:justify-self-end"}`}>
                  <Image
                    src={solution.useCaseImages[index % solution.useCaseImages.length]}
                    alt={`${step} in the ${solution.name} process`}
                    fill
                    sizes="(min-width: 640px) 40vw, 75vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
                </figure>
                <div className={`col-start-2 row-start-1 ml-5 rounded-4xl border border-[#f46b45]/10 bg-white p-6 shadow-[0_16px_45px_rgba(30,20,15,0.07)] transition duration-300 group-hover:-translate-y-1 group-hover:border-[#f46b45]/35 group-hover:shadow-[0_24px_55px_rgba(244,107,69,0.14)] group-data-[active=true]:-translate-y-1 group-data-[active=true]:border-[#f46b45]/35 group-data-[active=true]:shadow-[0_20px_45px_rgba(244,107,69,0.12)] sm:ml-0 sm:w-full sm:max-w-490px sm:p-8 ${index % 2 === 0 ? "sm:col-start-1 sm:justify-self-end sm:text-right" : "sm:col-start-3 sm:justify-self-start sm:text-left"}`}>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#f46b45]">Step {String(index + 1).padStart(2, "0")}</p>
                    <h3 className="mt-3 text-xl font-semibold leading-8 text-[#171717] sm:text-2xl">{step}</h3>
                    <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                      {[
                        "Share the required details through a clear and guided starting experience.",
                        "The request is securely validated and prepared for the next stage.",
                        "Connected systems process the request with clear status visibility.",
                        "Receive confirmation and follow progress through an organized workflow.",
                        "Complete the journey with reliable delivery and accessible records.",
                      ][index] || "Move forward through a secure, transparent, and connected workflow."}
                    </p>
                </div>
              </ScrollHighlight>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases continue the light visual system instead of returning to a black panel. */}
      <section className="bg-white px-6 py-20 text-[#171717] lg:px-8 lg:py-28">
        <div className="mx-auto max-w-1400px">
          <div className="grid items-center gap-12 lg:grid-cols-[0.65fr_1.35fr] xl:gap-16">
            <div className="max-w-md">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ff7650]">Made for your model</p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">Where {solution.name} creates value</h2>
              <p className="mt-6 max-w-md leading-8 text-gray-600">A flexible solution for growing businesses that need dependable service delivery and clear operational control.</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-3 xl:gap-6">
              {solution.useCases.map((useCase, index) => (
                <article key={useCase} tabIndex={0} className="group relative aspect-4/5 overflow-hidden rounded-3xl border border-[#f46b45]/10 bg-gray-100 shadow-sm outline-none transition duration-500 hover:-translate-y-1 hover:border-[#f46b45]/40 hover:shadow-2xl focus:-translate-y-1 focus:border-[#f46b45]/40 focus:shadow-2xl">
                  <Image
                    src={solution.useCaseImages[index]}
                    alt={`${useCase} use case for ${solution.name}`}
                    fill
                    sizes="(min-width: 1024px) 18vw, (min-width: 640px) 33vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-110 group-focus:scale-110"
                    style={{ objectPosition: "center" }}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-75 transition duration-500 sm:opacity-60" />
                  <span className="absolute left-5 top-5 z-30 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-sm font-bold text-[#f46b45] shadow-lg transition-all duration-300 group-hover:-translate-x-2 group-hover:opacity-0 group-focus:-translate-x-2 group-focus:opacity-0 xl:left-6 xl:top-6">0{index + 1}</span>
                  <div className="absolute inset-x-0 bottom-0 z-10 p-6 text-white xl:p-7">
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white/70">Use case</p>
                    <h3 className="text-xl font-semibold leading-7 xl:text-2xl xl:leading-8">{useCase}</h3>
                  </div>
                  {/* Extra context slides in horizontally so square cards never clip the copy. */}
                  <div className="absolute inset-0 z-20 flex translate-x-full items-end bg-black/80 p-6 text-white backdrop-blur-[2px] transition-transform duration-500 ease-out group-hover:translate-x-0 group-focus:translate-x-0 xl:p-7">
                    <div>
                      <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#ff8a68]">Use case</p>
                      <h3 className="text-xl font-semibold leading-7 xl:text-2xl xl:leading-8">{useCase}</h3>
                      <p className="mt-3 border-t border-white/25 pt-3 text-sm leading-6 text-white/85 xl:text-[15px] xl:leading-7">
                        {[
                          `Deliver a fast, guided ${solution.name} experience with clear transaction updates and fewer operational steps.`,
                          `Support recurring activity through dependable workflows, organized reporting, and a smooth experience for every user.`,
                          `Make everyday ${solution.name} services easier to access, manage, and confirm across customer-facing channels.`,
                        ][index % 3]}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reuse the website's shared accordion for consistent FAQ interaction and styling. */}
      <FAQSection
        twoColumn
        data={{
          sectionLabel: "FAQ",
          heading: `Frequently Asked Questions About ${solution.name}`,
          description: `Find clear answers about the ${solution.name} experience, integration, transaction visibility, and onboarding.`,
          items: [
            {
              question: `What is the ${solution.name} solution used for?`,
              answer: solution.what,
            },
            {
              question: `Can ${solution.name} integrate with our existing platform?`,
              answer: `Yes. Our ${solution.name} solution is designed for API-led integration with compatible websites, applications, dashboards, and operational workflows.`,
            },
            {
              question: `How do we monitor ${solution.name} transactions?`,
              answer: "Authorized teams can track transaction status and review organized reports through the solution's operational dashboard.",
            },
            {
              question: `How do we get started with ${solution.name}?`,
              answer: "Share your business model and requirements with our team. We will help define the suitable integration scope, onboarding flow, and implementation plan.",
            },
          ],
        }}
      />

      {/* Contact CTA uses a message-first action instead of a call booking flow. */}
      <section className="px-6 pb-20 lg:px-8 lg:pb-28">
        <div className="relative mx-auto grid max-w-1180px items-center gap-8 overflow-hidden rounded-4xl border border-[#f46b45]/15 bg-[#fff8f5] p-7 shadow-[0_24px_70px_rgba(30,20,15,0.08)] sm:p-12 lg:grid-cols-[auto_1fr_auto] lg:gap-10 lg:p-14">
          <div className="absolute -right-24 -top-28 h-72 w-72 rounded-full border-55 border-[#f46b45]/8" />
          <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f46b45] text-3xl text-white shadow-xl shadow-[#f46b45]/20">✦</div>
          <div className="relative max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f46b45]">Let&apos;s build together</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#171717] sm:text-4xl">Ready to create your {solution.name} experience?</h2>
            <p className="mt-4 leading-7 text-gray-600">Tell us what you need and our payment solution team will get back to you.</p>
          </div>
          <Link href="/payment-solutions/connect-with-us" className="relative inline-flex w-fit shrink-0 items-center gap-2 rounded-xl bg-[#f46b45] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#f46b45]/20 transition hover:-translate-y-1 hover:bg-[#dd5937] hover:shadow-xl">
            Send Message <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
