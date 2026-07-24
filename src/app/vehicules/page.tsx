"use client";

import { SystemPage } from "@/components/shared/system-page";
import { Car, Wrench, ShoppingCart, Gauge, ShieldCheck, Building2 } from "lucide-react";

const sections = [
  { title: "Prsentation", content: "DrillTown propose plus de 200 vhicules uniques allant des voitures de ville aux supercars en passant par les vhicules de chantier.", icon: Car },
  { title: "Concessionnaires", content: "Plusieurs concessionnaires sont disponibles : conomique, luxe, sport, utilitaire. Chacun avec son catalogue.", icon: Building2 },
  { title: "Customisation", content: "Les vhicules sont entirement personnalisables : moteur, freins, suspension, pneus, couleurs, body kit.", icon: Wrench },
  { title: "Achat et vente", content: "Les vhicules peuvent tre achets neufs ou d'occasion. Il est aussi possible de les revendre.", icon: ShoppingCart },
  { title: "Performance", content: "Chaque vhicule a ses caractristiques propres : vitesse, acclration, tenue de route.", icon: Gauge },
  { title: "Assurance", content: "L'assurance vhicule est obligatoire. En cas d'accident, les dgts sont couverts.", icon: ShieldCheck },
];

export default function VehiculesPage() {
  return <SystemPage badge="Systme" title="Systme de Vhicules" description="Plus de 200 vhicules customisables" sections={sections} />;
}
