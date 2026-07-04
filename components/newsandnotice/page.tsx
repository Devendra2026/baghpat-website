'use client';

import { m } from 'framer-motion';
import { ArrowRight, Bell, Calendar, FileDown, Newspaper } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface NewsItem {
  title: string;
  titleHi: string;
  date: string;
  category: string;
  summary: string;
  image: string;
}

interface NoticeItem {
  title: string;
  refNo: string;
  date: string;
  size: string;
  isUrgent?: boolean;
}

export default function NewsAndNotice() {
  const [activeNewsTab, setActiveNewsTab] = useState<'all' | 'press' | 'announcements'>('all');

  const newsList: NewsItem[] = [
    {
      title: 'Baghpat Awarded High Cleanliness Rating in Zonal Audits',
      titleHi: 'बागपत को स्वच्छ सर्वेक्षण में मिला उच्च स्थान',
      date: 'June 20, 2026',
      category: 'Awards',
      summary:
        'Under the Swachh Bharat Mission (U), Baghpat municipal administration received special appreciation for implementing daily wet-waste composting.',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&auto=format&fit=crop&q=60',
    },
    {
      title: 'Self-Assessment Property Tax Portal Declared Live',
      titleHi: 'स्व-मूल्यांकन संपत्ति कर पोर्टल हुआ लाइव',
      date: 'June 15, 2026',
      category: 'Citizen Services',
      summary:
        'Citizens can now map their plots, compute their rebates, and print official receipts through the unified UP State payment gateway.',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&auto=format&fit=crop&q=60',
    },
    {
      title: 'Solar Grid Installation Completed on Main Town Hall Building',
      titleHi: 'टाउन हॉल भवन पर सौर ग्रिड स्थापना पूरी हुई',
      date: 'June 10, 2026',
      category: 'Green Initiatives',
      summary:
        'In accordance with State Net-Zero goals, a 50kW solar panel canopy has been integrated, reducing municipal utility costs by 40%.',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&auto=format&fit=crop&q=60',
    },
  ];

  const noticesList: NoticeItem[] = [
    {
      title: 'Tender Ref BPT-NIT-2026-044: Reconstruction of Ward 14 CC Roads and drainage channels.',
      refNo: 'BPT-NIT-2026-044',
      date: 'June 21, 2026',
      size: '420 KB',
      isUrgent: true,
    },
    {
      title: 'Public Circular: Regulation and guidelines on plastic ban compliance audits in local markets.',
      refNo: 'BPT-CIRC-2026-012',
      date: 'June 18, 2026',
      size: '280 KB',
      isUrgent: false,
    },
    {
      title: 'Recruitment: Final merit selection list for Junior Sanitary Inspectors and Supervisors.',
      refNo: 'BPT-REC-2026-009',
      date: 'June 14, 2026',
      size: '1.2 MB',
      isUrgent: true,
    },
    {
      title: 'Corrigendum 1: Time extension for bidding on procurement of LED Smart Street Lights.',
      refNo: 'BPT-TEND-2026-039-C1',
      date: 'June 12, 2026',
      size: '180 KB',
      isUrgent: false,
    },
    {
      title: 'Water Supply Notice: Alteration in supply hours for Wards 1 to 8 during pipe maintenance.',
      refNo: 'BPT-PUB-2026-077',
      date: 'June 08, 2026',
      size: '240 KB',
      isUrgent: false,
    },
  ];

  const handleDownloadNotice = (notice: NoticeItem) => {
    const content = `
=========================================
BAGHPAT NAGAR PALIKA PARISHAD
OFFICIAL MUNICIPAL NOTIFICATION
=========================================
Reference Code: ${notice.refNo}
Date of Release: ${notice.date}
Subject: ${notice.title}
Status: OFFICIAL CIRCULAR
File size reference: ${notice.size}

This notice has been published by the orders of the Executive Officer 
and the Chairman of Baghpat Nagar Palika Parishad, Uttar Pradesh.

For official verification, contact the administrative office at:
Town Hall, Baghpat, Uttar Pradesh, India - 250609.
Email: info@baghpatnagarpalika.in
=========================================
Generated online via the Unified Baghpat Portal.
    `;

    // Create text file blob simulating a PDF download
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${notice.refNo.toLowerCase()}_notice.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="news-notices" className="py-20 px-4 md:px-8 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* LEFT COLUMN: Latest News (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2">
                <Newspaper className="w-5 h-5 text-gov-saffron" />
                <h2 className="text-2xl font-extrabold text-gov-blue-dark tracking-tight font-serif">
                  Latest Municipal News
                </h2>
              </div>
              <button className="text-xs font-bold text-gov-blue-medium hover:text-gov-saffron flex items-center gap-1 transition-colors">
                <span>View All News</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* News Cards Stack */}
            <div className="space-y-6">
              {newsList.map((news, idx) => (
                <m.div
                  key={news.title}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  className="bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all flex flex-col sm:flex-row gap-4 p-4 group"
                >
                  {/* Styled Image Frame */}
                  <div className="w-full sm:w-40 h-32 rounded-xl overflow-hidden shrink-0 relative bg-slate-200">
                    <Image
                      src={news.image}
                      alt={news.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, 160px"
                    />
                    <span className="absolute top-2 left-2 bg-gov-blue-dark text-[9px] font-bold text-white px-2 py-0.5 rounded-full border border-slate-700 uppercase">
                      {news.category}
                    </span>
                  </div>

                  {/* Contents */}
                  <div className="flex flex-col justify-between py-1 flex-1">
                    <div>
                      <div className="flex items-center gap-2 text-[10px] text-slate-400 font-bold">
                        <Calendar className="w-3.5 h-3.5 text-gov-saffron" />
                        <span>{news.date}</span>
                      </div>
                      <h3 className="text-sm font-extrabold text-gov-blue-dark mt-1.5 leading-snug group-hover:text-gov-blue-medium transition-colors">
                        {news.title}
                      </h3>
                      <p className="text-[10px] text-gov-saffron font-serif font-semibold mt-0.5">{news.titleHi}</p>
                      <p className="text-xs text-slate-500 font-medium mt-2 line-clamp-2">{news.summary}</p>
                    </div>

                    <button
                      onClick={() => alert(`Opening Full Story: ${news.title}`)}
                      className="text-xs font-bold text-gov-blue-medium hover:text-gov-saffron mt-3 flex items-center gap-1.5 transition-colors self-start cursor-pointer"
                    >
                      <span>Read Full Story</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </m.div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Notices & Tenders (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-gov-saffron animate-swing" />
                <h2 className="text-2xl font-extrabold text-gov-blue-dark tracking-tight font-serif">
                  Tenders & Notices
                </h2>
              </div>
              <button className="text-xs font-bold text-gov-blue-medium hover:text-gov-saffron flex items-center gap-1 transition-colors">
                <span>View Board Circulars</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Circular Notices List */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 divide-y divide-slate-100">
              {noticesList.map((notice, idx) => (
                <m.div
                  key={notice.refNo}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.4 }}
                  className="py-3.5 first:pt-0 last:pb-0 flex items-start gap-3 group"
                >
                  {/* Urgent / Regular Icon */}
                  <div
                    className={`mt-0.5 p-1.5 rounded-lg shrink-0 ${
                      notice.isUrgent ? 'bg-red-50 text-red-500' : 'bg-gov-blue-light text-gov-blue-medium'
                    }`}
                  >
                    <Bell className="w-4 h-4" />
                  </div>

                  {/* Text details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 text-[9px] font-bold">
                      <span className="text-slate-400 font-mono">{notice.refNo}</span>
                      <span className="text-slate-300">•</span>
                      <span className="text-slate-400">{notice.date}</span>
                      {notice.isUrgent && (
                        <span className="bg-red-500 text-white text-[8px] px-1.5 py-0.2 rounded-full uppercase tracking-wider animate-pulse">
                          Urgent
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-bold text-slate-700 mt-1 line-clamp-2 leading-relaxed group-hover:text-gov-blue-medium transition-colors">
                      {notice.title}
                    </p>

                    {/* Action Download link */}
                    <button
                      onClick={() => handleDownloadNotice(notice)}
                      className="mt-2 text-[10px] font-bold text-gov-blue-medium hover:text-gov-saffron flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <FileDown className="w-3.5 h-3.5" />
                      <span>Download Notice Document ({notice.size})</span>
                    </button>
                  </div>
                </m.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
