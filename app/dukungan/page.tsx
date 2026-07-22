import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SponsorshipSection from "../components/sections/SponsorshipSection";
import ContactPersonSection from "../components/sections/ContactPersonSection";

export const metadata = {
  title: "Sponsorship - HUT KDJU 26",
  description: "Dukung aksi nyata penanaman mangrove dan perayaan HUT KDJU 26 melalui donasi atau sponsorship.",
};

export default function DukunganPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-20">
        <SponsorshipSection />
        <ContactPersonSection />
      </main>
      <Footer />
    </>
  );
}
