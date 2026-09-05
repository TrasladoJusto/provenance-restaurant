"use client";

import Image from "next/image";
import Link from "next/link";
import { SectionReveal, StaggerSection } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Users, Building, Sparkles, Calendar } from "lucide-react";

const eventTypes = [
  {
    title: "Private Dining",
    description: "Intimate gatherings for 8–24 guests in our exclusive dining salon with bespoke menus.",
    capacity: "8–24 guests",
    icon: Users,
    href: "/eventos#private",
  },
  {
    title: "Corporate Events",
    description: "Impress clients and reward teams with curated culinary experiences in a refined setting.",
    capacity: "10–50 guests",
    icon: Building,
    href: "/eventos#corporate",
  },
  {
    title: "Weddings & Celebrations",
    description: "Unforgettable milestone celebrations with full venue buyout and personalized service.",
    capacity: "Up to 80 guests",
    icon: Sparkles,
    href: "/eventos#weddings",
  },
  {
    title: "Full Venue Buyout",
    description: "Exclusive access to the entire restaurant for the ultimate private experience.",
    capacity: "Up to 80 guests",
    icon: Calendar,
    href: "/eventos#buyout",
  },
];

export function EventsPreview() {
  return (
    <section className="section-padding section-padding-mobile" aria-labelledby="events-title">
      <SectionReveal>
        <div className="container-provenance">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/30 text-primary text-label-sm mb-4">
              PRIVATE EVENTS
            </span>
            <h2 id="events-title" className="font-display text-headline-lg md:text-headline-lg text-on-surface mb-6">
              Celebrate in
              <br />
              <span className="text-primary">Exceptional Style</span>
            </h2>
            <p className="text-body-lg text-on-surface-variant leading-relaxed">
              From intimate boardroom dinners to grand wedding receptions, our private
              dining spaces provide the perfect canvas for your most important gatherings.
            </p>
          </div>

          <StaggerSection staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventTypes.map((event, index) => (
              <article
                key={event.title}
                className="group p-6 bg-surface-container border border-outline-variant hover:border-primary hover:bg-surface-container-low transition-all duration-300"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-primary/10 border border-primary/30 mb-4 group-hover:bg-primary group-hover:border-primary group-hover:text-on-primary transition-colors">
                  <event.icon className="h-7 w-7 text-primary group-hover:text-on-primary" aria-hidden="true" />
                </div>
                <h3 className="font-display text-headline-md text-on-surface mb-2 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <p className="text-body-md text-on-surface-variant mb-3">{event.description}</p>
                <div className="flex items-center gap-2 text-label-sm text-primary font-label">
                  <span className="w-4 h-4 flex-shrink-0">•</span>
                  {event.capacity}
                </div>
                <Link
                  href={event.href}
                  className="mt-4 inline-flex items-center gap-2 text-label-md text-primary hover:text-primary-container/90 transition-colors font-label"
                >
                  Inquire
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </StaggerSection>

          <div className="text-center mt-12">
            <Button variant="primary" size="md" asChild>
              <Link href="/eventos">
                Plan Your Event
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}