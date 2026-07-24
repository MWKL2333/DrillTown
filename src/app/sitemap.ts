import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://drilltown.fr";

  const routes = [
    "", "/presentation", "/a-propos", "/connexion", "/discord",
    "/reglement", "/lexique-chicago", "/lexique-rp", "/faq", "/equipe",
    "/actualites", "/changelog", "/support", "/contact", "/guide-debutant",
    "/comment-jouer", "/installer-fivem", "/economie", "/drogue", "/armes",
    "/logements", "/vehicules", "/crafting", "/jobs", "/factions", "/gangs",
    "/cpd", "/ems", "/entreprises", "/mentions-legales", "/confidentialite",
    "/admin", "/not-found",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" as const : "weekly" as const,
    priority: route === "" ? 1 : route === "/not-found" ? 0.1 : 0.8,
  }));
}
