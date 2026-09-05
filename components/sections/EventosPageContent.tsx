"use client";

import Image from "next/image";
import { SectionReveal, StaggerSection } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Users, Building, Sparkles, Calendar, MapPin, Phone, Mail, Check } from "lucide-react";

const eventSpaces = [
  {
    name: "Private Dining Salon",
    capacity: "8–24 guests",
    description: "Intimate room with dedicated service, customizable menus, and AV capabilities.",
    features: ["Dedicated server", "Custom menus", "AV equipment", "Wine cellar access"],
    image: "/images/eventos/eventos-unified.jpg",
    href: "/eventos#private",
  },
  {
    name: "Chef's Counter",
    capacity: "Up to 6 guests",
    description: "Front-row seats to culinary theater with direct chef interaction and bespoke tasting menu.",
    features: ["Kitchen view", "Chef interaction", "Bespoke menu", "Wine pairing included"],
    image: "/images/chef/chef-table.jpg",
    href: "/eventos#chefs-counter",
  },
  {
    name: "Full Venue Buyout",
    capacity: "Up to 80 guests",
    description: "Exclusive access to the entire restaurant for the ultimate private celebration.",
    features: ["Full privacy", "Custom everything", "Dedicated team", "Late license available"],
    image: "/images/hero/full-homepage.jpg",
    href: "/eventos#buyout",
  },
];

const eventTypes = [
  { icon: Users, title: "Corporate Dinners", description: "Impress clients and reward teams with curated culinary experiences." },
  { icon: Sparkles, title: "Weddings & Anniversaries", description: "Unforgettable milestone celebrations in an intimate, elegant setting." },
  { icon: Building, title: "Product Launches", description: "Sophisticated backdrop for brand activations and media events." },
  { icon: Calendar, title: "Holiday Parties", description: "Seasonal celebrations with custom menus and festive atmosphere." },
];

const amenities = [
  { icon: Check, text: "Dedicated event coordinator" },
  { icon: Check, text: "Customized tasting menus" },
  { icon: Check, text: "Sommelier-selected wine pairings" },
  { icon: Check, text: "Audio/visual equipment" },
  { icon: Check, text: "Private entrance available" },
  { icon: Check, text: "Valet parking coordination" },
  { icon: Check, text: "Dietary accommodation expertise" },
  { icon: Check, text: "Late-night license available" },
];

