import AboutUs from '@/components/about/page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About",
  description: 'About page of Town Panchayat Aminagar Sarai, Baghpat',
};

export default function About() {
  return (
    <div>
      <AboutUs />
    </div>
  );
}
