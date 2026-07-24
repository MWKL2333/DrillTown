"use client";

import { PageHeader } from "@/components/shared/page-header";
import { siteConfig } from "@/config/config";

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <PageHeader badge="Lgal" title="Mentions Lgales" description="Informations lgales concernant {siteConfig.siteName}" />
      <section className="section-padding pt-0">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          {[
            { title: "Diteur du site", content: `Le site ${siteConfig.siteName} est dit par l'association DrillTown RP.` },
            { title: "Hbergement", content: "Le site est héberg par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA." },
            { title: "Propriété intellectuelle", content: "L'ensemble du contenu de ce site (textes, images, logos) est la proprité exclusive de DrillTown RP." },
            { title: "Donnes personnelles", content: "Conformment au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos donnes." },
            { title: "Contact", content: `Pour toute demande : ${siteConfig.contact.email}` },
          ].map((s) => (
            <div key={s.title} className="p-6 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a]">
              <h2 className="text-lg font-bold text-white mb-3">{s.title}</h2>
              <p className="text-[#9ca3af] text-sm leading-relaxed">{s.content}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
