"use client";

import Image from "next/image";
import { SectionReveal, StaggerSection } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { Award, MapPin, Clock, Heart, BookOpen, Sparkles } from "lucide-react";

const timeline = [
  { year: "2022–present", role: "Executive Chef / Owner", place: "PROVENANCE, New York", description: "Opened flagship restaurant earning Michelin star within 6 months." },
  { year: "2018–2022", role: "Chef de Cuisine", place: "Le Bernardin, New York", description: "Led seafood program at 3-Michelin-starred institution under Eric Ripert." },
  { year: "2015–2018", role: "Sous Chef", place: "Narisawa, Tokyo", description: "Refined kaiseki-inspired techniques under Yoshihiro Narisawa (2 stars)." },
  { year: "2012–2015", role: "Chef de Partie", place: "Arpège, Paris", description: "Vegetable-focused cuisine under Alain Passard (3 stars)." },
  { year: "2008–2012", role: "Commis Chef", place: "The Fat Duck, Bray", description: "Molecular gastronomy foundation under Heston Blumenthal (3 stars)." },
  { year: "2005–2008", role: "Culinary Student", place: "CIA, Hyde Park", description: "Graduated top of class, James Beard Foundation Scholar." },
];

const philosophy = [
  { icon: Heart, title: "Respect the Ingredient", description: "Every element on the plate has a story. Our job is to honor it, not mask it." },
  { icon: BookOpen, title: "Technique Serves Flavor", description: "Mastery of technique is invisible — it should never overshadow the ingredient." },
  { icon: Sparkles, title: "Seasonality as Creed", description: "Menus change with the calendar. Nature dictates what we serve, when we serve it." },
  { icon: Award, title: "Provenance Over Prestige", description: "A carrot from a biodynamic farm 20 miles away outweighs a truffle flown across oceans." },
];

const awards = [
  "Michelin Star — PROVENANCE (2023, 2024)",
  "James Beard Award — Best Chef: New York State (2023)",
  "Food & Wine — Best New Chef (2019)",
  "World's 50 Best — #12 (2024)",
  "Michelin Guide — 3 Stars (Le Bernardin, team)",
  "Michelin Guide — 3 Stars (Arpège, team)",
  "Michelin Guide — 3 Stars (The Fat Duck, team)",
];

