"use client";

import React, { useState } from "react";
import { Shield, User, FileText, CreditCard, Search, PhoneCall, X, AlertCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import { Label } from "recharts";
import { Select, SelectItem } from "../ui/select";
import { Textarea } from "../ui/textarea";

export default function Header() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const closeModal = () => {
    setActiveModal(null);
    setSearchQuery("");
  };

  const handleSearchSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Searching municipal portal for: "${searchQuery}"`);
    closeModal();
  };

  return (
    <>
      <header className="bg-white py-4 px-4 md:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-6">
          {/* Left Side: Crest, Brand names, Taglines */}
          <div className="flex items-center text-center lg:text-left flex-col sm:flex-row gap-4">
            {/* SVG Crest Logo */}
            <div className="relative group cursor-pointer transition-transform duration-300 hover:scale-105">
              <svg className="w-18 h-18" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="48" stroke="#0A2540" strokeWidth="4" fill="#F8FAFC" />
                <circle cx="50" cy="50" r="42" stroke="#FF9933" strokeWidth="1.5" strokeDasharray="3 3" />
                {/* National Ashoka Chakra Spoke Ring */}
                <circle cx="50" cy="50" r="30" stroke="#134074" strokeWidth="1" opacity="0.3" />
                {/* Building / Temple / Administrative block */}
                <path d="M35 60 L65 60 L65 65 L35 65 Z" fill="#0A2540" />
                <rect x="38" y="44" width="24" height="16" fill="#134074" />
                <path d="M35 44 L65 44 L50 32 Z" fill="#FF9933" />
                {/* Pillars */}
                <rect x="42" y="48" width="3" height="12" fill="#FFFFFF" />
                <rect x="49" y="48" width="3" height="12" fill="#FFFFFF" />
                <rect x="56" y="48" width="3" height="12" fill="#FFFFFF" />
                {/* Saffron and Green Flags */}
                <path d="M50 32 L50 20 L57 24 Z" fill="#FF9933" />
                <path d="M35 60 C 45 56, 55 56, 65 60" stroke="#2E7D32" strokeWidth="2.5" fill="none" />
                {/* Text Rings */}
                <path id="curve" d="M 15 50 A 35 35 0 0 1 85 50" fill="none" />
                <path id="curve2" d="M 85 50 A 35 35 0 0 1 15 50" fill="none" />
              </svg>
            </div>

            <div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <span className="text-xs bg-gov-saffron/10 text-gov-saffron px-2 py-0.5 rounded-full font-bold border border-gov-saffron/20 uppercase tracking-wider">
                  Uttar Pradesh Government
                </span>
              </div>
              <h1 className="text-xl md:text-2xl font-extrabold text-gov-blue-dark tracking-tight leading-tight mt-1 font-serif">
                नगर पंचायत, अमीनगर सराय , बागपत 
              </h1>
              <p className="text-sm font-semibold text-gov-blue-medium uppercase tracking-wider font-sans">
                 Town Panchayat, Aminagar Sarai , Baghpat 
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-1.5 mt-0.5 text-xs text-slate-500 font-medium">
                <span>Baghpat, Uttar Pradesh, India</span>
                <span className="text-slate-300">•</span>
                <span className="text-gov-saffron font-semibold italic">"स्वच्छ बागपत, सुंदर बागपत"</span>
              </div>
            </div>
          </div>

          {/* Right Side: Emergency Helpline and Quick Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            {/* Emergency Helpline Card */}
            <Link
              href="tel:18001804040"
              className="flex items-center gap-3 bg-red-50 hover:bg-red-100 border border-red-200 rounded-xl p-3 w-full sm:w-auto transition-all shadow-sm group"
            >
              <div className="bg-red-500 text-white p-2 rounded-lg group-hover:scale-110 transition-transform animate-pulse">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-red-600 tracking-wider">
                  Emergency Helpline
                </p>
                <p className="text-sm text-font-extrabold text-slate-800">
                  1800-180-4040
                </p>
              </div>
            </Link>

            {/* Quick Actions Grid */}
            <div className="grid grid-cols-2 sm:flex items-center gap-2 w-full sm:w-auto">
              <Button
                onClick={() => setActiveModal("login")}
                className="flex items-center justify-center gap-1.5 px-3 py-2 bg-slate-100 hover:bg-gov-blue-dark hover:text-white text-gov-blue-dark text-xs font-bold rounded-lg border border-slate-200 transition-all cursor-pointer shadow-xs"
              >
                <User className="w-3.5 h-3.5" />
                <span>Citizen Login</span>
              </Button>

              <Button
                onClick={() => setActiveModal("complaint")}
                className="flex items-center justify-center gap-1.5 px-3 py-2 bg-slate-100 hover:bg-gov-saffron hover:text-white text-gov-blue-dark text-xs font-bold rounded-lg border border-slate-200 transition-all cursor-pointer shadow-xs"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Register Grievance</span>
              </Button>

              <Button
                onClick={() => setActiveModal("paytax")}
                className="flex items-center justify-center gap-1.5 px-3 py-2 bg-gov-blue-medium text-white hover:bg-gov-blue-dark text-xs font-bold rounded-lg transition-all cursor-pointer shadow-xs col-span-2 sm:col-span-1"
              >
                <CreditCard className="w-3.5 h-3.5 text-gov-saffron" />
                <span>Pay Tax Online</span>
              </Button>

              <Button
                onClick={() => setActiveModal("search")}
                className="p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-lg border border-slate-200 transition-all cursor-pointer hidden sm:block"
                aria-label="Search site"
              >
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* ================================================= */}
      {/* INTERACTIVE MOCK MODALS                           */}
      {/* ================================================= */}

      {activeModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-999 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 max-w-md w-full overflow-hidden transform scale-95 animate-scale-up">
            
            {/* Modal Header */}
            <div className="gov-gradient-blue text-white px-6 py-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-gov-saffron" />
                <h3 className="font-extrabold text-sm uppercase tracking-wide">
                  {activeModal === "login" && "Citizen Portal Login"}
                  {activeModal === "complaint" && "Public Grievance System"}
                  {activeModal === "paytax" && "Tax Payment Gateway"}
                  {activeModal === "search" && "Municipal Search Service"}
                </h3>
              </div>
              <Button
                onClick={closeModal}
                className="text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Citizen Login Form */}
              {activeModal === "login" && (
                <form onSubmit={(e) => { e.preventDefault(); alert("Logged in successfully (Simulation)!"); closeModal(); }} className="space-y-4">
                  <div>
                    <Label className="block text-xs font-bold text-slate-600 mb-1">Mobile Number / Citizen ID</Label>
                    <Input required type="text" placeholder="Enter 10-digit Mobile Number" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-gov-blue-medium" />
                  </div>
                  <div>
                    <Label className="block text-xs font-bold text-slate-600 mb-1">OTP or Password</Label>
                    <Input required type="password" placeholder="••••••" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-gov-blue-medium" />
                  </div>
                  <Button type="submit" className="w-full py-2.5 bg-gov-blue-medium hover:bg-gov-blue-dark text-white rounded-lg text-xs font-bold transition-all shadow-md">
                    Request OTP & Login
                  </Button>
                  <p className="text-[10px] text-center text-slate-400 mt-2">
                    Secured by National Informatics Centre (NIC)
                  </p>
                </form>
              )}

              {/* Register Complaint Form */}
              {activeModal === "complaint" && (
                <form onSubmit={(e) => { e.preventDefault(); alert("Grievance ticket created! Check SMS for ticket ID."); closeModal(); }} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label className="block text-xs font-bold text-slate-600 mb-1">Your Name</Label>
                      <Input required type="text" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-gov-blue-medium" />
                    </div>
                    <div>
                      <Label className="block text-xs font-bold text-slate-600 mb-1">Mobile Number</Label>
                      <Input required type="tel" placeholder="10-digit number" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-gov-blue-medium" />
                    </div>
                  </div>
                  <div>
                    <Label className="block text-xs font-bold text-slate-600 mb-1">Grievance Category</Label>
                    <Select required>
                      <SelectItem value="">-- Select Category --</SelectItem>
                      <SelectItem value="water">Water supply leakage/clogging</SelectItem>
                      <SelectItem value="sanitation">Garbage collection failure</SelectItem>
                      <SelectItem value="pothole">Road repair / Potholes</SelectItem>
                      <SelectItem value="streetlights">Street light malfunction</SelectItem>
                      <SelectItem value="other">Other Administrative queries</SelectItem>
                    </Select>
                  </div>
                  <div>
                    <Label className="block text-xs font-bold text-slate-600 mb-1">Grievance Details</Label>
                    <Textarea required rows={3} placeholder="Please describe the issue in detail" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-gov-blue-medium" />
                  </div>
                  <Button type="submit" className="w-full py-2.5 bg-gov-saffron hover:bg-gov-saffron-dark text-white rounded-lg text-xs font-bold transition-all shadow-md">
                    Submit Grievance
                  </Button>
                </form>
              )}

              {/* Pay Tax Gateway */}
              {activeModal === "paytax" && (
                <form onSubmit={(e) => { e.preventDefault(); alert("Redirecting to secured State Treasury gateway..."); closeModal(); }} className="space-y-4">
                  <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 text-amber-800 p-2.5 rounded-lg text-[11px] font-medium mb-3">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>Please enter your unique Assessment Number. Default rebate of 10% is active for online payments.</span>
                  </div>
                  <div>
                    <Label className="block text-xs font-bold text-slate-600 mb-1">Service Type</Label>
                    <Select required>
                      <SelectItem value="property">Property / House Tax</SelectItem>
                      <SelectItem value="water">Water Tax</SelectItem>
                      <SelectItem value="sewer">Sewerage Fee</SelectItem>
                      <SelectItem value="trade">Trade License Fee</SelectItem>
                    </Select>
                  </div>
                  <div>
                    <Label className="block text-xs font-bold text-slate-600 mb-1">Unique Property ID / Assessment ID</Label>
                    <Input required type="text" placeholder="e.g. BPT-PROP-XXXXX" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-gov-blue-medium uppercase" />
                  </div>
                  <Button type="submit" className="w-full py-2.5 bg-gov-blue-dark hover:bg-slate-900 text-white rounded-lg text-xs font-bold transition-all shadow-md flex justify-center items-center gap-2">
                    <CreditCard className="w-4 h-4 text-gov-saffron" />
                    <span>Fetch Details & Pay</span>
                  </Button>
                </form>
              )}

              {/* Search Modals */}
              {activeModal === "search" && (
                <form onSubmit={handleSearchSubmit} className="space-y-4">
                  <div>
                    <Label className="block text-xs font-bold text-slate-600 mb-1">Search Keywords</Label>
                    <div className="flex gap-2">
                      <Input
                        required
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search circulars, tenders, birth cert..."
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-gov-blue-medium"
                      />
                      <Button type="submit" className="p-2.5 bg-gov-blue-medium text-white hover:bg-gov-blue-dark rounded-lg transition-colors cursor-pointer">
                        <Search className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
