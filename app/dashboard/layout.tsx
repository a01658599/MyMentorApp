import Link from 'next/link';
import { Settings, Calendar, Users, Home, HelpCircle } from 'lucide-react';

export default function DashboardLayout({ children }: { readonly children: React.ReactNode }) {
  return (
    <div className="flex-1 flex flex-col md:flex-row bg-background">
      <aside className="w-full md:w-64 bg-white border-r border-slate-200 shrink-0 hidden md:block">
        <nav className="p-4 space-y-2 sticky top-20">
          <Link href="/dashboard" className="flex items-center gap-3 text-slate-700 hover:text-primary hover:bg-slate-50 p-3 rounded-lg font-medium transition-colors">
            <Home className="w-5 h-5" /> Dashboard Home
          </Link>
          <Link href="/dashboard/tutors" className="flex items-center gap-3 text-slate-700 hover:text-primary hover:bg-slate-50 p-3 rounded-lg font-medium transition-colors">
            <Users className="w-5 h-5" /> Find a Tutor
          </Link>
          <Link href="/dashboard/bookings" className="flex items-center gap-3 text-slate-700 hover:text-primary hover:bg-slate-50 p-3 rounded-lg font-medium transition-colors">
            <Calendar className="w-5 h-5" /> My Bookings
          </Link>
          <Link href="/dashboard/settings" className="flex items-center gap-3 text-slate-700 hover:text-primary hover:bg-slate-50 p-3 rounded-lg font-medium transition-colors">
            <Settings className="w-5 h-5" /> Profile & Settings
          </Link>
          <Link href="/dashboard/support" className="flex items-center gap-3 text-slate-700 hover:text-primary hover:bg-slate-50 p-3 rounded-lg font-medium transition-colors">
            <HelpCircle className="w-5 h-5" /> Help & Support
          </Link>
        </nav>
      </aside>
      
      {/* Mobile nav */}
      <nav className="md:hidden bg-white border-b border-slate-200 flex overflow-x-auto whitespace-nowrap p-2 gap-2">
        <Link href="/dashboard" className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-primary">Home</Link>
        <Link href="/dashboard/tutors" className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-primary">Find a Tutor</Link>
        <Link href="/dashboard/bookings" className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-primary">Bookings</Link>
        <Link href="/dashboard/settings" className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-primary">Profile & Settings</Link>
        <Link href="/dashboard/support" className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-primary">Help & Support</Link>
      </nav>

      <main className="flex-1 p-6 md:p-8">
        {children}
      </main>
    </div>
  );
}
