export const dynamic = "force-static";

import { NextResponse } from "next/server";
import { siteConfig } from "@/config/config";

export const revalidate = 60;

export async function GET() {
  try {
    const res = await fetch(
      `https://discord.com/api/v9/invites/${siteConfig.discord.inviteCode}?with_counts=true`,
      {
        headers: { "User-Agent": "DrillTown/1.0" },
        next: { revalidate: 60 },
      }
    );
    if (!res.ok) throw new Error(`Discord API: ${res.status}`);
    const data = await res.json();
    return NextResponse.json({
      online: true,
      guildName: data.guild?.name ?? siteConfig.siteName,
      memberCount: data.approximate_member_count ?? 0,
      presenceCount: data.approximate_presence_count ?? 0,
      inviteUrl: `https://discord.gg/${siteConfig.discord.inviteCode}`,
    });
  } catch {
    return NextResponse.json({
      online: false,
      memberCount: 0,
      presenceCount: 0,
      inviteUrl: siteConfig.discord.inviteUrl,
    });
  }
}
