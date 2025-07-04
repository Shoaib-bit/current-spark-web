
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Home, Building, Smartphone, AlertTriangle } from 'lucide-react';

const ServicesPreview = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential',
      description: 'Complete home electrical solutions from wiring to smart home installations.',
      features: ['Electrical repairs', 'Panel upgrades', 'Outlet installation', 'Safety inspections']
    },
    {
      icon: Building,
      title: 'Commercial',
      description: 'Professional electrical services for businesses and commercial properties.',
      features: ['Building wiring', 'Lighting systems', 'Power distribution', 'Code compliance']
    },
    {
      icon: Smartphone,
      title: 'Smart Technology',
      description: 'Modern smart home and automation solutions for the connected lifestyle.',
      features: ['Smart switches', 'Home automation', 'Security systems', 'Energy monitoring']
    },
    {
      icon: AlertTriangle,
      title: 'Emergency Services',
      description: '24/7 emergency response for urgent electrical issues and power outages.',
      features: ['Power outages', 'Electrical faults', 'Safety hazards', 'Urgent repairs']
    }
  ];

  return (
    <section className="py-20 bg-eod-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-eod-charcoal mb-4">
            Our Services
          </h2>
          <p className="text-lg text-eod-charcoal/70 max-w-2xl mx-auto">
            From residential repairs to commercial installations, we provide comprehensive electrical solutions for all your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="bg-eod-yellow/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-eod-yellow/20 transition-colors">
                  <service.icon className="h-8 w-8 text-eod-yellow" />
                </div>
                <CardTitle className="text-xl font-bold text-eod-charcoal">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-eod-charcoal/70 mb-4 text-center">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-eod-charcoal/60">
                      <div className="w-1.5 h-1.5 bg-eod-yellow rounded-full mr-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            asChild
            size="lg"
            className="bg-eod-yellow hover:bg-eod-yellow/90 text-eod-charcoal font-semibold px-8 py-4 rounded-lg transition-all hover:scale-105"
          >
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
