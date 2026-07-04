
import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import Navbar from "@/src/components/Navbar";
import TopUtilityBar from "@/src/components/TopUtilityBar";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Town Panchayat , Aminagar Sarai , Baghpat | Official Government Portal",
  description: "Official portal of  Town Panchayat , Aminagar Sarai ,Baghpat, Uttar Pradesh. Settle property tax, pay water tax, apply for birth/death certificates, browse active tenders, and submit grievances online.",
  keywords: "Town Panchayat , Aminagar Sarai , Baghpat, Municipal Corporation Baghpat, Baghpat UP, Tax Payment Baghpat, Grievance Registration Baghpat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-slate-800">
        <TopUtilityBar />
        <Header />
        <Navbar />
        <main id="main-content" className="flex-1 focus:outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
