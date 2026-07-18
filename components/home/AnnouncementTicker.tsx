'use client';

import { ArrowUpRight, Megaphone } from 'lucide-react';

export default function AnnouncementTicker() {
  const notices = [
    {
      id: 'property-tax',
      text: 'Property Tax Notice: Pay before 31st July to claim a 10% early-bird rebate on assessments.',
      link: '#citizen-services',
    },
    {
      id: 'water-tax',
      text: 'Water Tax Notice: Unified portal is open for water tax payment & billing discrepancy corrections.',
      link: '#citizen-services',
    },
    {
      id: 'recruitment',
      text: 'Recruitment Notice: Applications open for administrative consultants & sanitary inspectors.',
      link: '#news-notices',
    },
    {
      id: 'public-meeting',
      text: 'Public Meeting Notice: Ward coordination and development project audit scheduled at the Town Hall.',
      link: '#news-notices',
    },
    {
      id: 'tender',
      text: 'Tender Notice: Bidding open for smart solar street light procurement & village installation.',
      link: '#news-notices',
    },
  ];

  return (
    <div className="bg-red-700 text-white flex flex-col md:flex-row items-stretch border-y border-red-800 shadow-sm relative z-30 overflow-hidden">
      
      {/* Title Segment */}
      <div className="bg-gov-blue-dark px-6 py-3 flex items-center gap-2 font-black uppercase tracking-wider text-xs md:text-sm md:skew-x-12 md:-ml-3 relative z-10 shrink-0 select-none border-r border-red-800 md:border-r-0">
        <div className="md:-skew-x-12 flex items-center gap-2">
          <Megaphone className="w-4 h-4 text-gov-saffron animate-bounce" />
          <span>Announcements</span>
          <span className="text-[10px] text-gov-saffron/90 hidden sm:inline ml-1 font-serif">/ नवीनतम सूचनाएं</span>
        </div>
      </div>

      {/* Marquee Content */}
      <div className="relative flex items-center overflow-hidden flex-1 py-2.5 md:py-0">
      
        {/* Infinite scrolling text */}
        {/* 🛠️ Added inline style to globally slow down the marquee animation seamlessly */}
        <div 
          className="flex animate-marquee whitespace-nowrap gap-16 items-center hover:paused cursor-pointer"
          style={{ animationDuration: '60s' }} 
        >
          {/* First iteration */}
          {notices.map((notice) => (
            <a
              key={notice.id}
              href={notice.link}
              className="flex items-center gap-1.5 text-xs font-bold hover:text-gov-saffron transition-colors"
            >
              <span className="inline-block w-2 h-2 bg-gov-saffron rounded-full"></span>
              <span>{notice.text}</span>
              <ArrowUpRight className="w-3 h-3 text-slate-400 shrink-0" />
            </a>
          ))}

          {/* Second iteration (for seamless looping) */}
          {notices.map((notice) => (
            <a
              key={`${notice.id}-dup`}
              href={notice.link}
              className="flex items-center gap-1.5 text-xs font-bold hover:text-gov-saffron transition-colors"
            >
              <span className="inline-block w-2 h-2 bg-gov-saffron rounded-full"></span>
              <span>{notice.text}</span>
              <ArrowUpRight className="w-3 h-3 text-slate-400 shrink-0" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
