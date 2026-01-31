import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import arkannContent from "@/data/arkannContent";
import { buildMailtoLink } from "@/lib/utils";

const InvitationForm = () => {
  const [formData, setFormData] = useState({
    parentName: "",
    parentEmail: "",
    parentPhone: "",
    childName: "",
    childAge: "",
    childGrade: "",
    childrenCount: "",
    message: "",
  });
  const [error, setError] = useState<string | null>(null);
  const inviteEmail = "hananatway@gmail.com";
  const inviteSubject = "Arkann - New Inquiry";

  const mailtoLink = useMemo(() => {
    const bodyLines = [
      "Assalamu Alaikum,",
      "",
      "I am writing to request an invitation to learn more about Arkann Academy.",
      "",
      `Parent/Guardian Name: ${formData.parentName || "—"}`,
      `Parent Email: ${formData.parentEmail || "—"}`,
      `Best Contact Phone: ${formData.parentPhone || "—"}`,
      `Child Name: ${formData.childName || "—"}`,
      `Child Age: ${formData.childAge || "—"}`,
      `Current Grade: ${formData.childGrade || "—"}`,
      `Number of Children to Enroll: ${formData.childrenCount || "—"}`,
      "",
      "Additional Notes:",
      formData.message || "—",
      "",
      "Thank you for your time and consideration.",
    ];

    return buildMailtoLink({
      to: inviteEmail,
      subject: inviteSubject,
      body: bodyLines.join("\n"),
    });
  }, [formData, inviteEmail, inviteSubject]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const allFieldsFilled = Object.values(formData).every((value) => value.trim().length > 0);

    if (!allFieldsFilled) {
      setError("Please complete all fields before submitting.");
      return;
    }

    setError(null);
    window.location.href = mailtoLink;
  };

  return (
    <section id="request-invite" className="py-24 lg:py-32 bg-cream-dark">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-gold text-sm tracking-[0.25em] uppercase font-medium mb-4">
            Request an Invitation
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy text-balance">
            Share a few details and we will follow up
          </h2>
          <p className="text-muted-foreground text-lg mt-4">
            We keep enrollment intentionally small to ensure every child is known and supported.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto bg-card rounded-3xl shadow-card p-8 lg:p-12">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-navy" htmlFor="parentName">
                Parent/Guardian Name
              </label>
              <input
                id="parentName"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                required
                className="h-12 rounded-xl border border-input bg-background px-4 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                placeholder="Full name"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-navy" htmlFor="parentEmail">
                Email Address
              </label>
              <input
                id="parentEmail"
                name="parentEmail"
                type="email"
                value={formData.parentEmail}
                onChange={handleChange}
                required
                className="h-12 rounded-xl border border-input bg-background px-4 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                placeholder="you@example.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-navy" htmlFor="parentPhone">
                Best Contact Phone
              </label>
              <input
                id="parentPhone"
                name="parentPhone"
                value={formData.parentPhone}
                onChange={handleChange}
                required
                className="h-12 rounded-xl border border-input bg-background px-4 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                placeholder="(###) ###-####"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-navy" htmlFor="childrenCount">
                Number of Children to Enroll
              </label>
              <input
                id="childrenCount"
                name="childrenCount"
                value={formData.childrenCount}
                onChange={handleChange}
                required
                className="h-12 rounded-xl border border-input bg-background px-4 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                placeholder="1"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-navy" htmlFor="childName">
                Child Name
              </label>
              <input
                id="childName"
                name="childName"
                value={formData.childName}
                onChange={handleChange}
                required
                className="h-12 rounded-xl border border-input bg-background px-4 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                placeholder="Child's name"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-navy" htmlFor="childAge">
                Child Age
              </label>
              <input
                id="childAge"
                name="childAge"
                value={formData.childAge}
                onChange={handleChange}
                required
                className="h-12 rounded-xl border border-input bg-background px-4 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                placeholder="8"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-navy" htmlFor="childGrade">
                Current Grade
              </label>
              <input
                id="childGrade"
                name="childGrade"
                value={formData.childGrade}
                onChange={handleChange}
                required
                className="h-12 rounded-xl border border-input bg-background px-4 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                placeholder="3rd grade"
              />
            </div>

            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="text-sm font-medium text-navy" htmlFor="message">
                Additional Notes
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="min-h-[140px] rounded-2xl border border-input bg-background px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                placeholder="Share any details that would be helpful for our team."
              />
            </div>

            <div className="md:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-muted-foreground">
                <p>All information collected will never be shared to a 3rd party.</p>
                {error && <p className="text-red-600 mt-2">{error}</p>}
              </div>
              <Button variant="gold" size="lg" type="submit">
                Request an Invitation
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default InvitationForm;
