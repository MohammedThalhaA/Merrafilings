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
  MessageCircle,
  ChevronRight,
  Scale,
  CheckCircle2,
  AlertTriangle,
  Building2,
  FileCheck,
  Boxes,
  Calculator,
  ShieldCheck,
  Ban,
} from "lucide-react";

export interface Gstr10GuideItem {
  slug: string;
  title: string;
  href: string;
  shortTitle: string;
}

export const GSTR10_RELATED_GUIDES: Gstr10GuideItem[] = [
  {
    slug: "understanding-the-gst10-process-business-needs",
    title: "Understanding the GST-10 Process: A Business Necessity",
    href: "/gstr-10/understanding-the-gst10-process-business-needs",
    shortTitle: "GST-10 Process & Business Needs",
  },
  {
    slug: "gstr10-filing-ultimate-guide",
    title: "GSTR-10: Ultimate Guide on Final Return Filing",
    href: "/gstr-10/gstr10-filing-ultimate-guide",
    shortTitle: "GSTR-10 Ultimate Guide",
  },
  {
    slug: "understanding-gstr10-comprehensive-taxpayer-guide",
    title: "Understanding GSTR-10: Comprehensive Guide for Taxpayers",
    href: "/gstr-10/understanding-gstr10-comprehensive-taxpayer-guide",
    shortTitle: "Comprehensive Taxpayer Guide",
  },
  {
    slug: "gstr10-filing-who-needs-to-file-and-when",
    title: "GSTR-10 Filing Explained: Who Needs to File and When?",
    href: "/gstr-10/gstr10-filing-who-needs-to-file-and-when",
    shortTitle: "Who Needs to File & Due Dates",
  },
  {
    slug: "understanding-the-gstr-10-process-guide",
    title: "Understanding the GSTR 10 Process: A Comprehensive Guide",
    href: "/gstr-10/understanding-the-gstr-10-process-guide",
    shortTitle: "GSTR-10 Process Guide",
  },
];

interface Gstr10GuideLayoutProps {
  currentSlug: string;
  title: string;
  breadcrumbLabel?: string;
  metaPublishedDate?: string;
  readingTime?: string;
  authorName?: string;
  children: React.ReactNode;
}

