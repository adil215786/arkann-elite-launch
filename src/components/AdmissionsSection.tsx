import { motion } from "framer-motion";
import arkannContent from "@/data/arkannContent";

const AdmissionsSection = () => {
  const { enrollment, tuition, schedule, contact } = arkannContent;

  return (
    <section id="admissions" className="py-24 lg:py-32 bg-cream-dark">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-gold text-sm tracking-[0.25em] uppercase font-medium mb-4">
            Getting Started
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy text-balance">
            Contact us to learn more
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="bg-card rounded-3xl p-8 lg:p-10 shadow-card">
            <h3 className="font-serif text-2xl text-navy mb-4">
              How to get started:
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {enrollment.philosophy}
            </p>
            <ol className="space-y-3 text-navy text-sm">
              {enrollment.process.map((step, index) => (
                <li key={step} className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gold text-primary text-xs font-semibold">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-muted-foreground text-sm">
              Programs begin {enrollment.openDate}.
            </p>
          </div>

          <div className="bg-navy rounded-3xl p-8 lg:p-10 text-cream shadow-elevated">
            <h3 className="font-serif text-2xl mb-6">Investment & Contact</h3>
            
            <div className="mb-8 space-y-4">
              <div className="border-l-4 border-gold pl-4">
                <p className="text-cream/90 text-lg font-medium mb-1">Full Time</p>
                <p className="text-cream/70 text-sm mb-2">Covers all academic needs</p>
                <p className="text-gold text-2xl font-semibold">${tuition.amount.toLocaleString()}<span className="text-cream/60 text-base font-normal">/month</span></p>
              </div>
              
              <div className="border-l-4 border-gold pl-4">
                <p className="text-cream/90 text-lg font-medium mb-1">Per Hour Tutoring</p>
                <p className="text-cream/70 text-sm mb-2">By appointment</p>
                <p className="text-gold text-2xl font-semibold">$75<span className="text-cream/60 text-base font-normal">/hour</span></p>
              </div>
            </div>

            <div className="space-y-3 text-cream/85 text-sm border-t border-cream/10 pt-6">
              <p><span className="font-semibold text-gold">Phone:</span> {contact.phoneFormatted}</p>
              <p><span className="font-semibold text-gold">Email:</span> {contact.email}</p>
              <p><span className="font-semibold text-gold">Office hours:</span> {contact.officeHours}</p>
              <p><span className="font-semibold text-gold">Location:</span> {contact.address.full}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsSection;
