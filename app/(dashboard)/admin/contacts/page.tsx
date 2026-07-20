import { MessageSquareText } from "lucide-react";
import ContactTable from "@/components/admin/contacts/Contact-Table";

export default function AdminContactsPage() {
  return (
    <main className="p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
            <MessageSquareText className="h-6 w-6" />
          </div>

          <div>
            <p className="text-sm font-semibold text-blue-600">
              Admin Management
            </p>
            <h1 className="text-2xl font-bold text-slate-900">
              Contact Submissions
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Recieve enquiries form contact form of website.
            </p>
          </div>
        </div>
        <ContactTable />
      </div>
    </main>
  );
}
