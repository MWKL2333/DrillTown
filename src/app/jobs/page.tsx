"use client";

import { SystemPage } from "@/components/shared/system-page";
import { Briefcase, Wrench, Truck, Stethoscope, Hammer, GraduationCap } from "lucide-react";

const sections = [
  { title: "Prsentation", content: "Le march de l'emploi de DrillTown est vari. Choisissez votre carrire et progressez dans la hirarchie.", icon: Briefcase },
  { title: "Jobs lgaux", content: "Livreur, mcanicien, chauffeur, serveur, constructeur, médecin, pompier, policier, avocat, journaliste...", icon: Truck },
  { title: "Jobs illgaux", content: "Trafic de drogue, recel, cambriolage, braquage, contrat, contrebande... Plus risqu, plus lucratif.", icon: Hammer },
  { title: "Formation", content: "Chaque job propose une formation pour apprendre les bases avant de commencer.", icon: GraduationCap },
  { title: "volution", content: "Gagnez de l'exprience pour monter en grade et dbloquer des privilges.", icon: Stethoscope },
  { title: "Salaire", content: "Les salaires sont versés chaque jour. Les primes et pourboires viennent complter vos revenus.", icon: Wrench },
];

export default function JobsPage() {
  return <SystemPage badge="Systme" title="Systme de Jobs" description="Carrire lgale et illgale Chicago" sections={sections} />;
}
