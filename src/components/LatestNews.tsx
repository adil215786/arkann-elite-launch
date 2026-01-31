import { motion } from "framer-motion";
import arkannContent from "@/data/arkannContent";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LatestNews = () => {
  const { faqs } = arkannContent;

  return (
    <section id="faqs" className="py-24 lg:py-32 bg-cream">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-gold text-sm tracking-[0.25em] uppercase font-medium mb-4">
            Frequently Asked Questions
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy text-balance">
            Answers for prospective families
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto bg-card rounded-3xl shadow-card p-6 md:p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={`faq-${faq.id}`}>
                <AccordionTrigger className="text-left text-navy">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
