'use client';

import { Button } from '@/components/ui/button';
import { m } from 'framer-motion';
import { Award, Calendar, Eye, Quote, Target } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

type TabType = 'welcome' | 'vision' | 'mission';

interface OfficerRowProps {
  id: string;
  roleTitle: string;
  designation: string;
  name: string;
  subText: string;
  imgSrc: string;
  term: string;
  status: string;
  welcomeQuote: string;
  welcomeText1: string;
  welcomeText2: string;
  visionTitle: string;
  visionDesc: string;
  visionPoints: string[];
  missionDesc: string;
  missionTargets: { title: string; desc: string }[];
}

// Separate reusable component for each officer to keep code clean and manageable
function OfficerRow({ data }: { data: OfficerRowProps }) {
  const [activeTab, setActiveTab] = useState<TabType>('welcome');

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-slate-200/60 pb-16 last:border-0 last:pb-0">
      {/* Left Column: Official Profile Card */}
      <div className="lg:col-span-4 flex flex-col items-center w-full">
        <m.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white p-4 rounded-2xl border border-slate-100 shadow-lg text-center w-full max-w-xs relative group"
        >
          {/* Tagline Overlay */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gov-blue-dark text-white text-[9px] font-black uppercase px-3 py-1 rounded-full border border-slate-700 tracking-wider shadow-sm z-10 whitespace-nowrap">
            {data.roleTitle}
          </div>

          {/* Portrait Frame */}
          <div className="relative aspect-square w-full rounded-xl overflow-hidden mb-4 bg-slate-100 border border-slate-200">
            <Image
              src={data.imgSrc}
              alt={`${data.designation} of Baghpat Nagar Palika Parishad`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 320px"
            />
          </div>

          {/* Name Details */}
          <h3 className="text-lg font-black text-gov-blue-dark tracking-tight leading-tight">{data.name}</h3>
          <p className="text-xs font-bold text-gov-saffron uppercase tracking-widest mt-1">{data.designation}</p>
          <p className="text-[10px] text-slate-400 font-semibold mt-0.5">{data.subText}</p>

          {/* Quick stats / terms */}
          <div className="mt-4 pt-4 border-t border-slate-50 grid grid-cols-2 gap-2 text-left">
            <div className="bg-slate-50 p-2 rounded-lg text-center">
              <span className="text-[9px] text-slate-400 font-bold block">TERM / STATUS</span>
              <span className="text-xs font-extrabold text-gov-blue-dark block truncate">{data.term}</span>
            </div>
            <div className="bg-slate-50 p-2 rounded-lg text-center">
              <span className="text-[9px] text-slate-400 font-bold block">RESPONSIBILITY</span>
              <span className="text-xs font-extrabold text-gov-blue-dark block truncate">{data.status}</span>
            </div>
          </div>
        </m.div>
      </div>

      {/* Right Column: Dynamic Info Sheet */}
      <div className="lg:col-span-8 w-full">
        <div className="bg-white rounded-2xl border border-slate-100 shadow-lg p-6 md:p-8 min-h-95 flex flex-col justify-between">
          {/* Tab Selector Header */}
          <div className="flex border-b border-slate-100 pb-3 gap-2">
            <Button
              onClick={() => setActiveTab('welcome')}
              className={`flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                activeTab === 'welcome' ? 'bg-gov-blue-medium text-white shadow-xs' : 'text-slate-500 hover:bg-slate-50'
              }`}
            >
              <Quote className="w-3.5 h-3.5" />
              <span>Welcome Message</span>
            </Button>
            <Button
              onClick={() => setActiveTab('vision')}
              className={`flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                activeTab === 'vision' ? 'bg-gov-blue-medium text-white shadow-xs' : 'text-slate-500 hover:bg-slate-50'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Our Vision</span>
            </Button>
            <Button
              onClick={() => setActiveTab('mission')}
              className={`flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                activeTab === 'mission' ? 'bg-gov-blue-medium text-white shadow-xs' : 'text-slate-500 hover:bg-slate-50'
              }`}
            >
              <Target className="w-3.5 h-3.5" />
              <span>Our Mission</span>
            </Button>
          </div>

          {/* Dynamic tab contents */}
          <div className="py-6 flex-1">
            {activeTab === 'welcome' && (
              <m.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                <div className="flex items-start gap-3">
                  <Quote className="w-10 h-10 text-gov-saffron/20 shrink-0 rotate-180" />
                  <div>
                    <p className="text-sm font-bold text-slate-800 italic leading-relaxed">"{data.welcomeQuote}"</p>
                  </div>
                </div>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">{data.welcomeText1}</p>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">{data.welcomeText2}</p>
              </m.div>
            )}

            {activeTab === 'vision' && (
              <m.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                <div className="flex items-center gap-2 text-gov-blue-dark">
                  <Eye className="w-5 h-5 text-gov-saffron" />
                  <h4 className="text-sm font-bold uppercase tracking-wide">{data.visionTitle}</h4>
                </div>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">{data.visionDesc}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                  {data.visionPoints.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-slate-600 font-bold">
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
                <p className="text-xs text-slate-500 font-medium leading-relaxed">{data.missionDesc}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
                  {data.missionTargets.map((item) => (
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
              <p className="text-gov-blue-dark">Town Panchayat , Aminagar Sarai , Baghpat </p>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-0.5">
                Government Registry Approved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AboutUs() {
  // Data for all three members in order: Chairman -> Executive Officer -> Head Clerk
  const leadersData: OfficerRowProps[] = [
    {
      id: 'chairman',
      roleTitle: 'Elected President',
      designation: 'Chairman',
      name: 'Smt. Shashi Bala',
      subText: 'Town Panchayat, Aminagar Sarai, Baghpat',
      imgSrc: '/chairman.png',
      term: '2023 - Present',
      status: '11 Wards Admin',
      welcomeQuote:
        'Dear citizens of Baghpat, we are dedicated to transforming our historic municipality into a benchmark of modern urban governance.',
      welcomeText1:
        'Our vision is built around providing clean, automated, and hassle-free civic infrastructure. With the introduction of our unified digital desk, we want every citizen to obtain birth certificates, submit building layouts, and pay municipal taxes from their phones.',
      welcomeText2:
        'We urge all residents to active participate in the Swachh Bharat campaigns. A clean town promotes healthy families. Together, we can make Baghpat Nagar Palika Parishad an exemplary smart town in Western Uttar Pradesh.',
      visionTitle: 'Vision 2030 Roadmap',
      visionDesc:
        'Baghpat Nagar Palika aims to establish a carbon-neutral administrative structure by optimizing water conservation, solid waste segregation, and maximizing public solar infrastructures.',
      visionPoints: [
        '100% Door-to-Door dry-wet waste segregation',
        'Fully digitized property registration and GIS mapping',
        'High speed Wi-Fi nodes in main marketplaces',
        'Reconstruction of eco-friendly community parks',
      ],
      missionDesc:
        'Our immediate mission is to construct responsive municipal desks that solve problems efficiently. We have benchmarked our services to resolve civic complaints under 72 hours.',
      missionTargets: [
        { title: 'Clean Water', desc: 'Clean tap supply to every household by 2027.' },
        { title: 'Smart Streetlights', desc: 'Automatic LED nodes in all 25 wards.' },
        { title: 'Smooth Roadways', desc: 'No pothole policy with concrete repairs.' },
      ],
    },
    {
      id: 'eo',
      roleTitle: 'Administrative Head',
      designation: 'Executive Officer (EO)',
      name: 'Shri. Manoj Kumar',
      subText: 'State Urban Administrative Service',
      imgSrc: '/chairman.png',
      term: 'Govt. Appointed',
      status: 'Executive Chief',
      welcomeQuote:
        'Ensuring transparency, accountability, and execution of government welfare schemes with maximum efficiency is our top priority.',
      welcomeText1:
        'The administration is focused on executing policies smoothly. We are transforming manual record-keeping into a robust digital framework to minimize delays and eliminate bureaucracy.',
      welcomeText2:
        'Every municipal fund is being streamlined for optimal development. Our officers are working round-the-clock on the ground to monitor sanitation and civil constructions.',
      visionTitle: 'Administrative Excellence',
      visionDesc:
        'To create an agile, paperless municipal administration that serves as a single-window clearance portal for citizens and commercial stakeholders.',
      visionPoints: [
        '100% Digital file tracking (e-Office systems)',
        'Time-bound citizen service delivery assurance',
        'Real-time monitoring of municipal projects',
        'Strict financial audits & revenue optimization',
      ],
      missionDesc:
        'To strictly implement urban development blueprints, maximize revenue collection fairly, and ensure seamless coordination between public representatives and executives.',
      missionTargets: [
        { title: 'E-Governance', desc: 'Complete integration of e-Nagarpalika services.' },
        { title: 'Fund Utilization', desc: '105% transparent and timely budget utilization.' },
        { title: 'Grievance Redressal', desc: 'Fixing administrative loopholes via automated portals.' },
      ],
    },
    {
      id: 'head-clerk',
      roleTitle: 'Office Superintendent',
      designation: 'Head Clerk',
      name: 'Shri. Rajesh Sharma',
      subText: 'Central Registry & Accounts',
      imgSrc: '/chairman.png',
      term: 'Senior Administration',
      status: 'Registry In-Charge',
      welcomeQuote:
        'We act as the core backbone of Town Panchayat daily operations, documenting data and ensuring proper verification of all public registries.',
      welcomeText1:
        'From birth certificates to commercial licensing permissions, our clerical desk ensures all paperwork adheres strictly to state regulations, leaving zero room for errors.',
      welcomeText2:
        'We are committed to helping citizens who visit the town hall. Our desk-level staff is being upskilled regularly to behave courteously and fast-track your applications.',
      visionTitle: 'Flawless Record Governance',
      visionDesc:
        'To migrate decades of old physical public registries into fully accessible, secure cloud databases with zero data loss or discrepancies.',
      visionPoints: [
        'Digitization of 50+ years of legacy archives',
        'Streamlined verification system for quick approvals',
        'Zero-window delay for verified applications',
        'Enhanced physical helpdesks inside the Town Hall',
      ],
      missionDesc:
        'Our daily objective is to maintain error-free record keeping, process citizen applications without internal delay, and manage internal municipal workflows.',
      missionTargets: [
        { title: 'Certificates Fast-Track', desc: 'Birth/Death records dispatch under 48 hours.' },
        { title: 'Helpdesk Support', desc: 'Dedicated offline guidance for senior citizens.' },
        { title: 'Data Security', desc: 'Secure cryptographic protection of land & tax records.' },
      ],
    },
  ];

  return (
    <section id="about-us" className="py-20 px-4 md:px-8 bg-slate-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-gov-saffron/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-gov-blue-medium/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs bg-gov-saffron/10 text-gov-saffron px-3 py-1 rounded-full font-bold uppercase tracking-wider border border-gov-saffron/20">
            Leadership & Administration
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gov-blue-dark tracking-tight mt-3 font-serif">
            Desk of the Chairman & Administration
          </h2>
          <p className="text-sm text-slate-500 mt-2 font-medium">
            Welcome to the official administrative portal of Baghpat Nagar Palika Parishad.
          </p>
          <div className="w-20 h-1 bg-gov-saffron mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Vertical List Layout - One after another */}
        <div className="space-y-16">
          {leadersData.map((leader) => (
            <OfficerRow key={leader.id} data={leader} />
          ))}
        </div>
      </div>
    </section>
  );
}
