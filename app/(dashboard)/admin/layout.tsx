import type { ReactNode } from "react";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminSidebar from "@/components/admin/adminSidebar";

interface AdminlayoutProps{
  children: ReactNode;
}

export default function AdminLayout({
  children,
}: AdminlayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50 lg:flex">
      <AdminSidebar />
      <div className="min-w-0 flex-1">
        {children}
      </div>
    </div>
  );
}
