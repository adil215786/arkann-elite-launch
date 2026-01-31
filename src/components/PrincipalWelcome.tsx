import { motion } from "framer-motion";
import arkannContent from "@/data/arkannContent";
import communityImage from "@/assets/community-life.jpg";

const PrincipalWelcome = () => {
  const { parentConcerns } = arkannContent;

  return (
    <section className="py-24 lg:py-32 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-15">
        <img
          src={communityImage}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/70" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold text-sm tracking-[0.25em] uppercase font-medium mb-4">
              Parent Concerns
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream mb-8 leading-tight">
              {parentConcerns.header}
            </h2>
            <div className="space-y-6 text-cream/85 text-lg leading-relaxed">
              {parentConcerns.body.split("\n\n").map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-cream/10 rounded-3xl p-8 lg:p-10 backdrop-blur-sm border border-cream/10"
          >
            <h3 className="font-serif text-2xl text-cream mb-6">
              What families appreciate
            </h3>
            <div className="flex flex-wrap gap-3">
              {parentConcerns.features.map((feature) => (
                <span
                  key={feature}
                  className="px-4 py-2 rounded-full bg-cream/10 text-cream/80 text-sm"
                >
                  {feature}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalWelcome;
