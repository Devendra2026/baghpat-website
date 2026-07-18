import Services from "@/components/services/page";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services ',
  description: 'Services page of Town Panchayat Aminagar Sarai, Baghpat',
};


export default function () {
  return (
    <div>
      <Services />
    </div>
  );
 }
