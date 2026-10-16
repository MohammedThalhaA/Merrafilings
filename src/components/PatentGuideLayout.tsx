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
  Globe2,
} from "lucide-react";

export interface PatentGuideItem {
  slug: string;
  title: string;
  href: string;
  shortTitle: string;
}

export const PATENT_RELATED_GUIDES: PatentGuideItem[] = [
  {
    slug: "indian-patent-application-easy-pct-process",
    title: "Understanding Indian Patent Application and Easy PCT Application Process",
    href: "/patent-registration/indian-patent-application-easy-pct-process",
    shortTitle: "PCT & International Filing",
  },
  {
    slug: "easy-patent-registration-simplifying-your-path",
    title: "Easy to Register Patent: Simplifying Your Path to Innovation",
    href: "/patent-registration/easy-patent-registration-simplifying-your-path",
    shortTitle: "Easy Path to Innovation",
  },
  {
    slug: "patent-registration-guide-protect-your-invention",
    title: "Patent Registration: Your Complete Guide to Securing Your Invention and Protecting Your Ideas",
    href: "/patent-registration/patent-registration-guide-protect-your-invention",
    shortTitle: "Complete Guide to Securing Ideas",
  },
  {
    slug: "patent-registration-key-steps-and-insights",
    title: "Understanding Patent Registration: Key Steps and Essential Insights",
    href: "/patent-registration/patent-registration-key-steps-and-insights",
    shortTitle: "Key Steps & Essential Insights",
  },
  {
    slug: "patent-registration-essential-guide-to-ip-protection",
    title: "Patent Registration: Your Essential Guide to IP Protection",
    href: "/patent-registration/patent-registration-essential-guide-to-ip-protection",
    shortTitle: "Essential Guide to IP Protection",
  },
  {
    slug: "patent-registration-in-chennai-essential-guide",
    title: "Patent Registration in Chennai: The Essential Guide for Innovators & Startups",
    href: "/patent-registration/patent-registration-in-chennai-essential-guide",
    shortTitle: "Patent Registration in Chennai",
  },
  {
    slug: "understanding-patents-a-comprehensive-guide",
    title: "Understanding Patents: A Comprehensive Guide to Protecting Inventions",
    href: "/patent-registration/understanding-patents-a-comprehensive-guide",
    shortTitle: "Comprehensive Patent Guide",
  },
];

interface PatentGuideLayoutProps {
  currentSlug: string;
  title: string;
  breadcrumbLabel?: string;
  metaPublishedDate?: string;
  readingTime?: string;
  authorName?: string;
  children: React.ReactNode;
}

