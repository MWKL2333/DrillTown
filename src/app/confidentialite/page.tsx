"use client";

import { PageHeader } from "@/components/shared/page-header";
import { siteConfig } from "@/config/config";

export default function ConfidentialitePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <PageHeader badge="Confidentialité" title="Politique de Confidentialité" description="Comment nous protégeons vos données" />
      <section className="section-padding pt-0">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          {[
            { title: "Collecte des données", content: "Nous collectons uniquement les données nécessaires au fonctionnement du serveur." },
            { title: "Utilisation des données", content: "Vos données sont utilisées pour : la gestion de votre compte, la modération, l'amélioration du service." },
            { title: "Stockage des données", content: "Vos données sont stockées de manière sécurisée sur nos serveurs en Europe." },
            { title: "Vos droits", content: "Conformément au RGPD, vous pouvez demander l'accès, la rectification ou la suppression de vos données." },
            { title: "Cookies", content: "Ce site utilise uniquement des cookies techniques nécessaires à son fonctionnement." },
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
