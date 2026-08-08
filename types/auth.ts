import { z } from "zod";

// --- Base Schemas ---

export const userSchema = z.object({
  id: z.union([z.string(), z.number()]),
  name: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  role: z.string().default("user"),
  permissions: z.array(z.string()).default([]),
  created_at: z.string().optional(),
});

export const signUpSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string().min(8, "Password must be at least 8 characters"),
});

export const signInSchema = z.object({
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(1, "Password is required"),
});

export const sendOtpSchema = z.object({
  email: z.string().email("Enter a valid email address"),
});

export const verifyOtpSchema = z.object({
  otp: z.string().length(4, "OTP must be 4 digits"),
});

export const resetPasswdSchema = z.object({
  newPassword: z.string().min(8, "New password must be at least 8 characters"),
  confirmNewPassword: z.string().min(8, "New password must be at least 8 characters"),
})

// --- Inferred TypeScript Types ---

export type User = z.infer<typeof userSchema>;
export type SignUpInput = z.infer<typeof signUpSchema>;
export type SignInInput = z.infer<typeof signInSchema>;
export type SendOtpInput = z.infer<typeof sendOtpSchema>;
export type VerifyOtpInput = z.infer<typeof verifyOtpSchema>;
export type ResetPasswdInput = z.infer<typeof resetPasswdSchema>

export type AuthResponse = {
  access_token: string;
  token_type: "bearer";
  user: User;
};

export type UsersResponse = {
  success: boolean;
  data: User[];
  total: number;
};
