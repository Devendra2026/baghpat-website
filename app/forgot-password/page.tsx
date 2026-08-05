'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff, Mail, Lock, KeyRound, ShieldCheck, ArrowRight, ArrowLeft } from 'lucide-react';

export default function ForgotPasswordPage() {
  const [step, setStep] = useState<'email' | 'otp' | 'reset'>('email');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Step 1: Send OTP to Email
  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    console.log('OTP sent to:', email);
    setStep('otp');
  };

  // Step 2: Handle OTP input & auto-focus
  const handleOtpChange = (value: string, index: number) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredOtp = otp.join('');
    if (enteredOtp.length < 4) {
      alert('Please enter complete 4-digit OTP');
      return;
    }
    console.log('OTP Verified:', enteredOtp);
    setStep('reset');
  };

  // Step 3: Reset Password
  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log('Password Reset Successfully');
    alert('Password reset successful! Redirecting to Sign In.');
    window.location.href = '/sign-in';
  };

  return (
    <div className="min-h-screen w-full bg-slate-900 flex items-center justify-center p-4 sm:p-6 relative overflow-hidden font-sans">
      {/* Dynamic Background Accent Lights */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#006837]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container Box */}
      <div className="w-full max-w-md bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl shadow-black/40 border border-slate-100 p-8 sm:p-10 relative z-10">
        
        {/* STEP 1: ENTER EMAIL */}
        {step === 'email' && (
          <>
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#006837]/10 text-[#006837] mb-3">
                <KeyRound className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                Forgot Password?
              </h2>
              <p className="text-xs font-medium text-slate-500 mt-2 leading-relaxed">
                Enter your registered email for <span className="font-semibold text-slate-700">Town Panchayat, Aminagar Sarai, Baghpat</span> portal to receive an OTP code.
              </p>
            </div>

            <form onSubmit={handleSendOtp} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    required
                    className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#006837]/20 focus:border-[#006837] transition duration-200 text-slate-800 placeholder:text-slate-400"
                  />
                </div>
              </div>

              <button
                suppressHydrationWarning
                type="submit"
                className="w-full bg-[#006837] hover:bg-[#00522b] text-white font-semibold py-3 rounded-xl transition duration-200 shadow-lg shadow-[#006837]/25 hover:shadow-xl hover:shadow-[#006837]/30 flex items-center justify-center gap-2 group mt-4 cursor-pointer"
              >
                <span>Send OTP Code</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition duration-200" />
              </button>
            </form>
          </>
        )}

        {/* STEP 2: VERIFY OTP */}
        {step === 'otp' && (
          <>
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#006837]/10 text-[#006837] mb-3">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                Verify OTP
              </h2>
              <p className="text-xs font-medium text-slate-500 mt-2 leading-relaxed">
                Enter the 4-digit verification code sent to <br />
                <span className="font-semibold text-slate-700">{email}</span>
              </p>
            </div>

            <form onSubmit={handleVerifyOtp} className="space-y-6">
              <div className="flex justify-center gap-3 my-2">
                {otp.map((digit, idx) => (
                  <input
                    key={idx}
                    id={`otp-${idx}`}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(e.target.value, idx)}
                    onKeyDown={(e) => handleKeyDown(e, idx)}
                    className="w-12 h-14 text-center text-xl font-bold bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#006837]/30 focus:border-[#006837] transition duration-200 text-slate-900"
                  />
                ))}
              </div>

              <button
                type="submit"
                className="w-full bg-[#006837] hover:bg-[#00522b] text-white font-semibold py-3 rounded-xl transition duration-200 shadow-lg shadow-[#006837]/25 hover:shadow-xl hover:shadow-[#006837]/30 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Verify OTP</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition duration-200" />
              </button>
            </form>
          </>
        )}

        {/* STEP 3: RESET PASSWORD */}
        {step === 'reset' && (
          <>
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#006837]/10 text-[#006837] mb-3">
                <Lock className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                Reset Password
              </h2>
              <p className="text-xs font-medium text-slate-500 mt-2 leading-relaxed">
                Create a new strong password for your account.
              </p>
            </div>

            <form onSubmit={handleResetPassword} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  New Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
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

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Confirm New Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••••••"
                    required
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
              </div>

              <button
                type="submit"
                className="w-full bg-[#006837] hover:bg-[#00522b] text-white font-semibold py-3 rounded-xl transition duration-200 shadow-lg shadow-[#006837]/25 hover:shadow-xl hover:shadow-[#006837]/30 flex items-center justify-center gap-2 group mt-4 cursor-pointer"
              >
                <span>Update Password</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition duration-200" />
              </button>
            </form>
          </>
        )}

        {/* Back to Sign In Link */}
        <div className="mt-8 text-center">
          <Link
            href="/sign-in"
            className="inline-flex items-center text-xs font-semibold text-slate-500 hover:text-[#006837] transition duration-200 group"
          >
            <ArrowLeft size={14} className="mr-1.5 group-hover:-translate-x-1 transition duration-200" />
            Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
