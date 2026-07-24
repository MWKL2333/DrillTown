"use client";

import { SystemPage } from "@/components/shared/system-page";
import { Home, Building2, PaintBucket, ShoppingBag, Shield, KeyRound } from "lucide-react";

const sections = [
  { title: "Prsentation", content: "Le systme de logements de DrillTown vous permet d'acheter, louer et personnaliser votre rsidence dans les rues de Chicago.", icon: Home },
  { title: "Types de logements", content: "Appartements, maisons, lofts, villas, manoirs. Chaque type de logement a son standing et son prix.", icon: Building2 },
  { title: "Ameublement", content: "Intrieur entirement personnalisable : mobilier, dco, lectromnager, luminaires.", icon: PaintBucket },
  { title: "Scurit", content: "Systme d'alarme, camras, coffre-fort. Protgez vos biens des intrusions.", icon: Shield },
  { title: "Achat/vente", content: "March immobilier dynamique. Les prix fluctuent en fonction de la zone et de la demande.", icon: ShoppingBag },
  { title: "Location", content: "Possibilit de louer un logement avec option d'achat. Idal pour commencer.", icon: KeyRound },
];

export default function LogementsPage() {
  return <SystemPage badge="Systme" title="Systme de Logements" description="Trouvez le logement de vos rves Chicago" sections={sections} />;
}
