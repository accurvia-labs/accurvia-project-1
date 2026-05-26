import { HeroSection } from "@/components/homepage/HeroSection";
import { AboutSection } from "@/components/homepage/AboutSection";
import { WhatWeDoSection } from "@/components/homepage/WhatWeDoSection";
import { InsightsSection } from "@/components/homepage/InsightsSection";
import { BookCallCTA } from "@/components/homepage/BookCallCTA";

export const metadata = {
  title: "Dare Oduale | Business Design & Transformation Coaching",
  description:
    "Business design and transformation coaching for founders, programme leads, and executives. Thinker · Teacher · Business Designer · Coach",
  openGraph: {
    title: "Dare Oduale | Business Design & Transformation Coaching",
    description:
      "Business design and transformation coaching for founders, programme leads, and executives.",
    url: "https://dareoduale.com",
    siteName: "Dare Oduale",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WhatWeDoSection />
      <BookCallCTA />
      <InsightsSection />
    </>
  );
}
