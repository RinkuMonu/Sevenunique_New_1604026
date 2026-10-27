"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-[#0b0d13] text-slate-300 overflow-hidden border-t border-white/10 selection:bg-[#f4622a]/30 selection:text-white font-sans">
      {/* Ambient background glow blobs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-gradient-to-br from-[#f4622a]/10 via-purple-600/5 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[450px] h-[350px] bg-gradient-to-tl from-[#f4622a]/10 via-blue-600/5 to-transparent rounded-full blur-[140px] pointer-events-none" />

      {/* 1. PRE-FOOTER CONVERSION CTA BANNER */}
      <div className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-12 sm:py-16">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-white/[0.04] via-white/[0.02] to-transparent p-7 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-md">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#f4622a]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f4622a]/15 border border-[#f4622a]/30 text-[#ff7650] text-xs font-semibold tracking-wider uppercase">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Innovate • Engineer • Scale</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                  Ready to build something uniquely yours?
                </h2>
                <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                  Every project deserves a partner who sees it differently. At SevenUnique, we bring fresh thinking, senior engineering discipline, and a tailored approach to every engagement — no shortcuts, just work that fits your growth.
                </p>
                <div className="pt-2 flex flex-wrap gap-4 text-xs sm:text-sm text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#f4622a]" />
                    Top 1% Senior Engineers
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#f4622a]" />
                    ISO 9001 & 27001 Certified
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#f4622a]" />
                    Guaranteed NDA & IP Protection
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5 lg:items-end justify-center">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center gap-2 bg-[#f4622a] hover:bg-[#d94f1c] text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all duration-300 text-center"
                >
                  <span>Discuss Your Requirements</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/schedule-a-call-page"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-medium text-sm sm:text-base px-6 py-3.5 rounded-xl border border-white/15 transition-all duration-300 text-center backdrop-blur-sm"
                >
                  <span>Schedule a Discovery Call</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN FOOTER CONTENT COLUMNS */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

          {/* COLUMN 1: BRAND & GLOBAL PRESENCE (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block">
              <div className="inline-flex items-center rounded-xl bg-white p-2.5 shadow-md">
                <Image
                  src="/images/logo-2.png"
                  alt="SevenUnique Tech Solutions"
                  width={200}
                  height={65}
                  className="object-contain h-9 sm:h-10 w-auto"
                />
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Engineering full-cycle digital transformation. We design and deliver custom software, scalable cloud architectures, AI automation suites, and enterprise fintech platforms for high-growth businesses.
            </p>

            <address className="not-italic space-y-3.5 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#f4622a] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-200 block">Corporate Headquarters</strong>
                  Jaipur, Rajasthan, India • Serving Clients Globally
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#f4622a] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-200 block">Working Hours</strong>
                  Monday – Friday: 10:00 AM – 07:00 PM IST
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#f4622a] shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+918741886688" className="hover:text-white transition-colors block">
                    +91 8741886688 (Mobile / WhatsApp)
                  </a>
                  <a href="tel:+911414511098" className="hover:text-white transition-colors block text-xs text-slate-500">
                    +91 141-4511098 (Board Line)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#f4622a] shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:info@sevenunique.com" className="hover:text-white transition-colors block">
                    info@sevenunique.com
                  </a>
                  <a href="mailto:support@sevenunique.com" className="hover:text-white transition-colors block text-xs text-slate-500">
                    support@sevenunique.com
                  </a>
                </div>
              </div>
            </address>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-2.5">
              <Link
                href="https://www.linkedin.com/company/sevenuniquetech/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-[#f4622a] hover:text-white hover:border-[#f4622a] transition-all duration-300"
              >
                <FaLinkedinIn size={14} />
              </Link>
              <Link
                href="https://x.com/sevenuniqu42041"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X Twitter"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-[#f4622a] hover:text-white hover:border-[#f4622a] transition-all duration-300"
              >
                <FaXTwitter size={14} />
              </Link>
              <Link
                href="https://www.instagram.com/sevenuniquetech/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-[#f4622a] hover:text-white hover:border-[#f4622a] transition-all duration-300"
              >
                <FaInstagram size={14} />
              </Link>
              <Link
                href="https://www.facebook.com/people/SevenUnique-Tech-Solutions-Pvtltd/61556669918427/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-[#f4622a] hover:text-white hover:border-[#f4622a] transition-all duration-300"
              >
                <FaFacebookF size={14} />
              </Link>
              <Link
                href="https://www.youtube.com/@Sevenuniquetech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-[#f4622a] hover:text-white hover:border-[#f4622a] transition-all duration-300"
              >
                <FaYoutube size={14} />
              </Link>
            </div>
          </div>

          {/* COLUMN 2: ENGINEERING & AI (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white border-l-2 border-[#f4622a] pl-2.5">
              Engineering & AI
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="/services/ai-development" className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-200">
                  AI & Copilot Engineering
                </Link>
              </li>
              <li>
                <Link href="/services/machine-learning" className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-200">
                  Machine Learning & MLOps
                </Link>
              </li>
              <li>
                <Link href="/services/backend-development" className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-200">
                  Cloud Backend & APIs
                </Link>
              </li>
              <li>
                <Link href="/services/web-development" className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-200">
                  Web Applications
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-development" className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-200">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/services/frontend-development" className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-200">
                  Frontend Engineering
                </Link>
              </li>
              <li>
                <Link href="/services/qa-testing" className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-200">
                  QA & Test Automation
                </Link>
              </li>
              <li>
                <Link href="/services/ui-ux-design" className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-200">
                  UI/UX Product Design
                </Link>
              </li>
              <li className="pt-1">
                <Link href="/services" className="text-xs font-semibold text-[#ff7650] hover:text-orange-400 inline-flex items-center gap-1">
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: FINTECH & PAYMENTS (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white border-l-2 border-[#f4622a] pl-2.5">
              Fintech & Payments
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="/payment-solutions/payin" className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-200">
                  PayIn Collections API
                </Link>
              </li>
              <li>
                <Link href="/payment-solutions/payout" className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-200">
                  Instant Payouts Disbursal
                </Link>
              </li>
              <li>
                <Link href="/payment-solutions/dmt" className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-200">
                  Domestic Money Transfer
                </Link>
              </li>
              <li>
                <Link href="/payment-solutions/aeps" className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-200">
                  AEPS Banking Service
                </Link>
              </li>
              <li>
                <Link href="/payment-solutions/bbps-bill-payments" className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-200">
                  BBPS Utility Payments
                </Link>
              </li>
              <li>
                <Link href="/payment-solutions/pan-verification-otp" className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-200">
                  Identity & KYC Verification
                </Link>
              </li>
              <li>
                <Link href="/payment-solutions/bus-booking" className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-200">
                  Travel & Booking APIs
                </Link>
              </li>
              <li className="pt-1">
                <Link href="/payment-solutions" className="text-xs font-semibold text-[#ff7650] hover:text-orange-400 inline-flex items-center gap-1">
                  All Payment Solutions →
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: COMPANY & CULTURE (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white border-l-2 border-[#f4622a] pl-2.5">
              Company
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="/about-us" className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-200">
                  About SevenUnique
                </Link>
              </li>
              <li>
                <Link href="/about-us#directors-voice" className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-200">
                  Leadership & Mission
                </Link>
              </li>
              <li>
                <Link href="/our-work-page" className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-200">
                  Case Studies & Work
                </Link>
              </li>
              <li>
                <Link href="/technologies" className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-200">
                  Technology Ecosystem
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-200">
                  Industries Served
                </Link>
              </li>
              <li>
                <Link href="/awards" className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-200">
                  Awards & Recognition
                </Link>
              </li>
              <li>
                <Link href="/culture" className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-200">
                  Life & Culture
                </Link>
              </li>
              <li>
                <Link href="/jobOp" className="inline-flex items-center gap-1.5 hover:text-white hover:translate-x-1 transition-transform duration-200">
                  <span>Careers</span>
                  <span className="px-1.5 py-0.5 text-[10px] font-bold rounded bg-[#f4622a]/20 text-[#ff7650] border border-[#f4622a]/30">
                    Hiring
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 5: RESOURCES & LEGAL (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white border-l-2 border-[#f4622a] pl-2.5">
              Resources & Trust
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="/blog" className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-200">
                  Technical Blog & Insights
                </Link>
              </li>
              <li>
                <Link href="/schedule-a-call-page" className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-200">
                  Schedule Consultation
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-200">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-200">
                  Contact Support Desk
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/termsAndCondition" className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-200">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cancellationpolicy" className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-200">
                  Refund & Cancellation
                </Link>
              </li>
              <li>
                <Link href="/kycpolicy" className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-200">
                  KYC & Chargeback
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* 3. TRUST, COMPLIANCE & CERTIFICATIONS STRIP */}
        <div className="mt-14 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-6 text-xs text-slate-400">
              <span className="font-semibold text-slate-300 uppercase tracking-wider text-[11px]">
                Recognized & Certified:
              </span>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-white text-xs font-medium">ISO 9001:2015 & 27001</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-white text-xs font-medium">DPIIT Recognized Startup</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-white text-xs font-medium">PCI-DSS Ready</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                <ShieldCheck className="w-4 h-4 text-purple-400 shrink-0" />
                <span className="text-white text-xs font-medium">MSME Registered</span>
              </div>
            </div>

            {/* Back to top button */}
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-300 hover:text-white transition-all cursor-pointer group"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* 4. BOTTOM COPYRIGHT & LEGAL BAR */}
      <div className="bg-[#07080c] border-t border-white/5 px-5 sm:px-8 lg:px-10 py-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-slate-400 font-medium">All Systems Operational</span>
            <span className="text-slate-700">|</span>
            <span>© {new Date().getFullYear()} SevenUnique Tech Solutions Pvt. Ltd. All rights reserved.</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-slate-400">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/apiterms" className="hover:text-white transition-colors">
              API Terms
            </Link>
            <Link href="/termsAndCondition" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/cancellationpolicy" className="hover:text-white transition-colors">
              Cancellation & Refund
            </Link>
            <Link href="/kycpolicy" className="hover:text-white transition-colors">
              KYC & Chargeback
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
