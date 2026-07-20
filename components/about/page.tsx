import React from 'react';
import Image from 'next/image';
import { Target, Eye, History } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-blue-500 selection:text-white">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        
        {/* हेडर / हीरो सेक्शन */}
        <header className="text-center bg-gradient-to-br from-blue-900 to-indigo-950 text-white rounded-3xl p-8 md:p-16 shadow-xl mb-12 md:mb-16 transform transition-all">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            नगर पंचायत , अमीनगर सराय , बागपत
          </h1>
          <p className="text-lg md:text-xl text-blue-200 font-medium">
            विरासत और विकास का संगम
          </p>
        </header>

        {/* मुख्य सामग्री: इतिहास और इमेज */}
        <main className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center mb-16">
          <section className="md:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 text-blue-900 rounded-lg">
                <History className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900 border-b-4 border-blue-600 pb-1">
                ऐतिहासिक पहचान
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-slate-600 text-justify">
              अमीनगर सराय, उत्तर प्रदेश के बागपत जिले में स्थित एक प्रमुख नगर पंचायत है। 
              ऐतिहासिक दृष्टि से, अमीनगर सराय का विशेष महत्व है; इसे मेरठ कमिश्नरी क्षेत्र का 
              सबसे पुराना शहर होने का गौरव प्राप्त है। हमारी यह ऐतिहासिक पहचान हमें एक समृद्ध 
              सांस्कृतिक विरासत से जोड़ती है, जो समय के साथ निरंतर विकास और आधुनिकता की ओर अग्रसर है।
            </p>
          </section>
          
          <section className="md:col-span-5 relative w-full h-[300px] md:h-[400px]">
  {/* ध्यान दें: src में आप अपनी असली इमेज का पाथ (जैसे '/images/aminagar.jpg') डाल सकते हैं */}
         <Image 
         src="/panchayat.png"
         alt="अमीनगर सराय विरासत"
         fill
        priority
        className="rounded-2xl object-contain shadow-2xl border-4 border-white transition-transform duration-300 hover:scale-105"
        sizes="(max-width: 768px) 100vw, 40vw"
        />
         </section>
        </main>

        {/* मिशन और दृष्टिकोण (Cards Section) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* मिशन कार्ड */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md border-t-8 border-blue-700 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-50 text-blue-700 rounded-xl">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-blue-900">
                नियत लक्ष्य (हमारा मिशन)
              </h3>
            </div>
            <p className="text-slate-600 mb-6 leading-relaxed">
              नगर पंचायत अमीनगर सराय का मुख्य उद्देश्य अपने नागरिकों को एक स्वच्छ, सुरक्षित और सुविधापूर्ण वातावरण प्रदान करना है। हम नगर के आधारभूत ढांचे के निर्माण और सुधार के लिए प्रतिबद्ध हैं, जिसमें शामिल हैं:
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold text-lg">•</span>
                <p className="text-slate-700"><strong className="text-slate-900">नागरिक सुविधाएँ:</strong> शुद्ध पेयजल आपूर्ति, जल निकासी प्रबंधन और स्वच्छता सेवाओं का कुशल संचालन.</p>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold text-lg">•</span>
                <p className="text-slate-700"><strong className="text-slate-900">अवसंरचना विकास:</strong> आधुनिक सड़कों का निर्माण, स्ट्रीट लाइट व्यवस्था और सार्वजनिक स्थानों का रखरखाव.</p>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold text-lg">•</span>
                <p className="text-slate-700"><strong className="text-slate-900">सरकारी योजनाओं का क्रियान्वयन:</strong> केंद्र और राज्य सरकार की जनकल्याणकारी योजनाओं को जमीनी स्तर पर पहुँचाना और स्थानीय निवासियों के जीवन स्तर को बेहतर बनाना.</p>
              </li>
            </ul>
          </div>

          {/* दृष्टिकोण कार्ड */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md border-t-8 border-emerald-600 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-emerald-900">
                भविष्य की राह (हमारा दृष्टिकोण)
              </h3>
            </div>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                हम एक ऐसे अमीनगर सराय के निर्माण के लिए कार्य कर रहे हैं जो न केवल अपनी प्राचीन ऐतिहासिक विरासत को संजोए रखे, बल्कि भविष्य की चुनौतियों के लिए भी पूरी तरह तैयार हो।
              </p>
              <p className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border-l-4 border-emerald-500 font-medium">
                हम अपने निवासियों, जनप्रतिनिधियों और प्रशासन के सहयोग से एक विकसित, हरित (Green) और प्रगतिशील नगर बनाने के लिए संकल्पित हैं।
              </p>
            </div>
          </div>

        </section>

        {/* फुटर नोट */}
        <footer className="text-center mt-16 pt-8 border-t border-slate-200 text-sm text-slate-500">
          <p>© 2026 नगर पंचायत अमीनगर सराय। सभी अधिकार सुरक्षित।</p>
        </footer>

      </div>
    </div>
  );
}
