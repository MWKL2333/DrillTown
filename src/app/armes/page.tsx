"use client";

import { SystemPage } from "@/components/shared/system-page";
import { Swords, Shield, Target, Wrench, Ban, ShoppingBag } from "lucide-react";

const sections = [
  { title: "Présentation", content: "Le système d'armes de DrillTown propose un large catalogue d'armes inspirées des rues de Chicago. De l'arme de point au fusil d'assaut.", icon: Swords },
  { title: "Armes légales", content: "Certaines armes sont disponibles via des armureries agrées avec permis. Pistolet, fusil de chasse, etc.", icon: Shield },
  { title: "Armes illégales", content: "Les armes illégales (armes automatiques, modifiées) s'achètent sur le marché noir auprès de trafiquants.", icon: Target },
  { title: "Customisation", content: "Les armes peuvent être personnalises : silencieux, viseurs, chargeurs, couleurs, etc.", icon: Wrench },
  { title: "Règlementation", content: "Le port d'arme est réglementé et nécessite des autorisations. Le port d'arme visible est interdit en zone safe.", icon: Ban },
  { title: "Marché noir", content: "Le marché noir propose des armes rares et modifiées. Les transactions se font au compte-gouttes.", icon: ShoppingBag },
];

export default function ArmesPage() {
  return <SystemPage badge="Système" title="Système d'Armes" description="Armes légales et illégales dans les rues de Chicago" sections={sections} />;
}
