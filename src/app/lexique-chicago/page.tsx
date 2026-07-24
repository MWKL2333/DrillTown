"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/shared/page-header";
import lexiqueData from "@/data/lexique.json";
import { Search, BookOpen, Volume2 } from "lucide-react";

export default function LexiqueChicagoPage() {
  const [search, setSearch] = useState("");
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const filtered = lexiqueData.terms.filter((term) => {
    const matchesSearch =
      term.term.toLowerCase().includes(search.toLowerCase()) ||
      term.definition.toLowerCase().includes(search.toLowerCase());
    const matchesLetter = selectedLetter
      ? term.term[0].toUpperCase() === selectedLetter
      : true;
    return matchesSearch && matchesLetter;
  });

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <PageHeader
        badge="Lexique Chicago"
        title="Lexique Chicago Drill"
        description="Apprenez le vocabulaire des rues de Chicago"
      />

      <section className="section-padding pt-0">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative mb-6"
          >
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9ca3af]"
              size={20}
            />
            <input
              type="text"
              placeholder="Rechercher un terme..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] text-white placeholder-[#9ca3af] focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] transition-all"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            <button
              onClick={() => setSelectedLetter(null)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                !selectedLetter
                  ? "bg-[#7C3AED] text-white"
                  : "bg-[#1a1a1a] text-[#9ca3af] border border-[#2a2a2a] hover:border-[#7C3AED]/50"
              }`}
            >
              Tout
            </button>
            {letters.map((letter) => (
              <button
                key={letter}
                onClick={() =>
                  setSelectedLetter(
                    selectedLetter === letter ? null : letter
                  )
                }
                className={`w-9 h-9 rounded-lg text-sm font-medium transition-all ${
                  selectedLetter === letter
                    ? "bg-[#7C3AED] text-white"
                    : "bg-[#1a1a1a] text-[#9ca3af] border border-[#2a2a2a] hover:border-[#7C3AED]/50"
                }`}
              >
                {letter}
              </button>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filtered.map((term, i) => (
              <motion.div
                key={term.term}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.02 }}
                className="group p-5 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#7C3AED]/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-white font-bold text-lg">
                      {term.term}
                    </h3>
                    {term.pronunciation && (
                      <div className="flex items-center gap-1 text-xs text-[#9ca3af] mt-0.5">
                        <Volume2 size={12} />
                        {term.pronunciation}
                      </div>
                    )}
                  </div>
                  <BookOpen
                    size={16}
                    className="text-[#7C3AED] opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <p className="text-[#9ca3af] text-sm leading-relaxed mb-3">
                  {term.definition}
                </p>
                {term.origin && (
                  <p className="text-xs text-[#7C3AED]/70 mb-2">
                    Origine : {term.origin}
                  </p>
                )}
                {term.exampleRP && (
                  <div className="p-3 rounded-lg bg-[#0a0a0a] border border-[#2a2a2a]">
                    <span className="text-xs text-[#7C3AED] font-medium">
                      EXEMPLE RP
                    </span>
                    <p className="text-white text-sm italic mt-1">
                      &ldquo;{term.exampleRP}&rdquo;
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <BookOpen size={48} className="mx-auto text-[#9ca3af] mb-4" />
              <p className="text-[#9ca3af]">
                Aucun terme trouv pour votre recherche.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
