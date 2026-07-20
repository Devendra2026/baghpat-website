import { TriangleAlert } from "lucide-react";
import GrievanceTable from "@/components/admin/grievances/Grievance-Table";

export default function AdminGrievancePage() {
  return (
    <main className="p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
            <TriangleAlert className="h-6 w-6" />
          </div>
          
          <div>
            <p className="text-sm font-semibold text-purple-600">
              Admin Management
            </p>
            <h1 className="text-2xl font-bold text-slate-900">
              Public Grievances
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Public Compplaints is submit by citizens.
            </p>
          </div>
        </div>
        <GrievanceTable />
        </div>
    </main>
  );
}
