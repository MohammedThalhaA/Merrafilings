"use client";

import React, { useState } from "react";
import { Calculator, CheckCircle2, ShieldCheck, ArrowRight, Sparkles, HelpCircle } from "lucide-react";

interface CostCalculatorProps {
  onStartWithConfig?: (summary: string) => void;
}

export default function InteractiveCostCalculator({ onStartWithConfig }: CostCalculatorProps) {
  const [entityType, setEntityType] = useState<string>("pvt-ltd");
  const [state, setState] = useState<string>("karnataka");
  const [includeGST, setIncludeGST] = useState<boolean>(true);
  const [includeTrademark, setIncludeTrademark] = useState<boolean>(false);
  const [includeDPIIT, setIncludeDPIIT] = useState<boolean>(true);
  const [includeAccounting, setIncludeAccounting] = useState<boolean>(false);

  // Pricing Model
  const basePrices: Record<string, { label: string; govtFee: number; profFee: number; days: string }> = {
    "pvt-ltd": { label: "Private Limited Company", govtFee: 1000, profFee: 4999, days: "3-5 Days" },
    llp: { label: "Limited Liability Partnership (LLP)", govtFee: 500, profFee: 3999, days: "4-6 Days" },
    opc: { label: "One Person Company (OPC)", govtFee: 1000, profFee: 4499, days: "3-5 Days" },
    proprietorship: { label: "Sole Proprietorship", govtFee: 0, profFee: 1499, days: "1-2 Days" },
  };

  const currentEntity = basePrices[entityType] || basePrices["pvt-ltd"];

  let totalGovtFee = currentEntity.govtFee;
  let totalProfFee = currentEntity.profFee;

  if (includeGST) totalProfFee += 999;
  if (includeTrademark) {
    totalGovtFee += 4500; // Official MSME/Individual TM fee
    totalProfFee += 1999;
  }
  if (includeDPIIT) totalProfFee += 1499;
  if (includeAccounting) totalProfFee += 3499;

  const total = totalGovtFee + totalProfFee;

  const handleProceed = () => {
    const summary = `${currentEntity.label} in ${state.toUpperCase()} (Total: ₹${total.toLocaleString("en-IN")})`;
    if (onStartWithConfig) onStartWithConfig(summary);
  };

  return (
    <section className="py-20 md:py-28 bg-[#FBFBFA] border-b border-slate-200/80 font-sans relative overflow-hidden" id="calculator">
      <div className="w-full max-w-[1400px] 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50/90 border border-emerald-100 px-3 py-1 rounded-full mb-3">
            <Calculator className="w-3.5 h-3.5 text-emerald-600" />
            Transparent Pricing Calculator
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 font-normal tracking-tight">
            Estimate your incorporation &amp; compliance setup
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-slate-600 font-normal">
            Configure your business structure and add-ons. Zero hidden costs, full government fee breakdown.
          </p>
        </div>

        {/* 2-Column Calculator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Options */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-6">
            
            {/* 1. Entity Type Selection */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-3">
                1. Select Entity Structure
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: "pvt-ltd", title: "Pvt Ltd", desc: "Best for funding" },
                  { id: "llp", title: "LLP", desc: "Low compliance" },
                  { id: "opc", title: "OPC", desc: "Solo founder" },
                  { id: "proprietorship", title: "Proprietorship", desc: "Fastest setup" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setEntityType(item.id)}
                    className={`p-3 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                      entityType === item.id
                        ? "bg-slate-900 text-white border-slate-900 shadow-xs scale-[1.02]"
                        : "bg-slate-50/80 text-slate-800 border-slate-200 hover:border-slate-300 hover:bg-slate-100/70"
                    }`}
                  >
                    <p className="text-xs sm:text-[13px] font-semibold">{item.title}</p>
                    <p className={`text-[11px] mt-0.5 ${entityType === item.id ? "text-slate-300" : "text-slate-500"}`}>
                      {item.desc}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. State Selection */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                2. State of Registered Office
              </label>
              <select
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-hidden focus:border-slate-800 bg-white"
              >
                <option value="karnataka">Karnataka (Bengaluru)</option>
                <option value="maharashtra">Maharashtra (Mumbai / Pune)</option>
                <option value="tamil-nadu">Tamil Nadu (Chennai)</option>
                <option value="delhi">Delhi NCR</option>
                <option value="telangana">Telangana (Hyderabad)</option>
                <option value="gujarat">Gujarat (Ahmedabad)</option>
                <option value="other">Other State / UT</option>
              </select>
            </div>

            {/* 3. Add-on Services Toggles */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-3">
                3. Add-On Licenses &amp; Compliances
              </label>
              <div className="space-y-2.5">
                {[
                  {
                    title: "GST Registration & Filing Setup",
                    desc: "Government GSTIN certificate with e-invoicing configuration",
                    checked: includeGST,
                    toggle: () => setIncludeGST(!includeGST),
                    price: "₹999",
                  },
                  {
                    title: "Trademark Brand Registration (Class 1)",
                    desc: "National IP filing with instant ™ symbol protection",
                    checked: includeTrademark,
                    toggle: () => setIncludeTrademark(!includeTrademark),
                    price: "₹1,999 + Govt Fee",
                  },
                  {
                    title: "Startup India DPIIT Tax Exemption Certificate",
                    desc: "Income tax exemption eligibility + 80% patent discount",
                    checked: includeDPIIT,
                    toggle: () => setIncludeDPIIT(!includeDPIIT),
                    price: "₹1,499",
                  },
                  {
                    title: "First-Year Accounting & Secretarial Care",
                    desc: "Statutory balance sheet preparation, AOC-4 & MGT-7",
                    checked: includeAccounting,
                    toggle: () => setIncludeAccounting(!includeAccounting),
                    price: "₹3,499",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    onClick={item.toggle}
                    className={`p-3.5 rounded-2xl border transition-all duration-200 flex items-center justify-between gap-3 cursor-pointer ${
                      item.checked
                        ? "bg-emerald-50/50 border-emerald-200/90 shadow-2xs"
                        : "bg-slate-50/50 border-slate-200/80 hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 border ${
                        item.checked
                          ? "bg-emerald-700 border-emerald-700 text-white"
                          : "border-slate-300 bg-white"
                      }`}>
                        {item.checked && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                      <div>
                        <p className="text-xs sm:text-[13px] font-semibold text-slate-900">{item.title}</p>
                        <p className="text-[11.5px] text-slate-500 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-slate-900 shrink-0">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Price Summary Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm space-y-6 lg:sticky lg:top-24">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Estimated Package
                </span>
                <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                  Turnaround: {currentEntity.days}
                </span>
              </div>
              <h3 className="font-serif text-2xl font-normal text-slate-900 mt-3">
                {currentEntity.label}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Incorporation package for {state.toUpperCase()}
              </p>
            </div>

            {/* Fee Breakdown Table */}
            <div className="space-y-2.5 text-xs text-slate-600 border-b border-slate-100 pb-5">
              <div className="flex justify-between">
                <span>Government Statutory Fee (MCA / RUN)</span>
                <span className="font-semibold text-slate-900">₹{totalGovtFee.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between">
                <span>Professional Legal Drafting &amp; CA Filing</span>
                <span className="font-semibold text-slate-900">₹{totalProfFee.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between text-emerald-700 font-medium">
                <span>Digital Signature (DSC) for 2 Directors</span>
                <span>Included (Free)</span>
              </div>
              <div className="flex justify-between text-emerald-700 font-medium">
                <span>Name Approval (RUN) Drafting</span>
                <span>Included (Free)</span>
              </div>
            </div>

            {/* Total Estimated Price */}
            <div>
              <div className="flex items-baseline justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Total Estimated Investment
                </span>
                <span className="font-serif text-3xl font-normal text-slate-900">
                  ₹{total.toLocaleString("en-IN")}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 text-right mt-0.5">
                * All government challans provided with 100% transparency
              </p>
            </div>

            {/* Action CTA Button */}
            <button
              onClick={handleProceed}
              className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 shadow-sm hover:shadow transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Lock In This Package</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Full CA drafting guarantee. No hidden charges.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
