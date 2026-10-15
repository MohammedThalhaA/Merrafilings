"use client";

import React, { useState } from "react";
import { X, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle?: string;
}

export default function ContactModal({ isOpen, onClose, serviceTitle }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    state: "Karnataka",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-[500px] shadow-2xl border border-slate-200 overflow-hidden relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="p-8 sm:p-10 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-normal text-slate-900">Consultation Booked</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-[360px] mx-auto">
              Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. An authorized corporate CA/CS will contact you shortly at <span className="font-semibold text-slate-900">+91 {formData.phone}</span> regarding {serviceTitle || "your business inquiry"}.
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-5 py-2.5 text-xs font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-xl cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6 sm:p-8">
            <div className="mb-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50/80 border border-emerald-100/90 px-3 py-1 rounded-full mb-2">
                Quick Consultation
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-slate-900">
                {serviceTitle ? `Get Started: ${serviceTitle}` : "Speak with a Corporate Advisor"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Submit your details to receive an instant statutory checklist and transparent fee schedule.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ananya Patel"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-slate-800 bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Mobile Number
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-slate-200 bg-slate-50 text-xs text-slate-600 font-medium">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    placeholder="9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-r-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-slate-800 bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-slate-800 bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  State of Registration
                </label>
                <select
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-hidden focus:border-slate-800 bg-white"
                >
                  <option value="Karnataka">Karnataka</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Delhi NCR">Delhi NCR</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Other">Other State / UT</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Callback &amp; Quotation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-xs text-emerald-700 pt-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Zero spam. 100% confidential CA consultation</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
