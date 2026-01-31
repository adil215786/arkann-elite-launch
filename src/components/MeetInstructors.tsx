import { motion } from "framer-motion";
import arkannContent from "@/data/arkannContent";

const MeetInstructors = () => {
  const { staff } = arkannContent;
  const photoMap: Record<string, string> = {
    "Hanan Khalil": "https://cdn.pixabay.com/photo/2024/11/13/20/49/ai-generated-9195476_1280.jpg",
    "Danna Elzagha": "https://cdn.pixabay.com/photo/2024/11/13/20/49/ai-generated-9195475_1280.jpg",
    "Layann Abdallah": "https://cdn.pixabay.com/photo/2024/07/14/15/29/ai-generated-8894720_1280.png",
    "Haytham Khalaf": "https://cdn.pixabay.com/photo/2024/12/05/15/22/ai-generated-9246868_1280.jpg",
    "Faten Atway": "https://cdn.pixabay.com/photo/2024/03/13/20/28/ai-generated-8631903_1280.png",
  };

  const getByName = (name: string) => staff.find((member) => member.name === name);
  const founder = getByName("Hanan Khalil");
  const rowOne = ["Danna Elzagha", "Layann Abdallah"]
    .map(getByName)
    .filter(Boolean);
  const rowTwo = ["Haytham Khalaf", "Faten Atway"]
    .map(getByName)
    .filter(Boolean);

  const renderCard = (member: typeof staff[number], highlight?: boolean) => {
    const details = [member.credentials, member.experience, member.bio]
      .filter(Boolean)
      .join(" ");
    const badge = highlight ? "Founder" : null;
    const photoSrc = photoMap[member.name] || `${import.meta.env.BASE_URL}placeholder.svg`;

    return (
      <div className="text-center max-w-xs">
        <div className="relative mx-auto mb-6 h-44 w-44">
          <div className="absolute inset-0 rounded-full border-2 border-gold/25 shadow-soft" />
          <img
            src={photoSrc}
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
      </div>
    );
  };

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

      <div className="flex flex-col items-center">
        {founder && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            {renderCard(founder, true)}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12"
        >
          {rowOne.map((member) => (
            <div key={member!.name}>{renderCard(member!)}</div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {rowTwo.map((member) => (
            <div key={member!.name}>{renderCard(member!)}</div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default MeetInstructors;
