import { motion } from "framer-motion";
import hananImg from "@/assets/hanan.jpg";
import dannaImg from "@/assets/Danna.jpg";
import haythamImg from "@/assets/Haytham.jpg";
import layannImg from "@/assets/Layann.jpg";
import fatenImg from "@/assets/Faten.jpg";

const team = [
  {
    id: 1,
    name: "Hanan Khalil",
    role: "Founder & Director",
    image: hananImg,
    bio: "Holds a bachelor's degree from FAU and a certificate in Islamic Studies from International Open University (IOU), with training in Tajweed and Qur'an memorization. She has inspired many children through volunteer work and after-school youth programs.",
    isFounder: true,
  },
  {
    id: 2,
    name: "Danna Elzagha",
    role: "Lead Instructor",
    image: dannaImg,
    bio: "Certified K–6 teacher with 17 years of classroom experience. Holds a Bachelor's degree in Elementary Education and is known for exceptional classroom management that fosters a structured, respectful, and engaging learning environment.",
    isFounder: false,
  },
  {
    id: 3,
    name: "Haytham Khalaf",
    role: "Qur'an & Islamic Studies Instructor",
    image: haythamImg,
    bio: "Brings over ten years of experience teaching Tajweed, Qur'anic recitation, Arabic language, and Islamic studies. Holds a Bachelor's degree in Business Administration with a concentration in International Business & Trade from Florida Atlantic University.",
    isFounder: false,
  },
  {
    id: 4,
    name: "Layann Abdallah",
    role: "Math Instructor",
    image: layannImg,
    bio: "Graduate of Florida Atlantic University with a degree in Secondary Mathematics Education (6–12th grade). Holds a professional teaching certificate with four years of tutoring experience (K–12) and classroom experience in public school settings.",
    isFounder: false,
  },
  {
    id: 5,
    name: "Faten Atway",
    role: "Science Instructor & Administrator",
    image: fatenImg,
    bio: "Holds a Master's degree in Secondary Science Education from the University of South Florida and a Master's in Curriculum and Instruction with a focus on Educational Leadership from FAU. Florida certified in Chemistry (6–12) and Middle Grades Science (5–9). Over 20 years of teaching experience, with 17 years in grades 4–12, progressing from classroom instructor to teaching mentor to school administration.",
    isFounder: false,
  },
];

const MeetInstructors = () => {
  return (
    <section id="meet-instructors" className="py-20 lg:py-28 bg-cream">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy text-balance">
            Meet the Instructors
          </h2>
          <p className="text-lg text-[#666] mt-4">
            Dedicated professionals committed to nurturing both minds and hearts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group bg-white rounded-3xl p-6 text-center shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative mx-auto mb-6 h-36 w-36">
                <div className="absolute inset-0 rounded-full border border-gold/30 transition-colors duration-300 group-hover:border-gold" />
                <img
                  src={member.image}
                  alt={`${member.name} portrait`}
                  className="h-full w-full rounded-full object-cover border-2 border-transparent transition-colors duration-300 group-hover:border-gold"
                />
                {member.isFounder && (
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-[0.65rem] font-semibold uppercase tracking-widest text-white shadow-soft">
                    Founder
                  </div>
                )}
              </div>
              <h3 className="font-serif text-lg text-navy mb-2">{member.name}</h3>
              <p className="text-gold text-xs uppercase tracking-[0.25em] mb-3">
                {member.role}
              </p>
              <p className="text-sm text-[#666] leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetInstructors;
