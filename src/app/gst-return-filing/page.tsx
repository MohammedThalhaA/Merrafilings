"use client";

import React from "react";
import Link from "next/link";
import ServicePageTemplate, {
  PricingPackage,
  useServicePage,
} from "@/components/ServicePageTemplate";
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
  BadgePercent,
  Building2,
  Coins,
  Check,
  HelpCircle,
  TrendingUp,
  Receipt,
  FileCheck,
  Layers,
  MapPin,
  Laptop,
  Store,
  Truck,
  Users,
  Briefcase,
  AlertTriangle,
  Zap,
  Calendar,
  FileSpreadsheet,
  Calculator,
} from "lucide-react";

const FORM_FEATURES = [
  { icon: <Users className="w-4 h-4" />, text: "Dedicated Qualified Accountant for Monthly & Quarterly Filings" },
  { icon: <FileCheck className="w-4 h-4" />, text: "Automated GSTR-2B Input Tax Credit (ITC) Vendor Reconciliation" },
  { icon: <Receipt className="w-4 h-4" />, text: "Complete GSTR-1, GSTR-3B, CMP-08, and Annual GSTR-9 Filings" },
  { icon: <Clock className="w-4 h-4" />, text: "Zero Late-Fee Guarantee with Timely Calendar Reminders" },
  { icon: <Laptop className="w-4 h-4" />, text: "Free Invoicing, E-Way Bill & E-Invoice Integration Support" },
];

const PACKAGES: PricingPackage[] = [
  {
    name: "Monthly GST Return Filing",
    shortDesc: "Complete monthly compliance covering GSTR-1 sales upload, GSTR-3B summary, and ITC reconciliation.",
    expandedDesc: "Designed for regular taxpayers filing monthly. Includes monthly sales invoice verification and GSTR-1 preparation, automated GSTR-2B vendor reconciliation, Input Tax Credit (ITC) optimization, electronic tax challan (PMT-06) generation, and filing of GSTR-3B returns by a dedicated accountant.",
    price: "₹999",
    priceSub: "/ month (Billed Quarterly / Annually)",
    badge: "Monthly Plan",
    features: [
      "Dedicated Senior Accountant Assistance",
      "Monthly GSTR-1 Outward Supply Return Filing",
      "Monthly GSTR-3B Summary Return & Tax Settlement",
      "Vendor GSTR-2B vs Purchase Book Reconciliation",
      "Ineligible ITC Scrutiny under Section 17(5)",
      "Tax Payment Challan (PMT-06) Formulation",
      "Free Invoicing & E-Way Bill Billing Portal Access",
      "Timely Due Date Reminders (11th & 20th of Month)",
    ],
  },
  {
    name: "Quarterly Return (QRMP Scheme)",
    popular: true,
    badge: "Most Popular",
    shortDesc: "Quarterly filing for businesses with turnover up to ₹5 Crore under the government QRMP scheme.",
    expandedDesc: "Perfect for small and medium enterprises registered under QRMP. Includes monthly Invoice Furnishing Facility (IFF) uploads for B2B supplies, monthly tax challan calculation (Fixed Sum or Self-Assessment), quarterly GSTR-1 and GSTR-3B return preparation, and end-to-end ITC tracking.",
    price: "₹2,499",
    priceSub: "/ quarter (Includes Monthly IFF & PMT-06)",
    features: [
      "Quarterly GSTR-1 Outward Supply Filing",
      "Quarterly GSTR-3B Tax Summary Filing",
      "Monthly Invoice Furnishing Facility (IFF) Upload",
      "Monthly Tax Payment Advisory (Fixed Sum Method)",
      "Quarterly GSTR-2B Reconciliation & Vendor Follow-up",
      "E-Way Bill Generation & Invoicing Support",
      "Resolution of Portal Discrepancies & Glitches",
      "Assigned Tax Consultant & Phone Support",
    ],
  },
  {
    name: "Annual GST Audit & Return (GSTR-9 & 9C)",
    shortDesc: "Comprehensive annual return filing and reconciliation statement prepared by senior CAs.",
    expandedDesc: "Comprehensive year-end audit consolidation. Involves deep scrutiny of all 12 monthly returns against annual audited books of accounts, identification of unclaimed or excess Input Tax Credit, reconciliation of outward and inward taxable turnover, preparation of Form GSTR-9, and certification of GSTR-9C reconciliation statement.",
    price: "₹7,899",
    priceSub: "Complete Financial Year Consolidation",
    badge: "Year-End Audit",
    features: [
      "Consolidation of 12 Months GSTR-1 & GSTR-3B Returns",
      "Audited Financials vs GST Turnover Reconciliation",
      "Preparation & Electronic Filing of Form GSTR-9",
      "Preparation of GSTR-9C Reconciliation Statement",
      "Verification of HSN Summary & Tax Rate Slabs",
      "True-up of Unclaimed ITC & Differential Tax via DRC-03",
      "Chartered Accountant (CA) Review & Sign-Off",
      "Handling Departmental Pre-Audit Inquiries",
    ],
  },
];

