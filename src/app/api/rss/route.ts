export const dynamic = "force-static";

import { NextResponse } from "next/server";
import news from "@/data/news.json";
import { siteConfig } from "@/config/config";

export async function GET() {
  const baseUrl = "https://drilltown.fr";

  const items = news.articles
    .map(
      (article) => `
    <item>
      <title><![CDATA[${article.title}]]></title>
      <link>${baseUrl}/actualites</link>
      <guid isPermaLink="false">article-${article.id}</guid>
      <pubDate>${new Date(article.date).toUTCString()}</pubDate>
      <description><![CDATA[${article.excerpt}]]></description>
      <author><![CDATA[${article.author}]]></author>
    </item>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${siteConfig.siteName} - Actualités</title>
    <link>${baseUrl}/actualites</link>
    <description>${siteConfig.description}</description>
    <language>fr-fr</language>
    <lastBuildDate>${new Date(news.lastUpdated).toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/api/rss" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=1800",
    },
  });
}
