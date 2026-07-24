"use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/shared/page-header";
import { Heart, Ambulance, Stethoscope, Users, BookOpen, Syringe } from "lucide-react";

const sections = [
  { icon: Heart, title: "Les Services Mdicaux (EMS)", content: "L'EMS de DrillTown est compos de professionnels de sant forms aux urgences et aux soins d'urgence." },
  { icon: Ambulance, title: "Units", content: "Units disponibles : Ambulance, SMUR, Hospitalisation, Soins intensifs." },
  { icon: Stethoscope, title: "Services", content: "Soins d'urgence, hospitalisation, ranimation, consultations." },
  { icon: BookOpen, title: "Formation", content: "Formation complte : premiers secours, ranimation, gestes d'urgence." },
  { icon: Users, title: "Recrutement", content: "L'EMS recrute mdecins, infirmiers et ambulanciers." },
  { icon: Syringe, title: "Rglement", content: "Code de dontologie strict et secret mdical obligatoire." },
];

export default function EMSPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <PageHeader badge="Faction" title="Emergency Medical Services" description="Les services mdicaux de DrillTown" />
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
