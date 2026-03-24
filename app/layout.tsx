import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ChatBubble from "../components/ChatBubble";

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
      <body className="font-sans antialiased bg-background text-slate-800 flex flex-col min-h-screen">
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
