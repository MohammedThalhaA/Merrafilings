"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import ServiceSearchModal from "@/components/ServiceSearchModal";
import {
  User,
  Calendar,
  Clock,
  Sparkles,
  ArrowRight,
  FileText,
  Search,
  MessageCircle,
  ChevronRight,
  ShieldCheck,
  Award,
  CheckCircle2,
  Building2,
  Briefcase,
  Receipt,
  Scale,
  Globe2,
  SendHorizontal,
  Landmark,
  FileCheck,
  AlertTriangle,
  FileSignature,
} from "lucide-react";

export interface Form15caGuideItem {
  slug: string;
  title: string;
  href: string;
  shortTitle: string;
}

export const FORM15CA_RELATED_GUIDES: Form15caGuideItem[] = [
  {
    slug: "form-145-guide-for-foreign-remmittance",
    title: "Understanding Form 145/146 under the Income Tax Act, 2025 for Foreign Remittance",
    href: "/15ca-15cb-filing/form-145-guide-for-foreign-remmittance",
    shortTitle: "Form 145 & 146 Guide",
  },
  {
    slug: "essential-documents-for-15ca15cb-filing-guide",
    title: "Documents Required for 15CA-15CB Filing: A Comprehensive Guide",
    href: "/15ca-15cb-filing/essential-documents-for-15ca15cb-filing-guide",
    shortTitle: "Documents Required for 15CA-15CB",
  },
  {
    slug: "comprehensive-guide-to-15ca-15cb-filing",
    title: "Complete Guide to 15CA 15CB Filings in 2023",
    href: "/15ca-15cb-filing/comprehensive-guide-to-15ca-15cb-filing",
    shortTitle: "Complete Guide to 15CA 15CB",
  },
  {
    slug: "15ca15cb-filing-foreign-remittance-compliance",
    title: "Understanding 15CA-15CB Filing: Compliance for Foreign Remittances",
    href: "/15ca-15cb-filing/15ca15cb-filing-foreign-remittance-compliance",
    shortTitle: "Foreign Remittance Compliance",
  },
  {
    slug: "essential-guide-to-required-15ca15cb-filing",
    title: "15CA-15CB Filing Online in India Compliance Guide",
    href: "/15ca-15cb-filing/essential-guide-to-required-15ca15cb-filing",
    shortTitle: "15CA-15CB Online Compliance Guide",
  },
];

interface Form15caGuideLayoutProps {
  currentSlug: string;
  title?: string;
  breadcrumbLabel?: string;
  metaPublishedDate?: string;
  readingTime?: string;
  authorName?: string;
  children: React.ReactNode;
}

