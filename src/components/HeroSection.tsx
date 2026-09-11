import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SocialLinks from "@/components/SocialLinks";
import { heroCopy, quoteCta } from "@/data/copy";

const HERO_IMG = "/hero-jonathan.jpg";

const meta = [
  { k: "Ciudad", v: "Medellín" },
  { k: "Fuerte", v: "Realismo" },
  { k: "Oficio", v: "Sombras" },
];

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-background">
      <div className="absolute inset-0 md:right-auto md:w-[52%]">
        <img
          src={HERO_IMG}
          alt=""
          className="h-full w-full object-cover object-[center_42%] contrast-110 md:object-[center_58%]"
        />
        <div className="absolute inset-0 bg-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/45 to-background/25 md:hidden" />
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              "linear-gradient(to right, hsl(var(--background) / 0.2) 0%, hsl(var(--background) / 0.2) 22%, hsl(var(--background) / 0.7) 62%, hsl(var(--background) / 0.95) 86%, hsl(var(--background)) 100%)",
          }}
        />
        <div className="absolute inset-0 ink-texture opacity-40" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col px-4 pt-28 text-center md:ml-auto md:w-[46%] md:items-end md:px-8 md:pr-12 md:pt-32 md:text-right lg:px-14 lg:pr-16">
        <motion.p
          className="font-cinzel text-[10px] tracking-[0.32em] text-muted-foreground sm:text-[11px] sm:tracking-[0.42em]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          MEDELLÍN
        </motion.p>

        <div className="flex flex-1 flex-col justify-center gap-1 py-6 md:items-end md:py-10">
          <motion.h1
            className="font-metal leading-[0.82] tracking-wide text-primary"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.9 }}
          >
            <span className="block text-5xl drop-shadow-[0_0_48px_hsla(215,60%,32%,0.45)] sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl">
              {heroCopy.title}
            </span>
            <span className="mt-2 block font-cinzel text-lg tracking-[0.42em] text-angelux-steel sm:text-xl md:text-2xl">
              {heroCopy.titleAccent}
            </span>
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-sm font-cinzel text-sm tracking-[0.12em] text-primary sm:mt-8 sm:max-w-xl sm:text-base md:mx-0"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          >
            {heroCopy.lead}
          </motion.p>

          <motion.p
            className="mx-auto mt-4 max-w-sm font-montserrat text-sm leading-relaxed text-muted-foreground sm:max-w-md sm:text-base md:mx-0"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
          >
            {heroCopy.body}
          </motion.p>

          <motion.div
            className="mt-8 flex w-full flex-col items-center gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center md:justify-end"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
          >
            <Link to="/contacto" className="btn-stencil px-7 py-3.5 text-center font-cinzel text-xs tracking-[0.18em] sm:px-8 sm:py-4">
              {quoteCta.toUpperCase()}
            </Link>
            <Link
              to="/galeria"
              className="inline-flex items-center justify-center border border-primary/25 px-8 py-3.5 font-cinzel text-xs tracking-[0.24em] text-muted-foreground transition-colors hover:border-angelux-steel hover:text-primary sm:py-4"
            >
              VER GALERÍA
            </Link>
          </motion.div>

          <motion.div
            className="mt-5 flex justify-center sm:mt-8 md:justify-end"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <SocialLinks variant="hero" className="justify-center md:justify-end" />
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-3 border-t border-white/10 bg-background/80 backdrop-blur-md">
        {meta.map((item, i) => (
          <div
            key={item.k}
            className={`px-2 py-2.5 text-center sm:px-4 sm:py-3 md:px-8 md:py-3.5 md:text-right ${i < meta.length - 1 ? "border-r border-white/10" : ""}`}
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
