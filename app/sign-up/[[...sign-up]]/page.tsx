'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff, User, Mail, Lock, ShieldCheck, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useSignUp } from '@/hooks/use-auth';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpSchema, SignUpInput } from '@/types/auth';

export default function SignUpPage() {
  const router = useRouter();
  const signUp = useSignUp();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpInput>({
    resolver: zodResolver(signUpSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data: SignUpInput) => {
    setErrorMessage('');

    if (data.password !== data.confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    try {
      await signUp.mutateAsync({
        fullName: data.fullName,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
      });
      router.replace('/');
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : 'Sign up failed. Please try again.'
      );
    }
  };

  return (
    <div className="min-h-screen w-full bg-slate-900 flex items-center justify-center p-4 sm:p-6 relative overflow-hidden font-sans">
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#006837]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-md bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl shadow-black/40 border border-slate-100 p-8 sm:p-10 relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#006837]/10 text-[#006837] mb-3">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Create Account</h2>
          <p className="text-xs font-medium text-slate-500 mt-2 leading-relaxed">
            Register for <span className="font-semibold text-slate-700">Town Panchayat, Aminagar Sarai, Baghpat</span> digital municipal services
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {errorMessage && (
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
              {errorMessage}
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">Full Name</label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                {...register('fullName')}
                placeholder="John Doe"
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#006837]/20 focus:border-[#006837] transition duration-200 text-slate-800 placeholder:text-slate-400"
              />
            </div>
            {errors.fullName && <p className="text-xs text-red-500 mt-1 font-medium">{errors.fullName.message}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                {...register('email')}
                placeholder="name@example.com"
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#006837]/20 focus:border-[#006837] transition duration-200 text-slate-800 placeholder:text-slate-400"
              />
            </div>
            {errors.email && <p className="text-xs text-red-500 mt-1 font-medium">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type={showPassword ? 'text' : 'password'}
                {...register('password')}
                placeholder="••••••••••••"
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
            {errors.password && <p className="text-xs text-red-500 mt-1 font-medium">{errors.password.message}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">Confirm Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                {...register('confirmPassword')}
                placeholder="••••••••••••"
                className="w-full pl-10 pr-10 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#006837]/20 focus:border-[#006837] transition duration-200 text-slate-800 placeholder:text-slate-400"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition"
              >
                {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {errors.confirmPassword && <p className="text-xs text-red-500 mt-1 font-medium">{errors.confirmPassword.message}</p>}
          </div>

          <button
            type="submit"
            disabled={signUp.isPending}
            className="w-full bg-[#006837] hover:bg-[#00522b] disabled:cursor-not-allowed disabled:opacity-70 text-white font-semibold py-3 rounded-xl transition duration-200 shadow-lg shadow-[#006837]/25 hover:shadow-xl hover:shadow-[#006837]/30 flex items-center justify-center gap-2 group mt-4 cursor-pointer"
          >
            <span>{signUp.isPending ? 'Creating account...' : 'Create Account'}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition duration-200" />
          </button>
        </form>

        <p className="text-xs text-center text-slate-500 mt-8">
          Already have an account?{' '}
          <Link href="/sign-in" className="text-[#006837] font-semibold hover:underline">Sign In</Link>
        </p>
      </div>
    </div>
  );
}