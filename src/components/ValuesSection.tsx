import { motion } from "framer-motion";
import arkannContent from "@/data/arkannContent";

const ValuesSection = () => {
  const { whoIsArkannFor, about } = arkannContent;

  return (
    <section id="about" className="py-24 lg:py-32 bg-cream">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-gold text-sm tracking-[0.25em] uppercase font-medium mb-4">
            {whoIsArkannFor.sectionTitle}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy mb-6 text-balance">
            {whoIsArkannFor.header}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-card rounded-3xl p-8 lg:p-10 shadow-card"
          >
            <h3 className="font-serif text-2xl text-navy mb-6">
              Families who choose Arkann value:
            </h3>
            <ul className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              {whoIsArkannFor.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-gold shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-navy text-cream rounded-3xl p-8 lg:p-10 shadow-elevated"
          >
            <p className="text-gold text-sm tracking-[0.25em] uppercase font-medium mb-4">
              A Thoughtful Fit
            </p>
            <p className="text-cream/85 text-lg leading-relaxed">
              {whoIsArkannFor.disclaimer}
            </p>
          </motion.div>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="bg-cream-dark rounded-3xl p-8 lg:p-10 shadow-card">
            <p className="text-gold text-sm tracking-[0.25em] uppercase font-medium mb-4">
              Mission & Vision
            </p>
            <h3 className="font-serif text-2xl text-navy mb-4">Our mission</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {about.mission}
            </p>
            <h4 className="font-serif text-xl text-navy mb-3">Our vision</h4>
            <p className="text-muted-foreground leading-relaxed">
              {about.vision}
            </p>
          </div>

          <div className="bg-card rounded-3xl p-8 lg:p-10 shadow-card">
            <p className="text-gold text-sm tracking-[0.25em] uppercase font-medium mb-4">
              Core Values
            </p>
            <ul className="space-y-4 text-muted-foreground leading-relaxed">
              {about.coreValues.map((value) => (
                <li key={value.name} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-gold shrink-0" />
                  <span>
                    <span className="font-semibold text-navy">{value.name}</span>
                    {value.translation ? ` — ${value.translation}` : ""}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
