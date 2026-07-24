"use client";

import { useState, useEffect, useCallback } from "react";

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
    maxPlayers: 128,
    hostname: "",
  });
  const [discord, setDiscord] = useState<DiscordStatus>({
    online: false,
    guildName: "",
    memberCount: 0,
    presenceCount: 0,
    inviteUrl: "",
  });
  const [loading, setLoading] = useState(true);

  const fetchStatus = useCallback(async () => {
    try {
      const [serverRes, discordRes] = await Promise.all([
        fetch("/api/server-status"),
        fetch("/api/discord"),
      ]);
      if (serverRes.ok) {
        const serverData = await serverRes.json();
        setServer(serverData);
      }
      if (discordRes.ok) {
        const discordData = await discordRes.json();
        setDiscord(discordData);
      }
    } catch {
      // keep last known values
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStatus();
    const interval = setInterval(fetchStatus, pollInterval);
    return () => clearInterval(interval);
  }, [fetchStatus, pollInterval]);

  return { server, discord, loading, refetch: fetchStatus };
}
