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
  UtensilsCrossed,
  Flame,
  Download,
  Search,
  CheckCircle,
  HelpCircle,
  Wheat,
  Truck,
  Globe2,
  Layers,
  Zap,
  HeartPulse,
  Briefcase,
  Calendar,
  DollarSign,
  UserCheck,
} from "lucide-react";

const FAQ_COL_1 = [
  {
    "q": "What is ESI Registration?",
    "a": "ESI Registration is a mandatory process for Indian businesses to enroll under the Employee State Insurance Corporation (ESIC) scheme, providing social security and health insurance benefits to employees earning up to a certain threshold."
  },
  {
    "q": "Who is required to register for ESI?",
    "a": "Any business entity like factories, shops, or establishments with 10 or more employees (20 in some cases) and where employees `earn up to Rs. 21,000 per month (Rs. 25,000 for disabled individuals) must register for ESI."
  },
  {
    "q": "How can Merrafilings help with ESI Registration?",
    "a": "Merrafilings offers expert assistance in navigating the complexities of the ESI registration process online, ensuring a seamless and hassle-free experience for businesses with affordable PF ESIC registration fees."
  },
  {
    "q": "What are the benefits of ESI registration for employees?",
    "a": "Registered employees enjoy benefits like sickness and maternity benefits, medical care for the family, and compensation for employment injury or death, among others."
  },
  {
    "q": "What documents are required for ESI registration?",
    "a": "Key documents include Business Registration Proof, GST Certificate, MoA and AoA for companies, Address Proof, PAN Cards of the business and employees, and a list of all employees with their compensation details. Merrafilings helps you to collect all the required documents and obtain the ESI registration with affordable PF ESIC registration fees"
  }
];

const FAQ_COL_2 = [
  {
    "q": "How has the ESI registration process changed?",
    "a": "The ESI registration process has transitioned from manual to an entirely online system, making it more accessible and efficient for businesses."
  },
  {
    "q": "What are the compliance requirements after ESI registration?",
    "a": "Post-registration, businesses must maintain various registers (wages, attendance), submit monthly returns and challans, and keep an accident register, among other requirements."
  },
  {
    "q": "What is the role of Merrafilings post-ESI registration?",
    "a": "Beyond assisting with registration, Merrafilings can help businesses maintain compliance with ESIC regulations and ensure timely submissions of necessary documents and returns."
  },
  {
    "q": "How long does the ESI registration process take with Merrafilings?",
    "a": "While the exact timeline can vary, Merrafilings strives to make the registration process as quick and efficient as possible, often completing it within a few days of receiving all necessary documents."
  },
  {
    "q": "Are there any penalties for non-compliance with ESI regulations?",
    "a": "Yes, businesses failing to comply with ESI regulations may face penalties, including fines and legal action. Merrafilings can help businesses avoid such penalties by ensuring compliance."
  }
];

const FAQ_EXTRA_COL_1 = [
  {
    "q": "Can freelance workers or contractors be covered under ESI?",
    "a": "ESI coverage is typically for employees working in eligible establishments. Freelancers or contractors may not be directly covered unless they are employed by such an establishment."
  },
  {
    "q": "How does Merrafilings ensure the accuracy of the ESI registration process?",
    "a": "Merrafilings employs a team of experts familiar with ESIC regulations and uses a detailed checklist to ensure all documents and information are accurately submitted."
  },
  {
    "q": "What happens if there is an error in the ESI registration application?",
    "a": "Merrafilings can assist in identifying and correcting errors in the ESI registration application to ensure compliance and prevent delays."
  },
  {
    "q": "Can Merrafilings help with the deregistration process if a business becomes ineligible for ESI?",
    "a": "Yes, Merrafilings can provide guidance and support in the deregistration process if a business no longer meets the ESI eligibility criteria."
  },
  {
    "q": "How does Merrafilings handle confidential information during the ESI registration process?",
    "a": "Merrafilings adheres to strict confidentiality policies to ensure that all client information is securely handled and protected throughout the registration process."
  }
];

const FAQ_EXTRA_COL_2 = [
  {
    "q": "What is the cost of Merrafilings' services for ESI registration?",
    "a": "The cost can vary based on the specific requirements and size of the business. Merrafilings provides transparent pricing and can offer a quote based on the services needed."
  },
  {
    "q": "How can businesses track the status of their ESI registration with Merrafilings?",
    "a": "We provides regular updates and has a customer portal where businesses can track the progress of their ESI registration."
  },
  {
    "q": "Are there any industry-specific considerations for ESI registration that Merrafilings can advise on?",
    "a": "Yes, Merrafilings can provide industry-specific guidance, considering the unique requirements and challenges of different sectors for ESI registration."
  },
  {
    "q": "What is the PF ESI Registration Fees?",
    "a": "The PF ESI Registration Fees involve professional charges for service providers, which vary based on the service package and number of employees."
  },
  {
    "q": "How to Find ESIC Number?",
    "a": "Before answering the question of how to find ESIC number, it is important to understand when it is provided. The ESIC number, also known as the ESI code, is provided after successful registration with the Employee State Insurance Corporation (ESIC). It can be found on the registration certificate issued by ESIC."
  }
];

