export default function HowItWorks() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 flex-1">
      <h1 className="text-4xl font-heading font-bold text-primary mb-8 text-center">How It Works</h1>
      <div className="space-y-12">
        <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 font-heading">1. Search for a Subject</h2>
          <p className="text-lg text-slate-600">Browse through our extensive list of subjects. Whether you need help with Calculus or Chemistry, high-achieving college students are ready to help you succeed.</p>
        </section>
        <section className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-accent">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 font-heading">2. Choose Your Tutor</h2>
          <p className="text-lg text-slate-600">Review tutor profiles, their specific expertise, and availability. Find someone whose teaching style matches your learning needs.</p>
        </section>
        <section className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-primary">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 font-heading">3. Book & Learn</h2>
          <p className="text-lg text-slate-600">Schedule a session using our built-in calendar system, securely process your payment, and get ready to ace your next exam!</p>
        </section>
      </div>
    </div>
  );
}
