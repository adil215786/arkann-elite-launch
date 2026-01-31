import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ValuesSection from '@/components/ValuesSection';
import FeaturedCards from '@/components/FeaturedCards';
import PrincipalWelcome from '@/components/PrincipalWelcome';
import LatestNews from '@/components/LatestNews';
import Footer from '@/components/Footer';
import AcademicsSection from '@/components/AcademicsSection';
import AdmissionsSection from '@/components/AdmissionsSection';
import CtaSection from '@/components/CtaSection';
import InvitationForm from '@/components/InvitationForm';

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <ValuesSection />
      <FeaturedCards />
      <AcademicsSection />
      <PrincipalWelcome />
      <AdmissionsSection />
      <CtaSection />
      <InvitationForm />
      <LatestNews />
      <Footer />
    </main>
  );
};

export default Index;
