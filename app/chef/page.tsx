import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ChefPageContent } from "@/components/sections/ChefPageContent";

export const metadata: Metadata = {
  title: "Chef Marcus Volterra — PROVENANCE",
  description: "Meet Chef Marcus Volterra, the culinary visionary behind PROVENANCE. 24 years of experience, 3 Michelin stars, and a philosophy rooted in provenance.",
};

export default function ChefPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-20">
        <ChefPageContent />
      </main>
      <Footer />
    </>
  );
}