"use client";

import React, { useState } from "react";
import { FileText, Droplet, Award, Skull, Store, Construction, HelpCircle, AlertOctagon, X, Send, CreditCard, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ServiceItem {
  id: string;
  name: string;
  nameHi: string;
  desc: string;
  icon: React.ReactNode;
  themeColor: string;
  formType: "tax" | "certificate" | "license" | "rti" | "complaint";
}

export default function CitizenServices() {
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const services: ServiceItem[] = [
    {
      id: "prop-tax",
      name: "Property Tax",
      nameHi: "संपत्ति कर भुगतान",
      desc: "Pay yearly house or land tax and print municipal receipts online.",
      icon: <CreditCard className="w-6 h-6" />,
      themeColor: "indigo",
      formType: "tax",
    },
    {
      id: "water-tax",
      name: "Water Tax",
      nameHi: "जल कर भुगतान",
      desc: "Check outstanding water supply billing rates and settle dues.",
      icon: <Droplet className="w-6 h-6" />,
      themeColor: "sky",
      formType: "tax",
    },
    {
      id: "birth-cert",
      name: "Birth Certificate",
      nameHi: "जन्म प्रमाण पत्र",
      desc: "Apply for or verify official birth registration certificates.",
      icon: <Award className="w-6 h-6" />,
      themeColor: "emerald",
      formType: "certificate",
    },
    {
      id: "death-cert",
      name: "Death Certificate",
      nameHi: "मृत्यु प्रमाण पत्र",
      desc: "Register a demise record or apply for official death certificates.",
      icon: <Skull className="w-6 h-6" />,
      themeColor: "rose",
      formType: "certificate",
    },
    {
      id: "trade-lic",
      name: "Trade License",
      nameHi: "व्यापार लाइसेंस",
      desc: "Obtain dynamic shop licenses or renew existing trade permits.",
      icon: <Store className="w-6 h-6" />,
      themeColor: "amber",
      formType: "license",
    },
    {
      id: "build-perm",
      name: "Building Permission",
      nameHi: "भवन निर्माण अनुमति",
      desc: "Submit architectural site plan blue-prints for urban clearances.",
      icon: <Construction className="w-6 h-6" />,
      themeColor: "purple",
      formType: "license",
    },
    {
      id: "rti",
      name: "RTI Application",
      nameHi: "सूचना का अधिकार (RTI)",
      desc: "File requests under Right to Information Act to municipal office.",
      icon: <HelpCircle className="w-6 h-6" />,
      themeColor: "cyan",
      formType: "rti",
    },
    {
      id: "grievance",
      name: "Complaint Registry",
      nameHi: "शिकायत पंजीकरण",
      desc: "Register civic problems and track resolution progress directly.",
      icon: <AlertOctagon className="w-6 h-6" />,
      themeColor: "red",
      formType: "complaint",
    },
  ];

  const handleCardClick = (service: ServiceItem) => {
    setActiveService(service);
    setFormSubmitted(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setActiveService(null);
      setFormSubmitted(false);
    }, 2000);
  };

  return (
    <section id="citizen-services" className="py-20 px-4 md:px-8 bg-white relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs bg-gov-blue-medium/10 text-gov-blue-medium px-3 py-1 rounded-full font-bold uppercase tracking-wider border border-gov-blue-medium/20">
            Citizen Services Portal
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gov-blue-dark tracking-tight mt-3 font-serif">
            Unified Public Service Desk
          </h2>
          <p className="text-sm text-slate-500 mt-2 font-medium">
            Interact with our official digital desks. Fill forms online and complete transactions without manual queuing.
          </p>
          <div className="w-20 h-1 bg-gov-saffron mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            // Determine dynamic border/bg style
            let themeClass = "hover:border-indigo-300 text-indigo-600 bg-indigo-50/50";
            if (service.themeColor === "sky") themeClass = "hover:border-sky-300 text-sky-600 bg-sky-50/50";
            if (service.themeColor === "emerald") themeClass = "hover:border-emerald-300 text-emerald-600 bg-emerald-50/50";
            if (service.themeColor === "rose") themeClass = "hover:border-rose-300 text-rose-600 bg-rose-50/50";
            if (service.themeColor === "amber") themeClass = "hover:border-amber-300 text-amber-600 bg-amber-50/50";
            if (service.themeColor === "purple") themeClass = "hover:border-purple-300 text-purple-600 bg-purple-50/50";
            if (service.themeColor === "cyan") themeClass = "hover:border-cyan-300 text-cyan-600 bg-cyan-50/50";
            if (service.themeColor === "red") themeClass = "hover:border-red-300 text-red-600 bg-red-50/50";

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                onClick={() => handleCardClick(service)}
                className={`group border border-slate-100 rounded-2xl p-6 transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between h-[210px] ${themeClass}`}
              >
                <div>
                  {/* Icon Frame */}
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center transition-transform group-hover:rotate-6 group-hover:scale-105 shrink-0">
                    {service.icon}
                  </div>
                  
                  {/* Titles */}
                  <div className="mt-4">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">
                      {service.nameHi}
                    </span>
                    <h3 className="text-base font-extrabold text-gov-blue-dark mt-0.5 tracking-tight group-hover:text-gov-blue-medium transition-colors">
                      {service.name}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-500 font-medium line-clamp-2 mt-2 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* ================================================= */}
      {/* SERVICE SIMULATION MODAL SHEET                    */}
      {/* ================================================= */}

      <AnimatePresence>
        {activeService && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-999">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl shadow-2xl border border-slate-100 max-w-lg w-full overflow-hidden"
            >
              
              {/* Modal Header */}
              <div className="gov-gradient-blue text-white px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-white/10 rounded-lg text-gov-saffron">
                    {activeService.icon}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm uppercase tracking-wider">{activeService.name} Form</h3>
                    <p className="text-[10px] text-slate-300 font-semibold">{activeService.nameHi}</p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveService(null)}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form Content */}
              <div className="p-6">
                {formSubmitted ? (
                  <div className="py-8 text-center space-y-3 flex flex-col items-center">
                    <CheckCircle className="w-16 h-16 text-emerald-500 animate-scale-up" />
                    <h4 className="text-lg font-extrabold text-slate-800">Application Submitted!</h4>
                    <p className="text-xs text-slate-500 font-semibold max-w-xs">
                      Your reference ID is <span className="font-mono text-gov-blue-dark font-extrabold">BPT-SERV-{(Math.random()*1000000).toFixed(0)}</span>. You will receive SMS alerts for further updates.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    
                    {/* Common Client Details */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Applicant Name</label>
                        <input required type="text" placeholder="John Doe" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-gov-blue-medium font-semibold" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Mobile Number</label>
                        <input required type="tel" placeholder="98765xxxxx" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-gov-blue-medium font-semibold" />
                      </div>
                    </div>

                    {/* Tax Specific Fields */}
                    {activeService.formType === "tax" && (
                      <div className="space-y-3">
                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Property Identification Number (PIN)</label>
                          <input required type="text" placeholder="BPT-PIN-XXXX" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-gov-blue-medium uppercase font-semibold" />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Financial Year</label>
                          <select className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-gov-blue-medium font-semibold bg-white">
                            <option>FY 2026-2027 (Current)</option>
                            <option>FY 2025-2026</option>
                          </select>
                        </div>
                      </div>
                    )}

                    {/* Certificate Specific Fields */}
                    {activeService.formType === "certificate" && (
                      <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Date of Event</label>
                            <input required type="date" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-gov-blue-medium font-semibold" />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Place of Event</label>
                            <input required type="text" placeholder="Baghpat District Hospital" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-gov-blue-medium font-semibold" />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Father's Full Name</label>
                            <input required type="text" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-gov-blue-medium font-semibold" />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Mother's Full Name</label>
                            <input required type="text" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-gov-blue-medium font-semibold" />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* License Specific Fields */}
                    {activeService.formType === "license" && (
                      <div className="space-y-3">
                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Firm/Business Name</label>
                          <input required type="text" placeholder="e.g. Baghpat General Store" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-gov-blue-medium font-semibold" />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Ward Number / Business Location</label>
                          <select className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-gov-blue-medium font-semibold bg-white">
                            {Array.from({ length: 25 }, (_, i) => (
                              <option key={i + 1}>Ward No. {i + 1}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    )}

                    {/* RTI Specific Fields */}
                    {activeService.formType === "rti" && (
                      <div className="space-y-3">
                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Department under Query</label>
                          <select className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-gov-blue-medium font-semibold bg-white">
                            <option>Public Works (PWD)</option>
                            <option>Sanitation & Cleanliness</option>
                            <option>Finance & Tax Allocations</option>
                            <option>Urban Engineering</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Describe Information Required</label>
                          <textarea required rows={3} placeholder="State specific records or files you want to retrieve." className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-gov-blue-medium font-semibold" />
                        </div>
                      </div>
                    )}

                    {/* Complaint Specific Fields */}
                    {activeService.formType === "complaint" && (
                      <div className="space-y-3">
                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Ward Area / Location of Issue</label>
                          <input required type="text" placeholder="e.g. Near Railway Station, Baghpat" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-gov-blue-medium font-semibold" />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Complaint Description</label>
                          <textarea required rows={3} placeholder="Please provide specific details about the issue." className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-gov-blue-medium font-semibold" />
                        </div>
                      </div>
                    )}

                    {/* Submit Section */}
                    <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
                      <button
                        type="button"
                        onClick={() => setActiveService(null)}
                        className="px-4 py-2 border border-slate-200 text-slate-600 rounded-lg text-xs font-bold hover:bg-slate-50 cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="flex items-center gap-1.5 px-5 py-2 bg-gov-saffron hover:bg-gov-saffron-dark text-white rounded-lg text-xs font-bold shadow-md cursor-pointer transition-colors"
                      >
                        <span>Submit Details</span>
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </form>
                )}
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
