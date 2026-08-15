import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import FacilitiesSection from "@/components/FacilitiesSection";
import BookingSection from "@/components/BookingSection";

const Facilities = () => {
    return (
        <PageLayout>
            <PageHero
                index="05"
                title="ESTUDIO"
                subtitle="EL ATELIER"
                description="Estudio pensado para sesiones de blanco y negro: luz controlada, higiene clínica y un ambiente oscuro donde el contraste es protagonista."
            />
            <div className="py-12 md:py-20 space-y-20 md:space-y-32">
                <FacilitiesSection />

                {/* Safety Standards Section */}
                <section className="bg-secondary/20 py-20 border-y border-border/50">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="font-metal text-3xl md:text-5xl mb-12 text-primary">ESTÁNDARES PREMIUM</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { title: "HIGIENE CLÍNICA", desc: "Esterilización de grado hospitalario y materiales 100% desechables." },
                                { title: "EQUIPO DE ÉLITE", desc: "Máquinas rotativas de última generación para menos trauma en la piel." },
                                { title: "Tintas VEGANAS", desc: "Pigmentos orgánicos de alta calidad, libres de crueldad y metales pesados." },
                                { title: "PRIVACIDAD", desc: "Cabinas privadas para tu confort y tranquilidad durante la sesión." }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center p-4">
                                    <div className="w-16 h-16 rounded-full border border-primary/30 flex items-center justify-center mb-4 bg-background shadow-[0_0_18px_hsla(215,60%,32%,0.45)]">
                                        {/* Simplified visual representation of icons */}
                                        <div className="w-8 h-8 bg-primary/20 rounded-sm" />
                                    </div>
                                    <h3 className="font-cinzel text-lg text-white mb-2">{item.title}</h3>
                                    <p className="text-muted-foreground text-sm max-w-[200px]">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
            <BookingSection />
        </PageLayout>
    );
};

export default Facilities;
