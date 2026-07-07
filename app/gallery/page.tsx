import Gallery from "@/components/gallery/page"; 
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Gallery page for Town Nagar Aminagar Sarai , Baghpat',
};

export default function () {
  return (
    <div>
      <Gallery/>
    </div>
  )
}
