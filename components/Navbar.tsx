import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full bg-primary text-white p-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 font-heading text-2xl font-bold">
          <Image src="/logo.png" alt="MyMentor Logo" width={80} height={80} className="object-contain bg-white rounded-full p-1 shadow-sm" />
          MyMentor
        </Link>
        <div className="hidden md:flex gap-6 items-center font-sans font-medium text-sm">
          <Link href="/how-it-works" className="hover:text-accent transition-colors">How it Works</Link>
          <Link href="/pricing" className="hover:text-accent transition-colors">Pricing</Link>
          <Link href="/about" className="hover:text-accent transition-colors">About</Link>
          <Link href="/become-a-tutor" className="hover:text-accent transition-colors">Become a Tutor</Link>
        </div>
        <div className="flex gap-4 items-center text-sm">
          <Link href="/login" className="font-sans font-medium hover:text-accent transition-colors">
            Log In
          </Link>
          <Link href="/signup" className="bg-accent text-slate-900 px-4 py-2 rounded-md font-bold hover:bg-white transition-colors">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
