import Link from "next/link";
import {
  ArrowRight,
  MessageSquareText,
  TriangleAlert,
} from "lucide-react";

import AdminStatCard from "@/components/admin/AdminStatCard";

export default function AdminDashboardPage() {
  return (
    <main className="p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-8">
          <p className="text-sm font-semibold text-blue-600">
            Town Panchayat , Aminagar Sarai, Baghpat
          </p>

          <h1 className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">
            Admin Dashboard
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Manage contact submissions and public grievances from here.
          </p>
        </div>
        {/* Stat card */}
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <AdminStatCard
            title="Total Contacts"
            value={24}
            description="Contact form submissions"
            icon={MessageSquareText}
            iconClassName="bg-blue-100 text-blue-600"
          /><AdminStatCard
            title="Total Grievances"
            value={18}
            description="Public grievance submissions"
            icon={TriangleAlert}
            iconClassName="bg-purple-100 text-purple-600"
          />

          <AdminStatCard
            title="This Week Contacts"
            value={8}
            description="Received in the last 7 days"
            icon={MessageSquareText}
            iconClassName="bg-emerald-100 text-emerald-600"
          />

          <AdminStatCard
            title="This Week Grievances"
            value={5}
            description="Received in the last 7 days"
            icon={TriangleAlert}
            iconClassName="bg-amber-100 text-amber-600"
          />
        </div>

        {/* Management cards */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {/* Contact card */}
          <Link
            href="/admin/contacts"
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <MessageSquareText className="h-6 w-6" />
              </div>

              <ArrowRight className="h-5 w-5 text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-600" />
            </div>

            <h2 className="mt-5 text-lg font-bold text-slate-900">
              Contact Submissions
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              View enquiries received from the website contact form in a
              table.
            </p>

            <p className="mt-5 text-sm font-semibold text-blue-600">
              View contacts
            </p>
          </Link>

          {/* Grievance card */}
          <Link
            href="/admin/grievances"
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-purple-300 hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                <TriangleAlert className="h-6 w-6" />
              </div>

              <ArrowRight className="h-5 w-5 text-slate-400 transition group-hover:translate-x-1 group-hover:text-purple-600" />
            </div>

            <h2 className="mt-5 text-lg font-bold text-slate-900">
              Public Grievances
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              View public grievances submitted by citizens in a table.
            </p>

            <p className="mt-5 text-sm font-semibold text-purple-600">
              View grievances
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
