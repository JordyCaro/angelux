import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    n: "01",
    title: "Tatuaje",
    subtitle: "Realismo / sombras",
    description:
      "Realismo, sombras y volumen. Cada pieza es a medida; el detalle se trabaja para que se aguante de cerca.",
    features: ["Realismo", "Sombras", "Retrato", "Volumen"],
  },
  {
    n: "02",
    title: "Estudio",
    subtitle: "Cita previa",
    description:
      "Espacio privado. Calma, luz y protocolo. La sesión se coordina por mensaje.",
    features: ["Privado", "Cita", "Protocolo", "Calma"],
  },
  {
    n: "03",
    title: "Aftercare",
    subtitle: "Seguimiento",
    description:
      "La pieza no se abandona al secar. Guía de cuidado y revisión por mensaje mientras cicatriza.",
    features: ["Guía", "Revisión", "WhatsApp", "Cuidado"],
  },
];

const ServicesSection = () => {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true });

  return (
    <section id="services" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 ink-texture opacity-40" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          ref={titleRef}
          className="mb-14 flex flex-col items-center justify-between gap-6 text-center md:flex-row md:items-end md:text-left"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <div>
            <p className="mb-3 font-cinzel text-[11px] tracking-[0.4em] text-angelux-steel">OFICIO</p>
            <h2 className="font-metal text-4xl text-primary md:text-6xl">Servicios</h2>
          </div>
          <p className="max-w-sm font-cinzel text-xs tracking-[0.28em] text-muted-foreground">
            REALISMO · SOMBRAS · PIEZA A MEDIDA
          </p>
        </motion.div>

        <div className="grid gap-px bg-border md:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="group bg-background p-6 text-center sm:p-8 md:text-left"
            >
              <p className="font-cinzel text-[11px] tracking-[0.25em] text-muted-foreground">
                {service.subtitle}
              </p>
              <h3 className="mt-3 font-metal text-3xl text-primary md:text-4xl">
                {service.title}
              </h3>
              <div className="mx-auto my-5 h-px w-12 bg-angelux-steel/60 transition-all duration-500 group-hover:w-24 md:mx-0" />
              <p className="font-montserrat text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-2 md:justify-start">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="border border-border px-3 py-1 font-cinzel text-[10px] tracking-wider text-muted-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 flex justify-center md:justify-end">
          <Link to="/servicios" className="font-cinzel text-xs tracking-[0.28em] text-angelux-steel hover:text-primary">
            VER PROCESO →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
