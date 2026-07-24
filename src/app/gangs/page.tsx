"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/shared/page-header";
import gangsData from "@/data/gangs.json";
import { Swords, Users, MapPin, ShieldAlert, Crosshair, Flag } from "lucide-react";

export default function GangsPage() {
  const [selectedGang, setSelectedGang] = useState<string | null>(null);

  const activeGangObj = gangsData.gangs.find((g) => g.name === selectedGang) || gangsData.gangs[0];

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <PageHeader
        badge="Territoires & Factions"
        title="Gangs & Quartiers de Chicago"
        description="Explorez la guerre des territoires et l'histoire des gangs de DrillTown RP"
      />

      <section className="section-padding pt-0">
        <div className="max-w-6xl mx-auto px-4">
          {/* Territory Interactive Selector Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-[#1a1a1a] via-[#121212] to-[#0a0a0a] border border-[#7C3AED]/30 mb-12 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#7C3AED]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 border-b border-[#2a2a2a] pb-6">
              <div>
                <div className="flex items-center gap-2 text-[#7C3AED] font-semibold text-xs uppercase tracking-wider mb-1">
                  <Flag size={14} /> Carte des Territoires RP
                </div>
                <h2 className="font-display text-3xl md:text-4xl text-white uppercase tracking-wide">
                  {activeGangObj.name} {activeGangObj.fullName ? `- ${activeGangObj.fullName}` : ""}
                </h2>
              </div>

              <div className="flex flex-wrap gap-2">
                {gangsData.gangs.map((gang) => (
                  <button
                    key={gang.name}
                    onClick={() => setSelectedGang(gang.name)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                      (selectedGang === gang.name || (!selectedGang && gang.name === gangsData.gangs[0].name))
                        ? "bg-[#7C3AED] text-white shadow-lg shadow-[#7C3AED]/30 scale-105"
                        : "bg-[#0a0a0a] text-[#9ca3af] border border-[#2a2a2a] hover:border-[#7C3AED]/50 hover:text-white"
                    }`}
                  >
                    <Crosshair size={12} />
                    {gang.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-4">
                <p className="text-[#9ca3af] text-base leading-relaxed">
                  {activeGangObj.description}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                  <div className="p-4 rounded-xl bg-[#0a0a0a] border border-[#2a2a2a]">
                    <div className="flex items-center gap-2 text-[#7C3AED] text-xs font-bold mb-1">
                      <MapPin size={14} /> QUARTIER / TURF
                    </div>
                    <span className="text-white font-bold text-sm">
                      {activeGangObj.name === "O-Block"
                        ? "64th & King Drive"
                        : activeGangObj.name === "STL/EBT"
                        ? "63rd & St Lawrence"
                        : activeGangObj.name === "600"
                        ? "59th & King Drive"
                        : activeGangObj.name === "NLMB"
                        ? "79th & Essex"
                        : "Chicago South Side"}
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-[#0a0a0a] border border-[#2a2a2a]">
                    <div className="flex items-center gap-2 text-green-400 text-xs font-bold mb-1">
                      <ShieldAlert size={14} /> DANGER ZONE
                    </div>
                    <span className="text-white font-bold text-sm">Niveau ROUGE</span>
                  </div>

                  <div className="p-4 rounded-xl bg-[#0a0a0a] border border-[#2a2a2a]">
                    <div className="flex items-center gap-2 text-[#A855F7] text-xs font-bold mb-1">
                      <Users size={14} /> EFFECTIFS
                    </div>
                    <span className="text-white font-bold text-sm">Actifs RP</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-[#0a0a0a] border border-[#2a2a2a] flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/20 border border-[#7C3AED]/40 flex items-center justify-center text-[#7C3AED] mb-4">
                    <Swords size={24} />
                  </div>
                  <h4 className="text-white font-bold mb-2">Règlement de Territoire</h4>
                  <p className="text-[#9ca3af] text-xs leading-relaxed">
                    Toute intrusion sans négociation préalable sur le turf d&apos;un gang adverse peut déclencher une fusillade de quartier sous le protocole FearRP.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#2a2a2a] text-xs text-[#7C3AED] font-semibold">
                  DrillTown RP &bull; Chicago Factions
                </div>
              </div>
            </div>
          </motion.div>

          {/* All Gang Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gangsData.gangs.map((gang, i) => (
              <motion.div
                key={gang.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                onClick={() => setSelectedGang(gang.name)}
                className={`p-6 rounded-xl bg-[#1a1a1a] border transition-all cursor-pointer ${
                  selectedGang === gang.name
                    ? "border-[#7C3AED] shadow-xl shadow-[#7C3AED]/10 bg-[#1a1a1a]"
                    : "border-[#2a2a2a] hover:border-[#7C3AED]/50"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#7C3AED]/10 border border-[#7C3AED]/30 flex items-center justify-center text-[#7C3AED]">
                    <Swords size={22} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">{gang.name}</h3>
                    {gang.fullName && (
                      <p className="text-[#7C3AED] text-xs font-medium mb-2">{gang.fullName}</p>
                    )}
                    <p className="text-[#9ca3af] text-xs leading-relaxed line-clamp-3">
                      {gang.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
