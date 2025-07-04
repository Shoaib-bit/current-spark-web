
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Zap } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Merchandise', href: '/merchandise' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-eod-accent-gray/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-eod-yellow p-2 rounded-lg group-hover:scale-105 transition-transform">
              <Zap className="h-6 w-6 text-eod-charcoal" />
            </div>
            <div>
              <div className="font-bold text-xl text-eod-charcoal">EOD Inc.</div>
              <div className="text-xs text-eod-charcoal/70 font-medium">Electrician On Demand</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-colors hover:text-eod-yellow ${
                  isActive(item.href) 
                    ? 'text-eod-yellow' 
                    : 'text-eod-charcoal'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              asChild
              className="bg-eod-yellow hover:bg-eod-yellow/90 text-eod-charcoal font-semibold px-6 py-2 rounded-lg transition-all hover:scale-105"
            >
              <Link to="/contact">Book Service</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-eod-accent-gray/20 py-4">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium py-2 px-4 rounded-lg transition-colors hover:bg-eod-light-gray ${
                    isActive(item.href) 
                      ? 'text-eod-yellow bg-eod-light-gray' 
                      : 'text-eod-charcoal'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button 
                asChild
                className="bg-eod-yellow hover:bg-eod-yellow/90 text-eod-charcoal font-semibold mx-4 mt-4"
              >
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Book Service</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
