import { ArrowRight, BookOpen, Star } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "Computer Science Student",
      quote: "MyMentor helped me pass my data structures class! The tutors are so knowledgeable and patient.",
      initials: "SJ"
    },
    {
      name: "David Chen",
      role: "Graduate Student",
      quote: "I found an amazing statistics tutor who helped me finally understand the complex data models for my thesis. Highly recommend!",
      initials: "DC"
    },
    {
      name: "Emily Rodriguez",
      role: "Biology Major",
      quote: "The flexibility of scheduling and affordable rates make this the best tutoring platform I've used.",
      initials: "ER"
    }
  ];

  return (
    <div className="flex-1 flex flex-col pt-20">
      {/* Hero Section */}
      <section className="px-6 py-16 flex flex-col items-center text-center max-w-4xl mx-auto flex-1">
        <div className="bg-primary/10 p-4 rounded-full mb-6">
          <BookOpen className="w-12 h-12 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-6">
          Master Your Skills with MyMentor
        </h1>
        <p className="text-lg md:text-xl text-slate-700 mb-10 max-w-2xl font-sans">
          High-achieving college students sharing their knowledge. Find affordable, flexible tutoring tailored to your needs.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link 
            href="/login" 
            className="bg-primary text-white font-bold py-4 px-8 rounded-full hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
          >
            Get Started <ArrowRight className="w-5 h-5" />
          </Link>
          <Link 
            href="/tutors" 
            className="bg-accent text-slate-900 font-bold py-4 px-8 rounded-full hover:bg-accent/90 transition-all flex items-center justify-center"
          >
            Find a Tutor
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Loved by Students
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our community has to say about their MyMentor experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-md transition-shadow">
                <div className="flex text-amber-400 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 mb-8 flex-1 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
