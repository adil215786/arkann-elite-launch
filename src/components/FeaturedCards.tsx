import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import academicImage from '@/assets/academic-excellence.jpg';
import communityImage from '@/assets/community-life.jpg';

const cards = [
  {
    title: 'Academic Excellence',
    subtitle: 'Rigorous & Inspiring Curriculum',
    description: 'From STEM initiatives to the humanities, our comprehensive programs challenge students to think critically and creatively, with personalized support every step of the way.',
    image: academicImage,
    cta: 'Explore Academics',
    link: '#academics',
  },
  {
    title: 'Community Life',
    subtitle: 'Beyond the Classroom',
    description: 'Athletics, arts, service projects, and clubs foster lasting friendships and develop well-rounded individuals who lead with empathy and purpose.',
    image: communityImage,
    cta: 'Discover Activities',
    link: '#community',
  },
];

const FeaturedCards = () => {
  return (
    <section id="academics" className="py-24 lg:py-32 bg-cream-dark">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-gold text-sm tracking-[0.25em] uppercase font-medium mb-4">
            Life at Arkann
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy text-balance">
            A Complete Educational Experience
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group"
            >
              <div className="bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500">
                {/* Image */}
                <div className="relative h-64 lg:h-72 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8 lg:p-10">
                  <p className="text-gold text-sm tracking-wider uppercase font-medium mb-2">
                    {card.subtitle}
                  </p>
                  <h3 className="font-serif text-2xl lg:text-3xl text-navy mb-4">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {card.description}
                  </p>
                  <Button variant="goldOutline" className="group/btn">
                    {card.cta}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCards;
