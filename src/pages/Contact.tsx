import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-32 pb-20 bg-navy-dark text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Get in touch with our team. We're here to help with your logistics needs.
          </p>
        </div>
      </div>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Phone className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="font-bold text-primary mb-2">Phone</h3>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Mail className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="font-bold text-primary mb-2">Email</h3>
              <p className="text-muted-foreground">info@supply-logistics.com</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="font-bold text-primary mb-2">Address</h3>
              <p className="text-muted-foreground">123 Logistics Way, Port City, PC 12345</p>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <h2 className="text-3xl font-bold text-primary mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Full Name
                  </label>
                  <Input placeholder="John Doe" required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Email
                  </label>
                  <Input type="email" placeholder="john@example.com" required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Company
                  </label>
                  <Input placeholder="Your Company Name" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell us about your logistics needs..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-accent hover:bg-accent/90" size="lg">
                  Send Message
                </Button>
              </form>
            </Card>

            <div>
              <Card className="p-8 mb-6">
                <h3 className="text-2xl font-bold text-primary mb-4">Business Hours</h3>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-accent" />
                    <div>
                      <p className="font-semibold text-primary">Monday - Friday</p>
                      <p>8:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-accent" />
                    <div>
                      <p className="font-semibold text-primary">Saturday</p>
                      <p>9:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-accent" />
                    <div>
                      <p className="font-semibold text-primary">Sunday</p>
                      <p>Closed</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-navy-dark text-white">
                <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
                <p className="text-gray-400 mb-6">
                  Our 24/7 emergency support team is always available for urgent shipment inquiries.
                </p>
                <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-white">
                  Emergency Support
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
