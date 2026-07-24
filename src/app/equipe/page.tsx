"use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/shared/page-header";
import staffData from "@/data/staff.json";
import { Shield, Crown, Star, User } from "lucide-react";

const roleIcons: Record<string, React.ReactNode> = {
  "Fondateur": <Crown size={18} className="text-yellow-500" />,
  "Co-Fondateur": <Crown size={18} className="text-yellow-500" />,
  "Administrateur": <Shield size={18} className="text-[#7C3AED]" />,
  "Modrateur": <Star size={18} className="text-blue-500" />,
  "Staff": <User size={18} className="text-green-500" />,
};

export default function EquipePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <PageHeader
        badge="Notre équipe"
        title="L'équipe DrillTown"
        description="Les personnes qui rendent tout cela possible"
      />

      <section className="section-padding pt-0">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {staffData.members.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -5 }}
                className="group p-6 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#7C3AED]/50 transition-all duration-300"
              >
                <div className="relative mb-4">
                  <div className="w-20 h-20 rounded-full mx-auto bg-gradient-to-br from-[#7C3AED] to-[#A855F7] p-0.5">
                    <div className="w-full h-full rounded-full bg-[#1a1a1a] overflow-hidden">
                      <img
                        src={member.image || `https://placehold.co/200x200/1a1a1a/8B0000?text=${member.name[0]}`}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="flex items-center justify-center gap-1.5 mb-1">
                    {roleIcons[member.role]}
                    <span className="text-xs font-medium text-[#7C3AED] uppercase tracking-wider">
                      {member.role}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-lg">
                    {member.name}
                  </h3>
                  {member.description && (
                    <p className="text-[#9ca3af] text-sm mt-2">
                      {member.description}
                    </p>
                  )}
                  {member.discord && (
                    <p className="text-xs text-[#9ca3af] mt-2 font-mono">
                      {member.discord}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
