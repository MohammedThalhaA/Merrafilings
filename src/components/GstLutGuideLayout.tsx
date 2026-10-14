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
  Globe2,
  FileSignature,
  ShieldCheck,
  Award,
  CheckCircle2,
  Calculator,
  Building2,
} from "lucide-react";

export interface GstLutGuideItem {
  slug: string;
  title: string;
  href: string;
  shortTitle: string;
}

export const GST_LUT_RELATED_GUIDES: GstLutGuideItem[] = [
  {
    slug: "gst-lut-certificate-for-exporters-essential-guide",
    title: "Understanding the LUT Certificate for GST Compliance",
    href: "/gst-lut/gst-lut-certificate-for-exporters-essential-guide",
    shortTitle: "LUT Certificate Compliance",
  },
  {
    slug: "understanding-the-gst-lut-form-a-guide-for-exporters",
    title: "Understanding the GST LUT Form: An Essential Guide for Exporters",
    href: "/gst-lut/understanding-the-gst-lut-form-a-guide-for-exporters",
    shortTitle: "GST LUT Form Guide",
  },
  {
    slug: "gst-lut-filing-a-simple-5step-guide",
    title: "GST LUT Filing in 5 Steps: The Complete Exporter Guide",
    href: "/gst-lut/gst-lut-filing-a-simple-5step-guide",
    shortTitle: "5-Step Filing Guide",
  },
  {
    slug: "introduction-to-the-gst-lut-process",
    title: "Introduction to the GST LUT Process",
    href: "/gst-lut/introduction-to-the-gst-lut-process",
    shortTitle: "Introduction to LUT Process",
  },
  {
    slug: "understanding-the-gst-lut-form-key-insights",
    title: "Understanding GST LUT Form: A Comprehensive Guide",
    href: "/gst-lut/understanding-the-gst-lut-form-key-insights",
    shortTitle: "Key Insights & Blueprint",
  },
];

interface GstLutGuideLayoutProps {
  currentSlug: string;
  title: string;
  breadcrumbLabel?: string;
  metaPublishedDate?: string;
  readingTime?: string;
  authorName?: string;
  children: React.ReactNode;
}

