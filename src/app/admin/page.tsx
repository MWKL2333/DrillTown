"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/config";
import { Button } from "@/components/ui/button";
import { 
  Lock, 
  Eye, 
  EyeOff, 
  LayoutDashboard, 
  FileText, 
  Image as ImageIcon, 
  Settings, 
  Users, 
  LogOut,
  AlertCircle,
  ShieldCheck,
} from "lucide-react";

export default function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (username === siteConfig.admin.username && password === siteConfig.admin.passwordHash) {
      setLoggedIn(true);
    } else {
      setError("Identifiants incorrects");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  if (!loggedIn) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md mx-4"
        >
          <div className="p-8 rounded-2xl bg-[#1a1a1a] border border-[#2a2a2a]">
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/30 flex items-center justify-center">
                <Lock size={28} className="text-[#7C3AED]" />
              </div>
              <h1 className="text-2xl font-bold text-white">Administration</h1>
              <p className="text-[#9ca3af] text-sm mt-1">Connectez-vous pour gérer le site</p>
            </div>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-white text-sm font-medium mb-2">Nom d&apos;utilisateur</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="admin"
                  className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-[#2a2a2a] text-white placeholder-[#9ca3af] focus:outline-none focus:border-[#7C3AED] transition-all"
                />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2">Mot de passe</label>
                <div className="relative">
                  <input
                    type={showPwd ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="********"
                    className="w-full px-4 py-3 pr-12 rounded-xl bg-[#0a0a0a] border border-[#2a2a2a] text-white placeholder-[#9ca3af] focus:outline-none focus:border-[#7C3AED] transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPwd(!showPwd)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9ca3af]"
                  >
                    {showPwd ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
              {error && (
                <div className="flex items-center gap-2 text-red-500 text-sm">
                  <AlertCircle size={14} />
                  {error}
                </div>
              )}
              <Button type="submit" variant="premium" size="lg" className="w-full">
                Connexion
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <LayoutDashboard size={24} className="text-[#7C3AED]" />
            <h1 className="text-2xl font-bold text-white">Tableau de bord</h1>
          </div>
          <Button variant="outline" size="sm" onClick={handleLogout}>
            <LogOut size={16} /> Dconnexion
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Pages", value: 34, icon: <FileText />, color: "#7C3AED" },
            { label: "Images", value: 12, icon: <ImageIcon />, color: "#22c55e" },
            { label: "Staff", value: 8, icon: <Users />, color: "#3b82f6" },
            { label: "Règles", value: 101, icon: <Settings />, color: "#f59e0b" },
          ].map((stat) => (
            <div key={stat.label} className="p-5 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[#9ca3af] text-sm">{stat.label}</span>
                <span className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: stat.color + "20", color: stat.color }}>
                  {stat.icon}
                </span>
              </div>
              <span className="text-3xl font-bold text-white">{stat.value}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-6 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a]">
            <h2 className="text-lg font-bold text-white mb-4">Pages disponibles</h2>
            <div className="grid grid-cols-2 gap-2">
              {siteConfig.navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2 p-3 rounded-lg bg-[#0a0a0a] border border-[#2a2a2a] text-[#9ca3af] hover:text-white hover:border-[#7C3AED]/50 transition-all text-sm"
                >
                  <span className="text-[#7C3AED]">&#8226;</span>
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a]">
            <h2 className="text-lg font-bold text-white mb-4">Actions rapides</h2>
            <div className="space-y-3">
              {[
                { label: "Gestion des Whitelists", desc: "Accepter / Refuser les candidatures RP", href: "/admin/whitelist", icon: ShieldCheck },
                { label: "Modifier le règlement", desc: "Règles et FearRP du serveur", href: "/reglement", icon: Settings },
                { label: "Gérer l'équipe Staff", desc: "Membres de modération", href: "/equipe", icon: Users },
                { label: "Actualités & News", desc: "Annonces et mises à jour", href: "/actualites", icon: FileText },
              ].map((action) => {
                const Icon = action.icon;
                return (
                  <a
                    key={action.label}
                    href={action.href}
                    className="flex items-center justify-between p-3 rounded-lg bg-[#0a0a0a] border border-[#2a2a2a] hover:border-[#7C3AED]/50 transition-all group"
                  >
                    <div>
                      <p className="text-white text-sm font-medium group-hover:text-[#A855F7] transition-colors">
                        {action.label}
                      </p>
                      <p className="text-[#9ca3af] text-xs">{action.desc}</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Icon size={16} className="text-[#7C3AED]" />
                    </Button>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="p-6 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] lg:col-span-2">
            <h2 className="text-lg font-bold text-white mb-4">Configuration du site</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: "Nom du site", value: siteConfig.siteName },
                { label: "Tagline", value: siteConfig.tagline },
                { label: "IP du serveur", value: siteConfig.server.ip },
                { label: "Discord", value: siteConfig.discord.inviteUrl },
                { label: "Email", value: siteConfig.contact.email },
                { label: "Joueurs", value: siteConfig.statistics.players.toLocaleString() },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-[#0a0a0a] border border-[#2a2a2a]">
                  <span className="text-[#9ca3af] text-sm">{item.label}</span>
                  <span className="text-white text-sm font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
