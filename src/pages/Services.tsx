
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Building, 
  Smartphone, 
  AlertTriangle, 
  Zap, 
  Shield, 
  Wrench,
  Lightbulb,
  Settings,
  Battery
} from 'lucide-react';

const Services = () => {
  const serviceCategories = [
    {
      icon: Home,
      title: 'Residential Services',
      description: 'Complete electrical solutions for your home',
      services: [
        'Electrical panel upgrades and installations',
        'Outlet and switch installation/repair',
        'Ceiling fan and light fixture installation',
        'Home rewiring and circuit installation',
        'GFCI outlet installation',
        'Electrical safety inspections',
        'Smoke detector installation',
        'Landscape and outdoor lighting'
      ]
    },
    {
      icon: Building,
      title: 'Commercial Services',
      description: 'Professional electrical services for businesses',
      services: [
        'Office building electrical systems',
        'Retail store lighting design',
        'Industrial electrical installations',
        'Code compliance and inspections',
        'Electrical maintenance programs',
        'Power distribution systems',
        'Emergency lighting systems',
        'Electrical troubleshooting'
      ]
    },
    {
      icon: Smartphone,
      title: 'Smart Home Solutions',
      description: 'Modern automation and smart technology',
      services: [
        'Smart switch and dimmer installation',
        'Home automation systems',
        'Smart thermostat installation',
        'Security system wiring',
        'Smart doorbell and camera setup',
        'Whole-home surge protection',
        'USB outlet installation',
        'Electric vehicle charging stations'
      ]
    },
    {
      icon: AlertTriangle,
      title: 'Emergency Services',
      description: '24/7 urgent electrical repairs',
      services: [
        'Power outage diagnosis and repair',
        'Electrical fire prevention',
        'Circuit breaker replacement',
        'Emergency panel repairs',
        'Electrical safety hazard removal',
        'Storm damage electrical repair',
        'Urgent wiring issues',
        'Emergency generator installation'
      ]
    }
  ];

  const additionalServices = [
    {
      icon: Lightbulb,
      title: 'Lighting Design',
      description: 'Custom lighting solutions for any space'
    },
    {
      icon: Settings,
      title: 'Electrical Maintenance',
      description: 'Preventive maintenance programs'
    },
    {
      icon: Battery,
      title: 'Backup Power',
      description: 'Generator and backup power systems'
    },
    {
      icon: Shield,
      title: 'Safety Inspections',
      description: 'Comprehensive electrical safety audits'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-eod-charcoal to-eod-charcoal/90 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Professional Electrical Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in">
              From residential repairs to commercial installations, we provide comprehensive electrical solutions throughout the Chicago area.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-eod-yellow" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-eod-yellow" />
                <span>24/7 Emergency Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <Wrench className="h-5 w-5 text-eod-yellow" />
                <span>Expert Technicians</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-eod-charcoal mb-4">
                Our Service Categories
              </h2>
              <p className="text-lg text-eod-charcoal/70 max-w-2xl mx-auto">
                We specialize in a wide range of electrical services to meet all your residential and commercial needs.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {serviceCategories.map((category, index) => (
                <Card 
                  key={category.title}
                  className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4">
                      <div className="bg-eod-yellow/10 p-3 rounded-lg group-hover:bg-eod-yellow/20 transition-colors">
                        <category.icon className="h-8 w-8 text-eod-yellow" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold text-eod-charcoal">{category.title}</CardTitle>
                        <CardDescription className="text-eod-charcoal/70 mt-1">
                          {category.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.services.map((service) => (
                        <li key={service} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-eod-yellow rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-eod-charcoal/80">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20 bg-eod-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-eod-charcoal mb-4">
                Additional Specialties
              </h2>
              <p className="text-lg text-eod-charcoal/70 max-w-2xl mx-auto">
                We also offer specialized services to enhance your electrical systems and ensure optimal performance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalServices.map((service, index) => (
                <Card 
                  key={service.title}
                  className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-4">
                    <div className="bg-eod-yellow/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-eod-yellow/20 transition-colors">
                      <service.icon className="h-8 w-8 text-eod-yellow" />
                    </div>
                    <CardTitle className="text-xl font-bold text-eod-charcoal">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-eod-charcoal/70">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-eod-charcoal text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today for a free consultation and quote. Our expert team is ready to handle all your electrical needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button 
                asChild
                size="lg"
                className="bg-eod-yellow hover:bg-eod-yellow/90 text-eod-charcoal font-semibold px-8 py-4 rounded-lg transition-all hover:scale-105"
              >
                <Link to="/contact">Request a Quote</Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-eod-yellow text-eod-yellow hover:bg-eod-yellow hover:text-eod-charcoal font-semibold px-8 py-4 rounded-lg transition-all"
              >
                <Link to="/contact">Call Now: (312) 555-0100</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
