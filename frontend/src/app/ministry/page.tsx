"use client";

import { MinistryHero } from "@/components/ministry/MinistryHero";
import { TheGenesis } from "@/components/ministry/TheGenesis";
import { FormationAndFaith } from "@/components/ministry/FormationAndFaith";
import { BirminghamStormSection } from "@/components/ministry/BirminghamStormSection";
import { LifeSchoolMandateSection } from "@/components/ministry/LifeSchoolMandateSection";
import { JoinTheJourneyCTA } from "@/components/ministry/JoinTheJourneyCTA";


export default function MinistryPage() {
  return (
    <>
      <MinistryHero />
      <TheGenesis />
      <FormationAndFaith />
      <BirminghamStormSection />
      <LifeSchoolMandateSection />
      <JoinTheJourneyCTA />
    </>
  );
}
