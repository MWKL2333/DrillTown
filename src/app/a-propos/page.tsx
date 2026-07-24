"use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/shared/page-header";
import { siteConfig } from "@/config/config";

export default function AProposPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <PageHeader
        badge=" propos"
        title={`propos de ${siteConfig.siteName}`}
        description={siteConfig.about.description}
      />
      <section className="section-padding pt-0">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          {[
            { title: "Notre Histoire", content: "DrillTown est numéro 1 de la passion pour le roleplay et la culture Chicago drill. Notre équipe a passé des mois développer des systmes uniques pour offrir une exprience immersive." },
            { title: "Notre Mission", content: siteConfig.about.mission },
            { title: "Notre Vision", content: siteConfig.about.vision },
            { title: "Nos Valeurs", content: "Professionnalisme, immersion, respect, communauté et innovation sont les valeurs qui guident chaque décision chez DrillTown." },
          ].map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-8 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#7C3AED]/50 transition-all">
              <h2 className="text-2xl font-bold text-white mb-4">{s.title}</h2>
              <p className="text-[#9ca3af] leading-relaxed">{s.content}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
