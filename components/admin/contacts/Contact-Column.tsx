"use client";

import type { ColumnDef } from "@tanstack/react-table";
import {
  Mail,
  MessageSquareText,
  Phone,
} from "lucide-react";

import type { Contact } from "@/types/contact-";

export const contactColumns: ColumnDef<Contact>[] = [
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
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <p className="font-semibold text-slate-900">
        {row.original.name}
      </p>
    ),
  },

  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => (
      <a
        href={`mailto:${row.original.email}`}
        className="inline-flex items-center gap-2 text-blue-600 hover:underline"
      >
        <Mail className="h-4 w-4" />

        {row.original.email}
      </a>
    ),
  },

  {
    accessorKey: "phone",
    header: "Phone",
    cell: ({ row }) => (
      <a
        href={`tel:${row.original.phone}`}
        className="inline-flex items-center gap-2 whitespace-nowrap text-slate-700"
      >
        <Phone className="h-4 w-4 text-slate-400" />

        {row.original.phone}
      </a>
    ),
  },

  {
    accessorKey: "subject",
    header: "Subject",
    cell: ({ row }) => (
      <span className="font-medium text-slate-700">
        {row.original.subject}
      </span>
    ),
  },

  {
    accessorKey: "message",
    header: "Message",
    cell: ({ row }) => (
      <div className="flex max-w-[320px] items-start gap-2">
        <MessageSquareText className="mt-1 h-4 w-4 shrink-0 text-slate-400" />

        <p
          title={row.original.message}
          className="line-clamp-2 leading-6 text-slate-600"
        >
          {row.original.message}
        </p>
      </div>
    ),
  },
];
