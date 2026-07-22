import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import GeneralAboutSection from "../components/sections/GeneralAboutSection";
import PhilosophySection from "../components/sections/PhilosophySection";
import ImpactSection from "../components/sections/ImpactSection";
import CommitteeSection from "../components/sections/CommitteeSection";
import DocumentationSection from "../components/sections/DocumentationSection";

export const metadata = {
  title: "Tentang Kami - HUT KDJU 26",
  description: "Filosofi, dampak, dokumentasi, dan susunan panitia HUT KDJU 26.",
};

export default function TentangPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-20">
        <GeneralAboutSection />
        <PhilosophySection />
        <ImpactSection />
        <CommitteeSection />
        <DocumentationSection />
      </main>
      <Footer />
    </>
  );
}
