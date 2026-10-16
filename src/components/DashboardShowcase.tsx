"use client";

import React, { useState } from "react";
import {
  FolderLock,
  FileText,
  Download,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Bell,
  Eye,
  Sparkles,
  ArrowRight,
  Clock,
  Layers,
} from "lucide-react";

interface DashboardShowcaseProps {
  onOpenPortal?: () => void;
}

export default function DashboardShowcase({ onOpenPortal }: DashboardShowcaseProps) {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [downloadedDoc, setDownloadedDoc] = useState<string | null>(null);

  const tabs = [
    {
      id: "corporate",
      label: "MCA Corporate Vault",
      icon: FolderLock,
      company: "Aetheric Robotics Private Limited",
      cin: "U72900KA2024PTC189241",
      incorporationDate: "12 Oct 2024",
      documents: [
        {
          name: "Certificate of Incorporation (Spice+)",
          type: "Official MCA Seal",
          size: "1.4 MB",
          status: "Verified & Issued",
          date: "12 Oct 2024",
        },
        {
          name: "Memorandum of Association (MOA)",
          type: "Statutory Charter",
          size: "820 KB",
          status: "CS Stamped",
          date: "12 Oct 2024",
        },
        {
          name: "Articles of Association (AOA)",
          type: "Internal Bylaws",
          size: "940 KB",
          status: "CS Stamped",
          date: "12 Oct 2024",
        },
        {
          name: "Form INC-20A (Commencement of Business)",
          type: "ROC Filing",
          size: "650 KB",
          status: "Approved",
          date: "18 Oct 2024",
        },
      ],
    },
    {
      id: "tax",
      label: "GST & Tax Repository",
      company: "Aetheric Robotics Private Limited",
      cin: "GSTIN: 29AAACA9012J1Z8",
      incorporationDate: "Active Regular Taxpayer",
      icon: FileText,
      documents: [
        {
          name: "GSTR-3B Monthly Return (September)",
          type: "GSTN Acknowledgment",
          size: "420 KB",
          status: "Filed On-Time",
          date: "19 Oct 2024",
        },
        {
          name: "GSTR-2B Input Tax Credit Reconciliation",
          type: "Audit Match Sheet",
          size: "1.1 MB",
          status: "100% ITC Claimed",
          date: "14 Oct 2024",
        },
        {
          name: "Advance Corporate Tax Challan (ITNS 280)",
          type: "CBDT Receipt",
          size: "310 KB",
          status: "Paid",
          date: "15 Sep 2024",
        },
        {
          name: "Form 26AS Tax Credit Statement",
          type: "Annual Ledger",
          size: "780 KB",
          status: "Synced",
          date: "01 Oct 2024",
        },
      ],
    },
    {
      id: "trademark",
      label: "Trademark & IP Sentinel",
      company: "Aetheric Robotics Private Limited",
      cin: "TM App: 6189204 (Class 9 & 42)",
      incorporationDate: "Journal No: 2140",
      icon: ShieldCheck,
      documents: [
        {
          name: "Trademark Application TM-A Acknowledgment",
          type: "IP India Official",
          size: "540 KB",
          status: "Legally Protected",
          date: "22 Aug 2024",
        },
        {
          name: "Trademark Examination Report Response",
          type: "Legal Reply Vetted",
          size: "890 KB",
          status: "Accepted by Registrar",
          date: "28 Sep 2024",
        },
        {
          name: "Weekly Gazette Infringement Scan Log",
          type: "Automated Brand Watch",
          size: "320 KB",
          status: "Zero Conflicting Marks",
          date: "Today at 09:00",
        },
        {
          name: "User Affidavit & Priority Usage Proof",
          type: "Legal Evidentiary Doc",
          size: "1.8 MB",
          status: "Stamped & Notarized",
          date: "20 Aug 2024",
        },
      ],
    },
    {
      id: "calendar",
      label: "Statutory Radar & Alerts",
      company: "Aetheric Robotics Private Limited",
      cin: "Auto-Alerts: WhatsApp & Email Active",
      incorporationDate: "365-Day Audit Care",
      icon: Calendar,
      documents: [
        {
          name: "GSTR-3B Monthly Filing Reminder",
          type: "Statutory Deadline",
          size: "Due: 20th Oct",
          status: "In Preparation",
          date: "Upcoming",
        },
        {
          name: "Director DIR-3 KYC Annual Verification",
          type: "MCA Mandatory",
          size: "Due: 30th Sep",
          status: "Completed (₹0 Late Fee)",
          date: "Resolved",
        },
        {
          name: "ROC Form AOC-4 Financial Statements",
          type: "Annual Filing",
          size: "Due: 30th Oct",
          status: "CA Review Ready",
          date: "Upcoming",
        },
        {
          name: "Quarterly TDS Return Filing (Form 24Q)",
          type: "Income Tax",
          size: "Due: 31st Oct",
          status: "Salary Tax Deducted",
          date: "Upcoming",
        },
      ],
    },
  ];

  const current = tabs[activeTab];

  const handleSimulateDownload = (docName: string) => {
    setDownloadedDoc(docName);
    setTimeout(() => {
      setDownloadedDoc(null);
    }, 2500);
  };

  return (
    <section className="py-10 md:py-14 bg-white border-b border-slate-200/80 font-sans relative overflow-hidden" id="vault">
      {/* Dynamic ambient blooms */}
      <div className="absolute top-1/4 right-10 w-[500px] h-[350px] bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[300px] bg-blue-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1400px] 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div data-reveal="down" className="text-center max-w-3xl mx-auto mb-7 sm:mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50/90 px-3.5 py-1 rounded-full border border-emerald-100 mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
            <span>Encrypted Founder Workspace</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#0F172A] leading-[1.18]">
            One digital vault for all your statutory records.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            No more searching through lost WhatsApp messages or email threads. Every government certificate, filed challan, and CA-signed board resolution is organized, secured, and accessible 24/7.
          </p>
        </div>

        {/* Simulated Web Application Console */}
        <div data-reveal="up" className="bg-[#0F172A] rounded-3xl p-2.5 sm:p-4 shadow-2xl border border-slate-800 max-w-5xl mx-auto">
          
          {/* Top Browser Chrome Bar */}
          <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 border-b border-slate-800 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              <span className="ml-3 hidden sm:inline-block font-mono text-[11px] text-slate-400">
                vault.merrafilings.com/enterprise/portal
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-800/60">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                256-Bit Bank-Grade AES Encryption
              </span>
            </div>
          </div>

          {/* Main Console Interior (Clean White/Slate Surface) */}
          <div className="bg-white rounded-2xl p-4 sm:p-7 mt-2 text-left">
            
            {/* Top Company Identity Bar */}
            <div className="flex flex-wrap items-center justify-between pb-5 border-b border-slate-100 gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {current.company}
                  </h3>
                  <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                    MCA ACTIVE
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5 font-mono">
                  {current.cin} • {current.incorporationDate}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200">
                  <Bell className="w-3.5 h-3.5 text-emerald-600" />
                  SMS &amp; WhatsApp Alerts: Active
                </span>
              </div>
            </div>

            {/* Interactive Tab Switcher - Single row on md+ with smooth sliding pill */}
            <div className="relative flex my-5 bg-slate-100/90 p-1.5 rounded-2xl border border-slate-200/80">
              <div
                className="absolute top-1.5 bottom-1.5 rounded-xl bg-[#0F172A] shadow-xs transition-transform duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none"
                style={{
                  width: "calc((100% - 12px) / 4)",
                  transform: `translate3d(${activeTab * 100}%, 0, 0)`,
                }}
              />
              {tabs.map((tab, idx) => {
                const TabIcon = tab.icon;
                const isActive = activeTab === idx;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(idx)}
                    className={`relative z-10 w-1/4 py-2.5 px-2 rounded-xl text-xs sm:text-[13px] font-medium transition-colors duration-250 cursor-pointer flex items-center justify-center gap-2 truncate ${
                      isActive
                        ? "text-white"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <TabIcon className={`w-3.5 h-3.5 shrink-0 transition-colors ${isActive ? "text-emerald-400" : "text-slate-400"}`} />
                    <span className="truncate">{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Simulated Notification Toast when downloading */}
            {downloadedDoc && (
              <div className="mb-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center justify-between animate-in fade-in slide-in-from-top-1">
                <span className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Downloading statutory document: &ldquo;{downloadedDoc}&rdquo;
                </span>
                <span className="text-[11px] text-emerald-600 font-semibold">CA Certified Copy</span>
              </div>
            )}

            {/* Document Cards List with Smooth Slide Transition */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{ transform: `translate3d(-${activeTab * 100}%, 0, 0)` }}
              >
                {tabs.map((tab) => (
                  <div key={tab.id} className="w-full shrink-0 space-y-2.5">
                    {tab.documents.map((doc, dIdx) => (
                      <div
                        key={dIdx}
                        className="p-3.5 sm:p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-slate-300 hover:bg-white hover:shadow-xs transition-all duration-200 flex flex-wrap items-center justify-between gap-3 group"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 group-hover:border-emerald-300 group-hover:bg-emerald-50 transition-colors">
                            <FileText className="w-5 h-5 text-slate-600 group-hover:text-emerald-700" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-xs sm:text-[13.5px] font-semibold text-slate-900 group-hover:text-emerald-800 transition-colors truncate">
                              {doc.name}
                            </p>
                            <p className="text-[11px] text-slate-500 mt-0.5">
                              {doc.type} • {doc.size} • Stamped on {doc.date}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2.5 shrink-0">
                          <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full">
                            {doc.status}
                          </span>
                          <button
                            onClick={() => handleSimulateDownload(doc.name)}
                            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 border border-transparent hover:border-slate-200 transition-all cursor-pointer"
                            title="Download Certified PDF"
                          >
                            <Download className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Vault Guarantee */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Immutable Cloud Audit Trail: Ready for Due Diligence &amp; Bank Term Loans
              </span>
              <button
                onClick={onOpenPortal}
                className="font-semibold text-slate-900 hover:text-emerald-700 flex items-center gap-1 cursor-pointer"
              >
                <span>Launch Client Portal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
