"use client";

import Image from "next/image";
import Link from "next/link";
import { SectionReveal, StaggerSection } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Search } from "lucide-react";

const galleryImages = [
  { src: "/images/hero/full-homepage.jpg", alt: "Restaurant interior", category: "Space" },
  { src: "/images/menu/full-menu.jpg", alt: "Tasting menu dish", category: "Plates" },
  { src: "/images/chef/chef-portrait-1.jpg", alt: "Chef at work", category: "Chef" },
  { src: "/images/experiencia/experiencia-unified.jpg", alt: "Dining experience", category: "Experience" },
  { src: "/images/eventos/eventos-unified.jpg", alt: "Private dining room", category: "Events" },
  { src: "/images/galeria/galeria-unified.jpg", alt: "Wine cellar", category: "Wine" },
];

export function GalleryPreview() {
  return (
    <section className="bg-surface-container-lowest section-padding section-padding-mobile" aria-labelledby="gallery-title">
      <SectionReveal>
        <div className="container-provenance">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/30 text-primary text-label-sm mb-4">
                VISUAL JOURNEY
              </span>
              <h2 id="gallery-title" className="font-display text-headline-lg md:text-headline-lg text-on-surface mb-2">
                Moments at
                <br />
                <span className="text-primary">PROVENANCE</span>
              </h2>
              <p className="text-body-md text-on-surface-variant max-w-xs">
                A curated collection of moments that define our dining experience.
              </p>
            </div>
            <Button variant="ghost" size="md" asChild className="flex items-center gap-2 md:ml-auto">
              <Link href="/galeria">
                <Search className="h-4 w-4" aria-hidden="true" />
                View Full Gallery
              </Link>
            </Button>
          </div>

          <StaggerSection staggerDelay={0.1} className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <Link
                key={image.src}
                href={`/galeria#${image.category.toLowerCase()}`}
                className="group relative aspect-[4/3] overflow-hidden"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 767px) 50vw, (max-width: 1279px) 33vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <span className="text-label-sm text-primary/80">{image.category}</span>
                    <h3 className="font-display text-headline-md text-on-surface mt-1">{image.alt}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </StaggerSection>

          <div className="text-center mt-12">
            <Button variant="primary" size="md" asChild>
              <Link href="/galeria">
                View All Galleries
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}