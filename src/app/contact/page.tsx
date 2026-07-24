"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/config";
import { Send, Mail, MapPin, MessageCircle, Loader2, CheckCircle } from "lucide-react";

export default function ContactPage() {
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
        <PageHeader badge="Contact" title="Message envoy !" description="Nous vous répondrons dans les plus brefs délais" />
        <section className="section-padding pt-0">
          <div className="max-w-md mx-auto px-4 text-center">
            <CheckCircle size={64} className="text-green-500 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-white mb-4">Merci !</h2>
            <p className="text-[#9ca3af] mb-8">Votre message a bien été envoyé.</p>
            <Button variant="outline" onClick={() => setSubmitted(false)}>Envoyer un autre message</Button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <PageHeader badge="Contact" title="Contactez-nous" description="Une question ? Un projet ? écrivez-nous" />
      <section className="section-padding pt-0">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-[#1a1a1a] border border-[#2a2a2a] space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Nom</label>
                  <input type="text" required placeholder="Votre nom" className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-[#2a2a2a] text-white placeholder-[#9ca3af] focus:outline-none focus:border-[#7C3AED] transition-all" />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Email</label>
                  <input type="email" required placeholder="votre@email.com" className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-[#2a2a2a] text-white placeholder-[#9ca3af] focus:outline-none focus:border-[#7C3AED] transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2">Sujet</label>
                <input type="text" required placeholder="Sujet de votre message" className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-[#2a2a2a] text-white placeholder-[#9ca3af] focus:outline-none focus:border-[#7C3AED] transition-all" />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2">Message</label>
                <textarea rows={6} required placeholder="Votre message..." className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-[#2a2a2a] text-white placeholder-[#9ca3af] focus:outline-none focus:border-[#7C3AED] transition-all resize-none" />
              </div>
              <Button type="submit" variant="premium" size="lg" className="w-full group" disabled={loading}>
                {loading ? <><Loader2 className="animate-spin" /> Envoi...</> : <><Send className="group-hover:translate-x-1 transition-transform" /> Envoyer</>}
              </Button>
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="space-y-4">
            {[
              { icon: <Mail size={20} />, title: "Email", desc: siteConfig.contact.email },
              { icon: <MessageCircle size={20} />, title: "Discord", desc: "Support disponible 24/7" },
              { icon: <MapPin size={20} />, title: "Localisation", desc: "France" },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a]">
                <div className="w-10 h-10 rounded-lg bg-[#7C3AED]/10 border border-[#7C3AED]/30 flex items-center justify-center text-[#7C3AED] mb-3">{item.icon}</div>
                <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                <p className="text-[#9ca3af] text-sm">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
