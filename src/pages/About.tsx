import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Award, Users, Globe, TrendingUp } from "lucide-react";
import warehouse from "@/assets/warehouse.jpg";

const About = () => {
  const stats = [
    { icon: Globe, value: "150+", label: "Countries Served" },
    { icon: Users, value: "5000+", label: "Happy Clients" },
    { icon: Award, value: "25+", label: "Years Experience" },
    { icon: TrendingUp, value: "98%", label: "On-Time Delivery" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-32 pb-20 bg-navy-dark text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Leading the logistics industry with innovation, reliability, and excellence.
          </p>
        </div>
      </div>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">
                Transforming Global Supply Chains
              </h2>
              <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
                Since our founding, Supply has been at the forefront of logistics innovation. 
                We've built our reputation on delivering excellence, reliability, and cutting-edge solutions 
                to businesses around the world.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our team of logistics experts combines decades of industry experience with the latest 
                technology to ensure your freight moves efficiently, safely, and on time, every time.
              </p>
            </div>
            <div>
              <img
                src={warehouse}
                alt="Warehouse operations"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy-dark text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                <p className="text-5xl font-bold mb-2">{stat.value}</p>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
