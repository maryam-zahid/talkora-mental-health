import Navbar from "@/components/layout/navbar";
import HeroSection from "@/components/home/hero-section";
import AboutSection from "@/components/home/about-section";
import ServicesSection from "@/components/home/services-section";
import WhyUsSection from "@/components/home/why-us-section";
import SpecialistsSection from "@/components/home/specialists-section";

export default function Home() {
  return (
    <main className="page-grain min-h-screen overflow-x-hidden">
      <Navbar />

      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />
      <SpecialistsSection />
    </main>
  );
}