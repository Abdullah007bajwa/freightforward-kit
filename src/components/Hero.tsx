import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-port.jpg";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 to-navy-dark/50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
              Global<br />Reach
            </h1>
            <p className="text-gray-400 text-lg mb-4">Logistics redefined</p>
          </div>

          <div className="text-right">
            <p className="text-white text-2xl md:text-3xl mb-8 leading-relaxed">
              Drive your freight forward with cutting-edge logistics. We deliver smarter supply chain solutions.
            </p>
            <Link to="/about">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg">
                Ship Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
