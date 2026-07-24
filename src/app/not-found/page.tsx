"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/config";
import { ArrowLeft, Search, Home } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#7C3AED]/10 via-transparent to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7C3AED]/5 rounded-full blur-3xl" />

      <div className="relative text-center max-w-2xl mx-auto px-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-[#7C3AED] rounded-full opacity-30 blur-3xl" />
            <span className="text-[150px] md:text-[200px] font-black neon-text leading-none">
              404
            </span>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl md:text-3xl font-bold text-white mb-4"
        >
          Page introuvable
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-[#9ca3af] text-lg mb-8"
        >
          Cette page a t dconnecte ou n&apos;existe pas.
          Retournez en terrain connu.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/">
            <Button variant="premium" size="lg" className="min-w-[200px]">
              <Home size={20} />
              Retour l&apos;accueil
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg">
              Signaler un problme
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12"
        >
          <Link href="/" className="inline-flex items-center gap-1 text-[#9ca3af] hover:text-white transition-colors text-sm">
            <ArrowLeft size={14} />
            Retour au site
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
