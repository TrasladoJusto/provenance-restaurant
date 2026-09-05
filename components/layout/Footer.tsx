import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";

const restaurantInfo = {
  name: "PROVENANCE",
  tagline: "Fine Dining Restaurant",
  address: "123 Culinary Lane, Gastronomy District, NY 10001",
  phone: "+1 (212) 555-0199",
  email: "reservations@provenance-restaurant.com",
  hours: {
    weekdays: "Tue–Sat: 5:30 PM – 10:30 PM",
    sunday: "Sun–Mon: Closed",
  },
};

const footerLinks = {
  experience: [
    { name: "Tasting Menu", href: "/menu" },
    { name: "Wine Pairing", href: "/menu#wine" },
    { name: "Chef's Table", href: "/chef" },
    { name: "Dietary Requirements", href: "/menu#dietary" },
  ],
  events: [
    { name: "Private Dining", href: "/eventos" },
    { name: "Corporate Events", href: "/eventos#corporate" },
    { name: "Weddings", href: "/eventos#weddings" },
    { name: "Buyout", href: "/eventos#buyout" },
  ],
  info: [
    { name: "About Us", href: "/chef" },
    { name: "Gallery", href: "/galeria" },
    { name: "Press", href: "/press" },
    { name: "Careers", href: "/careers" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Accessibility", href: "/accessibility" },
  ],
};

const socialLinks = [
  { name: "Instagram", href: "https://instagram.com/provenance", icon: Instagram },
  { name: "Facebook", href: "https://facebook.com/provenance", icon: Facebook },
  { name: "Twitter", href: "https://twitter.com/provenance", icon: Twitter },
];

export function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant" role="contentinfo">
      <div className="container-provenance section-padding section-padding-mobile">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="font-display text-display-lg-mobile md:text-display-lg text-on-surface">
              {restaurantInfo.name}
            </Link>
            <p className="text-body-md text-on-surface-variant max-w-xs">
              An intimate fine dining experience celebrating seasonal ingredients,
              masterful technique, and the provenance of every element on your plate.
            </p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-10 h-10 flex items-center justify-center border border-outline-variant hover:border-primary hover:text-primary transition-colors rounded-full"
                >
                  <social.icon className="h-5 w-5 text-on-surface-variant" />
                </a>
              ))}
            </div>
          </div>

          {/* Experience */}
          <nav aria-label="Experience links">
            <h3 className="font-label text-label-md text-on-surface mb-4">Experience</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.experience.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-body-md text-on-surface-variant hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Events */}
          <nav aria-label="Events links">
            <h3 className="font-label text-label-md text-on-surface mb-4">Private Events</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.events.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-body-md text-on-surface-variant hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact & Info */}
          <div className="space-y-6">
            <div>
              <h3 className="font-label text-label-md text-on-surface mb-4">Contact</h3>
              <address className="not-italic space-y-3 text-body-md text-on-surface-variant">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <p>{restaurantInfo.address}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" aria-hidden="true" />
                  <a href={`tel:${restaurantInfo.phone}`} className="hover:text-primary transition-colors">
                    {restaurantInfo.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" aria-hidden="true" />
                  <a href={`mailto:${restaurantInfo.email}`} className="hover:text-primary transition-colors">
                    {restaurantInfo.email}
                  </a>
                </div>
              </address>
            </div>
            <div>
              <h3 className="font-label text-label-md text-on-surface mb-4">Hours</h3>
              <div className="space-y-2 text-body-md text-on-surface-variant">
                <p>{restaurantInfo.hours.weekdays}</p>
                <p>{restaurantInfo.hours.sunday}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-outline-variant">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-label-sm text-on-surface-variant/60">
              © {new Date().getFullYear()} {restaurantInfo.name}. All rights reserved.
            </p>
            <nav aria-label="Legal links" className="flex flex-wrap justify-center gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-label-sm text-on-surface-variant/60 hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}