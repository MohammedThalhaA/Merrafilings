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
  Globe2,
  CheckCircle2,
  AlertTriangle,
  Building2,
  Landmark,
  Coins,
} from "lucide-react";

export interface GstForeignersGuideItem {
  slug: string;
  title: string;
  href: string;
  shortTitle: string;
}

export const GST_FOREIGNERS_RELATED_GUIDES: GstForeignersGuideItem[] = [
  {
    slug: "gst-registration-for-foreigners-5-easy-steps",
    title: "GST Registration for Foreigners: 5 Easy Steps",
    href: "/gst-registration-for-foreigners/gst-registration-for-foreigners-5-easy-steps",
    shortTitle: "5-Step Registration Guide",
  },
  {
    slug: "gst-registration-for-foreigners-simplified",
    title: "Understanding GST Registration for Foreigners: A Complete Guide",
    href: "/gst-registration-for-foreigners/gst-registration-for-foreigners-simplified",
    shortTitle: "Foreign Business Key Insights",
  },
  {
    slug: "gst-registration-for-nri-businesses-in-india",
    title: "Comprehensive Guide to GST Registration for NRI Businesses in India",
    href: "/gst-registration-for-foreigners/gst-registration-for-nri-businesses-in-india",
    shortTitle: "NRI Business GST Guide",
  },
  {
    slug: "gst-registration-for-foreigners-in-india-new",
    title: "GST Registration for Foreigners in India: Legal Compliance",
    href: "/gst-registration-for-foreigners/gst-registration-for-foreigners-in-india-new",
    shortTitle: "Legal Compliance & Eligibility",
  },
];

interface GstForeignersGuideLayoutProps {
  currentSlug: string;
  title: string;
  breadcrumbLabel?: string;
  metaPublishedDate?: string;
  readingTime?: string;
  authorName?: string;
  children: React.ReactNode;
}

export default function GstForeignersGuideLayout({
  currentSlug,
  title,
  breadcrumbLabel,
  metaPublishedDate = "Oct 2026",
  readingTime = "8 min read",
  authorName = "Merrafilings Cross-Border Tax Practice",
  children,
}: GstForeignersGuideLayoutProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Foreign GST Registration Consultation");
  const [searchOpen, setSearchOpen] = useState(false);

  const openContact = (topic?: string) => {
    setModalTitle(topic || "Foreign Entity GST Registration Advisory");
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
            <Link href="/gst-registration-for-foreigners" className="hover:text-[#155EEF] transition-colors">GST for Foreigners</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="text-slate-800 font-medium truncate max-w-[280px] sm:max-w-md">
              {breadcrumbLabel || title}
            </span>
          </nav>

          {/* Guide Header Headline */}
          <div className="max-w-4xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-800 text-[11.5px] font-medium shadow-3xs">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Section 24 &amp; 27 of CGST Act • Non-Resident Taxable Person (NRTP) Desk</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1F1646] tracking-tight leading-tight">
              {title}
            </h1>
            <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal">
              A definitive guide on GST registration for foreign entities, NRIs, and multinational corporations entering India—covering Form GST REG-09, advance tax deposits, authorized resident representatives, and monthly GSTR-5 returns.
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
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#155EEF] hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex -space-x-2">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-xs group-hover:scale-105 transition-transform">
                    CA
                  </div>
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-xs group-hover:scale-105 transition-transform">
                    CS
                  </div>
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-500 to-orange-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-xs group-hover:scale-105 transition-transform">
                    JD
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 group-hover:text-blue-950 transition-colors">
                    Consult <span className="text-[#155EEF]">Experts</span>
                  </h3>
                  <div className="flex items-center gap-1 text-[11px] text-slate-500">
                    <span className="text-amber-500 font-semibold">★ 4.9</span>
                    <span>• Cross-Border Tax Litigators</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Foreign company or NRI trading in India? Consult our cross-border tax specialists for Indian authorized representative sponsorship, Form GST REG-09 drafting, and advance tax estimation.
              </p>
              <button
                onClick={() => openContact("Schedule Foreign GST Consultation")}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-900 text-white hover:bg-[#155EEF] text-xs font-medium transition-colors shadow-xs cursor-pointer"
              >
                Schedule Consultation Call
              </button>
            </div>

            {/* Widget 2: Related Guides (With Emerald Accent & Live Chat Button matching Screenshot) */}
            <div className="relative rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-slate-300 hover:shadow-md transition-all duration-300 p-5 overflow-hidden border-t-2 border-t-[#10B981]">
              <h3 className="text-sm font-bold text-slate-900 tracking-tight mb-4 pt-1">
                Related Guides
              </h3>

              <nav className="divide-y divide-slate-100" aria-label="Related Guides">
                {GST_FOREIGNERS_RELATED_GUIDES.map((item) => {
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

              {/* Floating Green "Live chat with experts" Button matching Screenshot */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => openContact("Live Chat with Foreign GST Specialist")}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#10B981] hover:bg-[#059669] text-white text-xs font-semibold shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Live chat with experts</span>
                </button>
              </div>
            </div>

            {/* Widget 3: NRTP Statutory Compliance Checklist */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/40 border border-indigo-100/80 shadow-xs hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300 space-y-3 group">
              <div className="flex items-center gap-2 text-indigo-950 font-semibold text-xs group-hover:text-[#5C3BFF] transition-colors">
                <Globe2 className="w-4 h-4 text-indigo-600 group-hover:scale-110 transition-transform" />
                <span>NRTP Statutory Mandates</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Zero Threshold Exemption:</strong> Mandatory registration under Section 24(v).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Form GST REG-09:</strong> Must be filed at least 5 days prior to commencing business.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Advance Tax Deposit:</strong> Equal to estimated tax liability under Section 27.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                  <span><strong>90-Day Validity:</strong> Extendable by another 90 days via Form GST REG-11.</span>
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
