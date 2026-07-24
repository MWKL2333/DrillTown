"use client";

import { motion } from "framer-motion";
import { Sparkles, Rocket, Globe, PartyPopper, Zap, RefreshCw } from "lucide-react";
import { siteConfig } from "@/config/config";

const timelineIcons = [Rocket, Sparkles, Globe, PartyPopper, Zap, RefreshCw];

export function TimelineSection() {
  return (
    <section className="relative section-padding bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Notre{" "}
            <span className="text-gradient-red">Histoire</span>
          </h2>
          <p className="text-[#9ca3af] text-lg">
            L'évolution de {siteConfig.siteName} à travers les époques
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#7C3AED]/50 via-[#7C3AED]/20 to-transparent" />

          <div className="space-y-12">
            {siteConfig.timeline.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden md:block md:w-1/2" />

                <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-[#7C3AED] border-4 border-[#0a0a0a] shadow-lg shadow-[#7C3AED]/30 mt-1 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {(() => {
                    const Icon = timelineIcons[index % timelineIcons.length];
                    return <Icon size={14} className="text-white" />;
                  })()}
                </div>

                <div
                  className={`flex-1 p-6 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#7C3AED]/50 transition-all duration-300 ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
                >
                  <span className="inline-block px-3 py-1 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/30 text-[#7C3AED] text-xs font-medium mb-3">
                    {item.date}
                  </span>
                  <h3 className="text-white font-bold text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#9ca3af] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
