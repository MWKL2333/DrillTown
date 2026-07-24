"use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/shared/page-header";
import { Play, FileText, MessageCircle, Users, BookOpen, Shield } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CommentJouerPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <PageHeader badge="Guide" title="Comment jouer sur DrillTown" description="Tapes pour démarrer votre aventure RP" />
      <section className="section-padding pt-0">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              { icon: <FileText size={20} />, title: "Lire le rglement", desc: "Familiarisez-vous avec les règles", href: "/reglement" },
              { icon: <BookOpen size={20} />, title: "Lexique Chicago", desc: "Apprenez le vocabulaire", href: "/lexique-chicago" },
              { icon: <MessageCircle size={20} />, title: "Rejoindre Discord", desc: "Communauté et whitelist", href: "/discord" },
              { icon: <Play size={20} />, title: "Connexion", desc: "IP et instructions", href: "/connexion" },
            ].map((item) => (
              <Link key={item.title} href={item.href}>
                <motion.div whileHover={{ y: -3 }} className="flex gap-4 p-5 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#7C3AED]/50 transition-all">
                  <div className="w-12 h-12 rounded-lg bg-[#7C3AED]/10 border border-[#7C3AED]/30 flex items-center justify-center text-[#7C3AED] flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="text-white font-semibold">{item.title}</h3>
                    <p className="text-[#9ca3af] text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-8 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a]">
            <h2 className="text-2xl font-bold text-white mb-4">Bien démarrer</h2>
            <ol className="space-y-3 text-[#9ca3af] list-decimal list-inside">
              <li>Installez FiveM et rejoignez le serveur</li>
              <li>Faites votre demande de whitelist sur Discord</li>
              <li>Créez votre personnage et son histoire</li>
              <li>Commencez par un job légal (chauffeur, livreur, etc.)</li>
              <li>Intégrez progressivement la communauté</li>
              <li>Respectez les règles et amusez-vous !</li>
            </ol>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
