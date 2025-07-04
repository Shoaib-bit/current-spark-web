
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  ShoppingCart, 
  Star,
  Shirt,
  HardHat,
  Coffee,
  Briefcase,
  Zap
} from 'lucide-react';

const Merchandise = () => {
  const products = [
    {
      id: 1,
      name: 'EOD Inc. Premium T-Shirt',
      price: '$25.99',
      rating: 4.8,
      image: Shirt,
      description: 'Comfortable cotton blend t-shirt with the iconic EOD logo',
      colors: ['Black', 'Yellow', 'Navy'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
      id: 2,
      name: 'Professional Work Shirt',
      price: '$35.99',
      rating: 4.9,
      image: Briefcase,
      description: 'Durable work shirt perfect for electricians on the job',
      colors: ['Navy', 'Gray'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
      id: 3,
      name: 'EOD Hard Hat',
      price: '$45.99',
      rating: 4.7,
      image: HardHat,
      description: 'OSHA-compliant hard hat with EOD branding and safety features',
      colors: ['Yellow', 'White'],
      sizes: ['One Size']
    },
    {
      id: 4,
      name: 'EOD Coffee Mug',
      price: '$15.99',
      rating: 4.6,
      image: Coffee,
      description: 'Start your day right with our ceramic coffee mug',
      colors: ['Black', 'Yellow'],
      sizes: ['11oz', '15oz']
    },
    {
      id: 5,
      name: 'Electrician Polo Shirt',
      price: '$42.99',
      rating: 4.8,
      image: Shirt,
      description: 'Professional polo shirt with moisture-wicking fabric',
      colors: ['Navy', 'Black', 'Gray'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
      id: 6,
      name: 'EOD Tool Bag',
      price: '$65.99',
      rating: 4.9,
      image: Briefcase,
      description: 'Heavy-duty tool bag with multiple compartments and EOD branding',
      colors: ['Black', 'Navy'],
      sizes: ['Medium', 'Large']
    }
  ];

  const categories = [
    { name: 'All Products', count: products.length },
    { name: 'Apparel', count: 3 },
    { name: 'Safety Gear', count: 1 },
    { name: 'Accessories', count: 2 }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-eod-charcoal to-eod-charcoal/90 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-eod-yellow/10 rounded-full px-4 py-2 mb-6">
              <Zap className="h-4 w-4 text-eod-yellow" />
              <span className="text-eod-yellow font-medium text-sm">Official Merchandise</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              EOD Inc. Merchandise
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in">
              Show your pride in quality electrical work with our premium branded merchandise. Professional gear for professional electricians.
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-white border-b border-eod-accent-gray/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center space-x-6">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className="px-4 py-2 rounded-lg font-medium transition-colors hover:bg-eod-yellow/10 hover:text-eod-yellow text-eod-charcoal"
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 bg-eod-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-eod-charcoal mb-4">
                Professional Quality Merchandise
              </h2>
              <p className="text-lg text-eod-charcoal/70 max-w-2xl mx-auto">
                From work apparel to safety gear, our merchandise represents the quality and professionalism of the EOD brand.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <Card 
                  key={product.id}
                  className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-4">
                    <div className="bg-eod-light-gray rounded-lg h-48 flex items-center justify-center mb-4 group-hover:bg-eod-yellow/10 transition-colors">
                      <product.image className="h-16 w-16 text-eod-yellow" />
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-lg font-bold text-eod-charcoal">{product.name}</CardTitle>
                      <span className="text-xl font-bold text-eod-yellow">{product.price}</span>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-eod-yellow fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-eod-charcoal/70">({product.rating})</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-eod-charcoal/70 mb-4">
                      {product.description}
                    </CardDescription>
                    
                    <div className="space-y-3 mb-6">
                      <div>
                        <span className="text-sm font-medium text-eod-charcoal">Colors: </span>
                        <span className="text-sm text-eod-charcoal/70">{product.colors.join(', ')}</span>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-eod-charcoal">Sizes: </span>
                        <span className="text-sm text-eod-charcoal/70">{product.sizes.join(', ')}</span>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full bg-eod-yellow hover:bg-eod-yellow/90 text-eod-charcoal font-semibold transition-all hover:scale-105"
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Orders Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-eod-charcoal mb-6">
              Need Custom Orders?
            </h2>
            <p className="text-lg text-eod-charcoal/70 mb-8">
              Looking for bulk orders or custom branding for your electrical business? We offer custom merchandise solutions for contractors and businesses.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button 
                size="lg"
                className="bg-eod-yellow hover:bg-eod-yellow/90 text-eod-charcoal font-semibold px-8 py-4 rounded-lg transition-all hover:scale-105"
              >
                Request Custom Quote
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-eod-yellow text-eod-yellow hover:bg-eod-yellow hover:text-eod-charcoal font-semibold px-8 py-4 rounded-lg transition-all"
              >
                Bulk Order Inquiry
              </Button>
            </div>
          </div>
        </section>

        {/* Shopping Info */}
        <section className="py-16 bg-eod-charcoal text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="bg-eod-yellow/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ShoppingCart className="h-8 w-8 text-eod-yellow" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Free Shipping</h3>
                <p className="text-gray-300 text-sm">On orders over $50 within Chicago area</p>
              </div>
              <div>
                <div className="bg-eod-yellow/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-eod-yellow" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Quality Guarantee</h3>
                <p className="text-gray-300 text-sm">Premium materials and construction</p>
              </div>
              <div>
                <div className="bg-eod-yellow/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-eod-yellow" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Fast Delivery</h3>
                <p className="text-gray-300 text-sm">2-3 business days local delivery</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Merchandise;
