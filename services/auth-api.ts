import {
  SignUpInput,
  SignInInput,
  SendOtpInput,
  VerifyOtpInput,
  AuthResponse,
  UsersResponse,
} from "@/types/auth";
import { buildApiUrl } from "@/lib/api-clients";

async function readErrorMessage(response: Response) {
  try {
    const data = await response.json();

    if (typeof data.detail === "string") {
      return data.detail;
    }

    if (typeof data.message === "string") {
      return data.message;
    }
  } catch {
    // Use fallback below when backend did not return JSON.
  }

  return "Authentication request failed";
}

async function authRequest<T>(
  endpoint: string,
  init: RequestInit = {}
): Promise<T> {
  const res = await fetch(buildApiUrl(endpoint), {
    ...init,
    credentials: "include",
    headers: {
      Accept: "application/json",
      ...(init.body
        ? { "Content-Type": "application/json" }
        : {}),
      ...init.headers,
    },
  });

  if (!res.ok) {
    throw new Error(await readErrorMessage(res));
  }

  if (res.status === 204) {
    return undefined as T;
  }

  return res.json() as Promise<T>;
}

export const authService = {
  async signUp(data: SignUpInput): Promise<AuthResponse> {
    return authRequest<AuthResponse>("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        name: data.fullName,
        email: data.email,
        password: data.password,
      }),
    });
  },

  async signIn(data: SignInInput): Promise<AuthResponse> {
    return authRequest<AuthResponse>("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },

  async refresh(): Promise<AuthResponse> {
    return authRequest<AuthResponse>("/api/auth/refresh", {
      method: "POST",
    });
  },

  async logout(): Promise<void> {
    return authRequest<void>("/api/auth/logout", {
      method: "POST",
    });
  },

  async sendOtp(data: SendOtpInput): Promise<AuthResponse> {
    const res = await fetch(buildApiUrl("/api/auth/forgot-password/send-otp"), {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error(await res.text());
    return res.json();
  },

  async verifyOtpAndReset(data: VerifyOtpInput): Promise<AuthResponse> {
    const res = await fetch(buildApiUrl("/api/auth/forgot-password/verify-reset"), {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error(await res.text());
    return res.json();
  },

  // Admin Dashboard - Get Registered Users Table List
  async getUsers(): Promise<UsersResponse> {
    const res = await fetch(buildApiUrl("/api/user"), {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) throw new Error(await res.text());
    return res.json();
  },
};
