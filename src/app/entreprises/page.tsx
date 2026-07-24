"use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/shared/page-header";
import { Building2, Store, Factory, Users, DollarSign, FileText } from "lucide-react";

const sections = [
  { icon: Building2, title: "Les Entreprises", content: "DrillTown propose un systme d'entreprise complet. Achetez, g rez et d veloppez votre propre business." },
  { icon: Store, title: "Types d'entreprises", content: "Restaurants, concessions, ateliers, night-clubs, magasins de vêtements, stations-service, etc." },
  { icon: Factory, title: "Gestion", content: "G rez vos employs, vos stocks, vos finances. Chaque dcision impacte votre rentabilit." },
  { icon: Users, title: "Emplois", content: "Chaque entreprise peut embaucher des joueurs et leur verser des salaires." },
  { icon: DollarSign, title: "Finance", content: "Prix d'achat, taxes, revenus, salaires. Un systme conomique complet pour entrepreneurs." },
  { icon: FileText, title: "Rglement", content: "Les entreprises doivent respecter la rglementation en vigueur sous peine de sanctions." },
];

export default function EntreprisesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <PageHeader badge="Systme" title="Entreprises" description="Cr ez et g rez votre propre business" />
      <section className="section-padding pt-0">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          {sections.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-4 p-6 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#7C3AED]/50 transition-all">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#7C3AED]/10 border border-[#7C3AED]/30 flex items-center justify-center text-[#7C3AED]"><s.icon size={22} /></div>
              <div>
                <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-[#9ca3af] text-sm leading-relaxed">{s.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
