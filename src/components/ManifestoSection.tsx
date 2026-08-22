import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const pillars = [
  {
    n: "01",
    title: "Contraste",
    text: "El realismo y la sombra pesan. Volumen, luz, el silencio entre un negro y un gris.",
  },
  {
    n: "02",
    title: "Estudio",
    text: "Un espacio privado en Medellín. Calma, luz, protocolo. La sesión se siente tuya.",
  },
  {
    n: "03",
    title: "Precisión",
    text: "Consulta, diseño y sesión con calma. Cada pieza se construye para quien la va a llevar.",
  },
];

const ManifestoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative overflow-hidden border-b border-border py-24">
      <div className="absolute inset-0 ink-texture opacity-40" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 font-cinzel text-[11px] tracking-[0.4em] text-angelux-steel">OFICIO · MEDELLÍN</p>
          <h2 className="font-metal text-3xl text-primary sm:text-4xl md:text-6xl">La tinta no pide permiso</h2>
        </motion.div>

        <div className="grid gap-px bg-border md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <motion.article
              key={pillar.n}
              className="group bg-background p-8 transition-colors hover:bg-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
            >
              <h3 className="font-metal text-3xl text-primary">{pillar.title}</h3>
              <div className="my-5 h-px w-12 bg-angelux-steel/60 transition-all duration-500 group-hover:w-24" />
              <p className="font-montserrat text-sm leading-relaxed text-muted-foreground">{pillar.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;
