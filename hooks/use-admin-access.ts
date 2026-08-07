"use client";

import { useMemo } from "react";

import { useAuth } from "@/hooks/use-auth";
import {
  hasAdminPermission,
  hasEveryAdminPermission,
  isAllowedAdminRole,
  isFullAccessAdminRole,
} from "@/services/admin-role-api";
import type {
  AdminAccess,
  AdminPermissionKey,
} from "@/types/admin-access";

export const adminAccessQueryKeys = {
  current: ["admin-access", "current"] as const,
};

export function useAdminAccess() {
  const {
    user,
    isLoaded,
    isSignedIn,
    status,
  } = useAuth();

  const access = useMemo<
    AdminAccess | undefined
  >(() => {
    if (!isLoaded || !isSignedIn || !user) {
      return undefined;
    }

    const permissions =
      user.permissions?.map((permission) =>
        permission.trim().toLowerCase()
      ) ?? [];

    return {
      id:
        typeof user.id === "number"
          ? user.id
          : Number(user.id) || null,
      name: user.name,
      email: user.email,
      role: user.role,
      permissions,
      hasExplicitPermissions:
        permissions.length > 0,
      isAllowed: isAllowedAdminRole(user.role),
    };
  }, [isLoaded, isSignedIn, user]);

  const isLoading = status === "loading";

  return useMemo(
    () => ({
      data: access,
      access,
      error: null,
      isError: false,
      isSuccess: Boolean(access),
      isFetching: false,
      isLoading,
      refetch: async () => ({ data: access }),
      isPermissionUnknown: Boolean(
        access?.isAllowed &&
          !access.hasExplicitPermissions &&
          !isFullAccessAdminRole(access.role)
      ),
      hasPermission: (
        permission: AdminPermissionKey
      ) =>
        hasAdminPermission(
          access,
          permission
        ),
      hasEveryPermission: (
        permissions: AdminPermissionKey[]
      ) =>
        hasEveryAdminPermission(
          access,
          permissions
        ),
    }),
    [access, isLoading]
  );
}
