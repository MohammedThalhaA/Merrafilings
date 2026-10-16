"use client";

import React from "react";
import { ShieldCheck, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const footerColumns = [
    {
      title: "Start a Business",
      links: [
        { name: "Private Limited Company", href: "/company-registration" },
        { name: "Indian Subsidiary", href: "/indian-subsidiary" },
        { name: "One Person Company (OPC)", href: "/one-person-company" },
        { name: "Limited Liability Partnership", href: "/llp-registration" },
        { name: "Section 8 Non-Profit", href: "/section-8-company-registration" },
        { name: "Public Limited Company", href: "/public-limited-company" },
        { name: "Producer Company", href: "/producer-company-registration" },
        { name: "Trust Registration", href: "/trust-registration" },
        { name: "Partnership Firm", href: "/partnership" },
        { name: "Sole Proprietorship", href: "/proprietorship" },
      ],
    },
    {
      title: "Government Licenses",
      links: [
        { name: "Startup India DPIIT", href: "/start-up-india" },
        { name: "LEI Code Registration", href: "/lei-code" },
        { name: "Trade License", href: "/trade-license" },
        { name: "FSSAI Registration", href: "/fssai" },
        { name: "FSSAI Food License", href: "/fssai-license" },
        { name: "ISO Certification", href: "/iso-registration" },
        { name: "ESI Registration", href: "/esi-registration" },
        { name: "Professional Tax Registration", href: "/professional-tax-registration" },
        { name: "GST Registration", href: "#gst-reg" },
        { name: "Udyam / MSME Registration", href: "/udyam-registration" },
        { name: "Import Export Code (IEC)", href: "#iec" },
        { name: "Shop & Establishment", href: "/shop-establishment-act-registration" },
      ],
    },
    {
      title: "Tax & Compliance",
      links: [
        { name: "Income Tax Return (ITR)", href: "#itr" },
        { name: "TDS Return Filing", href: "#tds" },
        { name: "GST Return Filing (GSTR-3B)", href: "#gst-return" },
        { name: "ROC Annual Filing (AOC-4)", href: "#roc-annual" },
        { name: "Director KYC (DIR-3)", href: "#dir3" },
        { name: "Accounting & Bookkeeping", href: "#accounting" },
        { name: "Tax Audit Assistance", href: "#tax-audit" },
      ],
    },
    {
      title: "Trademarks & IP",
      links: [
        { name: "Trademark Registration", href: "/trademark-registration" },
        { name: "Trademark Objection Reply", href: "/trademark-objection" },
        { name: "Trademark Opposition", href: "/trademark-opposition" },
        { name: "Trademark Renewal", href: "/trademark-renewal" },
        { name: "Trademark Certificate", href: "/trademark-registration-certificate" },
        { name: "Copyright Registration", href: "/copyright-registration" },
        { name: "Patent Registration", href: "/patent-registration" },
        { name: "Design Registration", href: "/design-registration" },
      ],
    },
    {
      title: "Popular Resources",
      links: [
        { name: "GST Number Verification", href: "#gst-verify" },
        { name: "Company Name Search", href: "#company-search" },
        { name: "Trademark Search Engine", href: "#tm-search" },
        { name: "HSN / SAC Code Finder", href: "#hsn-finder" },
        { name: "Income Tax Calculator", href: "#it-calc" },
        { name: "Startup Cost Estimator", href: "#cost-calc" },
        { name: "Merra Client Workspace", href: "#workspace" },
      ],
    },
  ];

  return (
    <footer className="bg-white border-t border-slate-200/80 font-sans">
      {/* Top Banner Contact / Helpline */}
      <div className="border-b border-slate-200/80 bg-[#FAF9F6] py-5">
        <div className="w-full max-w-[1400px] 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* Minimalist Logo */}
            <div className="flex items-center gap-2">
              <span className="font-serif text-lg tracking-tight text-slate-900 font-normal">
                Merra<span className="text-emerald-700 italic">filings</span>
              </span>
              <span className="text-[10px] font-medium tracking-wide uppercase px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                Corporate Advisory
              </span>
            </div>
            <span className="text-xs text-slate-500 hidden sm:inline">
              | India&apos;s modern corporate advisory &amp; statutory compliance platform
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs text-slate-600">
            <a href="tel:18001234567" className="flex items-center gap-1.5 hover:text-slate-900 transition-colors">
              <Phone className="w-3.5 h-3.5 text-slate-700" />
              <span className="font-semibold text-slate-900">Toll-Free:</span> 1800 123 4567
            </a>
            <a href="mailto:support@merrafilings.com" className="flex items-center gap-1.5 hover:text-slate-900 transition-colors">
              <Mail className="w-3.5 h-3.5 text-slate-700" />
              <span>advisory@merrafilings.com</span>
            </a>
            <div className="flex items-center gap-1 text-emerald-700 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>ISO 27001 Certified Vault</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links Columns */}
      <div className="w-full max-w-[1400px] 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 2xl:gap-12">
          {footerColumns.map((col, idx) => (
            <div key={idx} className="space-y-3.5">
              <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a
                      href={link.href}
                      className="text-xs sm:text-[13px] text-slate-600 hover:text-slate-900 transition-colors block leading-snug"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Office Locations */}
        <div className="mt-14 pt-8 border-t border-slate-200/80">
          <p className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-3">
            Principal Corporate Desks
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-slate-600">
            <div className="p-3.5 rounded-xl bg-[#FAF9F6] border border-slate-200/80 flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-slate-700 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-medium">Bengaluru</strong>
                Indiranagar, 100 Feet Road, Bengaluru - 560038
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-[#FAF9F6] border border-slate-200/80 flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-slate-700 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-medium">Chennai</strong>
                Mount Road, Anna Salai, Chennai - 600002
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-[#FAF9F6] border border-slate-200/80 flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-slate-700 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-medium">Mumbai</strong>
                Bandra Kurla Complex (BKC), Mumbai - 400051
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-[#FAF9F6] border border-slate-200/80 flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-slate-700 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-medium">New Delhi / NCR</strong>
                Connaught Place, Barakhamba Road, New Delhi - 110001
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="mt-10 pt-6 border-t border-slate-200/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © 2026 Merrafilings Technologies India Private Limited. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <a href="#terms" className="hover:text-slate-900 transition-colors">
              Terms &amp; Conditions
            </a>
            <a href="#privacy" className="hover:text-slate-900 transition-colors">
              Privacy Policy
            </a>
            <a href="#refund" className="hover:text-slate-900 transition-colors">
              Refund Policy
            </a>
            <a href="#security" className="hover:text-slate-900 transition-colors">
              Information Security
            </a>
            <a href="#disclaimer" className="hover:text-slate-900 transition-colors">
              Legal Disclaimer
            </a>
          </div>
        </div>

        <div className="mt-4 text-[11px] text-slate-500 leading-relaxed font-normal">
          Disclaimer: Merrafilings is a corporate services technology advisory platform that connects businesses
          with qualified Chartered Accountants, Company Secretaries, and legal practitioners. Merrafilings
          is not a law firm and does not provide legal advice directly; all statutory filings are drafted and reviewed under the
          supervision of independent practicing professionals registered with ICAI, ICSI, and the Bar Council of India.
        </div>
      </div>
    </footer>
  );
}
