import Departments from '@/components/departments/page';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Departments',
  description: " departments page for Town Nagar Aminagar Sarai, Baghpat",
};


export default function departments() {
  return (
    <div>
      <Departments />
    </div>
  );
}
