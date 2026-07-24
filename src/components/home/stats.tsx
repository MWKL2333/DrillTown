"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { siteConfig } from "@/config/config";

const stats = [
  { label: "Joueurs", value: siteConfig.statistics.players, suffix: "+" },
  { label: "Temps de jeu", value: siteConfig.statistics.playTime, suffix: "" },
  { label: "Factions", value: siteConfig.statistics.factions, suffix: "" },
  { label: "Vhicules", value: siteConfig.statistics.vehicles, suffix: "+" },
  { label: "Scripts", value: siteConfig.statistics.scripts, suffix: "+" },
];

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative section-padding bg-gradient-to-b from-[#0a0a0a] to-[#050505]"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM3QzNBRUQiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {siteConfig.siteName} en{" "}
            <span className="text-gradient-red">chiffres</span>
          </h2>
          <p className="text-[#9ca3af] text-lg">
            Une communauté en pleine expansion
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative text-center p-6 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] group hover:border-[#7C3AED]/50 transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-[#7C3AED]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="text-4xl md:text-5xl font-black text-gradient-red block mb-2"
                >
                  {isInView ? stat.value : 0}
                  {stat.suffix}
                </motion.span>
                <span className="text-[#9ca3af] text-sm uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
