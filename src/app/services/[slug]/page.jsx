import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ChevronRight, House } from "lucide-react";
import FAQSection from "@/components/FAQSection";
import ScrollHighlight from "@/components/ScrollHighlight";
import {
  getUnifiedServiceData,
  allKnownServiceSlugs,
} from "./serviceUnifiedData";

export function generateStaticParams() {
  return allKnownServiceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const solution = getUnifiedServiceData(slug);

  if (!solution) return { title: "Service Not Found | SevenUnique" };

  return {
    title: `${solution.name} | SevenUnique`,
    description: solution.description,
    openGraph: {
      title: `${solution.name} | SevenUnique`,
      description: solution.description,
      url: `https://sevenunique.com/services/${slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${solution.name} | SevenUnique`,
      description: solution.description,
    },
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const solution = getUnifiedServiceData(slug);

  if (!solution) notFound();

  return (
    <main className="overflow-hidden bg-white">
      {/* 1. HERO SECTION: Light orange gradient brand style matching payment solutions */}
      <section className="relative isolate bg-linear-to-br from-[#fff4ef] via-white to-[#ffe5dc] px-6 py-12 text-[#171717] sm:py-14 lg:px-8 lg:py-16">
        <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full border-70 border-[#f46b45]/15 pointer-events-none" />
        <div className="absolute -bottom-36 left-1/3 h-72 w-72 rounded-full bg-[#f46b45]/15 blur-3xl pointer-events-none" />
        
        <div className="relative mx-auto max-w-1180px">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-7 overflow-x-auto">
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
                  href="/services"
                  className="transition-colors hover:text-[#f46b45]"
                >
                  Services
                </Link>
              </li>
              {solution.category && (
                <>
                  <li aria-hidden="true" className="text-slate-300">
                    <ChevronRight size={16} />
                  </li>
                  <li className="text-slate-500">{solution.category}</li>
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
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl text-slate-900">
                {solution.headline}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
                {solution.description}
              </p>
              <div className="mt-7 flex flex-wrap gap-4 items-center">
                <Link
                  href="/contact-us"
                  className="inline-flex rounded-xl bg-[#f46b45] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#f46b45]/20 transition hover:-translate-y-0.5 hover:bg-[#db5937]"
                >
                  Discuss Your Requirements
                </Link>
                <Link
                  href="/schedule-a-call-page"
                  className="inline-flex rounded-xl border border-gray-300 bg-white px-5 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 hover:text-slate-900"
                >
                  Schedule a Call
                </Link>
              </div>
            </div>

            <div className="relative block">
              <div className="absolute -inset-4 rounded-4xl border border-[#f46b45]/15" />
              <div className="relative aspect-16/10 overflow-hidden rounded-[1.6rem] border border-[#f46b45]/15 bg-white shadow-2xl shadow-[#f46b45]/10">
                <Image
                  src={solution.image}
                  alt={`${solution.name} digital engineering service`}
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

      {/* 2. PROOF STRIP: 4 compact verification points */}
      <section className="bg-white px-6 py-7 lg:px-8">
        <div className="mx-auto grid max-w-1080px grid-cols-2 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_12px_40px_rgba(30,20,15,0.06)] sm:grid-cols-4">
          {solution.proofStats.map(([value, label]) => (
            <div
              key={label}
              className="group relative cursor-default border-gray-200 bg-white px-4 py-5 text-center transition-all duration-300 ease-out hover:z-10 hover:scale-[1.04] hover:rounded-2xl hover:shadow-[0_18px_45px_rgba(30,20,15,0.16)] sm:py-6 &:nth-child(odd):border-r &:nth-child(-n+2):border-b sm:&:not(:last-child):border-r sm:&:nth-child(-n+2):border-b-0"
            >
              <p className="text-2xl font-semibold tracking-tight text-[#f46b45] transition-transform duration-300 group-hover:scale-105 sm:text-[28px]">
                {value}
              </p>
              <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-500 sm:text-[11px]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PRODUCT & SERVICE EXPERIENCE STORY */}
      <section className="bg-white px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-1180px items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20">
          <div className="relative pb-8 pr-3 sm:pr-8">
            <div className="absolute -left-5 -top-5 h-32 w-32 rounded-4xl bg-[#fff0eb]" />
            <div className="absolute -bottom-1 right-0 h-40 w-40 rounded-full border-28px border-[#f46b45]/8" />
            <div className="relative aspect-5/4 overflow-hidden rounded-4xl border border-gray-100 bg-gray-100 shadow-[0_24px_70px_rgba(30,20,15,0.14)]">
              <Image
                src={solution.image}
                alt={`${solution.name} service experience`}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition duration-700 hover:scale-[1.03]"
              />
            </div>
            <div className="absolute bottom-0 right-0 z-10 rounded-2xl border border-white bg-white px-5 py-4 shadow-[0_18px_45px_rgba(30,20,15,0.16)] sm:right-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-gray-400">
                Production Standard
              </p>
              <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-[#171717]">
                <span className="relative flex h-2.5 w-2.5 rounded-full bg-emerald-500 before:absolute before:inset-0 before:animate-ping before:rounded-full before:bg-emerald-400" />
                Verified Engineering
              </p>
            </div>
          </div>

          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-[#fff0eb] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#f46b45]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#f46b45]" />
              A complete engineering experience
            </p>
            <h2 className="mt-6 text-3xl font-semibold leading-[1.12] tracking-tight text-[#171717] sm:text-5xl">
              Designed around quality, architecture, and scalable growth.
            </h2>
            <p className="mt-6 border-l-2 border-[#f46b45] pl-5 text-base leading-8 text-gray-600 sm:text-lg">
              Our {solution.name} practice unifies architectural rigor, clean codebase standards, and transparent sprint reporting into one cohesive engagement. We build software that performs under heavy load while keeping delivery schedules predictable.
            </p>
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {solution.highlights.map((item, index) => (
                <div
                  key={item}
                  className="group flex min-h-20 items-center gap-4 rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-[0_8px_25px_rgba(30,20,15,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#f46b45]/30 hover:shadow-[0_16px_35px_rgba(244,107,69,0.12)]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#fff0eb] text-xs font-bold text-[#f46b45] transition group-hover:bg-[#f46b45] group-hover:text-white">
                    0{index + 1}
                  </span>
                  <span className="text-sm font-semibold leading-5 text-[#171717]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHAT IS THE SERVICE? (2-Column Overview) */}
      <section className="px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-1180px gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f46b45]">
              Built for modern businesses
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-[#171717] sm:text-5xl">
              What is {solution.name}?
            </h2>
            <div className="mt-7 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#f46b45]/15 bg-[#fff8f5] px-4 py-2 text-xs font-semibold text-[#171717]">
                <span className="h-2 w-2 rounded-full bg-[#f46b45]" /> For startups
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#f46b45]/15 bg-white px-4 py-2 text-xs font-semibold text-[#171717]">
                <span className="h-2 w-2 rounded-full border-2 border-[#f46b45]" /> For scaling enterprises
              </span>
            </div>
          </div>
          <div className="rounded-3xl border border-[#f46b45]/15 bg-[#fff8f5] p-7 shadow-sm sm:p-10">
            <p className="text-lg leading-9 text-gray-600">{solution.what}</p>
            <div className="mt-7 grid gap-3 border-t border-[#f46b45]/10 pt-6 sm:grid-cols-2">
              <p className="text-sm leading-6 text-gray-600">
                <strong className="block text-[#171717]">Business value</strong>
                Accelerated product launch cycles, predictable engineering velocity, and measurable operational efficiency.
              </p>
              <p className="text-sm leading-6 text-gray-600">
                <strong className="block text-[#171717]">Technical value</strong>
                Zero-debt architectures, hardened cloud security, automated test coverage, and transparent code ownership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BUSINESS ADVANTAGES (Why Choose Our Solution) */}
      <section className="bg-linear-to-b from-[#fff8f5] to-white px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-1180px">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f46b45]">
              Business advantages
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-[#171717] sm:text-5xl">
              Why Choose Our {solution.name}?
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {solution.benefits.map((benefit, index) => (
              <article
                key={benefit}
                className="group min-h-56 rounded-3xl border border-[#f46b45]/10 bg-white p-7 shadow-[0_12px_35px_rgba(30,20,15,0.05)] transition duration-300 hover:-translate-y-2 hover:border-[#f46b45]/40 hover:shadow-[0_22px_50px_rgba(244,107,69,0.13)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fff0eb] text-sm font-bold text-[#f46b45]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-12 text-xl font-semibold text-[#171717]">
                  {benefit}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PLATFORM & TECHNICAL CAPABILITIES */}
      <section className="bg-white px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-1180px">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f46b45]">
              Core engineering capabilities
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-[#171717] sm:text-5xl">
              Everything needed to build and scale with confidence.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {solution.capabilities.map((capability, index) => (
              <article
                key={capability}
                className="min-h-52 rounded-3xl border border-gray-100 bg-white p-7 shadow-[0_10px_32px_rgba(30,20,15,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#f46b45]/25 hover:bg-[#fffaf8]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-[#f46b45]">
                    0{index + 1}
                  </span>
                  <span className="text-2xl text-gray-300">↗</span>
                </div>
                <h3 className="mt-16 text-xl font-semibold leading-7 text-[#171717]">
                  {capability}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SIMPLE, CONNECTED PROCESS (Zig-Zag How It Works Journey) */}
      <section className="relative isolate overflow-hidden bg-[#fff8f5] px-6 py-24 lg:px-8 lg:py-32">
        <div className="absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-[#f46b45]/5 blur-3xl" />
        <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full border-70 border-[#f46b45]/5" />
        
        <div className="relative mx-auto max-w-1180px">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f46b45]">
              Simple, connected delivery framework
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#171717] sm:text-6xl">
              How It Works
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              A clear, guided journey from technical discovery to production deployment and proactive scaling.
            </p>
          </div>

          <div className="payment-journey relative mt-20 space-y-10 before:absolute before:bottom-12 before:left-8 before:top-12 before:w-0.5 before:bg-[#f46b45]/20 sm:space-y-9 sm:before:left-1/2">
            {solution.steps.map((step, index) => (
              <ScrollHighlight
                key={step.title || step}
                className="relative grid grid-cols-[64px_1fr] items-center sm:grid-cols-[1fr_110px_1fr]"
              >
                <span className="relative z-20 col-start-1 row-start-1 flex h-16 w-16 items-center justify-center rounded-[1.35rem] border-[5px] border-[#fff8f5] bg-white text-base font-bold text-[#f46b45] shadow-md transition duration-300 group-hover:scale-110 group-hover:bg-[#f46b45] group-hover:text-white group-data-[active=true]:scale-110 group-data-[active=true]:bg-[#f46b45] group-data-[active=true]:text-white group-data-[active=true]:shadow-[0_0_0_8px_rgba(244,107,69,0.14)] sm:col-start-2 sm:mx-auto sm:h-18 sm:w-18">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <figure
                  className={`group relative row-start-1 hidden aspect-video w-full max-w-460px overflow-hidden rounded-[1.75rem] shadow-[0_16px_40px_rgba(30,20,15,0.12)] sm:block ${
                    index % 2 === 0
                      ? "sm:col-start-3 sm:justify-self-start"
                      : "sm:col-start-1 sm:justify-self-end"
                  }`}
                >
                  <Image
                    src={solution.useCaseImages[index % solution.useCaseImages.length]}
                    alt={`${step.title || step} in ${solution.name}`}
                    fill
                    sizes="(min-width: 640px) 40vw, 75vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
                </figure>

                <div
                  className={`col-start-2 row-start-1 ml-5 rounded-4xl border border-[#f46b45]/10 bg-white p-6 shadow-[0_16px_45px_rgba(30,20,15,0.07)] transition duration-300 group-hover:-translate-y-1 group-hover:border-[#f46b45]/35 group-hover:shadow-[0_24px_55px_rgba(244,107,69,0.14)] group-data-[active=true]:-translate-y-1 group-data-[active=true]:border-[#f46b45]/35 group-data-[active=true]:shadow-[0_20px_45px_rgba(244,107,69,0.12)] sm:ml-0 sm:w-full sm:max-w-490px sm:p-8 ${
                    index % 2 === 0
                      ? "sm:col-start-1 sm:justify-self-end sm:text-right"
                      : "sm:col-start-3 sm:justify-self-start sm:text-left"
                  }`}
                >
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#f46b45]">
                    Step {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold leading-8 text-[#171717] sm:text-2xl">
                    {step.title || step}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                    {step.desc || "Execute through rigorous engineering standards, transparent review cadences, and continuous QA."}
                  </p>
                </div>
              </ScrollHighlight>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WHERE THE SERVICE CREATES VALUE (Use Cases) */}
      <section className="bg-white px-6 py-20 text-[#171717] lg:px-8 lg:py-28">
        <div className="mx-auto max-w-1400px">
          <div className="grid items-center gap-12 lg:grid-cols-[0.65fr_1.35fr] xl:gap-16">
            <div className="max-w-md">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ff7650]">
                Engineered for your business model
              </p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">
                Where {solution.name} creates value
              </h2>
              <p className="mt-6 max-w-md leading-8 text-gray-600">
                Tailored delivery strategies for growing teams that demand high reliability, clean architectural standards, and fast turnaround.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-3 xl:gap-6">
              {solution.useCases.map((useCase, index) => (
                <article
                  key={useCase.title || useCase}
                  tabIndex={0}
                  className="group relative aspect-4/5 overflow-hidden rounded-3xl border border-[#f46b45]/10 bg-gray-100 shadow-sm outline-none transition duration-500 hover:-translate-y-1 hover:border-[#f46b45]/40 hover:shadow-2xl focus:-translate-y-1 focus:border-[#f46b45]/40 focus:shadow-2xl"
                >
                  <Image
                    src={solution.useCaseImages[index % solution.useCaseImages.length]}
                    alt={`${useCase.title || useCase} in ${solution.name}`}
                    fill
                    sizes="(min-width: 1024px) 18vw, (min-width: 640px) 33vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-110 group-focus:scale-110"
                    style={{ objectPosition: "center" }}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-75 transition duration-500 sm:opacity-60" />
                  <span className="absolute left-5 top-5 z-30 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-sm font-bold text-[#f46b45] shadow-lg transition-all duration-300 group-hover:-translate-x-2 group-hover:opacity-0 group-focus:-translate-x-2 group-focus:opacity-0 xl:left-6 xl:top-6">
                    0{index + 1}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 z-10 p-6 text-white xl:p-7">
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white/70">
                      Application Scope
                    </p>
                    <h3 className="text-xl font-semibold leading-7 xl:text-2xl xl:leading-8">
                      {useCase.title || useCase}
                    </h3>
                  </div>
                  <div className="absolute inset-0 z-20 flex translate-x-full items-end bg-black/80 p-6 text-white backdrop-blur-[2px] transition-transform duration-500 ease-out group-hover:translate-x-0 group-focus:translate-x-0 xl:p-7">
                    <div>
                      <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#ff8a68]">
                        Strategic Value
                      </p>
                      <h3 className="text-xl font-semibold leading-7 xl:text-2xl xl:leading-8">
                        {useCase.title || useCase}
                      </h3>
                      <p className="mt-3 border-t border-white/25 pt-3 text-sm leading-6 text-white/85 xl:text-[15px] xl:leading-7">
                        {useCase.desc || `Deliver a fast, scalable ${solution.name} experience with enterprise reliability and clear architectural standards.`}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. FREQUENTLY ASKED QUESTIONS */}
      <FAQSection
        twoColumn
        data={{
          sectionLabel: "FAQ",
          heading: `Frequently Asked Questions About ${solution.name}`,
          description: `Find clear answers about our ${solution.name} capabilities, engagement models, engineering team, and post-launch SLAs.`,
          items: solution.faq,
        }}
      />

      {/* 10. BOTTOM CONVERSION CTA BANNER */}
      <section className="px-6 pb-20 lg:px-8 lg:pb-28">
        <div className="relative mx-auto grid max-w-1180px items-center gap-8 overflow-hidden rounded-4xl border border-[#f46b45]/15 bg-[#fff8f5] p-7 shadow-[0_24px_70px_rgba(30,20,15,0.08)] sm:p-12 lg:grid-cols-[auto_1fr_auto] lg:gap-10 lg:p-14">
          <div className="absolute -right-24 -top-28 h-72 w-72 rounded-full border-55 border-[#f46b45]/8" />
          <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f46b45] text-3xl text-white shadow-xl shadow-[#f46b45]/20">
            ✦
          </div>
          <div className="relative max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f46b45]">
              Let&apos;s build together
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#171717] sm:text-4xl">
              Ready to create your {solution.name} experience?
            </h2>
            <p className="mt-4 leading-7 text-gray-600">
              Tell us about your technical roadmap and our engineering leadership will get back to you with a concrete plan.
            </p>
          </div>
          <Link
            href="/contact-us"
            className="relative inline-flex w-fit shrink-0 items-center gap-2 rounded-xl bg-[#f46b45] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#f46b45]/20 transition hover:-translate-y-1 hover:bg-[#dd5937] hover:shadow-xl"
          >
            Discuss Your Requirements <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
