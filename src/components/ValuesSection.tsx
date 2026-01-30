import { motion } from 'framer-motion';
import { BookOpen, Heart, Rocket } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Islamic Foundation',
    description: 'Rooted in Quranic values and Prophetic traditions, we nurture taqwa and strong moral character in every student.',
  },
  {
    icon: BookOpen,
    title: 'Academic Excellence',
    description: 'Rigorous curriculum blending Islamic studies with modern academics prepares students for success in this life and the Hereafter.',
  },
  {
    icon: Rocket,
    title: 'Future Leadership',
    description: 'Developing confident Muslim leaders who excel in their fields while serving their communities and the Ummah.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

const ValuesSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-cream">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <p className="text-gold text-sm tracking-[0.25em] uppercase font-medium mb-4">
            The Arkann Difference
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy mb-6 text-balance">
            Where Tradition Meets Innovation
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Our holistic approach to education nurtures the mind, body, and spirit, 
            preparing students not just for exams, but for life.
          </p>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              variants={itemVariants}
              className="text-center group"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-navy/5 mb-8 group-hover:bg-gold/10 transition-colors duration-300">
                <value.icon className="w-10 h-10 text-gold" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl lg:text-2xl text-navy mb-4">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesSection;
