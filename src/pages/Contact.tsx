import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import FaqSection from "@/components/FaqSection";
import SocialLinks from "@/components/SocialLinks";

const Contact = () => {
    return (
        <PageLayout>
            <PageHero
                title="CONTACTO"
                subtitle="HABLEMOS DE TU PROYECTO"
                description="Cuéntame la idea, la zona y las referencias. Estudio en Medellín, cita previa. Cotizo cuando veo eso."
            />

            <section className="py-12 md:py-24 bg-black relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                        {/* Contact Info */}
                        <div className="space-y-8 text-center lg:text-left">
                            <h2 className="font-metal text-3xl md:text-4xl text-white mb-6">Información</h2>

                            <div className="space-y-6">
                                <div className="flex flex-col items-center gap-4 text-muted-foreground group sm:flex-row sm:items-start">
                                    <div className="p-3 bg-secondary rounded-lg border border-border group-hover:border-primary/50 transition-colors">
                                        <MapPin className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-cinzel text-white text-lg mb-1">Estudio</h3>
                                        <p>Medellín</p>
                                        <p>Cita previa · Consulta por mensaje</p>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center gap-4 text-muted-foreground group sm:flex-row sm:items-start">
                                    <div className="p-3 bg-secondary rounded-lg border border-border group-hover:border-primary/50 transition-colors">
                                        <Phone className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-cinzel text-white text-lg mb-1">Teléfono</h3>
                                        <p>+123 456 7890</p>
                                        <p>+098 765 4321</p>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center gap-4 text-muted-foreground group sm:flex-row sm:items-start">
                                    <div className="p-3 bg-secondary rounded-lg border border-border group-hover:border-primary/50 transition-colors">
                                        <Mail className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-cinzel text-white text-lg mb-1">Email</h3>
                                        <p>contacto@angeluxink.com</p>
                                        <p>citas@angeluxink.com</p>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center gap-4 text-muted-foreground group sm:flex-row sm:items-start">
                                    <div className="p-3 bg-secondary rounded-lg border border-border group-hover:border-primary/50 transition-colors">
                                        <Clock className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-cinzel text-white text-lg mb-1">Agenda</h3>
                                        <p>Consulta previa por mensaje</p>
                                        <p>Fechas según disponibilidad</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 flex justify-center lg:justify-start">
                                <SocialLinks className="justify-center lg:justify-start" iconClassName="h-5 w-5" />
                            </div>
                        </div>

                        <div className="relative h-[400px] w-full overflow-hidden border border-border bg-secondary/30">
                            <div className="absolute inset-0 bg-gradient-to-br from-secondary to-background opacity-70" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                                <p className="mb-3 font-cinzel text-[11px] tracking-[0.35em] text-angelux-steel">ESTUDIO · MEDELLÍN</p>
                                <p className="max-w-sm font-metal text-3xl text-primary">La sesión se arma por mensaje</p>
                                <p className="mt-4 max-w-xs font-montserrat text-sm text-muted-foreground">
                                    Realismo y sombras. Cita previa. El estudio se abre para la pieza.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <FaqSection compact />
        </PageLayout>
    );
};

export default Contact;
