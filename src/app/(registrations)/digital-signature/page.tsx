"use client";

import React from "react";
import Link from "next/link";
import ServicePageTemplate, {
  PricingPackage,
  useServicePage,
} from "@/components/ServicePageTemplate";
import {
  FileText,
  ShieldCheck,
  Award,
  Users,
  Building,
  Check,
  Clock,
  Landmark,
  BadgePercent,
  AlertTriangle,
  Receipt,
  FileCheck,
  Scale,
  MapPin,
  CheckCircle2,
  Store,
  Factory,
  Globe2,
  TrendingUp,
  Layers,
  Zap,
  Briefcase,
  HelpCircle,
  Truck,
  CheckCircle,
  FileSpreadsheet,
  KeyRound,
  Lock,
  Laptop,
  Fingerprint,
  HardDrive,
  FileCode,
  ArrowRight,
} from "lucide-react";

const FAQ_COL_1 = [
  {
    q: "What is a Digital Signature Certificate (DSC)?",
    a: "A Digital Signature Certificate (DSC) is a secure, tamper-proof electronic credential equivalent to a physical handwritten signature. Issued by a licensed Certifying Authority (CA) under the Information Technology Act, 2000, it uses advanced public key cryptography to authenticate the identity of the signer and ensure data integrity of digital documents."
  },
  {
    q: "Why do I need a DSC in India?",
    a: "A DSC is legally mandated by government authorities for various online statutory filings—including MCA company incorporation, ROC annual returns, DIN applications, Income Tax e-filing (for audit cases), GST portal registrations, e-tenders (GeM, IREPS, CPWD), trademark applications, and customs ICEGATE clearance."
  },
  {
    q: "Who issues Digital Signature Certificates in India?",
    a: "DSCs are issued by licensed Certifying Authorities (CAs) operating under the oversight of the Controller of Certifying Authorities (CCA), Ministry of Electronics and Information Technology (MeitY). Major licensed CAs include eMudhra, Capricorn, NSDL, Sify, and CDAC."
  },
  {
    q: "What is the difference between Class 2 and Class 3 DSC?",
    a: "As per CCA guidelines effective January 1, 2021, Class 2 DSCs have been officially discontinued across India. All statutory filings, MCA transactions, tax returns, and e-tenders now strictly require a Class 3 Digital Signature Certificate, which provides the highest level of cryptographic assurance and identity verification."
  },
  {
    q: "What are the types of Class 3 DSC available?",
    a: "Class 3 DSCs come in three primary types: (1) Signing Only—used for MCA, ROC, GST, and ITR filings; (2) Signing + Encryption Combo—mandatory for government e-procurement, GeM, and online tenders; and (3) DGFT DSC—specialized for foreign trade, containing embedded Import Export Code (IEC) numbers for customs clearance."
  },
  {
    q: "How long is a Digital Signature Certificate valid?",
    a: "Class 3 DSCs can be issued with a validity period of 1 year, 2 years, or 3 years. The 2-year validity certificate is the most popular choice for company directors, professionals, and corporate entities."
  },
  {
    q: "How can I apply for a DSC online through Merrafilings?",
    a: "You can apply 100% online through Merrafilings without submitting paper documents. Complete simple Aadhaar OTP verification, record a quick 15-second video KYC on your phone or webcam, and your Class 3 DSC will be approved within 30 to 60 minutes."
  },
  {
    q: "What documents are required to apply for an individual DSC?",
    a: "Individual applicants only need their PAN card, Aadhaar card (or passport/voter ID), mobile number linked with Aadhaar, email address, and a passport-sized photograph. The entire verification is completed through paperless e-KYC."
  }
];

