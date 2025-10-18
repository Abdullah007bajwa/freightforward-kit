import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "Supply transformed our logistics operations. Their efficiency and reliability are unmatched.",
    author: "Sarah Chen",
    position: "Supply Chain Director, TechCorp Global",
  },
  {
    quote: "Outstanding service and real-time tracking gave us complete visibility of our shipments.",
    author: "Michael Rodriguez",
    position: "Operations Manager, RetailMax",
  },
  {
    quote: "Cost savings were significant, and the team's expertise made our international expansion seamless.",
    author: "Emma Thompson",
    position: "CEO, Global Ventures Inc",
  },
  {
    quote: "The warehousing solutions and distribution network exceeded our expectations completely.",
    author: "David Park",
    position: "Logistics Head, ManuFast Industries",
  },
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 bg-navy-dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-gray-400 mb-2">Hear from our clients</p>
          <h2 className="text-4xl md:text-5xl font-bold">Client Success Stories</h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Card className="bg-navy-light border-white/10 p-12 text-center">
            <Quote className="h-12 w-12 text-accent mx-auto mb-6" />
            <p className="text-xl md:text-2xl mb-6 leading-relaxed">
              "{testimonials[current].quote}"
            </p>
            <div className="border-t border-white/10 pt-6">
              <p className="font-bold text-lg">{testimonials[current].author}</p>
              <p className="text-gray-400">{testimonials[current].position}</p>
            </div>
          </Card>

          <div className="flex justify-center items-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="bg-navy-light border-white/10 hover:bg-accent hover:border-accent text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === current ? "w-8 bg-accent" : "w-2 bg-white/30"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="bg-navy-light border-white/10 hover:bg-accent hover:border-accent text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
