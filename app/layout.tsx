import Footer from '@/components/navigation/Footer';
import Header from '@/components/navigation/Header';
import Navbar from '@/components/navigation/Navbar';
import TopUtilityBar from '@/components/navigation/TopUtilityBar';
import { MotionProvider } from '@/components/providers/motion-provider';
import { TooltipProvider } from '@/components/ui/tooltip';

import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'AMINAGAR SARAI , BAGHPAT ',
  description:
    'Official portal of  Town Panchayat , Aminagar Sarai ,Baghpat, Uttar Pradesh. Settle property tax, pay water tax, apply for birth/death certificates, browse active tenders, and submit grievances online.',
  keywords:
    'Town Panchayat , Aminagar Sarai , Baghpat, Municipal Corporation Baghpat, Baghpat UP, Tax Payment Baghpat, Grievance Registration Baghpat',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en suppressHydrationWarning" className={cn('font-sans', geist.variable)}>
      <body className="min-h-screen flex flex-col bg-white text-slate-800">
        <TopUtilityBar />
        <Header />
        <Navbar />
        <main id="main-content" className="flex-1 focus:outline-none">
          <MotionProvider>
            <TooltipProvider>{children}</TooltipProvider>
          </MotionProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
