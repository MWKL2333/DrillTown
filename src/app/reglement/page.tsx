"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/shared/page-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import rulesData from "@/data/rules.json";
import { Search, AlertTriangle } from "lucide-react";

export default function ReglementPage() {
  const [search, setSearch] = useState("");

  const filtered = rulesData.categories
    .map((cat) => ({
      ...cat,
      rules: cat.rules.filter(
        (r) =>
          r.title.toLowerCase().includes(search.toLowerCase()) ||
          r.description.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((cat) => cat.rules.length > 0 || search === "");

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <PageHeader
        badge="Rglement"
        title="Rglement du Serveur"
        description="Ensemble des règles applicables sur DrillTown WL"
      />

      <section className="section-padding pt-0">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative mb-8"
          >
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9ca3af]"
              size={20}
            />
            <input
              type="text"
              placeholder="Rechercher une règle..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] text-white placeholder-[#9ca3af] focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] transition-all"
            />
          </motion.div>

          <div className="space-y-4">
            {filtered.map((category, i) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Accordion type="single" collapsible>
                  <AccordionItem
                    value={category.name}
                    className="border border-[#2a2a2a] rounded-xl overflow-hidden bg-[#1a1a1a] hover:border-[#7C3AED]/50 transition-all"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:bg-[#7C3AED]/5 transition-colors">
                      <div className="flex items-center gap-3 text-left">
                        <AlertTriangle
                          size={18}
                          className="text-[#7C3AED] flex-shrink-0"
                        />
                        <div>
                          <span className="text-white font-semibold">
                            {category.name}
                          </span>
                          {category.description && (
                            <p className="text-[#9ca3af] text-sm mt-0.5">
                              {category.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="px-6 pb-6 space-y-4">
                        {category.rules.map((rule, j) => (
                          <motion.div
                            key={rule.id}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: j * 0.05 }}
                            className="p-4 rounded-lg bg-[#0a0a0a] border border-[#2a2a2a]"
                          >
                            <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                              <span className="text-[#7C3AED]">
                                {rule.id}
                              </span>
                              {rule.title}
                            </h4>
                            <p className="text-[#9ca3af] text-sm leading-relaxed">
                              {rule.description}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