const FORM_FEATURES = [
  { icon: <ShieldCheck className="w-4 h-4" />, text: "17-Digit ESIC Employer Code Generation" },
  { icon: <FileText className="w-4 h-4" />, text: "Shram Suvidha & ESIC Portal Online Filing" },
  { icon: <Users className="w-4 h-4" />, text: "Employee Pehchan Card & Insurance Number Support" },
  { icon: <Award className="w-4 h-4" />, text: "100% Social Security & Statutory Compliance" },
];

const PACKAGES: PricingPackage[] = [
  {
    name: "ESI Registration (Standalone)",
    shortDesc: "Designed for commercial establishments and factories employing 10 or more workers earning up to ₹21,000 monthly.",
    expandedDesc: "Complete online drafting and submission on the ESIC portal, employer entity KYC validation, address verification, and delivery of the official 17-digit Employer Code within 3-5 working days.",
    price: "₹2,899",
    priceSub: "All Inclusive | Fast Digital Turnaround",
    badge: "Most Affordable",
    features: [
      "ESIC 17-Digit Employer Registration Code",
      "Documentation Audit & Business Entity Verification",
      "Shram Suvidha Portal Account Configuration",
      "Employer Master Profile Creation on ESIC",
      "Guidance on Monthly Contribution Calculation (3.25% + 0.75%)",
      "Dedicated Payroll & Labor Compliance Executive",
    ],
  },
  {
    name: "ESI + PF Combined Registration",
    popular: true,
    badge: "Most Popular",
    shortDesc: "Complete labor compliance combo covering both ESIC (Health/Medical) and EPFO (Provident Fund/Pension) registration.",
    expandedDesc: "Unified Shram Suvidha application filing for dual statutory codes. Includes establishment code generation for EPFO and 17-digit employer code for ESIC, initial employee master upload, and digital certificate delivery.",
    price: "₹5,499",
    priceSub: "All Inclusive | Complete Labor Compliance",
    features: [
      "Dual Code Issuance: ESIC Code + EPFO Establishment Code",
      "Unified Shram Suvidha Single Window Application",
      "Digital Signature (DSC) Integration on Labor Portals",
      "Initial Employee Data Template & Master Upload",
      "ECR (Electronic Challan cum Return) Setup Assistance",
      "Priority Senior Labor Law Consultant Support",
    ],
  },
  {
    name: "ESI + PF Registration & 6-Month Return Retainer",
    shortDesc: "End-to-end setup and complete monthly compliance management for emerging startups, retail chains, and SMEs.",
    expandedDesc: "Includes dual ESI and PF registration plus 6 consecutive months of monthly contribution computation, monthly challan generation, ECR filing, employee additions/deletions, and half-yearly ESI return submissions.",
    price: "₹11,999",
    priceSub: "All Inclusive | 6 Months Retainer Support",
    features: [
      "Complete ESI + PF Online Registration Setup",
      "6 Months Monthly ESI & PF Challan Generation",
      "Monthly ECR Filing on EPFO & ESIC Portals",
      "Employee Addition / Exit Management",
      "Half-Yearly Form 5 & Form 6 Statutory Filing",
      "Dedicated Labor Law & Payroll Account Manager",
    ],
  },
];

const RELATED_GUIDES = [
  "How to Calculate ESI Monthly Contribution: Employer and Employee Share",
  "Difference Between ESI and EPF Registration in India",
  "Step-by-Step Guide to Downloading ESIC Pehchan Card for Employees",
  "Mandatory Due Dates and Penalty Structure for Late ESI Payments",
  "Medical & Sickness Benefits Available Under the ESI Scheme",
  "How to File Half-Yearly ESI Returns Online on ESIC Portal",
];

const RELATED_SERVICES_TAGS = [
  "EPF Registration",
  "Professional Tax Registration",
  "Shop & Establishment License",
  "Labor Law Compliance",
  "Payroll Management",
  "Trade License",
  "GST Registration",
  "MSME Udyam Registration",
];

