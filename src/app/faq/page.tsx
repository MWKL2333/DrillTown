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
import faqData from "@/data/faq.json";
import { Search, HelpCircle } from "lucide-react";

export default function FAQPage() {
  const [search, setSearch] = useState("");

  const filtered = faqData.categories
    .map((cat) => ({
      ...cat,
      items: cat.items.filter(
        (item) =>
          item.question.toLowerCase().includes(search.toLowerCase()) ||
          item.answer.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((cat) => cat.items.length > 0 || search === "");

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <PageHeader
        badge="FAQ"
        title="Questions Frquentes"
        description="Tout ce que vous devez savoir sur DrillTown"
      />

      <section className="section-padding pt-0">
        <div className="max-w-3xl mx-auto px-4">
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
              placeholder="Rechercher une question..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] text-white placeholder-[#9ca3af] focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] transition-all"
            />
          </motion.div>

          <div className="space-y-4">
            {filtered.map((category, i) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <h3 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                  <HelpCircle size={18} className="text-[#7C3AED]" />
                  {category.name}
                </h3>
                <Accordion type="single" collapsible className="space-y-2">
                  {category.items.map((item, j) => (
                    <AccordionItem
                      key={j}
                      value={`${category.name}-${j}`}
                      className="border border-[#2a2a2a] rounded-xl overflow-hidden bg-[#1a1a1a] hover:border-[#7C3AED]/50 transition-all"
                    >
                      <AccordionTrigger className="px-6 py-4 hover:bg-[#7C3AED]/5 transition-colors">
                        <span className="text-white font-medium text-left">
                          {item.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="px-6 pb-6">
                          <p className="text-[#9ca3af] leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
