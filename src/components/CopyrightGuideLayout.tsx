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
  ShieldCheck,
  BookOpen,
} from "lucide-react";

export interface CopyrightGuideItem {
  slug: string;
  title: string;
  href: string;
  shortTitle: string;
}

export const COPYRIGHT_RELATED_GUIDES: CopyrightGuideItem[] = [
  {
    slug: "copyright-registration-fees-in-tamilnadu-guide",
    title: "Understanding Copyright Registration Fees in Tamilnadu",
    href: "/copyright-registration/copyright-registration-fees-in-tamilnadu-guide",
    shortTitle: "Fees in Tamilnadu",
  },
  {
    slug: "copyright-registration-guide-key-insights-steps",
    title: "Copyright Registration Guide: Essential Insights & Steps",
    href: "/copyright-registration/copyright-registration-guide-key-insights-steps",
    shortTitle: "Essential Insights & Steps",
  },
  {
    slug: "copyright-registration-in-india-key-steps-benefits",
    title: "Understanding the Copyright Registration Process in India: Key Steps & Benefits",
    href: "/copyright-registration/copyright-registration-in-india-key-steps-benefits",
    shortTitle: "Process, Fees & Benefits",
  },
  {
    slug: "copyrights-registration-required-documents-guide",
    title: "Copyrights Registration Required Documents: A Comprehensive Guide",
    href: "/copyright-registration/copyrights-registration-required-documents-guide",
    shortTitle: "Required Documents Guide",
  },
  {
    slug: "understanding-copyright-registration-a-comprehensive-guide",
    title: "Understanding Copyright Registration: A Comprehensive Guide",
    href: "/copyright-registration/understanding-copyright-registration-a-comprehensive-guide",
    shortTitle: "Comprehensive Guide",
  },
  {
    slug: "protect-your-rights-register-copyright-online",
    title: "Register Your Copyright Online with Merrafilings: Protect Your Rights",
    href: "/copyright-registration/protect-your-rights-register-copyright-online",
    shortTitle: "Register Online with Merrafilings",
  },
  {
    slug: "copyright-registration-tamil-nadu-guide",
    title: "Copyright Registration in Tamil Nadu: A Comprehensive Guide",
    href: "/copyright-registration/copyright-registration-tamil-nadu-guide",
    shortTitle: "Tamil Nadu State Guide",
  },
];

interface CopyrightGuideLayoutProps {
  currentSlug: string;
  title: string;
  breadcrumbLabel?: string;
  metaPublishedDate?: string;
  readingTime?: string;
  authorName?: string;
  children: React.ReactNode;
}

