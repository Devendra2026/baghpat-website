"use client";

import DataTable from "@/components/admin/DataTable";
import { publicgrievancedata } from '@/data/admin/public-grievance-data';

import { grievanceColumns } from "./Grievance-Column"

export default function GrievanceTable() {
  return (
    <DataTable
      columns={grievanceColumns}
      data={publicgrievancedata}
      searchPlaceholder="Do Search Complaint ID, name, category or ward "
      emptyMessage="Do not get public grievance"
    />
  );
}
