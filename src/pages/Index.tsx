import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HomeGallery from "@/components/HomeGallery";
import ManifestoSection from "@/components/ManifestoSection";
import ServicesSection from "@/components/ServicesSection";
import ItinerantSection from "@/components/ItinerantSection";
import FaqSection from "@/components/FaqSection";
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
        <AboutSection />
        <HomeGallery />
        <ManifestoSection />
        <ServicesSection />
        <ItinerantSection />
        <FaqSection />
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
