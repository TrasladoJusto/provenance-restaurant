"use client";

import Link from "next/link";
import { SectionReveal } from "@/components/animations/ScrollReveal";
import { ArrowRight, Clock, MapPin, Phone, Mail } from "lucide-react";

export function ReservationCTA() {
  return (
    <section className="bg-primary section-padding section-padding-mobile relative overflow-hidden" aria-labelledby="reservation-title">
      <div className="absolute inset-0 bg-[url('/images/hero/full-homepage.jpg')] bg-cover bg-center opacity-10" aria-hidden="true" />
      <SectionReveal>
        <div className="container-provenance relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/30 text-white text-label-sm mb-6">
              RESERVE YOUR TABLE
            </span>
            <h2 id="reservation-title" className="font-display text-headline-lg md:text-display-lg text-white mb-6">
              Ready for an
              <br />
              Unforgettable Evening?
            </h2>
            <p className="text-body-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Secure your place at PROVENANCE. Our reservation system offers real-time
              availability for lunch, dinner, and chef's table experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/reservas" className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-label text-label-md hover:bg-white/90 transition-colors min-h-[56px]">
                Reserve Online
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
              <Link href="/reservas#chefs-table" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-label text-label-md hover:bg-white/10 transition-colors min-h-[56px]">
                Chef's Table
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="p-4">
                <Clock className="h-10 w-10 mx-auto mb-3 text-white/80" aria-hidden="true" />
                <h3 className="font-display text-headline-md text-white mb-1">Tue–Sat</h3>
                <p className="text-label-sm text-white/60">5:30 PM – 10:30 PM</p>
              </div>
              <div className="p-4">
                <MapPin className="h-10 w-10 mx-auto mb-3 text-white/80" aria-hidden="true" />
                <h3 className="font-display text-headline-md text-white mb-1">Location</h3>
                <p className="text-label-sm text-white/60">123 Culinary Lane</p>
              </div>
              <div className="p-4">
                <Phone className="h-10 w-10 mx-auto mb-3 text-white/80" aria-hidden="true" />
                <h3 className="font-display text-headline-md text-white mb-1">Call Us</h3>
                <p className="text-label-sm text-white/60">+1 (212) 555-0199</p>
              </div>
              <div className="p-4">
                <Mail className="h-10 w-10 mx-auto mb-3 text-white/80" aria-hidden="true" />
                <h3 className="font-display text-headline-md text-white mb-1">Email</h3>
                <p className="text-label-sm text-white/60">reservations@...</p>
              </div>
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}