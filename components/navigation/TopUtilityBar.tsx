"use client";

import React, { useState } from "react";
import { Phone, Mail, Accessibility, Languages } from "lucide-react";

export default function TopUtilityBar() {
  const [fontSize, setFontSize] = useState("normal");

  const toggleScreenReader = () => {
    // Screen reader accessibility message helper
    if ("speechSynthesis" in window) {
      const speech = new SpeechSynthesisUtterance(
        "Screen Reader Access enabled. Welcome to Baghpat Nagar Palika Parishad Portal."
      );
      speech.rate = 1.0;
      window.speechSynthesis.speak(speech);
      alert("Screen Reader Announcement activated!");
    } else {
      alert("Text-to-speech not supported on this browser.");
    }
  };

  return (
    <div className="bg-gov-blue-dark text-slate-200 text-xs py-2 px-4 md:px-8 border-b border-gov-blue-medium flex flex-wrap justify-between items-center gap-2 relative z-50">
      {/* Left Contact Side */}
      <div className="flex items-center space-x-4">
        <a href="tel:+911212222040" className="flex items-center gap-1 hover:text-gov-saffron transition-colors">
          <Phone className="w-3.5 h-3.5 text-gov-saffron" />
          <span>+91 121-2222040</span>
        </a>
        <a href="mailto:info@baghpatnagarpalika.in" className="flex items-center gap-1 hover:text-gov-saffron transition-colors sm:flex">
          <Mail className="w-3.5 h-3.5 text-gov-saffron" />
          <span>info@baghpatnagarpalika.in</span>
        </a>
      </div>

      {/* Center Accessibility Shortcuts */}
      <div className="flex items-center space-x-4 mx-auto md:mx-0">
        <a
          href="#main-content"
          className="hover:text-gov-saffron font-medium transition-colors border-r border-slate-700 pr-3 last:border-0 focus:outline-2 focus:outline-gov-saffron"
        >
          Skip to Main Content
        </a>
        <button
          onClick={toggleScreenReader}
          className="hover:text-gov-saffron font-medium transition-colors flex items-center gap-1 focus:outline-2 focus:outline-gov-saffron cursor-pointer"
          title="Enable speech reader"
        >
          <Accessibility className="w-3.5 h-3.5" />
          <span>Screen Reader Access</span>
        </button>
        <span className="hidden lg:inline border-r border-slate-700 h-3"></span>
        <div className="hidden lg:flex items-center gap-2">
          <button 
            onClick={() => document.documentElement.style.fontSize = "14px"} 
            className="hover:text-gov-saffron font-bold px-1"
            title="Decrease text size"
          >
            A-
          </button>
          <button 
            onClick={() => document.documentElement.style.fontSize = "16px"} 
            className="hover:text-gov-saffron font-bold px-1 border-x border-slate-700"
            title="Normal text size"
          >
            A
          </button>
          <button 
            onClick={() => document.documentElement.style.fontSize = "18px"} 
            className="hover:text-gov-saffron font-bold px-1"
            title="Increase text size"
          >
            A+
          </button>
        </div>
      </div>

      {/* Right Socials & Languages */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 border-r border-slate-700 pr-3">
          {/* <a href="#" className="hover:text-gov-saffron transition-colors" aria-label="Facebook">
            <Facebook className="w-3.5 h-3.5" />
          </a>
          <a href="#" className="hover:text-gov-saffron transition-colors" aria-label="Twitter">
            <Twitter className="w-3.5 h-3.5" />
          </a>
          <a href="#" className="hover:text-gov-saffron transition-colors" aria-label="Instagram">
            <Instagram className="w-3.5 h-3.5" />
          </a>
          <a href="#" className="hover:text-gov-saffron transition-colors" aria-label="YouTube">
            <FaYoutube className="w-3.5 h-3.5" />
          </a> */}
        </div>
        {/* <button className="flex items-center gap-1 hover:text-gov-saffron font-medium transition-colors cursor-pointer">
          <Languages className="w-3.5 h-3.5 text-gov-saffron" />
          <span>English / हिंदी</span>
        </button> */}
      </div>
    </div>
  );
}
