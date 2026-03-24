import Link from 'next/link';

export default function BecomeATutor() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 flex-1 text-center">
      <h1 className="text-4xl font-heading font-bold text-primary mb-6">Become a Tutor</h1>
      <p className="text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed mb-8">
        Are you a high-achieving college student looking to make extra money? Share your knowledge and help your peers succeed while earning on a flexible schedule.
      </p>
      <Link href="/signup" className="inline-block bg-primary text-white font-bold py-4 px-8 rounded-full hover:bg-primary/90 transition-all">
        Apply Now
      </Link>
    </div>
  );
}
