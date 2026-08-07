"use client";

import {
    Bell,
    LogOut,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { useAdminAccess } from "@/hooks/use-admin-access";
import { useAuth } from "@/hooks/use-auth";
import { useRouter } from "next/navigation";

function formatRoleLabel(
  role: string | null | undefined
) {
  if (!role) {
    return "Admin";
  }

  return role
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (letter) =>
      letter.toUpperCase()
    );
}

export default function AdminHeader() {
  const router = useRouter();
  const { user, logout } = useAuth();
  const { access, isLoading } = useAdminAccess();

  const displayName = user?.name || "Admin User";
  const roleLabel = isLoading
    ? "Checking role..."
    : formatRoleLabel(access?.role);

  const handleLogout = async () => {
    await logout();
    router.replace("/");
  };

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white">
      <div className="flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className=" font-bold text-slate-900">
            Admin Portal
          </h2>
          <p className="text-xs text-slate-500">
            Town Panchayat, Aminagar Sarai, Baghpat
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* {Notification button} */}
          <Button
            type="button"
            variant="outline"
            size="icon-lg"
            className="relative text-slate-600"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
          </Button>

          <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-3 py-2">
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-blue-900">
                {displayName}
              </p>
              <p className="text-xs text-slate-500">
                {roleLabel}
              </p>
            </div>
          </div>

          <Button
            type="button"
            variant="outline"
            onClick={handleLogout}
            className="gap-2 text-slate-600 hover:text-red-600"
          >
            <LogOut className="h-4 w-4" />
            <span className="hidden sm:inline">Logout</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
