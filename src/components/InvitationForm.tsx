import { useEffect, useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const InvitationForm = () => {
  const formspreeEndpoint = "https://formspree.io/f/xnjvrkjj";
  const successModalAutoCloseMs = 5000;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  useEffect(() => {
    if (!isSuccessModalOpen) return;

    const timeoutId = window.setTimeout(() => {
      setIsSuccessModalOpen(false);
    }, successModalAutoCloseMs);

    return () => window.clearTimeout(timeoutId);
  }, [isSuccessModalOpen, successModalAutoCloseMs]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (response.ok) {
        form.reset();
        setIsSuccessModalOpen(true);
      } else {
        setSubmitError("We could not submit your form. Please try again.");
      }
    } catch {
      setSubmitError("We could not submit your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy text-balance">
            Share a few details and we will follow up
          </h2>
          <p className="text-muted-foreground text-lg mt-4">
            We keep our groups intentionally small to ensure every child receives personalized attention.
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
                name="name"
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
                name="email"
                type="email"
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
                required
                className="h-12 rounded-xl border border-input bg-background px-4 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                placeholder="(###) ###-####"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-navy" htmlFor="childrenCount">
                Number of Children
              </label>
              <input
                id="childrenCount"
                name="childrenCount"
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
                required
                className="min-h-[140px] rounded-2xl border border-input bg-background px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                placeholder="Share any details that would be helpful for our team."
              />
            </div>

            <div className="md:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-muted-foreground">
                <p>All information collected will never be shared to a 3rd party.</p>
                {submitError ? (
                  <p className="mt-2 text-sm text-destructive" role="alert">
                    {submitError}
                  </p>
                ) : null}
              </div>
              <Button variant="gold" size="lg" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Form"}
              </Button>
            </div>
          </form>
        </div>
      </div>

      <Dialog open={isSuccessModalOpen} onOpenChange={setIsSuccessModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Submission Received</DialogTitle>
            <DialogDescription>Thank you! We will reach out to you shortly.</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="gold" onClick={() => setIsSuccessModalOpen(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default InvitationForm;
