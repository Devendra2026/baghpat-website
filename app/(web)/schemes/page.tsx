import Schemes from "@/components/schemes/page";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Schemes",
  description: " Schemes page for Town Nagar Aminagar Sarai ,  Baghpat",
};

export default function () {
  return (
    <div>
      <Schemes />
    </div>
  );
}
