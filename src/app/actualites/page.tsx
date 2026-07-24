"use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import newsData from "@/data/news.json";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";

export default function ActualitesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <PageHeader
        badge="Actualités"
        title="Dernières Actualités"
        description="Restez informé des dernières news de DrillTown"
      />
      <section className="section-padding pt-0">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newsData.articles.map((article, i) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] overflow-hidden hover:border-[#7C3AED]/50 transition-all duration-500"
              >
                <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-[#7C3AED]/20 to-[#1a1a1a]">
                  {article.image && (
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-[#9ca3af] mb-3">
                    <span className="flex items-center gap-1"><Calendar size={12} />{article.date}</span>
                    <span className="flex items-center gap-1"><User size={12} />{article.author}</span>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#7C3AED] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-[#9ca3af] text-sm leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <Button variant="link" size="sm" className="text-[#7C3AED] p-0">
                    Lire la suite <ArrowRight size={14} className="ml-1" />
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