export function EventosPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden" aria-labelledby="eventos-hero-title">
        <div className="absolute inset-0">
          <Image
            src="/images/eventos/eventos-unified.jpg"
            alt="Private dining room at PROVENANCE"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background/80" />
        </div>
        <div className="container-provenance relative z-10 w-full section-padding section-padding-mobile">
          <SectionReveal variant="fadeInUp">
            <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/30 text-primary text-label-sm mb-4">
              PRIVATE EVENTS
            </span>
            <h1 id="eventos-hero-title" className="font-display text-display-lg-mobile md:text-display-lg text-on-surface mb-4">
              Celebrate in
              <br />
              <span className="text-primary">Exceptional Style</span>
            </h1>
            <p className="text-body-lg text-on-surface-variant max-w-2xl mb-8 leading-relaxed">
              From intimate boardroom dinners to grand wedding receptions, our private
              dining spaces provide the perfect canvas for your most important gatherings.
            </p>
            <Button variant="primary" size="lg" asChild>
              <a href="#contact">Inquire About Your Event</a>
            </Button>
          </SectionReveal>
        </div>
      </section>

      {/* Event Spaces */}
      <SectionReveal className="section-padding section-padding-mobile" aria-labelledby="spaces-title">
        <div className="container-provenance">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/30 text-primary text-label-sm mb-4">
              OUR SPACES
            </span>
            <h2 id="spaces-title" className="font-display text-headline-lg md:text-headline-lg text-on-surface mb-6">
              Three Distinct
              <br />
              <span className="text-primary">Venues</span>
            </h2>
          </div>

          <StaggerSection staggerDelay={0.15} className="space-y-16">
            {eventSpaces.map((space, index) => (
              <article
                key={space.name}
                className={`asymmetric-grid gap-12 items-center ${index % 2 === 1 ? "flex-row-reverse" : ""}`}
              >
                <div className="md:col-span-7 lg:col-span-7">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={space.image}
                      alt={space.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 767px) 100vw, (max-width: 1279px) 58vw, 58vw"
                    />
                  </div>
                </div>
                <div className="md:col-span-5 lg:col-span-5 flex flex-col justify-center p-6 md:p-12">
                  <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/30 text-primary text-label-sm mb-4">
                    {space.capacity}
                  </span>
                  <h3 className="font-display text-headline-lg text-on-surface mb-4">{space.name}</h3>
                  <p className="text-body-lg text-on-surface-variant mb-8 leading-relaxed">{space.description}</p>
                  <ul className="space-y-3 mb-8" role="list">
                    {space.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-body-md text-on-surface-variant">
                        <Check className="h-5 w-5 text-primary flex-shrink-0" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="ghost" size="md" asChild className="w-full md:w-auto">
                    <a href={space.href}>Learn More</a>
                  </Button>
                </div>
              </article>
            ))}
          </StaggerSection>
        </div>
      </SectionReveal>

      {/* Event Types */}
      <SectionReveal className="section-padding section-padding-mobile bg-surface-container-lowest" aria-labelledby="types-title">
        <div className="container-provenance">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/30 text-primary text-label-sm mb-4">
              EVENT TYPES
            </span>
            <h2 id="types-title" className="font-display text-headline-lg md:text-headline-lg text-on-surface mb-6">
              Perfect for Every
              <br />
              <span className="text-primary">Occasion</span>
            </h2>
          </div>

          <StaggerSection staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventTypes.map((type, index) => (
              <article key={type.title} className="p-6 bg-surface-container border border-outline-variant hover:border-primary transition-colors text-center">
                <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-primary/10 border border-primary/30">
                  <type.icon className="h-7 w-7 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-display text-headline-md text-on-surface mb-3">{type.title}</h3>
                <p className="text-body-md text-on-surface-variant">{type.description}</p>
              </article>
            ))}
          </StaggerSection>
        </div>
      </SectionReveal>

      {/* Amenities */}
      <SectionReveal className="section-padding section-padding-mobile" aria-labelledby="amenities-title">
        <div className="container-provenance">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/30 text-primary text-label-sm mb-4">
              INCLUDED AMENITIES
            </span>
            <h2 id="amenities-title" className="font-display text-headline-lg md:text-headline-lg text-on-surface mb-4">
              Everything Handled,
              <br />
              <span className="text-primary">Down to the Detail</span>
            </h2>
          </div>

          <StaggerSection staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {amenities.map((amenity, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-surface-container border border-outline-variant">
                <Check className="h-5 w-5 text-primary flex-shrink-0" aria-hidden="true" />
                <p className="text-body-md text-on-surface">{amenity.text}</p>
              </div>
            ))}
          </StaggerSection>
        </div>
      </SectionReveal>

      {/* Contact Form */}
      <section id="contact" className="bg-primary section-padding section-padding-mobile relative overflow-hidden" aria-labelledby="contact-title">
        <SectionReveal>
          <div className="container-provenance relative z-10">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 id="contact-title" className="font-display text-headline-lg md:text-display-lg text-white mb-4">
                  Let's Plan Your
                  <br />
                  Event
                </h2>
                <p className="text-body-lg text-white/80">
                  Share your vision and our event coordinator will contact you within
                  24 hours to begin planning.
                </p>
              </div>

              <form className="space-y-6" action="/api/events/inquiry" method="POST">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-label-sm text-white/80 mb-2">Full Name *</label>
                    <input type="text" id="name" name="name" required className="w-full px-4 py-3 bg-white/10 border border-white/30 text-white placeholder:text-white/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-label-sm text-white/80 mb-2">Email *</label>
                    <input type="email" id="email" name="email" required className="w-full px-4 py-3 bg-white/10 border border-white/30 text-white placeholder:text-white/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-label-sm text-white/80 mb-2">Phone</label>
                    <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 bg-white/10 border border-white/30 text-white placeholder:text-white/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="date" className="block text-label-sm text-white/80 mb-2">Preferred Date *</label>
                    <input type="date" id="date" name="date" required className="w-full px-4 py-3 bg-white/10 border border-white/30 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="guests" className="block text-label-sm text-white/80 mb-2">Number of Guests *</label>
                    <select id="guests" name="guests" required className="w-full px-4 py-3 bg-white/10 border border-white/30 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2224%22 height=%2224%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22white%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><polyline points=%226 9 12 15 18 9%22></polyline></svg>')] bg-no-repeat bg-right-4 center pr-10">
                      <option value="" disabled selected>Select guest count</option>
                      <option value="8-12">8–12 guests</option>
                      <option value="13-24">13–24 guests</option>
                      <option value="25-50">25–50 guests</option>
                      <option value="51-80">51–80 guests</option>
                      <option value="80+">80+ (buyout inquiry)</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="event-type" className="block text-label-sm text-white/80 mb-2">Event Type *</label>
                    <select id="event-type" name="eventType" required className="w-full px-4 py-3 bg-white/10 border border-white/30 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2224%22 height=%2224%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22white%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><polyline points=%226 9 12 15 18 9%22></polyline></svg>')] bg-no-repeat bg-right-4 center pr-10">
                      <option value="" disabled selected>Select event type</option>
                      <option value="corporate">Corporate Dinner</option>
                      <option value="wedding">Wedding / Anniversary</option>
                      <option value="launch">Product Launch</option>
                      <option value="holiday">Holiday Party</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-label-sm text-white/80 mb-2">Event Details *</label>
                  <textarea id="message" name="message" rows={4} required className="w-full px-4 py-3 bg-white/10 border border-white/30 text-white placeholder:text-white/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-y min-h-[120px]" placeholder="Share your vision, dietary requirements, budget range, or any special requests..."></textarea>
                </div>
                <Button variant="secondary" size="lg" type="submit" className="w-full md:w-auto mx-auto md:mx-0">
                  Submit Inquiry
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Button>
              </form>
            </div>
          </div>
        </SectionReveal>
      </section>
    </>
  );
}