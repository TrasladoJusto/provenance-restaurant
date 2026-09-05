import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MenuPageContent } from "@/components/sections/MenuPageContent";

export const metadata: Metadata = {
  title: "Menu — PROVENANCE",
  description: "Explore our seasonal tasting menus, wine pairings, and à la carte offerings at PROVENANCE fine dining restaurant.",
};

export default function MenuPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-20">
        <MenuPageContent />
      </main>
      <Footer />
    </>
  );
}