"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Server, Users, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/config";
import { HeroSection } from "@/components/home/hero";
import { FeaturesSection } from "@/components/home/features";
import { StatsSection } from "@/components/home/stats";
import { AboutSection } from "@/components/home/about";
import { TimelineSection } from "@/components/home/timeline";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Hero */}
      <HeroSection />

      {/* Server Info Bar */}
      <section className="relative py-12 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a] border-y border-[#2a2a2a]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Server, label: "IP du Serveur", value: siteConfig.server.ip, action: "Copier l'IP" },
              { icon: Users, label: "Joueurs Max", value: `${siteConfig.server.maxPlayers}+`, action: "Rejoindre" },
              { icon: Shield, label: "Discord", value: "Communauté active", action: "Rejoindre" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#7C3AED]/50 transition-all group"
                >
                  <div className="p-3 rounded-lg bg-[#7C3AED]/10">
                    <Icon className="w-5 h-5 text-[#A855F7]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-[#9ca3af] uppercase tracking-wider">{item.label}</p>
                    <p className="text-white font-semibold truncate">{item.value}</p>
                  </div>
                  <button
                    onClick={() => navigator.clipboard?.writeText(siteConfig.server.ip)}
                    className="text-xs px-3 py-1.5 rounded-lg bg-[#7C3AED]/10 text-[#A855F7] hover:bg-[#7C3AED]/20 transition-colors whitespace-nowrap"
                  >
                    {item.action}
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <FeaturesSection />

      {/* Stats */}
      <StatsSection />

      {/* About */}
      <AboutSection />

      {/* Timeline */}
      <TimelineSection />

      {/* Final CTA */}
      <section className="relative section-padding bg-gradient-to-b from-[#0a0a0a] to-[#050505] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7C3AED]/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Prêt à rejoindre{" "}
              <span className="text-gradient-red">{siteConfig.siteName}</span> ?
            </h2>
            <p className="text-[#9ca3af] text-lg mb-8 max-w-xl mx-auto">
              Télécharge FiveM, connecte-toi et plonge dans l&apos;univers impitoyable de Chicago.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/connexion">
                <Button variant="premium" size="xl" className="group text-base min-w-[200px]">
                  Rejoindre le serveur
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href={siteConfig.discord.inviteUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="xl" className="text-base min-w-[200px]">
                  Discord
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
