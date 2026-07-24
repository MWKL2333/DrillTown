"use client";

import { motion } from "framer-motion";
import { Users, Wifi, WifiOff, ExternalLink } from "lucide-react";
import { useServerStatus } from "@/hooks/use-server-status";
import { siteConfig } from "@/config/config";
import { cn } from "@/lib/utils";

interface ServerBadgeProps {
  variant?: "navbar" | "hero" | "inline";
  showPlayers?: boolean;
  showDiscord?: boolean;
}

export function ServerBadge({ variant = "inline", showPlayers = true, showDiscord = false }: ServerBadgeProps) {
  const { server, discord, loading } = useServerStatus();

  if (loading) {
    return (
      <div className={cn(
        "flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1a1a1a]/80 border border-[#2a2a2a] animate-pulse",
        variant === "hero" && "px-4 py-2"
      )}>
        <div className="w-2 h-2 rounded-full bg-[#9ca3af]" />
        <span className="text-xs text-[#9ca3af]">Connexion...</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      {/* Server Status */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={cn(
          "flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all",
          server.online
            ? "bg-green-500/10 border-green-500/30"
            : "bg-red-500/10 border-red-500/30",
          variant === "hero" && "px-4 py-2"
        )}
      >
        {server.online ? (
          <Wifi size={variant === "hero" ? 16 : 12} className="text-green-400" />
        ) : (
          <WifiOff size={variant === "hero" ? 16 : 12} className="text-red-400" />
        )}
        <div className="flex flex-col">
          <span className={cn(
            "font-semibold leading-tight",
            server.online ? "text-green-400" : "text-red-400",
            variant === "hero" ? "text-sm" : "text-xs"
          )}>
            {server.online ? "Online" : "Offline"}
          </span>
          {showPlayers && server.online && (
            <span className={cn(
              "text-[#9ca3af] leading-tight",
              variant === "hero" ? "text-xs" : "text-[10px]"
            )}>
              {server.players}/{server.maxPlayers} joueurs
            </span>
          )}
        </div>
      </motion.div>

      {/* Discord Status */}
      {showDiscord && (
        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          href={siteConfig.discord.inviteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all cursor-pointer hover:bg-[#5865F2]/10 hover:border-[#5865F2]/50",
            discord.online
              ? "bg-[#5865F2]/10 border-[#5865F2]/30"
              : "bg-[#1a1a1a]/80 border-[#2a2a2a]"
          )}
        >
          <div className="flex flex-col">
            <span className={cn(
              "font-semibold leading-tight text-[#5865F2]",
              variant === "hero" ? "text-sm" : "text-xs"
            )}>
              Discord
            </span>
            {discord.online && (
              <span className="text-[#9ca3af] text-[10px] leading-tight">
                {discord.presenceCount} en ligne
              </span>
            )}
          </div>
          <ExternalLink size={10} className="text-[#9ca3af]" />
        </motion.a>
      )}
    </div>
  );
}
