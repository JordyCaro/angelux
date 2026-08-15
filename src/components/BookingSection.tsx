import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, User, Mail, MessageSquare, Brush, CircleDot, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const serviceTypes = [
  { id: "tattoo", label: "Tatuaje", icon: Brush },
  { id: "piercing", label: "Perforación", icon: CircleDot },
];

const BookingSection = () => {
  const [selectedService, setSelectedService] = useState("tattoo");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });
  
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "¡Solicitud enviada!",
      description: "Te contactaremos pronto para confirmar tu cita.",
    });
    setFormData({ name: "", email: "", phone: "", date: "", message: "" });
  };

  return (
    <section id="booking" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 ink-texture opacity-50" />
      
      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-40 h-40 rounded-full bg-accent/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-accent/5 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={titleRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-3 font-cinzel text-[11px] tracking-[0.4em] text-angelux-steel">RESERVA</p>
          <h2 className="font-metal text-4xl md:text-6xl lg:text-7xl mb-4 text-primary">
            Agenda
          </h2>
          <p className="font-cinzel text-sm tracking-[0.3em] text-muted-foreground uppercase">
            El siguiente trazo empieza aquí
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/50 border-border overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-5">
                {/* Left side - Info */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="md:col-span-2 p-8 bg-secondary/30 flex flex-col justify-center"
                >
                  <h3 className="font-metal text-2xl mb-6">¿Por qué elegirnos?</h3>
                  
                  <ul className="space-y-4">
                    {[
                      "Especialistas en blanco y negro",
                      "Blackwork, black & grey y realismo",
                      "Tintas negras de alta densidad",
                      "Esterilización de grado hospitalario",
                      "Diseños 100% personalizados",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                        className="flex items-start gap-3 text-sm text-muted-foreground font-montserrat"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-8 border-t border-border">
                    <p className="font-cinzel text-xs tracking-wider text-muted-foreground mb-2">CONSULTAS</p>
                    <a href="mailto:info@angeluxink.com" className="font-metal text-lg hover:text-primary transition-colors">
                      info@angeluxink.com
                    </a>
                  </div>
                </motion.div>

                {/* Right side - Form */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="md:col-span-3 p-8"
                >
                  {/* Service Selection */}
                  <div className="flex gap-4 mb-8">
                      {serviceTypes.map((service) => (
                        <motion.button
                          key={service.id}
                          onClick={() => setSelectedService(service.id)}
                          className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-lg border transition-all duration-300 ${
                            selectedService === service.id
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border hover:border-muted-foreground"
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <service.icon className="w-5 h-5" />
                        <span className="font-cinzel tracking-wider text-sm">{service.label}</span>
                      </motion.button>
                    ))}
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          placeholder="Tu nombre"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="pl-12 bg-secondary/50 border-border focus:border-accent font-cinzel"
                          required
                        />
                      </div>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          type="email"
                          placeholder="tu@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="pl-12 bg-secondary/50 border-border focus:border-accent font-cinzel"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="relative">
                        <Input
                          type="tel"
                          placeholder="Teléfono"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="bg-secondary/50 border-border focus:border-accent font-cinzel"
                          required
                        />
                      </div>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="pl-12 bg-secondary/50 border-border focus:border-accent font-cinzel"
                          required
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-muted-foreground" />
                      <Textarea
                        placeholder="Describe tu idea en blanco y negro: blackwork, black & grey, realismo..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="pl-12 min-h-[120px] bg-secondary/50 border-border focus:border-accent font-cinzel resize-none"
                        required
                      />
                    </div>

                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full font-cinzel tracking-wider bg-primary hover:bg-primary/80 text-primary-foreground group"
                    >
                      <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      ENVIAR SOLICITUD
                    </Button>
                  </form>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
