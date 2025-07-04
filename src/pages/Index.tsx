
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ServicesPreview from '@/components/ServicesPreview';
import AppTeaser from '@/components/AppTeaser';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ServicesPreview />
        <AppTeaser />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
