import PublicGrievance from "@/components/public-grievance/page";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PublicGrievance',
  description: 'PublicGrievance page for Town Nagar Aminagar Sarai , Baghpat',
};


export default function () {
  return (
    <div>
      <PublicGrievance/>
    </div>
  )
}
