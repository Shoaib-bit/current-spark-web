
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Users, 
  GraduationCap, 
  Heart, 
  Lightbulb,
  Target,
  Award,
  Zap,
  Building,
  Home,
  TrendingUp
} from 'lucide-react';

const Current = () => {
  const impactStats = [
    {
      icon: Users,
      number: '1,000+',
      label: 'Jobs Completed',
      description: 'Electrical projects completed across Chicago'
    },
    {
      icon: Home,
      number: '500+',
      label: 'Homes Powered',
      description: 'Residential properties served'
    },
    {
      icon: Building,
      number: '150+',
      label: 'Businesses Served',
      description: 'Commercial and industrial clients'
    },
    {
      icon: GraduationCap,
      number: '25+',
      label: 'Apprentices Trained',
      description: 'Next generation electricians mentored'
    }
  ];

  const initiatives = [
    {
      icon: GraduationCap,
      title: 'EOD University',
      description: 'Free electrical training and certification programs for Chicago residents, helping build the next generation of skilled electricians.',
      impact: '50+ students enrolled',
      color: 'bg-blue-500'
    },
    {
      icon: Heart,
      title: 'Community Service',
      description: 'Pro bono electrical work for community centers, schools, and nonprofit organizations throughout Chicago.',
      impact: '15 community projects completed',
      color: 'bg-red-500'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Lab',
      description: 'Developing smart home solutions and sustainable electrical technologies for the communities we serve.',
      impact: '3 new technologies developed',
      color: 'bg-purple-500'
    },
    {
      icon: Users,
      title: 'Local Hiring',
      description: 'Committed to hiring locally and providing career opportunities for Chicago residents in the electrical trades.',
      impact: '30+ local jobs created',
      color: 'bg-green-500'
    }
  ];

  const testimonials = [
    {
      name: 'Maria Rodriguez',
      role: 'EOD University Graduate',
      quote: 'The training program changed my life. I went from unemployed to a certified electrician in 6 months.',
      image: Users
    },
    {
      name: 'Chicago Community Center',
      role: 'Nonprofit Partner',
      quote: 'EOD donated their services to rewire our entire facility. Their generosity keeps our programs running.',
      image: Building
    },
    {
      name: 'James Thompson',
      role: 'Local Business Owner',
      quote: 'Not only did they upgrade our electrical system, but they hired three people from our neighborhood.',
      image: Users
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-eod-yellow via-eod-charcoal to-eod-charcoal text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 mb-6">
              <Zap className="h-4 w-4 text-eod-yellow" />
              <span className="text-eod-yellow font-medium text-sm">Community Impact</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              We Are The Current
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-4xl mx-auto animate-fade-in">
              More than electrical services – we're the energy that powers Chicago's communities, 
              drives innovation, and lights the path to a brighter future for everyone.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <Heart className="h-5 w-5 text-eod-yellow" />
                <span>Community First</span>
              </div>
              <div className="flex items-center space-x-2">
                <GraduationCap className="h-5 w-5 text-eod-yellow" />
                <span>Education & Training</span>
              </div>
              <div className="flex items-center space-x-2">
                <Lightbulb className="h-5 w-5 text-eod-yellow" />
                <span>Innovation</span>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-eod-charcoal mb-4">
                Our Impact by the Numbers
              </h2>
              <p className="text-lg text-eod-charcoal/70 max-w-2xl mx-auto">
                Every project we complete, every person we train, and every community we serve adds up to real change.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {impactStats.map((stat, index) => (
                <Card 
                  key={stat.label}
                  className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-4">
                    <div className="bg-eod-yellow/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-eod-yellow/20 transition-colors">
                      <stat.icon className="h-8 w-8 text-eod-yellow" />
                    </div>
                    <div className="text-3xl font-bold text-eod-charcoal mb-2">{stat.number}</div>
                    <CardTitle className="text-lg font-bold text-eod-charcoal">{stat.label}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-eod-charcoal/70">
                      {stat.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Community Initiatives */}
        <section className="py-20 bg-eod-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-eod-charcoal mb-4">
                Powering Communities Through Action
              </h2>
              <p className="text-lg text-eod-charcoal/70 max-w-2xl mx-auto">
                Our commitment goes beyond electrical work. We invest in programs that create lasting change in Chicago's neighborhoods.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {initiatives.map((initiative, index) => (
                <Card 
                  key={initiative.title}
                  className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start space-x-4">
                      <div className={`${initiative.color} p-3 rounded-lg`}>
                        <initiative.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl font-bold text-eod-charcoal mb-2">{initiative.title}</CardTitle>
                        <div className="inline-flex items-center space-x-2 bg-eod-yellow/10 rounded-full px-3 py-1 text-sm">
                          <TrendingUp className="h-3 w-3 text-eod-yellow" />
                          <span className="text-eod-yellow font-medium">{initiative.impact}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-eod-charcoal/70 text-base leading-relaxed">
                      {initiative.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-eod-charcoal mb-4">
                Stories from Our Community
              </h2>
              <p className="text-lg text-eod-charcoal/70 max-w-2xl mx-auto">
                The real measure of our impact comes from the people and communities we serve.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={testimonial.name}
                  className="bg-eod-light-gray border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-eod-yellow/10 w-12 h-12 rounded-full flex items-center justify-center">
                        <testimonial.image className="h-6 w-6 text-eod-yellow" />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-bold text-eod-charcoal">{testimonial.name}</CardTitle>
                        <CardDescription className="text-eod-charcoal/60">{testimonial.role}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <blockquote className="text-eod-charcoal/70 italic">
                      "{testimonial.quote}"
                    </blockquote>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-eod-charcoal text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join the Current
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Whether you're looking for electrical services, want to learn a trade, or partner with us on community initiatives, 
              there's a place for you in the EOD family.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button 
                asChild
                size="lg"
                className="bg-eod-yellow hover:bg-eod-yellow/90 text-eod-charcoal font-semibold px-8 py-4 rounded-lg transition-all hover:scale-105"
              >
                <Link to="/contact">Get Involved</Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-eod-yellow text-eod-yellow hover:bg-eod-yellow hover:text-eod-charcoal font-semibold px-8 py-4 rounded-lg transition-all"
              >
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Current;