export function ChefPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden" aria-labelledby="chef-hero-title">
        <div className="absolute inset-0">
          <Image
            src="/images/chef/chef-portrait-1.jpg"
            alt="Chef Marcus Volterra"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
        </div>
        <div className="container-provenance relative z-10 w-full section-padding section-padding-mobile">
          <SectionReveal variant="fadeInUp">
            <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/30 text-primary text-label-sm mb-4">
              CULINARY VISIONARY
            </span>
            <h1 id="chef-hero-title" className="font-display text-display-lg-mobile md:text-display-lg text-on-surface mb-6">
              Chef Marcus
              <br />
              <span className="text-primary">Volterra</span>
            </h1>
            <p className="text-body-lg text-on-surface-variant max-w-2xl mb-8 leading-relaxed">
              Two decades at the world's most acclaimed kitchens. A philosophy rooted in
              respect for ingredients and the stories they carry.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="md" asChild>
                <a href="/reservas">Experience His Cuisine</a>
              </Button>
              <Button variant="ghost" size="md" asChild>
                <a href="#philosophy">Read Philosophy</a>
              </Button>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Stats */}
      <SectionReveal className="section-padding section-padding-mobile bg-surface-container-lowest">
        <div className="container-provenance">
          <StaggerSection staggerDelay={0.15} className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="font-display text-display-lg-mobile md:text-display-lg text-primary mb-2">24</p>
              <p className="text-label-md text-on-surface-variant">Years Experience</p>
            </div>
            <div>
              <p className="font-display text-display-lg-mobile md:text-display-lg text-primary mb-2">3</p>
              <p className="text-label-md text-on-surface-variant">Michelin Stars</p>
            </div>
            <div>
              <p className="font-display text-display-lg-mobile md:text-display-lg text-primary mb-2">12</p>
              <p className="text-label-md text-on-surface-variant">Countries Cooked</p>
            </div>
            <div>
              <p className="font-display text-display-lg-mobile md:text-display-lg text-primary mb-2">50+</p>
              <p className="text-label-md text-on-surface-variant">Farm Partnerships</p>
            </div>
          </StaggerSection>
        </div>
      </SectionReveal>

      {/* Philosophy */}
      <section id="philosophy" className="section-padding section-padding-mobile" aria-labelledby="philosophy-title">
        <SectionReveal>
          <div className="container-provenance">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/30 text-primary text-label-sm mb-4">
                PHILOSOPHY
              </span>
              <h2 id="philosophy-title" className="font-display text-headline-lg md:text-headline-lg text-on-surface mb-6">
                Four Pillars of
                <br />
                <span className="text-primary">Culinary Truth</span>
              </h2>
            </div>

            <StaggerSection staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {philosophy.map((item, index) => (
                <article key={index} className="p-6 bg-surface-container border border-outline-variant hover:border-primary transition-colors">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/10 border border-primary/30 mb-4">
                    <item.icon className="h-7 w-7 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-headline-md text-on-surface mb-3">{item.title}</h3>
                  <p className="text-body-md text-on-surface-variant">{item.description}</p>
                </article>
              ))}
            </StaggerSection>
          </div>
        </SectionReveal>
      </section>

      {/* Journey */}
      <section className="bg-surface-container-lowest section-padding section-padding-mobile" aria-labelledby="journey-title">
        <SectionReveal>
          <div className="container-provenance">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/30 text-primary text-label-sm mb-4">
                JOURNEY
              </span>
              <h2 id="journey-title" className="font-display text-headline-lg md:text-headline-lg text-on-surface mb-4">
                A Career Spanning
                <br />
                <span className="text-primary">Continents</span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <dl className="space-y-8" role="list">
                {timeline.map((item, index) => (
                  <div key={index} className="relative pl-8 md:pl-16 border-l border-outline-variant last:border-0">
                    <div className="absolute left-0 md:left-[-16px] top-0 w-3 h-3 bg-primary border-2 border-background rounded-full" aria-hidden="true" />
                    <dt className="font-label text-label-md text-primary mb-1">{item.year}</dt>
                    <dd className="space-y-1">
                      <p className="font-display text-headline-md text-on-surface">{item.role}</p>
                      <p className="text-body-md text-on-surface-variant">{item.place}</p>
                      <p className="text-body-md text-on-surface-variant/70">{item.description}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </SectionReveal>
      </section>

      {/* Awards */}
      <section className="section-padding section-padding-mobile" aria-labelledby="awards-title">
        <SectionReveal>
          <div className="container-provenance">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/30 text-primary text-label-sm mb-4">
                RECOGNITION
              </span>
              <h2 id="awards-title" className="font-display text-headline-lg md:text-headline-lg text-on-surface">
                Awards &
                <br />
                <span className="text-primary">Accolades</span>
              </h2>
            </div>

            <StaggerSection staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-surface-container border border-outline-variant hover:border-primary transition-colors"
                >
                  <Award className="h-6 w-6 text-primary flex-shrink-0" aria-hidden="true" />
                  <p className="text-body-md text-on-surface">{award}</p>
                </div>
              ))}
            </StaggerSection>
          </div>
        </SectionReveal>
      </section>

      {/* CTA */}
      <section className="bg-primary section-padding section-padding-mobile relative overflow-hidden" aria-labelledby="chef-cta-title">
        <SectionReveal>
          <div className="container-provenance relative z-10 text-center max-w-3xl mx-auto">
            <h2 id="chef-cta-title" className="font-display text-headline-lg md:text-display-lg text-white mb-6">
              Taste the Vision
            </h2>
            <p className="text-body-lg text-white/80 mb-8">
              Reserve a seat at the chef's table or experience the tasting menu
              that showcases Chef Volterra's culinary philosophy.
            </p>
            <Button variant="secondary" size="lg" asChild>
              <a href="/reservas">Reserve Now</a>
            </Button>
          </div>
        </SectionReveal>
      </section>
    </>
  );
}