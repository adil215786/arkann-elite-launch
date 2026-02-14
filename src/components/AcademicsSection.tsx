import { motion } from "framer-motion";
import arkannContent from "@/data/arkannContent";

const AcademicsSection = () => {
  const { academics, islamicProgram } = arkannContent;

  return (
    <section id="academics" className="py-24 lg:py-32 bg-cream">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-gold text-sm tracking-[0.25em] uppercase font-medium mb-4">
            Academics
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy text-balance">
            Academic philosophy & approach
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-16">
          <div className="bg-card rounded-3xl p-8 lg:p-10 shadow-card">
            <h3 className="font-serif text-2xl text-navy mb-4">
              {academics.philosophy}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {academics.approach}
            </p>
            <div className="grid grid-cols-2 gap-3 text-sm text-navy">
              {academics.subjects.map((subject) => (
                <div
                  key={subject}
                  className="rounded-full border border-gold/40 px-4 py-2 text-center"
                >
                  {subject}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-navy rounded-3xl p-8 lg:p-10 text-cream shadow-elevated">
            <p className="text-gold text-sm tracking-[0.25em] uppercase font-medium mb-4">
              Assessment
            </p>
            <h3 className="font-serif text-2xl mb-4">
              {academics.assessment.philosophy}
            </h3>
            <ul className="space-y-3 text-cream/85">
              {academics.assessment.methods.map((method) => (
                <li key={method} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-gold shrink-0" />
                  <span>{method}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-cream/85 text-base font-medium">
              Parents will receive weekly progress reports from Prenda
            </p>
            <ul className="mt-4 space-y-2 text-cream/75 text-sm">
              {academics.assessment.progressSupports.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold/90 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div id="islamic-program" className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="bg-card rounded-3xl p-8 lg:p-10 shadow-card">
            <p className="text-gold text-sm tracking-[0.25em] uppercase font-medium mb-4">
              Islamic Program
            </p>
            <h3 className="font-serif text-2xl text-navy mb-4">
              Faith as a daily foundation
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {islamicProgram.faithIntegration}
            </p>
            <div className="space-y-3 text-navy text-sm">
              <p>
                <span className="font-semibold">Qur'an:</span> {islamicProgram.quran.frequency} ·{" "}
                {islamicProgram.quran.approach}
              </p>
              <p>
                <span className="font-semibold">Prayer:</span>{" "}
                {islamicProgram.prayer ? "Daily prayer is part of the routine." : "Prayer is optional."}
              </p>
            </div>
          </div>

          <div className="bg-cream-dark rounded-3xl p-8 lg:p-10 shadow-card">
            <h4 className="font-serif text-2xl text-navy mb-6">
              Islamic Studies Highlights
            </h4>
            <ul className="space-y-4 text-muted-foreground leading-relaxed">
              {islamicProgram.islamicStudies.map((topic) => (
                <li key={topic} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-gold shrink-0" />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicsSection;
