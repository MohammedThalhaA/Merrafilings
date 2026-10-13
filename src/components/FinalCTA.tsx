"use client";

import React, { useState } from "react";
import { PhoneCall, ShieldCheck, Clock, Award, CheckCircle2 } from "lucide-react";

interface FinalCTAProps {
  onFormSubmit?: (data: { name: string; phone: string; service: string }) => void;
}

export default function FinalCTA({ onFormSubmit }: FinalCTAProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Private Limited Company",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    if (onFormSubmit) onFormSubmit(formData);
    setSubmitted(true);
  };

  return (
    <section className="py-20 md:py-24 bg-white border-b border-[#E4E7EC]">
      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-10">
        <div className="bg-[#FBFAF7] rounded-3xl border border-[#E4E7EC] p-8 sm:p-12 md:p-16 2xl:p-20 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Heading and value propositions */}
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-block text-[11px] font-bold uppercase tracking-[0.15em] text-[#155EEF]">
                GET STARTED IN MINUTES
              </span>
              <h2 className="text-[32px] sm:text-[38px] md:text-[42px] font-semibold text-[#111827] tracking-tight leading-[1.2]">
                Ready to launch or scale your business in India?
              </h2>
              <p className="text-[15px] sm:text-[16px] text-[#475467] leading-relaxed max-w-[680px]">
                Speak with our experienced corporate legal &amp; tax advisors. Get clear pricing,
                regulatory checklists, and a tailored timeline for your business today.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-2 text-[13.5px] text-[#111827] font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#15803D] shrink-0" />
                  <span>Verified CA / CS Team</span>
                </div>
                <div className="flex items-center gap-2 text-[13.5px] text-[#111827] font-medium">
                  <Clock className="w-4 h-4 text-[#155EEF] shrink-0" />
                  <span>Call back in 15 mins</span>
                </div>
                <div className="flex items-center gap-2 text-[13.5px] text-[#111827] font-medium">
                  <Award className="w-4 h-4 text-[#EA580C] shrink-0" />
                  <span>Zero Hidden Fees</span>
                </div>
              </div>
            </div>

            {/* Right Column: Quick Consultation Form */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl border border-[#E4E7EC] p-6 sm:p-7 shadow-xs">
                {submitted ? (
                  <div className="text-center py-8 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-[#ECFDF3] text-[#15803D] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-[18px] font-bold text-[#111827]">Request Received!</h3>
                    <p className="text-[13.5px] text-[#475467]">
                      Our corporate specialist will connect with you within 15 minutes at {formData.phone}.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-3 text-[12.5px] text-[#155EEF] font-semibold underline cursor-pointer"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="text-[17px] font-semibold text-[#111827]">
                      Request Free Expert Consultation
                    </h3>

                    <div>
                      <label className="block text-[12.5px] font-medium text-[#475467] mb-1">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E4E7EC] text-[14px] text-[#111827] focus:outline-hidden focus:border-[#155EEF] transition-colors bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-[12.5px] font-medium text-[#475467] mb-1">
                        Phone Number (Mobile)
                      </label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-[#E4E7EC] bg-[#F8FAFC] text-[13px] text-[#475467] font-medium">
                          +91
                        </span>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="98765 43210"
                          className="w-full px-3.5 py-2.5 rounded-r-xl border border-[#E4E7EC] text-[14px] text-[#111827] focus:outline-hidden focus:border-[#155EEF] transition-colors bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[12.5px] font-medium text-[#475467] mb-1">
                        Service Needed
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E4E7EC] text-[14px] text-[#111827] focus:outline-hidden focus:border-[#155EEF] transition-colors bg-white"
                      >
                        <option value="Private Limited Company">Private Limited Company</option>
                        <option value="Limited Liability Partnership (LLP)">LLP Registration</option>
                        <option value="GST Registration & Filing">GST Registration &amp; Filing</option>
                        <option value="Trademark Registration">Trademark Registration</option>
                        <option value="Income Tax Return (ITR)">Income Tax Return (ITR)</option>
                        <option value="ROC & MCA Annual Compliance">ROC &amp; MCA Compliance</option>
                        <option value="USA / International Company">Global US/UAE Company</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 px-4 rounded-xl text-[14px] font-semibold text-white bg-[#155EEF] hover:bg-[#1849A9] shadow-xs hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer mt-2"
                    >
                      <PhoneCall className="w-4 h-4" />
                      <span>Get Free Consultation</span>
                    </button>

                    <p className="text-[11px] text-[#94A3B8] text-center">
                      🔒 We respect your privacy. No spam guaranteed.
                    </p>
                  </form>
                )}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
