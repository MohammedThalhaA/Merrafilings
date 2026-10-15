"use client";

import React from "react";
import Link from "next/link";
import TrademarkGuideLayout from "@/components/TrademarkGuideLayout";
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
  Building,
  Layers,
  HelpCircle,
  Award,
  AlertTriangle,
  BadgePercent,
  Check,
} from "lucide-react";

export default function HowToApplyTrademarkPage() {
  return (
    <TrademarkGuideLayout
      currentSlug="how-to-apply-for-trademark-registration"
      title="How To Apply For Trademark Registration Online in India?"
      breadcrumbLabel="How to Apply for Trademark Registration"
      metaPublishedDate="October 2026"
      readingTime="9 min read"
      authorName="Merrafilings IP Legal Team"
    >
      {/* Intro Overview */}
      <div className="space-y-4">
        <p className="text-[15px] leading-relaxed text-slate-700">
          Understanding <strong className="font-semibold text-slate-900">how to apply for trademark registration online</strong> is a vital milestone for entrepreneurs, emerging startups, and established enterprises seeking to secure legal ownership over their brand identity. In India, trademark protection is statutory, governed by the <strong className="font-semibold text-slate-900">Trade Marks Act, 1999</strong> and the <strong className="font-semibold text-slate-900">Trade Marks Rules, 2017</strong>, administered by the Office of the Controller General of Patents, Designs and Trade Marks (CGPDTM).
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-600 font-normal">
          Securing a trademark grants you the exclusive legal right to use your brand name, logo, slogan, or distinctive packaging across India, effectively preventing competitors from copying your mark or trading on your goodwill. Once your application is lodged, you gain immediate permission to affix the <strong className="font-medium text-slate-800">™</strong> symbol to your branding, transitioning to the coveted <strong className="font-medium text-slate-800">®</strong> mark upon registration certificate grant.
        </p>
      </div>

      {/* Quick Summary Highlights Box */}
      <div className="my-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/50 border border-indigo-100/90 shadow-2xs">
        <div className="flex items-center gap-2 text-indigo-900 font-medium text-sm mb-3">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>Key Application Snapshot</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-normal text-slate-900">
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-400 text-[11px] mb-1">Governing Act</span>
            <strong className="font-semibold text-slate-900 text-[13px]">Trade Marks Act, 1999</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-400 text-[11px] mb-1">Govt Fee (MSME / Individual)</span>
            <strong className="font-semibold text-emerald-600 text-[13px]">₹4,500 per class</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-400 text-[11px] mb-1">Statutory Protection Period</span>
            <strong className="font-semibold text-slate-900 text-[13px]">10 Years (Renewable)</strong>
          </div>
        </div>
      </div>

      {/* Section 1: What is a Trademark Application */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          What is a Trademark Registration Application?
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-600 font-normal">
          A trademark registration application is an official legal submission made to the Trade Marks Registry requesting statutory exclusivity for a brand marker. The application identifies the applicant (proprietor), specifies the exact wordmark, device (logo), or label, and classifies the specific goods or commercial services under the international <strong className="font-medium text-slate-800">Nice Classification system (Classes 1 to 45)</strong>.
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-600 font-normal">
          Under Indian trademark jurisprudence, an application can be filed under different categories, including:
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700 font-normal pt-1">
          <li className="flex items-center gap-2 p-2.5 bg-slate-50 rounded-lg border border-slate-100">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span><strong className="font-medium text-slate-800">Word Marks:</strong> Text names, acronyms, or letters</span>
          </li>
          <li className="flex items-center gap-2 p-2.5 bg-slate-50 rounded-lg border border-slate-100">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span><strong className="font-medium text-slate-800">Device Marks:</strong> Artistic logos, emblems, and visual icons</span>
          </li>
          <li className="flex items-center gap-2 p-2.5 bg-slate-50 rounded-lg border border-slate-100">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span><strong className="font-medium text-slate-800">Composite Marks:</strong> Brand names integrated with unique logo designs</span>
          </li>
          <li className="flex items-center gap-2 p-2.5 bg-slate-50 rounded-lg border border-slate-100">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span><strong className="font-medium text-slate-800">Taglines &amp; Slogans:</strong> Distinct marketing catchphrases</span>
          </li>
        </ul>
      </section>

      {/* Section 2: Step-by-Step Online Filing Process */}
      <section className="space-y-6 pt-8 border-t border-slate-100">
        <div>
          <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
            Step-by-Step Procedure to Apply for Trademark Registration Online
          </h2>
          <p className="text-sm text-slate-600 font-normal mt-1">
            Follow this authoritative, compliant roadmap to submit your application on the IP India portal smoothly:
          </p>
        </div>

        <div className="space-y-5">
          {/* Step 1 */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#155EEF]/50 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm shrink-0">
                1
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-medium text-slate-900">
                  Select a Distinctive Brand Name or Logo
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                  Choose a mark that is inherently distinctive. Coined words (invented words like Kodak or Xerox) and arbitrary terms offer the strongest statutory protection. Avoid generic or descriptive terms (such as &quot;Pure Milk&quot; or &quot;Fast Courier&quot;) that face statutory rejection under Section 9(1)(b) of the Trade Marks Act.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#155EEF]/50 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm shrink-0">
                2
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-medium text-slate-900">
                  Conduct a Comprehensive Public Trademark Search
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                  Prior to lodging an application, run a multi-layered conflict search on the official IP India public database. Merrafilings attorneys perform exact, phonetic, and similarity searches across conflicting classes to confirm whether similar or identical marks have already been registered or applied for under Section 11 relative grounds.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#155EEF]/50 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm shrink-0">
                3
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-medium text-slate-900">
                  Identify the Appropriate Trademark Class (Classes 1–45)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                  Trademarks are classified into 45 Nice classes—Classes 1 through 34 cover physical goods, while Classes 35 through 45 cover services. Selecting the correct class is crucial because your legal rights will be restricted solely to the goods and services designated in your filing.
                </p>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#155EEF]/50 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm shrink-0">
                4
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-medium text-slate-900">
                  Draft Form TM-A &amp; Collate Mandatory Documents
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                  Prepare applicant identity documentation, business incorporation proofs, high-resolution logo artwork, and a signed <strong className="font-medium text-slate-800">Form TM-48 (Power of Attorney)</strong> empowering your registered trademark agent. If you claim prior commercial use of the mark, a notarized user affidavit with documentary evidence (invoices, domain registration, brochures) must be attached.
                </p>
              </div>
            </div>
          </div>

          {/* Step 5 & 6 */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#155EEF]/50 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm shrink-0">
                5
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-medium text-slate-900">
                  File Form TM-A &amp; Remit Statutory Government Fees
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                  Form TM-A is lodged electronically on the IP India gateway using a Class 3 Digital Signature Certificate (DSC). Government statutory fees are payable online: ₹4,500 per class for Individuals, DPIIT-recognized Startups, and Udyam-registered MSMEs, and ₹9,000 per class for corporate entities and LLPs.
                </p>
              </div>
            </div>
          </div>

          {/* Step 7 to 10 */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#155EEF]/50 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm shrink-0">
                6
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-medium text-slate-900">
                  Obtain Application Number &amp; Commence Using the ™ Symbol
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                  Upon fee confirmation, the registry automatically generates an official receipt containing your permanent Trademark Application Number. You are legally entitled to affix the <strong className="font-semibold text-slate-900">™</strong> symbol immediately beside your brand name.
                </p>
              </div>
            </div>
          </div>

          {/* Step 8 to 12 */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#155EEF]/50 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm shrink-0">
                7
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-medium text-slate-900">
                  Examination, Journal Publication &amp; Certificate Issuance
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                  The registry examines the mark for formalities and substantive validity. If an Examination Report with objections is issued, a written reply must be filed within 30 days. Once accepted, the mark is advertised in the official Trade Marks Journal for a statutory 4-month opposition period. If no opposition is filed, the Registrar issues your digital Registration Certificate, empowering you to use the <strong className="font-semibold text-emerald-700">®</strong> mark.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Government Fee Structure Table */}
      <section className="space-y-4 pt-8 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          Government Fee Structure for Trademark Application (Form TM-A)
        </h2>
        <p className="text-sm text-slate-600 font-normal">
          Government fees are mandated by the Trade Marks Rules, 2017 and depend on the legal constitution of the applicant:
        </p>

        <div className="overflow-x-auto rounded-2xl border border-slate-200/80 shadow-xs">
          <table className="w-full text-left border-collapse text-xs sm:text-sm font-normal">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200/80 text-slate-800 font-medium">
                <th className="p-3.5 sm:p-4">Applicant Category</th>
                <th className="p-3.5 sm:p-4">E-Filing Govt Fee (Online)</th>
                <th className="p-3.5 sm:p-4">Physical Filing Fee</th>
                <th className="p-3.5 sm:p-4">Fee Basis</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-normal text-slate-900">
                  Individual / Sole Proprietor
                </td>
                <td className="p-3.5 sm:p-4 font-semibold text-emerald-600">₹4,500</td>
                <td className="p-3.5 sm:p-4 text-slate-500">₹5,000</td>
                <td className="p-3.5 sm:p-4 text-slate-500">Per mark, per class</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-normal text-slate-900">
                  DPIIT Startup / Udyam MSME
                </td>
                <td className="p-3.5 sm:p-4 font-semibold text-emerald-600">₹4,500</td>
                <td className="p-3.5 sm:p-4 text-slate-500">₹5,000</td>
                <td className="p-3.5 sm:p-4 text-slate-500">50% Statutory Rebate</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-normal text-slate-900">
                  Private Limited / Public Limited / LLP / Partnership
                </td>
                <td className="p-3.5 sm:p-4 font-semibold text-purple-700">₹9,000</td>
                <td className="p-3.5 sm:p-4 text-slate-500">₹10,000</td>
                <td className="p-3.5 sm:p-4 text-slate-500">Per mark, per class</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 4: Mandatory Documents Checklist */}
      <section className="space-y-4 pt-8 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          Documents Required to Apply for Trademark Online
        </h2>
        <p className="text-sm text-slate-600 font-normal">
          Ensure you have clear digital copies of the following documentation before initiating filing:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs sm:text-sm text-slate-700 font-normal">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-medium text-slate-900 block">Applicant Identity &amp; Address Proof</strong>
              <span className="text-slate-500 text-xs">PAN Card, Aadhaar Card, Passport, or Voter ID of the applicant or authorized director.</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-medium text-slate-900 block">Business Entity Registration Proof</strong>
              <span className="text-slate-500 text-xs">Certificate of Incorporation, LLP Agreement, or Partnership Deed (for non-individual entities).</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-medium text-slate-900 block">MSME / Startup Certificate (if applicable)</strong>
              <span className="text-slate-500 text-xs">Udyam Registration Certificate or DPIIT Recognition to unlock 50% government fee concession.</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-medium text-slate-900 block">Brand Logo / Artwork Representation</strong>
              <span className="text-slate-500 text-xs">High-resolution PNG/JPEG visual representation of the mark (not needed for simple word marks).</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-medium text-slate-900 block">Signed Form TM-48 (Power of Attorney)</strong>
              <span className="text-slate-500 text-xs">Statutory legal authorization authorizing Merrafilings trademark attorneys to represent you.</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-medium text-slate-900 block">User Affidavit for Prior Use Date</strong>
              <span className="text-slate-500 text-xs">Required if claiming commercial usage prior to application date, backed by sales invoices or media proofs.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Common Pitfalls to Avoid */}
      <section className="space-y-4 pt-8 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          Critical Mistakes to Avoid in Trademark Applications
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-normal text-slate-900">
          <div className="p-4 rounded-xl bg-rose-50/60 border border-rose-100 flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-medium text-rose-900 block">Filing Descriptive or Laudatory Words</strong>
              <span className="text-rose-700 text-xs">Words indicating quality, quantity, or geographic origin are routinely rejected under Section 9.</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-rose-50/60 border border-rose-100 flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-medium text-rose-900 block">Skipping the Comprehensive Pre-Filing Search</strong>
              <span className="text-rose-700 text-xs">Filing without phonetic checks almost guarantees conflicting mark objections under Section 11.</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-rose-50/60 border border-rose-100 flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-medium text-rose-900 block">Incorrect Nice Class Specification</strong>
              <span className="text-rose-700 text-xs">Filing in the wrong class leaves your real commercial products completely exposed to infringement.</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-rose-50/60 border border-rose-100 flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-medium text-rose-900 block">Missing Statutory Objection Deadlines</strong>
              <span className="text-rose-700 text-xs">Failing to file a written legal response within 30 days of the Examination Report results in mark abandonment.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Why Choose Merrafilings */}
      <section className="space-y-4 pt-8 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          Why File Your Trademark with Merrafilings?
        </h2>
        <p className="text-sm text-slate-600 font-normal">
          Merrafilings pairs dedicated IP attorneys with proprietary search intelligence to give your brand the highest chance of first-time acceptance:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-normal text-slate-900 pt-1">
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 flex items-center gap-3">
            <Award className="w-4 h-4 text-purple-600 shrink-0" />
            <span>Over 100,000+ brand filings completed across India</span>
          </div>
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 flex items-center gap-3">
            <Clock className="w-4 h-4 text-purple-600 shrink-0" />
            <span>Guaranteed same-day Form TM-A digital filing &amp; ™ receipt</span>
          </div>
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 flex items-center gap-3">
            <Scale className="w-4 h-4 text-purple-600 shrink-0" />
            <span>Full-cycle legal defense including examination replies &amp; hearings</span>
          </div>
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 flex items-center gap-3">
            <BadgePercent className="w-4 h-4 text-purple-600 shrink-0" />
            <span>Assistance claiming 50% MSME government fee rebate</span>
          </div>
        </div>
      </section>
    </TrademarkGuideLayout>
  );
}
