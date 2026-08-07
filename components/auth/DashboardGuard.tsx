"use client";

import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { useAuth } from "@/hooks/use-auth";
import { isAllowedAdminRole } from "@/services/admin-role-api";

export default function DashboardGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { isLoaded, isSignedIn, user } =
    useAuth();

  const canOpenDashboard =
    isLoaded &&
    isSignedIn &&
    isAllowedAdminRole(user?.role);

  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    if (!isSignedIn) {
      router.replace("/sign-in");
      return;
    }

    if (!isAllowedAdminRole(user?.role)) {
      router.replace("/");
    }
  }, [isLoaded, isSignedIn, router, user?.role]);

  if (!canOpenDashboard) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
        <div className="rounded-2xl border border-slate-200 bg-white px-8 py-7 text-center shadow-sm">
          <Loader2 className="mx-auto h-9 w-9 animate-spin text-blue-600" />
          <h1 className="mt-4 text-base font-bold text-slate-900">
            Checking Access
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Please wait while your account access is verified.
          </p>
        </div>
      </main>
    );
  }

  return children;
}
