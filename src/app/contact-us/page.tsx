"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, ShieldAlert, Send, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Page Title */}
        <div className="text-center space-y-3">
          <span className="text-xs bg-gov-blue-medium/10 text-gov-blue-medium px-3 py-1 rounded-full font-bold uppercase tracking-wider border border-gov-blue-medium/20">
            Reach Out to Us
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-gov-blue-dark tracking-tight font-serif">
            Get in Touch
          </h1>
          <p className="text-sm md:text-base text-slate-500 font-medium max-w-2xl mx-auto">
            Your feedback and queries help us serve you better. Contact Town Panchayat, Aminagar Sarai, Baghpat anytime.
          </p>
          <div className="w-20 h-1 bg-gov-saffron mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Dual Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Contact Information Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col">
            <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-8 flex-1 flex flex-col justify-between space-y-6">
              
              <div>
                <h2 className="text-xl font-extrabold text-gov-blue-dark tracking-tight font-serif mb-2">
                  Contact Information
                </h2>
                <p className="text-xs text-slate-400 font-semibold mb-6">
                  Feel free to reach out to us for any support, queries, complaints or general assistance.
                </p>
                
                {/* Contact Detail Cards */}
                <div className="space-y-4">
                  {/* Address Card */}
                  <div className="flex items-start gap-4 p-3 bg-slate-50 rounded-2xl border border-slate-100/60 transition-all hover:bg-slate-100/80">
                    <div className="p-3 bg-blue-500 text-white rounded-xl shadow-md shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Office Address</p>
                      <p className="text-xs font-bold text-slate-700 mt-0.5 leading-relaxed">
                        Town Panchayat , Aminagar Sarai , Baghpat , Uttar Pradesh , 250609
                      </p>
                    </div>
                  </div>

                  {/* Phone Card */}
                  <div className="flex items-start gap-4 p-3 bg-slate-50 rounded-2xl border border-slate-100/60 transition-all hover:bg-slate-100/80">
                    <div className="p-3 bg-emerald-600 text-white rounded-xl shadow-md shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Phone Number</p>
                      <a href="tel:+911212222040" className="text-xs font-black text-slate-700 mt-0.5 block hover:underline">
                        +91 121-2222040
                      </a>
                    </div>
                  </div>

                  {/* Email Card */}
                  <div className="flex items-start gap-4 p-3 bg-slate-50 rounded-2xl border border-slate-100/60 transition-all hover:bg-slate-100/80">
                    <div className="p-3 bg-amber-500 text-white rounded-xl shadow-md shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Email Address</p>
                      <a href="mailto:info@baghpatnagarpalika.in" className="text-xs font-black text-slate-700 mt-0.5 block hover:underline">
                        info@baghpatnagarpalika.in
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours & Helpline footer inside left card */}
              <div className="pt-6 border-t border-slate-100 space-y-4">
                {/* Office Hours */}
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-gov-blue-medium shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-black text-gov-blue-dark">Office Hours</h4>
                    <p className="text-[11px] text-slate-500 font-semibold mt-0.5">Monday – Saturday (10:00 AM to 05:00 PM)</p>
                  </div>
                </div>

                {/* Emergency Helpline */}
                <div className="flex items-start gap-3">
                  <ShieldAlert className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-black text-red-600">Emergency Helpline</h4>
                    <p className="text-[11px] text-slate-500 font-semibold mt-0.5">Available 24x7 for essential municipal services.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Feedback/Message Form (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-8 md:p-10 flex-1 flex flex-col justify-between">
              
              <div>
                <h2 className="text-xl font-extrabold text-gov-blue-dark tracking-tight font-serif mb-2">
                  Send Us a Message
                </h2>
                <p className="text-xs text-slate-400 font-semibold mb-8">
                  Our team will get back to you shortly.
                </p>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="py-16 text-center space-y-4 flex flex-col items-center justify-center max-w-sm mx-auto"
                    >
                      <CheckCircle2 className="w-16 h-16 text-emerald-500 animate-bounce" />
                      <h3 className="text-lg font-extrabold text-slate-800">Message Transmitted!</h3>
                      <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                        Thank you for reaching out to Town Panchayat, Aminagar Sarai, Baghpat. We have logged your enquiry, and our desk officer will contact you within 24-48 working hours.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Your Name</label>
                          <input
                            required
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter full name"
                            className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-xs focus:outline-gov-blue-medium font-semibold"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Your Email</label>
                          <input
                            required
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter email"
                            className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-xs focus:outline-gov-blue-medium font-semibold"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Phone Number</label>
                          <input
                            required
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Enter phone number"
                            className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-xs focus:outline-gov-blue-medium font-semibold"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Subject</label>
                          <input
                            required
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            placeholder="Message Subject"
                            className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-xs focus:outline-gov-blue-medium font-semibold"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Your Message</label>
                        <textarea
                          required
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={6}
                          placeholder="Write your message..."
                          className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-xs focus:outline-gov-blue-medium font-semibold"
                        />
                      </div>

                      <button
                        type="submit"
                        className="flex items-center gap-1.5 px-6 py-2.5 bg-gov-blue-medium hover:bg-gov-blue-dark text-white text-xs font-bold rounded-xl shadow-md transition-colors cursor-pointer hover:scale-102 self-start"
                      >
                        <span>Send Message</span>
                        <Send className="w-4 h-4 text-gov-saffron" />
                      </button>
                    </form>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
