"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/shared/page-header";
import { Search, BookOpen, Volume2 } from "lucide-react";
import lexiqueRP from "@/data/lexique-rp.json";

export default function LexiqueRPPage() {
  const [search, setSearch] = useState("");

  const filtered = lexiqueRP.terms.filter(
    (t) =>
      t.term.toLowerCase().includes(search.toLowerCase()) ||
      t.definition.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <PageHeader badge="Lexique RP" title="Lexique du Roleplay" description="Termes et abrviations utiliss en RP" />
      <section className="section-padding pt-0">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9ca3af]" size={20} />
            <input type="text" placeholder="Rechercher un terme RP..." value={search} onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] text-white placeholder-[#9ca3af] focus:outline-none focus:border-[#7C3AED] transition-all" />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filtered.map((term, i) => (
              <motion.div key={term.term} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.02 }}
                className="p-5 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#7C3AED]/50 transition-all">
                <h3 className="text-white font-bold text-lg mb-2">{term.term}</h3>
                <p className="text-[#9ca3af] text-sm">{term.definition}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
