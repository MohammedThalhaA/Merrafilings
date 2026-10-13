"use client";

import React from "react";
import { ShieldCheck, Phone, Mail, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  const footerColumns = [
    {
      title: "Start a Business",
      links: [
        { name: "Private Limited Company", href: "#pvt-ltd" },
        { name: "One Person Company (OPC)", href: "#opc" },
        { name: "Limited Liability Partnership", href: "#llp" },
        { name: "Section 8 Non-Profit", href: "/section-8-company-registration" },
        { name: "Partnership Firm", href: "/partnership" },
        { name: "Sole Proprietorship", href: "/proprietorship" },
        { name: "USA LLC Incorporation", href: "#us-llc" },
      ],
    },
    {
      title: "Government Licenses",
      links: [
        { name: "GST Registration", href: "#gst-reg" },
        { name: "Udyam / MSME Registration", href: "#msme" },
        { name: "FSSAI Food License", href: "#fssai" },
        { name: "Import Export Code (IEC)", href: "#iec" },
        { name: "Startup India DPIIT", href: "#startup-india" },
        { name: "Shop & Establishment", href: "#shop" },
        { name: "Professional Tax (PT)", href: "#pt" },
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
        { name: "Trademark Registration", href: "#tm" },
        { name: "Trademark Objection Reply", href: "#tm-obj" },
        { name: "Trademark Renewal", href: "#tm-renew" },
        { name: "Copyright Registration", href: "#copyright" },
        { name: "Design Registration", href: "#design" },
        { name: "Provisional Patent", href: "#patent" },
        { name: "Trademark Watch Service", href: "#tm-watch" },
      ],
    },
    {
      title: "Popular Tools",
      links: [
        { name: "GST Number Verification", href: "#gst-verify" },
        { name: "Company Name Search", href: "#company-search" },
        { name: "Trademark Search Engine", href: "#tm-search" },
        { name: "HSN / SAC Code Finder", href: "#hsn-finder" },
        { name: "Income Tax Calculator", href: "#it-calc" },
        { name: "Startup Cost Estimator", href: "#cost-calc" },
        { name: "LEDGERS Accounting Cloud", href: "#ledgers" },
      ],
    },
  ];

  return (
    <footer className="bg-white border-t border-[#E4E7EC] font-sans">
      {/* Top Banner Contact / Helpline */}
      <div className="border-b border-[#E4E7EC] bg-[#FBFAF7]/60 py-6">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* Logo Badge */}
            <div className="w-[110px] h-[34px] rounded-full border-2 border-[#15803D] bg-white flex items-center justify-center px-2 py-0.5 shadow-2xs">
              <span className="text-[13px] font-bold text-[#15803D]">
                Merra<span className="text-[#EA580C]">Filings</span>
              </span>
            </div>
            <span className="text-[13px] text-[#475467] hidden sm:inline">
              | India&apos;s trusted corporate services &amp; compliance cloud
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-[13px] text-[#475467]">
            <a href="tel:18001234567" className="flex items-center gap-1.5 hover:text-[#155EEF] transition-colors">
              <Phone className="w-4 h-4 text-[#155EEF]" />
              <span className="font-semibold text-[#111827]">Toll-Free:</span> 1800 123 4567
            </a>
            <a href="mailto:support@merrafilings.com" className="flex items-center gap-1.5 hover:text-[#155EEF] transition-colors">
              <Mail className="w-4 h-4 text-[#155EEF]" />
              <span>support@merrafilings.com</span>
            </a>
            <div className="flex items-center gap-1 text-[#15803D] font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>ISO 27001 Certified</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links Columns */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {footerColumns.map((col, idx) => (
            <div key={idx} className="space-y-3.5">
              <h4 className="text-[13.5px] font-bold text-[#111827] uppercase tracking-wider">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a
                      href={link.href}
                      className="text-[13px] text-[#475467] hover:text-[#155EEF] transition-colors block leading-snug"
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
        <div className="mt-14 pt-8 border-t border-[#E4E7EC]">
          <p className="text-[12px] font-semibold text-[#111827] uppercase tracking-wider mb-3">
            Key Corporate Offices
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-[12.5px] text-[#475467]">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#155EEF] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#111827] block">Bengaluru (Tech Hub)</strong>
                Indiranagar, 100 Feet Road, Bengaluru - 560038
              </div>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#155EEF] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#111827] block">Chennai (HQ)</strong>
                Mount Road, Anna Salai, Chennai - 600002
              </div>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#155EEF] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#111827] block">Mumbai</strong>
                Bandra Kurla Complex (BKC), Mumbai - 400051
              </div>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#155EEF] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#111827] block">New Delhi / NCR</strong>
                Connaught Place, Barakhamba Road, New Delhi - 110001
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="mt-10 pt-6 border-t border-[#E4E7EC] flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-[#667085]">
          <p>
            © 2026 MerraFilings Technologies India Private Limited. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <a href="#terms" className="hover:text-[#111827] transition-colors">
              Terms &amp; Conditions
            </a>
            <a href="#privacy" className="hover:text-[#111827] transition-colors">
              Privacy Policy
            </a>
            <a href="#refund" className="hover:text-[#111827] transition-colors">
              Refund Policy
            </a>
            <a href="#security" className="hover:text-[#111827] transition-colors">
              Security
            </a>
            <a href="#disclaimer" className="hover:text-[#111827] transition-colors">
              Legal Disclaimer
            </a>
          </div>
        </div>

        <div className="mt-4 text-[11px] text-[#98A2B3] leading-relaxed">
          Disclaimer: MerraFilings is a corporate services technology platform that connects businesses
          with qualified Chartered Accountants, Company Secretaries, and legal professionals. MerraFilings
          is not a law firm and does not provide legal advice directly; all filings are prepared under the
          supervision of independent practicing professionals registered with ICAI, ICSI, and the Bar Council of India.
        </div>
      </div>
    </footer>
  );
}
