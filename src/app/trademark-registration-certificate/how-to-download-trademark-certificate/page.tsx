"use client";

import React from "react";
import Link from "next/link";
import TrademarkCertificateGuideLayout from "@/components/TrademarkCertificateGuideLayout";
import {
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  FileText,
  Clock,
  Sparkles,
  ArrowRight,
  Search,
  Scale,
  Award,
  Download,
  Laptop,
  HelpCircle,
  AlertTriangle,
  FileDown,
} from "lucide-react";

export default function HowToDownloadTrademarkCertificatePage() {
  return (
    <TrademarkCertificateGuideLayout
      currentSlug="how-to-download-trademark-certificate"
      title="How to Download Trademark Registration Certificate Online in India?"
      breadcrumbLabel="How to Download Certificate"
      metaPublishedDate="October 2026"
      readingTime="8 min read"
      authorName="Merrafilings IP Legal Team"
    >
      {/* Intro */}
      <div className="space-y-4">
        <p className="text-[15px] leading-relaxed text-slate-900 font-normal">
          Once your trademark application status changes to <strong className="font-semibold text-emerald-700">&quot;Registered&quot;</strong> on the official Trade Marks Registry database, the final milestone is downloading your official <strong className="font-semibold text-slate-950">Trademark Registration Certificate (Form RG-2)</strong>. Since the Trade Marks Registry transitioned to a 100% paperless digital system under the Trade Marks Rules 2017, certificates are issued as cryptographically signed PDF documents downloadable online.
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          This comprehensive step-by-step guide explains exactly how to navigate the official IP India portal, retrieve your certificate PDF, verify digital signatures, and troubleshoot common download errors.
        </p>
      </div>

      {/* Snapshot Box */}
      <div className="my-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/50 border border-indigo-100/90 shadow-2xs">
        <div className="flex items-center gap-2 text-indigo-900 font-medium text-sm mb-3">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>Quick Download Prerequisites</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-normal text-slate-900">
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Required Information</span>
            <strong className="font-semibold text-slate-950 text-[13px]">Trademark Application Number</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Required Application Status</span>
            <strong className="font-semibold text-emerald-600 text-[13px]">&quot;Registered&quot; in IP India Portal</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Official Government Fee</span>
            <strong className="font-semibold text-slate-950 text-[13px]">₹0 (Free Electronic Download)</strong>
          </div>
        </div>
      </div>

      {/* Section 1: Step-by-Step Download Walkthrough */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. Step-by-Step Process to Download Trademark Certificate Online
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Follow these authoritative steps on the official Intellectual Property India website:
        </p>

        <div className="space-y-4 pt-2">
          {/* Step 1 */}
          <div className="p-4.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-start gap-3.5">
              <div className="w-7 h-7 rounded-lg bg-[#155EEF] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                1
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-slate-950">Visit the Official IP India Portal</h3>
                <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
                  Navigate to the official portal at <strong className="font-semibold text-slate-950">ipindiaonline.gov.in</strong> and access the &quot;Trade Mark Status&quot; or &quot;e-Register&quot; module.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-4.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-start gap-3.5">
              <div className="w-7 h-7 rounded-lg bg-[#155EEF] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                2
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-slate-950">Select &quot;National/IRDI Number&quot;</h3>
                <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
                  Choose the search option by application number. Enter your allocated 7-digit Trademark Application Number along with the security captcha code.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-4.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-start gap-3.5">
              <div className="w-7 h-7 rounded-lg bg-[#155EEF] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                3
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-slate-950">Verify Application Status Shows &quot;Registered&quot;</h3>
                <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
                  Click on your application row. Verify that the primary status indicates <strong className="font-semibold text-emerald-700">&quot;Registered&quot;</strong> and that a Certificate Number along with a registration date has been populated.
                </p>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="p-4.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-start gap-3.5">
              <div className="w-7 h-7 rounded-lg bg-[#155EEF] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                4
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-slate-950">Click &quot;View Registration Certificate&quot;</h3>
                <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
                  Scroll to the bottom of the details page or access the &quot;Documents&quot; tab. Click the hyperlink labeled <strong className="font-semibold text-slate-950">&quot;Certificate&quot;</strong> or <strong className="font-semibold text-slate-950">&quot;View Registration Certificate&quot;</strong>. The official Form RG-2 PDF will open in your browser.
                </p>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="p-4.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-start gap-3.5">
              <div className="w-7 h-7 rounded-lg bg-[#155EEF] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                5
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-slate-950">Download &amp; Securely Archive the PDF</h3>
                <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
                  Save the digital PDF copy in multiple secure corporate drives. Ensure the digital cryptographic signature of the Registrar is visible on the document.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Troubleshooting Missing Certificate Link */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Troubleshooting Common Trademark Certificate Download Issues
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          In certain situations, applicants encounter technical hurdles when trying to download their certificate:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
            <div className="flex items-center gap-2 text-amber-700 font-semibold text-sm">
              <AlertTriangle className="w-4 h-4" />
              <span>Issue 1: Status is &quot;Registered&quot; but No Link</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
              <strong className="font-semibold text-slate-950">Reason:</strong> Certificate generation batch processing delay. The Registry typically takes 7 to 21 business days after registration order approval to digitally sign and upload the PDF file.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
            <div className="flex items-center gap-2 text-purple-700 font-semibold text-sm">
              <FileDown className="w-4 h-4" />
              <span>Issue 2: Certificate PDF is Corrupt or Blank</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
              <strong className="font-semibold text-slate-950">Resolution:</strong> Clear browser cache or use Adobe Acrobat Reader. If the file remains unreadable on the server, an advocate must submit an electronic grievance ticket to IP India IT support.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
            <div className="flex items-center gap-2 text-rose-700 font-semibold text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>Issue 3: Clerical Error on Certificate</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
              <strong className="font-semibold text-slate-950">Resolution:</strong> If your proprietor name, logo graphic, or address has a typographical error, do not use the incorrect certificate. File Form TM-M immediately to request Registry rectification.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
            <div className="flex items-center gap-2 text-emerald-700 font-semibold text-sm">
              <Scale className="w-4 h-4" />
              <span>Issue 4: Certified Copy Needed for Court</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
              <strong className="font-semibold text-slate-950">Resolution:</strong> For commercial court lawsuits, high court injunctions, or customs recordal, an ordinary download is often insufficient. File Form TM-M to request an official Certified True Copy stamped by the Registrar.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: FAQs */}
      <section className="space-y-4 pt-8 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3 pt-2">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <h3 className="text-sm font-semibold text-slate-950">Is there any fee to download the trademark certificate?</h3>
            <p className="text-xs sm:text-[13px] text-slate-900 font-normal mt-1 leading-relaxed">
              No. Electronic downloading of the registered Form RG-2 certificate from the official IP India portal is completely free of government fees.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <h3 className="text-sm font-semibold text-slate-950">How can I verify if a downloaded trademark certificate is genuine?</h3>
            <p className="text-xs sm:text-[13px] text-slate-900 font-normal mt-1 leading-relaxed">
              You can verify any certificate by matching the Application Number and Certificate Number directly on the public IP India e-Register database at ipindiaonline.gov.in. Genuine certificates feature the national emblem and the digital signature timestamp of the Registrar.
            </p>
          </div>
        </div>
      </section>
    </TrademarkCertificateGuideLayout>
  );
}
