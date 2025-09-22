import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import MenuHighlights from "@/components/MenuHighlights";
import ReservationCTA from "@/components/ReservationCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <MenuHighlights />
        <ReservationCTA />
      </main>
      <Footer />
    </div>
  );
}