export default function PatentGuideLayout({
  currentSlug,
  title,
  breadcrumbLabel,
  metaPublishedDate = "Oct 2026",
  readingTime = "9 min read",
  authorName = "Merrafilings Patent Legal Team",
  children,
}: PatentGuideLayoutProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Patent Registration Legal Advisory");
  const [searchOpen, setSearchOpen] = useState(false);

  const openContact = (topic?: string) => {
    setModalTitle(topic || "Patent Registration & PCT Advisory");
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF9] text-[#111827] flex flex-col font-sans selection:bg-purple-100 selection:text-purple-900">
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
                href="/patent-registration"
                className="hover:text-[#155EEF] transition-colors font-medium text-slate-800"
              >
                Patent Registration
              </Link>
            </li>
            <li className="text-slate-300">/</li>
            <li className="text-[#00B074] font-normal line-clamp-1 max-w-[320px] sm:max-w-none">
              {breadcrumbLabel || title}
            </li>
          </ol>
        </nav>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Article Body */}
          <article className="lg:col-span-8 bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 lg:p-12">
            {/* Meta Header */}
            <div className="flex items-center gap-3 sm:gap-4 pb-6 border-b border-slate-100 flex-wrap text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 text-white flex items-center justify-center font-semibold text-xs shadow-xs">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-medium text-slate-900">{authorName}</span>
                  <span className="block text-[11px] text-emerald-600 font-normal">
                    Certified Patent Agents &amp; Attorneys
                  </span>
                </div>
              </div>
              <span className="text-slate-300">•</span>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>Updated: {metaPublishedDate}</span>
              </div>
              <span className="text-slate-300">•</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{readingTime}</span>
              </div>
            </div>

            {/* Main Article Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#1F1646] tracking-tight mt-6 mb-6 leading-tight">
              {title}
            </h1>

            {/* Article Children Content */}
            <div className="prose prose-slate max-w-none text-slate-900 font-normal text-[14.5px] leading-relaxed space-y-6">
              {children}
            </div>

            {/* Bottom In-Article Consultation Banner */}
            <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#1F1646] via-[#2A1E5C] to-[#401F78] text-white relative overflow-hidden shadow-lg">
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-emerald-300 text-xs font-medium">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Statutory Protection Under The Patents Act 1970</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-normal text-white">
                    Ready to Protect Your Invention with a 20-Year Patent?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 font-normal max-w-xl" style={{ color: "#E2E8F0" }}>
                    Lock in your priority date today with an official provisional patent application or draft your complete techno-legal specification with registered Indian Patent Agents.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => openContact(`Patent Advisory - ${title}`)}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-medium text-sm shadow-md hover:shadow-xl transition-all duration-200 shrink-0 cursor-pointer flex items-center gap-2 group"
                >
                  <span>File Patent Application</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </article>

          {/* Right Column: Clean Sticky Sidebar */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24 self-start h-fit">
            {/* Widget 1: Consult Experts */}
            <div
              onClick={() => openContact("Patent Attorney Assessment Call")}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-300 p-5 cursor-pointer group hover:border-[#155EEF]"
            >
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3 overflow-hidden shrink-0">
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover group-hover:scale-105 transition-transform"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces"
                    alt="Patent Attorney 1"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover group-hover:scale-105 transition-transform"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces"
                    alt="Patent Attorney 2"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover group-hover:scale-105 transition-transform"
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=faces"
                    alt="Patent Attorney 3"
                  />
                </div>
                <div>
                  <div className="text-[14.5px] font-medium text-slate-800 group-hover:text-[#155EEF] transition-colors">
                    Consult <span className="text-[#155EEF]">Experts</span>
                  </div>
                  <div className="text-[11.5px] text-slate-500 font-normal">
                    Direct call with registered patent attorneys
                  </div>
                </div>
              </div>
            </div>

            {/* Widget 2: Related Guides (7 patent guides with active highlight & emerald top border) */}
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden border-t-2 border-t-emerald-500">
              <div className="p-5">
                <h3 className="font-semibold text-[15px] text-[#0F172A] mb-4 flex items-center justify-between">
                  <span>Related Guides</span>
                  <FileText className="w-4 h-4 text-emerald-600" />
                </h3>
                <ul className="space-y-2 text-[13px]">
                  {PATENT_RELATED_GUIDES.map((guide) => {
                    const isActive = guide.slug === currentSlug;
                    return (
                      <li key={guide.slug} className="border-b border-slate-100 pb-2.5 last:border-0 last:pb-0">
                        <Link
                          href={guide.href}
                          className={`flex items-start gap-3 p-2 rounded-xl transition-all duration-200 group ${
                            isActive
                              ? "bg-emerald-50/90 text-emerald-950 font-semibold border-l-2 border-emerald-600 pl-3 shadow-3xs"
                              : "text-[#1E293B] font-medium hover:text-[#155EEF] hover:bg-[#F0F7FF] hover:pl-2.5"
                          }`}
                        >
                          <span
                            className={`shrink-0 text-[14px] leading-tight font-semibold transition-transform duration-200 mt-0.5 ${
                              isActive
                                ? "text-emerald-700"
                                : "text-[#155EEF] group-hover:translate-x-1"
                            }`}
                          >
                            &rarr;
                          </span>
                          <span className="leading-snug">{guide.title}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                {/* Live Chat with Experts button inside Related Guides container */}
                <div
                  onClick={() => openContact("Live Chat Request - Patent Registration")}
                  className="mt-5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-xl p-3 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold leading-tight">Live chat with experts</div>
                      <div className="text-[10.5px] text-emerald-100 font-normal">Online &amp; available now</div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-emerald-100 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>

            {/* Widget 3: Quick Prior-Art Patentability Audit Tool */}
            <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl border border-slate-200/90 p-5 shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-purple-700 text-xs font-semibold uppercase tracking-wider">
                <Search className="w-3.5 h-3.5" />
                <span>Complimentary Assessment</span>
              </div>
              <div>
                <h4 className="text-[15px] font-medium text-slate-900 leading-snug">
                  Novelty &amp; Prior-Art Pre-Check
                </h4>
                <p className="text-[12px] text-slate-500 font-normal mt-1">
                  Have a novel invention or technical software workflow? Our patent agents screen Indian InPASS, USPTO, and WIPO databases for potential blocking patents.
                </p>
              </div>
              <button
                type="button"
                onClick={() => openContact("Prior-Art Pre-Check")}
                className="w-full py-2.5 px-4 rounded-xl text-center text-xs font-medium text-white bg-[#155EEF] hover:bg-[#124bbf] shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>Request Prior-Art Audit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </aside>
        </div>
      </main>

      <Footer />

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
    </div>
  );
}
