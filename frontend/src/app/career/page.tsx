import { CareerHero } from "@/components/career/CareerHero";
import { CareerStats } from "@/components/career/CareerStats";
import { CareerJourney } from "@/components/career/CareerJourney";
import { KeyAchievements } from "@/components/career/KeyAchievements";
import { Philosophy } from "@/components/career/Philosophy";
import { CompanyMix } from "@/components/career/CompanyMix";
import { Experiences } from "@/components/career/Experiences";
import { CareerCTA } from "@/components/career/CareerCTA";

export default function CareerPage() {
  return (
    <>
      <CareerHero />
      <CareerStats />
      <CareerJourney />
      <KeyAchievements />
      <Philosophy />
      <CompanyMix />
      <Experiences />
      <CareerCTA />
    </>
  );
}
