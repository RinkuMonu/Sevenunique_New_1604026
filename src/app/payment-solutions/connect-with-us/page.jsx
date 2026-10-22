import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { paymentSolutionsData } from "../paymentData";

const offices = [
  {
    city: "Jaipur",
    title: "Jaipur Head Office",
    address: "Plot No 97, Dakshinpuri - I Shrikishan, Sanganer, Jagatpura, Jaipur, Rajasthan 302017",
    phone: "+91 141-4511098",
    email: "info@sevenunique.com",
  },
  {
    city: "Mumbai",
    title: "Mumbai Office",
    address: "No. 101/2, Vakratunda Corporate Park, Off Aarey Road, Goregaon East, Mumbai – 400063",
    phone: "+91 141-4511098",
    email: "info@sevenunique.com",
  },
  {
    city: "Dubai",
    title: "UAE Office",
    address: "Office Number 01-02, C-1 Building, Ajman Free Zone, Dubai, United Arab Emirates",
    phone: "+971 55 000 0000",
    email: "salesuae@sevenunique.com",
  },
  {
    city: "USA",
    title: "USA Office",
    address: "514 State Shelton Street Garden, Wisconsin, USA – 55309",
    phone: "+1 414 000 0000",
    email: "salesusa@sevenunique.com",
  },
];

export const metadata = {
  title: "Connect With Our Payment Team | SevenUnique",
  description:
    "Tell SevenUnique about your payment solution requirements and connect with our fintech team.",
};

export default function PaymentConnectPage() {
  return (
    <main className="bg-white">
      {/* Compact payment-specific introduction keeps the form close to the top. */}
      <section className="relative isolate overflow-hidden border-b border-[#f46b45]/10 bg-linear-to-br from-[#fff7f3] via-white to-[#fff0eb] px-6 py-10 lg:px-8 lg:py-12">
        <div className="absolute -right-20 -top-36 h-72 w-72 rounded-full border-55 border-[#f46b45]/8" />
        <div className="relative mx-auto max-w-1180px">
          <nav className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/payment-solutions">Payment Solutions</Link>
            <span>/</span>
            <span className="text-[#f46b45]">Connect With Us</span>
          </nav>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f46b45]">Payment solutions</p>
          <h1 className="mt-3 max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-[#171717] sm:text-5xl">Let&apos;s build a better payment experience.</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">Share your goals, users, and integration requirements. Our payment solution team will help identify the right next step.</p>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-1280px gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          {/* Left column copied from the existing Support page. */}
          <aside>
            <Image src="/sevenLogo.png" alt="SevenUnique" width={140} height={54} className="h-auto w-140px" />
            <h2 className="mt-8 text-[32px] font-bold leading-[1.15] text-[#111] md:text-[42px]">Get in touch with our team</h2>
            <p className="mt-4 text-[15px] leading-7 text-gray-500">We help startups and enterprises create scalable digital products with modern technologies.</p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {offices.map((office) => (
                <article key={office.city} className="rounded-3xl border border-gray-200 p-5 transition-all duration-300 hover:border-[#f4622a]">
                  <div className="mb-4 flex items-center gap-2">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#fff4ef]">
                      <MapPin size={18} className="text-[#f4622a]" strokeWidth={2.4} />
                    </span>
                    <div>
                      <h3 className="text-[15px] font-semibold text-[#111]">{office.city}</h3>
                      <p className="text-[12px] text-gray-400">{office.title}</p>
                    </div>
                  </div>
                  <p className="mb-4 text-[13px] leading-6 text-gray-600">{office.address}</p>
                  <div className="space-y-2">
                    <p className="flex items-center gap-2 text-[13px] font-medium text-[#111]"><Phone size={15} className="text-[#f4622a]" strokeWidth={2.5} />{office.phone}</p>
                    <p className="flex items-center gap-2 break-all text-[13px] font-medium text-[#111]"><Mail size={15} className="text-[#f4622a]" strokeWidth={2.5} />{office.email}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 overflow-hidden rounded-[28px] border border-gray-200">
              <iframe src="https://www.google.com/maps?q=Jaipur,Rajasthan&output=embed" width="100%" height="240" loading="lazy" title="SevenUnique Jaipur office" className="w-full" />
            </div>
          </aside>

          {/* Mailto keeps this page frontend-only until a form backend is connected. */}
          <form
            action="mailto:hello@sevenunique.com?subject=Payment%20Solution%20Enquiry"
            method="post"
            encType="text/plain"
            className="h-fit w-full max-w-540px justify-self-end rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_16px_45px_rgba(30,20,15,0.07)] sm:p-8 lg:sticky lg:top-24"
          >
            <div className="mb-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f46b45]">Payment enquiry</p>
              <h2 className="mt-2 text-2xl font-semibold text-[#171717]">Send us a message</h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full name" name="Name" placeholder="Your full name" required />
              <Field label="Work email" name="Email" type="email" placeholder="you@company.com" required />
              <div className="sm:col-span-2"><Field label="Phone number" name="Phone" type="tel" placeholder="Your contact number" /></div>
              {/* Button-style radio options replace the native dropdown. */}
              <fieldset className="sm:col-span-2">
                <legend className="mb-3 text-base font-semibold text-[#171717]">Select Payment Solution</legend>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {[...Object.values(paymentSolutionsData).map((solution) => solution.name), "Multiple or custom solutions"].map((name) => (
                    <label key={name} className="cursor-pointer">
                      <input type="radio" name="Payment solution" value={name} required className="peer sr-only" />
                      <span className="flex min-h-12 items-center justify-center rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-center text-xs font-semibold leading-4 text-[#171717] transition duration-300 hover:border-[#f46b45]/40 hover:shadow-sm peer-checked:border-[#171717] peer-checked:bg-[#171717] peer-checked:text-white peer-focus-visible:ring-4 peer-focus-visible:ring-[#f46b45]/20 sm:text-sm">
                        {name}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>
              <label className="sm:col-span-2">
                <span className="mb-3 block text-base font-semibold text-[#171717]">Project Details</span>
                <textarea name="Requirements" rows={4} required placeholder="Briefly describe what you need." className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm leading-6 text-[#171717] outline-none transition placeholder:text-gray-400 focus:border-[#f46b45] focus:ring-4 focus:ring-[#f46b45]/10" />
              </label>
            </div>
            <div className="mt-6 flex justify-end">
              <button type="submit" className="inline-flex min-w-fit shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#f46b45] px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-[#f46b45]/15 transition hover:-translate-y-0.5 hover:bg-[#dc5938]">
                Send Message <span aria-hidden="true">→</span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

function Field({ label, name, type = "text", placeholder, required = false }) {
  return (
    <label>
      <span className="mb-2 block text-sm font-semibold text-[#171717]">{label}</span>
      <input name={name} type={type} placeholder={placeholder} required={required} className="h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-[#171717] outline-none transition placeholder:text-gray-400 focus:border-[#f46b45] focus:ring-4 focus:ring-[#f46b45]/10" />
    </label>
  );
}
