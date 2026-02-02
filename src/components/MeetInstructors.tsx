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
    credentials:
      "B.A. from FAU • Islamic Studies Certificate (IOU) • Tajweed & Qur'an Training",
    bio: "Holds a bachelor's degree from Florida Atlantic University and a certificate in Islamic Studies from International Open University (IOU), complemented by specialized training in Tajweed and Qur'an memorization. With a deep passion for nurturing young hearts and minds, she has inspired many children through dedicated volunteer work and after-school youth programs, bringing both knowledge and compassion to Islamic education.",
    image: hananImg,
    isFounder: true,
  },
  {
    id: 2,
    name: "Danna Elzagha",
    role: "Lead Instructor",
    credentials: "B.A. Elementary Education • K–6 Certified • 17 Years Experience",
    bio: "A certified K–6 teacher with 17 years of classroom experience and a Bachelor's degree in Elementary Education. She is known for exceptional classroom management skills that foster a structured, respectful, and engaging learning environment. Throughout her career, she has supported students' academic growth through effective instructional practices, clear expectations, and a strong commitment to student success.",
    image: dannaImg,
  },
  {
    id: 3,
    name: "Haytham Khalaf",
    role: "Qur'an & Islamic Studies",
    credentials: "B.A. Business Administration (FAU) • 10+ Years Teaching",
    bio: "Brings over ten years of dedicated experience teaching Tajweed, Qur'anic recitation, Arabic language, and Islamic studies. He holds a Bachelor's degree in Business Administration with a concentration in International Business & Trade from Florida Atlantic University. His unique blend of professional education and deep Islamic knowledge allows him to connect with students in meaningful ways.",
    image: haythamImg,
  },
  {
    id: 4,
    name: "Layann Abdallah",
    role: "Math Instructor",
    credentials:
      "B.A. Secondary Math Education (FAU) • Professional Teaching Certificate",
    bio: "A graduate of Florida Atlantic University where she studied Secondary Mathematics Education (6–12th grade) and earned her professional teaching certificate. She has been tutoring students from K–12 for four years and brings valuable experience from teaching in public school settings, combining patience with a passion for making math accessible to every learner.",
    image: layannImg,
  },
  {
    id: 5,
    name: "Faten Atway",
    role: "Academic Coach",
    credentials:
      "M.A. Science Education (USF) • M.A. Educational Leadership (FAU) • 20+ Years",
    bio: "Holds a Master's degree in Secondary Science Education from the University of South Florida and a Master's in Curriculum and Instruction with a focus on Educational Leadership from Florida Atlantic University. Florida certified in Chemistry (6–12) and Middle Grades Science (5–9), she brings over 20 years of teaching experience. She progressed from 17 years in the classroom to teaching mentor, and then to school administration, where she continues working to improve academic achievement and school culture.",
    image: fatenImg,
  },
];

const MeetInstructors = () => {
  return (
    <section id="meet-instructors" className="bg-cream pt-20 pb-8 lg:pt-28 lg:pb-12">
      <div className="bg-navy text-white py-14">
        <div className="container text-center">
          <p className="text-gold text-xs uppercase tracking-[0.4em] mb-3">
            Our Team
          </p>
          <h2 className="font-serif text-[2.4rem] md:text-[2.7rem] lg:text-[2.9rem]">
            Meet the Instructors
          </h2>
          <p className="text-white/80 mt-4 text-lg">
            Dedicated professionals nurturing both minds and hearts
          </p>
        </div>
      </div>

      <div className="container mt-14 space-y-20">
        {team.map((member, index) => {
          const isEven = index % 2 === 1;

          return (
            <motion.article
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className={`relative overflow-hidden rounded-2xl bg-white shadow-soft ${isEven ? "lg:pl-10" : "lg:pr-10"}`}
            >
              <div
                className={`absolute inset-y-0 ${member.isFounder ? "bg-gold" : "bg-navy"} w-1`}
              />
              <div
                className={`flex flex-col lg:flex-row ${isEven ? "lg:flex-row-reverse" : ""} items-center gap-10 p-10`}
              >
                <div className="flex flex-col items-center text-center lg:text-left">
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={`${member.name} portrait`}
                      className={`h-[200px] w-[200px] rounded-full object-cover border-4 ${member.isFounder ? "border-gold" : "border-slate-200"}`}
                    />
                    {member.isFounder && (
                      <div className="mt-4 rounded-full bg-gold px-5 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-soft">
                        Founder
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-[28px] font-semibold text-navy">
                    {member.name}
                  </h3>
                  <p className="text-[15px] uppercase tracking-[0.25em] text-gold mt-1">
                    {member.role}
                  </p>
                  <p className="text-[14px] text-navy/70 mt-3 font-medium">
                    {member.credentials}
                  </p>
                  <div className="mt-4 h-1 w-16 bg-gold" />
                  <p className="mt-4 text-[16px] leading-[1.7] text-[#555]">
                    {member.bio}
                  </p>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default MeetInstructors;
