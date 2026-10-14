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
  Scale,
  Gavel,
  ShieldCheck,
  Award,
  CheckCircle2,
  AlertTriangle,
  Building2,
  Landmark,
} from "lucide-react";

export interface GstNoticeGuideItem {
  slug: string;
  title: string;
  href: string;
  shortTitle: string;
}

export const GST_NOTICE_RELATED_GUIDES: GstNoticeGuideItem[] = [
  {
    slug: "gst-notice-received-guide",
    title: "GST Notice Received? Don't Panic. Here's What You Should Do",
    href: "/gst-notice/gst-notice-received-guide",
    shortTitle: "Notice Received? Action Guide",
  },
  {
    slug: "understanding-gst-tax-notice-a-compliance-guide",
    title: "Understanding GST Tax Notice: A Guide to Compliance",
    href: "/gst-notice/understanding-gst-tax-notice-a-compliance-guide",
    shortTitle: "Tax Notice Compliance Guide",
  },
  {
    slug: "avoiding-gst-tax-notices-essential-tips",
    title: "How to Avoid GST Tax Notice: Essential Tips",
    href: "/gst-notice/avoiding-gst-tax-notices-essential-tips",
    shortTitle: "Tips to Avoid GST Notices",
  },
  {
    slug: "tax-notice-consultation",
    title: "Tax Notice Consultation: Expert Guidance",
    href: "/gst-notice/tax-notice-consultation",
    shortTitle: "Tax Notice Consultation",
  },
  {
    slug: "reply-to-a-gst-notice-online-stepbystep-guide",
    title: "How to Reply to a GST Notice Online: Step-by-Step Guide",
    href: "/gst-notice/reply-to-a-gst-notice-online-stepbystep-guide",
    shortTitle: "Online Reply Step-by-Step",
  },
];

interface GstNoticeGuideLayoutProps {
  currentSlug: string;
  title: string;
  breadcrumbLabel?: string;
  metaPublishedDate?: string;
  readingTime?: string;
  authorName?: string;
  children: React.ReactNode;
}

export default function GstNoticeGuideLayout({
  currentSlug,
  title,
  breadcrumbLabel,
  metaPublishedDate = "Oct 2026",
  readingTime = "9 min read",
  authorName = "Merrafilings Tax Litigation Advisory",
  children,
}: GstNoticeGuideLayoutProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("GST Notice Consultation");
  const [searchOpen, setSearchOpen] = useState(false);

  const openContact = (topic?: string) => {
    setModalTitle(topic || "GST Notice Legal Defense");
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
            <Link href="/gst-notice" className="hover:text-[#155EEF] transition-colors">GST Notice</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="text-slate-800 font-medium truncate max-w-[280px] sm:max-w-md">
              {breadcrumbLabel || title}
            </span>
          </nav>

          {/* Guide Header Headline */}
          <div className="max-w-4xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-800 text-[11.5px] font-medium shadow-3xs">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>CGST Act, 2017 • Departmental Scrutiny &amp; Legal Notice Advisory</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1F1646] tracking-tight leading-tight">
              {title}
            </h1>
            <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal">
              A comprehensive statutory guide on handling departmental notices, Form ASMT-10 return scrutinies, Section 73/74 show cause demands, online portal submissions, and Section 107 appellate defense.
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
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex -space-x-2">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-xs">
                    CA
                  </div>
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-xs">
                    CS
                  </div>
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-500 to-orange-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-xs">
                    JD
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    Consult <span className="text-[#155EEF]">GST Experts</span>
                  </h3>
                  <div className="flex items-center gap-1 text-[11px] text-slate-500">
                    <span className="text-amber-500 font-semibold">★ 4.9</span>
                    <span>• 10,000+ Notices Resolved</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Received Form ASMT-10 or DRC-01? Connect directly with a Chartered Accountant to evaluate allegations, draft legal responses, and avoid adverse ex-parte demands.
              </p>
              <button
                onClick={() => openContact("Schedule GST Notice Evaluation Call")}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-900 text-white hover:bg-slate-800 text-xs font-medium transition-colors shadow-xs"
              >
                Schedule 15-Min Case Evaluation
              </button>
            </div>

            {/* Widget 2: Related Guides (With Emerald Accent & Live Chat Button matching Screenshot) */}
            <div className="relative rounded-2xl bg-white border border-slate-200/80 shadow-xs p-5 overflow-hidden">
              {/* Emerald Accent Top Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#10B981]" />

              <h3 className="text-sm font-bold text-slate-900 tracking-tight mb-4 pt-1">
                Related Guides
              </h3>

              <nav className="divide-y divide-slate-100" aria-label="Related Guides">
                {GST_NOTICE_RELATED_GUIDES.map((item) => {
                  const isActive = item.slug === currentSlug;
                  return (
                    <Link
                      key={item.slug}
                      href={item.href}
                      className={`group flex items-start gap-3 py-3 text-xs leading-snug transition-colors ${
                        isActive
                          ? "text-[#10B981] font-semibold"
                          : "text-slate-700 hover:text-[#10B981] font-medium"
                      }`}
                    >
                      <ArrowRight
                        className={`w-3.5 h-3.5 shrink-0 mt-0.5 transition-transform group-hover:translate-x-1 ${
                          isActive ? "text-[#10B981]" : "text-slate-400 group-hover:text-[#10B981]"
                        }`}
                      />
                      <span className="flex-1">{item.title}</span>
                    </Link>
                  );
                })}
              </nav>

              {/* Floating Green "Live chat with experts" Button as per Screenshot */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => openContact("Live Chat with GST Notice Specialist")}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#10B981] hover:bg-[#059669] text-white text-xs font-semibold shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Live chat with experts</span>
                </button>
              </div>
            </div>

            {/* Widget 3: Statutory Notice Compliance Tracker */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/40 border border-indigo-100/80 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-indigo-950 font-semibold text-xs">
                <Scale className="w-4 h-4 text-indigo-600" />
                <span>Statutory Notice Deadlines</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>ASMT-10 Reply:</strong> 30 Days via Form ASMT-11</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>DRC-01 Demand:</strong> 30 Days via Form DRC-06</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Pre-SCN Intimation:</strong> Form DRC-01A / DRC-01B</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Section 107 Appeal:</strong> 3 Months via Form GST APL-01</span>
                </li>
              </ul>
              <div className="pt-2">
                <Link
                  href="/gst-notice"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-800"
                >
                  <span>Explore All Notice Packages</span>
                  <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
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
