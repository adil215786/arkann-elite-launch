import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import principalImage from '@/assets/principal-portrait.jpg';

const PrincipalWelcome = () => {
  return (
    <section className="py-24 lg:py-32 bg-navy relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-gold/5 -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Gold accent frame */}
              <div className="absolute -inset-4 border-2 border-gold/30 rounded-3xl" />
              <div className="absolute -inset-8 border border-gold/10 rounded-[2rem]" />
              
              <img
                src={principalImage}
                alt="Dr. Sarah Mitchell, Head of School"
                className="w-full rounded-2xl shadow-elevated relative z-10"
              />
              
              {/* Name Badge */}
              <div className="absolute -bottom-6 left-6 right-6 bg-card rounded-xl p-4 shadow-card z-20">
                <p className="font-serif text-lg text-navy font-semibold">
                  Dr. Sarah Mitchell
                </p>
                <p className="text-gold text-sm tracking-wide">
                  Head of School
                </p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Quote className="w-12 h-12 text-gold/40 mb-6" />
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream mb-8 leading-tight">
              A Message from{' '}
              <span className="text-gold">Our Principal</span>
            </h2>

            <div className="space-y-6 text-cream/80 text-lg leading-relaxed">
              <p>
                At Arkann Academy, we believe that every child possesses unique gifts 
                waiting to be discovered and nurtured. Our role as educators is to 
                create an environment where curiosity flourishes, character develops, 
                and dreams take flight.
              </p>
              <p>
                With a legacy of academic distinction and a forward-thinking approach 
                to education, we prepare students not just for the challenges of 
                tomorrow, but to become the leaders who will shape it.
              </p>
              <p className="italic text-gold-light">
                "Education is not the filling of a pail, but the lighting of a fire."
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-cream/10">
              <p className="text-cream text-sm tracking-wide">
                Join us for a campus visit and discover the Arkann difference.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalWelcome;
