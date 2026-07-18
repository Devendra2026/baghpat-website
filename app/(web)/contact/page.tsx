import ContactUs from "@/components/contact/page";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: "Contact page for Towm Panchayat Aminagar Sarai, Baghpat ",
};
export default function Contact() {
  return (<div>
    <ContactUs />
  </div>
    
  );
}
