import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Lamp, CalendarCheck, Sparkles } from "lucide-react";

const modes = [
  {
    icon: Lamp,
    title: "Luz y calma",
    text: "Un espacio chico, privado. La sesión se arma sin sala de espera ni ruido de vitrina.",
  },
  {
    icon: CalendarCheck,
    title: "Cita previa",
    text: "Consulta, diseño y fecha se coordinan por mensaje. El estudio se abre para la sesión, no para el tránsito.",
  },
  {
    icon: ShieldCheck,
    title: "Protocolo",
    text: "Material desechable, higiene y aftercare. El oficio no se diluye porque el local sea íntimo.",
  },
  {
    icon: Sparkles,
    title: "La pieza manda",
    text: "Tiempo, detalle y realismo. El estudio existe para eso: que la sombra quede bien.",
  },
];

const StudioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="estudio" ref={ref} className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 ink-texture opacity-40" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          className="mb-16 grid items-end gap-8 text-center md:grid-cols-12 md:text-left"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <div className="md:col-span-7">
            <p className="mb-3 font-cinzel text-[11px] tracking-[0.4em] text-angelux-steel">ESTUDIO</p>
            <h2 className="font-metal text-3xl text-primary sm:text-4xl md:text-6xl">Un espacio, no una vitrina</h2>
          </div>
          <p className="mx-auto max-w-md font-montserrat text-sm leading-relaxed text-muted-foreground md:col-span-5 md:mx-0">
            Estudio en Medellín. Privado, de cita. La sesión se coordina por mensaje: idea, fecha y detalles.
          </p>
        </motion.div>

        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {modes.map((mode, i) => (
            <motion.article
              key={mode.title}
              className="group bg-background p-8 text-center md:text-left"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08 }}
            >
              <mode.icon className="mx-auto mb-6 h-6 w-6 text-angelux-steel md:mx-0" />
              <h3 className="mt-3 font-metal text-2xl text-primary">{mode.title}</h3>
              <p className="mt-4 font-montserrat text-sm leading-relaxed text-muted-foreground">{mode.text}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-8 border border-border p-6 text-center md:flex-row md:items-center md:p-8 md:text-left">
          <div>
            <p className="font-cinzel text-[10px] tracking-[0.3em] text-angelux-steel">MEDELLÍN</p>
            <p className="mt-3 max-w-xl font-montserrat text-sm text-muted-foreground">
              Realismo y sombras. Cita previa. El estudio se abre para la pieza, no para el tránsito.
            </p>
          </div>
          <Link to="/contacto" className="btn-stencil w-full px-6 py-3 font-cinzel text-[11px] tracking-[0.22em] md:w-auto">
            PEDIR CITA
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StudioSection;
