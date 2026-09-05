"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionReveal, StaggerSection } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { DishCard } from "@/components/ui/Card";
import { ArrowRight, Utensils, Wine, Leaf, Sparkles, Search, Filter, X } from "lucide-react";

const menuCategories = [
  { id: "all", name: "All", icon: Utensils },
  { id: "tasting", name: "Tasting Menu", icon: Utensils },
  { id: "wine", name: "Wine Pairing", icon: Wine },
  { id: "vegetarian", name: "Vegetarian", icon: Leaf },
  { id: "chefs-table", name: "Chef's Table", icon: Sparkles },
];

const dishes = [
  {
    id: 1,
    name: "Hokkaido Scallop",
    description: "Cauliflower purée, Oscietra caviar, brown butter emulsion, chive oil",
    price: 42,
    category: "tasting",
    dietary: ["GF"],
    image: "/images/menu/full-menu.jpg",
    featured: true,
  },
  {
    id: 2,
    name: "Wagyu A5 Ribeye",
    description: "Charred cipollini onion, black garlic purée, truffle jus, potato pavé",
    price: 98,
    category: "tasting",
    dietary: ["GF"],
    image: "/images/menu/wagyu.jpg",
  },
  {
    id: 3,
    name: "Maine Lobster",
    description: "Saffron risotto, fennel pollen, citrus beurre blanc, chervil",
    price: 68,
    category: "tasting",
    dietary: ["GF"],
    image: "/images/menu/lobster.jpg",
  },
  {
    id: 4,
    name: "Vegetable Tasting",
    description: "Seasonal vegetables, fermented grains, herb oils, edible flowers",
    price: 65,
    category: "vegetarian",
    dietary: ["V", "GF", "VG"],
    image: "/images/menu/vegetarian.jpg",
    featured: true,
  },
  {
    id: 5,
    name: "Foie Gras Torchon",
    description: "Brioche, fig jam, pickled cherries, Sauternes gelée",
    price: 52,
    category: "tasting",
    dietary: [],
    image: "/images/menu/foie-gras.jpg",
  },
  {
    id: 6,
    name: "Dry-Aged Duck Breast",
    description: "Cherry gastrique, turnip, black garlic, sauce bigarade",
    price: 72,
    category: "tasting",
    dietary: ["GF"],
    image: "/images/menu/duck.jpg",
  },
];

const winePairings = [
  { course: "Amuse-Bouche", wine: "Champagne Krug Grande Cuvée", region: "Champagne, France" },
  { course: "Hokkaido Scallop", wine: "Chablis Grand Cru Les Clos", region: "Burgundy, France" },
  { course: "Wagyu A5", wine: "Barolo Riserva", region: "Piedmont, Italy" },
  { course: "Maine Lobster", wine: "Meursault Perrières", region: "Burgundy, France" },
  { course: "Dry-Aged Duck", wine: "Gevrey-Chambertin", region: "Burgundy, France" },
  { course: "Dessert", wine: "Sauternes Château d'Yquem", region: "Bordeaux, France" },
];

export function MenuPageContent() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showWinePairing, setShowWinePairing] = useState(false);

  const filteredDishes = dishes.filter((dish) => {
    const matchesCategory = activeCategory === "all" || dish.category === activeCategory;
    const matchesSearch = dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dish.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden" aria-labelledby="menu-hero-title">
        <div className="absolute inset-0">
          <Image
            src="/images/menu/full-menu.jpg"
            alt="Tasting menu presentation at PROVENANCE"
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
              OUR MENU
            </span>
            <h1 id="menu-hero-title" className="font-display text-display-lg-mobile md:text-display-lg text-on-surface mb-4">
              Seasonal
              <br />
              <span className="text-primary">Tasting Menus</span>
            </h1>
            <p className="text-body-lg text-on-surface-variant max-w-2xl">
              Eight courses that tell the story of the season. Each dish is a dialogue
              between ingredient, technique, and terroir.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Category Filter */}
      <SectionReveal className="section-padding section-padding-mobile">
        <div className="container-provenance">
          <div className="flex flex-wrap gap-3 justify-center mb-12" role="tablist" aria-label="Menu categories">
            {menuCategories.map((cat) => (
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
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-on-surface-variant/50" aria-hidden="true" />
              <input
                type="search"
                placeholder="Search dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-surface-container border border-outline-variant text-on-surface placeholder:text-on-surface-variant/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                aria-label="Search menu items"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant/50 hover:text-primary transition-colors"
                  aria-label="Clear search"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>

          {/* Dishes Grid */}
          <StaggerSection staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="tabpanel" id={`${activeCategory}-panel`} aria-labelledby={`${activeCategory}-tab`}>
            {filteredDishes.map((dish) => (
              <DishCard key={dish.id} {...dish} onClick={() => {}} />
            ))}
            {filteredDishes.length === 0 && (
              <div className="col-span-full text-center py-16">
                <p className="text-body-lg text-on-surface-variant">No dishes found matching your criteria.</p>
              </div>
            )}
          </StaggerSection>

          {/* Wine Pairing Toggle */}
          <SectionReveal className="mt-16">
            <div className="text-center">
              <Button
                variant={showWinePairing ? "primary" : "ghost"}
                size="md"
                onClick={() => setShowWinePairing(!showWinePairing)}
                className="flex items-center gap-2 mx-auto"
              >
                <Wine className="h-5 w-5" aria-hidden="true" />
                {showWinePairing ? "Hide" : "Show"} Wine Pairings
              </Button>
            </div>
          </SectionReveal>

          {/* Wine Pairings */}
          {showWinePairing && (
            <SectionReveal className="mt-12">
              <div className="container-provenance">
                <h2 className="font-display text-headline-lg text-on-surface text-center mb-10">
                  Sommelier's
                  <br />
                  <span className="text-primary">Wine Pairings</span>
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-left" role="table">
                    <thead>
                      <tr className="border-b border-outline-variant">
                        <th className="font-label text-label-md text-on-surface-variant pb-4">Course</th>
                        <th className="font-label text-label-md text-on-surface-variant pb-4">Wine</th>
                        <th className="font-label text-label-md text-on-surface-variant pb-4">Region</th>
                      </tr>
                    </thead>
                    <tbody>
                      {winePairings.map((pairing, index) => (
                        <tr key={index} className="border-b border-outline-variant/50 hover:bg-surface-container transition-colors">
                          <td className="font-display text-headline-md text-on-surface py-4">{pairing.course}</td>
                          <td className="text-body-md text-on-surface py-4">{pairing.wine}</td>
                          <td className="text-body-md text-on-surface-variant py-4">{pairing.region}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="text-center mt-8">
                  <Button variant="ghost" size="md">
                    Add Wine Pairing: $185 per person
                  </Button>
                </div>
              </div>
            </SectionReveal>
          )}

          {/* CTA */}
          <SectionReveal className="mt-16">
            <div className="text-center">
              <Button variant="primary" size="lg" asChild>
                <Link href="/reservas">
                  Reserve Your Experience
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </SectionReveal>
        </div>
      </SectionReveal>
    </>
  );
}