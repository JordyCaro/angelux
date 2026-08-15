import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import InkBackground from "./InkBackground";
import GeometryCorners from "./GeometryCorners";
import InkMarquee from "./InkMarquee";

const stats = [
  { value: "B&W", label: "Solo tinta negra" },
  { value: "01", label: "Artista / estudio" },
  { value: "∞", label: "Piezas a medida" },
];

const HeroSection = () => {
  return (
    <section id="hero" className="relative flex min-h-screen flex-col overflow-hidden ink-texture">
      <InkBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent to-background" />

      <motion.div
        className="pointer-events-none absolute inset-0 opacity-40"
        animate={{
          background: [
            "radial-gradient(circle at 18% 40%, hsl(var(--angelux-steel) / 0.45) 0%, transparent 36%)",
            "radial-gradient(circle at 78% 55%, hsl(var(--angelux-blue) / 0.55) 0%, transparent 38%)",
            "radial-gradient(circle at 50% 80%, hsl(var(--angelux-steel) / 0.4) 0%, transparent 34%)",
            "radial-gradient(circle at 18% 40%, hsl(var(--angelux-steel) / 0.45) 0%, transparent 36%)",
          ],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
      />

      <GeometryCorners />

      <p className="pointer-events-none absolute left-3 top-1/2 hidden -translate-y-1/2 font-cinzel text-[10px] tracking-[0.5em] text-muted-foreground/70 [writing-mode:vertical-rl] md:left-6 md:block">
        EST. MMXXVI — ATELIER
      </p>
      <p className="pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 rotate-180 font-cinzel text-[10px] tracking-[0.5em] text-muted-foreground/70 [writing-mode:vertical-rl] md:right-6 md:block">
        BLACKWORK / GREY
      </p>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-4 pb-8 pt-28 md:px-8">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <motion.p
              className="mb-5 font-cinzel text-[11px] tracking-[0.45em] text-angelux-steel"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              ESTUDIO DE TINTA NEGRA
            </motion.p>

            <motion.h1
              className="font-metal leading-[0.85] tracking-wide text-primary"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.28, duration: 0.85 }}
            >
              <span className="block text-[18vw] drop-shadow-[0_0_32px_hsla(215,60%,32%,0.45)] md:text-[9.5rem]">
                ANGELUX
              </span>
              <span className="mt-2 flex items-center gap-5 text-5xl text-primary/75 md:text-7xl">
                INK
                <motion.span
                  className="h-px flex-1 bg-gradient-to-r from-angelux-steel to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.9, duration: 1 }}
                  style={{ transformOrigin: "left" }}
                />
              </span>
            </motion.h1>
          </div>

          <motion.div
            className="lg:col-span-4 lg:pb-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8 }}
          >
            <p className="mb-8 max-w-sm font-montserrat text-base leading-relaxed text-muted-foreground">
              Blackwork, black & grey y realismo. Piezas a medida, con contraste, sombra y una sola obsesión: el blanco y negro.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contacto" className="btn-stencil px-7 py-3.5 font-cinzel text-xs tracking-[0.22em]">
                RESERVA TU CITA
              </Link>
              <Link
                to="/galeria"
                className="inline-flex items-center border border-primary/25 px-7 py-3.5 font-cinzel text-xs tracking-[0.22em] text-muted-foreground transition-colors hover:border-angelux-steel hover:text-primary"
              >
                VER ARCHIVO
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 grid grid-cols-3 gap-px border border-border/70 bg-border/70"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="bg-background/80 px-4 py-5 text-center md:px-6">
              <p className="font-metal text-2xl text-primary md:text-3xl">{stat.value}</p>
              <p className="mt-1 font-cinzel text-[10px] tracking-[0.22em] text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="relative z-10 mt-auto">
        <InkMarquee />
      </div>
    </section>
  );
};

export default HeroSection;
