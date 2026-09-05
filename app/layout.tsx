import type { Metadata, Viewport } from "next";
import { Inter, Libre_Caslon_Text } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const libreCaslon = Libre_Caslon_Text({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://provenance-restaurant.com"),
  title: "PROVENANCE — Fine Dining Restaurant",
  description: "Experience culinary excellence at PROVENANCE. Michelin-starred fine dining with seasonal tasting menus, curated wine pairings, and private dining experiences.",
  keywords: ["fine dining", "michelin restaurant", "tasting menu", "wine pairing", "private dining", "seasonal cuisine"],
  authors: [{ name: "PROVENANCE Restaurant" }],
  creator: "PROVENANCE",
  publisher: "PROVENANCE",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://provenance-restaurant.com",
    siteName: "PROVENANCE",
    title: "PROVENANCE — Fine Dining Restaurant",
    description: "Experience culinary excellence at PROVENANCE. Michelin-starred fine dining with seasonal tasting menus, curated wine pairings, and private dining experiences.",
    images: [
      {
        url: "/images/hero/full-homepage.jpg",
        width: 1200,
        height: 630,
        alt: "PROVENANCE Fine Dining Restaurant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PROVENANCE — Fine Dining Restaurant",
    description: "Experience culinary excellence at PROVENANCE. Michelin-starred fine dining with seasonal tasting menus, curated wine pairings, and private dining experiences.",
    images: ["/images/hero/full-homepage.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#16130e",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${libreCaslon.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}