export default function CopyrightGuideLayout({
  currentSlug,
  title,
  breadcrumbLabel,
  metaPublishedDate = "Oct 2026",
  readingTime = "8 min read",
  authorName = "Merrafilings IP Legal Team",
  children,
}: CopyrightGuideLayoutProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Copyright Registration Consultation");
  const [searchOpen, setSearchOpen] = useState(false);

  const openContact = (topic?: string) => {
    setModalTitle(topic || "Copyright Registration Legal Support");
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FBFBFC] text-slate-900 font-sans antialiased flex flex-col justify-between">
      {/* 1. Navbar */}
      <Navbar
        onOpenSearch={() => setSearchOpen(true)}
        onOpenContact={() => openContact("Copyright Advisory")}
      />

      {/* Main Content Area */}
      <main className="flex-1 pt-24 sm:pt-28 pb-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs sm:text-[13px] text-slate-500 mb-6 flex-wrap">
            <Link href="/" className="hover:text-[#155EEF] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link
              href="/copyright-registration"
              className="hover:text-[#155EEF] transition-colors"
            >
              Copyright Registration
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-800 font-medium truncate max-w-[280px] sm:max-w-md">
              {breadcrumbLabel || title}
            </span>
          </nav>

          {/* 2-Column Responsive Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Comprehensive Guide Content (8 cols) */}
            <article className="lg:col-span-8 bg-white rounded-3xl border border-slate-200/90 shadow-xs p-6 sm:p-10 md:p-12 relative overflow-hidden">
              {/* Subtle Decorative Gradient Bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#594CF5] via-[#7B4CF5] to-[#D946EF]" />

              {/* Header Details */}
              <div className="border-b border-slate-100 pb-6 mb-8">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-200/80 text-[11.5px] font-medium text-purple-800 mb-4">
                  <BookOpen className="w-3.5 h-3.5 text-purple-600" />
                  <span>Statutory Copyright Practice Guide</span>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-[34px] font-normal text-[#1F1646] leading-tight tracking-tight">
                  {title}
                </h1>

                {/* Metadata Row */}
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-5 text-xs text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-slate-400" />
                    <span>{authorName}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{metaPublishedDate}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{readingTime}</span>
                  </div>
                </div>
              </div>

              {/* Guide Content Body */}
              <div className="space-y-8 text-slate-800 text-[14.5px] sm:text-[15px] leading-relaxed">
                {children}
              </div>

              {/* Bottom Article Signoff / Help CTA */}
              <div className="mt-12 pt-8 border-t border-slate-100 bg-gradient-to-br from-purple-50/60 to-slate-50 p-6 sm:p-8 rounded-2xl border border-purple-100/80">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-slate-950">
                      Need Assistance with Copyright Registration?
                    </h3>
                    <p className="text-xs sm:text-[13px] text-slate-800 font-normal mt-1 leading-relaxed">
                      Consult with our registered Intellectual Property Advocates for classification, source code formatting, and government filing.
                    </p>
                  </div>
                  <button
                    onClick={() => openContact(`Inquiry: ${title}`)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm text-white bg-gradient-to-r from-[#594CF5] via-[#7B4CF5] to-[#D946EF] hover:brightness-105 shadow-md shadow-purple-500/20 hover:shadow-lg transition-all shrink-0 cursor-pointer"
                  >
                    <span>Talk to IP Advocate</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>

            {/* Right Column: Sticky Sidebar matching Screenshot (4 cols) */}
            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              {/* Card 1: Consult Experts (Direct match to screenshot) */}
              <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs p-5 sm:p-6 transition-all hover:shadow-sm">
                <div className="flex items-center gap-3.5">
                  <div className="flex -space-x-2.5 overflow-hidden shrink-0">
                    <div className="inline-block h-10 w-10 rounded-full ring-2 ring-white bg-slate-200 flex items-center justify-center text-xs font-semibold text-slate-700">
                      ADV
                    </div>
                    <div className="inline-block h-10 w-10 rounded-full ring-2 ring-white bg-blue-100 flex items-center justify-center text-xs font-semibold text-blue-700">
                      IP
                    </div>
                    <div className="inline-block h-10 w-10 rounded-full ring-2 ring-white bg-purple-100 flex items-center justify-center text-xs font-semibold text-purple-700">
                      LLM
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-[15px] font-normal text-slate-800 leading-snug">
                      Consult <span className="text-[#155EEF] font-semibold">Experts</span>
                    </h4>
                    <p className="text-xs text-slate-700 font-normal mt-0.5">
                      Senior Intellectual Property Counsel
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-700 font-normal">
                    Turnaround: <strong className="text-slate-900 font-semibold">Within 2 Hours</strong>
                  </span>
                  <button
                    onClick={() => openContact("Consult Copyright Expert")}
                    className="text-xs font-semibold text-[#155EEF] hover:underline cursor-pointer"
                  >
                    Connect Now &rarr;
                  </button>
                </div>
              </div>

              {/* Card 2: Related Guides List matching Screenshot */}
              <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs p-5 sm:p-6 transition-all hover:shadow-sm">
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
                  <h3 className="text-base font-semibold text-slate-950">
                    Related Guides
                  </h3>
                  <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                    7 Articles
                  </span>
                </div>

                <ul className="space-y-2">
                  {COPYRIGHT_RELATED_GUIDES.map((guide) => {
                    const isActive = guide.slug === currentSlug;
                    return (
                      <li key={guide.slug}>
                        <Link
                          href={guide.href}
                          className={`flex items-start gap-3 p-2.5 rounded-xl text-xs sm:text-[13px] transition-all duration-150 group ${
                            isActive
                              ? "bg-purple-50/80 border border-purple-200/80 text-purple-950 font-semibold shadow-2xs"
                              : "hover:bg-slate-50 text-slate-800 font-medium hover:text-[#155EEF]"
                          }`}
                        >
                          <span
                            className={`mt-0.5 transition-transform group-hover:translate-x-0.5 ${
                              isActive ? "text-purple-700" : "text-slate-400 group-hover:text-[#155EEF]"
                            }`}
                          >
                            &rarr;
                          </span>
                          <span className="leading-snug">
                            {guide.title}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Card 3: Direct Action Banner */}
              <div className="bg-gradient-to-br from-[#1F1646] to-[#2B1B6B] rounded-2xl p-6 text-white shadow-md">
                <div className="flex items-center gap-2 text-purple-300 text-xs font-medium uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Online Filing Portal</span>
                </div>
                <h4 className="text-base sm:text-lg font-normal tracking-tight">
                  Register Your Copyright Online in India
                </h4>
                <p className="text-xs text-slate-300 font-normal mt-2 leading-relaxed">
                  Protect your literary, software, musical, or artistic assets under the Copyright Act, 1957.
                </p>
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-purple-200">Starting at ₹1,999</span>
                  <Link
                    href="/copyright-registration"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-medium text-xs transition-colors"
                  >
                    <span>View Packages</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* Floating Concierge Action */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => openContact("Live Concierge Chat")}
          className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-full bg-[#00BF72] hover:bg-[#00AB66] text-white font-medium text-[13.5px] shadow-md hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-200 hover:-translate-y-1 active:translate-y-0 cursor-pointer"
        >
          <MessageCircle className="w-4.5 h-4.5 fill-white text-[#00BF72]" />
          <span>Live chat with experts</span>
        </button>
      </div>

      {/* Global Modals */}
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

      {/* Footer */}
      <Footer />
    </div>
  );
}
