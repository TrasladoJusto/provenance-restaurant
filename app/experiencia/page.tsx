import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ExperienciaPageContent } from "@/components/sections/ExperienciaPageContent";

export const metadata: Metadata = {
  title: "The Experience — PROVENANCE",
  description: "Discover our tasting menu experience, wine pairings, and chef's table at PROVENANCE fine dining restaurant.",
};

export default function ExperienciaPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-20">
        <ExperienciaPageContent />
      </main>
      <Footer />
    </>
  );
}