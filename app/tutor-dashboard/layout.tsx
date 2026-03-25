import Link from 'next/link';
import { Home, Calendar, DollarSign, Settings, LogOut } from 'lucide-react';

export default function TutorDashboardLayout({ children }: { readonly children: React.ReactNode }) {
  return (
    <div className="flex-1 flex flex-col md:flex-row bg-background">
      <aside className="w-full md:w-72 bg-white/80 backdrop-blur-md border-r border-slate-200/50 shrink-0 hidden md:flex flex-col">
        <div className="p-8">
          <h2 className="font-heading text-2xl font-bold text-slate-800">Tutor Portal</h2>
          <p className="text-slate-500 text-sm mt-1">Manage your sessions</p>
        </div>
        <nav className="px-4 space-y-2 flex-1">
          <Link href="/tutor-dashboard" className="group flex items-center gap-3 text-slate-700 hover:text-white hover:bg-primary p-4 rounded-xl font-medium transition-all duration-300">
            <Home className="w-5 h-5 group-hover:scale-110 transition-transform" /> Dashboard
          </Link>
          <Link href="/tutor-dashboard/calendar" className="group flex items-center gap-3 text-slate-700 hover:text-white hover:bg-primary p-4 rounded-xl font-medium transition-all duration-300">
            <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" /> Calendar & Bookings
          </Link>
          <Link href="/tutor-dashboard/earnings" className="group flex items-center gap-3 text-slate-700 hover:text-white hover:bg-primary p-4 rounded-xl font-medium transition-all duration-300">
            <DollarSign className="w-5 h-5 group-hover:scale-110 transition-transform" /> My Earnings
          </Link>
          <Link href="/tutor-dashboard/settings" className="group flex items-center gap-3 text-slate-700 hover:text-white hover:bg-primary p-4 rounded-xl font-medium transition-all duration-300">
            <Settings className="w-5 h-5 group-hover:scale-110 transition-transform" /> Profile Settings
          </Link>
        </nav>
        <div className="p-4 border-t border-slate-200/50">
          <button className="w-full justify-center group flex items-center gap-3 text-slate-500 hover:text-red-500 p-4 rounded-xl font-medium transition-all duration-300">
            <LogOut className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Log Out
          </button>
        </div>
      </aside>
      
      {/* Mobile nav */}
      <nav className="md:hidden bg-white/90 backdrop-blur-md border-b border-slate-200 flex overflow-x-auto whitespace-nowrap p-3 gap-3">
        <Link href="/tutor-dashboard" className="px-5 py-2.5 rounded-full bg-slate-100 text-sm font-medium text-slate-700 hover:bg-primary hover:text-white transition-colors">Home</Link>
        <Link href="/tutor-dashboard/calendar" className="px-5 py-2.5 rounded-full bg-slate-100 text-sm font-medium text-slate-700 hover:bg-primary hover:text-white transition-colors">Calendar</Link>
        <Link href="/tutor-dashboard/earnings" className="px-5 py-2.5 rounded-full bg-slate-100 text-sm font-medium text-slate-700 hover:bg-primary hover:text-white transition-colors">Earnings</Link>
      </nav>

      <main className="flex-1 p-6 md:p-10 relative overflow-y-auto">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl -z-10 pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
        {children}
      </main>
    </div>
  );
}
