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
  Gavel,
  ShieldAlert,
  Search,
  KeyRound,
  FileSpreadsheet,
} from "lucide-react";

export interface IncomeTaxNoticeGuideItem {
  slug: string;
  title: string;
  href: string;
  shortTitle: string;
}

export const INCOME_TAX_NOTICE_RELATED_GUIDES: IncomeTaxNoticeGuideItem[] = [
  {
    slug: "tax-notice-consultation-your-expert-guidance",
    title: "Tax Notice Consultation: Your Expert Guidance",
    href: "/income-tax-notice/tax-notice-consultation-your-expert-guidance",
    shortTitle: "Tax Notice Consultation",
  },
  {
    slug: "income-tax-notice-response-effective-steps",
    title: "Understanding Your Income Tax Notice Response: Effective Steps",
    href: "/income-tax-notice/income-tax-notice-response-effective-steps",
    shortTitle: "Understanding Your Income Tax Notice Response",
  },
  {
    slug: "clear-your-tax-notice-with-indiafiling-5-simple-steps",
    title: "Clear Your Tax Notice with Merrafilings in 5 Simple Steps",
    href: "/income-tax-notice/clear-your-tax-notice-with-indiafiling-5-simple-steps",
    shortTitle: "Clear Your Tax Notice in 5 Steps",
  },
  {
    slug: "effective-income-tax-notice-response-guide",
    title: "Responding to an Income Tax Notice: Effective Handling Guide",
    href: "/income-tax-notice/effective-income-tax-notice-response-guide",
    shortTitle: "Responding to an Income Tax Notice",
  },
  {
    slug: "deemed-letout",
    title: "Concept of Deemed Let-Out Property under the Income Tax Act, 1961",
    href: "/income-tax-notice/deemed-letout",
    shortTitle: "Concept of Deemed Let-Out Property",
  },
];

interface IncomeTaxNoticeGuideLayoutProps {
  currentSlug: string;
  title?: string;
  breadcrumbLabel?: string;
  metaPublishedDate?: string;
  readingTime?: string;
  authorName?: string;
  children: React.ReactNode;
}

