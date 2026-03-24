import Link from 'next/link';
import { Calendar as CalendarIcon, Clock, Star, MapPin, CheckCircle2 } from 'lucide-react';

export default function TutorProfile({ params }: { params: { tutorId: string } }) {
  // Mock data
  const tutor = {
    id: params.tutorId,
    name: 'Sarah Jenkins',
    subject: 'Calculus II',
    university: 'MIT',
    rating: 4.9,
    bio: 'Hi! I am a senior mathematics major with 3 years of tutoring experience. I specialize in breaking down complex calculus concepts into simple, easy-to-understand steps.',
    price: 20
  };

  return (
    <div className="max-w-4xl">
      <Link href="/dashboard/tutors" className="text-primary hover:underline font-medium text-sm mb-6 inline-block">
        &larr; Back to Search
      </Link>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-heading font-bold text-slate-800 mb-2">{tutor.name}</h1>
                <p className="text-xl text-primary font-medium mb-4">{tutor.subject}</p>
                <div className="flex items-center gap-4 text-sm text-slate-600">
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {tutor.university}</span>
                  <span className="flex items-center gap-1 text-yellow-600 font-bold"><Star className="w-4 h-4 fill-current" /> {tutor.rating}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-slate-800">${tutor.price}</div>
                <div className="text-slate-500 text-sm">per hour</div>
              </div>
            </div>
            
            <h2 className="font-heading font-bold text-xl text-slate-800 mb-3">About Me</h2>
            <p className="text-slate-600 leading-relaxed">{tutor.bio}</p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="font-heading font-bold text-xl text-slate-800 mb-6 flex items-center gap-2">
              <CalendarIcon className="w-5 h-5 text-primary" /> Schedule a Session
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
              {['Mon, Oct 12', 'Tue, Oct 13', 'Wed, Oct 14'].map((date, i) => (
                <div key={i} className={`p-4 border rounded-xl text-center cursor-pointer ${i === 0 ? 'border-primary bg-primary/5' : 'border-slate-200 hover:border-primary transition-colors'}`}>
                  <div className="font-bold text-slate-800">{date.split(',')[0]}</div>
                  <div className="text-sm text-slate-500">{date.split(',')[1]}</div>
                </div>
              ))}
            </div>
            <h3 className="font-bold text-slate-800 mb-3 text-sm">Available Times</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {['09:00 AM', '11:00 AM', '02:00 PM', '04:00 PM'].map((time, i) => (
                <div key={i} className={`py-2 text-center text-sm font-medium border rounded-lg cursor-pointer ${i === 2 ? 'bg-primary text-white border-primary' : 'border-slate-200 text-slate-700 hover:border-primary transition-colors'}`}>
                  {time}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm sticky top-24">
            <h3 className="font-heading font-bold text-lg text-slate-800 mb-4">Booking Summary</h3>
            <div className="space-y-4 mb-6">
              <div className="flex gap-3 text-sm text-slate-700">
                <CalendarIcon className="w-5 h-5 text-slate-400 shrink-0" />
                <div>Monday, October 12</div>
              </div>
              <div className="flex gap-3 text-sm text-slate-700">
                <Clock className="w-5 h-5 text-slate-400 shrink-0" />
                <div>02:00 PM - 03:00 PM (1 hr)</div>
              </div>
              <div className="flex gap-3 text-sm text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                <div>Calculus II Tutoring</div>
              </div>
            </div>
            <div className="border-t border-slate-200 pt-4 mb-6">
              <div className="flex justify-between font-bold text-lg text-slate-800">
                <span>Total</span>
                <span>$20.00</span>
              </div>
            </div>
            <Link href="/dashboard/booking/payment" className="block w-full bg-primary text-white text-center font-bold py-3 rounded-xl hover:bg-primary/90 transition-colors">
              Continue to Payment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
