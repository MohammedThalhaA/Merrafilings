"use client";

import React from "react";
import Link from "next/link";
import CopyrightGuideLayout from "@/components/CopyrightGuideLayout";
import {
  Scale,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  Clock,
  FileText,
  Sparkles,
  ArrowRight,
  HelpCircle,
  Award,
  Layers,
  BookOpen,
  DollarSign,
  Briefcase,
  Globe2,
  Lock,
} from "lucide-react";

export default function ProtectYourRightsRegisterCopyrightOnlinePage() {
  return (
    <CopyrightGuideLayout
      currentSlug="protect-your-rights-register-copyright-online"
      title="Register Your Copyright Online with Merrafilings: Protect Your Creative Rights"
      breadcrumbLabel="Register Online with Merrafilings"
      metaPublishedDate="October 2026"
      readingTime="8 min read"
      authorName="Merrafilings IP Legal Team"
    >
      {/* Intro */}
      <div className="space-y-4">
        <p className="text-[15px] leading-relaxed text-slate-900 font-normal">
          In an era where digital content can be downloaded, republished, and copied within seconds, registering your creative intellectual property with the government is the most potent legal safeguard available. <strong className="font-semibold text-slate-950">Merrafilings</strong> provides an expedited, 100% digital copyright filing service that protects authors, musicians, software developers, and multimedia producers across India.
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Governed under the <strong className="font-semibold text-slate-950">Copyright Act, 1957</strong>, our dedicated intellectual property attorneys handle every statutory stage—from classification mapping and source code compliance formatting to resolving examiner discrepancies and securing your official Certificate of Registration.
        </p>
      </div>

      {/* Section 1: The Copyright Symbol */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. Understanding the Copyright Symbol (&copy;) and Proper Legal Notice
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Displaying a valid copyright notice puts the world on notice that your work is protected and deters innocent infringement defenses in court. The universally recognized format consists of three distinct elements:
        </p>
        <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-200/80 text-xs sm:text-[13px] text-slate-900 font-normal space-y-1">
          <p className="font-mono text-purple-950 font-semibold text-sm">
            &copy; [Year of First Publication] [Name of Copyright Owner]. All Rights Reserved.
          </p>
          <p className="text-slate-800 text-xs font-normal">
            Example: <span className="font-mono text-slate-900">&copy; 2026 Merrafilings Legal Technologies Pvt Ltd. All Rights Reserved.</span>
          </p>
        </div>
      </section>

      {/* Section 2: Online Filing Workflow with Merrafilings */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. The Merrafilings 6-Stage Online Registration Workflow
        </h2>
        <div className="space-y-3 pt-1">
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="w-6 h-6 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">1</div>
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-slate-950">Pre-Filing Originality &amp; Classification Review</h3>
              <p className="text-xs sm:text-[13px] text-slate-900 font-normal mt-0.5 leading-relaxed">
                Our IP advocates evaluate the work, verify originality, determine the correct statutory schedule (literary, artistic, software, musical, or film), and audit documentation.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="w-6 h-6 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">2</div>
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-slate-950">Electronic Filing of Form XIV &amp; Fee Lodgement</h3>
              <p className="text-xs sm:text-[13px] text-slate-900 font-normal mt-0.5 leading-relaxed">
                We draft Form XIV, Statement of Particulars, and Statement of Further Particulars, lodge them on the Copyright Office gateway, and remit government fees.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="w-6 h-6 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">3</div>
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-slate-950">Instant Diary Number Generation &amp; Client Dashboard Access</h3>
              <p className="text-xs sm:text-[13px] text-slate-900 font-normal mt-0.5 leading-relaxed">
                Receive the official Diary Number timestamp immediately, allowing real-time milestone surveillance across the entire examination lifecycle.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="w-6 h-6 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">4</div>
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-slate-950">Mandatory 30-Day Third-Party Objection Surveillance</h3>
              <p className="text-xs sm:text-[13px] text-slate-900 font-normal mt-0.5 leading-relaxed">
                We actively monitor the statutory 30-day waiting period. If any third party raises frivolous objections, our IP legal team prepares formal rebuttal replies.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="w-6 h-6 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">5</div>
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-slate-950">Substantive Examiner Scrutiny &amp; Discrepancy Clearance</h3>
              <p className="text-xs sm:text-[13px] text-slate-900 font-normal mt-0.5 leading-relaxed">
                If the Copyright Examiner issues procedural discrepancies or queries regarding developer NOCs or code formatting, Merrafilings submits legally reasoned written replies.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="w-6 h-6 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">6</div>
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-slate-950">Grant of Official Copyright Registration Certificate</h3>
              <p className="text-xs sm:text-[13px] text-slate-900 font-normal mt-0.5 leading-relaxed">
                Upon final satisfaction, the Registrar issues the official digital Certificate of Registration, permanently recording your work in the Register of Copyrights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Why Merrafilings Advantage */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. The Merrafilings IP Advantage
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs sm:text-[13px] font-normal text-slate-900">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
            <h4 className="font-semibold text-slate-950 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Specialized Tech &amp; Software IP Advocates</span>
            </h4>
            <p className="text-slate-800 font-normal leading-relaxed">
              We understand code. We ensure proper redaction of proprietary software trade secrets while meeting the Copyright Office’s first 10 and last 10 pages filing mandate.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
            <h4 className="font-semibold text-slate-950 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-blue-600" />
              <span>Same-Day Form XIV E-Filing Guarantee</span>
            </h4>
            <p className="text-slate-800 font-normal leading-relaxed">
              Once documents and work deposits are verified, our team lodges your application within 24 hours to secure immediate priority diary timestamps.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
            <h4 className="font-semibold text-slate-950 flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-purple-600" />
              <span>Tamper-Proof Cloud Document Vault</span>
            </h4>
            <p className="text-slate-800 font-normal leading-relaxed">
              Your sensitive creative works, assignment deeds, and official certificates are stored under bank-grade 256-bit encryption for lifetime access.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
            <h4 className="font-semibold text-slate-950 flex items-center gap-1.5">
              <Scale className="w-4 h-4 text-amber-600" />
              <span>Complete Legal Infringement Advisory</span>
            </h4>
            <p className="text-slate-800 font-normal leading-relaxed">
              Beyond registration, we advise on drafting commercial licensing agreements, DMCA takedown notices, and instituting civil infringement suits in Indian courts.
            </p>
          </div>
        </div>
      </section>
    </CopyrightGuideLayout>
  );
}
