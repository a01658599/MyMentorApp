"use client";

import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export default function ChatBubble() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-xl w-80 h-96 mb-4 flex flex-col border border-slate-200 overflow-hidden transform origin-bottom-right transition-all animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="bg-primary text-white p-4 flex justify-between items-center">
            <h3 className="font-heading font-bold text-lg leading-none">Support Chat</h3>
            <button onClick={() => setIsOpen(false)} className="hover:bg-primary/80 p-1 rounded-full text-white hover:bg-white/20 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex-1 p-4 bg-slate-50 overflow-y-auto flex flex-col gap-4">
            <div className="flex text-sm">
              <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-sm shadow-sm max-w-[85%]">
                <p className="text-slate-700">Hi there! 👋 How can we help you troubleshoot your MyMentor experience today?</p>
              </div>
            </div>
            <div className="flex text-sm">
              <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-sm shadow-sm max-w-[85%]">
                <p className="text-slate-700 mb-2">Here are some quick topics:</p>
                <div className="flex flex-col gap-2">
                  <button className="text-left text-xs bg-accent/20 hover:bg-accent/40 text-primary font-bold py-2 px-3 rounded-lg transition-colors border border-accent/30">Booking an appointment</button>
                  <button className="text-left text-xs bg-accent/20 hover:bg-accent/40 text-primary font-bold py-2 px-3 rounded-lg transition-colors border border-accent/30">Billing issue</button>
                  <button className="text-left text-xs bg-accent/20 hover:bg-accent/40 text-primary font-bold py-2 px-3 rounded-lg transition-colors border border-accent/30">Becoming a tutor</button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 bg-white border-t border-slate-200">
            <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full px-4 py-2">
              <input type="text" placeholder="Type your message..." className="bg-transparent border-none outline-none flex-1 text-sm text-slate-800" />
              <button className="text-primary hover:text-primary/80 transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className={`${isOpen ? 'bg-slate-800 border-none' : 'bg-primary'} text-white p-4 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center justify-center float-right select-none`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </div>
  );
}
