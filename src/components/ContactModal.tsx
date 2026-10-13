"use client";

import React, { useState } from "react";
import { X, CheckCircle2, ShieldCheck, Phone, ArrowRight } from "lucide-react";

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
      className="fixed inset-0 z-50 bg-black/55 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl w-full max-w-[520px] shadow-2xl border border-[#E4E7EC] overflow-hidden relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#F8FAFC] hover:bg-[#E4E7EC] text-[#111827] flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="p-8 sm:p-10 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#ECFDF3] text-[#15803D] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-[22px] font-bold text-[#111827]">Consultation Booked!</h3>
            <p className="text-[14px] text-[#475467] leading-relaxed max-w-[380px] mx-auto">
              Thank you, <span className="font-semibold text-[#111827]">{formData.name}</span>. An authorized corporate CA/CS will contact you shortly at <span className="font-semibold text-[#111827]">+91 {formData.phone}</span> regarding {serviceTitle || "your business inquiry"}.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 text-[14px] font-semibold text-white bg-[#155EEF] hover:bg-[#1849A9] rounded-xl cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6 sm:p-8">
            <div className="mb-6">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#155EEF]">
                Quick Consultation
              </span>
              <h3 className="text-[22px] font-bold text-[#111827] mt-1">
                {serviceTitle ? `Get Started with ${serviceTitle}` : "Talk with a Corporate Advisor"}
              </h3>
              <p className="text-[13.5px] text-[#475467] mt-1">
                Submit your details and get an instant transparent quote and filing checklist.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[12.5px] font-medium text-[#344054] mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ananya Patel"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D0D5DD] text-[14px] text-[#111827] focus:outline-hidden focus:border-[#155EEF]"
                />
              </div>

              <div>
                <label className="block text-[12.5px] font-medium text-[#344054] mb-1">
                  Mobile Number
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-[#D0D5DD] bg-[#F8FAFC] text-[13px] text-[#475467] font-medium">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    placeholder="9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-r-xl border border-[#D0D5DD] text-[14px] text-[#111827] focus:outline-hidden focus:border-[#155EEF]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[12.5px] font-medium text-[#344054] mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D0D5DD] text-[14px] text-[#111827] focus:outline-hidden focus:border-[#155EEF]"
                />
              </div>

              <div>
                <label className="block text-[12.5px] font-medium text-[#344054] mb-1">
                  State of Registration
                </label>
                <select
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D0D5DD] text-[14px] text-[#111827] focus:outline-hidden focus:border-[#155EEF] bg-white"
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
                  className="w-full py-3 px-4 rounded-xl text-[14px] font-semibold text-white bg-[#155EEF] hover:bg-[#1849A9] shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Callback &amp; Quotation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11.5px] text-[#15803D] pt-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Zero spam, 100% confidential CA consultation</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