export default function Form15caGuideLayout({
  currentSlug,
  title,
  breadcrumbLabel,
  metaPublishedDate = "AY 2026-27 Compliant / Section 195",
  readingTime = "8 min read",
  authorName = "Merrafilings International Tax Desk",
  children,
}: Form15caGuideLayoutProps) {
  const activeGuide = FORM15CA_RELATED_GUIDES.find((g) => g.slug === currentSlug);
  const displayTitle = title || activeGuide?.title || "Foreign Remittance Form 15CA & 15CB Guide";
  const displayBreadcrumb = breadcrumbLabel || activeGuide?.shortTitle || displayTitle;

  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Foreign Remittance 15CA & 15CB Advisory");
  const [searchOpen, setSearchOpen] = useState(false);

  const openContact = (topic?: string) => {
    setModalTitle(topic || "Foreign Remittance 15CA & 15CB Advisory");
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF9] text-[#111827] flex flex-col font-sans selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar onOpenSearch={() => setSearchOpen(true)} onOpenContact={() => openContact()} />

      {/* Main Container */}
      <main className="flex-1 w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-[12.5px] font-normal text-slate-700 flex-wrap">
            <li>
              <Link href="/" className="hover:text-[#155EEF] transition-colors">
                Home
              </Link>
            </li>
            <li className="text-slate-300">/</li>
            <li>
              <Link href="/income-tax" className="hover:text-[#155EEF] transition-colors">
                Income Tax
              </Link>
            </li>
            <li className="text-slate-300">/</li>
            <li>
              <Link
                href="/15ca-15cb-filing"
                className="hover:text-[#155EEF] transition-colors font-medium text-slate-800"
              >
                Foreign Remittance (15CA &amp; 15CB)
              </Link>
            </li>
            <li className="text-slate-300">/</li>
            <li className="text-slate-700 font-medium truncate max-w-[280px] sm:max-w-[400px]">
              {displayBreadcrumb}
            </li>
          </ol>
        </nav>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Main Article Body (8 cols) */}
          <article className="lg:col-span-8 bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xs">
            {/* Header / Meta */}
            <header className="mb-8 pb-6 border-b border-slate-100">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
                <Globe2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Section 195 &amp; Cross-Border Tax Compliance Desk</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-slate-950 tracking-tight leading-tight mb-4">
                {displayTitle}
              </h1>

              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-[13px] text-slate-700 pt-2 font-normal">
                <div className="flex items-center gap-1.5">
                  <User className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold text-slate-900">{authorName}</span>
                </div>
                <span className="text-slate-300 hidden sm:inline">&bull;</span>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>{metaPublishedDate}</span>
                </div>
                <span className="text-slate-300 hidden sm:inline">&bull;</span>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>{readingTime}</span>
                </div>
                <span className="text-slate-300 hidden sm:inline">&bull;</span>
                <div className="flex items-center gap-1 text-emerald-700 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Verified by Senior International Tax CA</span>
                </div>
              </div>
            </header>

            {/* Guide Content */}
            <div className="prose prose-slate max-w-none text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
              {children}
            </div>

            {/* Article Footer & Consultation Bar */}
            <footer className="mt-12 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-700 font-normal">
                <span>Sending money abroad? </span>
                <button
                  type="button"
                  onClick={() => openContact("15CA/15CB Guide Bottom Bar Advisory")}
                  className="text-emerald-700 font-semibold hover:underline inline-flex items-center gap-1"
                >
                  Consult an International Tax CA <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              <div className="flex items-center gap-2">
                <Link
                  href="/15ca-15cb-filing"
                  className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
                >
                  View 15CA/15CB Packages
                </Link>
                <button
                  type="button"
                  onClick={() => openContact("15CA/15CB Guide Schedule Call")}
                  className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                >
                  Schedule Call
                </button>
              </div>
            </footer>
          </article>

          {/* Right Sidebar (4 cols) */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Widget 1: Consult Experts (Exact match from screenshot) */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2 shrink-0">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 border-2 border-white flex items-center justify-center text-xs font-bold text-emerald-800 shadow-xs">
                      SK
                    </div>
                    <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-xs font-bold text-blue-800 shadow-xs">
                      PS
                    </div>
                    <div className="w-8 h-8 rounded-full bg-purple-100 border-2 border-white flex items-center justify-center text-xs font-bold text-purple-800 shadow-xs">
                      RV
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-[13px] font-semibold text-slate-900 leading-tight">
                      Consult <span className="text-[#155EEF]">Experts</span>
                    </h3>
                    <p className="text-[11px] text-slate-600 font-normal">
                      Free 15-min foreign remittance &amp; DTAA assessment
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => openContact("Foreign Remittance Tax Consultation with Experts")}
                  className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-medium text-xs transition-colors cursor-pointer"
                >
                  Connect
                </button>
              </div>
            </div>

            {/* Widget 2: Related Guides Card (With Emerald Top Border matching Screenshot) */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-2xs relative overflow-hidden border-t-[3px] border-t-emerald-500">
              <div className="flex items-center gap-2 mb-3.5 pb-2 border-b border-slate-100">
                <FileText className="w-4 h-4 text-emerald-600" />
                <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-900">
                  Related Guides
                </h2>
              </div>
              <ul className="space-y-2 text-[13px]">
                {FORM15CA_RELATED_GUIDES.map((item) => {
                  const isActive = item.slug === currentSlug;
                  return (
                    <li key={item.slug}>
                      <Link
                        href={item.href}
                        className={`group flex items-start gap-2.5 p-2 rounded-xl text-[13px] leading-snug transition-all duration-200 ${
                          isActive
                            ? "bg-emerald-50 text-emerald-800 font-semibold border border-emerald-200/60 shadow-3xs"
                            : "text-slate-800 hover:text-emerald-700 hover:bg-slate-50 font-normal"
                        }`}
                      >
                        <span
                          className={`mt-0.5 shrink-0 text-sm transition-transform duration-200 group-hover:translate-x-0.5 ${
                            isActive
                              ? "text-emerald-600 font-bold"
                              : "text-slate-400 group-hover:text-emerald-600"
                          }`}
                        >
                          &rarr;
                        </span>
                        <span className="line-clamp-2">
                          {item.title}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* Live Chat with Experts Button (Matching Screenshot) */}
              <div className="pt-4 mt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => openContact("Live Chat Foreign Remittance 15CA & 15CB Support")}
                  className="w-full py-3 px-4 min-h-[44px] rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-medium text-xs sm:text-[13px] flex items-center justify-center gap-2 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Live Chat with Tax Experts</span>
                </button>
              </div>
            </div>

            {/* Widget 3: Need Assistance with Form 15CA & 15CB? Card */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-2xs">
              <h3 className="text-sm font-semibold text-slate-900 mb-2">
                Need Fast-Track 15CA &amp; 15CB Certification?
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
                Avoid costly bank wire delays and 100% tax disallowances. Our practicing Chartered Accountants review your contracts, verify TRC / Form 10F, optimize DTAA withholding rates, and issue UDIN certificates swiftly.
              </p>
              <ul className="space-y-2 text-xs text-slate-700 mb-4 font-normal">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Form 15CB CA UDIN Certificate in 3–4 Hours</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>DTAA Treaty Relief &amp; TRC / 10F Verification</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Form 15CA Part A, B, C &amp; D Instant E-Filing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Authorised Dealer (AD) Bank Clearance Guarantee</span>
                </li>
              </ul>
              <Link
                href="/15ca-15cb-filing"
                className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs transition-colors"
              >
                <span>Request 15CB Certificate &amp; 15CA Filing</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Widget 4: Statutory Penalty Notice Card */}
            <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-sm space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                <span className="text-xs font-semibold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                  Statutory Non-Compliance Penalties
                </span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-start">
                  <span className="text-slate-400">Non-Filing of 15CA/CB:</span>
                  <span className="text-rose-300 font-bold text-right">₹1,00,000 (Sec 271-I)</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-slate-400">Inaccurate Information:</span>
                  <span className="text-rose-300 font-bold text-right">₹1,00,000 + 270A</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-slate-400">Non-Deduction of TDS:</span>
                  <span className="text-amber-300 font-semibold text-right">100% Expense Disallowance (40(a)(i))</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-slate-400">Late TDS Deposit:</span>
                  <span className="text-white font-medium text-right">1.5% Interest/Month (201(1A))</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-400 leading-snug pt-2 border-t border-slate-800">
                Authorised Dealer (AD) Banks are strictly prohibited by RBI &amp; Section 195(6) from transmitting funds overseas without a verified Form 15CA acknowledgment number.
              </p>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        serviceTitle={modalTitle}
      />
      <ServiceSearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectService={(service) => openContact(service)}
      />
    </div>
  );
}
