'use client';

import { m } from 'framer-motion';
import { Award, Calendar, Eye, Quote, Target } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function ChairmanMessage() {
  const [activeTab, setActiveTab] = useState<'welcome' | 'vision' | 'mission'>('welcome');

  return (
    <section id="about-us" className="py-20 px-4 md:px-8 bg-slate-50 relative overflow-hidden">
     
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-gov-saffron/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-gov-blue-medium/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
       
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs bg-gov-saffron/10 text-gov-saffron px-3 py-1 rounded-full font-bold uppercase tracking-wider border border-gov-saffron/20">
            Leadership Message
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gov-blue-dark tracking-tight mt-3 font-serif">
            Desk of the Chairman & Administration
          </h2>
          <p className="text-sm text-slate-500 mt-2 font-medium">
            Welcome to the official administrative portal of Baghpat Nagar Palika Parishad.
          </p>
          <div className="w-20 h-1 bg-gov-saffron mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
         
          {/* Left Column: Official Profile Card */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <m.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-4 rounded-2xl border border-slate-100 shadow-lg text-center w-full max-w-xs relative group"
            >
              {/* Flag Tagline Overlay */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gov-blue-dark text-white text-[9px] font-black uppercase px-3 py-1 rounded-full border border-slate-700 tracking-wider shadow-sm z-10">
                Elected President
              </div>

              {/* Portrait Frame */}
              <div className="relative aspect-square w-full rounded-xl overflow-hidden mb-4 bg-slate-100 border border-slate-200">
                <Image
                  src="/chairman.png"
                  alt="Chairman of Baghpat Nagar Palika Parishad"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 320px"
                />
              </div>

              {/* Name Details */}
              <h3 className="text-lg font-black text-gov-blue-dark tracking-tight leading-tight">Smt. Shashi Bala</h3>
              <p className="text-xs font-bold text-gov-saffron uppercase tracking-widest mt-1">Chairman</p>
              <p className="text-[10px] text-slate-400 font-semibold mt-0.5">Baghpat Nagar Palika Parishad</p>

              {/* Quick stats / terms */}
              <div className="mt-4 pt-4 border-t border-slate-50 grid grid-cols-2 gap-2 text-left">
                <div className="bg-slate-50 p-2 rounded-lg text-center">
                  <span className="text-[9px] text-slate-400 font-bold block">TERM</span>
                  <span className="text-xs font-extrabold text-gov-blue-dark">2023 - Present</span>
                </div>
                <div className="bg-slate-50 p-2 rounded-lg text-center">
                  <span className="text-[9px] text-slate-400 font-bold block">WARD STATUS</span>
                  <span className="text-xs font-extrabold text-gov-blue-dark">25 Wards Admin</span>
                </div>
              </div>
            </m.div>
          </div>

          {/* Right Column: Dynamic Info Sheet */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-lg p-6 md:p-8 min-h-95 flex flex-col justify-between">
            
              {/* Tab Selector Header */}
              <div className="flex border-b border-slate-100 pb-3 gap-2">
                <button
                  onClick={() => setActiveTab('welcome')}
                  className={`flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                    activeTab === 'welcome'
                      ? 'bg-gov-blue-medium text-white shadow-xs'
                      : 'text-slate-500 hover:bg-slate-50'
                  }`}
                >
                  <Quote className="w-3.5 h-3.5" />
                  <span>Welcome Message</span>
                </button>
                <button
                  onClick={() => setActiveTab('vision')}
                  className={`flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                    activeTab === 'vision'
                      ? 'bg-gov-blue-medium text-white shadow-xs'
                      : 'text-slate-500 hover:bg-slate-50'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Our Vision</span>
                </button>
                <button
                  onClick={() => setActiveTab('mission')}
                  className={`flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                    activeTab === 'mission'
                      ? 'bg-gov-blue-medium text-white shadow-xs'
                      : 'text-slate-500 hover:bg-slate-50'
                  }`}
                >
                  <Target className="w-3.5 h-3.5" />
                  <span>Our Mission</span>
                </button>
              </div>

              {/* Dynamic tab contents */}
              <div className="py-6 flex-1">
                {activeTab === 'welcome' && (
                  <m.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Quote className="w-10 h-10 text-gov-saffron/20 shrink-0 rotate-180" />
                      <div>
                        <p className="text-sm font-bold text-slate-800 italic leading-relaxed">
                          "Dear citizens of Baghpat, we are dedicated to transforming our historic municipality into a
                          benchmark of modern urban governance."
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                      Our vision is built around providing clean, automated, and hassle-free civic infrastructure. With
                      the introduction of our unified digital desk, we want every citizen to obtain birth certificates,
                      submit building layouts, and pay municipal taxes from their phones.
                    </p>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                      We urge all residents to active participate in the Swachh Bharat campaigns. A clean town promotes
                      healthy families. Together, we can make Baghpat Nagar Palika Parishad an exemplary smart town in
                      Western Uttar Pradesh.
                    </p>
                  </m.div>
                )}

                {activeTab === 'vision' && (
                  <m.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                    <div className="flex items-center gap-2 text-gov-blue-dark">
                      <Eye className="w-5 h-5 text-gov-saffron" />
                      <h4 className="text-sm font-bold uppercase tracking-wide">Vision 2030 Roadmap</h4>
                    </div>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                      Baghpat Nagar Palika aims to establish a carbon-neutral administrative structure by optimizing
                      water conservation, solid waste segregation, and maximizing public solar infrastructures.
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                      {[
                        '100% Door-to-Door dry-wet waste segregation',
                        'Fully digitized property registration and GIS mapping',
                        'High speed Wi-Fi nodes in main marketplaces',
                        'Reconstruction of eco-friendly community parks',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-slate-600 font-bold">
                          <Award className="w-4 h-4 text-gov-saffron shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </m.div>
                )}

                {activeTab === 'mission' && (
                  <m.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                    <div className="flex items-center gap-2 text-gov-blue-dark">
                      <Target className="w-5 h-5 text-gov-saffron" />
                      <h4 className="text-sm font-bold uppercase tracking-wide">Actionable Targets</h4>
                    </div>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                      Our immediate mission is to construct responsive municipal desks that solve problems efficiently.
                      We have benchmarked our services to resolve civic complaints under 72 hours.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
                      {[
                        { title: 'Clean Water', desc: 'Clean tap supply to every household by 2027.' },
                        { title: 'Smart Streetlights', desc: 'Automatic LED nodes in all 25 wards.' },
                        { title: 'Smooth Roadways', desc: 'No pothole policy with concrete repairs.' },
                      ].map((item) => (
                        <div key={item.title} className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                          <h5 className="text-xs font-black text-gov-blue-medium">{item.title}</h5>
                          <p className="text-[10px] text-slate-400 mt-1">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </m.div>
                )}
              </div>

              {/* Official Seal / Signature Footer */}
              <div className="border-t border-slate-100 pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-bold text-slate-500">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gov-saffron" />
                  <span>Office Address: Main Town Hall, Baghpat, UP - 250609</span>
                </div>
                <div className="text-right sm:border-l sm:border-slate-200 sm:pl-4">
                  <p className="text-gov-blue-dark">Baghpat Nagar Palika Parishad</p>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-0.5">
                    Government Registry Approved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
