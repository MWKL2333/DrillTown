"use client";

import { SystemPage } from "@/components/shared/system-page";
import { Car, Wrench, ShoppingCart, Gauge, ShieldCheck, Building2 } from "lucide-react";

const sections = [
  { title: "Présentation", content: "DrillTown propose plus de 200 véhicules uniques allant des voitures de ville aux supercars en passant par les vhicules de chantier.", icon: Car },
  { title: "Concessionnaires", content: "Plusieurs concessionnaires sont disponibles : conomique, luxe, sport, utilitaire. Chacun avec son catalogue.", icon: Building2 },
  { title: "Customisation", content: "Les véhicules sont entièrement personnalisables : moteur, freins, suspension, pneus, couleurs, body kit.", icon: Wrench },
  { title: "Achat et vente", content: "Les véhicules peuvent être achetés neufs ou d'occasion. Il est aussi possible de les revendre.", icon: ShoppingCart },
  { title: "Performance", content: "Chaque véhicule a ses caractéristiques propres : vitesse, accélération, tenue de route.", icon: Gauge },
  { title: "Assurance", content: "L'assurance véhicule est obligatoire. En cas d'accident, les dégâts sont couverts.", icon: ShieldCheck },
];

export default function VehiculesPage() {
  return <SystemPage badge="Système" title="Système de Véhicules" description="Plus de 200 véhicules customisables" sections={sections} />;
}
