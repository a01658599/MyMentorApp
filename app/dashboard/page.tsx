import Link from 'next/link';
import { Calendar, Users } from 'lucide-react';

export default function DashboardHome() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-heading font-bold text-slate-800 mb-2">Welcome, Student!</h1>
      <p className="text-slate-600 mb-8">Here's what's happening with your tutoring journey.</p>
      
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-primary text-white p-6 rounded-2xl shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-8 h-8 text-accent" />
            <h2 className="text-xl font-bold font-heading">Find a Tutor</h2>
          </div>
          <p className="text-primary-100 mb-6 text-sm">Need help with a tough subject? Browse our high-achieving student tutors and book a session.</p>
          <Link href="/dashboard/tutors" className="inline-block bg-white text-primary font-bold px-6 py-2 rounded-lg hover:bg-slate-50 transition-colors">
            Search Now
          </Link>
        </div>

        <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-8 h-8 text-primary" />
            <h2 className="text-xl font-bold font-heading text-slate-800">My Bookings</h2>
          </div>
          <p className="text-slate-600 mb-6 text-sm">You have no upcoming bookings. Ready to learn something new today?</p>
          <Link href="/dashboard/bookings" className="inline-block bg-primary text-white font-bold px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">
            View Schedule
          </Link>
        </div>
      </div>

      <h2 className="text-2xl font-bold font-heading text-slate-800 mb-4">Current Plan</h2>
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex justify-between items-center">
        <div>
          <h3 className="font-heading font-bold text-lg text-slate-800">Pay As You Go</h3>
          <p className="text-slate-500 text-sm">You'll be charged $20 per hour for completed sessions.</p>
        </div>
        <Link href="/pricing" className="text-primary font-bold hover:underline">Change Plan</Link>
      </div>
    </div>
  );
}
