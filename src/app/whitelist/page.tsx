"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/config";
import {
  ShieldCheck,
  Lock,
  Unlock,
  CheckCircle2,
  AlertTriangle,
  User,
  FileText,
  Send,
  HelpCircle,
  ExternalLink,
} from "lucide-react";

export default function WhitelistPage() {
  // State for session status: open or closed
  const [isOpen, setIsOpen] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    discordTag: "",
    age: "",
    fivemName: "",
    rpName: "",
    backstory: "",
    fearRpAns: "",
    ruleConsent: false,
  });

  // Load whitelist status from localStorage
  useEffect(() => {
    const savedStatus = localStorage.getItem("drilltown_whitelist_open");
    if (savedStatus !== null) {
      const timer = requestAnimationFrame(() => setIsOpen(savedStatus === "true"));
      return () => cancelAnimationFrame(timer);
    }
  }, []);

  const toggleSessionStatus = () => {
    const nextStatus = !isOpen;
    setIsOpen(nextStatus);
    localStorage.setItem("drilltown_whitelist_open", String(nextStatus));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.ruleConsent) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <PageHeader
        badge="Candidature RP"
        title="Session Whitelist DrillTown"
        description="Rejoignez la communauté exclusive de DrillTown RP Chicago"
      />

      <section className="section-padding pt-0">
        <div className="max-w-4xl mx-auto px-4">
          {/* Admin Control Bar */}
          <div className="mb-8 p-4 rounded-xl bg-[#121212] border border-[#2a2a2a] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#7C3AED]/20 border border-[#7C3AED]/40 flex items-center justify-center text-[#7C3AED]">
                <ShieldCheck size={18} />
              </div>
              <div>
                <p className="text-white text-xs font-bold uppercase tracking-wider">
                  Contrôle Staff Whitelist
                </p>
                <p className="text-[#9ca3af] text-[11px]">
                  Gérez l&apos;ouverture et la fermeture des sessions de candidature en direct.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-[#9ca3af] font-semibold">Statut actuel:</span>
              <button
                onClick={toggleSessionStatus}
                className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                  isOpen
                    ? "bg-green-500/20 text-green-400 border border-green-500/40 hover:bg-green-500/30"
                    : "bg-red-500/20 text-red-400 border border-red-500/40 hover:bg-red-500/30"
                }`}
              >
                {isOpen ? (
                  <>
                    <Unlock size={14} /> SESSIONS OUVERTES
                  </>
                ) : (
                  <>
                    <Lock size={14} /> SESSIONS FERMÉES
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Main Status Header Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-8 rounded-2xl border mb-10 shadow-2xl relative overflow-hidden ${
              isOpen
                ? "bg-gradient-to-br from-[#0f291e] via-[#121212] to-[#0a0a0a] border-green-500/30"
                : "bg-gradient-to-br from-[#2a0f12] via-[#121212] to-[#0a0a0a] border-red-500/30"
            }`}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center border shadow-xl ${
                    isOpen
                      ? "bg-green-500/20 border-green-500/40 text-green-400"
                      : "bg-red-500/20 border-red-500/40 text-red-400"
                  }`}
                >
                  {isOpen ? <Unlock size={32} /> : <Lock size={32} />}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${
                        isOpen ? "bg-green-400 animate-pulse" : "bg-red-500"
                      }`}
                    />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#9ca3af]">
                      {isOpen ? "Candidatures Ouvertes" : "Candidatures Fermées"}
                    </span>
                  </div>
                  <h2 className="font-display text-3xl text-white uppercase tracking-wide">
                    {isOpen ? "Session de Recrutement Ouverte" : "Session Actuellement Fermée"}
                  </h2>
                </div>
              </div>

              <div className="text-left sm:text-right">
                <p className="text-xs text-[#9ca3af] mb-1 font-semibold">Âge Minimum Requise</p>
                <span className="px-3 py-1 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]/40 text-[#A855F7] text-xs font-bold">
                  16 Ans Minimum (HRP)
                </span>
              </div>
            </div>
          </motion.div>

          {/* Form Content / Closed Banner */}
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 rounded-2xl bg-[#1a1a1a] border border-green-500/40 text-center shadow-2xl space-y-6"
            >
              <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/40 text-green-400 mx-auto flex items-center justify-center">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="font-display text-3xl text-white uppercase">
                Candidature Transmise avec Succès !
              </h3>
              <p className="text-[#9ca3af] text-sm max-w-lg mx-auto leading-relaxed">
                Votre dossier Whitelist pour <strong className="text-white">{formData.rpName}</strong> (Discord: <strong className="text-[#7C3AED]">{formData.discordTag}</strong>) a bien été envoyé aux modérateurs de DrillTown. Un membre du staff vous contactera sur Discord sous 24h.
              </p>
              <div className="pt-4 border-t border-[#2a2a2a] flex justify-center gap-4">
                <Button
                  onClick={() => setSubmitted(false)}
                  variant="outline"
                  size="lg"
                  className="text-xs"
                >
                  Soumettre une autre candidature
                </Button>
                <a href={siteConfig.discord.inviteUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="premium" size="lg" className="text-xs flex items-center gap-2">
                    Suivre sur Discord <ExternalLink size={14} />
                  </Button>
                </a>
              </div>
            </motion.div>
          ) : isOpen ? (
            /* Open Form */
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl bg-[#1a1a1a] border border-[#2a2a2a] shadow-2xl space-y-8"
            >
              <div className="border-b border-[#2a2a2a] pb-4">
                <h3 className="font-display text-2xl text-white uppercase tracking-wide">
                  Formulaire de Candidature Whitelist
                </h3>
                <p className="text-[#9ca3af] text-xs mt-1">
                  Veuillez remplir tous les champs avec soin. Toute réponse bâclée entraînera un refus systématique.
                </p>
              </div>

              {/* Step 1: HRP Info */}
              <div className="space-y-4">
                <h4 className="text-[#7C3AED] text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                  <User size={14} /> 1. Informations Joueur (HRP)
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-xs font-semibold mb-2">
                      Pseudo & Discriminant Discord *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="ex: Kev_Drill#1234 ou @kev_drill"
                      value={formData.discordTag}
                      onChange={(e) => setFormData({ ...formData, discordTag: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-[#2a2a2a] text-white text-sm focus:border-[#7C3AED] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-white text-xs font-semibold mb-2">
                      Votre Âge IRL (Minimum 16 ans) *
                    </label>
                    <input
                      type="number"
                      min="16"
                      max="99"
                      required
                      placeholder="ex: 18"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-[#2a2a2a] text-white text-sm focus:border-[#7C3AED] focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2: RP Personnage */}
              <div className="space-y-4 pt-4 border-t border-[#2a2a2a]">
                <h4 className="text-[#7C3AED] text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                  <FileText size={14} /> 2. Personnage & Lore Chicago (RP)
                </h4>

                <div>
                  <label className="block text-white text-xs font-semibold mb-2">
                    Nom & Prénom du Personnage *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="ex: Marcus Jenkins"
                    value={formData.rpName}
                    onChange={(e) => setFormData({ ...formData, rpName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-[#2a2a2a] text-white text-sm focus:border-[#7C3AED] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-white text-xs font-semibold mb-2">
                    Histoire & Origine du Personnage (Backstory - min 100 mots) *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Racontez le vécu de votre personnage dans les quartiers de Chicago, ses ambitions et ses motivations..."
                    value={formData.backstory}
                    onChange={(e) => setFormData({ ...formData, backstory: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-[#2a2a2a] text-white text-sm focus:border-[#7C3AED] focus:outline-none transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Step 3: Rules Test */}
              <div className="space-y-4 pt-4 border-t border-[#2a2a2a]">
                <h4 className="text-[#7C3AED] text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                  <HelpCircle size={14} /> 3. Test de Connaissance du Règlement
                </h4>

                <div>
                  <label className="block text-white text-xs font-semibold mb-2">
                    Expliquez avec vos propres mots ce qu&apos;est la règle du FearRP *
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Explication du FearRP (ex: réagir face à une arme pointée sur soi)..."
                    value={formData.fearRpAns}
                    onChange={(e) => setFormData({ ...formData, fearRpAns: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-[#2a2a2a] text-white text-sm focus:border-[#7C3AED] focus:outline-none transition-colors resize-none"
                  />
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="consent"
                    required
                    checked={formData.ruleConsent}
                    onChange={(e) => setFormData({ ...formData, ruleConsent: e.target.checked })}
                    className="mt-1 w-4 h-4 accent-[#7C3AED]"
                  />
                  <label htmlFor="consent" className="text-xs text-[#9ca3af] leading-relaxed cursor-pointer">
                    J&apos;affirme avoir lu et accepté le <strong className="text-white">règlement officiel de DrillTown RP</strong> et je m&apos;engage à respecter le Fair-Play et les règles de quartier.
                  </label>
                </div>
              </div>

              <div className="pt-4 border-t border-[#2a2a2a]">
                <Button type="submit" variant="premium" size="xl" className="w-full text-sm flex items-center justify-center gap-2">
                  <Send size={16} /> Envoyer ma Candidature Whitelist
                </Button>
              </div>
            </motion.form>
          ) : (
            /* Closed State Info & Notification */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-8 rounded-2xl bg-[#1a1a1a] border border-[#2a2a2a] shadow-2xl text-center space-y-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-400 mx-auto flex items-center justify-center">
                <AlertTriangle size={32} />
              </div>
              <div>
                <h3 className="font-display text-2xl text-white uppercase tracking-wide mb-2">
                  Sessions de Recrutement Actuellement Suspendues
                </h3>
                <p className="text-[#9ca3af] text-sm max-w-lg mx-auto leading-relaxed">
                  L&apos;équipe de modération de DrillTown examine actuellement le quota de candidatures en cours. Rejoignez le serveur Discord pour recevoir une mention dès la prochaine ouverture !
                </p>
              </div>

              <div className="pt-4 border-t border-[#2a2a2a] flex justify-center">
                <a href={siteConfig.discord.inviteUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="premium" size="xl" className="text-sm flex items-center gap-2">
                    Rejoindre l&apos;Annonce Whitelist sur Discord <ExternalLink size={16} />
                  </Button>
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
