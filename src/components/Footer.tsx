import { Link } from "react-router-dom";
import { Package, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Package className="h-8 w-8 text-accent" />
              <span className="text-2xl font-bold">SUPPLY</span>
            </div>
            <p className="text-gray-400 text-sm">
              Driving your freight forward with cutting-edge logistics solutions.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-400 hover:text-accent transition-colors text-sm">
                About Us
              </Link>
              <Link to="/services" className="block text-gray-400 hover:text-accent transition-colors text-sm">
                Services
              </Link>
              <Link to="/case-studies" className="block text-gray-400 hover:text-accent transition-colors text-sm">
                Case Studies
              </Link>
              <Link to="/blog" className="block text-gray-400 hover:text-accent transition-colors text-sm">
                Blog
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">Ocean Freight</p>
              <p className="text-gray-400 text-sm">Road & Rail Transport</p>
              <p className="text-gray-400 text-sm">Warehousing</p>
              <p className="text-gray-400 text-sm">International Shipping</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Mail className="h-4 w-4" />
                <span>info@supply-logistics.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <MapPin className="h-4 w-4" />
                <span>123 Logistics Way, Port City</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Supply Logistics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
