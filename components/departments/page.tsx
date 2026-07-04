'use client';

import { m } from 'framer-motion';
import { ArrowRight, Coins, Droplet, Hammer, HardHat, HeartPulse, Trash2 } from 'lucide-react';
import React from 'react';

interface DepartmentCard {
  name: string;
  nameHi: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
  services: string[];
}

export default function Departments() {
  const departments: DepartmentCard[] = [
    {
      name: 'Public Works Department',
      nameHi: 'लोक निर्माण विभाग',
      desc: 'Manages urban roads, bypasses, administrative buildings, storm drains, street signages, and public safety blockades.',
      icon: <HardHat className="w-8 h-8" />,
      color: 'from-amber-500 to-amber-600',
      services: ['Road Damage Reporting', 'Trenching Permissions', 'NOC for Road Cut'],
    },
    {
      name: 'Revenue Department',
      nameHi: 'राजस्व विभाग',
      desc: 'Responsible for property tax registry audits, commercial advertisement licenses, vending fees, and local tax collections.',
      icon: <Coins className="w-8 h-8" />,
      color: 'from-blue-600 to-gov-blue-dark',
      services: ['Property Tax Self-Assessment', 'Mutation of Property', 'NOC Certification'],
    },
    {
      name: 'Water Supply Department',
      nameHi: 'जल आपूर्ति विभाग',
      desc: 'Oversees drinking water pipelines, testing centers, tanker reservations, sewer connections, and pipe repair services.',
      icon: <Droplet className="w-8 h-8" />,
      color: 'from-sky-500 to-sky-600',
      services: ['New Connection Request', 'Disconnection Report', 'Water Bill Dispute'],
    },
    {
      name: 'Sanitation Department',
      nameHi: 'स्वास्थ्य एवं स्वच्छता विभाग',
      desc: 'Executes garbage door collection, solid-waste segregation, anti-larval chemical sprays, and bio-medical composting.',
      icon: <Trash2 className="w-8 h-8" />,
      color: 'from-emerald-500 to-emerald-600',
      services: ['Garbage Dump Reporting', 'Request Mosquito Spraying', 'Community Bin request'],
    },
    {
      name: 'Health Department',
      nameHi: 'लोक स्वास्थ्य विभाग',
      desc: 'Registers life records (births, deaths), manages vaccination databases, food safety hygiene checks, and community health centers.',
      icon: <HeartPulse className="w-8 h-8" />,
      color: 'from-red-500 to-red-600',
      services: ['Birth Registration', 'Death Registration', 'Food License NOC'],
    },
    {
      name: 'Engineering & Town Planning',
      nameHi: 'अभियांत्रिकी एवं नगर नियोजन',
      desc: 'Approves building layout blue-prints, regulates zoning rules, manages commercial building licenses, and inspects construction sites.',
      icon: <Hammer className="w-8 h-8" />,
      color: 'from-indigo-500 to-indigo-600',
      services: ['Building Plan Blueprint NOC', 'Encroachment Clearance', 'Zoning Regulation NOC'],
    },
  ];

  return (
    <section id="digital-gateway" className="py-20 px-4 md:px-8 bg-slate-50 relative">
      {/* Decorative backdrop elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gov-blue-light/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gov-orange-light/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs bg-gov-saffron/10 text-gov-saffron px-3 py-1 rounded-full font-bold uppercase tracking-wider border border-gov-saffron/20">
            Municipal Administration
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gov-blue-dark tracking-tight mt-3 font-serif">
            Digital Service Gateway
          </h2>
          <p className="text-sm text-slate-500 mt-2 font-medium">
            Access specific departmental portals to download applications, file reports, and track permissions directly.
          </p>
          <div className="w-20 h-1 bg-gov-saffron mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Department Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, index) => (
            <m.div
              key={dept.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl border border-slate-100 hover:border-gov-blue-medium/20 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 p-6 flex flex-col justify-between group"
            >
              <div>
                {/* Header Icon Card */}
                <div
                  className={`w-14 h-14 rounded-xl bg-linear-to-br ${dept.color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}
                >
                  {dept.icon}
                </div>

                {/* Titles */}
                <div className="mt-5">
                  <span className="text-[10px] text-gov-saffron font-bold tracking-widest uppercase block">
                    {dept.nameHi}
                  </span>
                  <h3 className="text-lg font-extrabold text-gov-blue-dark mt-0.5 tracking-tight group-hover:text-gov-blue-medium transition-colors">
                    {dept.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-500 mt-3 font-medium leading-relaxed">{dept.desc}</p>

                {/* Services Bullets List */}
                <div className="mt-4 pt-4 border-t border-slate-50 space-y-1.5">
                  <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Key Services:</p>
                  {dept.services.map((serv) => (
                    <div key={serv} className="flex items-center gap-1.5 text-xs text-slate-600 font-semibold">
                      <span className="w-1 h-1 bg-gov-saffron rounded-full shrink-0"></span>
                      <span>{serv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-slate-100/50">
                <button
                  onClick={() => alert(`Redirecting to portal page of: ${dept.name}`)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 bg-slate-50 hover:bg-gov-blue-dark hover:text-white text-gov-blue-medium text-xs font-bold rounded-xl transition-all cursor-pointer border border-slate-100 group-hover:border-transparent"
                >
                  <span>View Services Gateway</span>
                  <ArrowRight className="w-4 h-4 text-gov-saffron" />
                </button>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
