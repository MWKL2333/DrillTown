"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/shared/page-header";
import { Swords, Shield, Target, Wrench, Ban, ShoppingBag, Crosshair, ShieldAlert } from "lucide-react";

const weaponCategories = [
  { id: "all", name: "Toutes les Armes" },
  { id: "poing", name: "Armes de Poing & Glock" },
  { id: "smg", name: "Submachine & Micro-Drill" },
  { id: "assault", name: "Fusils d'Assaut & Draco" },
  { id: "legal", name: "Armes Légales & Défense" },
];

const sampleWeapons = [
  {
    name: "Glock 19 Gen 5 + Switch (Auto-Glock)",
    category: "poing",
    calibre: "9x19mm Parabellum",
    cadence: "1100 coups/min",
    type: "Arme Illégale - Marché Noir",
    desc: "Le pistolet de poing emblématique des rues de Chicago équipé du sélecteur de tir automatique.",
    color: "#7C3AED",
    image: "https://images.unsplash.com/photo-1585589039787-7c4493794b82?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Draco AK-47 Pistol 7.62mm",
    category: "assault",
    calibre: "7.62x39mm",
    cadence: "600 coups/min",
    type: "Arme Illégale - Faction / Gang",
    desc: "Compact, dévastateur à courte portée avec un son inimitable. L'arme fétiche des clips de Drill.",
    color: "#ef4444",
    image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "AR-15 Custom Chicago Stencil",
    category: "assault",
    calibre: "5.56x45mm NATO",
    cadence: "700 coups/min",
    type: "Fusil d'Assaut Modifié",
    desc: "Châssis personnalisé avec viseur point rouge et poignée tactique pour tirs de précision.",
    color: "#f59e0b",
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "MAC-11 / Micro UZI 9mm",
    category: "smg",
    calibre: "9mm / .380 ACP",
    cadence: "1200 coups/min",
    type: "Mitraillette Légère",
    desc: "Ultra-rapide en tir automatique, conçue pour les fusillades en voiture (Drive-by RP).",
    color: "#A855F7",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Heavy Pistol .45 ACP (PPA)",
    category: "legal",
    calibre: ".45 ACP",
    cadence: "Semi-Automatique",
    type: "Arme Légale (Permis Obligatoire)",
    desc: "Vendu légalement chez Ammu-Nation avec port d'arme vérifié par le CPD.",
    color: "#22c55e",
    image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Fusil à Pompe Remington 870 Tactical",
    category: "legal",
    calibre: "12 Gauge Buckshot",
    cadence: "Pompe manuelle",
    type: "Arme Défense & Police CPD",
    desc: "Utilisé par les unités du CPD et disponible sur autorisation pour la défense de domicile.",
    color: "#3b82f6",
    image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=800&q=80",
  },
];

const sections = [
  { title: "Présentation", content: "Le système d'armes de DrillTown propose un large catalogue d'armes inspirées des rues de Chicago. De l'arme de poing au fusil d'assaut.", icon: Swords },
  { title: "Armes Légales", content: "Certaines armes sont disponibles via des armureries agréées avec le PPA (Permis de Port d'Arme).", icon: Shield },
  { title: "Armes Illégales", content: "Les armes illégales (Glock avec switch, Draco, mitraillettes) s'achètent sur le marché noir auprès de trafiquants.", icon: Target },
  { title: "Customisation d'Armes", content: "Les armes peuvent être personnalisées : silencieux, viseurs, chargeurs tambours et camouflages.", icon: Wrench },
  { title: "Règlementation FearRP", content: "Le port d'arme visible est strictement contrôlé par le CPD et interdit en zone neutre.", icon: Ban },
  { title: "Marché Noir & Trafic", content: "Le marché noir propose des cargaisons rares d'armes modifiées avec livraisons secrètes.", icon: ShoppingBag },
];

export default function ArmesPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredWeapons = activeCategory === "all"
    ? sampleWeapons
    : sampleWeapons.filter((w) => w.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <PageHeader
        badge="Catalogue Armurerie"
        title="Armes & Équipements Tactical"
        description="Catalogue complet des armes légales, illégales et customisées de DrillTown"
      />

      <section className="section-padding pt-0">
        <div className="max-w-6xl mx-auto px-4">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            {weaponCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all ${
                  activeCategory === cat.id
                    ? "bg-[#7C3AED] text-white shadow-lg shadow-[#7C3AED]/30 scale-105"
                    : "bg-[#1a1a1a] text-[#9ca3af] border border-[#2a2a2a] hover:border-[#7C3AED]/50 hover:text-white"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Weapons Showcase Grid with Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredWeapons.map((weapon, i) => (
              <motion.div
                key={weapon.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -5 }}
                className="rounded-2xl bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#7C3AED]/50 transition-all flex flex-col justify-between group shadow-xl overflow-hidden"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-[#0a0a0a]">
                    <img
                      src={weapon.image}
                      alt={weapon.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />

                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span
                        className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border backdrop-blur-md"
                        style={{
                          backgroundColor: `${weapon.color}30`,
                          borderColor: `${weapon.color}60`,
                          color: "#ffffff",
                        }}
                      >
                        {weapon.type}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-[#7C3AED]">
                        <Crosshair size={16} className="group-hover:scale-125 transition-transform" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#A855F7] transition-colors">
                      {weapon.name}
                    </h3>

                    <p className="text-[#9ca3af] text-xs leading-relaxed mb-6">
                      {weapon.desc}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0">
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#2a2a2a]">
                    <div className="flex items-center gap-2">
                      <ShieldAlert size={14} className="text-[#7C3AED]" />
                      <span className="text-white text-xs font-semibold">{weapon.calibre}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target size={14} className="text-amber-400" />
                      <span className="text-white text-xs font-semibold">{weapon.cadence}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Features System Overview Grid */}
          <div className="border-t border-[#2a2a2a] pt-12">
            <h3 className="font-display text-3xl text-white uppercase text-center mb-8 tracking-wide">
              Règles et Fonctionnement des Armes RP
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sections.map((section, i) => {
                const Icon = section.icon;
                return (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="p-6 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a]"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#7C3AED]/10 border border-[#7C3AED]/30 flex items-center justify-center text-[#7C3AED] mb-4">
                      <Icon size={20} />
                    </div>
                    <h4 className="text-white font-bold text-base mb-2">{section.title}</h4>
                    <p className="text-[#9ca3af] text-sm leading-relaxed">{section.content}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
