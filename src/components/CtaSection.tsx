import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import arkannContent from "@/data/arkannContent";

const CtaSection = () => {
  const { ctaSection } = arkannContent;
  const mailtoLink = "#request-invite";

  return (
    <section className="py-20 bg-navy">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="bg-cream/10 rounded-3xl p-8 lg:p-12 text-center shadow-elevated"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-cream mb-4">
            {ctaSection.header}
          </h2>
          <p className="text-cream/75 text-lg max-w-2xl mx-auto mb-8">
            {ctaSection.body}
          </p>
          <Button variant="hero" size="xl" asChild>
            <a href={mailtoLink}>{ctaSection.buttonText}</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
