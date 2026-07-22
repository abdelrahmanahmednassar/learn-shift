/* eslint-disable @next/next/no-img-element */
"use client";
import { useAnimeScroll } from "@/plugins/useAnimeScroll";
import {
  HeroSection,
  FeaturesSection,
  OtherFeaturesSection,
  PricingSection,
  CTASection,
  QASection,
} from "@/layouts";

export default function Home() {
  useAnimeScroll();

  return (
    <div className="index-page container">
      <HeroSection />
      <FeaturesSection />
      <OtherFeaturesSection />
      <PricingSection />
      <QASection />
      <CTASection />
    </div>
  );
}
