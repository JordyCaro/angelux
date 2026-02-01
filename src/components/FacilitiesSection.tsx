import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { MapPin, Clock, Phone, Shield, Sparkles, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Esterilización Total",
    description: "Autoclave de grado hospitalario y materiales 100% desechables",
  },
  {
    icon: Sparkles,
    title: "Ambiente Único",
    description: "Diseño industrial con iluminación profesional para cada sesión",
  },
  {
    icon: Users,
    title: "Privacidad",
    description: "Cabinas independientes para tu comodidad y discreción",
  },
];

const facilityImages = [
  { id: 1, title: "Recepción", size: "large" },
  { id: 2, title: "Estación de Trabajo", size: "medium" },
  { id: 3, title: "Sala de Espera", size: "medium" },
  { id: 4, title: "Área de Esterilización", size: "small" },
  { id: 5, title: "Cabina Privada", size: "small" },
];

const FacilitiesSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section id="facilities" ref={sectionRef} className="py-24 relative overflow-hidden bg-card/30">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={titleRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-metal text-4xl md:text-6xl lg:text-7xl mb-4 text-primary">
            Nuestras Instalaciones
          </h2>
          <p className="font-cinzel text-sm tracking-[0.3em] text-muted-foreground uppercase">
            Un espacio diseñado para el arte
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center group"
            >
              <motion.div
                className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <feature.icon className="w-10 h-10 text-primary" />
              </motion.div>
              <h3 className="font-metal text-xl mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-montserrat">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Gallery Grid with Parallax */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {facilityImages.map((image, index) => (
            <motion.div
              key={image.id}
              style={{ y: index % 2 === 0 ? y1 : y2 }}
              className={`relative overflow-hidden rounded-lg ${
                image.size === "large" 
                  ? "col-span-2 row-span-2 aspect-square" 
                  : image.size === "medium"
                    ? "col-span-1 row-span-2 aspect-[1/2]"
                    : "col-span-1 aspect-square"
              }`}
            >
              <motion.div
                initial={{ opacity: 0, scale: 1.1 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="absolute inset-0 bg-gradient-to-br from-secondary via-muted to-secondary"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-gothic text-3xl text-muted-foreground/20">{image.id}</span>
                </div>
              </motion.div>
              
              {/* Overlay with title */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="font-cinzel text-sm tracking-wider">{image.title}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 py-8 px-6 bg-card/50 rounded-lg border border-border"
        >
          <div className="flex items-center gap-4">
            <MapPin className="w-6 h-6 text-primary" />
            <div>
              <p className="font-cinzel text-xs tracking-wider text-muted-foreground">UBICACIÓN</p>
              <p className="font-metal">Tu Ciudad, País</p>
            </div>
          </div>

          <div className="hidden md:block w-px h-12 bg-border" />

          <div className="flex items-center gap-4">
            <Clock className="w-6 h-6 text-primary" />
            <div>
              <p className="font-cinzel text-xs tracking-wider text-muted-foreground">HORARIO</p>
              <p className="font-metal">Mar - Sáb: 11:00 - 21:00</p>
            </div>
          </div>

          <div className="hidden md:block w-px h-12 bg-border" />

          <div className="flex items-center gap-4">
            <Phone className="w-6 h-6 text-primary" />
            <div>
              <p className="font-cinzel text-xs tracking-wider text-muted-foreground">CONTACTO</p>
              <p className="font-metal">+57 300 000 0000</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
