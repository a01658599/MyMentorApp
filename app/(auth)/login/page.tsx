import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="flex-1 flex items-center justify-center p-6 bg-background">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-heading font-bold text-primary mb-6 text-center">Welcome Back</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <input type="email" className="w-full border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Enter your email" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
            <input type="password" className="w-full border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Enter your password" />
          </div>
          <Link href="/dashboard" className="block w-full bg-primary text-white text-center font-bold py-3 rounded-lg hover:bg-primary/90 transition-colors mt-6">
            Log In
          </Link>
        </form>
        <p className="mt-6 text-center text-sm text-slate-600">
          Don't have an account? <Link href="/signup" className="text-primary hover:underline font-bold">Sign up here</Link>
        </p>
      </div>
    </div>
  );
}
