import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock, Users, Video } from 'lucide-react';

export default function TutorCalendarPage() {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dates = Array.from({ length: 35 }, (_, i) => i - 2); // Mock past and future dates for visual
  
  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-500">
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
        <div>
          <h1 className="text-4xl font-heading font-bold text-slate-800">Calendar & Bookings</h1>
          <p className="text-slate-500 mt-2 text-lg">Manage your availability and upcoming sessions.</p>
        </div>
        <button className="bg-primary text-white font-bold px-6 py-3 rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all">
          + Add Exception
        </button>
      </header>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Calendar Area */}
        <section className="lg:col-span-2 bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white shadow-xl shadow-slate-200/40">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-800 font-heading">March 2026</h2>
            <div className="flex gap-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-y-6 gap-x-2 text-center mb-4 text-sm font-bold text-slate-400 uppercase tracking-widest">
            {days.map(day => <div key={day}>{day}</div>)}
          </div>
          
          <div className="grid grid-cols-7 gap-2">
            {dates.map((date, i) => {
              const isToday = date === 24; // Mocking today
              const hasBooking = [12, 15, 24, 25, 28].includes(date);
              
              return (
                <div 
                  key={i} 
                  className={`
                    aspect-square rounded-2xl flex flex-col items-center justify-center p-1 relative
                    cursor-pointer transition-all duration-300 font-medium
                    ${date <= 0 || date > 31 ? 'text-slate-300 select-none' : 'text-slate-700 hover:bg-white hover:border hover:border-slate-200 hover:shadow-sm'}
                    ${isToday ? 'bg-primary text-white hover:bg-primary/90 hover:border-transparent' : ''}
                  `}
                >
                  <span className={`text-lg ${isToday ? 'font-bold' : ''}`}>{date > 0 && date <= 31 ? date : date <= 0 ? 31 + date : date - 31}</span>
                  {hasBooking && date > 0 && date <= 31 && (
                    <div className="flex gap-1 mt-1">
                      <span className={`w-1.5 h-1.5 rounded-full ${isToday ? 'bg-white' : 'bg-primary'}`}></span>
                      {date === 24 && <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Sidebar Schedule */}
        <section className="space-y-6">
          <div className="bg-[#4f80a1] text-white rounded-3xl p-8 border border-white/10 shadow-xl shadow-primary/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="flex items-center gap-3 mb-6">
              <CalendarIcon className="w-6 h-6 text-accent" />
              <h3 className="text-xl font-bold font-heading">Today's Schedule</h3>
            </div>
            
            <div className="space-y-4 relative z-10">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 hover:bg-white/20 transition-colors cursor-pointer group">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-accent">4:00 PM - 5:00 PM</span>
                  <span className="bg-white/20 px-2 py-1 rounded text-xs font-bold uppercase tracking-wide">60 min</span>
                </div>
                <h4 className="font-bold text-lg mb-1">Calculus 102</h4>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-sm text-slate-200">
                    <Users className="w-4 h-4" /> James Wilson
                  </span>
                  <button className="bg-white text-primary p-2 rounded-xl scale-95 group-hover:scale-100 transition-transform">
                    <Video className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 hover:bg-white/20 transition-colors cursor-pointer group">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-accent">6:30 PM - 7:30 PM</span>
                  <span className="bg-white/20 px-2 py-1 rounded text-xs font-bold uppercase tracking-wide">60 min</span>
                </div>
                <h4 className="font-bold text-lg mb-1">Physics 201</h4>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-sm text-slate-200">
                    <Users className="w-4 h-4" /> Emily Chen
                  </span>
                  <button className="bg-white text-primary p-2 rounded-xl scale-95 group-hover:scale-100 transition-transform">
                    <Video className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/60 backdrop-blur-md rounded-3xl p-8 border border-white shadow-lg shadow-slate-200/40">
            <h3 className="text-xl font-bold font-heading text-slate-800 mb-6 flex items-center gap-2">
               <Clock className="w-5 h-5 text-primary" /> Availability Rules
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                <span className="font-medium text-slate-700">Weekdays</span>
                <span className="text-slate-500 text-sm bg-slate-100 px-3 py-1 rounded-lg">4PM - 9PM</span>
              </div>
              <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                <span className="font-medium text-slate-700">Weekends</span>
                <span className="text-slate-500 text-sm bg-slate-100 px-3 py-1 rounded-lg">10AM - 5PM</span>
              </div>
              <button className="w-full mt-2 py-3 text-primary font-bold hover:bg-slate-50 rounded-xl transition-colors">
                Edit Weekly Hours
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
