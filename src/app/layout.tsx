import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { LoadingScreen } from "@/components/layout/loading-screen";
import { PageTransition } from "@/components/layout/page-transition";
import { BackToTop } from "@/components/shared/back-to-top";
import { CustomCursor } from "@/components/shared/custom-cursor";
import { siteConfig } from "@/config/config";

export const metadata: Metadata = {
  metadataBase: new URL("https://drilltown.fr"),
  title: {
    default: `${siteConfig.siteName} - ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.siteName}`,
  },
  description: siteConfig.description,
  keywords: [
    "FiveM",
    "DrillTown",
    "RP",
    "Roleplay",
    "Chicago",
    "Serveur RP",
    "GTA V",
    "Drill",
    "OTF",
    "NLMB",
  ],
  authors: [{ name: siteConfig.siteName }],
  creator: siteConfig.siteName,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://drilltown.fr",
    siteName: siteConfig.siteName,
    title: `${siteConfig.siteName} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: "/images/og-image.svg",
        width: 1200,
        height: 630,
        alt: siteConfig.siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.siteName} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ["/images/og-image.svg"],
  },
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
  icons: {
    icon: [
      { url: siteConfig.favicon, type: "image/png" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: siteConfig.favicon,
  },
};

import { AudioPlayer } from "@/components/shared/audio-player";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" data-scroll-behavior="smooth">
      <body
        className="antialiased min-h-screen bg-[#0a0a0a]"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: siteConfig.siteName,
                url: "https://drilltown.fr",
                logo: "https://drilltown.fr/logo.png",
                description: siteConfig.description,
                sameAs: Object.values(siteConfig.socials).filter(Boolean),
                contactPoint: {
                  "@type": "ContactPoint",
                  email: siteConfig.contact.email,
                  contactType: "customer support",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "VideoGame",
                name: siteConfig.server.name,
                description: siteConfig.description,
                applicationCategory: "Game",
                operatingSystem: "Windows",
                gamePlatform: "FiveM",
                author: { "@type": "Organization", name: siteConfig.siteName },
                offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
                audience: { "@type": "Audience", audienceType: "Gamers" },
              },
            ]),
          }}
        />
        <LoadingScreen />
        <Navbar />
        <main className="relative z-10">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <BackToTop />
        <AudioPlayer />
        <CustomCursor />
      </body>
    </html>
  );
}
