import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ReservasPageContent } from "@/components/sections/ReservasPageContent";

export const metadata: Metadata = {
  title: "Reservations — PROVENANCE",
  description: "Reserve your table at PROVENANCE fine dining restaurant. Real-time availability for dinner, chef's table, and private dining.",
};

export default function ReservasPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-20">
        <ReservasPageContent />
      </main>
      <Footer />
    </>
  );
}