
import { Link } from 'react-router-dom';
import { Zap, MapPin, Phone, Mail, Linkedin, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-eod-charcoal text-white">
      {/* We Are The Current CTA Section */}
      <div className="bg-eod-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-eod-charcoal mb-4">
              We Are The Current
            </h2>
            <p className="text-lg text-eod-charcoal/80 mb-6 max-w-2xl mx-auto">
              Powering Chicago's communities, one connection at a time. Discover how we're electrifying the future through innovation, education, and impact.
            </p>
            <Button 
              asChild
              className="bg-eod-charcoal hover:bg-eod-charcoal/90 text-eod-yellow font-semibold px-8 py-3 rounded-lg transition-all hover:scale-105"
            >
              <Link to="/current">See Our Impact</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-eod-yellow p-2 rounded-lg">
                <Zap className="h-6 w-6 text-eod-charcoal" />
              </div>
              <div>
                <div className="font-bold text-xl">EOD Inc.</div>
                <div className="text-sm text-gray-400">Electrician On Demand</div>
              </div>
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              Powering Chicago with innovative electrical solutions. From residential repairs to commercial installations, we're your trusted electrical partner 24/7.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-eod-yellow transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-eod-yellow transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-eod-yellow transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-eod-yellow transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-eod-yellow transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-eod-yellow transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/merchandise" className="text-gray-300 hover:text-eod-yellow transition-colors">
                  Merchandise
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-eod-yellow transition-colors">
                  EOD University
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-eod-yellow mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Chicago, IL<br />
                  Serving Chicagoland Area
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-eod-yellow flex-shrink-0" />
                <span className="text-gray-300 text-sm">(312) 555-0100</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-eod-yellow flex-shrink-0" />
                <span className="text-gray-300 text-sm">hello@eodinc.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Electrician On Demand Inc. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-eod-yellow transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-eod-yellow transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
