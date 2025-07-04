
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Linkedin,
  Instagram,
  Youtube,
  Send
} from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted');
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['Chicago, IL', 'Serving Chicagoland Area']
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['(312) 555-0100', '24/7 Emergency Line']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['hello@eodinc.com', 'info@eodinc.com']
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon-Fri: 7AM-7PM', 'Emergency: 24/7']
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-eod-charcoal to-eod-charcoal/90 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in">
              Ready to power up your project? Get in touch with Chicago's premier electrical service team.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="animate-slide-in-left">
                <Card className="bg-white border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-eod-charcoal flex items-center space-x-2">
                      <Send className="h-6 w-6 text-eod-yellow" />
                      <span>Send Us a Message</span>
                    </CardTitle>
                    <CardDescription className="text-eod-charcoal/70">
                      Fill out the form below and we'll get back to you within 24 hours.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName" className="text-eod-charcoal font-medium">First Name</Label>
                          <Input 
                            id="firstName" 
                            placeholder="John" 
                            className="border-eod-accent-gray focus:border-eod-yellow"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName" className="text-eod-charcoal font-medium">Last Name</Label>
                          <Input 
                            id="lastName" 
                            placeholder="Doe" 
                            className="border-eod-accent-gray focus:border-eod-yellow"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-eod-charcoal font-medium">Email</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="john@example.com" 
                          className="border-eod-accent-gray focus:border-eod-yellow"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-eod-charcoal font-medium">Phone</Label>
                        <Input 
                          id="phone" 
                          type="tel" 
                          placeholder="(312) 555-0123" 
                          className="border-eod-accent-gray focus:border-eod-yellow"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="service" className="text-eod-charcoal font-medium">Service Needed</Label>
                        <select 
                          id="service" 
                          className="w-full h-10 px-3 py-2 border border-eod-accent-gray rounded-md focus:border-eod-yellow focus:outline-none focus:ring-2 focus:ring-eod-yellow/20"
                        >
                          <option value="">Select a Service</option>
                          <option value="residential">Residential Services</option>
                          <option value="commercial">Commercial Services</option>
                          <option value="smart-home">Smart Home Solutions</option>
                          <option value="emergency">Emergency Services</option>
                          <option value="consultation">Consultation</option>
                        </select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-eod-charcoal font-medium">Message</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Tell us about your electrical needs..." 
                          rows={4}
                          className="border-eod-accent-gray focus:border-eod-yellow resize-none"
                        />
                      </div>
                      
                      <Button 
                        type="submit"
                        className="w-full bg-eod-yellow hover:bg-eod-yellow/90 text-eod-charcoal font-semibold py-3 rounded-lg transition-all hover:scale-105"
                      >
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="animate-slide-in-right">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold text-eod-charcoal mb-6">Get In Touch</h2>
                    <p className="text-lg text-eod-charcoal/70 mb-8">
                      Have questions about our services or need immediate assistance? We're here to help!
                    </p>
                  </div>

                  {/* Contact Info Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {contactInfo.map((info) => (
                      <Card key={info.title} className="bg-eod-light-gray border-0 hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="bg-eod-yellow/10 p-3 rounded-lg">
                              <info.icon className="h-6 w-6 text-eod-yellow" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-eod-charcoal mb-2">{info.title}</h3>
                              {info.details.map((detail, index) => (
                                <p key={index} className="text-eod-charcoal/70 text-sm">{detail}</p>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div>
                    <h3 className="font-semibold text-eod-charcoal mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                      {socialLinks.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          className="bg-eod-yellow/10 p-3 rounded-lg hover:bg-eod-yellow/20 transition-colors group"
                          aria-label={social.label}
                        >
                          <social.icon className="h-6 w-6 text-eod-yellow group-hover:scale-110 transition-transform" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-eod-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-eod-charcoal mb-4">
                Our Service Area
              </h2>
              <p className="text-lg text-eod-charcoal/70 max-w-2xl mx-auto">
                Proudly serving Chicago and the surrounding Chicagoland area with reliable electrical services.
              </p>
            </div>
            
            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl shadow-xl h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-eod-yellow mx-auto mb-4" />
                <h3 className="text-xl font-bold text-eod-charcoal mb-2">Interactive Map</h3>
                <p className="text-eod-charcoal/60">Google Maps integration placeholder</p>
                <p className="text-sm text-eod-charcoal/50 mt-2">Chicago, IL & Chicagoland Area</p>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency CTA */}
        <section className="py-16 bg-eod-charcoal text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Need Emergency Service?
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Our emergency team is available 24/7 for urgent electrical issues.
            </p>
            <Button 
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-all hover:scale-105"
            >
              Call Emergency Line: (312) 555-0100
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
