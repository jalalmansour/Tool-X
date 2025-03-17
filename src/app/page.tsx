"use client";

import { SiteLayout } from "@/components/layout/site-layout";
import { HeroSection } from "@/components/home/hero-section";
import { FeaturesSection } from "@/components/home/features-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { CTASection } from "@/components/home/cta-section";
import { I18nProvider } from "@/components/providers/i18n-provider";

export default function Home() {
  return (
    <I18nProvider>
      <SiteLayout>
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CTASection />
      </SiteLayout>
    </I18nProvider>
  );
}
