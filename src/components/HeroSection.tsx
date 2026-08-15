import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SocialLinks from "@/components/SocialLinks";

const HERO_IMG =
  "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?auto=format&fit=crop&w=2400&q=80";

const meta = [
  { k: "Oficio", v: "Itinerante" },
  { k: "Fuerte", v: "Blackwork" },
  { k: "Sesión", v: "Domicilio / Guest" },
];

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden">
      <motion.img
        src={HERO_IMG}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-[center_20%] grayscale-[0.45] contrast-125"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-background/50" />
      <div className="absolute inset-0 ink-texture opacity-50" />
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 70% 40%, hsl(var(--angelux-steel) / 0.45) 0%, transparent 42%)",
            "radial-gradient(circle at 30% 70%, hsl(var(--angelux-blue) / 0.5) 0%, transparent 40%)",
            "radial-gradient(circle at 70% 40%, hsl(var(--angelux-steel) / 0.45) 0%, transparent 42%)",
          ],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 flex flex-1 flex-col px-4 pt-24 md:px-10 md:pt-28 lg:px-16">
        <div className="flex items-start justify-between gap-4">
          <motion.p
            className="font-cinzel text-[10px] tracking-[0.32em] text-angelux-steel sm:text-[11px] sm:tracking-[0.42em]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            001 / ESTUDIO ITINERANTE
          </motion.p>
          <motion.div
            className="hidden items-center gap-3 sm:flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <SocialLinks />
          </motion.div>
        </div>

        <div className="flex flex-1 flex-col justify-center py-8 md:py-10">
          <motion.p
            className="mb-4 font-cinzel text-[10px] tracking-[0.28em] text-muted-foreground sm:mb-6 sm:text-[11px] sm:tracking-[0.38em]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            TATTOO ARTIST · DOMICILIO · GUEST
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
            className="mt-6 max-w-xl font-montserrat text-sm leading-relaxed text-muted-foreground sm:mt-8 sm:text-base md:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Piezas a medida. El blackwork y el contraste son un fuerte; la sesión se arma donde coincidamos.
          </motion.p>

          <motion.div
            className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:flex-wrap"
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
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-2 border-t border-white/10 bg-background/80 backdrop-blur-md md:grid-cols-4">
        {meta.map((item) => (
          <div key={item.k} className="border-b border-white/10 px-3 py-4 text-center odd:border-r sm:px-4 sm:py-5 md:border-b-0 md:border-r md:px-8 md:text-left">
            <p className="font-cinzel text-[9px] tracking-[0.22em] text-muted-foreground sm:text-[10px] sm:tracking-[0.28em]">{item.k}</p>
            <p className="mt-1 break-words font-metal text-base text-primary sm:text-xl md:text-2xl">{item.v}</p>
          </div>
        ))}
        <a
          href="#quien-soy"
          className="flex items-center justify-center gap-3 border-b border-white/10 px-4 py-4 text-muted-foreground transition-colors hover:text-primary md:border-b-0 md:justify-between md:px-8 md:py-5"
        >
          <span className="font-cinzel text-[10px] tracking-[0.28em]">Scroll</span>
          <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
            <ChevronDown className="h-5 w-5" />
          </motion.span>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
