import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import BookingSection from "@/components/BookingSection";

const Contact = () => {
    return (
        <PageLayout>
            <PageHero
                index="06"
                title="CONTACTO"
                subtitle="HABLEMOS DE TU PROYECTO"
                description="Estamos listos para hacer realidad tu idea. Contáctanos para consultas, cotizaciones o para agendar tu cita."
            />

            <section className="py-12 md:py-24 bg-black relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                        {/* Contact Info */}
                        <div className="space-y-8">
                            <h2 className="font-metal text-3xl md:text-4xl text-white mb-6">Información</h2>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4 text-muted-foreground group">
                                    <div className="p-3 bg-secondary rounded-lg border border-border group-hover:border-primary/50 transition-colors">
                                        <MapPin className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-cinzel text-white text-lg mb-1">Ubicación</h3>
                                        <p>Calle Principal 123, Zona Centro</p>
                                        <p>Ciudad, País</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 text-muted-foreground group">
                                    <div className="p-3 bg-secondary rounded-lg border border-border group-hover:border-primary/50 transition-colors">
                                        <Phone className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-cinzel text-white text-lg mb-1">Teléfono</h3>
                                        <p>+123 456 7890</p>
                                        <p>+098 765 4321</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 text-muted-foreground group">
                                    <div className="p-3 bg-secondary rounded-lg border border-border group-hover:border-primary/50 transition-colors">
                                        <Mail className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-cinzel text-white text-lg mb-1">Email</h3>
                                        <p>contacto@angeluxink.com</p>
                                        <p>citas@angeluxink.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 text-muted-foreground group">
                                    <div className="p-3 bg-secondary rounded-lg border border-border group-hover:border-primary/50 transition-colors">
                                        <Clock className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-cinzel text-white text-lg mb-1">Horarios</h3>
                                        <p>Lunes - Sábado: 11:00 AM - 8:00 PM</p>
                                        <p>Domingo: Cita previa</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 text-center flex gap-4 justify-center md:justify-start">
                                <Button variant="outline" size="icon" className="rounded-full w-12 h-12 border-primary/20 hover:bg-primary/10 hover:text-primary">
                                    <Instagram className="w-5 h-5" />
                                </Button>
                                <Button variant="outline" size="icon" className="rounded-full w-12 h-12 border-primary/20 hover:bg-primary/10 hover:text-primary">
                                    <Facebook className="w-5 h-5" />
                                </Button>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="h-[400px] w-full bg-secondary/30 rounded-lg border border-border overflow-hidden relative group">
                            <div className="absolute inset-0 flex items-center justify-center bg-black/50 group-hover:bg-black/30 transition-colors">
                                <p className="font-cinzel text-muted-foreground">Mapa de Ubicación</p>
                            </div>
                            {/* You can embed a real Google Maps iframe here later */}
                            <div className="w-full h-full bg-gradient-to-br from-secondary to-background opacity-50" />
                        </div>

                    </div>

                    {/* FAQ Section */}
                    <div className="mt-24 max-w-3xl mx-auto">
                        <h2 className="font-metal text-3xl md:text-4xl text-center text-primary mb-12">PREGUNTAS FRECUENTES</h2>
                        <div className="space-y-6">
                            {[
                                { q: "¿Cómo agendo una cita?", a: "Puedes usar nuestro formulario en línea, escribirnos por Instagram o WhatsApp. Requerimos un depósito para reservar tu fecha." },
                                { q: "¿Cuánto cuesta un tatuaje?", a: "El precio depende del tamaño, detalle y ubicación. El mínimo de estudio es $X. Para piezas grandes cobramos por sesión." },
                                { q: "¿Duelen los tatuajes?", a: "La tolerancia varía por persona y zona, pero usamos técnicas para minimizar el trauma en la piel y hacer la experiencia llevadera." },
                                { q: "¿Cómo me preparo para la sesión?", a: "Ven descansado, bien comido, e hidratado. Evita alcohol 24h antes y trae ropa cómoda." }
                            ].map((faq, i) => (
                                <div key={i} className="border-b border-border/50 pb-6 group">
                                    <h3 className="font-cinzel text-lg text-white mb-2 group-hover:text-primary transition-colors cursor-pointer">{faq.q}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            <BookingSection />
        </PageLayout>
    );
};

export default Contact;
