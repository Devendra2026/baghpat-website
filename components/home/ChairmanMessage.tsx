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
          <h2 className="text-3xl md:text-3xl font-extrabold text-gov-blue-dark tracking-tight mt-3 font-serif">
            Desk of the Chairman & Administration
          </h2>
          <p className="text-sm text-slate-500 mt-2 font-medium">
            Welcome to the official administrative portal of Town Panchayat, Aminagar Sarai , Baghpat.
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
              {/* <div className="relative aspect-square w-full rounded-xl overflow-hidden mb-4 bg-slate-100 border border-slate-200">
                <Image
                  src="/chairman.png "
                  alt="Chairman of Baghpat Nagar Palika Parishad"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 320px"
                />
              </div> */}

              {/* Name Details */}
              <h3 className="text-lg font-black text-gov-blue-dark tracking-tight leading-tight">Smt. Sunita Malik</h3>
              <p className="text-xs font-bold text-gov-saffron uppercase tracking-widest mt-1">Chairman</p>
              <p className="text-[10px] text-slate-400 font-semibold mt-0.5">नगर पंचायत, अमीनगर सराय</p>
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
                         "अमीनगर सराय: विरासत को सहेजते, भविष्य को संवारते"
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                     'हमारा नगर पंचायत प्रशासन पूरी पारदर्शिता, ईमानदारी और जन-भागीदारी के साथ काम करने के लिए प्रतिबद्ध है। हमारी यह यात्रा आप सभी के सहयोग और विश्वास के बिना अधूरी है। हम मिलकर एक ऐसा अमीनगर सराय बनाएंगे जो न केवल स्वच्छ और हरा-भरा हो, बल्कि जहाँ हर नागरिक को सुविधाएँ और सम्मान मिले।'
                    </p>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                   'अमीनगर सराय का इतिहास और इसकी गौरवशाली पहचान—मेरठ कमिष्णरी क्षेत्र के सबसे पुराने शहर के रूप में—हम सभी निवासियों के लिए गर्व का विषय है। एक जन-प्रतिनिधि के रूप में, मेरा प्रयास रहा है कि हम न केवल अपनी समृद्ध विरासत को सुरक्षित रखें, बल्कि आधुनिक विकास के पथ पर भी उतनी ही तेजी से आगे बढ़ें।'
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
                      'हमारा विजन एक ऐसे आदर्श नगर पंचायत का निर्माण करना है जो आत्मनिर्भर, प्रगतिशील और आधुनिक हो।'
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                      {[
                         'समावेशी विकास: सभी नागरिकों को विकास की मुख्यधारा से जोड़ना।',
                         'ऐतिहासिक गौरव और आधुनिकता का संतुलन बनाए रखना।',
                         'सतत और हरित भविष्य: पर्यावरण के अनुकूल विकास मॉडल अपनाना।',
                         'आने वाली पीढ़ियों के लिए स्वच्छ और सुरक्षित वातावरण तैयार करना।',
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
                      'हमारा मिशन जमीनी स्तर पर उन सुधारों को लागू करना है जो नागरिकों के दैनिक जीवन को सरल और बेहतर बनाते हैं।',
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
                      {[
                       { title: 'बुनियादी सुविधाएँ', desc: '24/7 सुरक्षित पेयजल, सुव्यवस्थित जल निकासी और हर गली में स्ट्रीट लाइट।' },
                       { title: 'स्वच्छता एवं पर्यावरण', desc: 'वैज्ञानिकी कचरा प्रबंधन के साथ "स्वच्छ अमीनगर, हरित अमीनगर" का लक्ष्य।' },
                       { title: 'डिजिटल गवर्नेंस', desc: 'नगर पंचायत की सेवाओं को ऑनलाइन और पारदर्शी बनाकर जन-भागीदारी बढ़ाना।' }, 
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
                  <span>कार्यालय का पता: मुख्य बाजार, नगर पंचायत, अमीनगर सराय, बागपत, UP - 250606</span>
                </div>
                <div className="text-right sm:border-l sm:border-slate-200 sm:pl-4">
                  <p className="text-gov-blue-dark">नगर पंचायत, अमीनगर सराय </p>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-0.5">
                      सरकारी पंजीकरण स्वीकृत
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