const FAQ_COL_2 = [
  {
    q: "Can an organization or company apply for a DSC?",
    a: "Yes. An Organization DSC is issued in the name of an authorized signatory on behalf of a company, LLP, partnership firm, or trust. It requires the company PAN, Certificate of Incorporation / Partnership Deed, bank statement, and a Board Resolution authorizing the signatory."
  },
  {
    q: "How is the identity of the applicant verified during paperless KYC?",
    a: "Identity is verified securely through paperless e-KYC: the applicant verifies their Aadhaar via OTP or offline XML, provides PAN confirmation, and records a quick 15-second video showing their original identity proof and stating their name."
  },
  {
    q: "What is the difference between a DSC and a simple electronic signature?",
    a: "A simple electronic signature (like an image of a signature or Aadhaar eSign) is suitable for basic informal approvals. A Digital Signature Certificate (DSC) is backed by high-grade asymmetric cryptography, stored on a secure hardware USB token, and holds the highest legal evidentiary value in Indian courts under Section 65B of the Indian Evidence Act."
  },
  {
    q: "Can a DSC be used for filing Income Tax Returns?",
    a: "Yes. In fact, filing Income Tax Returns using a Class 3 DSC is mandatory for all companies, LLPs, political parties, and individuals/firms subject to mandatory tax audit under Section 44AB of the Income Tax Act."
  },
  {
    q: "Is DSC mandatory for GST filing and registrations?",
    a: "DSC is mandatory for all Companies and LLPs when registering for GST, filing monthly/quarterly GSTR-1 and GSTR-3B returns, submitting refund applications, and filing annual GSTR-9 returns."
  },
  {
    q: "How do I renew my expired Digital Signature Certificate?",
    a: "DSC renewal follows the same paperless video KYC process. You can download the renewed certificate onto your existing secure USB token (if compatible) or order a fresh pre-configured USB token through Merrafilings."
  },
  {
    q: "What happens if my USB token is lost or stolen?",
    a: "If your hardware USB crypto token is lost or compromised, you must immediately report it to Merrafilings to revoke the existing certificate, preventing unauthorized misuse. A replacement certificate and new USB token will then be issued."
  }
];

const FORM_FEATURES = [
  { icon: <Zap className="w-4 h-4" />, text: "Instant 30-Minute Paperless Video KYC Approval" },
  { icon: <ShieldCheck className="w-4 h-4" />, text: "Authorized CCA Licensed Certifying Authority DSC" },
  { icon: <HardDrive className="w-4 h-4" />, text: "FIPS 140-2 Level 2 Secure Hardware USB Crypto Token" },
  { icon: <FileCheck className="w-4 h-4" />, text: "Valid for MCA, ROC, Income Tax, GST & e-Tenders" },
  { icon: <Laptop className="w-4 h-4" />, text: "Free Remote Installation & Browser Driver Setup" },
];

const PACKAGES: PricingPackage[] = [
  {
    name: "Individual DSC - Signing Only",
    shortDesc: "Designed for company directors, chartered accountants, and individual taxpayers for ROC, ITR, and GST filings.",
    expandedDesc: "Class 3 Signing Digital Signature Certificate with 2-year validity, paperless Aadhaar/PAN video KYC, and pre-configured secure USB cryptographic token delivered to your doorstep.",
    price: "₹1,499",
    priceSub: "All Inclusive | 2 Years Validity",
    badge: "Basic",
    features: [
      "Class 3 Individual Signing DSC",
      "2 Years Statutory Validity",
      "Paperless Aadhaar / PAN Video KYC",
      "High-Security FIPS USB Token Included",
      "Valid for MCA, ROC, DIN & SPICe+",
      "Valid for Income Tax (ITR) & GST Filing",
      "Express Dispatch & Remote Driver Setup",
    ],
  },
  {
    name: "Organization DSC - Signing & Encryption Combo",
    popular: true,
    badge: "Most Popular",
    shortDesc: "Mandatory dual-key certificate for companies, LLPs, and enterprises participating in government e-tenders and procurement.",
    expandedDesc: "Combines both Signing Certificate (authentication) and Encryption Certificate (data privacy) in one FIPS crypto token. Mandatory for GeM, Indian Railways (IREPS), CPWD, Defence, and state tender bids.",
    price: "₹2,499",
    priceSub: "All Inclusive | Dual Key Combo",
    features: [
      "Class 3 Organization Signing + Encryption Keys",
      "2 Years Statutory Validity",
      "Mandatory for Central & State e-Tendering / GeM",
      "Organization Entity Verification & Board Resolution Audit",
      "Pre-Configured FIPS 140-2 Crypto Token",
      "Customs ICEGATE & Trademark Registry Compatible",
      "Dedicated E-Tendering Technical Specialist Support",
    ],
  },
  {
    name: "DGFT Digital Signature Certificate",
    shortDesc: "Specialized certificate embedded with Import Export Code (IEC) for foreign trade, customs ICEGATE, and shipping bills.",
    expandedDesc: "Tailored specifically for exporters and importers transacting on the DGFT national portal, claiming duty drawback, RoDTEP remissions, and filing ICEGATE customs bills of entry.",
    price: "₹2,999",
    priceSub: "All Inclusive | Export-Import Specialized",
    badge: "Export-Import",
    features: [
      "DGFT Embedded Import Export Code (IEC) DSC",
      "2 Years Statutory Validity",
      "Direct Clearance on DGFT & ICEGATE Portals",
      "Foreign Trade Policy Duty Concession Filing",
      "Hardware FIPS Token with Security Driver Pack",
      "Priority Fast-Track Turnaround within 1 Hour",
      "1-Year Dedicated Foreign Trade Helpdesk Support",
    ],
  },
];

