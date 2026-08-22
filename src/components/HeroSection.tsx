import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SocialLinks from "@/components/SocialLinks";

const HERO_IMG = "/gallery/mangas/zeus-lobo.jpg";

const meta = [
  { k: "Ciudad", v: "Medellín" },
  { k: "Fuerte", v: "Realismo" },
  { k: "Oficio", v: "Sombras" },
];

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden">
      <img
        src={HERO_IMG}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-[center_30%] contrast-110"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-background/50" />
      <div className="absolute inset-0 ink-texture opacity-50" />

      <div className="relative z-10 flex flex-1 flex-col px-4 pt-28 text-center md:px-10 md:pt-32 md:text-left lg:px-16">
        <motion.p
          className="font-cinzel text-[10px] tracking-[0.32em] text-muted-foreground sm:text-[11px] sm:tracking-[0.42em]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          MEDELLÍN
        </motion.p>

        <div className="flex flex-1 flex-col justify-center py-8 md:py-10">
          <motion.p
            className="mb-4 font-cinzel text-[10px] tracking-[0.28em] text-muted-foreground sm:mb-6 sm:text-[11px] sm:tracking-[0.38em]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            TATTOO ARTIST · MEDELLÍN · SOMBRAS
          </motion.p>

          <motion.h1
            className="font-metal leading-[0.82] tracking-wide text-primary"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.9 }}
          >
            <span className="block text-6xl drop-shadow-[0_0_48px_hsla(215,60%,32%,0.45)] sm:text-8xl md:text-[9.5rem] lg:text-[12rem]">
              Angelux.
            </span>
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-xl font-montserrat text-sm leading-relaxed text-muted-foreground sm:mt-8 sm:text-base md:mx-0 md:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Soy Jonathan. Realismo y sombras. Cada pieza es única: se construye, no se copia.
          </motion.p>

          <motion.div
            className="mt-8 flex w-full flex-col items-center gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center md:justify-start"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
          >
            <Link to="/contacto" className="btn-stencil px-8 py-4 text-center font-cinzel text-xs tracking-[0.24em]">
              AGENDAR CITA
            </Link>
            <Link
              to="/galeria"
              className="inline-flex items-center justify-center border border-primary/25 px-8 py-4 font-cinzel text-xs tracking-[0.24em] text-muted-foreground transition-colors hover:border-angelux-steel hover:text-primary"
            >
              VER GALERÍA
            </Link>
          </motion.div>

          <motion.div
            className="mt-6 flex justify-center sm:mt-8 md:justify-start"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <SocialLinks variant="hero" />
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-3 border-t border-white/10 bg-background/80 backdrop-blur-md">
        {meta.map((item, i) => (
          <div
            key={item.k}
            className={`px-2 py-2.5 text-center sm:px-4 sm:py-3 md:px-8 md:py-3.5 md:text-left ${i < meta.length - 1 ? "border-r border-white/10" : ""}`}
          >
            <p className="font-cinzel text-[8px] tracking-[0.18em] text-muted-foreground sm:text-[10px] sm:tracking-[0.28em]">{item.k}</p>
            <p className="mt-0.5 break-words font-metal text-[13px] text-primary sm:text-lg md:text-xl">{item.v}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
