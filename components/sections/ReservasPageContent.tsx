"use client";

import { useState } from "react";
import { SectionReveal, StaggerSection } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { Input, Select, Textarea } from "@/components/ui/Input";
import { Calendar, Clock, Users, MapPin, Phone, Mail, CheckCircle, AlertCircle, ArrowRight } from "lucide-react";

const timeSlots = [
  "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM",
];

const partySizes = [
  { value: "1", label: "1 Guest" },
  { value: "2", label: "2 Guests" },
  { value: "3", label: "3 Guests" },
  { value: "4", label: "4 Guests" },
  { value: "5", label: "5 Guests" },
  { value: "6", label: "6 Guests" },
  { value: "7", label: "7 Guests" },
  { value: "8", label: "8 Guests" },
  { value: "9+", label: "9+ (Contact us)" },
];

const experienceOptions = [
  { value: "tasting", label: "Tasting Menu ($295 pp)" },
  { value: "tasting-wine", label: "Tasting Menu + Wine Pairing ($480 pp)" },
  { value: "vegetarian", label: "Vegetarian Tasting ($275 pp)" },
  { value: "chefs-table", label: "Chef's Table Experience ($450 pp)" },
  { value: "private", label: "Private Dining Inquiry" },
];

export function ReservasPageContent() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    partySize: "",
    experience: "",
    name: "",
    email: "",
    phone: "",
    occasion: "",
    dietary: "",
    requests: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateStep = (currentStep: number) => {
    const newErrors: Record<string, string> = {};

    if (currentStep === 1) {
      if (!formData.date) newErrors.date = "Please select a date";
      if (!formData.time) newErrors.time = "Please select a time";
      if (!formData.partySize) newErrors.partySize = "Please select party size";
      if (!formData.experience) newErrors.experience = "Please select an experience";
    }

    if (currentStep === 2) {
      if (!formData.name.trim()) newErrors.name = "Name is required";
      if (!formData.email.trim()) newErrors.email = "Email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format";
      if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(2)) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setStep(3);
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
        {/* Success Hero */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden" aria-labelledby="success-title">
          <div className="absolute inset-0 bg-primary" />
          <SectionReveal variant="fadeInUp" className="container-provenance relative z-10 text-center">
            <CheckCircle className="h-24 w-24 text-white mx-auto mb-6" aria-hidden="true" />
            <h1 id="success-title" className="font-display text-display-lg-mobile md:text-display-lg text-white mb-4">
              Reservation Confirmed!
            </h1>
            <p className="text-body-lg text-white/80 max-w-2xl mx-auto mb-8">
              Thank you for choosing PROVENANCE. A confirmation email has been sent to
              <strong>{formData.email}</strong> with all the details.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-xl mx-auto mb-8">
              <div className="p-6 bg-white/10 border border-white/20 rounded-none">
                <Calendar className="h-8 w-8 mx-auto mb-2 text-primary" aria-hidden="true" />
                <p className="text-label-sm text-white/60">Date</p>
                <p className="font-display text-headline-md text-white">{formData.date}</p>
              </div>
              <div className="p-6 bg-white/10 border border-white/20 rounded-none">
                <Clock className="h-8 w-8 mx-auto mb-2 text-primary" aria-hidden="true" />
                <p className="text-label-sm text-white/60">Time</p>
                <p className="font-display text-headline-md text-white">{formData.time}</p>
              </div>
              <div className="p-6 bg-white/10 border border-white/20 rounded-none">
                <Users className="h-8 w-8 mx-auto mb-2 text-primary" aria-hidden="true" />
                <p className="text-label-sm text-white/60">Party Size</p>
                <p className="font-display text-headline-md text-white">{formData.partySize}</p>
              </div>
            </div>
            <Button variant="secondary" size="lg" onClick={() => { setStep(1); setFormData({ date: "", time: "", partySize: "", experience: "", name: "", email: "", phone: "", occasion: "", dietary: "", requests: "" }); setSubmitStatus("idle"); }}>
              Make Another Reservation
            </Button>
          </SectionReveal>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden" aria-labelledby="reservas-hero-title">
        <div className="absolute inset-0">
          <img src="/images/hero/full-homepage.jpg" alt="PROVENANCE dining room" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background/80" />
        </div>
        <div className="container-provenance relative z-10 w-full section-padding section-padding-mobile">
          <SectionReveal variant="fadeInUp">
            <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/30 text-primary text-label-sm mb-4">
              RESERVE YOUR TABLE
            </span>
            <h1 id="reservas-hero-title" className="font-display text-display-lg-mobile md:text-display-lg text-on-surface mb-4">
              Secure Your
              <br />
              <span className="text-primary">Experience</span>
            </h1>
            <p className="text-body-lg text-on-surface-variant max-w-2xl">
              Real-time availability for dinner, chef's table, and private dining.
              Book instantly online or contact us for special requests.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Progress Steps */}
      <SectionReveal className="section-padding section-padding-mobile">
        <div className="container-provenance">
          <div className="flex items-center justify-center gap-4 mb-12" role="progressbar" aria-valuenow={step} aria-valuemin={1} aria-valuemax={3} aria-label="Reservation progress">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div className={`w-10 h-10 flex items-center justify-center text-label-md font-label rounded-full border-2 transition-colors ${
                  s < step ? "bg-primary border-primary text-on-primary" :
                  s === step ? "border-primary text-primary bg-transparent" :
                  "border-outline-variant text-on-surface-variant/50 bg-transparent"
                }`}>
                  {s < step ? <CheckCircle className="h-5 w-5" /> : s}
                </div>
                {s < 3 && <div className={`hidden md:block w-16 h-[2px] ${s < step ? "bg-primary" : "bg-outline-variant"}`} />}
              </div>
            ))}
            <div className="hidden md:flex flex-col items-center gap-1 ml-4">
              <span className="text-label-sm text-primary font-label">Details</span>
              <span className="text-label-sm text-on-surface-variant/50">Guest Info</span>
              <span className="text-label-sm text-on-surface-variant/50">Confirm</span>
            </div>
          </div>

          {/* Step 1: Details */}
          {step === 1 && (
            <form onSubmit={(e) => { e.preventDefault(); if (validateStep(1)) setStep(2); }} className="max-w-2xl mx-auto">
              <SectionReveal variant="fadeInUp">
                <h2 className="font-display text-headline-lg text-on-surface mb-8 text-center">Step 1: Your Experience</h2>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Date *"
                      type="date"
                      id="date"
                      value={formData.date}
                      onChange={(e) => handleChange("date", e.target.value)}
                      error={errors.date}
                      min={new Date().toISOString().split("T")[0]}
                    />
                    <Select
                      label="Time *"
                      id="time"
                      value={formData.time}
                      onChange={(e) => handleChange("time", e.target.value)}
                      error={errors.time}
                      options={timeSlots.map(t => ({ value: t, label: t }))}
                      placeholder="Select time"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Select
                      label="Party Size *"
                      id="partySize"
                      value={formData.partySize}
                      onChange={(e) => handleChange("partySize", e.target.value)}
                      error={errors.partySize}
                      options={partySizes}
                      placeholder="Select party size"
                    />
                    <Select
                      label="Experience *"
                      id="experience"
                      value={formData.experience}
                      onChange={(e) => handleChange("experience", e.target.value)}
                      error={errors.experience}
                      options={experienceOptions}
                      placeholder="Select experience"
                    />
                  </div>

                  <div className="flex justify-end">
                    <Button variant="primary" size="lg" type="submit" disabled={isSubmitting}>
                      Next: Guest Information
                      <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                    </Button>
                  </div>
                </div>
              </SectionReveal>
            </form>
          )}

          {/* Step 2: Guest Info */}
          {step === 2 && (
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
              <SectionReveal variant="fadeInUp">
                <h2 className="font-display text-headline-lg text-on-surface mb-8 text-center">Step 2: Guest Information</h2>

                <div className="space-y-6">
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

                  <Select
                    label="Occasion"
                    id="occasion"
                    value={formData.occasion}
                    onChange={(e) => handleChange("occasion", e.target.value)}
                    options={[
                      { value: "", label: "Select occasion (optional)" },
                      { value: "anniversary", label: "Anniversary" },
                      { value: "birthday", label: "Birthday" },
                      { value: "business", label: "Business Dinner" },
                      { value: "date", label: "Date Night" },
                      { value: "celebration", label: "Celebration" },
                      { value: "other", label: "Other" },
                    ]}
                    placeholder="Select occasion"
                  />

                  <Textarea
                    label="Dietary Restrictions & Allergies"
                    id="dietary"
                    value={formData.dietary}
                    onChange={(e) => handleChange("dietary", e.target.value)}
                    placeholder="Vegetarian, gluten-free, nut allergy, shellfish allergy, etc."
                  />

                  <Textarea
                    label="Special Requests"
                    id="requests"
                    value={formData.requests}
                    onChange={(e) => handleChange("requests", e.target.value)}
                    placeholder="Window table, quiet corner, high chair, surprise dessert, etc."
                  />

                  {errors.submit && (
                    <div className="flex items-center gap-2 p-4 bg-error/10 border border-error text-error" role="alert">
                      <AlertCircle className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                      <p>{errors.submit}</p>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-4 justify-end pt-4">
                    <Button variant="ghost" size="md" type="button" onClick={() => setStep(1)}>
                      Back
                    </Button>
                    <Button variant="primary" size="lg" type="submit" disabled={isSubmitting}>
                      {isSubmitting ? "Confirming..." : "Confirm Reservation"}
                      <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                    </Button>
                  </div>
                </div>
              </SectionReveal>
            </form>
          )}

          {/* Contact Info */}
          <SectionReveal className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6 bg-surface-container border border-outline-variant">
                <MapPin className="h-8 w-8 mx-auto mb-3 text-primary" aria-hidden="true" />
                <h3 className="font-display text-headline-md text-on-surface mb-1">Location</h3>
                <p className="text-body-md text-on-surface-variant">123 Culinary Lane, NYC</p>
              </div>
              <div className="p-6 bg-surface-container border border-outline-variant">
                <Phone className="h-8 w-8 mx-auto mb-3 text-primary" aria-hidden="true" />
                <h3 className="font-display text-headline-md text-on-surface mb-1">Call Us</h3>
                <p className="text-body-md text-on-surface-variant">+1 (212) 555-0199</p>
              </div>
              <div className="p-6 bg-surface-container border border-outline-variant">
                <Mail className="h-8 w-8 mx-auto mb-3 text-primary" aria-hidden="true" />
                <h3 className="font-display text-headline-md text-on-surface mb-1">Email</h3>
                <p className="text-body-md text-on-surface-variant">reservations@provenance.com</p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </SectionReveal>
    </>
  );
}