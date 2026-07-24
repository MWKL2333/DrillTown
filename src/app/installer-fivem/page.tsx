"use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Monitor, Shield, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function InstallerFiveMPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <PageHeader badge="Installation" title="Installer FiveM" description="Guide d'installation complet pour FiveM" />
      <section className="section-padding pt-0">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          {[
            { icon: <Download size={24} />, title: "Tlcharger FiveM", desc: "Rendez-vous sur le site officiel de FiveM et tlchargez le client.", link: "https://fivem.net", linkText: "fivem.net" },
            { icon: <Monitor size={24} />, title: "Installer le client", desc: "Lancez l'installateur et suivez les instructions l'cran." },
            { icon: <Shield size={24} />, title: "Connecter Rockstar", desc: "Connectez-vous avec votre compte Rockstar Social Club." },
            { icon: <CheckCircle size={24} />, title: "Prt jouer", desc: "Une fois install, cherchez DrillTown dans la liste des serveurs ou utilisez l'IP directe." },
          ].map((step, i) => (
            <motion.div key={step.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] flex gap-4 items-start">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#7C3AED]/10 border border-[#7C3AED]/30 flex items-center justify-center text-[#7C3AED]">{step.icon}</div>
              <div>
                <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-[#9ca3af] text-sm">{step.desc}</p>
                {step.link && (
                  <Link href={step.link} target="_blank" className="flex items-center gap-1 text-[#7C3AED] text-sm mt-2 hover:underline">
                    {step.linkText} <ExternalLink size={12} />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
          <div className="text-center pt-6">
            <Link href="/connexion">
              <Button variant="premium" size="lg">Rejoindre DrillTown</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