export default function IncomeTaxNoticeGuideLayout({
  currentSlug,
  title,
  breadcrumbLabel,
  metaPublishedDate = "AY 2026-27 Compliant / Section 143(1) - 148",
  readingTime = "8 min read",
  authorName = "Merrafilings Direct Tax Litigation & Assessment Defense Desk",
  children,
}: IncomeTaxNoticeGuideLayoutProps) {
  const activeGuide = INCOME_TAX_NOTICE_RELATED_GUIDES.find((g) => g.slug === currentSlug);
  const displayTitle = title || activeGuide?.title || "Income Tax Notice Consultation & Defense Guide";
  const displayBreadcrumb = breadcrumbLabel || activeGuide?.shortTitle || displayTitle;

  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Income Tax Notice Legal Consultation");
  const [searchOpen, setSearchOpen] = useState(false);

  const openContact = (topic?: string) => {
    setModalTitle(topic || "Income Tax Notice Legal Consultation");
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
              <Link href="/income-tax-notice" className="hover:text-[#155EEF] transition-colors">
                Income Tax Notice Online Response
              </Link>
            </li>
            <li className="text-slate-300">/</li>
            <li className="text-slate-900 font-medium truncate max-w-[280px] sm:max-w-[420px]">
              {displayBreadcrumb}
            </li>
          </ol>
        </nav>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Main Article Content (Left Column) */}
          <article className="lg:col-span-8 bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xs">
            {/* Header Desk Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-5">
              <Hash className="w-3.5 h-3.5 text-emerald-600" />
              <span>Direct Tax Litigation &amp; Faceless Assessment Desk – AY 2026-27</span>
            </div>

            {/* Main H1 Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-normal text-slate-900 tracking-tight leading-tight mb-5">
              {displayTitle}
            </h1>

            {/* Metadata Bar */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 pb-6 mb-8 border-b border-slate-100 text-[13px] text-slate-500 font-normal">
              <div className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-emerald-600" />
                <span className="text-slate-800 font-medium">{authorName}</span>
              </div>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-slate-400" />
                <span>{metaPublishedDate}</span>
              </div>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>{readingTime}</span>
              </div>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Verified by Senior Chartered Accountant &amp; Tax Litigation Specialist</span>
              </div>
            </div>

            {/* Page Body Content */}
            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-[15px] space-y-6">
              {children}
            </div>

            {/* Bottom Service CTA Bar */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50/60 via-slate-50 to-teal-50/40 border border-emerald-200/70 shadow-2xs flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-1.5 text-center md:text-left">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-100/70 px-2.5 py-0.5 rounded-full inline-block">
                    Official Notice Defense Desk
                  </span>
                  <h3 className="text-lg sm:text-xl font-normal text-slate-900 tracking-tight">
                    Received an Income Tax Notice or Intimation?
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-600 max-w-xl">
                    Authenticate your Document Identification Number (DIN), reconcile Form 26AS/AIS mismatches, draft point-by-point formal legal replies, and submit responses online via the e-Proceedings portal with practicing Chartered Accountants.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2.5 w-full md:w-auto shrink-0">
                  <button
                    onClick={() => openContact("Income Tax Notice Legal Consultation")}
                    className="cursor-pointer inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-medium text-xs hover:bg-emerald-700 transition shadow-sm hover:shadow"
                  >
                    <span>Consult Litigation CA Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <Link
                    href="/income-tax-notice"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 text-xs font-medium hover:bg-slate-50 transition"
                  >
                    <span>View Notice Defense Packages</span>
                  </Link>
                </div>
              </div>
            </div>
          </article>

          {/* Sticky Sidebar (Right Column) */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            {/* Widget 1: Consult Experts (CA Avatars) */}
            <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  {/* Avatar Trio */}
                  <div className="flex -space-x-2 shrink-0">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 border-2 border-white flex items-center justify-center text-[10px] font-semibold text-emerald-800">
                      SK
                    </div>
                    <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-[10px] font-semibold text-blue-800">
                      PS
                    </div>
                    <div className="w-8 h-8 rounded-full bg-purple-100 border-2 border-white flex items-center justify-center text-[10px] font-semibold text-purple-800">
                      RV
                    </div>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-[13px] font-semibold text-slate-900 leading-tight">
                      Consult <span className="text-[#155EEF]">Tax Experts</span>
                    </p>
                    <p className="text-[11px] text-slate-500 leading-tight truncate">
                      Free 15-min notice &amp; DIN verification review
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => openContact("Direct Tax Expert Consultation")}
                  className="cursor-pointer px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-semibold border border-emerald-200 transition shrink-0"
                >
                  Connect
                </button>
              </div>
            </div>

            {/* Widget 2: Related Guides Card with emerald top border & Live Chat button */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xs p-5 sm:p-6 border-t-[3px] border-t-emerald-500">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-4 h-4 text-emerald-600" />
                <h3 className="text-sm font-semibold text-slate-900 tracking-tight">
                  Related Guides
                </h3>
              </div>
              <nav className="space-y-1.5" aria-label="Related Tax Notice Guides">
                {INCOME_TAX_NOTICE_RELATED_GUIDES.map((guide) => {
                  const isActive = guide.slug === currentSlug;
                  return (
                    <Link
                      key={guide.slug}
                      href={guide.href}
                      className={`group flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs transition-all ${
                        isActive
                          ? "bg-emerald-50/80 text-emerald-900 font-semibold border border-emerald-200/80 shadow-2xs"
                          : "text-slate-600 hover:text-emerald-700 hover:bg-slate-50 font-normal"
                      }`}
                    >
                      <ArrowRight
                        className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                          isActive
                            ? "text-emerald-600 translate-x-0.5"
                            : "text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5"
                        }`}
                      />
                      <span className="line-clamp-2 leading-relaxed">{guide.title}</span>
                    </Link>
                  );
                })}
              </nav>

              {/* Prominent Live chat with experts button */}
              <div className="mt-5 pt-4 border-t border-slate-100">
                <button
                  onClick={() => openContact("Live Chat Notice Assistance")}
                  className="w-full cursor-pointer inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#00B074] hover:bg-[#009663] text-white text-xs sm:text-sm font-semibold shadow-sm hover:shadow transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Live chat with experts</span>
                </button>
              </div>
            </div>

            {/* Widget 3: Notice Resolution & Assessment Defense Suite */}
            <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 border border-purple-100 flex items-center justify-center">
                  <Gavel className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-900">
                    Notice Defense &amp; Scrutiny Retainer
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    Comprehensive litigation assistance across all sections
                  </p>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-600 pt-1 border-t border-slate-100">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Section 143(1) Adjustment Intimation &amp; 154 Rectification</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Section 139(9) Defective Return Resolution (15-Day Limit)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Section 142(1) Inquiry &amp; Accounts Production Defense</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Section 143(2) Faceless Scrutiny &amp; 148 Reassessment</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Stay on Section 156 Demand under Section 220(6) &amp; Appeals</span>
                </div>
              </div>

              <button
                onClick={() => openContact("Notice Defense & Scrutiny Retainer")}
                className="w-full cursor-pointer py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition text-center shadow-2xs"
              >
                Request Notice Assessment Retainer
              </button>
            </div>

            {/* Widget 4: Statutory Penalty Alert Card */}
            <div className="p-5 rounded-2xl border border-rose-200 bg-rose-50/40 shadow-2xs space-y-3">
              <div className="flex items-center gap-2 text-rose-800">
                <ShieldAlert className="w-4 h-4 shrink-0 text-rose-600" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Statutory Consequences of Non-Response
                </span>
              </div>
              <ul className="text-[11.5px] text-slate-700 space-y-2 leading-relaxed">
                <li className="flex items-start gap-1.5">
                  <span className="text-rose-600 font-bold">•</span>
                  <span><strong>Section 144:</strong> Ex-Parte Best Judgment Assessment (officer estimates income unilaterally).</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-rose-600 font-bold">•</span>
                  <span><strong>Section 272A:</strong> Fixed penalty of ₹10,000 for each failure to comply with Section 142(1).</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-rose-600 font-bold">•</span>
                  <span><strong>Section 270A:</strong> Penalty of 50% to 200% of tax on under-reported or misreported income.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-rose-600 font-bold">•</span>
                  <span><strong>Section 220(2):</strong> Mandatory interest of 1.00% per month on outstanding Section 156 demands.</span>
                </li>
              </ul>
              <div className="pt-2 border-t border-rose-200/60">
                <p className="text-[11px] text-rose-700 font-medium">
                  Never ignore an income tax notice. Prompt action preserves statutory appeal rights under Section 246A.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />

      {/* Global Modals */}
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
