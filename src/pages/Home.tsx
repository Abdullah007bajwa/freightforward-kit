import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeatureCards from "@/components/FeatureCards";
import TrustedClients from "@/components/TrustedClients";
import TestimonialSlider from "@/components/TestimonialSlider";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import planningMeeting from "@/assets/planning-meeting.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <FeatureCards />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent text-sm font-semibold mb-2 uppercase tracking-wider">
                Our core purpose
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                Driving reliability: streamlining freight, boosting business success
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Supply leads the way in safe and smooth cargo moves, always working to meet your needs. 
                We blend top tech, real care, and years of skill for results you can trust, shipment after shipment.
              </p>
              <Link to="/about">
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src={planningMeeting}
                alt="Team meeting"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <TrustedClients />
      <TestimonialSlider />
      <Footer />
    </div>
  );
};

export default Home;
