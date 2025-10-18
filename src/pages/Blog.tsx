import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Calendar, User, ArrowRight } from "lucide-react";
import freightTruck from "@/assets/freight-truck.jpg";
import warehouse from "@/assets/warehouse.jpg";
import planningMeeting from "@/assets/planning-meeting.jpg";
import heroImage from "@/assets/hero-port.jpg";

const Blog = () => {
  const posts = [
    {
      title: "The Future of Logistics: AI and Automation",
      excerpt: "Exploring how artificial intelligence and automation are revolutionizing supply chain management and freight forwarding.",
      author: "Sarah Chen",
      date: "March 15, 2025",
      image: heroImage,
      category: "Technology",
    },
    {
      title: "Sustainable Shipping: Reducing Carbon Footprint",
      excerpt: "Best practices for environmentally conscious logistics operations and how we're leading the green shipping movement.",
      author: "Michael Rodriguez",
      date: "March 10, 2025",
      image: freightTruck,
      category: "Sustainability",
    },
    {
      title: "Optimizing Warehouse Operations for Peak Season",
      excerpt: "Strategic approaches to scaling your warehousing capabilities during high-demand periods without compromising efficiency.",
      author: "Emma Thompson",
      date: "March 5, 2025",
      image: warehouse,
      category: "Operations",
    },
    {
      title: "Navigating International Trade Regulations",
      excerpt: "A comprehensive guide to customs requirements and documentation for seamless cross-border shipments.",
      author: "David Park",
      date: "February 28, 2025",
      image: planningMeeting,
      category: "Compliance",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-32 pb-20 bg-navy-dark text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Blog</h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Insights, trends, and expert advice from the world of logistics and supply chain management.
          </p>
        </div>
      </div>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center text-accent font-semibold group-hover:translate-x-2 transition-transform">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
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

export default Blog;
