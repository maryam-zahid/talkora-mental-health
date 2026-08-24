import Navbar from "@/components/layout/navbar";
import HeroSection from "@/components/home/hero-section";
import AboutSection from "@/components/home/about-section";
import ServicesSection from "@/components/home/services-section";

export default function Home() {
  return (
    <main className="page-grain min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
    </main>
  );
}