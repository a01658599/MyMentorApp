import type { Metadata } from "next";
import { Playfair_Display, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ChatBubble from "../components/ChatBubble";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-berlin",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-congenial",
});

export const metadata: Metadata = {
  title: "MyMentor MVP",
  description: "Affordable and flexible tutoring for college students",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${nunito.variable} font-sans antialiased bg-background text-slate-800 flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
        <ChatBubble />
      </body>
    </html>
  );
}
