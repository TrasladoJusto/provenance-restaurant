"use client";

import Image from "next/image";
import Link from "next/link";
import { SectionReveal, StaggerSection } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Wine, Utensils, Clock, MapPin, Sparkles, ChefHat, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const tastingMenu = [
  { course: "Amuse-Bouche", dish: "Oyster, cucumber, dill, champagne gelée", wine: "Champagne Krug Grande Cuvée" },
  { course: "First Course", dish: "Hokkaido scallop, cauliflower, caviar, brown butter", wine: "Chablis Grand Cru Les Clos 2019" },
  { course: "Second Course", dish: "Foie gras torchon, brioche, fig, Sauternes", wine: "Sauternes Château Suduiraut 2017" },
  { course: "Third Course", dish: "Maine lobster, saffron risotto, fennel, citrus beurre blanc", wine: "Meursault Perrières 2020" },
  { course: "Fourth Course", dish: "Wagyu A5 ribeye, cipollini, black garlic, truffle jus", wine: "Barolo Riserva Giacomo Conterno 2016" },
  { course: "Palate Cleanser", dish: "Yuzu granita, mint, white chocolate", wine: "—" },
  { course: "Fifth Course", dish: "Dry-aged duck breast, cherry, turnip, sauce bigarade", wine: "Gevrey-Chambertin 2018" },
  { course: "Dessert", dish: "Dark chocolate, olive oil, sea salt, raspberry", wine: "Sauternes Château d'Yquem 2015" },
];

const experiences = [
  {
    title: "Tasting Menu",
    description: "Our signature 8-course journey through the season's finest expressions.",
    price: "$295",
    details: ["~2.5 hours", "Seasonal ingredients", "Chef's creativity"],
    icon: Utensils,
  },
  {
    title: "Wine Pairing",
    description: "Sommelier-selected vintages choreographed to each course.",
    price: "$185",
    details: ["8 glasses", "Rare vintages", "Educational service"],
    icon: Wine,
  },
  {
    title: "Chef's Table",
    description: "Intimate counter experience for up to 6 guests with bespoke menu.",
    price: "$450",
    details: ["Up to 6 guests", "Kitchen view", "Custom menu"],
    icon: ChefHat,
  },
  {
    title: "Vegetarian Tasting",
    description: "Plant-based 8-course menu celebrating seasonal vegetables.",
    price: "$275",
    details: ["Plant-based", "Seasonal", "Innovative techniques"],
    icon: Sparkles,
  },
];

