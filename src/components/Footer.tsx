import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import arkannLogo from "@/assets/arkann-logo.jpeg";
import arkannContent from "@/data/arkannContent";
import { buildMailtoLink } from "@/lib/utils";

const Footer = () => {
  const { contact, social, emailTemplates, siteInfo } = arkannContent;
  const mailtoLink = buildMailtoLink({
    to: emailTemplates.invitationRequest.to,
    subject: emailTemplates.invitationRequest.subject,
    body: emailTemplates.invitationRequest.body,
  });
  const inviteAnchor = "#request-invite";
  const mapQuery = encodeURIComponent(contact.address.full);
  const mapSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`;

  return (
    <footer id="contact" className="bg-navy pt-20 pb-8">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 pb-16 border-b border-cream/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <img src={arkannLogo} alt={siteInfo.name} className="h-14 w-auto rounded-lg" />
              <div className="flex flex-col">
                <span className="text-cream font-serif text-xl font-semibold tracking-wide">
                  ARKANN
                </span>
                <span className="text-gold text-xs tracking-[0.3em] uppercase">
                  Academy
                </span>
              </div>
            </div>
            <p className="text-cream/60 text-sm leading-relaxed mb-6 max-w-xs">
              {siteInfo.description}
            </p>
            <a
              href={social.instagram.url}
              className="inline-flex items-center gap-2 text-cream/70 hover:text-gold transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              <span className="w-10 h-10 rounded-full bg-cream/5 flex items-center justify-center">
                <Instagram className="w-5 h-5" />
              </span>
              {social.instagram.handle}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-cream font-serif text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-cream/60 text-sm">
                  {contact.address.street}
                  <br />
                  {contact.address.city}, {contact.address.state} {contact.address.zip}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <a
                  href={`tel:${contact.phone}`}
                  className="text-cream/60 text-sm hover:text-gold transition-colors"
                >
                  {contact.phoneFormatted}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <a
                  href={mailtoLink}
                  className="text-cream/60 text-sm hover:text-gold transition-colors"
                >
                  {contact.email}
                </a>
              </li>
            </ul>
            <div className="mt-6 w-full overflow-hidden border border-cream/10 shadow-card -mx-6 md:mx-0 md:rounded-2xl">
              <iframe
                title="Arkann Academy map"
                src={mapSrc}
                className="w-full h-56 md:h-48"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-cream font-serif text-lg mb-6">Visit</h4>
            <p className="text-cream/60 text-sm leading-relaxed mb-4">
              Office hours: {contact.officeHours}
            </p>
            <a
              href={inviteAnchor}
              className="inline-flex items-center text-gold text-sm uppercase tracking-[0.3em] font-medium hover:text-cream transition-colors"
            >
              Request an invitation
            </a>
          </motion.div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/40 text-sm">
            © 2026 {siteInfo.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-cream/40 text-sm">
            <a href="#about" className="hover:text-gold transition-colors">
              About
            </a>
            <a href="#admissions" className="hover:text-gold transition-colors">
              Admissions
            </a>
            <a href="#faqs" className="hover:text-gold transition-colors">
              FAQs
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
