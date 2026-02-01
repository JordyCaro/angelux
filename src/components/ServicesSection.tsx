import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brush, CircleDot, Package, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Brush,
    title: "Tatuajes",
    subtitle: "Blackwork & Custom",
    description: "Respetamos la esencia de cada persona, adaptando nuestro estilo y creatividad para crear tatuajes que conecten con su identidad.",
    features: ["Blackwork", "Dotwork", "Geometric", "Fineline"]
  },
  {
    icon: CircleDot,
    title: "Perforaciones",
    subtitle: "Body Piercing",
    description: "Aplicamos protocolos rigurosos de higiene y bioseguridad, garantizando procesos responsables que priorizan tu salud.",
    features: ["Facial", "Corporal", "Industrial", "Dermal"]
  },
  {
    icon: Package,
    title: "Productos",
    subtitle: "Tienda Profesional",
    description: "Perfeccionamos técnicas y procesos para mantener una propuesta versátil y actual con los más altos estándares.",
    features: ["Tintas", "Máquinas", "Camillas", "Aftercare"]
  },
  {
    icon: Heart,
    title: "Aftercare",
    subtitle: "Cuidados",
    description: "Brindamos una experiencia integral, organizada y responsable, cuidando cada etapa del proceso artístico.",
    features: ["Cremas", "Jabones", "Protección", "Hidratación"]
  }
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <Card className="group relative h-full bg-card/50 border-border hover:border-primary/50 transition-all duration-500 overflow-hidden grunge-border">
        {/* Hover glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <CardContent className="relative p-8">
          {/* Icon */}
          <motion.div
            className="mb-6"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
              <service.icon className="w-8 h-8 text-primary" />
            </div>
          </motion.div>

          {/* Title */}
          <h3 className="font-metal text-2xl md:text-3xl mb-1 group-hover:text-primary transition-colors duration-300">
            {service.title}
          </h3>
          <p className="font-cinzel text-xs tracking-[0.2em] text-muted-foreground uppercase mb-4">
            {service.subtitle}
          </p>

          {/* Description */}
          <p className="text-muted-foreground mb-6 leading-relaxed font-montserrat">
            {service.description}
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-2">
            {service.features.map((feature) => (
              <span
                key={feature}
                className="text-xs font-cinzel tracking-wider px-3 py-1 bg-secondary/50 rounded-full text-muted-foreground"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* Decorative line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ServicesSection = () => {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true });

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 ink-texture opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <motion.div
          ref={titleRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-metal text-4xl md:text-6xl lg:text-7xl mb-4 text-primary">
            Nuestros Servicios
          </h2>
          <p className="font-cinzel text-sm tracking-[0.3em] text-muted-foreground uppercase">
            Profesionalismo • Confianza • Seguridad
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 px-4 md:px-0">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
