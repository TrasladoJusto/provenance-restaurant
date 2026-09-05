"use client";

import Image from "next/image";
import { useState } from "react";
import { SectionReveal, StaggerSection } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { Search, Grid, Camera, Utensils, Building, Users, Sparkles, Wine, ChevronLeft, ChevronRight, X, Expand } from "lucide-react";

const galleryCategories = [
  { id: "all", name: "All", icon: Grid, count: 24 },
  { id: "plates", name: "Plates", icon: Utensils, count: 8 },
  { id: "space", name: "Space", icon: Building, count: 6 },
  { id: "chef", name: "Chef", icon: Camera, count: 4 },
  { id: "events", name: "Events", icon: Users, count: 4 },
  { id: "wine", name: "Wine", icon: Wine, count: 2 },
];

const galleryImages = [
  { id: 1, src: "/images/hero/full-homepage.jpg", alt: "Restaurant interior dining room", category: "space" },
  { id: 2, src: "/images/menu/full-menu.jpg", alt: "Tasting menu presentation", category: "plates" },
  { id: 3, src: "/images/experiencia/experiencia-unified.jpg", alt: "Dining experience", category: "plates" },
  { id: 4, src: "/images/chef/chef-portrait-1.jpg", alt: "Chef Marcus Volterra", category: "chef" },
  { id: 5, src: "/images/eventos/eventos-unified.jpg", alt: "Private dining room", category: "space" },
  { id: 6, src: "/images/galeria/galeria-unified.jpg", alt: "Wine cellar", category: "wine" },
  { id: 7, src: "/images/hero/editorial-homepage.jpg", alt: "Restaurant exterior", category: "space" },
  { id: 8, src: "/images/menu/wagyu.jpg", alt: "Wagyu A5 ribeye", category: "plates" },
  { id: 9, src: "/images/menu/lobster.jpg", alt: "Maine lobster dish", category: "plates" },
  { id: 10, src: "/images/chef/chef-portrait-2.jpg", alt: "Chef at work", category: "chef" },
  { id: 11, src: "/images/eventos/eventos-unified.jpg", alt: "Corporate event", category: "events" },
  { id: 12, src: "/images/chef/coordinator-portrait.jpg", alt: "Service team", category: "events" },
];

export function GaleriaPageContent() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredImages = galleryImages.filter(
    (img) => activeCategory === "all" || img.category === activeCategory
  );

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setSelectedImage(filteredImages[index].id);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "";
  };

  const navigateLightbox = (direction: number) => {
    const newIndex = (lightboxIndex + direction + filteredImages.length) % filteredImages.length;
    setLightboxIndex(newIndex);
    setSelectedImage(filteredImages[newIndex].id);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden" aria-labelledby="galeria-hero-title">
        <div className="absolute inset-0">
          <Image
            src="/images/galeria/galeria-unified.jpg"
            alt="PROVENANCE gallery preview"
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
              VISUAL JOURNEY
            </span>
            <h1 id="galeria-hero-title" className="font-display text-display-lg-mobile md:text-display-lg text-on-surface mb-4">
              Moments at
              <br />
              <span className="text-primary">PROVENANCE</span>
            </h1>
            <p className="text-body-lg text-on-surface-variant max-w-2xl">
              A curated collection of moments that define our dining experience —
              from plate to palace, from kitchen to celebration.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Category Filter */}
      <SectionReveal className="section-padding section-padding-mobile">
        <div className="container-provenance">
          <div className="flex flex-wrap gap-3 justify-center mb-12" role="tablist" aria-label="Gallery categories">
            {galleryCategories.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeCategory === cat.id}
                aria-controls={`${cat.id}-panel`}
                id={`${cat.id}-tab`}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 text-label-sm font-label transition-all duration-200 rounded-none border ${
                  activeCategory === cat.id
                    ? "bg-primary border-primary text-on-primary"
                    : "bg-surface-container border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary"
                }`}
              >
                <cat.icon className="h-4 w-4" aria-hidden="true" />
                {cat.name}
                <span className="text-label-sm opacity-60">({cat.count})</span>
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <StaggerSection staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" role="tabpanel" id={`${activeCategory}-panel`} aria-labelledby={`${activeCategory}-tab`}>
            {filteredImages.map((image, index) => (
              <article key={image.id} className="group relative aspect-[4/3] overflow-hidden cursor-pointer">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  onClick={() => openLightbox(index)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="w-full">
                    <span className="text-label-sm text-primary/90 uppercase tracking-wider">{image.category}</span>
                    <h3 className="font-display text-headline-md text-white mt-1">{image.alt}</h3>
                    <div className="mt-2 flex items-center gap-2 text-white/80 text-label-sm">
                      <Expand className="h-4 w-4" aria-hidden="true" />
                      View fullscreen
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => openLightbox(index)}
                  className="absolute inset-0 z-10"
                  aria-label={`View ${image.alt} in fullscreen`}
                />
              </article>
            ))}
            {filteredImages.length === 0 && (
              <div className="col-span-full text-center py-16">
                <p className="text-body-lg text-on-surface-variant">No images in this category.</p>
              </div>
            )}
          </StaggerSection>

          {/* Load More */}
          {filteredImages.length > 12 && (
            <div className="text-center mt-12">
              <Button variant="ghost" size="md" onClick={() => {}}>
                Load More Images
              </Button>
            </div>
          )}
        </div>
      </SectionReveal>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-background/98 backdrop-blur-sm flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Image fullscreen view"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center bg-surface-container border border-outline-variant hover:bg-primary hover:border-primary hover:text-on-primary transition-colors rounded-full"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            className="absolute left-6 w-12 h-12 flex items-center justify-center bg-surface-container border border-outline-variant hover:bg-primary hover:border-primary hover:text-on-primary transition-colors rounded-full"
            onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            className="absolute right-6 w-12 h-12 flex items-center justify-center bg-surface-container border border-outline-variant hover:bg-primary hover:border-primary hover:text-on-primary transition-colors rounded-full"
            onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="relative max-w-6xl max-h-[90vh] w-full px-4">
            {filteredImages[lightboxIndex] && (
              <>
                <Image
                  src={filteredImages[lightboxIndex].src}
                  alt={filteredImages[lightboxIndex].alt}
                  width={1200}
                  height={800}
                  className="max-w-full max-h-[80vh] object-contain"
                  priority
                />
                <div className="absolute -bottom-14 left-0 right-0 px-4 text-center">
                  <h3 className="font-display text-headline-md text-white mb-1">{filteredImages[lightboxIndex].alt}</h3>
                  <p className="text-label-sm text-white/70 uppercase tracking-wider">{filteredImages[lightboxIndex].category}</p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}