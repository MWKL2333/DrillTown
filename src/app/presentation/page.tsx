"use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/shared/page-header";
import { siteConfig } from "@/config/config";
import { Presentation, Sparkles, Shield, Zap, Users, Gamepad2 } from "lucide-react";

const features = [
  { icon: Presentation, title: "Présentation", content: "Bienvenue sur DrillTown, le serveur FiveM RP nouvelle génération plongeant dans l'univers impitoyable du Chicago drill. Une expérience immersive unique o chaque choix compte." },
  { icon: Sparkles, title: "Fonctionnalités Uniques", content: "Systmes de gangs, économie dynamique, crafting avancé, drogues, armes lourdes, et bien plus encore. DrillTown repousse les limites du RP." },
  { icon: Shield, title: "Sécurité & Anti-Cheat", content: "Notre équipe technique assure une expérience de jeu équitable avec des systmes anti-cheat avancés et une modération active 24h/24." },
  { icon: Zap, title: "Performances", content: "Serveur optimisé avec infrastructure haut de gamme. Zero lag, zero latence pour une immersion totale dans l'univers de DrillTown." },
  { icon: Users, title: "Communauté", content: "Rejoignez une communauté de plus de 1000 joueurs actifs. Events quotidiens, tournois, et une ambiance unique." },
  { icon: Gamepad2, title: "Contenu Exclusif", content: "Maps custom, véhicules exclusifs, animations sur-mesure et scripts uniques développés par notre équipe." },
];

export default function PresentationPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <PageHeader
        badge="Présentation"
        title={`Découvrez ${siteConfig.siteName}`}
        description="Plongez au coeur de l'action avec le serveur FiveM RP le plus immersif"
      />
      <section className="section-padding pt-0">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#7C3AED]/50 transition-all group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-[#7C3AED]/10 group-hover:bg-[#7C3AED]/20 transition-colors">
                      <Icon className="w-6 h-6 text-[#A855F7]" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{f.title}</h3>
                  </div>
                  <p className="text-[#9ca3af] leading-relaxed">{f.content}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
