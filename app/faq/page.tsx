import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import FaqSection from "../components/sections/FaqSection";
import CtaSection from "../components/sections/CtaSection";

export const metadata = {
  title: "FAQ - HUT KDJU 26",
  description: "Pertanyaan yang sering diajukan mengenai acara Revival Planting dan Birthday Party HUT KDJU 26.",
};

export default function FaqPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-20">
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
