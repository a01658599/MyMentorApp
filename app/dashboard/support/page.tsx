import { Mail, MessageCircle, FileText } from 'lucide-react';

export default function HelpAndSupport() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-heading font-bold text-slate-800 mb-2">Help & Support</h1>
      <p className="text-slate-600 mb-8">How can we help you today?</p>
      
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageCircle className="w-6 h-6 text-primary" />
          </div>
          <h2 className="font-bold font-heading text-lg mb-2 text-slate-800">Live Chat</h2>
          <p className="text-sm text-slate-500 mb-4">Click the chat bubble in the bottom right corner to chat with our support team in real-time.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-6 h-6 text-primary" />
          </div>
          <h2 className="font-bold font-heading text-lg mb-2 text-slate-800">Email Us</h2>
          <p className="text-sm text-slate-500 mb-4">Send us an email and we'll reply to your inquiry within 24h.</p>
          <button className="text-primary font-bold hover:underline">support@mymentor.com</button>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="w-6 h-6 text-primary" />
          </div>
          <h2 className="font-bold font-heading text-lg mb-2 text-slate-800">Documentation</h2>
          <p className="text-sm text-slate-500 mb-4">Browse our detailed guides and tutorials to find answers to your questions.</p>
          <button className="text-primary font-bold hover:underline">View Docs</button>
        </div>
      </div>

      <h2 className="text-2xl font-bold font-heading text-slate-800 mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-lg text-slate-800 mb-2">How do I cancel a booking?</h3>
          <p className="text-slate-600">You can easily cancel a session from the My Bookings tab up to 12 hours before it starts.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-lg text-slate-800 mb-2">When will I be charged?</h3>
          <p className="text-slate-600">If you are on the Pay-As-You-Go plan, your card is held on file during booking, but not charged until after the session completes.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-lg text-slate-800 mb-2">How do I become a tutor?</h3>
          <p className="text-slate-600">You can apply to be a tutor starting from the front page of the website and filling out our rigorous qualification form.</p>
        </div>
      </div>
    </div>
  );
}
