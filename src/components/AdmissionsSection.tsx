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
            Admissions
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy text-balance">
            Enrollment by invitation
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="bg-card rounded-3xl p-8 lg:p-10 shadow-card">
            <h3 className="font-serif text-2xl text-navy mb-4">
              How enrollment works
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
              Applications open on {enrollment.openDate}.
            </p>
            <p className="mt-2 text-muted-foreground text-sm">
              Required documents: {enrollment.requiredDocuments.join(", ")}.
            </p>
          </div>

          <div className="bg-navy rounded-3xl p-8 lg:p-10 text-cream shadow-elevated">
            <h3 className="font-serif text-2xl mb-4">Tuition & hours</h3>
            {tuition.displayOnWebsite && (
              <p className="text-cream/85 leading-relaxed mb-4">
                Tuition is ${tuition.amount.toLocaleString()} per month. Florida state
                scholarships accepted: {tuition.scholarships.types.join(", ")}.
              </p>
            )}
            <p className="text-cream/70 text-sm mb-6">
              {tuition.scholarships.description}
            </p>
            <div className="space-y-3 text-cream/85 text-sm">
              <p>Monday–Thursday: {schedule.hours.mondayThursday}</p>
              <p>Friday: {schedule.hours.friday}</p>
              <p>Office hours: {contact.officeHours}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsSection;
