import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const portrait = "/gallery/mangas/vikingo.jpg";

const facts = [
  { t: "Medellín", d: "Acá se arma la sesión y se firma la piel." },
  { t: "Realismo", d: "Sombras, volumen, luz. El detalle que se aguanta de cerca." },
  { t: "Única", d: "No se copia de un catálogo: se construye con vos." },
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
          QUIÉN SOY
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
                  alt="Manga de realismo Angelux Ink"
                  className="h-full w-full object-cover contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
                <span className="ink-stamp absolute left-4 top-4">JONATHAN</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="mb-3 font-cinzel text-[11px] tracking-[0.32em] text-muted-foreground">TATUADOR · MEDELLÍN</p>
            <h2 className="font-metal text-3xl text-primary sm:text-4xl md:text-6xl">
              Si la piel va a hablar, que hable fuerte.
            </h2>
            <div className="mt-8 max-w-xl space-y-4 font-montserrat text-sm leading-relaxed text-muted-foreground md:text-base">
              <p>
                Soy Jonathan. Tatuo en Medellín. Realismo y sombras: el volumen, la luz, el silencio entre un negro y un gris. No trabajo para el filtro. Trabajo para el que se acerca.
              </p>
              <p>
                Cada pieza es única. Se piensa con vos, se ejecuta con calma y se entrega con el mismo compromiso con el que se empieza. Profesionalismo no es un letrero: es el trazo, el detalle, y estar cuando la tinta todavía arde.
              </p>
              <p>Si buscás arte en la piel —no relleno de catálogo— escribime. Hagamos algo que se lleve toda la vida.</p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {facts.map((f) => (
                <div key={f.t} className="border-t border-border pt-4">
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
