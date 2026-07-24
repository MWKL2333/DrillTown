"use client";

import { SystemPage } from "@/components/shared/system-page";
import { Leaf, PackageSearch, Skull, DollarSign, AlertTriangle, FlaskConical } from "lucide-react";

const sections = [
  { title: "Prsentation", content: "Le systme de drogue de DrillTown est l'un des plus complets. De la culture la revente, chaque tape est simule avec un grand souci du détail.", icon: Leaf },
  { title: "Types de drogues", content: "Plusieurs types de drogues disponibles : cannabis, cocaïne, méthamphétamine, LSD, ecstasy. Chacune avec ses propres tapes de production et sa valeur marchande.", icon: FlaskConical },
  { title: "Culture et production", content: "La culture nécessite des terrains adaptés, des graines et du temps. La production en laboratoire nécessite du matriel spécifique.", icon: PackageSearch },
  { title: "Vente et distribution", content: "La revente peut se faire dans la rue ou via des réseaux établis. Attention aux forces de l'ordre !", icon: DollarSign },
  { title: "Risques", content: "Le trafic de drogue comporte des risques : arrestation, perte de marchandise, conflits avec les gangs rivaux.", icon: AlertTriangle },
  { title: "Addiction", content: "La consommation régulière entrane une addiction avec des effets secondaires visibles sur votre personnage.", icon: Skull },
];

export default function DroguePage() {
  return <SystemPage badge="Systme" title="Systme de Drogue" description="Le trafic de stupfiants Chicago-style" sections={sections} />;
}
