import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin } from "lucide-react";
import { galleryAlt, homeHighlights, homeShowcase } from "@/data/gallery";

const ROTATE_MS = 6000;

const HomeGallery = () => {
  const [index, setIndex] = useState(0);
  const active = homeShowcase[index];

  useEffect(() => {
    const timer = window.setTimeout(() => setIndex((i) => (i + 1) % homeShowcase.length), ROTATE_MS);
    return () => window.clearTimeout(timer);
  }, [index]);

  return (
    <section className="relative overflow-hidden border-y border-border">
      <div className="pointer-events-none absolute inset-0 ink-texture opacity-40" />

      <div className="relative grid min-h-0 lg:min-h-[92vh] lg:grid-cols-12">
        <div className="group relative min-h-[56vh] overflow-hidden sm:min-h-[62vh] lg:col-span-8 lg:min-h-[92vh]">
          <AnimatePresence mode="wait">
            <motion.img
              key={active.id}
              src={active.image}
              alt={galleryAlt(active)}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55 }}
              className="absolute inset-0 h-full w-full object-cover object-[center_30%] contrast-110 transition-[filter] duration-700"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-background/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/20" />

          <div className="absolute left-1/2 top-24 -translate-x-1/2 md:left-10 md:translate-x-0">
            <p className="ink-stamp">MANGAS COMPLETAS</p>
          </div>

          <div className="absolute bottom-8 left-6 right-6 text-center md:left-10 md:right-auto md:max-w-lg md:text-left">
            <p className="font-cinzel text-[10px] tracking-[0.35em] text-angelux-steel">
              {active.zoneLabel} · {active.styleLabel}
            </p>
            <h2 className="mt-2 font-metal text-4xl text-primary md:text-6xl">{active.title}</h2>
            <p className="mt-3 flex items-center justify-center gap-2 font-montserrat text-sm text-muted-foreground md:justify-start">
              <MapPin className="h-4 w-4 text-angelux-steel" />
              {active.location} · {active.zoneLabel} · {active.styleLabel}
            </p>
            <div className="mt-5 flex justify-center gap-2 md:justify-start">
              {homeShowcase.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Ver ${item.title}`}
                  className={`h-1 transition-all duration-500 ${i === index ? "w-10 bg-primary" : "w-5 bg-white/25 hover:bg-white/50"}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="relative flex flex-col justify-between border-t border-border bg-background/80 p-6 text-center lg:col-span-4 lg:border-l lg:border-t-0 lg:p-8 lg:text-left">
          <div>
            <p className="mb-2 font-cinzel text-[11px] tracking-[0.4em] text-angelux-steel">RECIÉN SALIDOS</p>
            <h3 className="font-metal text-3xl text-primary md:text-4xl">Últimos trabajos</h3>
            <p className="mx-auto mt-4 max-w-sm font-montserrat text-sm leading-relaxed text-muted-foreground lg:mx-0">
              Lo más reciente que ha salido del estudio. El archivo completo está en galería: más piezas, más sombra, más piel.
            </p>
          </div>

          <div className="my-8 grid grid-cols-2 gap-4">
            {homeHighlights.map((item, i) => (
              <Link
                key={item.id}
                to="/galeria"
                className={`flash-card group block text-left ${i % 2 ? "sm:translate-y-4" : "sm:-translate-y-1"}`}
                style={{ transform: `rotate(${i % 2 ? 2.4 : -1.8}deg)` }}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={item.image}
                    alt={galleryAlt(item)}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  {item.featured && (
                    <span className="absolute left-2 top-2 bg-primary px-1.5 py-0.5 font-cinzel text-[8px] tracking-[0.2em] text-primary-foreground">
                      NUEVO
                    </span>
                  )}
                </div>
                <p className="mt-2 truncate px-1 font-cinzel text-[10px] tracking-[0.18em] text-muted-foreground">
                  {item.title}
                </p>
              </Link>
            ))}
          </div>

          <Link
            to="/galeria"
            className="btn-stencil inline-flex w-full items-center justify-center gap-2 px-6 py-4 font-cinzel text-xs tracking-[0.28em]"
          >
            ENTRAR AL ARCHIVO
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeGallery;
