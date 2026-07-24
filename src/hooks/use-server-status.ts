"use client";

import { useState, useEffect, useCallback } from "react";
import { siteConfig } from "@/config/config";

export interface ServerStatus {
  online: boolean;
  players: number;
  maxPlayers: number;
  hostname: string;
  gametype?: string;
  mapname?: string;
}

export interface DiscordStatus {
  online: boolean;
  guildName: string;
  memberCount: number;
  presenceCount: number;
  inviteUrl: string;
}

export function useServerStatus(pollInterval = 30000) {
  const [server, setServer] = useState<ServerStatus>({
    online: false,
    players: 0,
    maxPlayers: siteConfig.server.maxPlayers,
    hostname: siteConfig.server.name,
  });
  const [discord, setDiscord] = useState<DiscordStatus>({
    online: true,
    guildName: siteConfig.siteName,
    memberCount: 130,
    presenceCount: 30,
    inviteUrl: siteConfig.discord.inviteUrl,
  });
  const [loading, setLoading] = useState(true);

  const fetchStatus = useCallback(async () => {
    try {
      // Direct fetch from Discord API
      try {
        const dRes = await fetch(
          `https://discord.com/api/v9/invites/${siteConfig.discord.inviteCode}?with_counts=true`
        );
        if (dRes.ok) {
          const dData = await dRes.json();
          setDiscord({
            online: true,
            guildName: dData.guild?.name ?? siteConfig.siteName,
            memberCount: dData.approximate_member_count ?? dData.profile?.member_count ?? 130,
            presenceCount: dData.approximate_presence_count ?? dData.profile?.online_count ?? 30,
            inviteUrl: `https://discord.gg/${siteConfig.discord.inviteCode}`,
          });
        }
      } catch {
        const localDRes = await fetch("/api/discord");
        if (localDRes.ok) {
          const localDData = await localDRes.json();
          setDiscord(localDData);
        }
      }

      // FiveM Server Status
      try {
        const sRes = await fetch("/api/server-status");
        if (sRes.ok) {
          const sData = await sRes.json();
          if (sData.online) setServer(sData);
        }
      } catch {
        // keep last known values
      }
    } catch {
      // keep last known values
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchStatus();
    const interval = setInterval(() => {
      void fetchStatus();
    }, pollInterval);
    return () => clearInterval(interval);
  }, [fetchStatus, pollInterval]);

  return { server, discord, loading, refetch: fetchStatus };
}
