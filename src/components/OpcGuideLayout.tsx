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
  Building,
} from "lucide-react";

export interface OpcGuideItem {
  slug: string;
  title: string;
  href: string;
  shortTitle: string;
}

export const OPC_RELATED_GUIDES: OpcGuideItem[] = [
  {
    slug: "opc-registration-process-guide",
    title: "Understanding the OPC Registration Process: A Complete Guide",
    href: "/one-person-company/opc-registration-process-guide",
    shortTitle: "OPC Registration Process Guide",
  },
  {
    slug: "register-an-opc-stepbystep-guide",
    title: "How to Register an OPC: A Step-by-Step Guide",
    href: "/one-person-company/register-an-opc-stepbystep-guide",
    shortTitle: "Step-by-Step OPC Registration",
  },
  {
    slug: "opc-registration-fee-how-to-apply-easily",
    title: "Understanding OPC Registration Fee: How to Apply",
    href: "/one-person-company/opc-registration-fee-how-to-apply-easily",
    shortTitle: "OPC Registration Fee & Application",
  },
  {
    slug: "understanding-one-person-company-structure",
    title: "One Person Company: A Comprehensive Guide to Structure & Success",
    href: "/one-person-company/understanding-one-person-company-structure",
    shortTitle: "OPC Structure & Advantages",
  },
  {
    slug: "opc-registration-streamline-your-business-setup",
    title: "Understanding OPC Registration: Streamline Your Business Setup",
    href: "/one-person-company/opc-registration-streamline-your-business-setup",
    shortTitle: "Streamline Your OPC Setup",
  },
];

interface OpcGuideLayoutProps {
  currentSlug: string;
  title?: string;
  breadcrumbLabel?: string;
  metaPublishedDate?: string;
  readingTime?: string;
  authorName?: string;
  children: React.ReactNode;
}

export default function OpcGuideLayout({
  currentSlug,
  title,
  breadcrumbLabel,
  metaPublishedDate = "Oct 2026",
  readingTime = "8 min read",
  authorName = "Merrafilings Corporate Secretarial Desk",
  children,
}: OpcGuideLayoutProps) {
  const activeGuide = OPC_RELATED_GUIDES.find((g) => g.slug === currentSlug);
  const displayTitle = title || activeGuide?.title || "One Person Company Guide";
  const displayBreadcrumb = breadcrumbLabel || activeGuide?.shortTitle || displayTitle;

  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("One Person Company Consultation");
  const [searchOpen, setSearchOpen] = useState(false);

  const openContact = (topic?: string) => {
    setModalTitle(topic || "One Person Company Advisory");
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
                href="/one-person-company"
                className="hover:text-[#155EEF] transition-colors font-medium text-slate-800"
              >
                One Person Company
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
          <article className="lg:col-span-8 bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-9 md:p-11 shadow-xs">
            {/* Header Badge & Title */}
            <div className="border-b border-slate-100 pb-6 mb-7">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/70 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>One Person Company Advisory Guide</span>
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
                  Companies Act, 2013 &amp; MCA V3 Compliant
                </span>
              </div>
            </div>

            {/* Injected Article Body */}
            <div className="space-y-8 text-slate-900 leading-relaxed font-normal">
              {children}
            </div>

            {/* End of Article Call to Action */}
            <div className="mt-12 pt-8 border-t border-slate-100">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50/70 via-slate-50 to-blue-50/40 border border-emerald-200/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-emerald-900 font-semibold text-base">
                    <Building className="w-5 h-5 text-emerald-600" />
                    <span>Ready to Incorporate Your One Person Company?</span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-slate-800 font-normal max-w-xl leading-relaxed">
                    Get end-to-end support from licensed Chartered Accountants &amp; Company Secretaries. Includes Director DSC, RUN name approval, SPICe+ drafting, Nominee consent, PAN, TAN &amp; zero-balance bank opening in 3-5 days.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => openContact("One Person Company Registration")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] rounded-xl font-medium text-xs sm:text-sm text-white bg-slate-900 hover:bg-slate-800 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer shrink-0"
                >
                  <span>Start OPC Registration</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </article>

          {/* Right Sticky Sidebar Column */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24 self-start h-fit">
            {/* Widget 1: Consult Experts Box (Matching Screenshot) */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-4.5 shadow-2xs hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2 overflow-hidden">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 border-2 border-white flex items-center justify-center text-xs font-bold text-emerald-800 shadow-xs">
                      MT
                    </div>
                    <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-xs font-bold text-blue-800 shadow-xs">
                      SK
                    </div>
                    <div className="w-8 h-8 rounded-full bg-purple-100 border-2 border-white flex items-center justify-center text-xs font-bold text-purple-800 shadow-xs">
                      AR
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-[13px] font-semibold text-slate-900 leading-tight">
                      Consult <span className="text-[#155EEF]">Experts</span>
                    </h3>
                    <p className="text-[11px] text-slate-600 font-normal">
                      Free 15-min assessment call
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => openContact("One Person Company Consultation with Experts")}
                  className="px-3.5 py-2 min-h-[44px] rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-medium text-xs transition-colors cursor-pointer flex items-center justify-center"
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
              <ul className="space-y-2.5 text-xs sm:text-[13px]">
                {OPC_RELATED_GUIDES.map((item) => {
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

              {/* Live Chat with Experts Button (Matching Screenshot) */}
              <div className="pt-4 mt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => openContact("Live Chat OPC Support")}
                  className="w-full py-3 px-4 min-h-[44px] rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-medium text-xs sm:text-[13px] flex items-center justify-center gap-2 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Live chat with experts</span>
                </button>
              </div>
            </div>

            {/* Widget 3: Fast Legal Assistance Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 shadow-md space-y-3">
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-emerald-400">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-semibold tracking-tight text-white">
                Fast-Track MCA V3 Incorporation
              </h3>
              <p className="text-xs text-slate-300 font-normal leading-relaxed">
                Launch your solo venture with limited liability protection. Complete SPICe+ Part A &amp; B drafting, Nominee consent Form INC-3, and zero-fee MCA registration under ₹15 Lakhs capital.
              </p>
              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => openContact("OPC Fast Track Setup")}
                  className="w-full py-2.5 px-3 min-h-[44px] rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs transition-colors cursor-pointer flex items-center justify-center"
                >
                  Contact Corporate Desk
                </button>
              </div>
            </div>
          </aside>
        </div>
      </main>

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
