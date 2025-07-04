
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowDown, Zap, Shield, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-eod-charcoal via-eod-charcoal/90 to-eod-charcoal/80">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-eod-yellow/10 backdrop-blur-sm border border-eod-yellow/20 rounded-full px-4 py-2 mb-6">
            <Zap className="h-4 w-4 text-eod-yellow" />
            <span className="text-eod-yellow font-medium text-sm">24/7 Emergency Service Available</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Powering Chicago.
            <br />
            <span className="eod-text-gradient">Electrifying the Future.</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Professional electrical services with cutting-edge technology. Licensed, insured, and ready to power your world.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <Button 
              asChild
              size="lg"
              className="bg-eod-yellow hover:bg-eod-yellow/90 text-eod-charcoal font-semibold px-8 py-4 rounded-lg transition-all hover:scale-105 text-lg"
            >
              <Link to="/contact">Book a Service</Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-eod-yellow text-eod-yellow hover:bg-eod-yellow hover:text-eod-charcoal font-semibold px-8 py-4 rounded-lg transition-all hover:scale-105 text-lg"
            >
              <Link to="/current">See Our Impact</Link>
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-colors">
              <Shield className="h-8 w-8 text-eod-yellow mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Licensed & Insured</h3>
              <p className="text-gray-300 text-sm">Fully certified professionals you can trust</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-colors">
              <Clock className="h-8 w-8 text-eod-yellow mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">24/7 Support</h3>
              <p className="text-gray-300 text-sm">Emergency services when you need them most</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-colors">
              <Zap className="h-8 w-8 text-eod-yellow mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Tech-Driven</h3>
              <p className="text-gray-300 text-sm">Modern solutions for modern problems</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-eod-yellow" />
      </div>
    </section>
  );
};

export default Hero;
