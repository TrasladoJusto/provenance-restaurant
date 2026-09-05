"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal, Parallax } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  backgroundImage?: string;
}

export function Hero({ backgroundImage = "/images/hero/full-homepage.jpg" }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" aria-labelledby="hero-title">
      {/* Background Image with Parallax */}
      <Parallax speed={0.15} className="absolute inset-0 z-0">
        <div className="absolute inset-0">
<Image
             src={backgroundImage}
             alt="PROVENANCE Fine Dining Restaurant Interior"
             fill
             priority
             className="object-cover"
             sizes="100vw"
             quality={75}
             fetchPriority="high"
           />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
        </div>
      </Parallax>

      {/* Content */}
      <div className="container-provenance relative z-10 w-full section-padding section-padding-mobile">
        <div className="max-w-4xl">
          <ScrollReveal variant="fadeInUp" delay={0.1}>
            <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/30 text-primary text-label-sm mb-6">
              MICHELIN GUIDE 2024
            </span>
          </ScrollReveal>

          <ScrollReveal variant="fadeInUp" delay={0.2}>
            <h1
              id="hero-title"
              className="font-display text-display-lg-mobile md:text-display-lg text-on-surface leading-tight mb-8"
            >
              Where Provenance{" "}
              <br />
              <span className="text-primary">Meets Plate</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="fadeInUp" delay={0.3}>
            <p className="text-body-lg text-on-surface-variant max-w-2xl mb-10 leading-relaxed">
              An intimate fine dining experience celebrating seasonal ingredients,
              masterful technique, and the story behind every element on your plate.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fadeInUp" delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" asChild>
                <Link href="/reservas">
                  Reserve a Table
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <Link href="/menu">View Menu</Link>
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fadeInUp" delay={0.6}>
            <div className="mt-16 flex flex-wrap items-center gap-8 text-label-sm text-on-surface-variant/70">
              <div className="flex items-center gap-2">
                <span className="text-primary font-label">★</span>
                Michelin Starred 2024
              </div>
              <div className="flex items-center gap-2 border-l border-outline-variant pl-4">
                <span className="text-primary font-label">🍷</span>
                Curated Wine Pairings
              </div>
              <div className="flex items-center gap-2 border-l border-outline-variant pl-4">
                <span className="text-primary font-label">👨‍🍳</span>
                Chef's Table Available
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollReveal variant="fadeIn" delay={1}>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="h-8 w-8 text-on-surface-variant/50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </ScrollReveal>
    </section>
  );
}