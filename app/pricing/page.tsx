import Link from 'next/link';

export default function Pricing() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 flex-1">
      <h1 className="text-4xl font-heading font-bold text-primary mb-12 text-center">Pricing Plans</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 flex flex-col">
          <h2 className="text-2xl font-bold text-slate-800 mb-2 font-heading">Pay As You Go</h2>
          <p className="text-slate-500 mb-6">Perfect for occasional help.</p>
          <div className="text-5xl font-bold text-primary mb-6">$20<span className="text-lg text-slate-500 font-normal">/hour</span></div>
          <ul className="space-y-4 mb-8 flex-1">
            <li className="flex items-center gap-3 text-slate-700">✓ Access to all subjects</li>
            <li className="flex items-center gap-3 text-slate-700">✓ Flexible scheduling</li>
            <li className="flex items-center gap-3 text-slate-700">✓ No monthly commitment</li>
          </ul>
          <Link href="/signup" className="block text-center w-full py-4 rounded-full bg-slate-100 text-slate-800 font-bold hover:bg-slate-200 transition-colors">Choose Plan</Link>
        </div>
        <div className="bg-primary p-8 rounded-3xl shadow-lg text-white flex flex-col relative transform md:-translate-y-4">
          <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-accent text-slate-900 px-4 py-1 rounded-full text-sm font-bold shadow-md">Most Popular</div>
          <h2 className="text-2xl font-bold mb-2 font-heading">Semester Pass</h2>
          <p className="text-primary-100 mb-6 text-slate-200">Consistent support for better grades.</p>
          <div className="text-5xl font-bold mb-6">$150<span className="text-lg font-normal opacity-80">/month</span></div>
          <ul className="space-y-4 mb-8 flex-1">
            <li className="flex items-center gap-3">✓ 10 Hours of tutoring/month</li>
            <li className="flex items-center gap-3">✓ Priority booking</li>
            <li className="flex items-center gap-3">✓ Free cancellation up to 12 hrs</li>
          </ul>
          <Link href="/signup" className="block text-center w-full py-4 rounded-full bg-white text-primary font-bold hover:bg-slate-50 transition-colors">Choose Plan</Link>
        </div>
      </div>
    </div>
  );
}
