import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import ProductsSection from "@/components/ProductsSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <ProductsSection />
        <FacilitiesSection />
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
