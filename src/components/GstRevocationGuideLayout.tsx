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
  RotateCcw,
  MessageCircle,
  ChevronRight,
  Scale,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Building2,
  Undo2,
} from "lucide-react";

export interface GstRevocationGuideItem {
  slug: string;
  title: string;
  href: string;
  shortTitle: string;
}

export const GST_REVOCATION_RELATED_GUIDES: GstRevocationGuideItem[] = [
  {
    slug: "gst-revocation-how-to-apply-effectively",
    title: "Understanding GST Revocation: How to Apply",
    href: "/gst-revocation/gst-revocation-how-to-apply-effectively",
    shortTitle: "How to Apply for GST Revocation",
  },
  {
    slug: "comprehensive-gst-revocation-guide",
    title: "Understanding GST Revocation: A Comprehensive Guide",
    href: "/gst-revocation/comprehensive-gst-revocation-guide",
    shortTitle: "Comprehensive GST Revocation Guide",
  },
  {
    slug: "gst-revocation-guide",
    title: "GST Revocation Guide",
    href: "/gst-revocation/gst-revocation-guide",
    shortTitle: "GST Revocation Overview",
  },
  {
    slug: "gst-revocation-filing-guide-process-tips",
    title: "Introduction to GST Revocation Filing",
    href: "/gst-revocation/gst-revocation-filing-guide-process-tips",
    shortTitle: "Introduction to Revocation Filing",
  },
  {
    slug: "gst-revocation-guide-in-5-easy-steps",
    title: "GST Revocation in 5 Easy Steps with Merrafilings",
    href: "/gst-revocation/gst-revocation-guide-in-5-easy-steps",
    shortTitle: "GST Revocation in 5 Steps",
  },
  {
    slug: "gst-revocation",
    title: "GST Revocation & GSTIN Restoration Service Desk",
    href: "/gst-revocation",
    shortTitle: "GST Revocation Service",
  },
];

interface GstRevocationGuideLayoutProps {
  currentSlug: string;
  title: string;
  breadcrumbLabel?: string;
  metaPublishedDate?: string;
  readingTime?: string;
  authorName?: string;
  children: React.ReactNode;
}

export default function GstRevocationGuideLayout({
  currentSlug,
  title,
  breadcrumbLabel,
  metaPublishedDate = "Oct 2026",
  readingTime = "8 min read",
  authorName = "Merrafilings Indirect Tax Advisory",
  children,
}: GstRevocationGuideLayoutProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("GST Revocation Consultation");
  const [searchOpen, setSearchOpen] = useState(false);

  const openContact = (topic?: string) => {
    setModalTitle(topic || "GST Revocation & Restoration Assistance");
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
            <Link href="/gst-revocation" className="hover:text-[#155EEF] transition-colors">GST Revocation</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="text-slate-800 font-medium truncate max-w-[280px] sm:max-w-md">
              {breadcrumbLabel || title}
            </span>
          </nav>

          {/* Guide Header Headline */}
          <div className="max-w-4xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-800 text-[11.5px] font-medium shadow-3xs">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Section 30 of CGST Act • Rule 23 • Form GST REG-21 Legal Handbook</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1F1646] tracking-tight leading-tight">
              {title}
            </h1>
            <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal">
              A comprehensive authoritative guide on restoring cancelled GST registration: Form GST REG-21 portal filing, statutory 90 to 270-day limitation periods, tax/interest reconciliation, officer show-cause reply (REG-24), and REG-22 restoration orders.
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
                    <span>• 40,000+ Revocations Handled</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Has your GST registration been cancelled suo-moto by the tax officer? Speak directly with our senior Indirect Tax Advocates and Chartered Accountants for immediate penalty reconciliation, condonation petition drafting, and Form GST REG-21 filing.
              </p>
              <button
                onClick={() => openContact("Schedule GST Revocation Consultation")}
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
                {GST_REVOCATION_RELATED_GUIDES.map((item) => {
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
                  onClick={() => openContact("Live Chat with GST Revocation Specialist")}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#10B981] hover:bg-[#059669] text-white text-xs font-semibold shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Live chat with experts</span>
                </button>
              </div>
            </div>

            {/* Widget 3: Statutory Benchmarks (Section 30 & Rule 23) */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/40 border border-indigo-100/80 shadow-xs hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300 space-y-3 group">
              <div className="flex items-center gap-2 text-indigo-950 font-semibold text-xs group-hover:text-[#5C3BFF] transition-colors">
                <Scale className="w-4 h-4 text-indigo-600 group-hover:scale-110 transition-transform" />
                <span>Statutory Benchmarks (Section 30)</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Standard Limitation:</strong> 90 days from service of cancellation order.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Extended Window:</strong> Up to 180 days (Joint/Addl Comm.) &amp; 270 days (Comm.).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Proper Officer Review:</strong> 30 days to issue REG-22 (Restoration) or REG-23 (SCN).</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                  <span><strong>SCN Clarification Reply:</strong> File Form GST REG-24 within 7 working days.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Undo2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                  <span><strong>Interim Return Filing:</strong> File all pending returns within 30 days of REG-22.</span>
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
