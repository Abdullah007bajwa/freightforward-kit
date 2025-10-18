import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { TrendingUp, Clock, DollarSign } from "lucide-react";
import freightTruck from "@/assets/freight-truck.jpg";
import warehouse from "@/assets/warehouse.jpg";
import planningMeeting from "@/assets/planning-meeting.jpg";

const CaseStudies = () => {
  const cases = [
    {
      title: "Global Tech Expansion",
      client: "TechCorp Global",
      challenge: "Expanding operations to 50+ countries with tight deadlines",
      results: [
        { icon: TrendingUp, label: "40% faster delivery" },
        { icon: Clock, label: "99.2% on-time rate" },
        { icon: DollarSign, label: "25% cost reduction" },
      ],
      image: freightTruck,
    },
    {
      title: "E-commerce Warehouse Optimization",
      client: "RetailMax",
      challenge: "Scaling warehouse operations for peak season demand",
      results: [
        { icon: TrendingUp, label: "300% capacity increase" },
        { icon: Clock, label: "Same-day fulfillment" },
        { icon: DollarSign, label: "35% efficiency gain" },
      ],
      image: warehouse,
    },
    {
      title: "International Supply Chain Redesign",
      client: "ManuFast Industries",
      challenge: "Optimizing multi-modal transportation across 3 continents",
      results: [
        { icon: TrendingUp, label: "50% transit time reduction" },
        { icon: Clock, label: "Real-time visibility" },
        { icon: DollarSign, label: "30% cost savings" },
      ],
      image: planningMeeting,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-32 pb-20 bg-navy-dark text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Case Studies</h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Real results from real partnerships. See how we've transformed logistics for industry leaders.
          </p>
        </div>
      </div>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {cases.map((caseStudy, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/80 to-transparent" />
                  </div>
                  <div className="p-8 lg:p-12">
                    <p className="text-accent text-sm font-semibold mb-2 uppercase tracking-wider">
                      {caseStudy.client}
                    </p>
                    <h3 className="text-3xl font-bold text-primary mb-4">{caseStudy.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      <span className="font-semibold">Challenge:</span> {caseStudy.challenge}
                    </p>
                    <div className="space-y-4">
                      <p className="font-semibold text-primary">Results:</p>
                      {caseStudy.results.map((result, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <result.icon className="h-6 w-6 text-accent" />
                          <span className="text-muted-foreground">{result.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
