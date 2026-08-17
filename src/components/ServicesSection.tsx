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
    features: ["Realismo", "Sombras", "Mangas", "Retrato"],
  },
  {
    n: "02",
    title: "Domicilio",
    subtitle: "Sesión privada",
    description:
      "El kit llega a tu espacio. Higiene, calma y una sesión sin sala de espera.",
    features: ["Privado", "Portátil", "Protocolo", "Aftercare"],
  },
  {
    n: "03",
    title: "Guest / ruta",
    subtitle: "Otras ciudades",
    description:
      "Viajes y residencias. Si hay fechas cerca de ti, las publicamos y reservamos con tiempo.",
    features: ["Guest spot", "Internacional", "Agenda", "Consulta online"],
  },
  {
    n: "04",
    title: "Aftercare",
    subtitle: "A distancia",
    description:
      "Seguimiento de la cicatrización aunque la sesión haya sido en otra ciudad o en tu casa.",
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
          className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <div>
            <p className="mb-3 font-cinzel text-[11px] tracking-[0.4em] text-angelux-steel">OFICIO</p>
            <h2 className="font-metal text-4xl text-primary md:text-6xl">Servicios</h2>
          </div>
          <p className="max-w-sm font-cinzel text-xs tracking-[0.28em] text-muted-foreground">
            DOMICILIO · GUEST · PIEZA A MEDIDA
          </p>
        </motion.div>

        <div className="divide-y divide-border border-y border-border">
          {services.map((service, index) => (
            <motion.article
              key={service.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="group grid gap-6 py-10 md:grid-cols-12 md:items-center"
            >
              <span className="font-cinzel text-xs tracking-[0.3em] text-angelux-steel md:col-span-1">
                {service.n}
              </span>
              <div className="md:col-span-4">
                <h3 className="font-metal text-3xl text-primary transition-transform duration-500 group-hover:translate-x-2 md:text-4xl">
                  {service.title}
                </h3>
                <p className="mt-1 font-cinzel text-[11px] tracking-[0.25em] text-muted-foreground">
                  {service.subtitle}
                </p>
              </div>
              <p className="font-montserrat text-sm leading-relaxed text-muted-foreground md:col-span-4">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2 md:col-span-3 md:justify-end">
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