const POPULAR_SEARCHES_TAGS = [
  "esi registration online apply in india",
  "esic portal employer login",
  "esi registration fees and documents",
  "esi wage limit 21000 eligibility",
  "how to get 17 digit esic employer code",
  "esic contribution rate employer employee share",
  "esi return filing last date 15th of month",
  "penalty for late payment of esic",
  "esi applicability for factories and shops",
  "pehchan card download online esic",
  "esi registration process step by step",
  "difference between esi and pf in india",
];

const TABLE_1_COVERAGE = [
  { establishment: "Power-Operated Factories", employees: "10 or more employees", wageCeiling: "₹21,000 / month (₹25,000 for Persons with Disabilities)" },
  { establishment: "Non-Power Operated Factories", employees: "20 or more employees", wageCeiling: "₹21,000 / month" },
  { establishment: "Shops & Commercial Establishments", employees: "10 or more (in most notified states)", wageCeiling: "₹21,000 / month" },
  { establishment: "Hotels, Restaurants, Dining Houses & Cafes", employees: "10 or more employees", wageCeiling: "₹21,000 / month" },
  { establishment: "Cinemas, Theatres & Entertainment Venues", employees: "10 or more employees", wageCeiling: "₹21,000 / month" },
  { establishment: "Road Motor Transport Establishments", employees: "10 or more employees", wageCeiling: "₹21,000 / month" },
  { establishment: "Private Educational & Medical Institutions", employees: "10 or more (in notified states)", wageCeiling: "₹21,000 / month" },
];

const TABLE_2_RATES = [
  { contributor: "Employer Share", rate: "3.25%", basis: "Gross Monthly Wages payable to eligible employee" },
  { contributor: "Employee Share", rate: "0.75%", basis: "Gross Monthly Wages deducted from employee salary" },
  { contributor: "Total Contribution", rate: "4.00%", basis: "Combined statutory remittance to ESIC fund" },
  { contributor: "Employees Earning < ₹176/day", rate: "0.00% (Employee Exempted)", basis: "Employer pays only 3.25%; employee share is 0%" },
];

const TABLE_3_CALCULATION = [
  { gross: "₹10,000", employerShare: "₹325.00 (3.25%)", employeeShare: "₹75.00 (0.75%)", total: "₹400.00" },
  { gross: "₹15,000", employerShare: "₹487.50 (3.25%)", employeeShare: "₹112.50 (0.75%)", total: "₹600.00" },
  { gross: "₹18,000", employerShare: "₹585.00 (3.25%)", employeeShare: "₹135.00 (0.75%)", total: "₹720.00" },
  { gross: "₹21,000 (Statutory Max)", employerShare: "₹682.50 (3.25%)", employeeShare: "₹157.50 (0.75%)", total: "₹840.00" },
];

const TABLE_4_CALENDAR = [
  { activity: "Monthly ESI Contribution Payment", frequency: "Monthly", dueDate: "15th of the following calendar month", penalty: "Interest at 12% p.a. + damages up to 25%" },
  { activity: "Half-Yearly Return (April to September period)", frequency: "Half-Yearly", dueDate: "11th November", penalty: "Statutory notice & inspection audit" },
  { activity: "Half-Yearly Return (October to March period)", frequency: "Half-Yearly", dueDate: "11th May", penalty: "Statutory notice & inspection audit" },
  { activity: "New Employee Onboarding / Insurance Number", frequency: "Event-based", dueDate: "Within 10 days of joining date", penalty: "Denial of medical claims for worker" },
];

const TABLE_5_PENALTIES = [
  { defaultNature: "Late payment of monthly ESI contribution", penalty: "Interest at 12% per annum on outstanding balance from due date" },
  { defaultNature: "Delay in remittance up to 2 months", penalty: "Damages levied at 5% of arrears amount" },
  { defaultNature: "Delay between 2 to 4 months", penalty: "Damages levied at 10% of arrears amount" },
  { defaultNature: "Delay between 4 to 6 months", penalty: "Damages levied at 15% of arrears amount" },
  { defaultNature: "Delay exceeding 6 months", penalty: "Damages levied at 25% of arrears amount" },
  { defaultNature: "Willful default, wage deduction without deposit, or fraud", penalty: "Imprisonment up to 2 years or fine up to ₹5,000 or both under Section 85" },
];

const TABLE_6_TIMELINE = [
  { stage: "Phase 1: Document Collection & Entity KYC Verification", duration: "1 to 2 Working Days", output: "Audit-ready compliance dossier" },
  { stage: "Phase 2: Shram Suvidha & ESIC Portal Online Filing", duration: "1 Working Day", output: "Form 1 submission and ARN generated" },
  { stage: "Phase 3: Department Scrutiny & Background Processing", duration: "2 to 3 Working Days", output: "Verification by ESIC jurisdictional officer" },
  { stage: "Phase 4: Official 17-Digit Employer Code Issuance", duration: "Within 5 to 7 Working Days", output: "Registration certificate & employer login credentials" },
];

