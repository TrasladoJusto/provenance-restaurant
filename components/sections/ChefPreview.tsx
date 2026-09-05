"use client";

import Image from "next/image";
import Link from "next/link";
import { SectionReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function ChefPreview() {
  return (
    <section className="section-padding section-padding-mobile" aria-labelledby="chef-title">
      <SectionReveal>
        <div className="container-provenance">
          <div className="asymmetric-grid">
            <div className="md:col-span-5 lg:col-span-5 flex flex-col justify-center p-6 md:p-12 order-2 md:order-1">
              <div className="max-w-xl">
                <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/30 text-primary text-label-sm mb-4">
                  CULINARY VISION
                </span>
                <h2 id="chef-title" className="font-display text-headline-lg md:text-headline-lg text-on-surface mb-6">
                  Chef Marcus
                  <br />
                  <span className="text-primary">Volterra</span>
                </h2>
                <p className="text-body-lg text-on-surface-variant mb-6 leading-relaxed">
                  With two decades at the world's most acclaimed restaurants — including
                  three-Michelin-starred establishments in Paris, Tokyo, and New York —
                  Chef Volterra brings a philosophy rooted in respect for ingredients
                  and the stories they carry.
                </p>
                <p className="text-body-md text-on-surface-variant mb-8 leading-relaxed">
                  "Cooking is not about transformation. It's about revelation —
                  showing what was always there, waiting to be discovered."
                </p>

                <div className="flex flex-wrap gap-6 mb-8">
                  <div>
                    <p className="font-display text-headline-md text-primary">24</p>
                    <p className="text-label-sm text-on-surface-variant">Years Experience</p>
                  </div>
                  <div>
                    <p className="font-display text-headline-md text-primary">3</p>
                    <p className="text-label-sm text-on-surface-variant">Michelin Stars</p>
                  </div>
                  <div>
                    <p className="font-display text-headline-md text-primary">12</p>
                    <p className="text-label-sm text-on-surface-variant">Countries Cooked</p>
                  </div>
                </div>

                <Button variant="primary" size="md" asChild>
                  <Link href="/chef">
                    Meet the Chef
                    <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="md:col-span-7 lg:col-span-7 relative order-1 md:order-2">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/chef/chef-portrait-1.jpg"
                  alt="Chef Marcus Volterra in the kitchen"
                  fill
                  className="object-cover"
                  sizes="(max-width: 767px) 100vw, (max-width: 1279px) 58vw, 58vw"
                />
                <div className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 w-full h-full bg-primary/5 border border-primary/30" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}