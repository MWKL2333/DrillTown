"use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/config";
import {
  MessageCircle,
  Users,
  Wifi,
  Hash,
  ArrowRight,
} from "lucide-react";

export default function DiscordPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <PageHeader
        badge="Discord"
        title="Notre Communauté Discord"
        description="Rejoignez des milliers de joueurs sur Discord"
      />

      <section className="section-padding pt-0">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="p-8 rounded-2xl bg-[#1a1a1a] border border-[#2a2a2a]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[#5865F2]/10 border border-[#5865F2]/30 flex items-center justify-center">
                    <MessageCircle size={28} className="text-[#5865F2]" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">
                      Discord
                    </h2>
                    <p className="text-sm text-[#9ca3af]">
                      {siteConfig.discord.inviteUrl}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    {
                      label: "Membres",
                      value: "5,000+",
                      icon: <Users size={20} />,
                      color: "#5865F2",
                    },
                    {
                      label: "En ligne",
                      value: "1,200+",
                      icon: <Wifi size={20} />,
                      color: "#22c55e",
                    },
                    {
                      label: "Salons",
                      value: "50+",
                      icon: <Hash size={20} />,
                      color: "#f59e0b",
                    },
                    {
                      label: "Staff",
                      value: "20+",
                      icon: <Users size={20} />,
                      color: "#7C3AED",
                    },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="p-4 rounded-xl bg-[#0a0a0a] border border-[#2a2a2a] text-center"
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-2"
                        style={{
                          backgroundColor: `${stat.color}10`,
                          borderColor: `${stat.color}30`,
                          borderWidth: 1,
                          color: stat.color,
                        }}
                      >
                        {stat.icon}
                      </div>
                      <span className="text-xl font-bold text-white block">
                        {stat.value}
                      </span>
                      <span className="text-xs text-[#9ca3af]">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href={siteConfig.discord.inviteUrl}
                  target="_blank"
                  className="block"
                >
                  <Button
                    variant="premium"
                    size="lg"
                    className="w-full text-base group"
                    style={
                      {
                        "--from": "#5865F2",
                        "--to": "#4752C4",
                        background:
                          "linear-gradient(135deg, var(--from), var(--to))",
                      } as React.CSSProperties
                    }
                  >
                    Rejoindre le Discord
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="p-8 rounded-2xl bg-[#1a1a1a] border border-[#2a2a2a]">
                <h3 className="text-xl font-bold text-white mb-6">
                  Pourquoi rejoindre ?
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      title: "Annonces exclusives",
                      desc: "Soyez informé des mises à jour et événements en avant-première",
                    },
                    {
                      title: "Support rapide",
                      desc: "Obtenez de l'aide directement auprés de notre équipe",
                    },
                    {
                      title: "Communauté active",
                      desc: "échangez avec d'autres passionnés du roleplay",
                    },
                    {
                      title: "Concours et events",
                      desc: "Participez des à événements organiser régulièrement",
                    },
                  ].map((item, i) => (
                    <div
                      key={item.title}
                      className="flex gap-4 p-4 rounded-xl bg-[#0a0a0a] border border-[#2a2a2a]"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#5865F2]/10 border border-[#5865F2]/30 flex items-center justify-center text-[#5865F2] font-bold">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">
                          {item.title}
                        </h4>
                        <p className="text-[#9ca3af] text-sm">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
