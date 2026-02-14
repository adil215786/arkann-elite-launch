import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import heroVideo from '@/assets/hero-video.mp4';
import arkannContent from '@/data/arkannContent';

const HeroSection = () => {
  const { hero, siteInfo } = arkannContent;
  const mailtoLink = "#request-invite";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 lg:pt-0">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 gradient-hero-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-5 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center"
        >
          <div>
            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-gold text-sm md:text-base tracking-[0.25em] uppercase font-medium mb-6"
            >
              {siteInfo.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="inline-flex items-center rounded-full border border-cream/30 bg-navy/45 px-4 py-2 text-[11px] md:text-sm uppercase tracking-[0.14em] text-cream mb-7"
            >
              Learning Center for Homeschooled Students • Boca Raton, FL
            </motion.p>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="font-serif text-3xl md:text-5xl lg:text-6xl text-cream font-semibold leading-tight mb-7 text-balance"
            >
              {hero.headline}
            </motion.h1>

            {hero.subheadline && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="text-cream/85 text-base md:text-xl max-w-3xl mx-auto mb-9 leading-relaxed px-4"
              >
                {hero.subheadline}
              </motion.p>
            )}

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-col items-center gap-4 justify-center sm:flex-row"
            >
              <Button variant="hero" size="xl" asChild>
                <a href={mailtoLink}>{hero.cta.text}</a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-cream/60"
        >
          <span className="text-xs uppercase tracking-widest">Discover</span>
          <div className="w-px h-12 bg-gradient-to-b from-cream/60 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
