"use client";

import Link from "next/link";
import {
  Globe,
  ExternalLink,
  Music,
  Gamepad2,
  Mail,
  Shield,
  FileText,
  ChevronRight,
} from "lucide-react";
import { siteConfig } from "@/config/config";

const socialIcons: Record<string, React.ReactNode> = {
  youtube: <Globe size={20} />,
  twitter: <ExternalLink size={20} />,
  instagram: <ExternalLink size={20} />,
  tiktok: <Music size={20} />,
  twitch: <Gamepad2 size={20} />,
};

const footerLinks = [
  {
    title: "Pages",
    links: [
      { label: "Accueil", href: "/" },
      { label: "Présentation", href: "/presentation" },
      { label: "Connexion", href: "/connexion" },
      { label: "Équipe", href: "/equipe" },
      { label: "Actualités", href: "/actualites" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Informations",
    links: [
      { label: "Règlement", href: "/reglement" },
      { label: "Lexique Chicago", href: "/lexique-chicago" },
      { label: "Guide Débutant", href: "/guide-debutant" },
      { label: "Comment jouer", href: "/comment-jouer" },
      { label: "Support", href: "/support" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Systèmes",
    links: [
      { label: "Système Économique", href: "/economie" },
      { label: "Système Drogue", href: "/drogue" },
      { label: "Système Armes", href: "/armes" },
      { label: "Système Véhicules", href: "/vehicules" },
      { label: "Système Logements", href: "/logements" },
      { label: "Système Crafting", href: "/crafting" },
    ],
  },
  {
    title: "Légal",
    links: [
      { label: "Mentions Légales", href: "/mentions-legales" },
      { label: "Confidentialité", href: "/confidentialite" },
      { label: "Changelog", href: "/changelog" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] border-t border-[#2a2a2a]/50">
      <div className="absolute inset-0 bg-gradient-to-b from-[#7C3AED]/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-[#7C3AED] rounded-full opacity-30 blur-md" />
                <img
                  src={siteConfig.logo}
                  alt={siteConfig.siteName}
                  className="relative w-full h-full object-contain"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
              </div>
              <span className="text-xl font-bold neon-text">
                {siteConfig.logoText}
              </span>
            </Link>
            <p className="text-[#9ca3af] text-sm leading-relaxed mb-6">
              {siteConfig.description}
            </p>
            <div className="flex flex-wrap gap-3">
              {Object.entries(siteConfig.socials).map(([key, url]) =>
                url ? (
                  <Link
                    key={key}
                    href={url}
                    target="_blank"
                    className="w-10 h-10 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center text-[#9ca3af] hover:text-[#7C3AED] hover:border-[#7C3AED] hover:bg-[#7C3AED]/10 transition-all duration-300"
                  >
                    {socialIcons[key]}
                  </Link>
                ) : null
              )}
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-1 text-[#9ca3af] hover:text-white transition-colors text-sm group"
                    >
                      <ChevronRight
                        size={12}
                        className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-[#7C3AED]"
                      />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-[#2a2a2a]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#9ca3af] text-sm">
              &copy; {new Date().getFullYear()} {siteConfig.siteName}. Tous droits
              rservs.
            </p>
            <p className="text-[#9ca3af] text-sm">
              Propuls par la communaut{" "}
              <span className="text-[#7C3AED]">{siteConfig.siteName}</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
