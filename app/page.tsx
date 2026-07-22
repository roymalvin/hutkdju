import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/sections/HeroSection";
import FeaturesSection from "./components/sections/FeaturesSection";
import AboutSection from "./components/sections/AboutSection";
import PartnersSection from "./components/sections/PartnersSection";
import DonorsSection from "./components/sections/DonorsSection";
import CtaSection from "./components/sections/CtaSection";
import Footer from "./components/layout/Footer";
import TimelineSection from "./components/sections/TimelineSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <TimelineSection />
        <PartnersSection />
        <DonorsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
