export const dynamic = "force-static";

import { NextResponse } from "next/server";
import { siteConfig } from "@/config/config";

export const revalidate = 30;

export async function GET() {
  try {
    const res = await fetch(
      `https://servers-frontend.fivem.net/api/servers/single/${siteConfig.server.cfxId}`,
      {
        headers: {
          "User-Agent": "DrillTown/1.0",
          "Accept": "application/json",
        },
        next: { revalidate: 30 },
      }
    );
    if (!res.ok) throw new Error(`FiveM API: ${res.status}`);
    const data = await res.json();
    return NextResponse.json({
      online: true,
      players: data.Data?.clients ?? 0,
      maxPlayers: data.Data?.sv_maxclients ?? siteConfig.server.maxPlayers,
      hostname: data.Data?.hostname ?? siteConfig.server.name,
      gametype: data.Data?.gametype ?? "",
      mapname: data.Data?.mapname ?? "",
    });
  } catch {
    return NextResponse.json({
      online: false,
      players: 0,
      maxPlayers: siteConfig.server.maxPlayers,
      hostname: siteConfig.server.name,
    });
  }
}
