import { DollarSign, ArrowUpRight, ArrowDownRight, Download, CreditCard, Building } from 'lucide-react';

export default function TutorEarningsPage() {
  const transactions = [
    { id: 1, type: 'session', title: 'Session: James Wilson', date: 'Mar 24, 2026', amount: 45.00, status: 'Completed' },
    { id: 2, type: 'session', title: 'Session: Emily Chen', date: 'Mar 23, 2026', amount: 60.00, status: 'Completed' },
    { id: 3, type: 'payout', title: 'Bank Transfer to ending 4921', date: 'Mar 20, 2026', amount: -210.00, status: 'Processed' },
    { id: 4, type: 'session', title: 'Session: Maria Garcia', date: 'Mar 18, 2026', amount: 45.00, status: 'Completed' },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-500">
      <header className="mb-10">
        <h1 className="text-4xl font-heading font-bold text-slate-800">My Earnings</h1>
        <p className="text-slate-500 mt-2 text-lg">Track your income, upcoming payouts, and payment history.</p>
      </header>

      {/* Balance Cards */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-gradient-to-tr from-primary to-[#4f80a1]/80 text-white rounded-3xl p-8 shadow-xl shadow-primary/20 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="flex items-center justify-between relative z-10">
            <div>
              <p className="text-accent font-medium mb-1 tracking-wide uppercase text-sm">Available Balance</p>
              <h2 className="text-5xl font-heading font-bold">$345.50</h2>
            </div>
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
              <DollarSign className="w-8 h-8 text-accent" />
            </div>
          </div>

          <div className="flex items-center gap-4 mt-12 relative z-10 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none bg-accent text-slate-900 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:bg-white transition-all transform hover:-translate-y-1">
              Request Payout
            </button>
            <button className="flex-1 sm:flex-none bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-8 py-4 rounded-xl transition-colors hidden sm:block">
              Tax Documents
            </button>
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-slate-200/60 shadow-lg shadow-slate-200/40 flex flex-col justify-between">
          <div>
            <h3 className="text-slate-500 font-medium tracking-wide uppercase text-sm mb-4">Pending Clearance</h3>
            <p className="text-4xl font-heading font-bold text-slate-800">$120.00</p>
            <p className="text-sm text-slate-500 mt-2">Will be available by Mar 28</p>
          </div>
          <div className="mt-8 pt-6 border-t border-slate-200">
            <h3 className="text-slate-500 font-medium tracking-wide uppercase text-sm mb-2">Total Earned (YTD)</h3>
            <p className="text-2xl font-heading font-bold text-slate-800">$1,450.00</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mt-10">
        <section className="lg:col-span-2 bg-white/60 backdrop-blur-md rounded-3xl border border-white shadow-lg shadow-slate-200/40 overflow-hidden">
          <div className="flex items-center justify-between p-8 border-b border-slate-100 bg-white/40">
            <h2 className="text-2xl font-bold font-heading text-slate-800">Transaction History</h2>
            <button className="flex items-center gap-2 text-primary hover:text-slate-800 font-medium text-sm transition-colors">
              <Download className="w-4 h-4" /> Export CSV
            </button>
          </div>
          <div className="divide-y divide-slate-100">
            {transactions.map(tx => (
              <div key={tx.id} className="p-6 sm:px-8 flex items-center justify-between hover:bg-slate-50/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${tx.type === 'session' ? 'bg-[#a4c8e1]/30 text-primary' : 'bg-slate-100 text-slate-500'}`}>
                    {tx.type === 'session' ? <ArrowDownRight className="w-5 h-5" /> : <ArrowUpRight className="w-5 h-5" />}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">{tx.title}</h4>
                    <p className="text-sm text-slate-500">{tx.date} &bull; {tx.status}</p>
                  </div>
                </div>
                <div className={`font-bold font-heading text-lg ${tx.amount > 0 ? 'text-green-600' : 'text-slate-800'}`}>
                  {tx.amount > 0 ? '+' : ''}{tx.amount.toFixed(2)}
                </div>
              </div>
            ))}
          </div>
          <div className="p-6 bg-slate-50/50 text-center">
            <button className="text-primary font-bold hover:underline">View All Transactions</button>
          </div>
        </section>

        <section className="space-y-6">
          <div className="bg-white/60 backdrop-blur-md rounded-3xl p-8 border border-white shadow-lg shadow-slate-200/40">
            <h3 className="text-xl font-bold font-heading text-slate-800 mb-6 flex items-center gap-2">
               <Building className="w-5 h-5 text-primary" /> Payout Method
            </h3>
            
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 mb-4 relative overflow-hidden group hover:border-primary transition-colors cursor-pointer">
              <div className="flex items-center justify-between mb-4 relative z-10">
                <div className="w-12 h-8 bg-slate-800 rounded flex items-center justify-center">
                   <CreditCard className="w-5 h-5 text-white" />
                </div>
                <span className="bg-accent/20 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">Default</span>
              </div>
              <h4 className="font-bold text-slate-800 relative z-10">Chase Checking</h4>
              <p className="text-slate-500 text-sm font-medium tracking-widest mt-1 relative z-10">**** 4921</p>
            </div>
            
            <button className="w-full mt-2 py-3 border border-dashed border-slate-300 text-slate-500 font-bold hover:bg-slate-50 hover:border-primary hover:text-primary rounded-xl transition-all">
              + Add Payment Method
            </button>
          </div>

          <div className="bg-gradient-to-br from-[#d1d3d5]/40 to-[#a4c8e1]/20 rounded-3xl p-8 border border-white shadow-lg shadow-slate-200/40 text-center">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm border border-slate-100">
              <DollarSign className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-bold text-lg text-slate-800 mb-2">Refer a Tutor</h3>
            <p className="text-slate-600 text-sm mb-6">Invite friends to tutor on MyMentor and earn $50 for each successful sign-up.</p>
            <button className="bg-primary text-white font-bold w-full py-3 rounded-xl shadow-md hover:shadow-lg hover:bg-primary/90 transition-all">
              Get Referral Link
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
