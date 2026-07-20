import Staff from "@/components/staff/page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Staff ',
  description: 'Services page of Town Panchayat Aminagar Sarai, Baghpat',
};

export default function () {
  return (
    <div>
      <Staff/>
    </div>
  )
}
