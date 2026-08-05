"use client";

import { useQuery } from "@tanstack/react-query";
import { authService } from "@/services/auth-api";
import {
  SignUpInput,
  SignInInput,
  SendOtpInput,
  VerifyOtpInput,
} from "@/types/auth";
import { useMutation } from "@tanstack/react-query";

// 1. Existing Individual Hooks
export function useSignUp() {
  return useMutation({
    mutationFn: (data: SignUpInput) => authService.signUp(data),
  });
}

export function useSignIn() {
  return useMutation({
    mutationFn: (data: SignInInput) => authService.signIn(data),
  });
}

export function useSendOtp() {
  return useMutation({
    mutationFn: (data: SendOtpInput) => authService.sendOtp(data),
  });
}

export function useVerifyOtpAndReset() {
  return useMutation({
    mutationFn: (data: VerifyOtpInput) => authService.verifyOtpAndReset(data),
  });
}

export function useUsers() {
  return useQuery({
    queryKey: ["admin-users-list"],
    queryFn: () => authService.getUsers(),
    staleTime: 1000 * 60 * 5,
  });
}

// 2. Add `useAuth` Hook expected by RoleRedirect Component
export function useAuth() {
  // LocalStorage se token and state check karne ka basic structure
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const isSignedIn = Boolean(token);
  const isLoaded = true; // State loaded verification

  const getToken = async () => {
    return localStorage.getItem("token") || null;
  };

  return {
    isLoaded,
    isSignedIn,
    getToken,
    token,
  };
}
