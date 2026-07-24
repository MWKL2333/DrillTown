"use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/shared/page-header";
import factionsData from "@/data/factions.json";
import { Shield, Users, MapPin } from "lucide-react";

export default function FactionsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <PageHeader badge="Factions" title="Les Factions" description="Découvrez les factions officielles de DrillTown" />
      <section className="section-padding pt-0">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {factionsData.factions.map((faction, i) => (
            <motion.div
              key={faction.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#7C3AED]/50 transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-[#7C3AED]/10 border border-[#7C3AED]/30 flex items-center justify-center text-[#7C3AED] mb-4">
                <Shield size={24} />
              </div>
              <h3 className="text-white font-bold text-lg mb-1">{faction.name}</h3>
              <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium mb-3 ${faction.type === "Lgal" ? "bg-green-500/10 text-green-500 border border-green-500/30" : "bg-red-500/10 text-red-500 border border-red-500/30"}`}>
                {faction.type}
              </span>
              <p className="text-[#9ca3af] text-sm leading-relaxed mb-3">{faction.description}</p>
              <div className="flex items-center gap-2 text-xs text-[#9ca3af]">
                <Users size={12} /> {faction.members} membres
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
