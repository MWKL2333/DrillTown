export const siteConfig = {
  siteName: "DrillTown",
  tagline: "Le serveur RP Chicago le plus immersif",
  description:
    "DrillTown est un serveur FiveM RP immersif dans l'univers de la Drill. Rejoignez une communauté unique où le roleplay rencontre le style Chicago.",
  logo: "/logo.png",
  logoText: "DRILLTOWN",
  favicon: "/logo.png",
  colors: {
    primary: "#7C3AED",
    primaryDark: "#5B21B6",
    secondary: "#1a1a1a",
    accent: "#A855F7",
    accentLight: "#C084FC",
    background: "#0a0a0a",
    surface: "#1a1a1a",
    text: "#ffffff",
    textSecondary: "#9ca3af",
    border: "#2a2a2a",
    success: "#22c55e",
    warning: "#f59e0b",
    error: "#ef4444",
    discord: "#5865F2",
  },
  server: {
    ip: "cfx.re/join/4gbko4v",
    cfx: "cfx.re/join/4gbko4v",
    cfxId: "4gbko4v",
    port: 30143,
    name: "DrillTown RP",
    maxPlayers: 128,
  },
  discord: {
    inviteUrl: "https://discord.gg/AUmTd9x6F",
    inviteCode: "AUmTd9x6F",
    widgetId: "",
    serverId: "",
  },
  navigation: [
    { label: "Accueil", href: "/" },
    { label: "Présentation", href: "/presentation" },
    { label: "Connexion", href: "/connexion" },
    { label: "Discord", href: "/discord" },
    { label: "Règlement", href: "/reglement" },
    { label: "Lexique", href: "/lexique-chicago" },
    { label: "Équipe", href: "/equipe" },
    { label: "Actualités", href: "/actualites" },
    { label: "FAQ", href: "/faq" },
    { label: "Support", href: "/support" },
  ],
  socials: {
    youtube: "https://youtube.com/",
    twitter: "https://twitter.com/",
    instagram: "https://instagram.com/",
    tiktok: "https://www.tiktok.com/@drilltown_",
    twitch: "https://twitch.tv/",
  },
  contact: {
    email: "contact@drilltown.fr",
  },
  features: [
    {
      title: "Roleplay Immersif",
      description:
        "Plongez dans un environnement RP ultra-réaliste inspiré des rues de Chicago.",
      icon: "Shield",
    },
    {
      title: "Système Économique",
      description:
        "Économie dynamique complète avec jobs, drogues et plein de surprises.",
      icon: "DollarSign",
    },
    {
      title: "Factions & Gangs",
      description:
        "Rejoignez ou créez votre gang, négociez, guerroyez pour le contrôle des quartiers.",
      icon: "Users",
    },
    {
      title: "Véhicules Customs",
      description:
        "Collection de véhicules exclusifs avec système de customisation avancé.",
      icon: "Car",
    },
    {
      title: "Scripts Exclusifs",
      description:
        "Plus de 150 scripts sur-mesure pour une expérience unique.",
      icon: "Code",
    },
    {
      title: "Communauté Active",
      description:
        "Des joueurs actifs quotidiennement, staff réactif.",
      icon: "Heart",
    },
  ],
  statistics: {
    players: 64,
    playTime: "5000h",
    factions: "15+",
    vehicles: "250+",
    scripts: "150+",
  },
  timeline: [
    {
      date: "2025 - Q1",
      title: "Création du Projet",
      description: "Début du développement de DrillTown RP.",
    },
    {
      date: "2025 - Q2",
      title: "Alpha Privée",
      description: "Premiers tests avec la communauté fondatrice.",
    },
    {
      date: "2026 - Q3",
      title: "Bêta Ouverte",
      description: "Ouverture des inscriptions et premiers joueurs.",
    },
    {
      date: "2026 - Q4",
      title: "Lancement Officiel",
      description: "Sortie officielle du serveur DrillTown RP.",
    },
    {
      date: "2026 - Q1",
      title: "Mise à jour Majeure",
      description: "Nouveau système économique et gangs.",
    },
    {
      date: "2026 - Q2",
      title: "2.0 - Nouvelle Ère",
      description: "Refonte totale du serveur et nouveaux scripts.",
    },
  ],
  hero: {
    videoBg: "/videos/hero-bg.mp4",
    title: "WELCOME TO DRILLTOWN",
    subtitle: "Le serveur RP Chicago le plus immersif",
    buttons: [
      {
        text: "Rejoindre le serveur",
        href: "/connexion",
        icon: "Play",
      },
      { text: "Discord", href: "/discord", icon: "MessageCircle" },
    ],
  },
  about: {
    title: "À Propos de DrillTown",
    description:
      "DrillTown est un serveur FiveM RP unique qui vous plonge au cœur des rues de Chicago. Inspiré par la culture drill, notre serveur offre une expérience de roleplay authentique et immersive.",
    mission:
      "Notre mission est de créer l'expérience RP Chicago la plus réaliste et engageante possible, avec des systèmes complexes et une communauté soudée.",
    vision:
      "Devenir la référence francophone du roleplay Chicago sur FiveM.",
  },
  admin: {
    enabled: true,
    username: "admin",
    passwordHash: "admin123",
  },
};

export type SiteConfig = typeof siteConfig;