const TABLE_7_ESI_VS_EPF = [
  { parameter: "Governing Act", esi: "Employees' State Insurance Act, 1948", epf: "Employees' Provident Funds and MP Act, 1952" },
  { parameter: "Administering Body", esi: "ESIC (Ministry of Labour & Employment)", epf: "EPFO (Ministry of Labour & Employment)" },
  { parameter: "Primary Purpose", esi: "Health insurance, medical care, maternity & disability coverage", epf: "Retirement corpus, pension (EPS) & life insurance (EDLI)" },
  { parameter: "Mandatory Employee Threshold", esi: "10 or more employees (in most states)", epf: "20 or more employees" },
  { parameter: "Wage Ceiling for Coverage", esi: "₹21,000 / month gross salary", epf: "₹15,000 / month basic wage + DA" },
  { parameter: "Employer Contribution Rate", esi: "3.25% of gross wages", epf: "12% of basic wages + DA (3.67% PF + 8.33% EPS)" },
  { parameter: "Employee Contribution Rate", esi: "0.75% of gross wages", epf: "12% of basic wages + DA" },
  { parameter: "Medical / Hospitalization Benefit", esi: "Full comprehensive medical care in 150+ ESIC hospitals", epf: "Not covered (Retirement & provident fund only)" },
];

const TABLE_8_FEES = [
  { component: "Official Government Portal Registration Fee", govtFee: "₹0 (Nil statutory fee charged by ESIC)", professionalFee: "Included in package" },
  { component: "17-Digit Employer Code Issuance & Portal Setup", govtFee: "₹0 (Nil)", professionalFee: "₹2,899 (Standalone)" },
  { component: "Employee Insurance Number & Pehchan Card Generation", govtFee: "₹0 (Nil)", professionalFee: "Included in compliance package" },
  { component: "Monthly Contribution Challan Generation (Monthly ECR)", govtFee: "₹0 (Nil)", professionalFee: "Available under annual retainer" },
  { component: "Half-Yearly Statutory Form 5 & Form 6 Return Filing", govtFee: "₹0 (Nil)", professionalFee: "Available under annual retainer" },
];

