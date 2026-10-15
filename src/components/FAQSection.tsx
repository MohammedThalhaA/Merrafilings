"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const faqs = [
    {
      question: "How can Merrafilings help my business with GST registration and compliance?",
      answer:
        "Merrafilings provides end-to-end GST support. We assist in obtaining your GSTIN within 3-5 working days, setting up e-invoicing, filing monthly GSTR-1 and GSTR-3B returns, and reconciling Input Tax Credit (ITC) with GSTR-2B. In addition, our automated system cross-checks supplier filing status and alerts you immediately to prevent tax leakage, while qualified GST practitioners handle scrutiny notices and department queries.",
    },
    {
      question: "What is corporate workflow automation, and how does it benefit my business?",
      answer:
        "Our compliance engine automates repetitive, error-prone compliance processes. It extracts data directly from banking feeds, invoices, and statutory portals (MCA, GSTN, TRACES), automatically categorizes transactions, computes statutory tax liabilities, and conducts pre-filing validation checks. This eliminates manual data entry, prevents penalties from missed deadlines, and cuts compliance turnaround times by over 80%.",
    },
    {
      question: "How do I automate my business compliance processes with Merrafilings?",
      answer:
        "Getting started takes under 5 minutes. You create an account on Merrafilings, link your business entity (CIN or GSTIN), and connect your bank feed or accounting records. Our platform creates a customized annual statutory compliance calendar with automated alerts, pre-populates required returns, and lets you approve filings with single-click OTP or Digital Signature (DSC) authorization.",
    },
    {
      question: "How does Merra Workspace support compliance, registration, and corporate tax?",
      answer:
        "Merra Workspace is our unified client platform. It seamlessly coordinates corporate secretarial records, invoicing, tax filing schedules, and statutory registers. When transactions occur, it automatically updates your filing calendars, calculates withholding taxes (TDS), maintains audit-ready digital corporate records, and connects you directly with your designated CA or CS specialist.",
    },
    {
      question: "What is the role of MCA compliance in India, and how do you assist?",
      answer:
        "Every company and LLP registered under the Ministry of Corporate Affairs (MCA) must satisfy mandatory statutory compliances annually, such as filing financial statements (AOC-4), annual returns (MGT-7/Form 11), director KYC (DIR-3 KYC), and maintaining statutory registers. Merrafilings handles board resolutions, secretarial audits, statutory filings, and portal submissions to maintain active company status and prevent director disqualifications.",
    },
    {
      question: "What documents are required to register a Private Limited company?",
      answer:
        "To register a Private Limited company in India, you need PAN card, identity proof (Voter ID / Passport / Driving License), and address proof (Bank Statement or Utility Bill less than 2 months old) for each director, along with registered office utility bill and NOC from the property owner. Merrafilings handles DIN generation, DSC issuance, name approval (RUN), and SPICe+ Part B drafting end-to-end.",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = faqs.filter(
    (f) =>
      f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section data-reveal className="py-10 md:py-14 bg-white border-b border-slate-200/80" id="faqs">
      <div className="w-full max-w-[1400px] 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[960px] mx-auto">
        
          {/* Section Heading */}
          <div className="text-center mb-6 md:mb-8">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50/80 border border-emerald-100/90 px-3 py-1 rounded-full mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
              Frequently Asked Questions
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-slate-900 font-normal tracking-tight">
              Clear answers to essential corporate questions
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
              Find transparent answers about incorporation, taxation, and annual statutory compliance.
            </p>

            {/* Interactive Search Filter Input */}
            <div className="mt-6 max-w-md mx-auto">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions (e.g. GST, MCA, Pvt Ltd, Documents)..."
                className="w-full px-4 py-2.5 rounded-full border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-slate-800 bg-slate-50/60 focus:bg-white transition-colors"
              />
            </div>
          </div>

          {/* Accordion List with Smooth Expand Animation */}
          <div className="border-t border-slate-200/80 divide-y divide-slate-200/80">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, idx) => {
                const isOpen = openIndex === idx;

                return (
                  <div key={idx} className="transition-colors">
                    <button
                      onClick={() => toggleIndex(idx)}
                      className="w-full py-5 sm:py-6 flex items-center justify-between gap-4 text-left group cursor-pointer focus:outline-hidden"
                      aria-expanded={isOpen}
                    >
                      <span className={`text-sm sm:text-base font-medium transition-colors ${
                        isOpen ? "text-emerald-900" : "text-slate-900 group-hover:text-emerald-800"
                      }`}>
                        {faq.question}
                      </span>

                      {/* Subtle minimalist circular toggle */}
                      <div
                        className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-all duration-200 ${
                          isOpen 
                            ? "rotate-180 bg-slate-900 border-slate-900 text-white" 
                            : "bg-slate-50 border-slate-200 text-slate-600 group-hover:border-slate-300 group-hover:bg-slate-100"
                        }`}
                      >
                        <ChevronDown className="w-3.5 h-3.5" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="pb-6 pr-8 sm:pr-12 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal animate-in fade-in slide-in-from-top-1 duration-200">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="py-12 text-center text-slate-500">
                <p className="text-sm font-medium">No matching questions found for &ldquo;{searchQuery}&rdquo;</p>
                <p className="text-xs text-slate-400 mt-1">Try searching for &quot;GST&quot;, &quot;Company&quot;, or &quot;Documents&quot;.</p>
              </div>
            )}
          </div>

          {/* Bottom Help Note */}
          <div className="mt-12 text-center p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80">
            <p className="text-xs sm:text-sm text-slate-600">
              Have a specific question about your entity structure or tax classification?{" "}
              <a href="#contact" className="font-semibold text-slate-900 hover:text-emerald-800 underline underline-offset-2">
                Speak directly with our advisory desk
              </a>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
