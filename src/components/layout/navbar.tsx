"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/config";
import { cn } from "@/lib/utils";
import { ServerBadge } from "@/components/shared/server-badge";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [copied, setCopied] = useState(false);
  const pathname = usePathname();

  const handleCopyIP = useCallback(() => {
    navigator.clipboard.writeText(siteConfig.server.ip);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = requestAnimationFrame(() => setIsOpen(false));
    return () => cancelAnimationFrame(timer);
  }, [pathname]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-[#2a2a2a]/50 shadow-lg shadow-black/50"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 lg:w-12 lg:h-12">
              <div className="absolute inset-0 bg-[#7C3AED] rounded-full opacity-20 blur-md group-hover:opacity-40 transition-opacity" />
              <img
                src={siteConfig.logo}
                alt={siteConfig.siteName}
                className="relative w-full h-full object-contain"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
            </div>
            <span className="text-lg lg:text-xl font-bold tracking-wider neon-text">
              {siteConfig.logoText}
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {siteConfig.navigation.slice(0, 8).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg",
                  pathname === item.href
                    ? "text-white"
                    : "text-[#9ca3af] hover:text-white"
                )}
              >
                {pathname === item.href && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-[#7C3AED]/10 border border-[#7C3AED]/30 rounded-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <ServerBadge variant="navbar" showDiscord />
            <button
              onClick={handleCopyIP}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1a1a1a]/80 border border-[#2a2a2a] hover:border-[#7C3AED]/50 transition-all group text-xs"
            >
              <span className="text-[#9ca3af] group-hover:text-white transition-colors">
                IP:
              </span>
              <code className="text-[#A855F7] font-mono text-[11px]">
                {siteConfig.server.ip}
              </code>
              {copied ? (
                <Check size={12} className="text-green-400" />
              ) : (
                <Copy size={12} className="text-[#9ca3af] group-hover:text-[#A855F7] transition-colors" />
              )}
            </button>
            <Link href={siteConfig.discord.inviteUrl} target="_blank">
              <Button
                variant="premium"
                size="sm"
                className="animate-glow-pulse"
              >
                Discord
              </Button>
            </Link>
            <Link href="/connexion">
              <Button variant="outline" size="sm">
                Jouer
              </Button>
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-50 p-2 text-white hover:text-[#7C3AED] transition-colors"
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {/* Toast */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] px-5 py-3 rounded-xl bg-[#1a1a1a] border border-green-500/30 shadow-lg shadow-black/50 flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
              <Check size={16} className="text-green-400" />
            </div>
            <div>
              <p className="text-white text-sm font-medium">IP copiée !</p>
              <p className="text-[#9ca3af] text-xs">{siteConfig.server.ip}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#0a0a0a]/98 backdrop-blur-xl border-t border-[#2a2a2a]/50"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {siteConfig.navigation.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "block px-4 py-3 rounded-lg transition-all",
                      pathname === item.href
                        ? "bg-[#7C3AED]/10 text-[#7C3AED] border border-[#7C3AED]/30"
                        : "text-[#9ca3af] hover:text-white hover:bg-white/5"
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <Link href={siteConfig.discord.inviteUrl} target="_blank">
                  <Button variant="premium" className="w-full">
                    Discord
                  </Button>
                </Link>
                <Link href="/connexion">
                  <Button variant="outline" className="w-full">
                    Rejoindre le serveur
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
