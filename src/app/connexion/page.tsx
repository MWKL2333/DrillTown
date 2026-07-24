"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/config";
import {
  Copy,
  ExternalLink,
  MessageCircle,
  Wifi,
  Users,
  Server,
} from "lucide-react";

export default function ConnexionPage() {
  const [copied, setCopied] = useState(false);
  const [serverStatus, setServerStatus] = useState<"online" | "offline" | "checking">("checking");
  const [playerCount, setPlayerCount] = useState(0);

  useEffect(() => {
    const checkServer = async () => {
      try {
        const res = await fetch("/api/server-status");
        if (res.ok) {
          const data = await res.json();
          setServerStatus(data.online ? "online" : "offline");
          setPlayerCount(data.players);
        } else {
          setServerStatus("offline");
        }
      } catch {
        setServerStatus("offline");
      }
    };
    checkServer();
    const interval = setInterval(checkServer, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyIP = () => {
    navigator.clipboard.writeText(siteConfig.server.ip);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleConnect = () => {
    window.open(`fivem://connect/${siteConfig.server.ip}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <PageHeader
        badge="Connexion"
        title="Rejoindre le Serveur"
        description="Connectez-vous et plongez dans l'univers DrillTown"
      />

      <section className="section-padding pt-0">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/20 to-transparent rounded-2xl blur-3xl" />
            <div className="relative p-8 md:p-12 rounded-2xl bg-[#1a1a1a] border border-[#2a2a2a] overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#7C3AED]/5 rounded-full blur-3xl" />

              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-16 h-16">
                      <div className="absolute inset-0 bg-[#7C3AED] rounded-full opacity-30 blur-md" />
                      <img
                        src={siteConfig.logo}
                        alt={siteConfig.siteName}
                        className="relative w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">
                        {siteConfig.siteName}
                      </h2>
                      <div className="flex items-center gap-2 mt-1">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            serverStatus === "online"
                              ? "bg-green-500 animate-pulse"
                              : serverStatus === "offline"
                              ? "bg-red-500"
                              : "bg-yellow-500 animate-pulse"
                          }`}
                        />
                        <span className="text-sm text-[#9ca3af]">
                          {serverStatus === "online"
                            ? "En ligne"
                            : serverStatus === "offline"
                            ? "Hors ligne"
                            : "Vrification..."}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-between p-4 rounded-lg bg-[#0a0a0a] border border-[#2a2a2a]">
                      <div className="flex items-center gap-3">
                        <Server size={18} className="text-[#7C3AED]" />
                        <span className="text-white text-sm">IP du serveur</span>
                      </div>
                      <span className="text-[#9ca3af] text-sm font-mono">
                        {siteConfig.server.ip}
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg bg-[#0a0a0a] border border-[#2a2a2a]">
                      <div className="flex items-center gap-3">
                        <Users size={18} className="text-[#7C3AED]" />
                        <span className="text-white text-sm">Joueurs</span>
                      </div>
                      <span className="text-[#9ca3af] text-sm">
                        {playerCount}/{siteConfig.server.maxPlayers}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Button
                      variant="premium"
                      size="lg"
                      onClick={handleConnect}
                      className="w-full text-base group"
                    >
                      <ExternalLink className="group-hover:scale-110 transition-transform" />
                      Connexion FiveM
                    </Button>

                    <div className="flex gap-3">
                      <Button
                        variant={copied ? "secondary" : "outline"}
                        onClick={handleCopyIP}
                        className="flex-1"
                      >
                        {copied ? (
                          <>
                            <Copy size={16} className="text-green-500" />
                            Copi !
                          </>
                        ) : (
                          <>
                            <Copy size={16} />
                            Copier IP
                          </>
                        )}
                      </Button>

                      <a
                        href={siteConfig.discord.inviteUrl}
                        target="_blank"
                        className="flex-1"
                      >
                        <Button variant="secondary" className="w-full">
                          <MessageCircle
                            size={16}
                            className="text-[#5865F2]"
                          />
                          Discord
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="hidden md:flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#7C3AED]/20 to-transparent border-2 border-[#7C3AED]/30 flex items-center justify-center">
                      <div className="text-center">
                        <Wifi
                          size={48}
                          className={`mx-auto mb-2 ${
                            serverStatus === "online"
                              ? "text-green-500"
                              : "text-[#9ca3af]"
                          }`}
                        />
                        <span className="text-3xl font-black text-gradient-red">
                          {siteConfig.server.maxPlayers}
                        </span>
                        <p className="text-[#9ca3af] text-xs mt-1">
                          Slots
                        </p>
                      </div>
                    </div>
                    <p className="text-[#9ca3af] text-sm">
                      Prêt à vivre l'expérience ?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
