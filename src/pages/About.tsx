
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Award, 
  Lightbulb, 
  Calendar, 
  Target,
  Heart,
  Zap,
  Building,
  GraduationCap
} from 'lucide-react';

const About = () => {
  const milestones = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'EOD Inc. was established with a vision to revolutionize electrical services in Chicago'
    },
    {
      year: '2021',
      title: '500+ Jobs Completed',
      description: 'Reached our first major milestone, serving hundreds of satisfied customers'
    },
    {
      year: '2022',
      title: 'Commercial Expansion',
      description: 'Expanded services to include large-scale commercial and industrial projects'
    },
    {
      year: '2023',
      title: '1,000+ Jobs Completed',
      description: 'Celebrated completing over 1,000 successful electrical projects'
    },
    {
      year: '2024',
      title: 'Mobile App Launch',
      description: 'Launching our revolutionary on-demand electrician app platform'
    }
  ];

  const values = [
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We embrace cutting-edge technology to deliver superior electrical solutions'
    },
    {
      icon: Heart,
      title: 'Community First',
      description: 'Committed to powering and uplifting the Chicago community we serve'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in every project, big or small'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working together with clients, partners, and our team for shared success'
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
              About EOD Inc.
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in">
              We're more than just electricians – we're innovators, community builders, and the driving force behind Chicago's electrical future.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="animate-slide-in-left">
                <div className="bg-eod-yellow/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-eod-yellow" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-eod-charcoal mb-6">Our Mission</h2>
                <p className="text-lg text-eod-charcoal/70 mb-6">
                  To revolutionize the electrical services industry by combining traditional craftsmanship with innovative technology, 
                  providing reliable, efficient, and accessible electrical solutions that power Chicago's growth and prosperity.
                </p>
                <p className="text-lg text-eod-charcoal/70">
                  We believe every home and business deserves safe, reliable electrical systems, and every electrician deserves 
                  fair opportunities to showcase their skills and build their career.
                </p>
              </div>
              <div className="animate-fade-in">
                <div className="bg-eod-light-gray rounded-2xl h-64 flex items-center justify-center">
                  <div className="text-center">
                    <Building className="h-16 w-16 text-eod-yellow mx-auto mb-4" />
                    <p className="text-eod-charcoal/60">Mission Photo Placeholder</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 animate-fade-in">
                <div className="bg-eod-light-gray rounded-2xl h-64 flex items-center justify-center">
                  <div className="text-center">
                    <Lightbulb className="h-16 w-16 text-eod-yellow mx-auto mb-4" />
                    <p className="text-eod-charcoal/60">Vision Photo Placeholder</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 animate-slide-in-right">
                <div className="bg-eod-yellow/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Lightbulb className="h-8 w-8 text-eod-yellow" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-eod-charcoal mb-6">Our Vision</h2>
                <p className="text-lg text-eod-charcoal/70 mb-6">
                  To be Chicago's leading electrical services company, known for innovation, reliability, and community impact. 
                  We envision a future where electrical services are seamlessly integrated with technology, making them more 
                  accessible, efficient, and sustainable.
                </p>
                <p className="text-lg text-eod-charcoal/70">
                  Through our mobile platform and commitment to excellence, we're building the foundation for the next 
                  generation of electrical professionals and the communities they serve.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20 bg-eod-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-eod-charcoal mb-4">
                Our Values
              </h2>
              <p className="text-lg text-eod-charcoal/70 max-w-2xl mx-auto">
                These core values guide everything we do and shape how we serve our community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card 
                  key={value.title}
                  className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-4">
                    <div className="bg-eod-yellow/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-eod-yellow/20 transition-colors">
                      <value.icon className="h-8 w-8 text-eod-yellow" />
                    </div>
                    <CardTitle className="text-xl font-bold text-eod-charcoal">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-eod-charcoal/70">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-eod-charcoal mb-4">
                Our Journey
              </h2>
              <p className="text-lg text-eod-charcoal/70 max-w-2xl mx-auto">
                From our founding to becoming Chicago's premier electrical service provider.
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-eod-yellow"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className="relative flex items-start space-x-6">
                    <div className="bg-eod-yellow w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-10">
                      <Calendar className="h-6 w-6 text-eod-charcoal" />
                    </div>
                    <div className="flex-1 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                      <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-eod-yellow">
                        <div className="flex items-center space-x-4 mb-2">
                          <span className="text-2xl font-bold text-eod-yellow">{milestone.year}</span>
                        </div>
                        <h3 className="text-xl font-bold text-eod-charcoal mb-2">{milestone.title}</h3>
                        <p className="text-eod-charcoal/70">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-eod-charcoal text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Whether you're a customer, partner, or future team member, we'd love to connect with you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button 
                asChild
                size="lg"
                className="bg-eod-yellow hover:bg-eod-yellow/90 text-eod-charcoal font-semibold px-8 py-4 rounded-lg transition-all hover:scale-105"
              >
                <Link to="/contact">Get In Touch</Link>
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

export default About;
