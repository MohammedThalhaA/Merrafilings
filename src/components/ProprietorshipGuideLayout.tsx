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
} from "lucide-react";

export interface ProprietorshipGuideItem {
  slug: string;
  title: string;
  href: string;
  shortTitle: string;
}

export const PROPRIETORSHIP_RELATED_GUIDES: ProprietorshipGuideItem[] = [
  {
    slug: "definition-and-meaning",
    title: "Sole Proprietorship Definition and Features in India",
    href: "/proprietorship/definition-and-meaning",
    shortTitle: "Sole Proprietorship Definition & Features",
  },
  {
    slug: "proprietorship-registration-guide-steps-benefits",
    title: "Comprehensive Guide to Proprietorship Registration",
    href: "/proprietorship/proprietorship-registration-guide-steps-benefits",
    shortTitle: "Comprehensive Guide to Registration",
  },
  {
    slug: "how-to-start-a-proprietorship-stepbystep-guide",
    title: "How to Start a Proprietorship: A Step-by-Step Guide",
    href: "/proprietorship/how-to-start-a-proprietorship-stepbystep-guide",
    shortTitle: "How to Start a Proprietorship",
  },
  {
    slug: "understanding-proprietorship-a-beginners-guide",
    title: "Understanding Proprietorship: A Beginner's Guide",
    href: "/proprietorship/understanding-proprietorship-a-beginners-guide",
    shortTitle: "Understanding Proprietorship: Beginner's Guide",
  },
  {
    slug: "sole-proprietorship-firm-registration-guide",
    title: "Sole Proprietorship Firm Registration Guide",
    href: "/proprietorship/sole-proprietorship-firm-registration-guide",
    shortTitle: "Sole Proprietorship Firm Registration",
  },
];

interface ProprietorshipGuideLayoutProps {
  currentSlug: string;
  title?: string;
  breadcrumbLabel?: string;
  metaPublishedDate?: string;
  readingTime?: string;
  authorName?: string;
  children: React.ReactNode;
}

