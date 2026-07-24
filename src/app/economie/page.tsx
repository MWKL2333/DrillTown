"use client";

import { SystemPage } from "@/components/shared/system-page";
import { DollarSign, TrendingUp, Building2, Briefcase, Banknote, PiggyBank } from "lucide-react";

const sections = [
  { title: "Présentation", content: "DrillTown dispose d'une économie dynamique et complexe, inspiré des systèmes économiques réels. Chaque action a un impact sur l'économie globale du serveur.", icon: DollarSign },
  { title: "March du travail", content: "De nombreux jobs sont disponibles : livreur, mécanicien, chauffeur de taxi, serveur, constructeur, etc. Chaque job a son propre salaire et ses propres prrogatives.", icon: Briefcase },
  { title: "Entreprises", content: "Les joueurs peuvent acheter et gérer leur propre entreprise. Restaurants, concessions, ateliers mécaniques... Les possibilités sont infinies.", icon: Building2 },
  { title: "Système bancaire", content: "Chaque joueur dispose d'un compte en banque avec IBAN unique. Les transactions sont tracées et sécurisées.", icon: Banknote },
  { title: "Taux et inflation", content: "L'économie est gérée par des taux dynamiques qui voluent en fonction de l'offre et de la demande sur le serveur.", icon: TrendingUp },
  { title: "Placements", content: "Il est possible d'investir son argent dans différents placements : immobilier, actions, crypto-monnaies.", icon: PiggyBank },
];

export default function EconomiePage() {
  return <SystemPage badge="Système" title="Système économique" description="Une économie complexe et immersive" sections={sections} />;
}