export function ExperienciaPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden" aria-labelledby="experiencia-hero-title">
        <div className="absolute inset-0">
          <Image
            src="/images/experiencia/experiencia-unified.jpg"
            alt="Tasting menu experience at PROVENANCE"
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
              THE EXPERIENCE
            </span>
            <h1 id="experiencia-hero-title" className="font-display text-display-lg-mobile md:text-display-lg text-on-surface mb-4">
              A Choreographed
              <br />
              <span className="text-primary">Culinary Journey</span>
            </h1>
            <p className="text-body-lg text-on-surface-variant max-w-2xl mb-8 leading-relaxed">
              Eight courses that unfold like chapters — each revealing a new dimension
              of flavor, texture, and provenance. Optional wine pairings elevate each moment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" asChild>
                <Link href="/reservas">Reserve Your Experience</Link>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <Link href="#tasting-menu">View Tasting Menu</Link>
              </Button>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Experience Options */}
      <SectionReveal className="section-padding section-padding-mobile" aria-labelledby="options-title">
        <div className="container-provenance">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/30 text-primary text-label-sm mb-4">
              CHOOSE YOUR EXPERIENCE
            </span>
            <h2 id="options-title" className="font-display text-headline-lg md:text-headline-lg text-on-surface mb-6">
              Curated Culinary
              <br />
              <span className="text-primary">Experiences</span>
            </h2>
          </div>

          <StaggerSection staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {experiences.map((exp, index) => (
              <article
                key={exp.title}
                className={cn(
                  "group p-6 border transition-all duration-300",
                  index === 0
                    ? "bg-primary border-primary text-on-primary"
                    : "bg-surface-container border-outline-variant hover:border-primary"
                )}
              >
                <div
                  className={cn(
                    "w-12 h-12 flex items-center justify-center mb-4 transition-colors",
                    index === 0
                      ? "bg-on-primary/10 border border-on-primary/30"
                      : "bg-primary/10 border border-primary/30 group-hover:bg-primary group-hover:border-primary group-hover:text-on-primary"
                  )}
                >
                  <exp.icon
                    className={cn(
                      "h-7 w-7",
                      index === 0 ? "text-on-primary" : "text-primary group-hover:text-on-primary"
                    )}
                    aria-hidden="true"
                  />
                </div>
                <h3
                  className={cn(
                    "font-display text-headline-md mb-2",
                    index === 0 ? "text-on-primary" : "text-on-surface group-hover:text-primary transition-colors"
                  )}
                >
                  {exp.title}
                </h3>
                <p
                  className={cn(
                    "text-body-md mb-4",
                    index === 0 ? "text-on-primary/80" : "text-on-surface-variant"
                  )}
                >
                  {exp.description}
                </p>
                <div
                  className={cn(
                    "font-display text-headline-lg mb-4",
                    index === 0 ? "text-on-primary" : "text-primary"
                  )}
                >
                  {exp.price}
                </div>
                <ul
                  className={cn(
                    "space-y-2",
                    index === 0 ? "text-on-primary/80" : "text-on-surface-variant"
                  )}
                >
                  {exp.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-2 text-label-sm">
                      <span className="w-1.5 h-1.5 bg-current rounded-full" aria-hidden="true" />
                      {detail}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={index === 0 ? "secondary" : "ghost"}
                  size="md"
                  className="w-full mt-4"
                  asChild
                >
                  <a href="/reservas">Reserve {exp.title}</a>
                </Button>
              </article>
            ))}
          </StaggerSection>
        </div>
      </SectionReveal>

      {/* Tasting Menu */}
      <section id="tasting-menu" className="bg-surface-container-lowest section-padding section-padding-mobile" aria-labelledby="tasting-title">
        <SectionReveal>
          <div className="container-provenance">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/30 text-primary text-label-sm mb-4">
                TONIGHT'S MENU
              </span>
              <h2 id="tasting-title" className="font-display text-headline-lg md:text-headline-lg text-on-surface mb-6">
                Seasonal Tasting
                <br />
                <span className="text-primary">Menu</span>
              </h2>
              <p className="text-body-lg text-on-surface-variant">
                Menu changes weekly based on market availability. Below is a representative journey.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full" role="table">
                <thead>
                  <tr className="border-b border-outline-variant">
                    <th className="font-label text-label-md text-on-surface-variant pb-4 text-left">Course</th>
                    <th className="font-label text-label-md text-on-surface-variant pb-4 text-left">Dish</th>
                    <th className="font-label text-label-md text-on-surface-variant pb-4 text-left">Wine Pairing</th>
                  </tr>
                </thead>
                <tbody>
                  {tastingMenu.map((course, index) => (
                    <tr key={index} className="border-b border-outline-variant/50 hover:bg-surface-container transition-colors">
                      <td className="font-label text-label-md text-primary py-4">{course.course}</td>
                      <td className="text-body-md text-on-surface py-4">{course.dish}</td>
                      <td className="text-body-md text-on-surface-variant py-4">{course.wine}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-surface-container border border-outline-variant">
                <Clock className="h-8 w-8 mx-auto mb-3 text-primary" aria-hidden="true" />
                <h3 className="font-display text-headline-md text-on-surface mb-1">Duration</h3>
                <p className="text-body-md text-on-surface-variant">~2.5 hours</p>
              </div>
              <div className="p-6 bg-surface-container border border-outline-variant">
                <Wine className="h-8 w-8 mx-auto mb-3 text-primary" aria-hidden="true" />
                <h3 className="font-display text-headline-md text-on-surface mb-1">Wine Pairing</h3>
                <p className="text-body-md text-on-surface-variant">$185 additional</p>
              </div>
              <div className="p-6 bg-surface-container border border-outline-variant">
                <Users className="h-8 w-8 mx-auto mb-3 text-primary" aria-hidden="true" />
                <h3 className="font-display text-headline-md text-on-surface mb-1">Party Size</h3>
                <p className="text-body-md text-on-surface-variant">Up to 8 guests</p>
              </div>
            </div>
          </div>
        </SectionReveal>
      </section>

      {/* CTA */}
      <section className="bg-primary section-padding section-padding-mobile relative overflow-hidden" aria-labelledby="exp-cta-title">
        <SectionReveal>
          <div className="container-provenance relative z-10 text-center max-w-3xl mx-auto">
            <h2 id="exp-cta-title" className="font-display text-headline-lg md:text-display-lg text-white mb-6">
              Ready for the Journey?
            </h2>
            <p className="text-body-lg text-white/80 mb-8">
              Secure your seat for an unforgettable evening. Limited availability for
              chef's table and weekend seatings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <a href="/reservas">Reserve Experience</a>
              </Button>
              <Button variant="ghost" size="lg" asChild className="border-white/30 text-white hover:bg-white/10">
                <a href="/menu">View Full Menu</a>
              </Button>
            </div>
          </div>
        </SectionReveal>
      </section>
    </>
  );
}