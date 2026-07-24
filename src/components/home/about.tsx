"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Target, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/config";

export function AboutSection() {
  return (
    <section className="relative section-padding bg-gradient-to-b from-[#050505] to-[#0a0a0a] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#7C3AED]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {siteConfig.about.title}
            </h2>
            <p className="text-[#9ca3af] text-lg leading-relaxed mb-8">
              {siteConfig.about.description}
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#7C3AED]/10 border border-[#7C3AED]/30 flex items-center justify-center">
                  <Target size={20} className="text-[#7C3AED]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Notre Mission</h3>
                  <p className="text-[#9ca3af] text-sm leading-relaxed">
                    {siteConfig.about.mission}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#7C3AED]/10 border border-[#7C3AED]/30 flex items-center justify-center">
                  <Eye size={20} className="text-[#7C3AED]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Notre Vision</h3>
                  <p className="text-[#9ca3af] text-sm leading-relaxed">
                    {siteConfig.about.vision}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link href="/presentation">
                <Button variant="premium" size="lg" className="group">
                  En savoir plus
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/20 to-transparent rounded-2xl blur-3xl" />
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#2a2a2a]">
              <img
                src="/images/about-preview.svg"
                alt="DrillTown Server"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
