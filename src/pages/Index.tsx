import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ManifestoSection from "@/components/ManifestoSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import ProductsSection from "@/components/ProductsSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import FilmGrain from "@/components/FilmGrain";
import ScrollProgress from "@/components/ScrollProgress";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <ScrollProgress />
      <FilmGrain />
      <Header />
      <main>
        <HeroSection />
        <ManifestoSection />
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
