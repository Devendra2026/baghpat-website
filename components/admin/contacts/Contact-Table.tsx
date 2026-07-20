"use client";

import DataTable from "@/components/admin/DataTable";
import { contactData } from "@/data/admin/contact-data";

import { contactColumns} from "./Contact-Column";

export default function ContactTable() {
  return (
    <DataTable
      columns={contactColumns}
      data={contactData}
      searchPlaceholder=" Do Search Name, email, phone or subject "
      emptyMessage="Do not get contact submission"
    />
  );
}
