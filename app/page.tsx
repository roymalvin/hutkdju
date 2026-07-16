import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/sections/HeroSection";
import FeaturesSection from "./components/sections/FeaturesSection";
import ImpactSection from "./components/sections/ImpactSection";
import AboutSection from "./components/sections/AboutSection";
import PartnersSection from "./components/sections/PartnersSection";
import SponsorshipSection from "./components/sections/SponsorshipSection";
import DonorsSection from "./components/sections/DonorsSection";
import CommitteeSection from "./components/sections/CommitteeSection";
import DocumentationSection from "./components/sections/DocumentationSection";
import FaqSection from "./components/sections/FaqSection";
import CtaSection from "./components/sections/CtaSection";
import Footer from "./components/layout/Footer";
import PhilosophySection from "./components/sections/PhilosophySection";
import TimelineSection from "./components/sections/TimelineSection";
import MerchandiseSection from "./components/sections/MerchandiseSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <PhilosophySection />
        <ImpactSection />
        <FeaturesSection />
        <TimelineSection />
        <PartnersSection />
        <MerchandiseSection />
        <SponsorshipSection />
        <DonorsSection />
        <CommitteeSection />
        <DocumentationSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
