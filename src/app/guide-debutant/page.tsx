"use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/shared/page-header";
import { BookOpen, Download, Wifi, UserPlus, Shield, MessageCircle } from "lucide-react";

const steps = [
  { icon: <Download size={24} />, title: "Installer FiveM", desc: "Téléchargez FiveM depuis le site officiel et installez-le." },
  { icon: <Wifi size={24} />, title: "Connectez-vous", desc: "Ouvrez FiveM et connectez-vous avec votre compte Rockstar." },
  { icon: <UserPlus size={24} />, title: "Rejoindre DrillTown", desc: "Utilisez l'IP du serveur pour rejoindre DrillTown RP." },
  { icon: <Shield size={24} />, title: "Whitelist", desc: "Faites votre demande de whitelist sur notre Discord." },
  { icon: <MessageCircle size={24} />, title: "Discord", desc: "Rejoignez notre communauté Discord pour être informé." },
];

export default function GuideDebutantPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <PageHeader badge="Guide" title="Guide du débutant" description="Tout ce que vous devez savoir pour commencer" />
      <section className="section-padding pt-0">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="p-8 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a]">
            <h2 className="text-2xl font-bold text-white mb-6">tapes d&apos;installation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {steps.map((step, i) => (
                <div key={step.title} className="flex gap-4 p-4 rounded-lg bg-[#0a0a0a] border border-[#2a2a2a]">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#7C3AED]/10 border border-[#7C3AED]/30 flex items-center justify-center text-[#7C3AED]">
                    {step.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-[#7C3AED] font-bold">TAPE {i + 1}</span>
                    </div>
                    <h3 className="text-white font-semibold text-sm">{step.title}</h3>
                    <p className="text-[#9ca3af] text-xs mt-1">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-8 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a]">
            <h2 className="text-2xl font-bold text-white mb-4">Conseils pour bien dmarrer</h2>
            <ul className="space-y-3 text-[#9ca3af]">
              {[
                "Lisez attentivement le règlement avant de jouer",
                "Familiarisez-vous avec la culture Chicago et le lexique",
                "Commencez par un job lgal pour comprendre l'économie",
                "Rejoignez une faction pour tre encadré",
                "Utilisez /me et /do pour enrichir vos scenes RP",
                "Respectez le Fear RP et la Value of Life",
                "En cas de doute, contactez le staff sur Discord",
              ].map((tip, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#7C3AED] mt-0.5">&#8226;</span>
                  {tip}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
