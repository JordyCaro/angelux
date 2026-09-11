import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const pillars = [
  {
    n: "01",
    title: "Sombras",
    text: "Lo mío es el realismo en sombras. Volumen, luz y un trazo que se aguanta de cerca.",
  },
  {
    n: "02",
    title: "A medida",
    text: "No copiamos de Pinterest. Tú traes la idea y la construimos desde cero.",
  },
  {
    n: "03",
    title: "Parche",
    text: "Estudio privado en Medellín. Tranquilo, exclusivo, con cita previa y sin afanes.",
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
          className="mb-16 text-center md:text-left"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 font-cinzel text-[11px] tracking-[0.4em] text-angelux-steel">OFICIO · MEDELLÍN</p>
          <h2 className="font-metal text-3xl text-primary sm:text-4xl md:text-6xl">Cada cliente es único</h2>
        </motion.div>

        <div className="grid gap-px bg-border md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <motion.article
              key={pillar.n}
              className="group bg-background p-8 text-center transition-colors hover:bg-card md:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
            >
              <h3 className="font-metal text-3xl text-primary">{pillar.title}</h3>
              <div className="mx-auto my-5 h-px w-12 bg-angelux-steel/60 transition-all duration-500 group-hover:w-24 md:mx-0" />
              <p className="font-montserrat text-sm leading-relaxed text-muted-foreground">{pillar.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;
