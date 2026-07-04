"use client";

import React, { useState } from "react";
import { Image as ImageIcon, X, ZoomIn, Calendar, Tag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryItem {
  id: number;
  title: string;
  titleHi: string;
  category: "Development" | "Cleanliness" | "Events";
  date: string;
  imageUrl: string;
  desc: string;
}

export default function GalleryPage() {
  const [filter, setFilter] = useState<"All" | "Development" | "Cleanliness" | "Events">("All");
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "GIS Mapping and Plot Surveys in Ward 4",
      titleHi: "वार्ड ४ में जीआईएस मैपिंग कार्य",
      category: "Development",
      date: "June 18, 2026",
      imageUrl: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?w=800&auto=format&fit=crop&q=80",
      desc: "Engineering team conducting topographic surveys and building coordinates mapping for the new master town plan draft.",
    },
    {
      id: 2,
      title: "Cleanliness Campaign at Baghpat Railway Road",
      titleHi: "रेलवे मार्ग पर विशेष स्वच्छता अभियान",
      category: "Cleanliness",
      date: "June 15, 2026",
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=80",
      desc: "Sanitation workers and resident volunteers executing door-to-door waste separation and public street sweeping audits.",
    },
    {
      id: 3,
      title: "Swachhta Pakhwada Awareness Seminar at Town Hall",
      titleHi: "टाउन हॉल में स्वच्छता संगोष्ठी",
      category: "Events",
      date: "June 12, 2026",
      imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80",
      desc: "Baghpat schools and local ward councils participating in awareness workshops concerning plastic-free shopping guidelines.",
    },
    {
      id: 4,
      title: "Solar Grid Canopy setup on Administrative block",
      titleHi: "प्रशासनिक भवन पर सोलर ग्रिड स्थापना",
      category: "Development",
      date: "June 05, 2026",
      imageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop&q=80",
      desc: "Commissioning of the new 50kW grid-connected solar power arrays to ensure backup electricity for public computer centers.",
    },
    {
      id: 5,
      title: "Inauguration of Organic Composting Depot",
      titleHi: "जैविक खाद डिपो का उद्घाटन",
      category: "Cleanliness",
      date: "May 28, 2026",
      imageUrl: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=800&auto=format&fit=crop&q=80",
      desc: "Opening of the bio-waste processing station converting neighborhood kitchen compost into commercial horticulture fertilizers.",
    },
    {
      id: 6,
      title: "Elected Committee Planning and Ward Audit Assembly",
      titleHi: "निर्वाचित समिति विकास बैठक",
      category: "Events",
      date: "May 20, 2026",
      imageUrl: "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&auto=format&fit=crop&q=80",
      desc: "Quarterly ward assembly chaired by Smt. Shashi Bala evaluating road construction targets and sewerage allocation approvals.",
    },
  ];

  const filteredItems = filter === "All" ? galleryItems : galleryItems.filter(item => item.category === filter);

  return (
    <div className="bg-slate-50 min-h-screen py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Page Title */}
        <div className="text-center space-y-3">
          <span className="text-xs bg-amber-500/10 text-amber-600 px-3 py-1 rounded-full font-bold uppercase tracking-wider border border-amber-500/20">
            Municipal Media
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight font-serif">
            Municipal Gallery
          </h1>
          <p className="text-sm md:text-base text-slate-500 font-medium max-w-2xl mx-auto">
            Visual highlights of developmental works, sanitation campaigns, and official events in Baghpat.
          </p>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 border-b border-slate-200 pb-6">
          {(["All", "Development", "Cleanliness", "Events"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-all ${
                filter === cat
                  ? "bg-blue-600 text-white shadow-md scale-102"
                  : "bg-white hover:bg-slate-100 text-slate-600 border border-slate-200"
              }`}
            >
              {cat === "Cleanliness" ? "Sanitation & Swachhta" : cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setActivePhoto(item)}
                className="bg-white rounded-3xl border border-slate-100 shadow-md hover:shadow-2xl overflow-hidden cursor-pointer group flex flex-col h-full relative"
              >
                {/* Photo frame */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Zoom Badge overlay */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <div className="bg-white/95 text-slate-900 p-3 rounded-full shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <ZoomIn className="w-5 h-5 text-amber-500" />
                    </div>
                  </div>

                  <span className="absolute top-3 left-3 bg-slate-900 text-[9px] font-black text-white px-2.5 py-1 rounded-full border border-slate-700 uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>

                {/* Card Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-bold">
                      <Calendar className="w-3.5 h-3.5 text-amber-500" />
                      <span>{item.date}</span>
                    </div>
                    <h3 className="text-xs font-black text-slate-900 mt-1 line-clamp-1 leading-snug group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[9px] text-amber-600 font-serif font-semibold">
                      {item.titleHi}
                    </p>
                    <p className="text-[11px] text-slate-400 font-medium leading-relaxed line-clamp-2 mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Lightbox Overlay Viewer */}
      <AnimatePresence>
        {activePhoto && (
          <div
            className="fixed inset-0 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 z-50"
            onClick={() => setActivePhoto(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl overflow-hidden max-w-3xl w-full shadow-2xl border border-slate-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Photo viewport */}
              <div className="relative aspect-video w-full bg-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={activePhoto.imageUrl}
                  alt={activePhoto.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Close button top right */}
                <button
                  onClick={() => setActivePhoto(null)}
                  className="absolute top-4 right-4 bg-black/60 hover:bg-amber-500 text-white p-2 rounded-full transition-colors border border-white/20"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Text Info */}
              <div className="p-6 md:p-8 space-y-3 bg-white">
                <div className="flex flex-wrap items-center gap-3 text-[10px] font-bold">
                  <div className="flex items-center gap-1 bg-blue-50 text-blue-600 px-2.5 py-0.5 rounded-full border border-blue-100">
                    <Tag className="w-3 h-3 text-amber-500" />
                    <span className="uppercase">{activePhoto.category}</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-amber-500" />
                    <span>{activePhoto.date}</span>
                  </div>
                </div>

                <h2 className="text-base md:text-lg font-black text-slate-900 leading-snug">
                  {activePhoto.title}
                </h2>
                <p className="text-xs text-amber-600 font-serif font-semibold">
                  {activePhoto.titleHi}
                </p>
                <p className="text-xs text-slate-500 font-medium leading-relaxed pt-1">
                  {activePhoto.desc}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
