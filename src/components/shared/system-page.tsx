"use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/shared/page-header";
import { LucideIcon } from "lucide-react";

interface SystemSection {
  title: string;
  content: string;
  icon?: LucideIcon;
}

interface SystemPageProps {
  badge: string;
  title: string;
  description: string;
  sections: SystemSection[];
}

export function SystemPage({ badge, title, description, sections }: SystemPageProps) {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <PageHeader badge={badge} title={title} description={description} />
      <section className="section-padding pt-0">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          {sections.map((section, i) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#7C3AED]/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  {Icon && (
                    <div className="w-10 h-10 rounded-lg bg-[#7C3AED]/10 border border-[#7C3AED]/30 flex items-center justify-center text-[#7C3AED]">
                      <Icon size={20} />
                    </div>
                  )}
                  <h2 className="text-xl font-bold text-white">{section.title}</h2>
                </div>
                <p className="text-[#9ca3af] leading-relaxed">{section.content}</p>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
