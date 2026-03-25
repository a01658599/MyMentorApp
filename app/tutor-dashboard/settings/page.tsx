import { User, Upload, Video, DollarSign, BookOpen } from 'lucide-react';

export default function TutorSettingsPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="mb-10">
        <h1 className="text-4xl font-heading font-bold text-slate-800">Profile Settings</h1>
        <p className="text-slate-500 mt-2 text-lg">Manage your public tutor profile and account preferences.</p>
      </header>
      
      <div className="bg-white/70 backdrop-blur-xl rounded-3xl border border-slate-200/60 shadow-lg shadow-slate-200/40 overflow-hidden">
        
        {/* Profile Photo & Basic Info */}
        <div className="p-8 border-b border-slate-100">
          <h2 className="text-xl font-heading font-bold text-slate-800 mb-6">Public Profile</h2>
          
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 mb-8">
            <div className="w-32 h-32 bg-slate-100 rounded-full flex flex-shrink-0 items-center justify-center border-4 border-white shadow-md overflow-hidden relative group">
              <User className="w-16 h-16 text-slate-400 group-hover:opacity-10 transition-opacity" />
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer text-white">
                <Upload className="w-6 h-6 mb-1" />
                <span className="text-xs font-bold">Upload</span>
              </div>
            </div>
            <div className="flex-1 space-y-4 w-full">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Full Name</label>
                  <input type="text" className="w-full border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm" defaultValue="Sarah Jenkins" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Email Address</label>
                  <input type="email" className="w-full border border-slate-200 rounded-xl p-3 bg-slate-50 text-slate-500 shadow-sm" defaultValue="sarah.tutor@university.edu" disabled />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Introduction / Bio</label>
              <textarea 
                className="w-full border border-slate-200 rounded-xl p-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm h-32 resize-none" 
                placeholder="Write a compelling bio to attract students..."
                defaultValue="I'm a senior Computer Science major with a passion for algorithms and data structures. I love helping students succeed and making complex topics easy to understand!"
              />
              <p className="text-xs text-slate-500 mt-2">Visible on your public profile. Max 500 characters.</p>
            </div>
          </div>
        </div>

        {/* Tutoring Details */}
        <div className="p-8 border-b border-slate-100 bg-slate-50/50">
          <h2 className="text-xl font-heading font-bold text-slate-800 mb-6">Tutoring Details</h2>
          
          <div className="space-y-6">
            <div>
              <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                <BookOpen className="w-4 h-4 text-primary" /> Subjects Taught
              </label>
              <input 
                type="text" 
                className="w-full border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm" 
                placeholder="e.g. Calculus I, Intro to Python, General Chemistry" 
                defaultValue="Calculus 102, Linear Algebra, Physics 201" 
              />
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">Calculus 102 <button className="hover:text-red-500">&times;</button></span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">Linear Algebra <button className="hover:text-red-500">&times;</button></span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">Physics 201 <button className="hover:text-red-500">&times;</button></span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                  <DollarSign className="w-4 h-4 text-primary" /> Hourly Rate
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold">$</span>
                  <input 
                    type="number" 
                    className="w-full border border-slate-200 rounded-xl pl-8 pr-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm max-w-[200px]" 
                    defaultValue={45}
                  />
                </div>
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                  <Video className="w-4 h-4 text-primary" /> Intro Video URL
                </label>
                <input 
                  type="url" 
                  className="w-full border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm" 
                  placeholder="https://youtube.com/..." 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-8 flex items-center justify-end gap-4 bg-white">
          <button className="px-6 py-3 font-bold text-slate-500 hover:text-slate-800 transition-colors">
            Cancel
          </button>
          <button className="bg-primary text-white font-bold px-8 py-3 rounded-xl hover:bg-primary/90 shadow-lg shadow-primary/30 hover:-translate-y-0.5 transition-all">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
