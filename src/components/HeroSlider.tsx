"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, CheckCircle, ArrowRight, Activity, Sparkles, Building2, Trees } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Slide {
  id: number;
  titleHi: string;
  titleEn: string;
  description: string;
  badge: string;
  theme: string;
  icon: React.ReactNode;
  bgGradient: string;
  primaryCta: string;
  primaryHref: string;
  secondaryCta: string;
}

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
      titleHi: "स्वच्छ भारत मिशन (शहरी)",
      titleEn: "Swachh Bharat Cleanliness Drive",
      description: "Dedicated to keeping Baghpat clean, green, and open-defecation-free with efficient daily waste management, compost production, and plastic-free campaigns.",
      badge: "Swachh Survekshan 2026",
      theme: "saffron",
      icon: <Sparkles className="w-12 h-12 text-gov-saffron" />,
      bgGradient: "from-amber-600 via-amber-800 to-slate-950",
      primaryCta: "File Complaint / Register Feedback",
      primaryHref: "#citizen-services",
      secondaryCta: "View Ward Statistics",
    },
    {
      id: 2,
      titleHi: "स्मार्ट नागरिक सेवाएं एवं डिजिटल पहल",
      titleEn: "Smart City & Digital Governance",
      description: "Bringing municipal services directly to your screen. Apply for certificates, renew trade licenses, pay taxes, and monitor status updates in real-time.",
      badge: "Digital India Gateway",
      theme: "blue",
      icon: <Activity className="w-12 h-12 text-sky-400" />,
      bgGradient: "from-gov-blue-medium via-gov-blue-dark to-slate-950",
      primaryCta: "Access Digital Services",
      primaryHref: "#citizen-services",
      secondaryCta: "Download Mobile App",
    },
    {
      id: 3,
      titleHi: "नगर का सर्वांगीण बुनियादी ढांचा विकास",
      titleEn: "Urban Infrastructure Upgrades",
      description: "Constructing modern concrete roads, scientific drainage lines, public health parks, and replacing older street lights with energy-efficient Smart LEDs.",
      badge: "Development Projects",
      theme: "green",
      icon: <Building2 className="w-12 h-12 text-emerald-400" />,
      bgGradient: "from-emerald-700 via-emerald-900 to-slate-950",
      primaryCta: "Browse active tenders",
      primaryHref: "#news-notices",
      secondaryCta: "Completed Project reports",
    },
    {
      id: 4,
      titleHi: "हरित एवं स्वस्थ बागपत पर्यावरण पहल",
      titleEn: "Green & Healthy Baghpat Initiative",
      description: "Developing oxygen parks, implementing rain-water harvesting mandates, and expanding green covers along highways to enhance environmental sustainability.",
      badge: "Eco-Friendly Campaign",
      theme: "teal",
      icon: <Trees className="w-12 h-12 text-teal-400" />,
      bgGradient: "from-teal-700 via-teal-900 to-slate-950",
      primaryCta: "Register for Plantation Drive",
      primaryHref: "#contact-us",
      secondaryCta: "Environment Reports",
    },
  ];

  const handleNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <section className="relative w-full h-[650px] overflow-hidden bg-slate-950" aria-label="Municipal Projects Showcase">
      {/* Slides Container */}
      <div className="w-full h-full relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className={`absolute inset-0 w-full h-full bg-gradient-to-tr ${slides[current].bgGradient} flex items-center justify-center`}
          >
            {/* Animated Vector background shapes */}
            <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
              <svg className="absolute -left-10 -bottom-10 w-96 h-96 text-white" viewBox="0 0 100 100" fill="currentColor">
                <circle cx="50" cy="50" r="40" />
              </svg>
              <svg className="absolute -right-20 -top-20 w-[500px] h-[500px] text-white" viewBox="0 0 100 100" fill="currentColor">
                <polygon points="50,15 90,85 10,85" />
              </svg>
            </div>

            {/* Slide overlay for text legibility */}
            <div className="absolute inset-0 bg-black/45 z-1"></div>

            {/* Slide Content */}
            <div className="max-w-6xl mx-auto px-4 md:px-8 w-full relative z-10 text-white flex flex-col items-start gap-4">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-xs font-bold uppercase tracking-widest text-gov-saffron"
              >
                {slides[current].icon}
                <span>{slides[current].badge}</span>
              </motion.div>

              <motion.h2
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-2xl md:text-4xl font-extrabold tracking-tight font-serif text-amber-100"
              >
                {slides[current].titleHi}
              </motion.h2>

              <motion.h3
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-none drop-shadow-md"
              >
                {slides[current].titleEn}
              </motion.h3>

              <motion.p
                initial={{ y: 35, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="max-w-2xl text-sm md:text-base text-slate-200 font-medium leading-relaxed mt-2"
              >
                {slides[current].description}
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap items-center gap-3 mt-6"
              >
                <a
                  href={slides[current].primaryHref}
                  className="flex items-center gap-2 px-6 py-3 bg-gov-saffron hover:bg-gov-saffron-dark text-white rounded-lg text-xs md:text-sm font-bold uppercase tracking-wider transition-all shadow-lg hover:scale-102"
                >
                  <span>{slides[current].primaryCta}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#about-us"
                  className="flex items-center gap-1.5 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs md:text-sm font-bold uppercase tracking-wider border border-white/20 transition-all hover:scale-102"
                >
                  <CheckCircle className="w-4 h-4 text-gov-saffron" />
                  <span>{slides[current].secondaryCta}</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-gov-saffron text-white p-3 rounded-full hover:scale-105 border border-white/15 transition-all cursor-pointer"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-gov-saffron text-white p-3 rounded-full hover:scale-105 border border-white/15 transition-all cursor-pointer"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center items-center gap-2">
        {slides.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => setCurrent(idx)}
            className={`w-3.5 h-3.5 rounded-full border border-white/20 transition-all cursor-pointer ${
              idx === current ? "bg-gov-saffron scale-120 w-8" : "bg-white/30 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
