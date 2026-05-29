import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScrollingLogos from "@/components/ScrollingLogos";
import Features from "@/components/Features";
import DashboardShowcase from "@/components/DashboardShowcase";
import PricingTestimonials from "@/components/PricingTestimonials";
import FooterCTA from "@/components/FooterCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary text-text-primary">
      <Navbar />
      <Hero />
      <ScrollingLogos />
      <Features />
      <DashboardShowcase />
      <PricingTestimonials />
      <FooterCTA />
    </main>
  );
}
