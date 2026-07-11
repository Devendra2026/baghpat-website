import NewsAndNotice from "@/components/newsandnotice/page";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NewsAndNotice',
  description: 'NewsAndNotice page for Town Nagar Aminagar Sarai, Baghpat',
};

export default function () {
  return (
    <div>
      <NewsAndNotice />
    </div>
  );
 }
