import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import GallerySection from "@/components/GallerySection";
import BookingSection from "@/components/BookingSection";

const Gallery = () => {
    return (
        <PageLayout>
            <PageHero
                index="03"
                title="GALERÍA"
                subtitle="ARCHIVO EN TINTA"
                description="Portafolio en blanco y negro. Cada pieza se construye con línea, sombra y contraste."
            />
            <div className="py-12 md:py-20 space-y-20 md:space-y-32">
                <GallerySection />

                {/* Testimonials Section */}
                <section className="container mx-auto px-4 relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-full bg-[radial-gradient(circle_at_center,hsla(215,55%,14%,0.45)_0%,transparent_70%)] pointer-events-none" />

                    <div className="text-center mb-16 relative z-10">
                        <h2 className="font-metal text-3xl md:text-5xl mb-4 text-primary">LO QUE DICEN ELLOS</h2>
                        <p className="font-cinzel text-muted-foreground tracking-widest">EXPERIENCIAS REALES</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                        {[
                            { name: "Carlos M.", text: "Increíble atención al detalle. En Angelux Ink captaron exactamente lo que quería y lo llevaron al siguiente nivel. El ambiente del estudio es inmejorable.", role: "Realismo Black & Grey" },
                            { name: "Laura P.", text: "Mi primera pieza grande y no podría estar más feliz. Paciencia, limpieza y un blackwork brutal. Definitivamente volveré por más.", role: "Blackwork" },
                            { name: "Andrés R.", text: "La calidad de línea y sombra es de otro mundo. Se nota la experiencia y la pasión por el blanco y negro en cada sesión.", role: "Geometría" }
                        ].map((t, i) => (
                            <div key={i} className="bg-secondary/30 p-8 rounded-lg border border-border backdrop-blur-sm hover:translate-y-[-5px] transition-transform duration-300">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, j) => (
                                        <span key={j} className="text-primary text-sm">★</span>
                                    ))}
                                </div>
                                <p className="text-muted-foreground italic mb-6">"{t.text}"</p>
                                <div>
                                    <h4 className="font-cinzel text-white">{t.name}</h4>
                                    <span className="text-xs text-primary/60 uppercase tracking-wider">{t.role}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            <BookingSection />
        </PageLayout>
    );
};

export default Gallery;