function GstReturnFilingGuideContent() {
  const { openContactModal } = useServicePage();

  return (
    <>
      {/* Intro */}
      <div>
        <p className="text-[14.5px] font-normal text-slate-900 leading-relaxed">
          <strong className="font-semibold text-slate-950">GST Return Filing</strong> is the statutory process through which registered taxpayers report their outward sales, inward purchases, tax collected, and Input Tax Credit (ITC) to the government under the <strong className="font-semibold text-slate-950">Central Goods and Services Tax Act, 2017</strong>. Timely and accurate return filing is critical for uninterrupted commercial operations, as non-compliance triggers daily late fees, 18% annual interest, automated E-way bill portal blocking, and loss of vendor trust.
        </p>
        <p className="text-[14.5px] font-normal text-slate-900 leading-relaxed mt-3">
          At Merrafilings, our qualified accountants and tax advocates take complete charge of your monthly, quarterly, and annual return workflows. From extracting raw sales data and matching purchase registers with <strong className="font-semibold text-slate-950">GSTR-2B</strong> to calculating net tax liability and generating challans, we guarantee 100% accurate, error-free filings delivered ahead of every statutory due date.
        </p>
      </div>

      {/* Snapshot Box */}
      <div className="my-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/50 border border-indigo-100/90 shadow-2xs">
        <div className="flex items-center gap-2 text-indigo-900 font-medium text-sm mb-3">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>GST Compliance Calendar Essentials</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-normal text-slate-900">
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">GSTR-1 Due Date (Monthly)</span>
            <strong className="font-semibold text-slate-950 text-[13px]">11th of Subsequent Month</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">GSTR-3B Due Date (Monthly)</span>
            <strong className="font-semibold text-slate-950 text-[13px]">20th of Subsequent Month</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Annual GSTR-9 Due Date</span>
            <strong className="font-semibold text-emerald-600 text-[13px]">31st December Post Fiscal Year</strong>
          </div>
        </div>
      </div>

      {/* Section 1: Types of GST Return Forms */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. Comprehensive Matrix of GST Return Forms in India
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          The GST regime mandates distinct return formats customized to the taxpayer&apos;s category and operational scale:
        </p>

        <div className="overflow-x-auto my-4 rounded-xl border border-slate-200">
          <table className="w-full text-left border-collapse text-xs sm:text-[13px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-800 font-semibold">
                <th className="p-3">Return Form</th>
                <th className="p-3">Taxpayer Category</th>
                <th className="p-3">Filing Frequency</th>
                <th className="p-3">Statutory Purpose &amp; Scope</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-900 font-normal">
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-indigo-700">Form GSTR-1</td>
                <td className="p-3">Regular Taxpayer</td>
                <td className="p-3">Monthly (11th) / Quarterly (13th)</td>
                <td className="p-3">Details of all outward supplies of goods and services (B2B, B2C, exports)</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-indigo-700">Form GSTR-3B</td>
                <td className="p-3">Regular Taxpayer</td>
                <td className="p-3">Monthly (20th) / Quarterly (22nd/24th)</td>
                <td className="p-3">Summary return declaring tax liability, Input Tax Credit claimed, and tax settlement</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-indigo-700">Form CMP-08</td>
                <td className="p-3">Composition Dealer</td>
                <td className="p-3">Quarterly (18th of next month)</td>
                <td className="p-3">Special statement-cum-challan for self-assessed tax payment under Section 10</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-indigo-700">Form GSTR-4</td>
                <td className="p-3">Composition Dealer</td>
                <td className="p-3">Annually (30th April)</td>
                <td className="p-3">Comprehensive annual return for composition taxpayers summarizing quarterly turnover</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-indigo-700">Form GSTR-9</td>
                <td className="p-3">Regular Taxpayer</td>
                <td className="p-3">Annually (31st December)</td>
                <td className="p-3">Comprehensive annual return consolidating all monthly/quarterly filings of the fiscal year</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-indigo-700">Form GSTR-9C</td>
                <td className="p-3">Turnover &gt; ₹5 Crores</td>
                <td className="p-3">Annually (31st December)</td>
                <td className="p-3">Self-certified reconciliation statement comparing audited financials with GSTR-9</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-indigo-700">Form GSTR-10</td>
                <td className="p-3">Cancelled Taxpayer</td>
                <td className="p-3">Once (Within 3 months of cancellation)</td>
                <td className="p-3">Final return detailing closing stock and reversing inputs held on the date of cancellation</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 2: What an Accountant Handles */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. What an Accountant Handles in Your Return Filing
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Filing GST returns is far more than data entry—it requires active financial reconciliations and statutory audits:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">1. Sales Invoice Digitization &amp; HSN Tagging:</strong>
            We audit all sales bills, categorize them into B2B, B2C Large, B2C Small, zero-rated exports, and nil-rated supplies, ensuring correct HSN/SAC codes and tax rates (0%, 5%, 12%, 18%, 28%).
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">2. Rigorous GSTR-2B Vendor Matching:</strong>
            We cross-verify your purchase register against the official GSTR-2B statement generated by the portal. We flag non-compliant vendors who collected tax from you but failed to report invoices in their GSTR-1.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">3. Ineligible ITC Reversal under Section 17(5):</strong>
            We prevent departmental scrutiny by identifying and disallowing blocked credits (such as motor vehicles, club memberships, food and beverages, and personal consumption expenses).
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">4. Tax Offset Optimization &amp; Challan Generation:</strong>
            We utilize electronic credit ledgers (IGST, CGST, SGST) in the statutory legal order to minimize cash outgo, generating PMT-06 challans for the exact remaining balance.
          </div>
        </div>
      </section>

      {/* Section 3: The QRMP Scheme Explained */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. The QRMP Scheme: Quarterly Return Monthly Payment
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          For small taxpayers with an aggregate turnover up to ₹5 Crores in the preceding financial year, the government provides the <strong className="font-semibold text-slate-950">QRMP Scheme</strong>:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-[13px] text-slate-900 font-normal">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <strong className="font-semibold text-indigo-950 block mb-1.5">Quarterly Filing Relief</strong>
            File GSTR-1 and GSTR-3B only 4 times a year instead of 24 filings, drastically cutting administrative compliance overheads.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <strong className="font-semibold text-indigo-950 block mb-1.5">Invoice Furnishing Facility (IFF)</strong>
            Upload B2B sales invoices between the 1st and 13th of Month 1 and Month 2 so your buyers can claim uninterrupted Input Tax Credit.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <strong className="font-semibold text-indigo-950 block mb-1.5">Fixed Sum Method (PMT-06)</strong>
            Deposit 35% of the preceding quarter&apos;s cash tax liability via a pre-filled challan in the first two months, settling actuals in Month 3.
          </div>
        </div>
      </section>

      {/* Section 4: Consequences of Delayed or Non-Filing */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Consequences and Penalties of Delayed GST Return Filing
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Failing to submit returns before the statutory deadline triggers compounding financial and operational repercussions:
        </p>

        <div className="space-y-3 pt-2">
          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <div className="flex items-start gap-3">
              <Coins className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-950 text-sm mb-1">Section 47 Statutory Late Fees</h4>
                <p className="text-xs sm:text-[13px] text-slate-900 font-normal leading-relaxed">
                  For regular returns with tax liability: ₹50 per day (₹25 CGST + ₹25 SGST) up to a maximum cap based on annual turnover. For Nil returns: ₹20 per day (₹10 CGST + ₹10 SGST) subject to a ₹500 maximum cap.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <div className="flex items-start gap-3">
              <Scale className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-950 text-sm mb-1">Section 50 Compounding Interest</h4>
                <p className="text-xs sm:text-[13px] text-slate-900 font-normal leading-relaxed">
                  Overdue net cash tax liabilities incur mandatory interest at <strong className="font-semibold text-slate-950">18% per annum</strong> calculated from the day following the due date until the actual date of payment.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <div className="flex items-start gap-3">
              <Truck className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-950 text-sm mb-1">Automated E-Way Bill Generation Blocking</h4>
                <p className="text-xs sm:text-[13px] text-slate-900 font-normal leading-relaxed">
                  Under Rule 138E, if a taxpayer fails to file GSTR-3B or CMP-08 returns for two consecutive periods, the GST portal automatically blocks the generation of E-Way Bills, completely freezing goods dispatches and logistics.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-950 text-sm mb-1">Suo-Moto Cancellation of GSTIN under Section 29</h4>
                <p className="text-xs sm:text-[13px] text-slate-900 font-normal leading-relaxed">
                  Continuous default in return filing for six months empowers the GST officer to cancel your GSTIN registration without prior consent, halting all commercial bank operations and freezing customer invoices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Nil Return Filing via SMS */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. Fast-Track Nil GST Return Filing via SMS
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          For registered entities with zero sales, purchases, or tax liabilities during a given month, the government permits simplified filing via SMS:
        </p>

        <div className="p-4.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-[13px] text-slate-900 font-normal leading-relaxed space-y-2">
          <p>
            Taxpayers can send an SMS from their registered mobile number in the format <code className="font-mono bg-white px-2 py-0.5 rounded border border-slate-300 text-indigo-700 font-semibold">NIL 3B [GSTIN] [MonthYear]</code> (e.g. <code className="font-mono text-indigo-700">NIL 3B 33AAACM1234F1Z5 092026</code>) to <strong>14409</strong>.
          </p>
          <p>
            The portal responds with a 6-digit verification code, which must be confirmed by sending <code className="font-mono bg-white px-2 py-0.5 rounded border border-slate-300 text-indigo-700 font-semibold">CNF 3B [VerificationCode]</code> to <strong>14409</strong>. Merrafilings automates this process for non-operating and seasonal businesses to prevent late fee accumulation.
          </p>
        </div>
      </section>
    </>
  );
}

const FAQ_COL_1 = [
  {
    q: "Is it mandatory to file GST returns if there were zero transactions in a month?",
    a: "Yes. Even if your business made zero sales and zero purchases in a tax period, filing a 'Nil' return is legally mandatory. Failing to submit a Nil GSTR-1 and GSTR-3B attracts a late fee of ₹20 per day (₹10 CGST + ₹10 SGST) up to a maximum of ₹500 per return.",
  },
  {
    q: "What is the difference between GSTR-2A and GSTR-2B?",
    a: "GSTR-2A is a dynamic read-only statement that continuously updates as and when your suppliers upload or amend invoices. GSTR-2B is a static statement generated on the 14th of every month that establishes the exact legally claimable Input Tax Credit (ITC) for that month under Section 16(2)(aa) of the CGST Act.",
  },
  {
    q: "Can I revise a filed GST return if an error was made?",
    a: "Under the GST Act, returns once filed cannot be formally 'revised'. However, any errors or omissions (such as wrong invoice values, missed invoices, or incorrect tax heads) can be amended in the subsequent month or quarter's return under the Amendment tables of GSTR-1 and GSTR-3B.",
  },
  {
    q: "What happens if a supplier fails to file their GSTR-1 return?",
    a: "If your supplier fails to file their GSTR-1, the invoice will not appear in your GSTR-2B statement. Under Rule 36(4) of the CGST Rules, you cannot claim Input Tax Credit on such invoices. Merrafilings provides automated vendor follow-up reports so you can withhold supplier payments until they report the bills.",
  },
  {
    q: "What is the penalty for filing GST returns after the due date?",
    a: "Delayed filing attracts a statutory late fee under Section 47 of ₹50 per day (₹25 CGST + ₹25 SGST) for regular returns, or ₹20 per day for Nil returns. In addition, an 18% annual interest is charged on the net tax liability paid through the electronic cash ledger.",
  },
];

const FAQ_COL_2 = [
  {
    q: "How does the Invoice Furnishing Facility (IFF) work in QRMP?",
    a: "IFF is an optional facility under the QRMP scheme allowing quarterly filers to upload B2B invoices between the 1st and 13th of the first two months of a quarter (up to a value of ₹50 Lakhs per month). This ensures their B2B corporate buyers can view the credit in their monthly GSTR-2B and take immediate ITC.",
  },
  {
    q: "Who is required to file the Annual Return on Form GSTR-9?",
    a: "All regular taxpayers registered under GST must file Form GSTR-9 annually. While the government has exempted taxpayers with an aggregate turnover up to ₹2 Crores from mandatory GSTR-9 filing for specific financial years, businesses exceeding ₹2 Crores must mandatorily file GSTR-9 before 31st December.",
  },
  {
    q: "Who is required to file the GSTR-9C Reconciliation Statement?",
    a: "Taxpayers whose annual aggregate turnover exceeds ₹5 Crores must prepare and submit a self-certified Reconciliation Statement on Form GSTR-9C along with their GSTR-9 annual return, reconciling gross turnover and tax figures reported in audited financial statements.",
  },
  {
    q: "Can I adjust excess IGST paid against CGST and SGST liabilities?",
    a: "Yes. Under Section 49 and Rule 88A, Input Tax Credit of IGST must first be completely utilized toward payment of IGST, and any remaining balance can be utilized toward CGST and SGST in any proportion chosen by the taxpayer before utilizing CGST/SGST credits.",
  },
  {
    q: "What documents must I share with Merrafilings each month for return filing?",
    a: "You simply need to provide: (1) Sales register or copies of issued sales invoices with customer GSTINs, (2) Purchase register or vendor purchase bills, (3) Bank statements showing inward customer remittances and tax payments, and (4) Any credit or debit notes issued during the tax period.",
  },
];

const RELATED_GUIDES = [
  {
    title: "GST Registration Online: Process, Eligibility & Documents",
    href: "/gst-registration",
  },
  {
    title: "GST Letter of Undertaking (LUT) Filing for Exporters",
    href: "/gst-lut",
  },
  {
    title: "TDS Return Filing Online: Form 24Q, 26Q & 27Q",
    href: "/income-tax",
  },
  {
    title: "Private Limited Company ROC Annual Compliance",
    href: "/company-registration",
  },
  {
    title: "LLP Form 11 and Form 8 Annual Filing Guide",
    href: "/llp-registration",
  },
  {
    title: "Udyam MSME Certificate Registration & Benefits",
    href: "/udyam-registration",
  },
];

const RELATED_SERVICES_TAGS = [
  "GST Registration",
  "GST LUT Filing",
  "Company Compliance",
  "LLP Annual Filing",
  "TDS Return Filing",
  "Income Tax E-Filing",
  "Digital Signature",
  "Udyam MSME",
];

const POPULAR_SEARCHES_TAGS = [
  "gst return filing online",
  "gstr 1 due date monthly",
  "gstr 3b return filing charges",
  "qrmp scheme turnover limit",
  "gstr 2b reconciliation excel",
  "late fee for gst return filing",
  "nil gst return filing via sms",
  "gstr 9 annual return due date",
];

export default function GstReturnFilingPage() {
  return (
    <ServicePageTemplate
      badgeText="Section 39 CGST Act, 2017 & QRMP Compliance"
      heroTitle={
        <>
          <span>Online </span>
          <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-medium">
            GST Return Filing
          </span>{" "}
          <span>by Accountants</span>
        </>
      }
      heroSubtitle="Stay 100% compliant with accurate monthly, quarterly, and annual GST return filing. GSTR-1, GSTR-3B, CMP-08, and GSTR-9 prepared by qualified accountants with automated GSTR-2B input tax credit reconciliation."
      formTitle="GST Filing Advisory Desk"
      formSubtitle="Connect with our dedicated GST accountants for sales invoice entry, vendor ITC reconciliation, and zero-error filing."
      formFeatures={FORM_FEATURES}
      packages={PACKAGES}
      pricingTitle={
        <>
          Simple packages. Transparent{" "}
          <span className="font-normal text-[#00B074]">accountant filing fees.</span>
        </>
      }
      pricingSubtitle="Select your compliance plan for monthly filings, quarterly QRMP, or comprehensive annual GSTR-9 audit."
      breadcrumbCurrent="GST Return Filing"
      guideTitle="Comprehensive Guide to Online GST Return Filing in India - Forms, Calendars & Reconciliations"
      guideContent={<GstReturnFilingGuideContent />}
      relatedGuides={RELATED_GUIDES}
      faqCol1={FAQ_COL_1}
      faqCol2={FAQ_COL_2}
      faqSubtitle="Frequently asked questions about return formats, filing due dates, QRMP schemes, GSTR-2B matching, and late fees."
      relatedServicesTags={RELATED_SERVICES_TAGS}
      popularSearchesTags={POPULAR_SEARCHES_TAGS}
    />
  );
}
