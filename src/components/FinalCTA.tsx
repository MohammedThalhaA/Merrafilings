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
    <section className="py-10 md:py-14 bg-white border-b border-slate-200/80" id="contact">
      <div className="w-full max-w-[1400px] 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF9F6] rounded-3xl border border-slate-200/90 p-8 sm:p-12 md:p-16 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Heading and value propositions */}
            <div data-reveal="left" className="lg:col-span-7 space-y-5">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50/80 border border-emerald-100/90 px-3 py-1 rounded-full">
                Get Started in Minutes
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-slate-900 font-normal tracking-tight leading-[1.2]">
                Ready to launch or scale your business in India?
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl font-normal">
                Speak with our experienced corporate legal &amp; tax advisors. Receive clear government fee schedules,
                statutory document checklists, and a tailored timeline for your entity today.
              </p>

              <div className="pt-3 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-200/80">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                  <div className="w-7 h-7 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                  </div>
                  <span>Verified CA &amp; CS Specialists</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                  <div className="w-7 h-7 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                    <Clock className="w-3.5 h-3.5 text-blue-700" />
                  </div>
                  <span>Advisory Callback in 15 Min</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                  <div className="w-7 h-7 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0">
                    <Award className="w-3.5 h-3.5 text-amber-700" />
                  </div>
                  <span>100% Fixed Transparent Pricing</span>
                </div>
              </div>
            </div>

            {/* Right Column: Quick Consultation Form */}
            <div data-reveal="right" className="lg:col-span-5">
              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs">
                {submitted ? (
                  <div className="text-center py-8 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-xl font-normal text-slate-900">Consultation Booked</h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Our corporate specialist will connect with you within 15 minutes at {formData.phone}.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-3 text-xs text-emerald-800 font-medium underline underline-offset-2 cursor-pointer"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <h3 className="font-serif text-lg sm:text-xl font-normal text-slate-900">
                        Request Advisory Consultation
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        No obligations. Receive tailored regulatory guidance.
                      </p>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-slate-800 transition-colors bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Phone Number (Mobile)
                      </label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-slate-200 bg-slate-50 text-xs text-slate-600 font-medium">
                          +91
                        </span>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="98765 43210"
                          className="w-full px-3.5 py-2.5 rounded-r-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-slate-800 transition-colors bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Service Needed
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-hidden focus:border-slate-800 transition-colors bg-white"
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
                      className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer mt-2"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>Get Free Advisory Call</span>
                    </button>

                    <p className="text-[11px] text-slate-500 text-center">
                      Strict privacy guarantee. Your information is never shared.
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
