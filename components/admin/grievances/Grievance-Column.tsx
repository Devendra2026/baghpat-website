"use client";

import type { ColumnDef } from "@tanstack/react-table";
import {
  MapPin,
  Phone,
  TriangleAlert,
} from "lucide-react";

import type { Grievance } from "@/types/public-grievance";

export const grievanceColumns: ColumnDef<Grievance>[] = [
  {
    id: "serialNumber",
    header: "S.No.",
    cell: ({ row }) => (
      <span className="font-semibold text-slate-700">
        {row.index + 1}
      </span>
    ),
  },

  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => (
      <span className="whitespace-nowrap rounded-lg bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700">
        {row.original.email}
      </span>
    ),
  },

  {
    accessorKey: "name",
    header: "Citizen Name",
    cell: ({ row }) => (
      <div>
        <p className="font-semibold text-slate-900">
          {row.original.name}
        </p>

        <a
          href={`tel:${row.original.phone}`}
          className="mt-1 inline-flex items-center gap-1 text-xs text-slate-500"
        >
          <Phone className="h-3.5 w-3.5" />

          {row.original.phone}
        </a>
      </div>
    ),
  },

  {
    accessorKey: "complaint_category",
    header: "Complaint Category",
    cell: ({ row }) => (
      <span className="whitespace-nowrap rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-700">
        {row.original.complaint_category}
      </span>
    ),
  },

  {
    accessorKey: "ward",
    header: "Ward",
    cell: ({ row }) => (
      <span className="whitespace-nowrap font-medium text-slate-700">
        {row.original.ward}
      </span>
    ),
  },

  {
    accessorKey: "incident address",
    header: "Incident Address",
    cell: ({ row }) => (
      <div className="flex max-w-[230px] items-start gap-2">
        <MapPin className="mt-1 h-4 w-4 shrink-0 text-slate-400" />

        <p className="line-clamp-2 leading-6">
          {row.original.incident_address}
        </p>
      </div>
    ),
  },

  {
    accessorKey: "description",
    header: "Description Details",
    cell: ({ row }) => (
      <div className="flex max-w-[320px] items-start gap-2">
        <TriangleAlert className="mt-1 h-4 w-4 shrink-0 text-amber-500" />

        <p
          title={row.original.description}
          className="line-clamp-2 leading-6"
        >
          {row.original.description}
        </p>
      </div>
    ),
  },
];
