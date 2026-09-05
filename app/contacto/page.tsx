import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactoPageContent } from "@/components/sections/ContactoPageContent";

export const metadata: Metadata = {
  title: "Contact — PROVENANCE",
  description: "Contact PROVENANCE fine dining restaurant. Reservations, private events, press inquiries, and general questions.",
};

export default function ContactoPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-20">
        <ContactoPageContent />
      </main>
      <Footer />
    </>
  );
}