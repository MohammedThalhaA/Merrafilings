"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const faqs = [
    {
      question: "How can MerraFilings help my business with GST registration and compliance?",
      answer:
        "MerraFilings provides end-to-end GST support. We assist in obtaining your GSTIN within 3-5 working days, setting up e-invoicing, filing monthly GSTR-1 and GSTR-3B returns, and reconciling Input Tax Credit (ITC) with GSTR-2B. In addition, our automated system cross-checks supplier filing status and alerts you immediately to prevent tax leakage, while qualified GST practitioners handle scrutiny notices and department queries.",
    },
    {
      question: "What is AI-powered automation, and how can it benefit my business?",
      answer:
        "Our AI engine automates repetitive, error-prone compliance processes. It extracts data directly from banking feeds, invoices, and government portals (MCA, GSTN, TRACES), automatically categorizes transactions, computes statutory tax liabilities, and conducts pre-filing validation checks. This eliminates manual data entry, prevents penalties from missed deadlines, and cuts compliance turnaround times by over 80%.",
    },
    {
      question: "How do I automate my business compliance processes with MerraFilings?",
      answer:
        "Getting started takes under 5 minutes. You create an account on MerraFilings, link your business entity (CIN or GSTIN), and connect your bank feed or accounting software. Our platform creates a customized annual statutory compliance calendar with automated alerts, pre-populates required returns, and lets you approve filings with single-click OTP or Digital Signature (DSC) authorization.",
    },
    {
      question: "How does LEDGERS support compliance, registration, and taxation for companies?",
      answer:
        "LEDGERS is our proprietary cloud accounting and compliance suite. It seamlessly integrates invoicing, payroll, inventory, and tax filings in one unified platform. When you issue an invoice or pay a salary in LEDGERS, it automatically updates your GST return schedules, calculates TDS under section 192/194, generates e-way bills, and maintains audit-ready digital ledgers compliant with MCA Schedule III requirements.",
    },
    {
      question: "What is the role of MCA compliance in India, and how do you assist?",
      answer:
        "Every company and LLP registered under the Ministry of Corporate Affairs (MCA) must satisfy mandatory statutory compliances annually, such as filing financial statements (AOC-4), annual returns (MGT-7/Form 11), director KYC (DIR-3 KYC), and maintaining statutory registers. MerraFilings handles board resolutions, secretarial audits, statutory filings, and portal submissions to maintain active company status and prevent heavy director disqualification penalties.",
    },
    {
      question: "What documents are required to register a Private Limited company?",
      answer:
        "To register a Private Limited company in India, you need PAN card, identity proof (Voter ID / Passport / Driving License), and address proof (Bank Statement or Electricity Bill less than 2 months old) for each director, along with registered office utility bill and NOC from the property owner. MerraFilings handles DIN generation, DSC issuance, name approval (RUN), and SPICe+ Part B drafting end-to-end.",
    },
  ];

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-28 bg-white border-b border-[#E4E7EC]" id="faqs">
      <div className="max-w-[1040px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading (Matching Screenshot 5) */}
        <div className="text-center mb-14 md:mb-16">
          <h2 className="text-[32px] sm:text-[38px] md:text-[40px] font-semibold text-[#111827] tracking-tight">
            Frequently asked questions
          </h2>
          <p className="mt-3 text-[15px] sm:text-[16px] text-[#475467]">
            Find answers to common questions about registration, taxation, and company compliance.
          </p>
        </div>

        {/* Accordion List (Matching Screenshot 5) */}
        <div className="border-t border-[#E4E7EC]">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={idx} className="border-b border-[#E4E7EC] transition-colors">
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full py-6 sm:py-7 flex items-center justify-between gap-4 text-left group cursor-pointer focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="text-[16px] sm:text-[17.5px] font-medium text-[#111827] group-hover:text-[#155EEF] transition-colors">
                    {faq.question}
                  </span>

                  {/* Soft green pill circle with chevron down (Matching Screenshot 5) */}
                  <div
                    className={`w-8 h-8 rounded-full bg-[#ECFDF3] border border-[#D1FADF] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[#E0F2FE] border-[#BAE6FD]" : "group-hover:bg-[#D1FADF]"
                    }`}
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-colors ${
                        isOpen ? "text-[#0284C7]" : "text-[#15803D]"
                      }`}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div className="pb-6 sm:pb-7 pr-8 sm:pr-12 text-[14.5px] sm:text-[15px] text-[#475467] leading-relaxed animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
