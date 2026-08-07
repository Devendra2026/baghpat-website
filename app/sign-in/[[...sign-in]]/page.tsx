'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff, Mail, Lock, ShieldCheck, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useSignIn } from '@/hooks/use-auth';

function isDashboardRole(role: string) {
  return ["admin", "head clerk", "computer operator"].includes(
    role.trim().toLowerCase().replace(/[_-]+/g, " ").replace(/\s+/g, " ")
  );
}

export default function SignInPage() {
  const router = useRouter();
  const signIn = useSignIn();
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      const user = await signIn.mutateAsync(formData);
      router.replace(isDashboardRole(user.role) ? '/dashboard' : '/');
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Sign in failed. Please try again.'
      );
    }
  };

  return (
    <div className="min-h-screen w-full bg-slate-900 flex items-center justify-center p-4 sm:p-6 relative overflow-hidden font-sans">
      {/* Dynamic Background Accent Lights */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#006837]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container Box */}
      <div className="w-full max-w-md bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl shadow-black/40 border border-slate-100 p-8 sm:p-10 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#006837]/10 text-[#006837] mb-3">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Welcome Back
          </h2>
          <p className="text-xs font-medium text-slate-500 mt-2 leading-relaxed">
            Sign in to access <span className="font-semibold text-slate-700">Town Panchayat, Aminagar Sarai, Baghpat</span> digital services
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {errorMessage && (
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
              {errorMessage}
            </div>
          )}

          {/* Email Field */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                suppressHydrationWarning
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                required
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#006837]/20 focus:border-[#006837] transition duration-200 text-slate-800 placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                Password
              </label>
              <Link
                href="/forgot-password"
                className="text-xs font-medium text-[#006837] hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••••••"
                required
                className="w-full pl-10 pr-10 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#006837]/20 focus:border-[#006837] transition duration-200 text-slate-800 placeholder:text-slate-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={signIn.isPending}
            className="w-full bg-[#006837] hover:bg-[#00522b] disabled:cursor-not-allowed disabled:opacity-70 text-white font-semibold py-3 rounded-xl transition duration-200 shadow-lg shadow-[#006837]/25 hover:shadow-xl hover:shadow-[#006837]/30 flex items-center justify-center gap-2 group mt-4 cursor-pointer"
          >
            <span>{signIn.isPending ? 'Signing in...' : 'Sign In'}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition duration-200" />
          </button>
        </form>

        {/* Footer Navigation */}
        <p className="text-xs text-center text-slate-500 mt-8">
          Don't have an account?{' '}
          <Link href="/sign-up" className="text-[#006837] font-semibold hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
