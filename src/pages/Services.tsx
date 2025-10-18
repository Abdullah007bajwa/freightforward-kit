import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Ship, Truck, Warehouse, Globe, FileCheck, Package } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Ship,
      title: "Ocean Freight",
      description: "Comprehensive sea freight solutions for cargo of all sizes. We handle FCL, LCL, and specialized shipments with reliable carrier partnerships worldwide.",
    },
    {
      icon: Truck,
      title: "Road & Rail Transport",
      description: "Efficient ground transportation across continents. Our extensive network ensures your goods reach their destination safely and on schedule.",
    },
    {
      icon: Warehouse,
      title: "Warehousing & Distribution",
      description: "State-of-the-art storage facilities with advanced inventory management. Strategic locations for optimal distribution efficiency.",
    },
    {
      icon: Globe,
      title: "International Shipping",
      description: "Global reach with local expertise. We navigate complex international regulations and ensure seamless cross-border transportation.",
    },
    {
      icon: FileCheck,
      title: "Customs Brokerage",
      description: "Expert customs clearance and documentation services. We handle all regulatory requirements to expedite your shipments.",
    },
    {
      icon: Package,
      title: "Specialized Cargo",
      description: "Tailored solutions for oversized, hazardous, and temperature-controlled cargo. Professional handling for your unique requirements.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-32 pb-20 bg-navy-dark text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Comprehensive logistics solutions tailored to your business needs.
          </p>
        </div>
      </div>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-2xl transition-shadow duration-300 border-primary/20">
                <service.icon className="h-16 w-16 text-accent mb-6" />
                <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to optimize your supply chain?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our services can transform your logistics operations.
          </p>
          <a
            href="/contact"
            className="inline-block bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
