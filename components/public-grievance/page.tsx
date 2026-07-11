'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { AnimatePresence, m } from 'framer-motion';
import { AlertCircle, FileCheck, Send, ShieldAlert } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

export default function PublicGrievance() {
  const [submitted, setSubmitted] = useState(false);
  const [complaintId, setComplaintId] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    ward: '',
    details: '',
    address: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setComplaintId(`BPT-GRV-${Math.floor(100000 + Math.random() * 900000)}`);
    setSubmitted(true);
  };

  const scrollToForm = () => {
    const element = document.getElementById('grievance-form-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Page Header */}
        <div className="text-center space-y-3">
          <span className="text-xs bg-gov-saffron/10 text-gov-saffron px-3 py-1 rounded-full font-bold uppercase tracking-wider border border-gov-saffron/20">
            Citizen Grievance Portal
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-gov-blue-dark tracking-tight font-serif text-center">
            Public Grievance Redressal System
          </h1>
          <p className="text-sm md:text-base text-slate-500 font-medium max-w-2xl mx-auto">
            A responsive, transparent and citizen-first mechanism to resolve public concerns effectively.
          </p>
          <div className="w-24 h-1.5 bg-gov-saffron mx-auto rounded-full"></div>
        </div>

        {/* Info Grid (Inspired by Image 1) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Text Card */}
          <m.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl border border-slate-100 shadow-xl p-8 md:p-10 flex flex-col justify-between items-start space-y-6 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-gov-blue-medium"></div>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gov-blue-dark tracking-tight leading-tight font-serif">
                Your Voice Matters, And We Act On It
              </h2>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-semibold">
                Baghpat Nagar Palika Parishad is committed to delivering a responsive and responsible grievance
                redressal ecosystem. Citizens are encouraged to report issues related to sanitation, water supply,
                drainage, street lighting, road maintenance, garbage collection, stray animals, illegal encroachments,
                property tax disputes, and any civic discomfort affecting daily life.
              </p>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-medium">
                Each grievance registered is tracked through a structured monitoring system ensuring timely resolution
                by the concerned department. Our aim is to strengthen public trust by promoting accountability,
                transparency, and efficient service delivery.
              </p>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-medium">
                Click the button below to submit your grievance. Your participation helps us build a cleaner, safer, and
                more citizen-friendly Baghpat.
              </p>
            </div>

            <Button
              onClick={scrollToForm}
              className="px-6 py-3 bg-gov-blue-medium hover:bg-gov-blue-dark text-white font-bold rounded-xl text-xs md:text-sm uppercase tracking-wider transition-all shadow-lg hover:scale-102 cursor-pointer"
            >
              Submit Your Grievance
            </Button>
          </m.div>

          {/* Right Visual Image Card */}
          <m.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl overflow-hidden shadow-xl border border-slate-100 relative group min-h-87.5 lg:min-h-auto bg-slate-900"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Image
              src="/grievance.png"
              width={500}
              height={500}
              alt="Grievance Jigsaw visual"
              className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-103"
            />

            {/* Dark Gradient bottom layer */}
            <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent"></div>

            {/* Bottom Left Badge Info */}
            <div className="absolute bottom-6 left-6 text-white space-y-1">
              <h3 className="text-lg md:text-xl font-black tracking-tight leading-none text-gov-saffron">
                Grievance Redressal Portal
              </h3>
              <p className="text-xs text-slate-300 font-bold uppercase tracking-wider">
                Quick. Transparent. Citizen-Centric.
              </p>
            </div>
          </m.div>
        </div>

        {/* Grievance Form Section */}
        <div
          id="grievance-form-section"
          className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden"
        >
          <div className="gov-gradient-blue text-white px-8 py-5 flex items-center gap-3">
            <ShieldAlert className="w-6 h-6 text-gov-saffron" />
            <div>
              <h2 className="text-base font-extrabold uppercase tracking-wider">Grievance Submission Form</h2>
              <p className="text-[10px] text-slate-300 font-bold">
                Please fill in correct details. False complaints are subject to legal checks.
              </p>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <AnimatePresence mode="wait">
              {submitted ? (
                <m.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-12 flex flex-col items-center justify-center text-center space-y-4 max-w-md mx-auto"
                >
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center border border-emerald-100 shadow-inner">
                    <FileCheck className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-800">Grievance Registered Successfully</h3>
                  <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                    Thank you, <span className="text-gov-blue-dark font-black">{formData.name}</span>. Your complaint is
                    submitted. Your Tracking Code is:
                  </p>
                  <span className="px-5 py-2.5 bg-slate-100 border border-slate-200 rounded-xl font-mono text-sm font-black text-gov-blue-dark block tracking-widest uppercase">
                    {complaintId}
                  </span>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    An SMS confirmation has been sent to +91-{formData.phone}.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition-colors cursor-pointer"
                  >
                    Register Another Grievance
                  </Button>
                </m.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <Label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">
                        Your Full Name
                      </Label>
                      <Input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-xs focus:outline-gov-blue-medium font-semibold"
                      />
                    </div>
                    <div>
                      <Label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Mobile Number</Label>
                      <Input
                        required
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="10-digit mobile number"
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-xs focus:outline-gov-blue-medium font-semibold"
                      />
                    </div>
                    <div>
                      <Label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Email Address</Label>
                      <Input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Rahul.sharma@domain.com"
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-xs focus:outline-gov-blue-medium font-semibold"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">
                        Complaint Category
                      </Label>
                      <Select
                        required
                        name="category"
                        value={formData.category}
                        onValueChange={(value) => setFormData({ ...formData, category: value as string })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select Category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Sanitation">Garbage Dumping</SelectItem>
                          <SelectItem value="Water Supply">Water Supply </SelectItem>
                          <SelectItem value="Roads"> Damaged Roadways</SelectItem>
                          <SelectItem value="Streetlights">Street Lights Malfunction</SelectItem>
                          <SelectItem value="Encroachments">Illegal Encroachment</SelectItem>
                          <SelectItem value="Encroachments">Pipeline Leakage</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">
                        Select Municipal Ward
                      </Label>
                      <Select
                        required
                        name="ward"
                        value={formData.ward}
                        onValueChange={(value) => setFormData({ ...formData, ward: value as string })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select Ward" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 11 }, (_, i) => (
                            <SelectItem key={i + 1} value={`Ward ${i + 1}`}>
                              Ward No. {i + 1}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">
                      Incident Landmark / Address
                    </Label>
                    <Input
                      required
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="e.g. Near Hanuman Temple, Railway Road"
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-xs focus:outline-gov-blue-medium font-semibold"
                    />
                  </div>

                  <div>
                    <Label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">
                      Detailed Description of Grievance
                    </Label>
                    <Textarea
                      required
                      name="details"
                      value={formData.details}
                      onChange={handleInputChange}
                      rows={5}
                      placeholder="Please explain the issue and specific location coordinates if possible"
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-xs focus:outline-gov-blue-medium font-semibold"
                    />
                  </div>

                  <div className="flex items-center gap-2.5 bg-amber-50 border border-amber-200 p-4 rounded-xl text-xs font-semibold text-amber-800">
                    <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
                    <span>
                      Before submitting, please review all inputs. Reference tickets are logged directly into the Chief
                      Officer's dashboard for verification audits.
                    </span>
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                    <Button
                      type="button"
                      onClick={() =>
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          category: '',
                          ward: '',
                          details: '',
                          address: '',
                        })
                      }
                      className="px-5 py-2.5 border border-slate-200 text-slate-500 hover:bg-slate-50 text-xs font-bold rounded-xl cursor-pointer"
                    >
                      Clear Fields
                    </Button>
                    <Button
                      type="submit"
                      className="flex items-center gap-1.5 px-6 py-2.5 bg-gov-saffron hover:bg-gov-saffron-dark text-white text-xs font-bold rounded-xl shadow-md transition-colors cursor-pointer hover:scale-102"
                    >
                      <span>Submit Official Grievance</span>
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
