"use client";

import {
  createContext,
  createElement,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  useMutation,
  useQuery,
} from "@tanstack/react-query";

import { setUnauthorizedRetryHandler } from "@/lib/api-clients";
import { authService } from "@/services/auth-api";
import type {
  AuthResponse,
  SendOtpInput,
  SignInInput,
  SignUpInput,
  User,
  VerifyOtpInput,
  ResetPasswdInput,
} from "@/types/auth";

type AuthStatus =
  | "loading"
  | "authenticated"
  | "unauthenticated";

type AuthContextValue = {
  user: User | null;
  token: string | null;
  accessToken: string | null;
  status: AuthStatus;
  isLoaded: boolean;
  isSignedIn: boolean;
  login: (data: SignInInput) => Promise<User>;
  register: (data: SignUpInput) => Promise<User>;
  refreshSession: () => Promise<User | null>;
  logout: () => Promise<void>;
  getToken: () => Promise<string | null>;
};

const ACCESS_TOKEN_STORAGE_KEY =
  "baghpat_access_token";
const USER_STORAGE_KEY = "baghpat_auth_user";
const REFRESH_EARLY_MS = 20_000;

const AuthContext =
  createContext<AuthContextValue | null>(null);

function getStoredToken() {
  if (typeof window === "undefined") {
    return null;
  }

  return localStorage.getItem(
    ACCESS_TOKEN_STORAGE_KEY
  );
}

function getStoredUser() {
  if (typeof window === "undefined") {
    return null;
  }

  const rawUser =
    localStorage.getItem(USER_STORAGE_KEY);

  if (!rawUser) {
    return null;
  }

  try {
    return JSON.parse(rawUser) as User;
  } catch {
    localStorage.removeItem(USER_STORAGE_KEY);
    return null;
  }
}

function storeAuthResponse(
  data: AuthResponse
) {
  localStorage.setItem(
    ACCESS_TOKEN_STORAGE_KEY,
    data.access_token
  );
  localStorage.setItem(
    USER_STORAGE_KEY,
    JSON.stringify(data.user)
  );
}

function clearStoredAuth() {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.removeItem(
    ACCESS_TOKEN_STORAGE_KEY
  );
  localStorage.removeItem(USER_STORAGE_KEY);
}

function getJwtExpiryMs(token: string) {
  try {
    const [, payload] = token.split(".");

    if (!payload) {
      return null;
    }

    const normalizedPayload = payload
      .replace(/-/g, "+")
      .replace(/_/g, "/");
    const decodedPayload = JSON.parse(
      window.atob(normalizedPayload)
    ) as { exp?: number };

    if (
      typeof decodedPayload.exp !== "number"
    ) {
      return null;
    }

    return decodedPayload.exp * 1000;
  } catch {
    return null;
  }
}

export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] =
    useState<User | null>(null);
  const [accessToken, setAccessToken] =
    useState<string | null>(null);
  const [status, setStatus] =
    useState<AuthStatus>("loading");
  const refreshPromiseRef =
    useRef<Promise<User | null> | null>(null);

  const applyAuthResponse = useCallback(
    (data: AuthResponse) => {
      storeAuthResponse(data);
      setAccessToken(data.access_token);
      setUser(data.user);
      setStatus("authenticated");
      return data.user;
    },
    []
  );

  const markUnauthenticated = useCallback(() => {
    clearStoredAuth();
    setAccessToken(null);
    setUser(null);
    setStatus("unauthenticated");
  }, []);

  const refreshSession =
    useCallback(async (): Promise<User | null> => {
      if (refreshPromiseRef.current) {
        return refreshPromiseRef.current;
      }

      const refreshPromise = authService
        .refresh()
        .then((data) => applyAuthResponse(data))
        .catch(() => {
          markUnauthenticated();
          return null;
        })
        .finally(() => {
          refreshPromiseRef.current = null;
        });

      refreshPromiseRef.current = refreshPromise;
      return refreshPromise;
    }, [applyAuthResponse, markUnauthenticated]);

  const getToken =
    useCallback(async (): Promise<string | null> => {
      const token =
        accessToken ?? getStoredToken();

      if (!token) {
        const refreshedUser =
          await refreshSession();

        return refreshedUser
          ? getStoredToken()
          : null;
      }

      const expiryMs = getJwtExpiryMs(token);

      if (
        expiryMs &&
        expiryMs - Date.now() <= REFRESH_EARLY_MS
      ) {
        const refreshedUser =
          await refreshSession();

        return refreshedUser
          ? getStoredToken()
          : null;
      }

      return token;
    }, [accessToken, refreshSession]);

  const login = useCallback(
    async (data: SignInInput) => {
      const response =
        await authService.signIn(data);

      return applyAuthResponse(response);
    },
    [applyAuthResponse]
  );

  const register = useCallback(
    async (data: SignUpInput) => {
      const response =
        await authService.signUp(data);

      return applyAuthResponse(response);
    },
    [applyAuthResponse]
  );

  const logout = useCallback(async () => {
    await authService
      .logout()
      .catch(() => undefined);

    markUnauthenticated();
  }, [markUnauthenticated]);

  useEffect(() => {
    const storedToken = getStoredToken();
    const storedUser = getStoredUser();

    if (storedToken && storedUser) {
      setAccessToken(storedToken);
      setUser(storedUser);
    }

    void refreshSession();
  }, [refreshSession]);

  useEffect(() => {
    setUnauthorizedRetryHandler(async () => {
      const refreshedUser =
        await refreshSession();

      return refreshedUser
        ? getStoredToken()
        : null;
    });

    return () => {
      setUnauthorizedRetryHandler(null);
    };
  }, [refreshSession]);

  useEffect(() => {
    if (!accessToken) {
      return;
    }

    const expiryMs = getJwtExpiryMs(accessToken);

    if (!expiryMs) {
      return;
    }

    const refreshInMs = Math.max(
      expiryMs - Date.now() - REFRESH_EARLY_MS,
      0
    );

    const timeoutId = window.setTimeout(() => {
      void refreshSession();
    }, refreshInMs);

    return () => window.clearTimeout(timeoutId);
  }, [accessToken, refreshSession]);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      token: accessToken,
      accessToken,
      status,
      isLoaded: status !== "loading",
      isSignedIn:
        status === "authenticated" &&
        Boolean(accessToken),
      login,
      register,
      refreshSession,
      logout,
      getToken,
    }),
    [
      accessToken,
      getToken,
      login,
      logout,
      refreshSession,
      register,
      status,
      user,
    ]
  );

  return createElement(
    AuthContext.Provider,
    { value },
    children
  );
}

export function useAuth() {
  const value = useContext(AuthContext);

  if (!value) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return value;
}

export function useSignUp() {
  const { register } = useAuth();

  return useMutation({
    mutationFn: (data: SignUpInput) =>
      register(data),
  });
}

export function useSignIn() {
  const { login } = useAuth();

  return useMutation({
    mutationFn: (data: SignInInput) =>
      login(data),
  });
}

export function useSendOtp() {
  return useMutation({
    mutationFn: (data: SendOtpInput) =>
      authService.sendOtp(data),
  });
}

export function useVerifyOtp() {
  return useMutation({
    mutationFn: (data: VerifyOtpInput) =>
      authService.verifyOtp(data),
  });
}

//
export function useResetPasswd() {
  return useMutation({
    mutationFn: (data: ResetPasswdInput) =>
      authService.resetPasswd(data),
  });
}

export function useUsers() {
  return useQuery({
    queryKey: ["admin-users-list"],
    queryFn: () => authService.getUsers(),
    staleTime: 1000 * 60 * 5,
  });
}
