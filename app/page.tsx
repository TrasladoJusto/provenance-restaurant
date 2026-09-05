import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ExperiencePreview } from "@/components/sections/ExperiencePreview";
import { ChefPreview } from "@/components/sections/ChefPreview";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { EventsPreview } from "@/components/sections/EventsPreview";
import { ReservationCTA } from "@/components/sections/ReservationCTA";
import { MenuPreview } from "@/components/sections/MenuPreview";
import { SectionReveal, StaggerSection } from "@/components/animations/ScrollReveal";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-20 md:pt-0">
        <Hero />

        <SectionReveal className="section-padding section-padding-mobile">
          <div className="container-provenance">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/30 text-primary text-label-sm mb-4">
                OUR PHILOSOPHY
              </span>
              <h2 className="font-display text-headline-lg md:text-headline-lg text-on-surface mb-6">
                The Art of
                <br />
                <span className="text-primary">Provenance</span>
              </h2>
              <p className="text-body-lg text-on-surface-variant leading-relaxed">
                Every ingredient tells a story. We trace each element from its source
                to your plate, honoring the farmers, foragers, and artisans who make
                exceptional dining possible.
              </p>
            </div>

            <StaggerSection staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <article className="text-center p-6 hover:bg-surface-container transition-colors">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary/10 border border-primary/30">
                  <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-headline-md text-on-surface mb-2">Local Sourcing</h3>
                <p className="text-body-md text-on-surface-variant">Partnerships with farms within 100 miles, ensuring peak freshness and seasonal authenticity.</p>
              </article>

              <article className="text-center p-6 hover:bg-surface-container transition-colors">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary/10 border border-primary/30">
                  <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-headline-md text-on-surface mb-2">Seasonal Mastery</h3>
                <p className="text-body-md text-on-surface-variant">Menus evolve quarterly, reflecting nature's rhythm and the finest available ingredients.</p>
              </article>

              <article className="text-center p-6 hover:bg-surface-container transition-colors">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary/10 border border-primary/30">
                  <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-headline-md text-on-surface mb-2">Wine Harmony</h3>
                <p className="text-body-md text-on-surface-variant">Curated pairings from boutique vineyards, each selected to elevate the dining journey.</p>
              </article>
            </StaggerSection>
          </div>
        </SectionReveal>

        <MenuPreview />
        <ExperiencePreview />
        <ChefPreview />
        <GalleryPreview />
        <EventsPreview />
        <ReservationCTA />
      </main>
      <Footer />
    </>
  );
}