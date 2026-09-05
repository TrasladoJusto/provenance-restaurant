"use client";

import { useState } from "react";
import { SectionReveal, StaggerSection } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { Input, Textarea, Select } from "@/components/ui/Input";
import { MapPin, Phone, Mail, Clock, Calendar, Users, Sparkles, Send, CheckCircle, AlertCircle, MapPin as MapPinIcon } from "lucide-react";

const contactOptions = [
  { value: "reservation", label: "Reservation Inquiry", icon: Calendar },
  { value: "private-event", label: "Private Event", icon: Users },
  { value: "press", label: "Press / Media", icon: Sparkles },
  { value: "careers", label: "Careers", icon: Sparkles },
  { value: "general", label: "General Question", icon: Sparkles },
];

export function ContactoPageContent() {
  const [formData, setFormData] = useState({
    type: "",
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.type) newErrors.type = "Please select an inquiry type";
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.trim().length < 20) newErrors.message = "Message must be at least 20 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ type: "", name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        const data = await response.json();
        setSubmitStatus("error");
        setErrors({ submit: data.error || "Something went wrong. Please try again." });
      }
    } catch {
      setSubmitStatus("error");
      setErrors({ submit: "Network error. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  if (submitStatus === "success") {
    return (
      <>
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden" aria-labelledby="contact-success-title">
          <div className="absolute inset-0 bg-primary" />
          <SectionReveal variant="fadeInUp" className="container-provenance relative z-10 text-center">
            <CheckCircle className="h-24 w-24 text-white mx-auto mb-6" aria-hidden="true" />
            <h1 id="contact-success-title" className="font-display text-display-lg-mobile md:text-display-lg text-white mb-4">
              Message Sent!
            </h1>
            <p className="text-body-lg text-white/80 max-w-2xl mx-auto mb-8">
              Thank you for reaching out to PROVENANCE. Our team will respond
              within 24 hours. For immediate assistance, please call us.
            </p>
            <Button variant="secondary" size="lg" onClick={() => { setSubmitStatus("idle"); setFormData({ type: "", name: "", email: "", phone: "", subject: "", message: "" }); }}>
              Send Another Message
            </Button>
          </SectionReveal>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden" aria-labelledby="contacto-hero-title">
        <div className="absolute inset-0">
          <img src="/images/contacto/contacto.jpg" alt="PROVENANCE contact" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background/80" />
        </div>
        <div className="container-provenance relative z-10 w-full section-padding section-padding-mobile">
          <SectionReveal variant="fadeInUp">
            <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/30 text-primary text-label-sm mb-4">
              GET IN TOUCH
            </span>
            <h1 id="contacto-hero-title" className="font-display text-display-lg-mobile md:text-display-lg text-on-surface mb-4">
              We'd Love to
              <br />
              <span className="text-primary">Hear from You</span>
            </h1>
            <p className="text-body-lg text-on-surface-variant max-w-2xl">
              Whether you have a question about reservations, want to plan a private
              event, or simply wish to share feedback — we're here to help.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Contact Info & Form */}
      <SectionReveal className="section-padding section-padding-mobile">
        <div className="container-provenance">
          <div className="asymmetric-grid gap-12">
            {/* Contact Info */}
            <div className="md:col-span-5 lg:col-span-5 space-y-8">
              <div>
                <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/30 text-primary text-label-sm mb-4">
                  CONTACT INFORMATION
                </span>
                <h2 className="font-display text-headline-lg text-on-surface mb-6">
                  Let's Start a
                  <br />
                  <span className="text-primary">Conversation</span>
                </h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-surface-container border border-outline-variant">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-primary/10 border border-primary/30">
                    <MapPinIcon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-headline-md text-on-surface mb-1">Visit Us</h3>
                    <p className="text-body-md text-on-surface-variant">
                      123 Culinary Lane<br />
                      Gastronomy District, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-surface-container border border-outline-variant">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-primary/10 border border-primary/30">
                    <Phone className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-headline-md text-on-surface mb-1">Call Us</h3>
                    <p className="text-body-md text-on-surface-variant">
                      <a href="tel:+12125550199" className="hover:text-primary transition-colors">+1 (212) 555-0199</a>
                    </p>
                    <p className="text-label-sm text-on-surface-variant/60">Tue–Sat: 10 AM – 10 PM</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-surface-container border border-outline-variant">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-primary/10 border border-primary/30">
                    <Mail className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-headline-md text-on-surface mb-1">Email Us</h3>
                    <p className="text-body-md text-on-surface-variant">
                      <a href="mailto:reservations@provenance-restaurant.com" className="hover:text-primary transition-colors">reservations@provenance-restaurant.com</a>
                    </p>
                    <p className="text-label-sm text-on-surface-variant/60">General: info@provenance-restaurant.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-surface-container border border-outline-variant">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-primary/10 border border-primary/30">
                    <Clock className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-headline-md text-on-surface mb-1">Hours</h3>
                    <p className="text-body-md text-on-surface-variant">
                      Tue–Sat: 5:30 PM – 10:30 PM<br />
                      Sun–Mon: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="pt-4 border-t border-outline-variant">
                <h3 className="font-label text-label-md text-on-surface mb-4">Quick Links</h3>
                <div className="flex flex-wrap gap-3">
                  <Button variant="ghost" size="sm" asChild>
                    <a href="/reservas">Make a Reservation</a>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <a href="/eventos">Private Events</a>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <a href="/menu">View Menu</a>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <a href="/chef">Meet the Chef</a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-7 lg:col-span-7">
              <div className="bg-surface-container border border-outline-variant p-6 md:p-8">
                <div className="mb-8">
                  <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/30 text-primary text-label-sm mb-4">
                    SEND A MESSAGE
                  </span>
                  <h3 className="font-display text-headline-lg text-on-surface">
                    Send Us a Message
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <Select
                    label="Inquiry Type *"
                    id="type"
                    value={formData.type}
                    onChange={(e) => handleChange("type", e.target.value)}
                    error={errors.type}
                    options={contactOptions.map(opt => ({ value: opt.value, label: opt.label }))}
                    placeholder="Select inquiry type"
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Full Name *"
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      error={errors.name}
                      placeholder="John Smith"
                    />
                    <Input
                      label="Email *"
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      error={errors.email}
                      placeholder="john@example.com"
                    />
                  </div>

                  <Input
                    label="Phone *"
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    error={errors.phone}
                    placeholder="+1 (555) 000-0000"
                  />

                  <Input
                    label="Subject *"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => handleChange("subject", e.target.value)}
                    error={errors.subject}
                    placeholder="Brief summary of your inquiry"
                  />

                  <Textarea
                    label="Message *"
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    error={errors.message}
                    placeholder="Please provide details about your inquiry, preferred dates, party size, or any other relevant information..."
                    rows={5}
                  />

                  {errors.submit && (
                    <div className="flex items-center gap-2 p-4 bg-error/10 border border-error text-error" role="alert">
                      <AlertCircle className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                      <p>{errors.submit}</p>
                    </div>
                  )}

                  <Button
                    variant="primary"
                    size="lg"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="mr-2 h-5 w-5 animate-spin" viewBox="0 0 24 24" aria-hidden="true">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" aria-hidden="true" />
                      </>
                    )}
                  </Button>
                </form>

                <p className="text-center text-label-sm text-on-surface-variant/60 mt-6">
                  By submitting this form, you agree to our{" "}
                  <a href="/privacy" className="underline hover:text-primary">Privacy Policy</a>
                  {" "}and{" "}
                  <a href="/terms" className="underline hover:text-primary">Terms of Service</a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionReveal>

      {/* Map Placeholder */}
      <SectionReveal className="section-padding section-padding-mobile bg-surface-container-lowest">
        <div className="container-provenance">
          <div className="aspect-[16/9] bg-surface-container border border-outline-variant flex items-center justify-center relative overflow-hidden">
            <div className="text-center text-on-surface-variant">
              <MapPin className="h-16 w-16 mx-auto mb-4 opacity-30" aria-hidden="true" />
              <h3 className="font-display text-headline-lg text-on-surface/50 mb-2">Interactive Map</h3>
              <p className="text-body-md">Google Maps integration would be embedded here</p>
              <Button variant="ghost" size="md" className="mt-4" asChild>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">Open in Google Maps</a>
              </Button>
            </div>
          </div>
        </div>
      </SectionReveal>
    </>
  );
}