  "use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/shared/page-header";
import { Shield, BadgeCheck, Siren, Users, BookOpen, Scale } from "lucide-react";

const sections = [
  { icon: Shield, title: "La Police de Chicago (CPD)", content: "Le Chicago Police Department est la force de l'ordre officielle de DrillTown. Composé d' officiers formés, la CPD a pour mission de maintenir l'ordre dans les rues." },
  { icon: BadgeCheck, title: "Grades", content: "Les grades vont de Cadet Commissaire : Cadet, Officier, Sergent, Lieutenant, Capitaine, Chef de la Police." },
  { icon: BookOpen, title: "Formation", content: "Chaque recrue suit une formation complte : code de la route, procdures d'arrestation, self-defense, tir." },
  { icon: Siren, title: "Units", content: "Units disponibles : Patrouille, Circulation, Intervention, BR (Brigade Criminelle), STUP (Stupfiants)." },
  { icon: Users, title: "Recrutement", content: "La CPD recrute régulièrement. Les candidatures sont ouvertes sur Discord." },
  { icon: Scale, title: "Réglement", content: "Les policiers sont tenus de respecter un code de conduite strict sous peine de sanctions." },
];

export default function CPDPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <PageHeader badge="Faction" title="Chicago Police Department" description="La force de l'ordre de DrillTown" />
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
