"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";

const navigation = [
  { name: "Menu", href: "/menu" },
  { name: "Chef", href: "/chef" },
  { name: "Experience", href: "/experiencia" },
  { name: "Events", href: "/eventos" },
  { name: "Gallery", href: "/galeria" },
  { name: "Reservations", href: "/reservas" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-outline-variant"
          : "bg-transparent"
      )}
      role="banner"
    >
      <nav className="container-provenance" aria-label="Main navigation">
        <div className="flex items-center justify-between h-[80px] md:h-[100px]">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-display-lg-mobile md:text-display-lg text-on-surface"
            aria-label="PROVENANCE - Home"
          >
            PROVENANCE
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-label-md text-on-surface-variant hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[1px] after:bg-primary after:transition-all after:duration-300 hover:after:w-1/2 hover:after:left-0"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/contacto">Contact</Link>
            </Button>
            <Button variant="primary" size="sm" asChild>
              <Link href="/reservas">Reserve a Table</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-on-surface"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden py-6 border-t border-outline-variant animate-slide-down">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-3 text-label-md text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-outline-variant">
                <Button variant="ghost" size="md" className="w-full" asChild>
                  <Link href="/contacto" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                </Button>
                <Button variant="primary" size="md" className="w-full" asChild>
                  <Link href="/reservas" onClick={() => setIsMobileMenuOpen(false)}>Reserve a Table</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}