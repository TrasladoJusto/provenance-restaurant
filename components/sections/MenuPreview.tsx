"use client";

import Image from "next/image";
import Link from "next/link";
import { SectionReveal, StaggerSection } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { DishCard } from "@/components/ui/Card";
import { ArrowRight, Utensils, Wine, Leaf, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const menuCategories = [
  { name: "Tasting Menu", description: "8-course seasonal journey", price: 295, icon: Utensils, featured: true },
  { name: "Wine Pairing", description: "Sommelier-selected vintages", price: 185, icon: Wine, featured: false },
  { name: "Vegetarian", description: "Plant-based tasting menu", price: 275, icon: Leaf, featured: false },
  { name: "Chef's Table", description: "Bespoke counter experience", price: 450, icon: Sparkles, featured: false },
];

const featuredDishes = [
  {
    name: "Hokkaido Scallop",
    description: "Cauliflower purée, caviar, brown butter",
    price: 42,
    dietary: ["GF"],
    image: "/images/menu/full-menu.jpg",
  },
  {
    name: "Wagyu A5 Ribeye",
    description: "Charred onion, black garlic, truffle jus",
    price: 98,
    dietary: ["GF"],
    image: "/images/menu/wagyu.jpg",
  },
  {
    name: "Maine Lobster",
    description: "Saffron risotto, fennel, citrus beurre blanc",
    price: 68,
    dietary: ["GF"],
    image: "/images/menu/lobster.jpg",
  },
];

export function MenuPreview() {
  return (
    <section className="bg-surface-container-lowest section-padding section-padding-mobile" aria-labelledby="menu-title">
      <SectionReveal>
        <div className="container-provenance">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/30 text-primary text-label-sm mb-4">
                CULINARY OFFERINGS
              </span>
              <h2 id="menu-title" className="font-display text-headline-lg md:text-headline-lg text-on-surface mb-2">
                Menus Crafted
                <br />
                with <span className="text-primary">Intention</span>
              </h2>
              <p className="text-body-md text-on-surface-variant max-w-xs">
                Seasonal tasting menus, expert wine pairings, and bespoke experiences.
              </p>
            </div>
            <Button variant="ghost" size="md" asChild className="flex items-center gap-2 md:ml-auto">
              <Link href="/menu">
                View Full Menu
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {menuCategories.map((category) => (
              <article
                key={category.name}
                className={cn(
                  "group p-6 border transition-all duration-300",
                  category.featured
                    ? "bg-primary border-primary text-on-primary"
                    : "bg-surface-container border-outline-variant hover:border-primary"
                )}
              >
                <div
                  className={cn(
                    "w-12 h-12 flex items-center justify-center mb-4 transition-colors",
                    category.featured
                      ? "bg-on-primary/10 border border-on-primary/30"
                      : "bg-primary/10 border border-primary/30 group-hover:bg-primary group-hover:border-primary group-hover:text-on-primary"
                  )}
                >
                  <category.icon
                    className={cn(
                      "h-7 w-7",
                      category.featured ? "text-on-primary" : "text-primary group-hover:text-on-primary"
                    )}
                    aria-hidden="true"
                  />
                </div>
                <h3
                  className={cn(
                    "font-display text-headline-md mb-2 transition-colors",
                    category.featured ? "text-on-primary" : "text-on-surface group-hover:text-primary"
                  )}
                >
                  {category.name}
                </h3>
                <p
                  className={cn(
                    "text-body-md mb-3",
                    category.featured ? "text-on-primary/80" : "text-on-surface-variant"
                  )}
                >
                  {category.description}
                </p>
                <div className="flex items-baseline gap-2">
                  <span
                    className={cn(
                      "font-display text-headline-lg",
                      category.featured ? "text-on-primary" : "text-primary"
                    )}
                  >
                    {formatCurrency(category.price)}
                  </span>
                  <span
                    className={cn(
                      "text-label-sm",
                      category.featured ? "text-on-primary/60" : "text-on-surface-variant/60"
                    )}
                  >
                    per person
                  </span>
                </div>
                {category.featured && (
                  <span className="inline-block mt-4 px-3 py-1 bg-on-primary/10 border border-on-primary/30 text-on-primary text-label-sm">
                    Most Popular
                  </span>
                )}
              </article>
            ))}
          </div>

          <StaggerSection staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {featuredDishes.map((dish) => (
              <Link
                key={dish.name}
                href={`/menu/${slugify(dish.name)}`}
                className="group bg-surface-container border border-outline-variant hover:border-primary overflow-hidden"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 767px) 100vw, (max-width: 1279px) 33vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {dish.dietary.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 text-label-sm bg-primary/10 text-primary border border-primary/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-display text-headline-md text-on-surface mb-2 group-hover:text-primary transition-colors">
                    {dish.name}
                  </h3>
                  <p className="text-body-md text-on-surface-variant mb-3">{dish.description}</p>
                  <div className="flex items-baseline justify-between">
                    <span className="font-display text-headline-lg text-primary">{formatCurrency(dish.price)}</span>
                    <span className="text-label-sm text-on-surface-variant/60">Add to tasting</span>
                  </div>
                </div>
              </Link>
            ))}
          </StaggerSection>

          <div className="text-center">
            <Button variant="primary" size="md" asChild>
              <Link href="/menu">
                Explore Complete Menu
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}