export default function Gstr10GuideLayout({
  currentSlug,
  title,
  breadcrumbLabel,
  metaPublishedDate = "Oct 2026",
  readingTime = "8 min read",
  authorName = "Merrafilings Indirect Tax Advisory",
  children,
}: Gstr10GuideLayoutProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("GSTR-10 Final Return Consultation");
  const [searchOpen, setSearchOpen] = useState(false);

  const openContact = (topic?: string) => {
    setModalTitle(topic || "GSTR-10 Final Return Assistance");
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans antialiased selection:bg-[#155EEF] selection:text-white">
      {/* 1. Navbar */}
      <Navbar
        onOpenSearch={() => setSearchOpen(true)}
        onOpenContact={() => openContact()}
      />

      {/* 2. Top Breadcrumb & Metadata Banner */}
      <section className="bg-gradient-to-b from-[#F8FAFC] via-[#FAF9F7]/60 to-white border-b border-slate-200/80 pt-6 pb-8">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500 mb-4 flex-wrap">
            <Link href="/" className="hover:text-[#155EEF] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <Link href="/gstr-10" className="hover:text-[#155EEF] transition-colors">GSTR-10 Return</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="text-slate-800 font-medium truncate max-w-[280px] sm:max-w-md">
              {breadcrumbLabel || title}
            </span>
          </nav>

          {/* Guide Header Headline */}
          <div className="max-w-4xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-800 text-[11.5px] font-medium shadow-3xs">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Section 45 of CGST Act • Rule 81 • Form GSTR-10 Final Return Portal Handbook</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1F1646] tracking-tight leading-tight">
              {title}
            </h1>
            <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal">
              An authoritative legal and procedural guide to GSTR-10 final return filing upon GST cancellation or surrender: closing stock valuation, Rule 44 input tax credit reversal, 3-month statutory due dates, late fees under Section 47, and avoidance of Section 62 best judgement assessments.
            </p>

            {/* Author Meta Info */}
            <div className="flex items-center gap-4 pt-2 text-xs text-slate-500 flex-wrap">
              <div className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-slate-400" />
                <span className="font-medium text-slate-700">{authorName}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>Updated: {metaPublishedDate}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{readingTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Content Grid with Responsive Sticky Sidebar */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Full Guide Article Content */}
          <main className="min-w-0 prose prose-slate max-w-none">
            {children}
          </main>

          {/* Right Column: Sticky Sidebar matching User's Exact Screenshot */}
          <aside className="space-y-6 lg:sticky lg:top-24">
            {/* Widget 1: Consult Experts (Avatars + Call button) */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#155EEF] hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex -space-x-2">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-xs">
                    CA
                  </div>
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-xs">
                    CS
                  </div>
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-500 to-orange-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-xs">
                    CMA
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 group-hover:text-[#155EEF] transition-colors">
                    Consult <span className="text-[#155EEF]">Experts</span>
                  </h3>
                  <div className="flex items-center gap-1 text-[11px] text-slate-500">
                    <span className="text-amber-500 font-semibold">★ 4.9</span>
                    <span>• 25,000+ Final Returns Filed</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Has your GST registration been cancelled or voluntarily surrendered? Speak directly with our senior Indirect Tax Advocates and Chartered Accountants for closing stock reconciliation, Rule 44 credit reversal calculation, and error-free GSTR-10 filing.
              </p>
              <button
                onClick={() => openContact("Schedule GSTR-10 Final Return Consultation")}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-900 text-white hover:bg-[#155EEF] text-xs font-medium transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
              >
                Book 15-Min Expert Call
              </button>
            </div>

            {/* Widget 2: Related Guides (With Emerald Accent & Live Chat Button matching Screenshot) */}
            <div className="relative rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#10B981] hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1 p-5 overflow-hidden transition-all duration-300 group">
              {/* Emerald Accent Top Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#10B981]" />

              <h3 className="text-sm font-bold text-slate-900 tracking-tight mb-4 pt-1 group-hover:text-[#10B981] transition-colors">
                Related Guides
              </h3>

              <nav className="divide-y divide-slate-100" aria-label="Related Guides">
                {GSTR10_RELATED_GUIDES.map((item) => {
                  const isActive = item.slug === currentSlug;
                  return (
                    <Link
                      key={item.slug}
                      href={item.href}
                      className={`group/link flex items-start gap-3 py-3 text-xs leading-snug transition-colors ${
                        isActive
                          ? "text-[#10B981] font-semibold"
                          : "text-slate-700 hover:text-[#10B981] font-medium"
                      }`}
                    >
                      <ArrowRight
                        className={`w-3.5 h-3.5 shrink-0 mt-0.5 transition-transform group-hover/link:translate-x-1 ${
                          isActive ? "text-[#10B981]" : "text-slate-400 group-hover/link:text-[#10B981]"
                        }`}
                      />
                      <span className="flex-1">{item.title}</span>
                    </Link>
                  );
                })}
              </nav>

              {/* Floating Green "Live chat with experts" Button matching Screenshot */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => openContact("Live Chat with GSTR-10 Tax Specialist")}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#10B981] hover:bg-[#059669] text-white text-xs font-semibold shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Live chat with experts</span>
                </button>
              </div>
            </div>

            {/* Widget 3: Statutory Benchmarks (Section 45 & Rule 81) */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/40 border border-indigo-100/80 shadow-xs hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300 space-y-3 group">
              <div className="flex items-center gap-2 text-indigo-950 font-semibold text-xs group-hover:text-[#5C3BFF] transition-colors">
                <Scale className="w-4 h-4 text-indigo-600 group-hover:scale-110 transition-transform" />
                <span>Statutory Benchmarks (GSTR-10)</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Statutory Due Date:</strong> 3 months from cancellation order date or effective date (whichever is later).</span>
                </li>
                <li className="flex items-start gap-2">
                  <Boxes className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                  <span><strong>Rule 44 Reversal:</strong> Higher of availed ITC on stock/capital goods or output tax on open market value.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Calculator className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Capital Goods Depreciation:</strong> Reduced by 5% per quarter of usage from tax invoice date.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                  <span><strong>Section 47 Late Fee:</strong> ₹200/day (₹100 CGST + ₹100 SGST) from due date until filing.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Notice &amp; Best Judgement:</strong> Form GSTR-3A (15 days) followed by Section 62 assessment order.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Ban className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                  <span><strong>Exempted Entities:</strong> Composition (Sec 10), ISD, Non-Resident, and TDS/TCS deductors.</span>
                </li>
              </ul>
            </div>

          </aside>
        </div>
      </div>

      {/* 4. Contact Modal */}
      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        serviceTitle={modalTitle}
      />

      {/* 5. Service Search Modal */}
      <ServiceSearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectService={(serviceName) => {
          setSearchOpen(false);
          openContact(serviceName);
        }}
      />

      {/* 6. Footer */}
      <Footer />
    </div>
  );
}
