import { Button } from '@/components/ui/button';
import { Smartphone, Clock, DollarSign, MapPin, Zap } from 'lucide-react';

const AppTeaser = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-in-left">
            <div className="inline-flex items-center space-x-2 bg-eod-yellow/10 rounded-full px-4 py-2 mb-6">
              <Smartphone className="h-4 w-4 text-eod-yellow" />
              <span className="text-eod-yellow font-medium text-sm">Coming Soon</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-eod-charcoal mb-6">
              The Future of Electrical Work is in Your Hands
            </h2>
            
            <p className="text-lg text-eod-charcoal/70 mb-8">
              Our revolutionary app connects skilled electricians with on-demand opportunities throughout Chicago. 
              Join the future of electrical services.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <div className="bg-eod-yellow/10 p-2 rounded-lg">
                  <MapPin className="h-5 w-5 text-eod-yellow" />
                </div>
                <div>
                  <h3 className="font-semibold text-eod-charcoal mb-1">On-Demand Jobs</h3>
                  <p className="text-sm text-eod-charcoal/60">Find local electrical work instantly</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-eod-yellow/10 p-2 rounded-lg">
                  <Clock className="h-5 w-5 text-eod-yellow" />
                </div>
                <div>
                  <h3 className="font-semibold text-eod-charcoal mb-1">Track Hours</h3>
                  <p className="text-sm text-eod-charcoal/60">Digital time tracking and reporting</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-eod-yellow/10 p-2 rounded-lg">
                  <DollarSign className="h-5 w-5 text-eod-yellow" />
                </div>
                <div>
                  <h3 className="font-semibold text-eod-charcoal mb-1">Get Paid Fast</h3>
                  <p className="text-sm text-eod-charcoal/60">Quick and secure payments</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-eod-yellow/10 p-2 rounded-lg">
                  <Smartphone className="h-5 w-5 text-eod-yellow" />
                </div>
                <div>
                  <h3 className="font-semibold text-eod-charcoal mb-1">Mobile First</h3>
                  <p className="text-sm text-eod-charcoal/60">Everything you need on your phone</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                className="bg-eod-yellow hover:bg-eod-yellow/90 text-eod-charcoal font-semibold px-6 py-3 rounded-lg transition-all hover:scale-105"
              >
                Join the Waitlist
              </Button>
              <Button 
                variant="outline"
                className="border-eod-yellow text-eod-yellow hover:bg-eod-yellow hover:text-eod-charcoal font-semibold px-6 py-3 rounded-lg transition-all"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* App Screenshot Mockup */}
          <div className="relative animate-fade-in">
            <div className="bg-gradient-to-br from-eod-yellow to-eod-charcoal p-1 rounded-3xl shadow-2xl">
              <div className="bg-white rounded-3xl p-6">
                <div className="bg-eod-light-gray rounded-2xl h-96 flex items-center justify-center">
                  <div className="text-center">
                    <Smartphone className="h-16 w-16 text-eod-yellow mx-auto mb-4" />
                    <h3 className="font-bold text-eod-charcoal mb-2">EOD Mobile App</h3>
                    <p className="text-eod-charcoal/60 text-sm">App screenshot preview<br/>coming soon</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-eod-yellow p-3 rounded-full shadow-lg animate-bounce">
              <Zap className="h-6 w-6 text-eod-charcoal" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppTeaser;
