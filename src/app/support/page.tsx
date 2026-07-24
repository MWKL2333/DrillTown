"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/config";
import {
  Send,
  User,
  MessageCircle,
  FileText,
  Paperclip,
  Loader2,
  CheckCircle,
} from "lucide-react";

export default function SupportPage() {
  const [form, setForm] = useState({
    name: "",
    discord: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#0a0a0a]">
        <PageHeader
          badge="Support"
          title="Message envoy !"
          description="Notre quipe vous rpondra dans les plus brefs dlais"
        />
        <section className="section-padding pt-0">
          <div className="max-w-md mx-auto px-4 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.6 }}
            >
              <CheckCircle size={64} className="text-green-500 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-white mb-4">
                Merci {form.name} !
              </h2>
              <p className="text-[#9ca3af] mb-8">
                Votre demande de support a bien été envoyée.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: "", discord: "", subject: "", message: "" });
                }}
              >
                Envoyer un autre message
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <PageHeader
        badge="Support"
        title="Centre d'Aide"
        description="Une question ? Un problme ? Contactez-nous"
      />

      <section className="section-padding pt-0">
        <div className="max-w-3xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-2xl bg-[#1a1a1a] border border-[#2a2a2a]"
              >
                <div className="space-y-5">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Nom
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9ca3af]" size={18} />
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        placeholder="Votre nom"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0a0a0a] border border-[#2a2a2a] text-white placeholder-[#9ca3af] focus:outline-none focus:border-[#7C3AED] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Discord
                    </label>
                    <div className="relative">
                      <MessageCircle className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9ca3af]" size={18} />
                      <input
                        type="text"
                        required
                        value={form.discord}
                        onChange={(e) =>
                          setForm({ ...form, discord: e.target.value })
                        }
                        placeholder="Votre pseudo Discord#0000"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0a0a0a] border border-[#2a2a2a] text-white placeholder-[#9ca3af] focus:outline-none focus:border-[#7C3AED] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Sujet
                    </label>
                    <select
                      value={form.subject}
                      onChange={(e) =>
                        setForm({ ...form, subject: e.target.value })
                      }
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-[#2a2a2a] text-white focus:outline-none focus:border-[#7C3AED] transition-all"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="probleme-connexion">Problème de connexion</option>
                      <option value="signalement">Signalement</option>
                      <option value="whitelist">Demande de whitelist</option>
                      <option value="bug">Signalement de bug</option>
                      <option value="suggestion">Suggestion</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Message
                    </label>
                    <div className="relative">
                      <FileText className="absolute left-3 top-3 text-[#9ca3af]" size={18} />
                      <textarea
                        required
                        value={form.message}
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                        rows={6}
                        placeholder="Décrivez votre demande en détail..."
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0a0a0a] border border-[#2a2a2a] text-white placeholder-[#9ca3af] focus:outline-none focus:border-[#7C3AED] transition-all resize-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Pices jointes
                    </label>
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-[#0a0a0a] border border-[#2a2a2a] border-dashed cursor-pointer hover:border-[#7C3AED]/50 transition-all">
                      <Paperclip size={20} className="text-[#9ca3af]" />
                      <span className="text-[#9ca3af] text-sm">
                        Glissez des fichiers ou cliquez pour ajouter
                      </span>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="premium"
                    size="lg"
                    className="w-full group"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="group-hover:translate-x-1 transition-transform" />
                        Envoyer
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              {[
                {
                  title: "Discord",
                  desc: "Rejoignez notre Discord pour une aide rapide",
                  action: "Rejoindre",
                  href: siteConfig.discord.inviteUrl,
                },
                {
                  title: "Email",
                  desc: "Ou crivez-nous par email",
                  action: "crire",
                  href: `mailto:${siteConfig.contact.email}`,
                },
                {
                  title: "FAQ",
                  desc: "Consultez notre FAQ pour des réponses rapides",
                  action: "Voir",
                  href: "/faq",
                },
              ].map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  className="block p-5 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#7C3AED]/50 transition-all group"
                >
                  <h3 className="text-white font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[#9ca3af] text-sm mb-3">{item.desc}</p>
                  <span className="text-[#7C3AED] text-sm font-medium group-hover:underline">
                    {item.action} &rarr;
                  </span>
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
