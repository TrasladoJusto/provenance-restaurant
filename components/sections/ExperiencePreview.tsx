"use client";

import Image from "next/image";
import Link from "next/link";
import { SectionReveal, StaggerSection } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles } from "lucide-react";

const experienceHighlights = [
  {
    title: "Tasting Menu",
    description: "An 8-course journey through the season's finest expressions, each dish a study in technique and terroir.",
    image: "/images/experiencia/experiencia-unified.jpg",
    href: "/experiencia",
    featured: true,
  },
  {
    title: "Wine Pairing",
    description: "Sommelier-selected vintages from boutique vineyards, each pour choreographed to elevate the corresponding course.",
    image: "/images/menu/wine-pairing.jpg",
    href: "/menu#wine",
    featured: false,
  },
  {
    title: "Chef's Table",
    description: "An intimate counter experience for up to 6 guests, with direct interaction and bespoke menu creation.",
    image: "/images/chef/chef-table.jpg",
    href: "/chef",
    featured: false,
  },
];

export function ExperiencePreview() {
  return (
    <section className="bg-surface-container-lowest section-padding section-padding-mobile" aria-labelledby="experience-title">
      <SectionReveal>
        <div className="container-provenance">
          <div className="asymmetric-grid">
            <div className="md:col-span-7 lg:col-span-7">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/images/experiencia/experiencia-unified.jpg"
                  alt="Tasting menu experience at PROVENANCE"
                  fill
                  className="object-cover"
                  sizes="(max-width: 767px) 100vw, (max-width: 1279px) 58vw, 58vw"
                  priority={false}
                />
              </div>
            </div>
            <div className="md:col-span-5 lg:col-span-5 flex flex-col justify-center p-6 md:p-12">
              <div className="max-w-xl">
                <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/30 text-primary text-label-sm mb-4">
                  EXPERIENCE
                </span>
                <h2 id="experience-title" className="font-display text-headline-lg md:text-headline-lg text-on-surface mb-6">
                  A Choreographed
                  <br />
                  <span className="text-primary">Culinary Journey</span>
                </h2>
                <p className="text-body-lg text-on-surface-variant mb-8 leading-relaxed">
                  Our tasting menu is a narrative of the season — eight courses that unfold
                  like chapters, each revealing a new dimension of flavor, texture, and
                  provenance. Optional wine pairings elevate each moment.
                </p>

                <StaggerSection staggerDelay={0.15} className="space-y-4 mb-8">
                  {experienceHighlights.map((item, index) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="group flex items-start gap-4 p-4 bg-surface-container border border-outline-variant hover:border-primary hover:bg-surface-container-low transition-all duration-300"
                    >
                      <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-primary/10 border border-primary/30 group-hover:bg-primary group-hover:border-primary group-hover:text-on-primary transition-colors">
                        <Sparkles className="h-6 w-6 text-primary group-hover:text-on-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-display text-headline-md text-on-surface group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-body-md text-on-surface-variant mt-1">{item.description}</p>
                      </div>
                    </Link>
                  ))}
                </StaggerSection>

                <Button variant="primary" size="md" asChild>
                  <Link href="/experiencia">
                    Explore Experience
                    <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}