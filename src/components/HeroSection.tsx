import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import heroVideo from '@/assets/hero-video.mp4';
import arkannContent from '@/data/arkannContent';

const HeroSection = () => {
  const { hero, siteInfo } = arkannContent;
  const mailtoLink = "#request-invite";
  const campusImage = "/icbr-campus.png";

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
              Full Time In Person Academy • Campus Inside the Islamic Center of Boca Raton
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
                className="text-cream/85 text-base md:text-xl max-w-2xl lg:mx-0 mx-auto mb-9 leading-relaxed"
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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative mx-auto w-full max-w-[300px] lg:max-w-[330px]"
          >
            <div className="absolute -inset-2 rounded-[1.6rem] bg-gradient-to-br from-gold/30 via-cream/15 to-transparent blur-md" />
            <div className="relative overflow-hidden rounded-[1.6rem] border border-cream/35 bg-navy/45 p-2 shadow-elevated">
              <img
                src={campusImage}
                alt="Arkann Academy campus at the Islamic Center of Boca Raton"
                className="h-[124px] w-full rounded-[1.1rem] object-cover md:h-[184px]"
              />
              <div className="pointer-events-none absolute inset-x-2 bottom-2 rounded-xl border border-cream/35 bg-navy/75 px-2.5 py-1.5 backdrop-blur-sm md:inset-x-3 md:bottom-3 md:px-3 md:py-2">
                <p className="text-gold text-[9px] uppercase tracking-[0.16em]">
                  Campus Location
                </p>
                <p className="text-cream text-[10px] md:text-xs">
                  Inside the Islamic Center of Boca Raton (ICBR)
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
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
