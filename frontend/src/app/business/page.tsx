import { BusinessHero } from "@/components/business/BusinessHero";
import { BusinessStats } from "@/components/business/BusinessStats";
import { ProfessionalReconstruction } from "@/components/business/ProfessionalReconstruction";
import { FutureOfFacilitation } from "@/components/business/FutureOfFacilitation";
import { MissionQuote } from "@/components/business/MissionQuote";
import { ReadyToReconstructCTA } from "@/components/business/ReadyToReconstructCTA";

export default function BusinessPage() {
  return (
    <main>
      <BusinessHero />
      <BusinessStats />
      <ProfessionalReconstruction />
      <FutureOfFacilitation />
      <MissionQuote />
      <ReadyToReconstructCTA />
    </main>
  );
}
