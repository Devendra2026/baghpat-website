"use client";

import { useAuth } from "@/hooks/use-auth";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { isAllowedAdminRole } from "@/services/admin-role-api";

export default function RoleRedirect() {
  const router = useRouter();
  const {
    isLoaded,
    isSignedIn,
    user,
  } = useAuth();

  useEffect(() => {
    let isActive = true;

    async function checkRole() {
      if (!isLoaded) {
        return;
      }

      if (!isSignedIn) {
        router.replace("/sign-in");
        return;
      }

      if (!isActive) {
        return;
      }

      if (isAllowedAdminRole(user?.role)) {
        router.replace("/dashboard");
        return;
      }

      router.replace("/");
    }

    void checkRole();

    return () => {
      isActive = false;
    };
  }, [isLoaded, isSignedIn, router, user?.role]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12">
      <div className="w-full max-w-sm rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
        <Loader2 className="mx-auto h-10 w-10 animate-spin text-blue-600" />
        <h1 className="mt-4 text-lg font-bold text-slate-900">
          Checking Access
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Please wait while your role is verified.
        </p>
      </div>
    </main>
  );
}
