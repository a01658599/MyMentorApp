"use client";

import { useState } from 'react';
import Link from 'next/link';
import { CreditCard, Lock, CheckCircle, AlertCircle, MessageSquare, LogOut } from 'lucide-react';

export default function PaymentPage() {
  const [status, setStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle');

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('processing');
    
    // Simulate API call
    setTimeout(() => {
      // Simulate validation
      const form = e.target as HTMLFormElement;
      const cardNumber = (form.elements.namedItem('cardNumber') as HTMLInputElement).value;
      
      if (cardNumber.includes('0000')) {
        setStatus('error');
      } else {
        setStatus('success');
      }
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="max-w-2xl mx-auto text-center py-16">
        <div className="mb-6 flex justify-center">
          <div className="bg-green-100 p-4 rounded-full">
            <CheckCircle className="w-16 h-16 text-green-600" />
          </div>
        </div>
        <h1 className="text-4xl font-heading font-bold text-slate-800 mb-4">Payment Successful!</h1>
        <p className="text-lg text-slate-600 mb-8 w-full max-w-md mx-auto">
          Your card has been placed on file and will be charged $20.00 after your session with Sarah Jenkins.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/dashboard" className="bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
            <MessageSquare className="w-5 h-5" /> Message Tutor
          </Link>
          <Link href="/dashboard" className="bg-slate-200 text-slate-800 font-bold py-3 px-6 rounded-lg hover:bg-slate-300 transition-colors flex items-center justify-center gap-2">
            <LogOut className="w-5 h-5" /> Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-3xl font-heading font-bold text-slate-800 mb-6 flex items-center gap-3">
        <CreditCard className="w-8 h-8 text-primary" /> Secure Checkout
      </h1>
      
      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
        <div className="flex justify-between items-center mb-8 pb-6 border-b border-slate-100">
          <div>
            <h2 className="font-bold text-slate-800">Calculus II Tutoring</h2>
            <p className="text-sm text-slate-500">Sarah Jenkins • Mon, Oct 12 at 2:00 PM</p>
          </div>
          <div className="text-2xl font-bold text-slate-800">$20.00</div>
        </div>

        {status === 'error' && (
          <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-6 flex items-center gap-3 border border-red-200">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <p className="text-sm font-medium">Card not valid, please try again. (Don't use '0000')</p>
          </div>
        )}

        <form onSubmit={handlePayment} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Cardholder Name</label>
            <input type="text" required className="w-full border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Name on card" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Card Number</label>
            <input type="text" name="cardNumber" required className="w-full border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="•••• •••• •••• ••••" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Expiration Date</label>
              <input type="text" required className="w-full border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="MM/YY" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">CVC</label>
              <input type="text" required className="w-full border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="123" />
            </div>
          </div>
          <button 
            type="submit" 
            disabled={status === 'processing'}
            className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 mt-4 disabled:opacity-70"
          >
            {status === 'processing' ? 'Processing...' : (
              <><Lock className="w-5 h-5" /> Complete Booking</>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