const RELATED_GUIDES = [
  "Class 2 vs Class 3 Digital Signature: What Exporters & Directors Must Know",
  "How to Register DSC on MCA V3 Portal: Step-by-Step Guide",
  "How to Link DSC with Income Tax Portal for ITR e-Verification",
  "How to Install USB Token Drivers (ePass2003, ProxKey, mToken)",
  "Documents Required for Organization DSC Registration",
  "Using Digital Signatures for e-Tendering on GeM & CPPP Portals"
];

const RELATED_SERVICES_TAGS = [
  "Company Incorporation",
  "Director Identification Number (DIN)",
  "GST Registration",
  "Income Tax Return Filing",
  "Import Export Code (IEC)",
  "Trademark Registration"
];

const POPULAR_SEARCHES_TAGS = [
  "digital signature online apply",
  "class 3 dsc price India",
  "digital signature certificate download",
  "dsc for mca v3 portal",
  "e-tendering digital signature token"
];

function DSCGuideContent() {
  const { openContactModal } = useServicePage();

  return (
    <>
      {/* Intro */}
      <div>
        <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed">
          A <strong className="font-medium text-slate-800">Digital Signature Certificate (DSC)</strong> is the legal electronic equivalent of a physical signature, established under the <strong className="font-medium text-slate-800">Information Technology Act, 2000</strong>. Issued by licensed Certifying Authorities (CAs) under the guidance of the Controller of Certifying Authorities (CCA), Ministry of Electronics &amp; Information Technology (MeitY), a DSC utilizes robust public-key cryptography to ensure absolute identity authentication, data integrity, and non-repudiation in electronic transactions. Whether you are incorporating a company on the <strong className="font-medium text-slate-800">MCA portal</strong>, filing audited corporate tax returns with the <strong className="font-medium text-slate-800">Income Tax Department</strong>, or submitting competitive bids on <strong className="font-medium text-slate-800">government e-tendering portals (GeM, CPPP)</strong>, a Class 3 DSC is an indispensable statutory tool.
        </p>
      </div>

      {/* Section 1: What is a Digital Signature Certificate */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. What is a Digital Signature Certificate in India?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-normal">
          A Digital Signature Certificate (DSC) is a cryptographically secured electronic file that serves as an identity card in the digital realm. Stored in a physical, password-protected <strong>FIPS 140-2 certified USB cryptographic token</strong>, the certificate contains the user&apos;s legal name, email address, country, issuing authority, and cryptographic public key.
        </p>
        <p className="text-sm leading-relaxed text-slate-600 font-normal">
          Whenever a document or form is signed using a DSC, a unique mathematical hash of the data is encrypted using the signer&apos;s private key. If even a single character or punctuation mark is modified after signing, the digital signature becomes immediately invalid, guaranteeing 100% tamper detection and legal enforceability under Indian law.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 hover:bg-white hover:border-emerald-500 hover:shadow-md transition-all duration-200 cursor-pointer group">
            <Lock className="w-5 h-5 text-emerald-600 mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-semibold text-slate-900">Asymmetric Cryptography</h4>
            <p className="text-xs text-slate-600 font-normal mt-1">2048-bit RSA encryption keys ensure unbreachable data security and confidentiality.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 hover:bg-white hover:border-blue-500 hover:shadow-md transition-all duration-200 cursor-pointer group">
            <Scale className="w-5 h-5 text-blue-600 mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-semibold text-slate-900">Legal Admissibility</h4>
            <p className="text-xs text-slate-600 font-normal mt-1">Recognized under Section 65B of the Indian Evidence Act as indisputable court evidence.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 hover:bg-white hover:border-purple-500 hover:shadow-md transition-all duration-200 cursor-pointer group">
            <HardDrive className="w-5 h-5 text-purple-600 mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-semibold text-slate-900">FIPS USB Crypto Token</h4>
            <p className="text-xs text-slate-600 font-normal mt-1">Hardware-isolated crypto tokens prevent extraction or copying of the private key.</p>
          </div>
        </div>
      </section>

      {/* Section 2: Types of DSC Available in India */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Types of Digital Signature Certificates Available in India
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-normal">
          Over the years, the Controller of Certifying Authorities (CCA) has evolved the certification standards to maximize cybersecurity. Below is the historical and current framework:
        </p>

        <div className="space-y-3 pt-1">
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <h3 className="text-base font-semibold text-slate-900 mb-1 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-400"></span>
              Class 1 DSC (Discontinued)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              Previously issued to confirm only that the user&apos;s name and email address formed a valid record. It carried basic security and was strictly non-admissible for corporate compliance or statutory government filings.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <h3 className="text-base font-semibold text-slate-900 mb-1 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
              Class 2 DSC (Discontinued by CCA as of Jan 1, 2021)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              Historically used for MCA, ROC, and Income Tax returns based on physical document verification. Under new CCA directives, Class 2 has been completely deprecated to upgrade national security to Class 3.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200/80 shadow-2xs">
            <h3 className="text-base font-semibold text-emerald-900 mb-1 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse"></span>
              Class 3 DSC (Current National Mandatory Standard)
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
              The highest level of digital certification in India. It mandates rigorous identity verification (Aadhaar OTP + live video recording). <strong>Class 3 DSC is now compulsory across all platforms: MCA V3, Income Tax, GST, GeM, CPWD, Railways, and ICEGATE.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Certifying Authorities (Table) */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Licensed Certifying Authorities in India
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-normal">
          Only Certifying Authorities licensed by the Controller of Certifying Authorities (CCA) have legal power to issue valid DSCs. Merrafilings partners directly with India&apos;s leading licensed CAs:
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="bg-slate-100/90 text-slate-800 font-semibold border-b border-slate-200">
                <th className="p-3 sm:p-3.5">Certifying Authority (CA)</th>
                <th className="p-3 sm:p-3.5">Type of DSC Issued</th>
                <th className="p-3 sm:p-3.5">Primary Applicable Uses</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-3 sm:p-3.5 font-medium text-slate-900">eMudhra Consumer Services</td>
                <td className="p-3 sm:p-3.5 font-semibold text-emerald-700">Class 3 (Signing &amp; Combo)</td>
                <td className="p-3 sm:p-3.5">Individuals, Companies, Directors, DGFT</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-3 sm:p-3.5 font-medium text-slate-900">Capricorn CA (Cashlink Global)</td>
                <td className="p-3 sm:p-3.5 font-semibold text-blue-700">Class 3 (Signing &amp; Combo)</td>
                <td className="p-3 sm:p-3.5">MCA Portal, Income Tax, GST, Customs ICEGATE</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-3 sm:p-3.5 font-medium text-slate-900">NSDL e-Governance (Protean)</td>
                <td className="p-3 sm:p-3.5 font-semibold text-purple-700">Class 3 (Signing Only)</td>
                <td className="p-3 sm:p-3.5">Chartered Accountants, ROC Annual Filing, Tax Audits</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-3 sm:p-3.5 font-medium text-slate-900">Sify Technologies</td>
                <td className="p-3 sm:p-3.5 font-semibold text-indigo-700">Class 3 (Signing + Encryption)</td>
                <td className="p-3 sm:p-3.5">Central &amp; State e-Tendering, GeM, CPWD, IREPS</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-3 sm:p-3.5 font-medium text-slate-900">CDAC (Centre for Dev. of Advanced Computing)</td>
                <td className="p-3 sm:p-3.5 font-semibold text-amber-700">Class 3 Government DSC</td>
                <td className="p-3 sm:p-3.5">Government Bodies, PSU Officers, Judicial Officers</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 4: Benefits & Features */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Key Features &amp; Security Benefits of Class 3 DSC
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 hover:bg-white hover:border-emerald-500 hover:shadow-md transition-all duration-200 cursor-pointer group">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
              <Fingerprint className="w-4 h-4" />
            </div>
            <h4 className="text-[14px] font-semibold text-slate-900">Identity Authentication</h4>
            <p className="text-xs text-slate-600 font-normal mt-1">Conclusively confirms that the electronic transmission originated from the authorized director, proprietor, or representative.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 hover:bg-white hover:border-blue-500 hover:shadow-md transition-all duration-200 cursor-pointer group">
            <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
              <FileCheck className="w-4 h-4" />
            </div>
            <h4 className="text-[14px] font-semibold text-slate-900">Unbreachable Data Integrity</h4>
            <p className="text-xs text-slate-600 font-normal mt-1">Any post-signing alteration automatically breaks the mathematical hash, alerting recipients to unauthorized file modifications.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 hover:bg-white hover:border-purple-500 hover:shadow-md transition-all duration-200 cursor-pointer group">
            <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
              <Scale className="w-4 h-4" />
            </div>
            <h4 className="text-[14px] font-semibold text-slate-900">Legal Non-Repudiation</h4>
            <p className="text-xs text-slate-600 font-normal mt-1">The signer cannot legally claim that the document was forged or signed without their authorization under IT Act Section 15.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 hover:bg-white hover:border-amber-500 hover:shadow-md transition-all duration-200 cursor-pointer group">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
              <HardDrive className="w-4 h-4" />
            </div>
            <h4 className="text-[14px] font-semibold text-slate-900">Hardware Token Portability</h4>
            <p className="text-xs text-slate-600 font-normal mt-1">Compact USB crypto token allows secure, paperless signing from any computer worldwide with plug-and-play ease.</p>
          </div>
        </div>
      </section>

      {/* Section 5: Documents Required */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. Documents Required for DSC Registration in India
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-normal">
          Merrafilings offers 100% paperless verification. Prepare digital copies of the following documents:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="text-sm font-semibold text-slate-900 mb-2.5 flex items-center gap-2">
              <Users className="w-4 h-4 text-emerald-600" />
              For Individual Applicants (Directors / CAs / Partners)
            </h3>
            <ul className="space-y-2 text-xs text-slate-600 font-normal">
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>PAN Card:</strong> Self-attested copy of applicant&apos;s PAN card.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Address Proof:</strong> Aadhaar card, Passport, Driving License, or Voter ID.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Aadhaar Mobile Linkage:</strong> Active mobile number to receive e-KYC OTP.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Passport Photograph:</strong> Recent digital color passport photo.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>15-Second Video KYC:</strong> Brief video holding original ID proof and reading verification script.</span>
              </li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="text-sm font-semibold text-slate-900 mb-2.5 flex items-center gap-2">
              <Building className="w-4 h-4 text-blue-600" />
              For Organization DSC (Companies / LLPs / Trusts)
            </h3>
            <ul className="space-y-2 text-xs text-slate-600 font-normal">
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Entity PAN Card:</strong> Copy of the Company, LLP, or Firm PAN.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Registration Certificate:</strong> Certificate of Incorporation + MOA/AOA, or Partnership Deed.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Board Resolution:</strong> Official letter authorizing the signatory on company letterhead.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Bank Statement:</strong> Recent copy of active corporate current account bank statement.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Signatory Identity &amp; Video:</strong> KYC documents and video verification of the designated signatory.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 6: Step-by-Step Process */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          6. How to Obtain a Digital Signature Certificate Online in India
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-normal">
          Obtaining a Class 3 DSC with Merrafilings is rapid and fully digital:
        </p>

        <div className="space-y-3">
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-start gap-3.5">
            <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0">1</div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900">Select Certificate Type &amp; Order Online</h4>
              <p className="text-xs text-slate-600 font-normal mt-0.5">Choose your certificate category (Individual Signing, Organization Combo, or DGFT) and preferred validity period.</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-start gap-3.5">
            <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs shrink-0">2</div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900">Complete Paperless Aadhaar e-KYC</h4>
              <p className="text-xs text-slate-600 font-normal mt-0.5">Submit your PAN and Aadhaar number to trigger instant OTP verification directly with the Certifying Authority.</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-start gap-3.5">
            <div className="w-7 h-7 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-xs shrink-0">3</div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900">15-Second Video Verification</h4>
              <p className="text-xs text-slate-600 font-normal mt-0.5">Click the CA verification link sent to your phone, record a quick 15-second selfie video reading the on-screen code and showing your original ID.</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-start gap-3.5">
            <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs shrink-0">4</div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900">Instant CA Approval &amp; FIPS USB Token Delivery</h4>
              <p className="text-xs text-slate-600 font-normal mt-0.5">Within 30 minutes of video submission, the CA approves the certificate. We configure the hardware USB crypto token and ship it via express courier, providing free remote driver setup.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Pricing Comparison Table */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          7. Digital Signature Certificate Pricing &amp; Validity Breakdown
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-normal">
          The investment for a Digital Signature Certificate depends on its class, cryptographic key combination, and statutory validity:
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="bg-slate-100/90 text-slate-800 font-semibold border-b border-slate-200">
                <th className="p-3 sm:p-3.5">DSC Classification</th>
                <th className="p-3 sm:p-3.5">Validity Term</th>
                <th className="p-3 sm:p-3.5">Hardware Token</th>
                <th className="p-3 sm:p-3.5">Primary Official Usage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-3 sm:p-3.5 font-medium text-slate-900">Class 3 – Individual Signing</td>
                <td className="p-3 sm:p-3.5 font-semibold text-slate-700">2 Years</td>
                <td className="p-3 sm:p-3.5 text-emerald-700">✓ FIPS Token Included</td>
                <td className="p-3 sm:p-3.5">MCA V3 Portal, DIN, SPICe+, Income Tax (ITR), GST Returns</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-3 sm:p-3.5 font-medium text-slate-900">Class 3 – Organization Signing + Encryption</td>
                <td className="p-3 sm:p-3.5 font-semibold text-slate-700">2 Years</td>
                <td className="p-3 sm:p-3.5 text-emerald-700">✓ Dual Key FIPS Token</td>
                <td className="p-3 sm:p-3.5">GeM Portal, Railway IREPS, CPWD, Defence Bids, e-Tenders</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-3 sm:p-3.5 font-medium text-slate-900">DGFT Foreign Trade DSC</td>
                <td className="p-3 sm:p-3.5 font-semibold text-slate-700">2 Years</td>
                <td className="p-3 sm:p-3.5 text-emerald-700">✓ Embedded IEC Token</td>
                <td className="p-3 sm:p-3.5">DGFT Portal, ICEGATE Customs, Shipping Bills, Advance Licences</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 8: Why Merrafilings */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          8. Why Choose Merrafilings for Digital Signature Services?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-normal">
          Merrafilings is India&apos;s leading legal-tech platform, processing over 25,000+ DSC applications annually with unmatched reliability:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs text-slate-700">
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#00B074] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform" />
            <span className="group-hover:text-slate-900 transition-colors">Fast 30-Minute Video Approval – Paperless, zero branch visits</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#00B074] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform" />
            <span className="group-hover:text-slate-900 transition-colors">Genuine FIPS 140-2 Level 2 Crypto Tokens (ProxKey &amp; HYP2003)</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#00B074] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform" />
            <span className="group-hover:text-slate-900 transition-colors">Express Doorstep Courier Delivery across 19,000+ PIN Codes</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#00B074] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform" />
            <span className="group-hover:text-slate-900 transition-colors">Free Remote Desktop Token Driver &amp; Browser Signing Setup</span>
          </div>
        </div>

        <div className="pt-4 text-center">
          <button
            type="button"
            onClick={() => openContactModal("Digital Signature Certificate")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-[#594CF5] via-[#7B4CF5] to-[#D946EF] hover:brightness-105 shadow-md shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/40 hover:-translate-y-1 active:translate-y-0 hover:scale-[1.02] cursor-pointer transition-all duration-200"
          >
            <span>Apply for Class 3 DSC Online</span>
            <span>&rarr;</span>
          </button>
        </div>
      </section>
    </>
  );
}

export default function DigitalSignaturePage() {
  return (
    <ServicePageTemplate
      badgeText="Class 3 DSC – Controller of Certifying Authorities (CCA)"
      heroTitle={
        <>
          <span>Apply for </span>
          <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-medium">
            Digital Signature Certificate (DSC)
          </span>{" "}
          <span>Online in India</span>
        </>
      }
      heroSubtitle="Obtain your official CCA-approved Class 3 Digital Signature Certificate with instant paperless video KYC within 30 minutes. Mandatory for MCA ROC compliance, Income Tax e-filing, GST returns, and government e-tenders."
      formTitle="Apply for Your DSC Online"
      formSubtitle="Enter your details below to start your instant paperless video KYC verification."
      formFeatures={FORM_FEATURES}
      packages={PACKAGES}
      pricingTitle={
        <>
          Transparent packages. Standard{" "}
          <span className="font-normal text-[#00B074]">digital certificate pricing.</span>
        </>
      }
      pricingSubtitle="Select your required digital signature classification for rapid issuance and express token delivery."
      breadcrumbCurrent="Digital Signature"
      guideTitle="Digital Signature Certificate (DSC) Online Registration in India"
      guideContent={<DSCGuideContent />}
      relatedGuides={RELATED_GUIDES}
      faqCol1={FAQ_COL_1}
      faqCol2={FAQ_COL_2}
      faqSubtitle="Frequently asked questions about Class 3 DSC, paperless video KYC, USB crypto tokens, and portal usage in India."
      relatedServicesTags={RELATED_SERVICES_TAGS}
      popularSearchesTags={POPULAR_SEARCHES_TAGS}
    />
  );
}
