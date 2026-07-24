"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/shared/page-header";
import { Car, Wrench, ShoppingCart, Gauge, ShieldCheck, Building2, Zap, Flame } from "lucide-react";

const vehicleCategories = [
  { id: "all", name: "Tous les Véhicules" },
  { id: "suv", name: "SUVs & Imports Chicago" },
  { id: "sport", name: "Supercars & Sport" },
  { id: "lowrider", name: "Classics & Lowriders" },
  { id: "moto", name: "Motos & Cross" },
];

const sampleVehicles = [
  {
    name: "Trackhawk 6.2L Supercharged",
    category: "suv",
    speed: "290 km/h",
    accel: "3.2s",
    tag: "Import Exclusif",
    desc: "Le SUV légendaire de la scène Chicago Drill. Puissance brute et tenue de route maximale.",
    color: "#7C3AED",
  },
  {
    name: "Dodge Charger SRT Hellcat Widebody",
    category: "suv",
    speed: "310 km/h",
    accel: "3.4s",
    tag: "Véhicule Faction",
    desc: "V8 HEMI suralimenté. Véhicule indispensable pour les courses-poursuites et interventions lourdes.",
    color: "#ef4444",
  },
  {
    name: "Mercedes-AMG G63 Brabus 800",
    category: "suv",
    speed: "275 km/h",
    accel: "3.8s",
    tag: "Luxe & VIP",
    desc: "Blindé, imposant et customisé. Confort absolu pour les leaders de gangs et chefs d'entreprise.",
    color: "#f59e0b",
  },
  {
    name: "Lamborghini Urus Performante",
    category: "sport",
    speed: "325 km/h",
    accel: "3.0s",
    tag: "Supercar",
    desc: "Aérodynamisme affûté et accélération foudroyante sur l'asphalte de Chicago.",
    color: "#22c55e",
  },
  {
    name: "Chevy Impala 1964 Custom Lowrider",
    category: "lowrider",
    speed: "210 km/h",
    accel: "5.1s",
    tag: "Classic RP",
    desc: "Système de suspensions hydrauliques ajustables en direct. Style rétro emblématique.",
    color: "#A855F7",
  },
  {
    name: "Yamaha YZF-R1M & Cross YZ450F",
    category: "moto",
    speed: "295 km/h",
    accel: "2.8s",
    tag: "Moto Bikelife",
    desc: "Conçues pour la Bikelife urbaine, les acrobaties et l'évasion rapide en ruelle.",
    color: "#3b82f6",
  },
];

const sections = [
  { title: "Présentation", content: "DrillTown propose plus de 200 véhicules uniques allant des SUVs de quartier aux supercars et véhicules d'urgence.", icon: Car },
  { title: "Concessionnaires", content: "Plusieurs concessionnaires sont accessibles sur la carte : Économique, Luxe, Import Sport & Bikelife.", icon: Building2 },
  { title: "Customisation Avancée", content: "Les véhicules sont entièrement personnalisables : moteurs sur-mesure, jantes, néons, stroboscopes et suspensions.", icon: Wrench },
  { title: "Achat, Vente & Cartes Grises", content: "Possibilité de revendre ses véhicules d'occasion entre joueurs via le système de carte grise sécurisé.", icon: ShoppingCart },
  { title: "Performances Réalistes", content: "Maniabilité, déformation et vitesse équilibrées sur mesure pour un RP réaliste.", icon: Gauge },
  { title: "Assurance & Fourrière", content: "Assurance automatique et service de fourrière en cas d'accident ou de saisie par la police (CPD).", icon: ShieldCheck },
];

export default function VehiculesPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredVehicles = activeCategory === "all"
    ? sampleVehicles
    : sampleVehicles.filter((v) => v.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <PageHeader
        badge="Garage Custom"
        title="Catalogue des Véhicules"
        description="Plus de 200 véhicules exclusifs importés avec customisation illimitée"
      />

      <section className="section-padding pt-0">
        <div className="max-w-6xl mx-auto px-4">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            {vehicleCategories.map((cat) => (
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

          {/* Interactive Vehicles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredVehicles.map((vehicle, i) => (
              <motion.div
                key={vehicle.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#7C3AED]/50 transition-all flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border"
                      style={{
                        backgroundColor: `${vehicle.color}15`,
                        borderColor: `${vehicle.color}40`,
                        color: vehicle.color,
                      }}
                    >
                      {vehicle.tag}
                    </span>
                    <Flame size={16} className="text-[#7C3AED] group-hover:scale-125 transition-transform" />
                  </div>

                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#A855F7] transition-colors">
                    {vehicle.name}
                  </h3>

                  <p className="text-[#9ca3af] text-xs leading-relaxed mb-6">
                    {vehicle.desc}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#2a2a2a]">
                  <div className="flex items-center gap-2">
                    <Gauge size={14} className="text-[#7C3AED]" />
                    <span className="text-white text-xs font-semibold">{vehicle.speed}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap size={14} className="text-amber-400" />
                    <span className="text-white text-xs font-semibold">0-100: {vehicle.accel}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Features System Overview Grid */}
          <div className="border-t border-[#2a2a2a] pt-12">
            <h3 className="font-display text-3xl text-white uppercase text-center mb-8 tracking-wide">
              Caractéristiques des Véhicules RP
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