export default function GstLutGuideLayout({
  currentSlug,
  title,
  breadcrumbLabel,
  metaPublishedDate = "Oct 2026",
  readingTime = "9 min read",
  authorName = "Merrafilings Export Legal Team",
  children,
}: GstLutGuideLayoutProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("GST LUT Exporter Consultation");
  const [searchOpen, setSearchOpen] = useState(false);

  const openContact = (topic?: string) => {
    setModalTitle(topic || "GST LUT Exporter Advisory");
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
            <Link href="/gst-lut" className="hover:text-[#155EEF] transition-colors">GST LUT</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="text-slate-800 font-medium truncate max-w-[280px] sm:max-w-md">
              {breadcrumbLabel || title}
            </span>
          </nav>

          {/* Guide Header Headline */}
          <div className="max-w-4xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-800 text-[11.5px] font-medium shadow-3xs">
              <Globe2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Zero-Rated Export Compliance Guide</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#1F1646] tracking-tight leading-tight">
              {title}
            </h1>

            {/* Meta Bar */}
            <div className="flex items-center gap-4 text-xs text-slate-700 pt-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 font-normal text-slate-800">
                <User className="w-3.5 h-3.5 text-indigo-600" />
                <span>{authorName}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 font-normal text-slate-800">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                <span>{metaPublishedDate}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 font-normal text-slate-800">
                <Clock className="w-3.5 h-3.5 text-emerald-600" />
                <span>{readingTime}</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Content & Sidebar Layout */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-start">
            {/* Left Column (8 Cols): Rich Article Content */}
            <article className="lg:col-span-8 space-y-8 min-w-0">
              {children}

              {/* Bottom Consultation Callout Card */}
              <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#FAF9FF] via-white to-indigo-50/40 border border-indigo-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl -z-10" />
                <div className="max-w-2xl space-y-3">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100/80 text-indigo-800 text-xs font-medium">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Exporter Working Capital Optimization</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
                    Export Goods &amp; Software Services with 0% Upfront IGST
                  </h3>
                  <p className="text-xs sm:text-[13.5px] text-slate-900 font-normal leading-relaxed">
                    Don&apos;t let 18% of your export revenue get trapped in lengthy tax refund cycles. File Form GST RFD-11 Letter of Undertaking (LUT) today to keep 100% of your working capital liquid for manufacturing and cross-border expansion.
                  </p>
                  <div className="pt-2 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => openContact("File GST LUT for Exporter")}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#5C3BFF] to-[#7052FF] text-white text-xs sm:text-sm font-medium hover:brightness-110 shadow-md shadow-indigo-500/20 transition-all cursor-pointer hover:-translate-y-0.5"
                    >
                      <span>File GST LUT Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <Link
                      href="/gst-lut#pricing"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 text-xs sm:text-sm font-medium hover:bg-slate-50 transition-all cursor-pointer"
                    >
                      <span>View Exporter Plans</span>
                    </Link>
                  </div>
                </div>
              </div>
            </article>

            {/* Right Column (4 Cols): Sticky Sidebar Matching User Screenshot */}
            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              {/* Widget 1: Consult Experts (from user screenshot) */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 shadow-xs hover:border-slate-300 transition-colors">
                <div className="flex items-center gap-3">
                  {/* Avatar stack */}
                  <div className="flex -space-x-2 shrink-0">
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden flex items-center justify-center text-xs font-bold text-slate-600">
                      EX
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-indigo-100 overflow-hidden flex items-center justify-center text-xs font-bold text-indigo-700">
                      CA
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-emerald-100 overflow-hidden flex items-center justify-center text-xs font-bold text-emerald-700">
                      DGFT
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-normal text-slate-900">
                      Consult <span className="text-[#155EEF] font-medium">Experts</span>
                    </h3>
                    <p className="text-xs text-slate-600 font-normal">
                      Speak with an export tax specialist in 15 mins
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                  <div className="flex items-center gap-1 text-amber-600 font-semibold">
                    <span>★</span>
                    <span>4.9/5</span>
                    <span className="text-slate-400 font-normal">(4,200+ exporters)</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => openContact("GST LUT Expert Consultation Request")}
                    className="text-xs text-[#155EEF] font-medium hover:underline inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Request Callback</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Widget 2: Related Guides (Exact card structure from user screenshot) */}
              <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden">
                {/* Emerald Accent Bar */}
                <div className="h-1 bg-gradient-to-r from-emerald-500 via-[#00BF72] to-teal-500" />
                <div className="p-4 sm:p-5">
                  <h3 className="text-sm font-semibold text-slate-900 mb-3 tracking-tight">
                    Related Guides
                  </h3>

                  <div className="divide-y divide-slate-100">
                    {GST_LUT_RELATED_GUIDES.map((guide) => {
                      const isActive = guide.slug === currentSlug;
                      return (
                        <Link
                          key={guide.slug}
                          href={guide.href}
                          className={`flex items-start gap-2.5 py-3 group transition-colors text-xs leading-snug cursor-pointer ${
                            isActive
                              ? "text-emerald-700 font-semibold"
                              : "text-slate-700 hover:text-[#155EEF] font-normal"
                          }`}
                        >
                          <ArrowRight
                            className={`w-3.5 h-3.5 shrink-0 mt-0.5 transition-transform duration-200 ${
                              isActive
                                ? "text-emerald-600 translate-x-0.5"
                                : "text-slate-400 group-hover:text-[#155EEF] group-hover:translate-x-1"
                            }`}
                          />
                          <span className="flex-1">{guide.title}</span>
                        </Link>
                      );
                    })}
                  </div>

                  {/* Live Chat with Experts button (Exact match to green pill in user screenshot) */}
                  <div className="pt-4 mt-2">
                    <button
                      type="button"
                      onClick={() => openContact("Live Chat GST LUT Exporter Support")}
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#00BF72] to-[#00A865] hover:brightness-105 text-white font-medium text-xs sm:text-[13px] shadow-md shadow-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 fill-white text-[#00BF72]" />
                      <span>Live chat with experts</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Widget 3: Exporter Zero-Rated Checklist */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-indigo-50/60 to-white border border-indigo-100 text-xs text-slate-800 space-y-3 shadow-2xs">
                <div className="flex items-center gap-2 text-indigo-950 font-semibold text-xs sm:text-[13px]">
                  <FileSignature className="w-4 h-4 text-indigo-600" />
                  <span>Exporter Statutory Checklist</span>
                </div>
                <p className="text-slate-600 leading-relaxed font-light text-[11.5px]">
                  Mandatory criteria for 0% IGST export clearance:
                </p>
                <div className="space-y-1.5 text-slate-700 font-normal text-[11px]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span><strong>Form RFD-11:</strong> Active ARN generated</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span><strong>Fiscal Year:</strong> Valid April 1 to March 31</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span><strong>2 Witnesses:</strong> Adult Indian citizens</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span><strong>BRC/FIRC:</strong> Remittance within 1 year</span>
                  </div>
                </div>
                <div className="pt-1">
                  <button
                    type="button"
                    onClick={() => openContact("Verify Export LUT Eligibility")}
                    className="w-full py-2 px-3 rounded-lg bg-white border border-indigo-200 text-indigo-700 font-medium text-[11.5px] hover:bg-indigo-50 transition-colors cursor-pointer text-center"
                  >
                    Check Exporter Eligibility &rarr;
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Interactive Global Modals */}
      <ServiceSearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectService={(srv) => openContact(srv)}
      />
      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        serviceTitle={modalTitle}
      />

      {/* 4. Footer */}
      <Footer />
    </div>
  );
}