function ESIGuideContent() {
  const { openContactModal } = useServicePage();

  return (
    <>
      {/* Section 1: Overview */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. What is ESI Registration Online in India?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-normal">
          <strong className="text-slate-800 font-medium">ESI Registration</strong> (Employees&apos; State Insurance Registration) is a mandatory statutory social security scheme governed by the <strong className="text-slate-800 font-medium">Employees&apos; State Insurance Act, 1948</strong>. Administered by the Employees&apos; State Insurance Corporation (ESIC), an autonomous statutory body under the Ministry of Labour and Employment, the scheme provides holistic healthcare and financial protection to Indian workers against health hazards, temporary or permanent disablement, occupational disease, maternity, and employment injury.
        </p>
        <p className="text-sm leading-relaxed text-slate-600 font-normal">
          Upon successful online registration, the employer is allotted an official <strong className="text-slate-800 font-medium">17-digit unique Employer Identification Code</strong>. Every enrolled employee is provided an individual Insurance Number and an <strong className="text-slate-800 font-medium">ESIC Pehchan Card</strong>, granting cash-less medical treatment across more than 150+ ESIC Model Hospitals, 1,400+ dispensaries, and thousands of empaneled private multi-specialty hospitals across India.
        </p>

        <div className="bg-[#FAF9F7] p-5 rounded-2xl border border-slate-200/80 space-y-3">
          <div className="flex items-center gap-2 text-slate-900 font-medium text-sm">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <span>The Statutory Mandate: Who Must Register Under the ESI Act?</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed font-normal">
            Under the ESI Act, registration is legally compulsory for any factory or commercial establishment employing <strong>10 or more workers</strong> where employees earn a monthly gross wage of up to <strong>₹21,000 per month</strong> (or ₹25,000 per month for employees with certified disabilities). Failing to register within 15 days of becoming eligible triggers steep financial damages, attachment of bank accounts, and criminal prosecution under Section 85 of the Act.
          </p>
        </div>
      </section>

      {/* Section 2: Coverage & Eligibility + Table 1 */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Who is Covered Under the ESI Scheme in India?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-normal">
          The ESI Scheme extends to various categories of establishments across all Indian states and Union Territories. Both power-operated factories and non-power commercial business units fall within its statutory ambit:
        </p>

        {/* Table 1 */}
        <div className="overflow-x-auto rounded-xl border border-slate-200/80 shadow-2xs">
          <table className="w-full text-left text-xs sm:text-[13px]">
            <thead className="bg-[#FAF9F7] text-slate-700 font-medium border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Type of Establishment</th>
                <th className="py-3 px-4">Statutory Employee Threshold</th>
                <th className="py-3 px-4">Wage Ceiling for Coverage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-normal text-slate-900">
              {TABLE_1_COVERAGE.map((row, idx) => (
                <tr key={idx} className="transition-colors">
                  <td className="py-3 px-4 font-medium text-slate-800">{row.establishment}</td>
                  <td className="py-3 px-4 text-emerald-800 font-medium">{row.employees}</td>
                  <td className="py-3 px-4 leading-relaxed">{row.wageCeiling}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 3: Contribution Rates + Tables 2 & 3 */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. How Are ESI Contribution Rates Calculated?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-normal">
          The ESI contribution is a joint statutory contribution funded by both the employer and the eligible employee. The rates were reduced by the Government of India to promote formal employment and ease compliance burdens:
        </p>

        {/* Table 2 */}
        <div className="overflow-x-auto rounded-xl border border-slate-200/80 shadow-2xs">
          <table className="w-full text-left text-xs sm:text-[13px]">
            <thead className="bg-[#FAF9F7] text-slate-700 font-medium border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Contributor</th>
                <th className="py-3 px-4">Statutory Contribution Rate</th>
                <th className="py-3 px-4">Basis of Calculation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-normal text-slate-900">
              {TABLE_2_RATES.map((row, idx) => (
                <tr key={idx} className="transition-colors">
                  <td className="py-3 px-4 font-medium text-slate-800">{row.contributor}</td>
                  <td className="py-3 px-4 text-[#155EEF] font-semibold">{row.rate}</td>
                  <td className="py-3 px-4 leading-relaxed">{row.basis}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table 3: Examples */}
        <div className="pt-2">
          <h3 className="text-sm font-medium text-slate-900 mb-2">
            Table 3: Practical Monthly ESI Contribution Calculation Examples
          </h3>
          <div className="overflow-x-auto rounded-xl border border-slate-200/80 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-[13px]">
              <thead className="bg-[#FAF9F7] text-slate-700 font-medium border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4">Gross Monthly Wages</th>
                  <th className="py-3 px-4 text-emerald-700">Employer Share (3.25%)</th>
                  <th className="py-3 px-4 text-blue-700">Employee Share (0.75%)</th>
                  <th className="py-3 px-4 font-semibold text-slate-900">Total Monthly Contribution</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-normal text-slate-900">
                {TABLE_3_CALCULATION.map((row, idx) => (
                  <tr key={idx} className="transition-colors">
                    <td className="py-3 px-4 font-medium text-slate-800">{row.gross}</td>
                    <td className="py-3 px-4 text-emerald-800 font-medium">{row.employerShare}</td>
                    <td className="py-3 px-4 text-blue-800 font-medium">{row.employeeShare}</td>
                    <td className="py-3 px-4 font-semibold text-slate-900">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 4: Benefits for Employees & Employers */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. What Are the Benefits of ESI Registration?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-normal">
          The ESI scheme provides comprehensive social security protection, shielding workers from medical crises while safeguarding employers from crippling workplace accident liabilities:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-1">
          {/* Card 1: Medical Benefit - Rose */}
          <div className="p-4.5 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-rose-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1.5 rounded-lg bg-rose-50 text-rose-600"><HeartPulse className="w-4 h-4" /></span>
              <h3 className="text-sm font-medium text-slate-900 group-hover:text-rose-600 transition-colors">Comprehensive Medical Care</h3>
            </div>
            <p className="text-xs text-slate-600 font-normal leading-relaxed">
              Full medical care from day one of insurable employment for the worker and family members with no expenditure ceiling in ESIC dispensaries and empaneled private hospitals.
            </p>
          </div>

          {/* Card 2: Sickness Benefit - Amber */}
          <div className="p-4.5 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-amber-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1.5 rounded-lg bg-amber-50 text-amber-600"><Calendar className="w-4 h-4" /></span>
              <h3 className="text-sm font-medium text-slate-900 group-hover:text-amber-600 transition-colors">Sickness &amp; Extended Cash Benefit</h3>
            </div>
            <p className="text-xs text-slate-600 font-normal leading-relaxed">
              Cash compensation at 70% of average daily wages for up to 91 days in any two consecutive benefit periods during certified sickness, extending to 80% for chronic illnesses.
            </p>
          </div>

          {/* Card 3: Maternity Benefit - Purple */}
          <div className="p-4.5 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-purple-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1.5 rounded-lg bg-purple-50 text-purple-600"><Award className="w-4 h-4" /></span>
              <h3 className="text-sm font-medium text-slate-900 group-hover:text-purple-600 transition-colors">Maternity Benefit (26 Weeks)</h3>
            </div>
            <p className="text-xs text-slate-600 font-normal leading-relaxed">
              100% of average daily wages paid for 26 weeks (extendable by 1 month on medical advice) for confinement, miscarriage, or sickness arising out of pregnancy.
            </p>
          </div>

          {/* Card 4: Disablement Benefit - Blue */}
          <div className="p-4.5 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-blue-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1.5 rounded-lg bg-blue-50 text-blue-600"><ShieldCheck className="w-4 h-4" /></span>
              <h3 className="text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors">Disablement &amp; Injury Pension</h3>
            </div>
            <p className="text-xs text-slate-600 font-normal leading-relaxed">
              Temporary disablement benefit at 90% of wages until recovery; permanent disablement is paid as a monthly pension for life based on loss of earning capacity.
            </p>
          </div>

          {/* Card 5: Dependants Benefit - Indigo */}
          <div className="p-4.5 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-indigo-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1.5 rounded-lg bg-indigo-50 text-indigo-600"><Users className="w-4 h-4" /></span>
              <h3 className="text-sm font-medium text-slate-900 group-hover:text-indigo-600 transition-colors">Dependants Benefit &amp; Funeral Expenses</h3>
            </div>
            <p className="text-xs text-slate-600 font-normal leading-relaxed">
              Monthly pension distributed to surviving widow and children in case of death due to employment injury; funeral expenses of ₹15,000 paid to the eldest surviving member.
            </p>
          </div>

          {/* Card 6: Employer Legal Immunity - Emerald */}
          <div className="p-4.5 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-emerald-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600"><Scale className="w-4 h-4" /></span>
              <h3 className="text-sm font-medium text-slate-900 group-hover:text-emerald-600 transition-colors">Employer Legal Immunity</h3>
            </div>
            <p className="text-xs text-slate-600 font-normal leading-relaxed">
              Under Section 53 of the ESI Act, registered employers are completely insulated from tort damages, Employee Compensation Act lawsuits, and civil damage claims.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Documents Required */}
      <section id="documents-required" className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. What Documents Are Required for ESI Registration in India?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-normal">
          The documentation is divided into establishment documents and employee master records:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4.5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
            <h3 className="text-sm font-medium text-slate-900 flex items-center gap-2">
              <Building className="w-4 h-4 text-[#155EEF]" /> Establishment &amp; Business Documents
            </h3>
            <ul className="text-xs text-slate-600 space-y-1.5 font-normal">
              <li>• Certificate of Incorporation / Partnership Deed / Trust Registration</li>
              <li>• PAN Card of the Business Entity &amp; GST Registration Certificate</li>
              <li>• Memorandum of Association (MOA) &amp; Articles of Association (AOA)</li>
              <li>• Shop &amp; Establishment License or Factories Act License</li>
              <li>• Proof of Registered Address (Electricity bill, lease deed &amp; landlord NOC)</li>
              <li>• Cancelled Cheque from the establishment&apos;s active bank account</li>
              <li>• Digital Signature Certificate (DSC) of Authorized Signatory</li>
            </ul>
          </div>

          <div className="p-4.5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
            <h3 className="text-sm font-medium text-slate-900 flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-emerald-600" /> Employee Master Roster Records
            </h3>
            <ul className="text-xs text-slate-600 space-y-1.5 font-normal">
              <li>• Complete list of all employees with designation and date of joining</li>
              <li>• Monthly gross wage / salary breakdown for each employee</li>
              <li>• Aadhaar Card &amp; PAN Card copies of eligible employees</li>
              <li>• Bank account details (account number and IFSC) of workers</li>
              <li>• Nominee and family member details (with passport photos) for Pehchan Card</li>
              <li>• Previous ESIC Insurance Number (if previously registered elsewhere)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 6: Step-by-Step Registration Process */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          6. Step-by-Step ESI Registration Procedure Online
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-normal">
          Merrafilings manages the complete registration lifecycle on the unified Shram Suvidha and ESIC portals:
        </p>

        <div className="space-y-3">
          <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-2xs hover:border-blue-500 hover:shadow-md hover:-translate-y-0.5 transition-all">
            <span className="w-7 h-7 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
            <div>
              <h3 className="text-sm font-medium text-slate-900">Establishment Profile &amp; Shram Suvidha Account Creation</h3>
              <p className="text-xs text-slate-600 mt-1 font-normal leading-relaxed">
                We register your commercial entity on the Ministry of Labour&apos;s Shram Suvidha portal, linking your PAN, GST, and business coordinates.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-2xs hover:border-blue-500 hover:shadow-md hover:-translate-y-0.5 transition-all">
            <span className="w-7 h-7 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
            <div>
              <h3 className="text-sm font-medium text-slate-900">Statutory Form 1 Drafting &amp; Document Upload</h3>
              <p className="text-xs text-slate-600 mt-1 font-normal leading-relaxed">
                Our labor compliance experts draft Form 1 (Employer Registration Form), attaching your property lease, incorporation charter, partner/director KYC, and bank verification.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-2xs hover:border-blue-500 hover:shadow-md hover:-translate-y-0.5 transition-all">
            <span className="w-7 h-7 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
            <div>
              <h3 className="text-sm font-medium text-slate-900">Digital Signature Authentication &amp; Final Lodgement</h3>
              <p className="text-xs text-slate-600 mt-1 font-normal leading-relaxed">
                The application is authenticated via the authorized signatory&apos;s Class-3 Digital Signature Certificate (DSC) and submitted directly to the ESIC central server.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-2xs hover:border-blue-500 hover:shadow-md hover:-translate-y-0.5 transition-all">
            <span className="w-7 h-7 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">4</span>
            <div>
              <h3 className="text-sm font-medium text-slate-900">Allotment of 17-Digit Employer Code</h3>
              <p className="text-xs text-slate-600 mt-1 font-normal leading-relaxed">
                Upon automated scrutiny, ESIC issues the official 17-digit Employer Code Certificate along with login credentials to the ESIC Employer Portal.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-2xs hover:border-emerald-500 hover:shadow-md hover:-translate-y-0.5 transition-all">
            <span className="w-7 h-7 rounded-full bg-[#00B074] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">5</span>
            <div>
              <h3 className="text-sm font-medium text-slate-900">Employee Master Enrollment &amp; Pehchan Card Delivery</h3>
              <p className="text-xs text-slate-600 mt-1 font-normal leading-relaxed">
                We upload your employee roster, generate individual Insurance Numbers, and download downloadable Pehchan smart identity cards for your workforce.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Compliance Calendar + Table 4 */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          7. What Are the Due Dates for ESI Payment and Return Filing?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-normal">
          Maintaining post-registration compliance is critical to avoid punitive interest and inspection audits:
        </p>

        {/* Table 4 */}
        <div className="overflow-x-auto rounded-xl border border-slate-200/80 shadow-2xs">
          <table className="w-full text-left text-xs sm:text-[13px]">
            <thead className="bg-[#FAF9F7] text-slate-700 font-medium border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Compliance Activity</th>
                <th className="py-3 px-4">Frequency</th>
                <th className="py-3 px-4 text-[#155EEF]">Statutory Due Date</th>
                <th className="py-3 px-4 text-rose-700">Non-Compliance Penalty</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-normal text-slate-900">
              {TABLE_4_CALENDAR.map((row, idx) => (
                <tr key={idx} className="transition-colors">
                  <td className="py-3 px-4 font-medium text-slate-800">{row.activity}</td>
                  <td className="py-3 px-4">{row.frequency}</td>
                  <td className="py-3 px-4 text-blue-800 font-medium">{row.dueDate}</td>
                  <td className="py-3 px-4 text-rose-800 leading-relaxed">{row.penalty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 8: Penalties + Table 5 */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          8. Penalties for Non-Payment or Late Payment of ESI Contributions
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-normal">
          The ESI Act treats non-payment of employee deductions as criminal breach of trust. Penalties escalate rapidly:
        </p>

        {/* Table 5 */}
        <div className="overflow-x-auto rounded-xl border border-slate-200/80 shadow-2xs">
          <table className="w-full text-left text-xs sm:text-[13px]">
            <thead className="bg-[#FAF9F7] text-slate-700 font-medium border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Nature of Statutory Default</th>
                <th className="py-3 px-4 text-rose-700">Prescribed Penalty &amp; Damages</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-normal text-slate-900">
              {TABLE_5_PENALTIES.map((row, idx) => (
                <tr key={idx} className="transition-colors">
                  <td className="py-3 px-4 font-medium text-slate-800">{row.defaultNature}</td>
                  <td className="py-3 px-4 text-rose-900 leading-relaxed font-normal">{row.penalty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 9: ESI vs EPF + Table 7 */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          9. How Does ESI Registration Differ from EPF Registration?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-normal">
          While both schemes operate under the Ministry of Labour, their core functions, contribution bases, and coverage ceilings differ markedly:
        </p>

        {/* Table 7 */}
        <div className="overflow-x-auto rounded-xl border border-slate-200/80 shadow-2xs">
          <table className="w-full text-left text-xs sm:text-[13px]">
            <thead className="bg-[#FAF9F7] text-slate-700 font-medium border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Parameter</th>
                <th className="py-3 px-4 text-emerald-700">ESI Registration (Health)</th>
                <th className="py-3 px-4 text-[#155EEF]">EPF Registration (Retirement)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-normal text-slate-900">
              {TABLE_7_ESI_VS_EPF.map((row, idx) => (
                <tr key={idx} className="transition-colors">
                  <td className="py-3 px-4 font-medium text-slate-800">{row.parameter}</td>
                  <td className="py-3 px-4 leading-relaxed font-normal">{row.esi}</td>
                  <td className="py-3 px-4 leading-relaxed font-normal">{row.epf}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 10: Fees & Timelines + Tables 6 & 8 */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          10. Cost of ESI Registration Online in India
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-normal">
          The Government of India levies zero portal registration fees for issuing the 17-digit code. Professional charges cover end-to-end documentation, portal filing, and worker onboarding:
        </p>

        {/* Table 8 */}
        <div className="overflow-x-auto rounded-xl border border-slate-200/80 shadow-2xs">
          <table className="w-full text-left text-xs sm:text-[13px]">
            <thead className="bg-[#FAF9F7] text-slate-700 font-medium border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Service Component</th>
                <th className="py-3 px-4 text-emerald-700">Government Portal Fee</th>
                <th className="py-3 px-4">Professional Charges</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-normal text-slate-900">
              {TABLE_8_FEES.map((row, idx) => (
                <tr key={idx} className="transition-colors">
                  <td className="py-3 px-4 font-medium text-slate-800">{row.component}</td>
                  <td className="py-3 px-4 text-emerald-800 font-medium">{row.govtFee}</td>
                  <td className="py-3 px-4">{row.professionalFee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 11: Why Merrafilings */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          11. Why Choose Merrafilings for ESI Registration Services?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-normal">
          Merrafilings is India&apos;s leading regulatory and labor compliance platform. We ensure fast, penalty-free employer onboarding:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs text-slate-700">
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#00B074] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform" />
            <span className="group-hover:text-slate-900 transition-colors">100% Online Shram Suvidha Process – Zero labor department visits</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#00B074] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform" />
            <span className="group-hover:text-slate-900 transition-colors">Pan-India Support – Over 25,000+ employers registered and compliant</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#00B074] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform" />
            <span className="group-hover:text-slate-900 transition-colors">Dedicated Labor Law Consultant for ECR and monthly challan management</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#00B074] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform" />
            <span className="group-hover:text-slate-900 transition-colors">Automated Compliance Reminders – Avoid 12% p.a. interest &amp; damages</span>
          </div>
        </div>

        <div className="pt-4 text-center">
          <button
            type="button"
            onClick={() => openContactModal("ESI Registration")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-[#594CF5] via-[#7B4CF5] to-[#D946EF] hover:brightness-105 shadow-md shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/40 hover:-translate-y-1 active:translate-y-0 hover:scale-[1.02] cursor-pointer transition-all duration-200"
          >
            <span>Apply for ESI Registration Today</span>
            <span>&rarr;</span>
          </button>
        </div>
      </section>
    </>
  );
}

export default function ESIRegistrationPage() {
  return (
    <ServicePageTemplate
      badgeText="Employees' State Insurance Corporation (ESIC)"
      heroTitle={
        <>
          <span>Apply for </span>
          <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-medium">
            ESI Registration
          </span>{" "}
          <span>Online in India</span>
        </>
      }
      heroSubtitle="Secure your official 17-digit ESIC Employer Code online. Complete Shram Suvidha portal filing, employee insurance number generation, and 100% labor law compliance across all Indian states."
      formTitle="Apply for ESI Registration"
      formSubtitle="Enter your establishment details below to speak with our labor law specialists."
      formFeatures={FORM_FEATURES}
      packages={PACKAGES}
      pricingTitle={
        <>
          Transparent packages. Standard{" "}
          <span className="font-normal text-[#00B074]">labor compliance pricing.</span>
        </>
      }
      pricingSubtitle="Select your employee threshold scale for rapid, guaranteed ESIC registration issuance."
      breadcrumbCurrent="ESI Registration"
      guideTitle="ESI Registration Online for Employers and Businesses in India"
      guideContent={<ESIGuideContent />}
      relatedGuides={RELATED_GUIDES}
      faqCol1={FAQ_COL_1}
      faqCol2={FAQ_COL_2}
      faqExtraCol1={FAQ_EXTRA_COL_1}
      faqExtraCol2={FAQ_EXTRA_COL_2}
      faqSubtitle="Frequently asked questions about obtaining ESI Registration and ESIC compliance in India."
      relatedServicesTags={RELATED_SERVICES_TAGS}
      popularSearchesTags={POPULAR_SEARCHES_TAGS}
    />
  );
}
