import {
  SignUpInput,
  SignInInput,
  SendOtpInput,
  VerifyOtpInput,
  AuthResponse,
  UsersResponse,
} from "@/types/auth";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "/api/auth";

export const authService = {
  async signUp(data: SignUpInput): Promise<AuthResponse> {
    const res = await fetch(`${API_BASE_URL}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error(await res.text());
    return res.json();
  },

  async signIn(data: SignInInput): Promise<AuthResponse> {
    const res = await fetch(`${API_BASE_URL}/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error(await res.text());
    return res.json();
  },

  async sendOtp(data: SendOtpInput): Promise<AuthResponse> {
    const res = await fetch(`${API_BASE_URL}/forgot-password/send-otp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error(await res.text());
    return res.json();
  },

  async verifyOtpAndReset(data: VerifyOtpInput): Promise<AuthResponse> {
    const res = await fetch(`${API_BASE_URL}/forgot-password/verify-reset`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error(await res.text());
    return res.json();
  },

  // Admin Dashboard - Get Registered Users Table List
  async getUsers(): Promise<UsersResponse> {
    const res = await fetch(`${API_BASE_URL}/users`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) throw new Error(await res.text());
    return res.json();
  },
};
