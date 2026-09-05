import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GaleriaPageContent } from "@/components/sections/GaleriaPageContent";

export const metadata: Metadata = {
  title: "Gallery — PROVENANCE",
  description: "Browse our gallery of dishes, dining spaces, private events, and culinary moments at PROVENANCE fine dining restaurant.",
};

export default function GaleriaPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-20">
        <GaleriaPageContent />
      </main>
      <Footer />
    </>
  );
}