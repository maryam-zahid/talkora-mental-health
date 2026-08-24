import Navbar from "@/components/layout/navbar";
import HeroSection from "@/components/home/hero-section";
import AboutSection from "@/components/home/about-section";
import ServicesSection from "@/components/home/services-section";
import WhyUsSection from "@/components/home/why-us-section";
import SpecialistsSection from "@/components/home/specialists-section";
import PricingSection from "@/components/home/pricing-section";
import TestimonialsSection from "@/components/home/testimonials-section";
import HealingJourneySection from "@/components/home/healing-journey-section";
import Footer from "@/components/layout/footer";
export default function Home() {
  return (
    <main className="page-grain min-h-screen overflow-x-hidden">
      <Navbar />

      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />
      <SpecialistsSection />
      <PricingSection />
      <TestimonialsSection />
      <HealingJourneySection />
      <Footer />
    </main>
  );
}