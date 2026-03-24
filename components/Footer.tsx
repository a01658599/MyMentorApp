import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-10 px-6 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-3 font-heading text-2xl font-bold text-white mb-6">
            <Image src="/logo.png" alt="MyMentor Logo" width={80} height={80} className="object-contain bg-white rounded-full p-1 shadow-sm" />
            MyMentor
          </div>
          <p className="text-sm">
            Empowering college students through accessible, peer-to-peer learning and flexible tutoring opportunities.
          </p>
        </div>
        <div>
          <h3 className="font-heading text-lg text-white mb-4">Platform</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/tutors" className="hover:text-primary transition-colors">Find a Tutor</a></li>
            <li><a href="/pricing" className="hover:text-primary transition-colors">Pricing Plans</a></li>
            <li><a href="/how-it-works" className="hover:text-primary transition-colors">How it Works</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-heading text-lg text-white mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:text-primary transition-colors">About Us</a></li>
            <li><a href="/become-a-tutor" className="hover:text-primary transition-colors">Become a Tutor</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-heading text-lg text-white mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-slate-700 text-center text-sm">
        &copy; {new Date().getFullYear()} MyMentor. All rights reserved.
      </div>
    </footer>
  );
}
