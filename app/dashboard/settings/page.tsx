import { User, Upload } from 'lucide-react';

export default function ProfileAndSettings() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-heading font-bold text-slate-800 mb-8">Profile & Settings</h1>
      
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100">
          <h2 className="text-xl font-heading font-bold text-slate-800 mb-6">Profile Information</h2>
          
          <div className="space-y-6">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center border border-slate-200 overflow-hidden relative group">
                <User className="w-12 h-12 text-slate-400 group-hover:opacity-10 transition-opacity" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  <Upload className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <button className="bg-white border border-slate-300 text-slate-700 font-bold px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors text-sm">
                  Change Profile Photo
                </button>
                <p className="text-xs text-slate-500 mt-2">JPG, GIF or PNG. Max size of 5MB.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                <input type="text" className="w-full border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary" defaultValue="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                <input type="email" className="w-full border border-slate-300 rounded-lg p-3 bg-slate-50" defaultValue="john.student@university.edu" disabled />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Short Bio</label>
              <textarea 
                className="w-full border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary h-24 resize-none" 
                placeholder="Tell tutors a bit about yourself and your learning goals..."
                defaultValue="Computer Science major looking to brush up on theoretical math and physics."
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Academic Interests</label>
              <input 
                type="text" 
                className="w-full border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary" 
                placeholder="e.g. Machine Learning, Neuroscience, Graphic Design" 
                defaultValue="Software Engineering, Calculus, Physics" 
              />
            </div>

            <button className="bg-primary text-white font-bold px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
              Save Profile
            </button>
          </div>
        </div>
        
        <div className="p-6">
          <h2 className="text-xl font-heading font-bold text-slate-800 mb-4">App Preferences</h2>
          <div className="flex items-center justify-between mt-4">
            <div>
              <p className="font-medium text-slate-800">Theme Preference</p>
              <p className="text-sm text-slate-500">Toggle between Light and Dark mode.</p>
            </div>
            <select className="border border-slate-300 rounded-lg p-2 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary">
              <option>Light Mode</option>
              <option>Dark Mode</option>
              <option>System Default</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
