import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ValuesSection from '@/components/ValuesSection';
import FeaturedCards from '@/components/FeaturedCards';
import PrincipalWelcome from '@/components/PrincipalWelcome';
import LatestNews from '@/components/LatestNews';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <ValuesSection />
      <FeaturedCards />
      <PrincipalWelcome />
      <LatestNews />
      <Footer />
    </main>
  );
};

export default Index;