export default function ProprietorshipGuideLayout({
  currentSlug,
  title,
  breadcrumbLabel,
  metaPublishedDate = "Oct 2026",
  readingTime = "8 min read",
  authorName = "Merrafilings Corporate Advisory Team",
  children,
}: ProprietorshipGuideLayoutProps) {
  const activeGuide = PROPRIETORSHIP_RELATED_GUIDES.find((g) => g.slug === currentSlug);
  const displayTitle = title || activeGuide?.title || "Sole Proprietorship Guide";
  const displayBreadcrumb = breadcrumbLabel || activeGuide?.shortTitle || displayTitle;

  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Proprietorship Consultation");
  const [searchOpen, setSearchOpen] = useState(false);

  const openContact = (topic?: string) => {
    setModalTitle(topic || "Proprietorship Registration Advisory");
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
              <Link
                href="/proprietorship"
                className="hover:text-[#155EEF] transition-colors font-medium text-slate-800"
              >
                Proprietorship
              </Link>
            </li>
            <li className="text-slate-300">/</li>
            <li className="text-[#00B074] font-normal line-clamp-1 max-w-[320px] sm:max-w-none">
              {displayBreadcrumb}
            </li>
          </ol>
        </nav>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Main Article Content Column */}
          <article className="lg:col-span-8 bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-9 md:p-11 shadow-xs">
            {/* Header Badge & Title */}
            <div className="border-b border-slate-100 pb-6 mb-7">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/70 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>Proprietorship Advisory Guide</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#1F1646] tracking-tight leading-tight">
                {displayTitle}
              </h1>

              {/* Author & Timestamp Bar */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 font-normal mt-4 pt-3 border-t border-slate-50">
                <span className="inline-flex items-center gap-1.5 text-slate-800 font-medium">
                  <User className="w-3.5 h-3.5 text-emerald-600" />
                  {authorName}
                </span>
                <span className="text-slate-300">•</span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  Updated: {metaPublishedDate}
                </span>
                <span className="text-slate-300">•</span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  {readingTime}
                </span>
                <span className="text-slate-300">•</span>
                <span className="inline-flex items-center gap-1.5 text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded-md">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  MCA &amp; MSME Verified
                </span>
              </div>
            </div>

            {/* Injected Article Body */}
            <div className="prose prose-slate max-w-none space-y-6 sm:space-y-8 text-slate-900 leading-relaxed font-normal">
              {children}
            </div>

            {/* Bottom Callout Banner */}
            <div className="mt-10 pt-7 border-t border-slate-100">
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-emerald-50/80 via-white to-blue-50/50 border border-emerald-100 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-5">
                <div className="space-y-1 text-center sm:text-left">
                  <h3 className="text-base sm:text-lg font-semibold text-slate-950">
                    Ready to Register Your Sole Proprietorship?
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-700 font-normal">
                    Get Udyam MSME, GSTIN, and current bank account approval within 24 to 48 hours.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => openContact("Sole Proprietorship Registration")}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm text-white bg-slate-900 hover:bg-slate-800 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer shrink-0"
                >
                  <span>Start Proprietorship Registration</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </article>

          {/* Right Sticky Sidebar Column */}
          <aside className="lg:col-span-4 space-y-6 sticky top-24">
            {/* Expert Consult Box */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-4.5 shadow-2xs hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2 overflow-hidden">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 border-2 border-white flex items-center justify-center text-xs font-bold text-emerald-800">
                      MT
                    </div>
                    <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-xs font-bold text-blue-800">
                      SK
                    </div>
                    <div className="w-8 h-8 rounded-full bg-purple-100 border-2 border-white flex items-center justify-center text-xs font-bold text-purple-800">
                      AR
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-slate-900 leading-tight">
                      Consult Advisory Desk
                    </h3>
                    <p className="text-[11px] text-slate-600 font-normal">
                      Free 15-min assessment call
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => openContact("Advisory Desk Consultation")}
                  className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-medium text-xs transition-colors cursor-pointer"
                >
                  Connect
                </button>
              </div>
            </div>

            {/* Related Guides Card */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-2xs">
              <div className="flex items-center gap-2 mb-3.5 pb-2 border-b border-slate-100">
                <FileText className="w-4 h-4 text-emerald-600" />
                <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-900">
                  Related Guides
                </h2>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-[13px]">
                {PROPRIETORSHIP_RELATED_GUIDES.map((item) => {
                  const isActive = item.slug === currentSlug;
                  return (
                    <li key={item.slug}>
                      <Link
                        href={item.href}
                        className={`group flex items-start gap-2.5 p-2 rounded-xl transition-all duration-200 ${
                          isActive
                            ? "bg-emerald-50 text-emerald-800 font-semibold border border-emerald-200/60 shadow-3xs"
                            : "text-slate-800 hover:text-emerald-700 hover:bg-slate-50 font-normal"
                        }`}
                      >
                        <span
                          className={`mt-0.5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 ${
                            isActive
                              ? "text-emerald-600 font-bold"
                              : "text-slate-400 group-hover:text-emerald-600"
                          }`}
                        >
                          &rarr;
                        </span>
                        <span className="line-clamp-2 leading-relaxed">
                          {item.title}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Fast Assistance Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 shadow-md space-y-3">
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-emerald-400">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-semibold tracking-tight text-white">
                Launch with Zero Red Tape
              </h3>
              <p className="text-xs text-slate-300 font-normal leading-relaxed">
                Start your proprietorship firm with verified GSTIN, MSME Udyam certificate, and current account clearance handled by licensed corporate lawyers.
              </p>
              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => openContact("Direct Proprietorship Filing")}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#00B074] hover:bg-[#009B66] text-white font-medium text-xs transition-colors cursor-pointer text-center"
                >
                  Apply in 10 Minutes &rarr;
                </button>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Floating Live Chat Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          type="button"
          onClick={() => openContact("Live Expert Chat")}
          className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-full bg-[#00B074] hover:bg-[#009B66] text-white font-medium text-xs sm:text-[13px] shadow-lg hover:shadow-xl hover:shadow-emerald-500/20 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
        >
          <MessageCircle className="w-4 h-4 fill-white text-[#00B074]" />
          <span>Live chat with experts</span>
        </button>
      </div>

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
