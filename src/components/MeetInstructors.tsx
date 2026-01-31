import { motion } from "framer-motion";
import arkannContent from "@/data/arkannContent";

const MeetInstructors = () => {
  const { staff } = arkannContent;
  const placeholderSrc = `${import.meta.env.BASE_URL}placeholder.svg`;

  return (
    <div id="meet-instructors" className="mt-20 lg:mt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <p className="text-gold text-xs tracking-[0.35em] uppercase font-medium mb-4">
          Our Team
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy text-balance">
          Meet the Instructors
        </h2>
        <p className="text-muted-foreground text-lg mt-4">
          Dedicated professionals committed to nurturing both minds and hearts.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {staff.map((member, index) => {
          const details = [member.credentials, member.experience, member.bio]
            .filter(Boolean)
            .join(" ");
          const badge = member.title.toLowerCase().includes("founder")
            ? "Founder"
            : null;
          return (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="relative mx-auto mb-6 h-44 w-44">
                <div className="absolute inset-0 rounded-full border-2 border-gold/25 shadow-soft" />
                <img
                  src={placeholderSrc}
                  alt={`${member.name} portrait`}
                  className="h-full w-full rounded-full object-cover bg-cream-dark shadow-card"
                />
                {badge && (
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-[0.65rem] font-semibold uppercase tracking-widest text-primary shadow-soft">
                    {badge}
                  </div>
                )}
              </div>
              <h3 className="font-serif text-xl text-navy mb-2">
                {member.name}
              </h3>
              <p className="text-gold text-xs uppercase tracking-[0.3em] mb-3">
                {member.title}
              </p>
              {details && (
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {details}
                </p>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default MeetInstructors;
