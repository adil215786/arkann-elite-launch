import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import arkannLogo from '@/assets/arkann-logo.jpeg';

const navLinks = [
  { label: 'Academics', href: '#academics' },
  { label: 'Islamic Program', href: '#islamic-program' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact', href: '#contact' },
];

const Navigation = () => {
  const mailtoLink = "#request-invite";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-navy/95 backdrop-blur-lg shadow-elevated py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img 
              src={arkannLogo} 
              alt="Arkann Academy" 
              className="h-12 w-auto rounded-lg shadow-soft group-hover:shadow-card transition-shadow duration-300"
            />
            <div className="hidden sm:flex flex-col">
              <span className="text-cream font-serif text-xl font-semibold tracking-wide">
                ARKANN
              </span>
              <span className="text-gold text-xs tracking-[0.3em] uppercase">
                Academy
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-cream/80 hover:text-gold font-medium text-sm tracking-wide uppercase transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="navSolid" size="lg" asChild>
              <a href={mailtoLink}>Request an Invitation</a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-cream p-2 hover:text-gold transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden mt-6 pb-6 border-t border-cream/10"
          >
            <div className="flex flex-col gap-4 pt-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-cream/80 hover:text-gold font-medium text-base tracking-wide uppercase transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <Button variant="navSolid" size="lg" className="mt-4 w-full" asChild>
                <a href={mailtoLink}>Request an Invitation</a>
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Navigation;
