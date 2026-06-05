import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProductsSection from "@/components/sections/ProductsSection";
import SectorsSection from "@/components/sections/SectorsSection";
import WhySection from "@/components/sections/WhySection";
import ValuesSection from "@/components/sections/ValuesSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <SectorsSection />
      <WhySection />
      <ValuesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
