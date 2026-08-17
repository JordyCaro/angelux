import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import ServicesSection from "@/components/ServicesSection";
import BookingSection from "@/components/BookingSection";

const Services = () => {
    return (
        <PageLayout>
            <PageHero
                index="03"
                title="SERVICIOS"
                subtitle="OFICIO EN MOVIMIENTO"
                description="Tatuaje a medida en Medellín. Realismo y sombras. Cada pieza se construye, no se copia."
            />
            <div className="py-12 md:py-20 space-y-20 md:space-y-32">
                <ServicesSection />

                {/* Process Section */}
                <section className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="font-metal text-3xl md:text-5xl mb-4 text-primary">NUESTRO PROCESO</h2>
                        <p className="font-cinzel text-muted-foreground tracking-widest">DE LA IDEA A LA PIEL</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "CONSULTA", desc: "Hablamos de la idea, la ciudad y si la sesión es a domicilio o en un guest de la ruta." },
                            { step: "02", title: "DISEÑO", desc: "Boceto a distancia. Ajustamos hasta que el trazo encaje con tu cuerpo y tu historia." },
                            { step: "03", title: "SESIÓN", desc: "Llego con kit y protocolo, o nos vemos donde esté la ruta. Misma higiene, sin local fijo." },
                            { step: "04", title: "CUIDADO", desc: "Seguimiento de la curación por mensaje, aunque ya esté en otra ciudad." }
                        ].map((item, i) => (
                            <div key={i} className="relative p-6 border border-border/50 bg-secondary/20 rounded-lg hover:border-primary/30 transition-all group">
                                <span className="text-6xl font-metal text-primary/10 absolute top-2 right-4 group-hover:text-primary/20 transition-colors">{item.step}</span>
                                <h3 className="font-cinzel text-xl text-primary mb-3 mt-4">{item.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            <BookingSection />
        </PageLayout>
    );
};

export default Services;
