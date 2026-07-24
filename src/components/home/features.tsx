"use client";

import { motion } from "framer-motion";
import {
  Shield,
  DollarSign,
  Users,
  Car,
  Code,
  Heart,
} from "lucide-react";
import { siteConfig } from "@/config/config";

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield size={28} />,
  DollarSign: <DollarSign size={28} />,
  Users: <Users size={28} />,
  Car: <Car size={28} />,
  Code: <Code size={28} />,
  Heart: <Heart size={28} />,
};

export function FeaturesSection() {
  return (
    <section className="relative section-padding bg-[#0a0a0a]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#7C3AED]/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Pourquoi{" "}
            <span className="text-gradient-red">{siteConfig.siteName}</span> ?
          </h2>
          <p className="text-[#9ca3af] text-lg max-w-2xl mx-auto">
            Découvrez ce qui rend notre serveur unique
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative p-8 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#7C3AED]/50 transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#7C3AED]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-lg bg-[#7C3AED]/10 border border-[#7C3AED]/30 flex items-center justify-center text-[#7C3AED] mb-5 group-hover:bg-[#7C3AED]/20 group-hover:scale-110 transition-all duration-300">
                  {iconMap[feature.icon]}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#9ca3af] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
