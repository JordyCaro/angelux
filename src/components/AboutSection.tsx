import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const portrait =
  "https://images.unsplash.com/photo-1611501275019-9b5cda99f35c?auto=format&fit=crop&w=1200&q=80";

const facts = [
  { n: "01", t: "Oficio", d: "Tatuador. La pieza se piensa con vos, no se copia de un catálogo." },
  { n: "02", t: "Ruta", d: "Domicilios, guest spots, otras ciudades. El estudio viaja." },
  { n: "03", t: "Sello", d: "Blackwork y contraste como fuerte. El resto, si la piel lo pide." },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="quien-soy" ref={ref} className="relative overflow-hidden border-b border-border py-24 md:py-32">
      <div className="absolute inset-0 ink-texture opacity-35" />
      <p className="pointer-events-none absolute -right-6 top-8 font-metal text-[22vw] leading-none text-primary/[0.03] md:text-[11rem]">
        YO
      </p>

      <div className="container relative z-10 mx-auto px-4">
        <motion.p
          className="mb-10 font-cinzel text-[11px] tracking-[0.4em] text-angelux-steel"
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          003 / QUIÉN SOY
        </motion.p>

        <div className="grid items-center gap-12 lg:grid-cols-12">
          <motion.div
            className="relative lg:col-span-5"
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flash-card -rotate-1">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={portrait}
                  alt="Archivo de trabajo Angelux Ink"
                  className="h-full w-full object-cover grayscale-[0.35] contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
                <span className="ink-stamp absolute left-4 top-4">EL OFICIO</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="mb-3 font-cinzel text-[11px] tracking-[0.32em] text-muted-foreground">TATUADOR · ITINERANTE</p>
            <h2 className="font-metal text-3xl text-primary sm:text-4xl md:text-6xl">
              Soy el trazo detrás de Angelux.
            </h2>
            <div className="mt-8 max-w-xl space-y-4 font-montserrat text-sm leading-relaxed text-muted-foreground md:text-base">
              <p>
                No tengo local fijo. Trabajo a domicilio, en sesiones privadas y en guest spots: la tinta se arma donde coincidamos, con el mismo protocolo que en un backroom.
              </p>
              <p>
                Me interesa la pieza que envejece bien. El blackwork y el contraste son un fuerte de mi archivo —línea, sombra, peso— pero cada proyecto decide su propio lenguaje.
              </p>
              <p>
                Si llegás con una historia, la sentamos en la piel. Sin prisa, sin catálogo de relleno.
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {facts.map((f) => (
                <div key={f.n} className="border-t border-border pt-4">
                  <p className="font-cinzel text-[10px] tracking-[0.28em] text-angelux-steel">{f.n}</p>
                  <h3 className="mt-2 font-metal text-2xl text-primary">{f.t}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{f.d}</p>
                </div>
              ))}
            </div>

            <Link
              to="/sobre-mi"
              className="mt-10 inline-flex items-center font-cinzel text-xs tracking-[0.28em] text-angelux-steel hover:text-primary"
            >
              LEER QUIÉN SOY →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
