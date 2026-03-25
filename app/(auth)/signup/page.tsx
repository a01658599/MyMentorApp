"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function SignupPage() {
  const [role, setRole] = useState('student');
  const targetHref = role === 'student' ? '/dashboard' : '/tutor-dashboard';

  return (
    <div className="flex-1 flex items-center justify-center p-6 bg-background">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-heading font-bold text-slate-800 mb-6 text-center">Create an Account</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
            <input type="text" className="w-full border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Enter your full name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <input type="email" className="w-full border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Enter your email" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
            <input type="password" className="w-full border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Create a password" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">I want to:</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="role" value="student" className="accent-primary" checked={role === 'student'} onChange={() => setRole('student')} />
                <span>Find a Tutor</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="role" value="tutor" className="accent-primary" checked={role === 'tutor'} onChange={() => setRole('tutor')} />
                <span>Become a Tutor</span>
              </label>
            </div>
          </div>
          <Link href={targetHref} className="block w-full bg-primary text-white text-center font-bold py-3 rounded-lg hover:bg-primary/90 transition-colors mt-6">
            Sign Up
          </Link>
        </form>
        <p className="mt-6 text-center text-sm text-slate-600">
          Already have an account? <Link href="/login" className="text-primary hover:underline font-bold">Log in here</Link>
        </p>
      </div>
    </div>
  );
}
