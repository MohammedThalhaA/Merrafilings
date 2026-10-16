"use client";

import React, { useState } from "react";
import {
  Building2,
  FileCheck2,
  Landmark,
  Receipt,
  ShieldCheck,
  Users,
  CheckCircle2,
  ArrowRight,
  Clock,
  Sparkles,
  Award,
  Check,
  BadgeCheck,
  FileText,
  UserCheck,
} from "lucide-react";

interface AIComplianceCloudProps {
  onExplore?: () => void;
  onBookDemo?: () => void;
}

export default function AIComplianceCloud({ onExplore, onBookDemo }: AIComplianceCloudProps) {
  const [activeTab, setActiveTab] = useState<number>(0);

  const capabilities = [
    {
      id: 0,
      tabLabel: "GST & Tax",
      shortTabLabel: "GST",
      title: "GST Return Filing & Tax Advisory",
      badge: "Dedicated CA Assigned",
      icon: Receipt,
      stat: "100%",
      statLabel: "On-Time Filing Record",
      statSub: "Guaranteed penalty-free compliance",
      assurance: "Zero Late Filing Guarantee",
      manager: "Senior Chartered Accountant",
      desc: "Our experienced Chartered Accountants manage your complete monthly and quarterly GST filings. We thoroughly reconcile your Input Tax Credit (ITC) with GSTR-2B so you never overpay taxes or face government department notices.",
      steps: [
        "Send your monthly sales & purchase bills via email or simple portal upload",
        "Your assigned CA verifies invoices and reconciles eligible Input Tax Credit (ITC) against GSTR-2B",
        "Review your clear net tax calculation summary before any filing is submitted",
        "Our CA files GSTR-1 & GSTR-3B on the government portal and delivers your official ARN receipt",
      ],
    },
    {
      id: 1,
      tabLabel: "MCA Secretarial",
      shortTabLabel: "MCA",
      title: "ROC & MCA Annual Secretarial Care",
      badge: "Qualified CS Sign-off",
      icon: Landmark,
      stat: "₹0",
      statLabel: "Late Filing Penalty",
      statSub: "For all companies under our annual care",
      assurance: "100% Companies Act Compliant",
      manager: "Certified Company Secretary",
      desc: "Never worry about complex Companies Act regulations. Our Company Secretaries prepare your annual financial disclosures, draft mandatory board minutes, and file Forms AOC-4 and MGT-7 with certified CS digital signatures.",
      steps: [
        "CA reviews your annual balance sheet, profit & loss, and financial statements",
        "Company Secretary drafts mandatory Board Resolutions, Director's Report & AGM notices",
        "Filing of Form AOC-4 (Financials) and MGT-7 (Annual Return) on the MCA V3 portal",
        "Annual Director DIN eKYC updates and maintenance of mandatory statutory company registers",
      ],
    },
    {
      id: 2,
      tabLabel: "Trademark & IP",
      shortTabLabel: "Trademarks",
      title: "Trademark Protection & Brand Defense",
      badge: "Registered IP Attorneys",
      icon: ShieldCheck,
      stat: "45",
      statLabel: "Classes Monitored",
      statSub: "Comprehensive national brand protection",
      assurance: "Full Legal Representation",
      manager: "Registered Trademark Attorney",
      desc: "Protect your brand name, logo, and tagline with registered trademark lawyers. We conduct free comprehensive public searches, file Form TM-A so you can use the ™ symbol immediately, and defend your mark against competitor objections.",
      steps: [
        "Deep search across the Trade Marks Registry to confirm your brand name is legally available",
        "Drafting and filing Form TM-A with the government to start using the ™ mark within 24 hours",
        "Weekly tracking of the official government Trade Marks Journal for conflicting competitor marks",
        "Professional legal drafting of formal replies if an examination report or objection is raised",
      ],
    },
    {
      id: 3,
      tabLabel: "Payroll & Labour",
      shortTabLabel: "Payroll",
      title: "Payroll & Employee Statutory Compliance",
      badge: "Dedicated Labour Desk",
      icon: Users,
      stat: "100%",
      statLabel: "Accurate Payroll",
      statSub: "Timely monthly challan generation",
      assurance: "Zero Employee Welfare Defaults",
      manager: "Senior Payroll Specialist",
      desc: "Ensure seamless employee compliance without hiring an expensive internal HR legal department. We calculate monthly salaries, process EPF and ESIC challans, file Professional Tax, and generate Form 16 for your team members.",
      steps: [
        "Monthly attendance and salary computation with proper PF, ESIC & tax deductions",
        "Electronic challan preparation and online payment processing for EPFO and ESIC",
        "Monthly and annual Professional Tax (PT) return filing with respective state municipal bodies",
        "Annual TDS compilation and automatic generation of Form 16 (Part A & B) for all staff",
      ],
    },
  ];

  const current = capabilities[activeTab];
  const Icon = current.icon;

  return (
    <section className="py-10 md:py-14 bg-[#FAFAFA] border-b border-slate-200/80 font-sans relative overflow-hidden" id="compliance-care">
      {/* Subtle ambient light bloom */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-emerald-100/30 via-teal-100/20 to-blue-100/30 blur-3xl pointer-events-none rounded-full" />

      <div className="w-full max-w-[1400px] 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Information */}
          <div data-reveal="left" className="lg:col-span-5 space-y-6 text-left">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50/90 px-3 py-1 rounded-full border border-emerald-100 mb-3 shadow-2xs">
                <BadgeCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>CA &amp; CS Managed Advisory</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#0F172A] leading-[1.18]">
                Complete corporate compliance, handled by seasoned professionals.
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              No complicated software to learn, no confusing government portals to figure out. Our dedicated Chartered Accountants and Company Secretaries handle your taxes, company filings, and legal paperwork for you.
            </p>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              Simply share your invoices and basic documents with your assigned account manager. We review, verify, and complete all statutory filings directly with government authorities on your behalf.
            </p>

            {/* Feature Highlights with animated check icons */}
            <div className="pt-2 space-y-3">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-900 font-medium group">
                <div className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 group-hover:bg-emerald-100 transition-colors">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                </div>
                <span>Dedicated Chartered Accountant &amp; CS assigned to your account</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-900 font-medium group">
                <div className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 group-hover:bg-emerald-100 transition-colors">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                </div>
                <span>Zero penalty assurance: all returns filed well before statutory deadlines</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-900 font-medium group">
                <div className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 group-hover:bg-emerald-100 transition-colors">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                </div>
                <span>Dual-layer verification by licensed professionals before government submission</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onExplore}
                className="px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-full transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <span>Explore All Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={onBookDemo}
                className="px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-full transition-all duration-200 cursor-pointer shadow-2xs hover:-translate-y-0.5"
              >
                Schedule CA Consultation
              </button>
            </div>
          </div>

          {/* Right Column: Clean Professional Service Dossier with Single-Line Tabs */}
          <div data-reveal="right" className="lg:col-span-7">
            
            {/* 4 Tabs with Smooth Sliding Background Pill */}
            <div className="relative flex mb-4 bg-slate-100/90 p-1.5 rounded-2xl border border-slate-200/80">
              {/* Animated sliding background pill */}
              <div
                className="absolute top-1.5 bottom-1.5 rounded-xl bg-[#0F172A] shadow-xs transition-transform duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none"
                style={{
                  width: "calc((100% - 12px) / 4)",
                  transform: `translate3d(${activeTab * 100}%, 0, 0)`,
                }}
              />

              {capabilities.map((cap, idx) => {
                const TabIcon = cap.icon;
                const isActive = activeTab === idx;
                return (
                  <button
                    key={cap.id}
                    type="button"
                    onClick={() => setActiveTab(idx)}
                    className={`relative z-10 w-1/4 py-2.5 sm:py-3 px-1 sm:px-2 rounded-xl text-center text-xs sm:text-[13px] font-medium transition-colors duration-250 cursor-pointer flex items-center justify-center gap-1.5 whitespace-nowrap ${
                      isActive
                        ? "text-white"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <span className="hidden sm:inline truncate">{cap.tabLabel}</span>
                    <span className="sm:hidden text-[11px] font-medium truncate">{cap.shortTabLabel}</span>
                  </button>
                );
              })}
            </div>

            {/* Clean White Feature Card with Smooth Horizontal Slide Transition */}
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm text-left overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{ transform: `translate3d(-${activeTab * 100}%, 0, 0)` }}
              >
                {capabilities.map((cap) => (
                  <div
                    key={cap.id}
                    className="w-full shrink-0 p-6 sm:p-8 flex flex-col justify-between"
                  >
                    {/* Card Header with Professional Badges */}
                    <div className="flex flex-wrap items-center justify-between pb-5 border-b border-slate-100 gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                            {cap.badge}
                          </span>
                          <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-600 bg-slate-50 border border-slate-200/60 px-2.5 py-0.5 rounded-full">
                            <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
                            <span>{cap.manager}</span>
                          </span>
                        </div>
                        <h3 className="font-serif text-xl sm:text-2xl font-normal text-slate-900 mt-2">
                          {cap.title}
                        </h3>
                      </div>

                      <div className="text-right">
                        <p className="font-serif text-2xl sm:text-3xl font-normal text-slate-900">
                          {cap.stat}
                        </p>
                        <p className="text-[11px] text-slate-500 font-medium">
                          {cap.statLabel}
                        </p>
                      </div>
                    </div>

                    {/* Service Assurance Banner */}
                    <div className="mt-4 p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-100 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2.5 text-xs font-medium text-emerald-900">
                        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{cap.assurance} • Dual Review by Certified Experts</span>
                      </div>
                      <span className="text-[11px] font-semibold text-emerald-800 bg-white px-2.5 py-1 rounded-lg border border-emerald-200/70 shrink-0 shadow-3xs">
                        Done-For-You Service
                      </span>
                    </div>

                    {/* Description */}
                    <p className="mt-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                      {cap.desc}
                    </p>

                    {/* 4 Professional Service Steps */}
                    <div className="mt-6 space-y-2.5">
                      <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                        How Our Experts Handle It for You
                      </p>
                      {cap.steps.map((st, sIdx) => (
                        <div
                          key={sIdx}
                          className="flex items-start gap-3 p-3 rounded-xl bg-slate-50/80 border border-slate-100 hover:border-slate-200 hover:bg-white hover:shadow-xs transition-all duration-200 group"
                        >
                          <span className="w-5 h-5 rounded-full bg-emerald-100/80 text-emerald-800 text-[11px] font-semibold flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                            {sIdx + 1}
                          </span>
                          <span className="text-xs sm:text-[13px] text-slate-800 font-medium leading-relaxed">
                            {st}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Verified Sign-Off Footer */}
                    <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                      <span className="flex items-center gap-1.5 font-medium text-slate-700">
                        <Award className="w-4 h-4 text-emerald-600" />
                        Dual CA / CS Regulatory Verification Included
                      </span>
                      <span className="font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100/60">
                        Audit-Ready 365 Days
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
