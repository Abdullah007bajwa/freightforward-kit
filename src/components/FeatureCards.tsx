import { Truck, Network, DollarSign } from "lucide-react";
import { Card } from "@/components/ui/card";
import freightTruck from "@/assets/freight-truck.jpg";
import warehouse from "@/assets/warehouse.jpg";
import planningMeeting from "@/assets/planning-meeting.jpg";

const features = [
  {
    icon: Truck,
    title: "Freight solutions",
    description: "We move goods, track each load, and help you reach new markets with ease.",
    image: freightTruck,
  },
  {
    icon: Network,
    title: "Chain planning",
    description: "We align routes, storage, and delivery to keep your cargo safe, swift, and on track.",
    image: warehouse,
  },
  {
    icon: DollarSign,
    title: "Cost optimization",
    description: "We help you save costs and boost efficiency at every step in your transport plan.",
    image: planningMeeting,
  },
];

const FeatureCards = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Driving forward
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We move freight fast, safe, and smart for your supply chain success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-shadow duration-300 border-none"
            >
              <div className="relative h-64">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/50 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <feature.icon className="h-12 w-12 text-accent mb-3" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
