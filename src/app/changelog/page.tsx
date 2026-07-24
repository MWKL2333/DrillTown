"use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/shared/page-header";
import { Clock, GitMerge, Bug, Sparkles } from "lucide-react";

type ReleaseType = "major" | "feature" | "patch";

const changelogData: { version: string; date: string; type: ReleaseType; changes: string[] }[] = [
  {
    version: "2.0.0",
    date: "2025-06-01",
    type: "major",
    changes: [
      "Refonte complète du système économique",
      "Ajout de 350 nouveaux véhicules",
      "Interface utilisateur modernisée",
    ],
  },
  {
    version: "1.5.0",
    date: "2025-04-15",
    type: "feature",
    changes: [
      "Ajout du système de logements",
      "Nouveau système de drogue",
      "Amélioration du système de police",
      "Correction de bugs",
    ],
  },
  {
    version: "1.2.0",
    date: "2025-02-01",
    type: "patch",
    changes: [
      "Corrections de sécurité",
      "Optimisation des performances",
      "Ajustements conomiques",
      "Nouveaux jobs disponibles",
    ],
  },
  {
    version: "1.0.0",
    date: "2024-12-01",
    type: "major",
    changes: [
      "Lancement officiel de DrillTown RP",
      "Systme de whitelist",
      "Systme de gangs",
      "Systme conomique de base",
      "Communaut ouverte",
    ],
  },
];

const typeConfig: Record<string, { icon: React.ReactNode; color: string; bg: string; border: string }> = {
  major: { icon: <Sparkles size={16} />, color: "text-[#7C3AED]", bg: "bg-[#7C3AED]/10", border: "border-[#7C3AED]/30" },
  feature: { icon: <GitMerge size={16} />, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/30" },
  patch: { icon: <Bug size={16} />, color: "text-green-500", bg: "bg-green-500/10", border: "border-green-500/30" },
};

export default function ChangelogPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <PageHeader badge="Changelog" title="Historique des Mises jour" description="Suivez lvolution de DrillTown" />
      <section className="section-padding pt-0">
        <div className="max-w-3xl mx-auto px-4">
          <div className="space-y-6">
            {changelogData.map((release, i) => {
              const cfg = typeConfig[release.type];
              return (
                <motion.div
                  key={release.version}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#7C3AED]/50 transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-lg text-xs font-medium ${cfg.bg} ${cfg.color} ${cfg.border} border`}>
                        v{release.version}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-[#9ca3af]">
                        <Clock size={12} /> {release.date}
                      </span>
                    </div>
                    <span className={`${cfg.color}`}>{cfg.icon}</span>
                  </div>
                  <ul className="space-y-2">
                    {release.changes.map((change, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-[#9ca3af]">
                        <span className="text-[#7C3AED] mt-0.5">&#8226;</span>
                        {change}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
