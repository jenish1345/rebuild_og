import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBannerSection } from "@/components/sections/TrustBannerSection";
import { WhoWeAreSection } from "@/components/sections/WhoWeAreSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col">
        <HeroSection />
        <TrustBannerSection />
        <WhoWeAreSection />
        <ServicesSection />
        <IndustriesSection />
        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
