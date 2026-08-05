import { z } from "zod";

// --- Base Schemas ---

export const userSchema = z.object({
  id: z.union([z.string(), z.number()]),
  fullName: z.string().min(2, "Full name kam se kam 2 characters ka hona chahiye"),
  email: z.string().email("Invalid email address"),
  role: z.enum(["admin", "citizen", "staff"]).default("citizen"),
  status: z.enum(["active", "pending", "suspended"]).default("active"),
  createdAt: z.string().optional(),
});

export const signUpSchema = z.object({
  fullName: z.string().min(2, "Full name kam se kam 2 characters ka hona chahiye"),
  email: z.string().email("Sahi email enter karein"),
  password: z.string().min(6, "Password kam se kam 6 characters ka hona chahiye"),
});

export const signInSchema = z.object({
  email: z.string().email("Sahi email enter karein"),
  password: z.string().min(1, "Password zaroori hai"),
});

export const sendOtpSchema = z.object({
  email: z.string().email("Sahi email enter karein"),
});

export const verifyOtpSchema = z.object({
  email: z.string().email("Sahi email enter karein"),
  otp: z.string().length(4, "OTP 4 digits ka hona chahiye"),
  newPassword: z.string().min(6, "Naya password kam se kam 6 characters ka hona chahiye"),
});

// --- Inferred TypeScript Types ---

export type User = z.infer<typeof userSchema>;
export type SignUpInput = z.infer<typeof signUpSchema>;
export type SignInInput = z.infer<typeof signInSchema>;
export type SendOtpInput = z.infer<typeof sendOtpSchema>;
export type VerifyOtpInput = z.infer<typeof verifyOtpSchema>;

export type AuthResponse = {
  success: boolean;
  message?: string;
  token?: string;
  user?: User;
};

export type UsersResponse = {
  success: boolean;
  data: User[];
  total: number;
};
