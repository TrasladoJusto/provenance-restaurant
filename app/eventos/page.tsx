import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EventosPageContent } from "@/components/sections/EventosPageContent";

export const metadata: Metadata = {
  title: "Private Events — PROVENANCE",
  description: "Host your private event at PROVENANCE. Intimate dining salon, full venue buyout, corporate events, and weddings.",
};

export default function EventosPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-20">
        <EventosPageContent />
      </main>
      <Footer />
    </>
  );
}