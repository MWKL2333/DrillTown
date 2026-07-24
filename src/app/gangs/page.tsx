"use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/shared/page-header";
import gangsData from "@/data/gangs.json";
import { Swords, Users, MapPin } from "lucide-react";

export default function GangsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <PageHeader badge="Gangs" title="Les Gangs de Chicago" description="Les gangs qui font les rues de DrillTown" />
      <section className="section-padding pt-0">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          {gangsData.gangs.map((gang, i) => (
            <motion.div
              key={gang.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -3 }}
              className="p-6 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#7C3AED]/50 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#7C3AED]/10 border border-[#7C3AED]/30 flex items-center justify-center text-[#7C3AED]">
                  <Swords size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">{gang.name}</h3>
                  {gang.fullName && <p className="text-[#7C3AED] text-xs font-medium mb-2">{gang.fullName}</p>}
                  <p className="text-[#9ca3af] text-sm leading-relaxed">{gang.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
