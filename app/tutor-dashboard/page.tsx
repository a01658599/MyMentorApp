import { Users, Clock, Star, ArrowUpRight, Calendar, DollarSign } from 'lucide-react';
import Link from 'next/link';

export default function TutorDashboardHome() {
  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in zoom-in duration-500">
      <header className="mb-10">
        <h1 className="text-4xl font-heading font-bold text-slate-800">Welcome Tutor! 👋</h1>
        <p className="text-slate-500 mt-2 text-lg">Here's what's happening with your tutoring business today.</p>
      </header>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/80 backdrop-blur-sm border border-slate-200/50 p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-500 font-medium tracking-wide text-sm uppercase">Active Students</h3>
            <div className="w-10 h-10 rounded-full bg-accent/30 flex items-center justify-center text-primary">
              <Users className="w-5 h-5" />
            </div>
          </div>
          <p className="text-4xl font-heading font-bold text-slate-800">12</p>
          <div className="mt-4 flex items-center text-sm font-medium text-green-600">
            <ArrowUpRight className="w-4 h-4 mr-1" />
            <span>2 new this week</span>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm border border-slate-200/50 p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-500 font-medium tracking-wide text-sm uppercase">Upcoming Hours</h3>
            <div className="w-10 h-10 rounded-full bg-accent/30 flex items-center justify-center text-primary">
              <Clock className="w-5 h-5" />
            </div>
          </div>
          <p className="text-4xl font-heading font-bold text-slate-800">8.5</p>
          <div className="mt-4 flex items-center text-sm font-medium text-slate-500">
            <span>Scheduled for next 7 days</span>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm border border-slate-200/50 p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-500 font-medium tracking-wide text-sm uppercase">Average Rating</h3>
            <div className="w-10 h-10 rounded-full bg-accent/30 flex items-center justify-center text-primary">
              <Star className="w-5 h-5" />
            </div>
          </div>
          <p className="text-4xl font-heading font-bold text-slate-800">4.9</p>
          <div className="mt-4 flex items-center text-sm font-medium text-green-600">
            <ArrowUpRight className="w-4 h-4 mr-1" />
            <span>Based on 45 reviews</span>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mt-10">
        {/* Next Sessions */}
        <section className="bg-white/60 backdrop-blur-md rounded-3xl p-8 border border-white max-w-full overflow-hidden shadow-lg shadow-slate-200/40">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold font-heading text-slate-800">Next Sessions</h2>
            <Link href="/tutor-dashboard/calendar" className="text-primary hover:text-slate-800 font-medium text-sm transition-colors">
              View Calendar &rarr;
            </Link>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-5 bg-slate-50/80 rounded-2xl border border-slate-100 hover:border-accent hover:bg-white transition-all cursor-pointer group">
                <div className="flex items-center gap-4 mb-4 sm:mb-0">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-primary flex flex-shrink-0 items-center justify-center text-white font-bold font-heading text-xl shadow-inner">
                    {['J', 'M', 'A'][i]}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 font-heading text-lg group-hover:text-primary transition-colors">{['James Wilson', 'Maria Garcia', 'Alex Chen'][i]}</h4>
                    <p className="text-slate-500 text-sm flex items-center gap-2">
                       {['Calculus 102', 'Linear Algebra', 'Physics 201'][i]}
                    </p>
                  </div>
                </div>
                <div className="text-left sm:text-right">
                  <div className="text-slate-800 font-bold bg-white px-4 py-2 rounded-lg border border-slate-200 inline-block">
                    {['Today, 4:00 PM', 'Tomorrow, 2:00 PM', 'Wed, 10:00 AM'][i]}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Actions & Tips */}
        <div className="space-y-8">
          <section className="bg-gradient-to-br from-[#d1d3d5]/40 to-[#a4c8e1]/20 rounded-3xl p-8 border border-white shadow-lg shadow-slate-200/40">
            <h2 className="text-2xl font-bold font-heading text-slate-800 mb-6">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              <button className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-primary transition-all text-left group">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Calendar className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-800">Update Availability</h4>
                <p className="text-slate-500 text-sm mt-1">Manage your calendar</p>
              </button>
              <button className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-primary transition-all text-left group">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <DollarSign className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-800">Request Payout</h4>
                <p className="text-slate-500 text-sm mt-1">Withdraw earnings</p>
              </button>
            </div>
          </section>

          <section className="bg-slate-800 rounded-3xl p-8 relative overflow-hidden shadow-xl shadow-slate-900/10">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary rounded-full blur-3xl opacity-40"></div>
            <h2 className="text-xl font-bold font-heading text-white mb-2 relative z-10">Pro Tip 💡</h2>
            <p className="text-slate-300 relative z-10">Students are 3x more likely to book sessions with tutors who have uploaded an introductory video. Take 2 minutes to record yours today!</p>
            <button className="mt-6 bg-accent text-slate-900 font-bold px-6 py-2.5 rounded-xl hover:bg-white transition-colors relative z-10 border border-transparent hover:border-accent">
              Upload Video
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}
