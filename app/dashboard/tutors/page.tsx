import Link from 'next/link';
import { Search, MapPin, Star } from 'lucide-react';

export default function TutorSearch({ searchParams }: { searchParams: { subject?: string }}) {
  const subject = searchParams.subject || '';
  
  // Mock Data
  const tutors = [
    { id: '1', name: 'Sarah Jenkins', subject: 'Calculus II', university: 'MIT', rating: 4.9 },
    { id: '2', name: 'David Cho', subject: 'Physics 101', university: 'Stanford', rating: 4.8 },
  ];

  const filteredTutors = subject 
    ? tutors.filter(t => t.subject.toLowerCase().includes(subject.toLowerCase()))
    : tutors;

  return (
    <div className="max-w-5xl">
      <h1 className="text-3xl font-heading font-bold text-slate-800 mb-6">Find a Tutor</h1>
      
      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 mb-8 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Search by subject (e.g., Calculus)..." 
            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            defaultValue={subject}
          />
        </div>
        <button className="bg-primary text-white font-bold px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
          Search
        </button>
      </div>

      {subject && filteredTutors.length === 0 ? (
        <div className="bg-white p-10 rounded-2xl border border-slate-200 text-center">
          <h2 className="text-2xl font-bold font-heading text-slate-800 mb-2">Subject Not Available</h2>
          <p className="text-slate-600 mb-6 max-w-md mx-auto">We couldn't find any available tutors for "{subject}" right now. Would you like us to notify you when one becomes available?</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <input type="email" placeholder="Your email address" className="flex-1 border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary" />
            <button className="bg-accent text-slate-900 font-bold px-6 py-3 rounded-lg hover:bg-white border border-accent transition-colors">Notify Me</button>
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {filteredTutors.map((tutor) => (
            <Link key={tutor.id} href={`/dashboard/tutors/${tutor.id}`}>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-primary transition-colors cursor-pointer group shadow-sm hover:shadow-md">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-slate-800 group-hover:text-primary transition-colors">{tutor.name}</h3>
                    <p className="text-primary font-medium">{tutor.subject}</p>
                  </div>
                  <div className="flex items-center gap-1 bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm font-bold">
                    <Star className="w-4 h-4 fill-current" /> {tutor.rating}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <MapPin className="w-4 h-4" /> {tutor.university}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
