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
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  Hash,
  AlertTriangle,
  Building2,
  FileCheck,
  Scale,
  Receipt,
  RotateCcw,
  Calculator,
  History,
} from "lucide-react";

export interface RevisedReturnGuideItem {
  slug: string;
  title: string;
  href: string;
  shortTitle: string;
}

export const REVISED_RETURN_RELATED_GUIDES: RevisedReturnGuideItem[] = [
  {
    slug: "file-a-revised-return-optimize-your-tax",
    title: "File a Revised Return: Optimize Your Tax",
    href: "/revised-return/file-a-revised-return-optimize-your-tax",
    shortTitle: "Optimize Your Tax with Revised Return",
  },
  {
    slug: "file-revised-return-required-documents",
    title: "File Revised Return - Required Documents & Process Guide",
    href: "/revised-return/file-revised-return-required-documents",
    shortTitle: "Required Documents for Revised Return",
  },
  {
    slug: "revised-return-filing",
    title: "Optimize Your Taxes with Revised Return Filing",
    href: "/revised-return/revised-return-filing",
    shortTitle: "Revised Return Filing Guide",
  },
  {
    slug: "revised-return-filing-easy-5-steps-guide",
    title: "Revised Return Filing: Easy 5 Steps Guide",
    href: "/revised-return/revised-return-filing-easy-5-steps-guide",
    shortTitle: "Easy 5-Step Filing Guide",
  },
  {
    slug: "how-to-file-a-revised-income-tax-return",
    title: "Revised Income Tax Return Online - How to File & Due Dates",
    href: "/revised-return/how-to-file-a-revised-income-tax-return",
    shortTitle: "How to File Revised ITR Online",
  },
];

interface RevisedReturnGuideLayoutProps {
  currentSlug: string;
  title?: string;
  breadcrumbLabel?: string;
  metaPublishedDate?: string;
  readingTime?: string;
  authorName?: string;
  children: React.ReactNode;
}

export default function RevisedReturnGuideLayout({
  currentSlug,
  title,
  breadcrumbLabel,
  metaPublishedDate = "AY 2026-27 Compliant / Section 139(5)",
  readingTime = "7 min read",
  authorName = "Merrafilings Direct Tax & ITR Rectification Desk",
  children,
}: RevisedReturnGuideLayoutProps) {
  const activeGuide = REVISED_RETURN_RELATED_GUIDES.find((g) => g.slug === currentSlug);
  const displayTitle = title || activeGuide?.title || "Revised Income Tax Return Guide";
  const displayBreadcrumb = breadcrumbLabel || activeGuide?.shortTitle || displayTitle;

  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Revised Return Filing Advisory");
  const [searchOpen, setSearchOpen] = useState(false);

  const openContact = (topic?: string) => {
    setModalTitle(topic || "Revised Return Filing Advisory");
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
                href="/revised-return"
                className="hover:text-[#155EEF] transition-colors font-medium text-slate-800"
              >
                Revised Return Filing Online
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
                <Hash className="w-3.5 h-3.5 text-emerald-600" />
                <span>Section 139(5) Rectification &amp; ITR-U Desk – AY 2026-27</span>
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
                  <span>Verified by Senior Chartered Accountant &amp; Direct Tax Specialist</span>
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
                <span>Discovered an error or missed deductions in your filed return? </span>
                <button
                  type="button"
                  onClick={() => openContact("Revised Return Bottom Bar Advisory")}
                  className="text-emerald-700 font-semibold hover:underline inline-flex items-center gap-1 cursor-pointer"
                >
                  Consult a Direct Tax Specialist <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              <div className="flex items-center gap-2">
                <Link
                  href="/revised-return"
                  className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
                >
                  View Revision Plans
                </Link>
                <button
                  type="button"
                  onClick={() => openContact("Revised Return Guide Schedule Call")}
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
                      Free 15-min ITR review, AIS reconciliation &amp; error analysis
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => openContact("Revised Return Consultation with Experts")}
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
                {REVISED_RETURN_RELATED_GUIDES.map((item) => {
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
                  onClick={() => openContact("Live Chat Revised Return & Tax Rectification Support")}
                  className="w-full py-3 px-4 min-h-[44px] rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-medium text-xs sm:text-[13px] flex items-center justify-center gap-2 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Live chat with experts</span>
                </button>
              </div>
            </div>

            {/* Widget 3: Fast-Track Section 139(5) & ITR-U Retainer Suite Card */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-2xs">
              <h3 className="text-sm font-semibold text-slate-900 mb-2">
                Need Fast-Track ITR Revision or Updated Return Filing?
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
                Rectify errors before 31st December with zero penalty, or regularize past financial years up to 24 months with Section 139(8A) Updated Return (ITR-U).
              </p>
              <ul className="space-y-2 text-xs text-slate-700 mb-4 font-normal">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Quoting 15-Digit Original Receipt No. &amp; Filing Date</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Full Reconciliation with AIS, TIS &amp; Form 26AS Ledgers</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Addition of Missed Chapter VIA Deductions (80C, 80D, 80G)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Switching Tax Regimes &amp; Correcting ITR Form Selection (ITR-1 to 3)</span>
                </li>
              </ul>
              <Link
                href="/revised-return"
                className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs transition-colors"
              >
                <span>File Revised Return Online</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Widget 4: Statutory Penalty & Deadline Notice Card */}
            <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-sm space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                <span className="text-xs font-semibold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                  Statutory Deadlines &amp; Risks
                </span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-start">
                  <span className="text-slate-400">Revised Return Deadline:</span>
                  <span className="text-emerald-400 font-bold text-right">31st Dec 2026 (Zero Penalty)</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-slate-400">Under-Reporting Penalty:</span>
                  <span className="text-rose-300 font-bold text-right">50% to 200% (Sec 270A)</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-slate-400">ITR-U Addl. Tax (0-12 Mos):</span>
                  <span className="text-amber-300 font-bold text-right">25% Addl. Tax (Sec 140B)</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-slate-400">ITR-U Addl. Tax (12-24 Mos):</span>
                  <span className="text-rose-400 font-bold text-right">50% Addl. Tax (Sec 140B)</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-slate-400">E-Verification Deadline:</span>
                  <span className="text-white font-medium text-right">Within 30 Days of Filing</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-400 leading-snug pt-2 border-t border-slate-800">
                Filing a revised return completely replaces the original return. Voluntarily rectifying omissions before receiving a Section 143(1)(a) defect or Section 148 notice fully eliminates under-reporting penalties.
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
