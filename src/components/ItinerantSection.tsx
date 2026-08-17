import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { MapPin, Plane, Home, ShieldCheck } from "lucide-react";

const modes = [
  {
    icon: Home,
    n: "01",
    title: "Domicilio",
    text: "La sesión llega a ti. Kit portátil, protocolos de higiene y un espacio privado acordado juntos.",
  },
  {
    icon: Plane,
    n: "02",
    title: "Guest spots",
    text: "Viajes y residencias en otros países. Si hay ruta cerca, reservamos con anticipación.",
  },
  {
    icon: MapPin,
    n: "03",
    title: "Estudio virtual",
    text: "Consulta, diseño y seguimiento en línea. El tatuaje se concreta donde coincidamos.",
  },
  {
    icon: ShieldCheck,
    n: "04",
    title: "Misma exigencia",
    text: "Material desechable, esterilización y aftercare. Da igual si es tu casa o un guest.",
  },
];

const cities = ["México", "Colombia", "España", "Argentina", "Perú", "EE.UU.", "Portugal", "Chile"];

const ItinerantSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="ruta" ref={ref} className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 ink-texture opacity-40" />
      <p className="pointer-events-none absolute -left-4 top-10 font-metal text-[18vw] leading-none text-primary/[0.03] md:text-[10rem]">
        RUTA
      </p>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          className="mb-16 grid items-end gap-8 md:grid-cols-12"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <div className="md:col-span-7">
            <p className="mb-3 font-cinzel text-[11px] tracking-[0.4em] text-angelux-steel">ITINERANTE</p>
            <h2 className="font-metal text-3xl text-primary sm:text-4xl md:text-6xl">No hay pared fija</h2>
          </div>
          <p className="max-w-md font-montserrat text-sm leading-relaxed text-muted-foreground md:col-span-5">
            Angelux Ink se mueve: sesiones a domicilio, guest spots y proyectos que cruzan fronteras. El estudio es el oficio, no una dirección.
          </p>
        </motion.div>

        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {modes.map((mode, i) => (
            <motion.article
              key={mode.n}
              className="group bg-background p-8"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08 }}
            >
              <mode.icon className="mb-6 h-6 w-6 text-angelux-steel" />
              <h3 className="mt-3 font-metal text-2xl text-primary">{mode.title}</h3>
              <p className="mt-4 font-montserrat text-sm leading-relaxed text-muted-foreground">{mode.text}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-8 border border-border p-6 text-center md:flex-row md:items-center md:p-8 md:text-left">
          <div>
            <p className="font-cinzel text-[10px] tracking-[0.3em] text-angelux-steel">CIUDADES / GUEST</p>
            <p className="mt-3 max-w-xl font-montserrat text-sm text-muted-foreground">
              {cities.join("  ·  ")}
            </p>
          </div>
          <Link to="/contacto" className="btn-stencil w-full px-6 py-3 font-cinzel text-[11px] tracking-[0.22em] md:w-auto">
            TRAE UNA SESIÓN
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ItinerantSection;
